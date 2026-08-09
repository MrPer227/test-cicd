const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('🚀 CI/CD 测试成功！当前时间: ' + new Date().toLocaleString('zh-CN'));
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`✅ 应用运行在 http://0.0.0.0:${port}`);
});