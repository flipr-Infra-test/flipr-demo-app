const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 80;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/health', (req, res) => {
  res.json({ status: 'UP', service: 'demo-web', version: '1.0.0' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Demo Web deploy Server running on port ${PORT}`);
});
