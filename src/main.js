import App from './configuration/App.js';

const PORT = 3000;

App.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});