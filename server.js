const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const version = require('./package.json').version;

// Root route
app.get('/', (req, res) => {
  res.send(`
    <h1>🚀 Node.js App Deployed to GKE via Jenkins CI/CD</h1>
    <p><strong>Version:</strong> ${version}</p>
    <p><strong>Environment:</strong> Production (GKE)</p>
    <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
  `);
});

// Health check route
app.get('/healthz', (req, res) => {
  res.json({ status: 'ok', version });
});

// Start server
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
