import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { AvatarSelector } from '../components/AvatarSelector';
import { sounds } from '../utils/sounds';
import { ALL_QUIZZES } from '../utils/quizzes';
import { Trophy, Users, Play, Settings, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Home() {
  const navigate = useNavigate();
  const [roomCode, setRoomCode] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [avatar, setAvatar] = useState('https://api.dicebear.com/7.x/avataaars/svg?seed=base');
  const [showJoin, setShowJoin] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState(0);

  const handleJoin = () => {
    if (!roomCode || !playerName) return;
    sounds.play('click');
    navigate(`/lobby/${roomCode.toUpperCase()}?quiz=${selectedQuiz}`, { state: { playerName, avatar } });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 relative">
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-16 relative z-10"
      >
        <div className="flex items-center justify-center gap-6 mb-4">
          <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-glow-cyan rotate-3">
             <Trophy className="w-12 h-12 text-white" />
          </div>
          <div className="text-left">
            <h1 className="text-7xl font-black tracking-tighter uppercase leading-none italic">
              QUIZPHERA
            </h1>
            <p className="text-sm font-mono uppercase tracking-[0.2em] text-cyan-400 mt-2">Plataforma de Gamificaciones y Desafíos</p>
          </div>
        </div>
      </motion.div>

      {!showJoin ? (
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl relative z-10"
        >
          <Card className="glass group hover:bg-white/10 transition-all cursor-pointer border-white/10 overflow-hidden" onClick={() => setShowJoin(true)}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl -mr-16 -mt-16 group-hover:bg-cyan-500/20 transition-all"></div>
            <CardContent className="flex flex-col items-center justify-center p-16 text-center">
              <Users className="w-20 h-20 mb-8 text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all" />
              <CardTitle className="text-4xl mb-4 uppercase tracking-tight">Entrar al Juego</CardTitle>
              <p className="text-white/60 font-medium">Únete a una misión activa con un código de sala</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-immersive-purple to-pink-900 border-white/10 text-white hover:scale-[1.02] transition-all cursor-pointer relative overflow-hidden group shadow-2xl" onClick={() => navigate('/admin')}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <CardContent className="flex flex-col items-center justify-center p-16 text-center">
              <Settings className="w-20 h-20 mb-8 text-pink-400 group-hover:rotate-45 transition-transform" />
              <CardTitle className="text-4xl mb-4 uppercase tracking-tight">Anfitrión Pro</CardTitle>
              <p className="text-white/70 font-medium">Gestiona trivias y lidera la sesión en tiempo real</p>
            </CardContent>
          </Card>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-lg relative z-10"
        >
          <Card className="glass border-white/20 shadow-2xl overflow-hidden">
             <div className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 w-full"></div>
            <CardContent className="p-10 space-y-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Código de Sala</label>
                  <Input 
                    placeholder="ABCD" 
                    className="bg-black/40 border-white/10 text-4xl text-center h-20 uppercase font-black text-cyan-400 tracking-widest focus:ring-cyan-500"
                    maxLength={4}
                    value={roomCode}
                    onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                  />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Tu Identidad</label>
                  <Input 
                    placeholder="Nombre del Jugador" 
                    className="bg-black/40 border-white/10 text-xl h-14"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Avatar del Operativo</label>
                <AvatarSelector onSelect={setAvatar} currentAvatar={avatar} />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Objetivo del Desafío (Cuestionario)</label>
                <div className="grid grid-cols-2 gap-3">
                    {ALL_QUIZZES.map((quiz, idx) => (
                        <div 
                            key={idx}
                            onClick={() => setSelectedQuiz(idx)}
                            className={`p-3 rounded-xl border transition-all cursor-pointer ${selectedQuiz === idx ? 'bg-cyan-500/20 border-cyan-500/50 ring-1 ring-cyan-500/30' : 'bg-black/40 border-white/10 hover:border-white/20'}`}
                        >
                            <div className="flex items-center gap-2">
                                <BookOpen className={`w-4 h-4 ${selectedQuiz === idx ? 'text-cyan-400' : 'text-white/20'}`} />
                                <span className={`text-[10px] font-bold uppercase tracking-tight truncate ${selectedQuiz === idx ? 'text-white' : 'text-white/40'}`}>
                                    {quiz.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button variant="ghost" className="flex-1 h-16 text-white/50 hover:text-white" onClick={() => setShowJoin(false)}>Cancelar</Button>
                <Button className="flex-[2] h-16 text-2xl font-black bg-cyan-500 hover:bg-cyan-600 text-white shadow-glow-cyan uppercase italic tracking-tighter" onClick={handleJoin}>
                  Iniciar Desafío
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
      
      <div className="mt-20 relative z-10 flex flex-col items-center gap-2">
          <div className="flex gap-4">
            <Badge variant="outline" className="bg-white/5 border-white/10 text-white/40">v2.4.0-PRO</Badge>
            <Badge variant="outline" className="bg-white/5 border-white/10 text-white/40">SECURE NODE</Badge>
          </div>
          <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/20">© 2026 Mg. Lic. Prof. Leandro Guerschberg - UNPAZ</p>
      </div>
    </div>
  );
}
