/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Lobby } from './pages/Lobby';
import { Game } from './pages/Game';
import { AdminPanel } from './pages/AdminPanel';
import { Toaster } from './components/ui/Sonner';
import { sounds } from './utils/sounds';
import { auth, db } from './lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function App() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // We try to use firebase auth if enabled
    if (auth.onAuthStateChanged) {
      const unsubscribe = auth.onAuthStateChanged((u: any) => {
        setUser(u);
      });
      return () => unsubscribe();
    }
  }, []);

  return (
    <div className="min-h-screen bg-immersive-bg text-white selection:bg-cyan-500/30 relative overflow-hidden font-sans">
      {/* Background radial gradient from theme */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#4c1d95,transparent_60%)] pointer-events-none opacity-50 z-0"></div>
      
      <div className="relative z-10 min-h-screen flex flex-col">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lobby/:id" element={<Lobby />} />
            <Route path="/game/:id" element={<Game />} />
            <Route path="/admin/*" element={<AdminPanel />} />
          </Routes>
        </BrowserRouter>
        <Toaster position="top-center" richColors />
      </div>
    </div>
  );
}

