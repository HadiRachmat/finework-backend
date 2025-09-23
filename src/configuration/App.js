import express from 'express';
import dotenv from 'dotenv';
import AdminRoutes from '../interface/routes/admin/index.js';
import StaffRoutes from '../interface/routes/staff/index.js';

dotenv.config();

const App = express();
App.use(express.json());

App.use(AdminRoutes);
App.use(StaffRoutes);

export default App;
