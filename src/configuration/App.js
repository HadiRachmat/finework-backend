import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import AdminRoutes from '../interface/routes/admin/index.js';
import StaffRoutes from '../interface/routes/staff/index.js';
import AuthRoutes from '../interface/routes/public/index.js';
import { ErrorMiddleware } from '../middleware/ErrorMiddleware.js';

dotenv.config();

const App = express();
App.use(express.json());
App.use(express.urlencoded({ extended: true }));
App.use(cookieParser());

App.use(AuthRoutes);
App.use(AdminRoutes);
App.use(StaffRoutes);

App.use(ErrorMiddleware);
export default App;
