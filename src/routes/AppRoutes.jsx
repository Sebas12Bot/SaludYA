import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; // <-- Añadido para las alertas
import LoginPage from '../pages/Login/LoginPage';
import HomePage from '../pages/Home/HomePage';
import AgendarPage from '../pages/Agendar/AgendarPage';
import ConfirmacionPage from '../pages/Confirmacion/ConfirmacionPage';
import DetallesCitasPage from '../pages/Citas/DetallesCitasPage';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
      
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/agendar" element={<AgendarPage />} />
        <Route path="/confirmacion" element={<ConfirmacionPage />} />
        <Route path="/citas" element={<DetallesCitasPage />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}