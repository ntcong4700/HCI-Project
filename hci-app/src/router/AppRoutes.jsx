import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/Login/LoginPage';
import OverviewPage from '../pages/Overview/OverviewPage';
import AppointmentPage from '../pages/Appointment/AppointmentPage';
import MyPatientsPage from '../pages/MyPatient/MyPatientPage';
import MedicinePage from '../pages/Medicine/MedicinePage';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/overview" element={<OverviewPage />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            <Route path="/mypatients" element={<MyPatientsPage />} />
            <Route path="/medicine" element={<MedicinePage />} />
            <Route path="/messenger" element={<MessengerPage />} />
        </Routes>
    );
}
