const fs = require('fs');
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}
fs.writeFileSync('dist/index.html', `<!DOCTYPE html>
<html>
<head><title>Flipr Demo Web</title></head>
<body style="font-family: Arial, sans-serif; text-align: center; padding: 50px; background: #0f172a; color: white;">
  <h1>🚀 Flipr Demo Web Application</h1>
  <p>Canary Deployment with Argo Rollouts is Active!</p>
  <div style="background: #1e293b; padding: 20px; border-radius: 8px; display: inline-block;">
    <p>Version: <strong>1.0.0</strong></p>
    <p>Status: <span style="color: #22c55e;">● Healthy</span></p>
  </div>
</body>
</html>`);
console.log('Build completed: dist/index.html created.');
