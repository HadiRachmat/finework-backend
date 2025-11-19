import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

import AdminRoutes from '../interface/routes/admin/index.js';
import StaffRoutes from '../interface/routes/staff/index.js';
import CustomerRoutes from '../interface/routes/customer/index.js';
import AuthRoutes from '../interface/routes/public/index.js';
import { ErrorMiddleware } from '../middleware/ErrorMiddleware.js';

dotenv.config();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const App = express();
App.use(
  cors({
    origin: 'http://localhost:5173', // alamat frontend kamu
    credentials: true, // agar cookie (refresh token) ikut dikirim
  })
);
App.use('/uploads', express.static(path.join(__dirname, '../../uploads')));
App.use(express.json());
App.use(express.urlencoded({ extended: true }));
App.use(cookieParser());

App.use(AuthRoutes);
App.use(AdminRoutes);
App.use(StaffRoutes);
App.use(CustomerRoutes);

App.use(ErrorMiddleware);
export default App;
