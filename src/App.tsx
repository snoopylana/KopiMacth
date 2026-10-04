import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CompareFloatingBar } from './components/CompareFloatingBar';
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { DetailPage } from './pages/DetailPage';
import { ComparePage } from './pages/ComparePage';
import { CheckCircle2 } from 'lucide-react';

const ToastNotification: React.FC = () => {
  const { toast } = useApp();

  if (!toast) return null;

  return (
    <div className="fixed top-20 right-4 z-50 animate-in fade-in slide-in-from-top-3 duration-200">
      <div className="bg-[#2C1810] text-[#FEF3C7] px-4 py-2.5 rounded-xl shadow-lg border border-amber-900/40 text-xs font-semibold flex items-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-amber-400" />
        <span>{toast}</span>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C2420] antialiased selection:bg-[#78350F]/20">
          <Navbar />
          <ToastNotification />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/coffee-shop/:id" element={<DetailPage />} />
              <Route path="/compare" element={<ComparePage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
          <CompareFloatingBar />
          <Footer />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}
