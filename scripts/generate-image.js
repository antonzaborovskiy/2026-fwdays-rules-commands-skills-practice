#!/usr/bin/env node
/**
 * Generate image using OpenAI DALL-E 3 API
 * Usage: OPENAI_API_KEY=xxx node scripts/generate-image.js "prompt" [output.png]
 * 
 * SECURITY: Never logs API key, uses env var only
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const prompt = process.argv[2];
const outputPath = process.argv[3] || `public/images/generated-${Date.now()}.png`;

// Validate inputs
if (!prompt) {
  console.error('Usage: node generate-image.js "prompt" [output.png]');
  process.exit(1);
}

if (!process.env.OPENAI_API_KEY) {
  console.error('Error: OPENAI_API_KEY environment variable not set');
  console.error('Set it in .env file or pass directly: OPENAI_API_KEY=sk-... node ...');
  process.exit(1);
}

// SECURITY: Never log the API key
const apiKey = process.env.OPENAI_API_KEY;

// Cost estimation
const COST_PER_IMAGE = 0.04; // DALL-E 3 1024x1024
console.log(`Estimated cost: $${COST_PER_IMAGE}`);
console.log(`Prompt: "${prompt}"`);
console.log(`Output: ${outputPath}`);

// Ensure output directory exists
const outputDir = path.dirname(outputPath);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// API request
const requestData = JSON.stringify({
  model: 'dall-e-3',
  prompt: prompt,
  n: 1,
  size: '1024x1024',
  response_format: 'url'
});

const options = {
  hostname: 'api.openai.com',
  port: 443,
  path: '/v1/images/generations',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
    'Content-Length': Buffer.byteLength(requestData)
  }
};

console.log('Generating image...');

const req = https.request(options, (res) => {
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    if (res.statusCode !== 200) {
      console.error(`API Error (${res.statusCode}):`, data);
      process.exit(1);
    }
    
    try {
      const response = JSON.parse(data);
      const imageUrl = response.data[0].url;
      
      console.log('Downloading image...');
      
      // Download image
      https.get(imageUrl, (imgRes) => {
        const fileStream = fs.createWriteStream(outputPath);
        imgRes.pipe(fileStream);
        
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`✅ Image saved to: ${outputPath}`);
          console.log(`💰 Cost: $${COST_PER_IMAGE}`);
        });
      });
    } catch (e) {
      console.error('Failed to parse response:', e.message);
      process.exit(1);
    }
  });
});

req.on('error', (e) => {
  console.error('Request failed:', e.message);
  process.exit(1);
});

req.write(requestData);
req.end();
