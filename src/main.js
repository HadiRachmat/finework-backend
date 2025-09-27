import App from './configuration/App.js';
import { v4 as uuidv4 } from 'uuid';

const randomCode = uuidv4();
console.log(`Application CodeS:  ${randomCode}`);

const PORT = 3000;

App.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
