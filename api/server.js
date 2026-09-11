const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'UP', service: 'demo-api', version: '1.0.0', uptime: process.uptime() });
});

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Flipr Backend API!', timestamp: new Date().toISOString() });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Demo API Server running on port ${PORT}`);
});
