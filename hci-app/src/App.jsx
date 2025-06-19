import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import OverviewPage from './pages/Overview/OverviewPage.jsx';
import LoginPage from './pages/Login/LoginPage';
import AppointmentPage from './pages/Appointment/AppointmentPage';
import MyPatientPage from './pages/MyPatient/MyPatientPage';
import MedicinePage from './pages/Medicine/MedicinePage';

export default function App() {
    const [activePage, setActivePage] = useState('Overview');
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(loggedIn);
    }, []);

    const MainLayout = ({ children }) => (
        <div className="flex overflow-hidden bg-[#F4F8FF] h-screen">
            {/* Sidebar */}
            <div className={`transition-all duration-300 ${sidebarCollapsed ? 'w-20' : 'w-60'}`}>
                <Sidebar
                    activePage={activePage}
                    setActivePage={setActivePage}
                    collapsed={sidebarCollapsed}
                />
            </div>
            <div className="flex-1 flex flex-col overflow-auto bg-[F4F8FF]">
                <Header toggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} activePage={activePage} />
                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    );

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/login" element={<LoginPage onLoginSuccess={() => setIsLoggedIn(true)} />} />
                <Route 
                    path="/overview" 
                    element={
                        isLoggedIn ? (
                            <MainLayout>
                                <OverviewPage />
                            </MainLayout>
                        ) : (
                            <Navigate to="/login" replace />
                        )
                    } 
                />
                <Route 
                    path="/appointment" 
                    element={
                        isLoggedIn ? (
                            <MainLayout>
                                <AppointmentPage />
                            </MainLayout>
                        ) : (
                            <Navigate to="/login" replace />
                        )
                    } 
                />
                <Route 
                    path="/my-patient" 
                    element={
                        isLoggedIn ? (
                            <MainLayout>
                                <MyPatientPage />
                            </MainLayout>
                        ) : (
                            <Navigate to="/login" replace />
                        )
                    } 
                />
                <Route 
                    path="/medicine" 
                    element={
                        isLoggedIn ? (
                            <MainLayout>
                                <MedicinePage />
                            </MainLayout>
                        ) : (
                            <Navigate to="/login" replace />
                        )
                    } 
                />
            </Routes>
        </BrowserRouter>
    );
}
