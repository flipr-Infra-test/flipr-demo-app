const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'UP', service: 'demo-api', version: '2.0.0-canary', uptime: process.uptime() });
});

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Flipr Backend API - Canary Release v2.0.0!', timestamp: new Date().toISOString() });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(Demo API Server running on port );
});
