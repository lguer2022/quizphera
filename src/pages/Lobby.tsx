import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Users, Play, LogOut, Trophy } from 'lucide-react';
import { sounds } from '../utils/sounds';
import { motion } from 'motion/react';

export function Lobby() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const userData = location.state || { playerName: 'Jugador', avatar: '' };

  const [players, setPlayers] = useState([
    { id: '1', name: userData.playerName, avatar: userData.avatar, isMe: true },
    { id: '2', name: 'Profe Maria', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=maria' },
    { id: '3', name: 'Carlos', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=carlos' },
  ]);

  const joinUrl = `${window.location.origin}/join?code=${id}`;

  useEffect(() => {
    sounds.playBg();
    return () => sounds.stopBg();
  }, []);

  const handleStart = () => {
    sounds.play('click');
    const searchParams = new URLSearchParams(location.search);
    const quizId = searchParams.get('quiz');
    if (quizId) {
      navigate(`/game/${id}?quiz=${quizId}`);
    } else {
      navigate(`/game/${id}`);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden p-6 lg:p-10 flex flex-col z-10 font-sans">
      <div className="flex justify-between items-center mb-10 bg-black/20 backdrop-blur-md p-4 rounded-2xl border border-white/10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center shadow-glow-cyan">
             <Trophy className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-black italic uppercase tracking-tighter">QUIZPHERA <span className="text-cyan-400">LOBBY</span></h1>
            <p className="text-[10px] text-white/40 font-mono uppercase tracking-widest">En espera de más operativos</p>
          </div>
        </div>
        <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-white/10 rounded-xl" onClick={() => navigate('/')}>
          <LogOut className="mr-2 h-4 w-4" /> ABORTAR MISIÓN
        </Button>
      </div>

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1">
        <div className="lg:col-span-4 space-y-6 flex flex-col">
          <Card className="glass border-white/10 text-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-cyan-400 to-blue-600 h-1 w-full"></div>
            <CardContent className="p-8 flex flex-col items-center text-center">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400 mb-4">Código de Acceso</h2>
              <div className="text-7xl font-black mb-8 bg-white/5 border border-white/10 text-cyan-400 px-8 py-4 rounded-2xl shadow-glow-cyan font-mono tracking-tighter italic">
                {id}
              </div>
              <div className="bg-white p-4 rounded-2xl mb-6 shadow-2xl">
                <QRCodeSVG value={joinUrl} size={200} bgColor="#ffffff" fgColor="#000000" />
              </div>
              <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30 uppercase text-[10px] py-1 px-4 tracking-widest font-mono">
                Scan to Infiltrate
              </Badge>
            </CardContent>
          </Card>

          <Button 
            className="w-full h-20 text-3xl font-black bg-cyan-500 hover:bg-cyan-600 shadow-glow-cyan text-white rounded-3xl transition-all uppercase italic tracking-tighter mt-auto" 
            onClick={handleStart}
          >
            <Play className="mr-3 h-10 w-10 fill-current" /> ¡INICIAR QUEST!
          </Button>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="flex justify-between items-end mb-2">
            <div>
                <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-cyan-400 mb-2">Live Registry</h2>
                <h2 className="text-5xl font-black uppercase tracking-tight italic">Operativos Conectados</h2>
            </div>
            <Badge variant="secondary" className="text-3xl font-black px-6 py-2 bg-white/5 border border-white/10 rounded-2xl text-cyan-400 uppercase tracking-tighter">
                {players.length} / 50
            </Badge>
          </div>

          <div className="glass rounded-3xl border-white/10 p-8 flex-1 shadow-2xl relative overflow-hidden">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                {players.map((p, idx) => (
                  <motion.div 
                    key={p.id}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col items-center p-6 bg-white/5 rounded-3xl border border-white/5 backdrop-blur-sm group hover:bg-white/10 transition-all cursor-default"
                  >
                    <div className="w-24 h-24 rounded-full border-4 border-cyan-400/20 overflow-hidden mb-4 bg-white/10 group-hover:border-cyan-400 transition-colors shadow-2xl">
                      <img src={p.avatar} alt={p.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="font-bold text-center uppercase tracking-tight text-sm">
                      {p.name} {p.id === '1' && <span className="text-cyan-400 ml-1">(YOU)</span>}
                    </span>
                    {p.id === '1' && <Badge variant="outline" className="mt-2 text-[8px] bg-cyan-500/10 border-cyan-500/30 text-cyan-400">HOST</Badge>}
                  </motion.div>
                ))}
              </div>
              
              {players.length < 8 && (
                <div className="mt-12 text-center text-white/20 font-mono uppercase text-xs tracking-widest animate-pulse">
                     Waiting for remaining team members...
                </div>
              )}
          </div>
        </div>
      </div>
      
      <footer className="mt-8 border-t border-white/5 pt-4 flex justify-between text-[10px] text-white/30 font-mono uppercase tracking-widest">
         <span>Session Node: WS-LOBBY-01</span>
         <span>© 2026 Mg. Lic. Prof. Leandro Guerschberg - UNPAZ</span>
         <span>Security: Encrypted AES-256</span>
      </footer>
    </div>
  );
}
