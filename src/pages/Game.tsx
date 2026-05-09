import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Progress } from '../components/ui/Progress';
import { sounds } from '../utils/sounds';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Clock, CheckCircle2, XCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { RankingBoard } from '../components/RankingBoard';

import { ALL_QUIZZES } from '../utils/quizzes';

const COLORS = [
  'bg-quiz-red hover:bg-red-500',
  'bg-quiz-blue hover:bg-blue-500',
  'bg-quiz-yellow hover:bg-yellow-500',
  'bg-quiz-green hover:bg-green-500'
];

const SHAPES = ['▲', '◆', '●', '■'];

export function Game() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Select quiz based on Search Param or fallback to ID
  const searchParams = new URLSearchParams(location.search);
  const quizParam = searchParams.get('quiz');
  const quizIndex = quizParam && !isNaN(parseInt(quizParam)) 
    ? parseInt(quizParam) % ALL_QUIZZES.length 
    : (id && !isNaN(parseInt(id)) ? parseInt(id) % ALL_QUIZZES.length : 0);
  
  const quiz = ALL_QUIZZES[quizIndex];

  const [currentQ, setCurrentQ] = useState(0);
  const [timeLeft, setTimeLeft] = useState(quiz.questions[0].timeLimit);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (gameOver) return;

    if (timeLeft > 0 && !showResult) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResult) {
      handleAnswer(-1); // Timeout
    }
  }, [timeLeft, showResult, gameOver]);

  const handleAnswer = (index: number) => {
    if (showResult) return;
    
    setSelectedAnswer(index);
    const correct = index === quiz.questions[currentQ].correctAnswer;
    
    if (correct) {
      const points = Math.round((timeLeft / quiz.questions[currentQ].timeLimit) * 1000);
      setScore(score + points);
      sounds.play('correct');
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      sounds.play('wrong');
    }

    setShowResult(true);
    
    setTimeout(() => {
      if (currentQ < quiz.questions.length - 1) {
        setCurrentQ(currentQ + 1);
        setTimeLeft(quiz.questions[currentQ + 1].timeLimit);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setGameOver(true);
      }
    }, 3000);
  };

  if (gameOver) {
    const mockRankings = [
      { id: 'me', name: 'Tú', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=me', score: score, rank: 1 },
      { id: '2', name: 'Maria', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=maria', score: Math.round(score * 0.8), rank: 2 },
      { id: '3', name: 'Carlos', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=carlos', score: Math.round(score * 0.7), rank: 3 },
      { id: '4', name: 'Ana', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ana', score: Math.round(score * 0.5), rank: 4 },
      { id: '5', name: 'Luis', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=luis', score: Math.round(score * 0.4), rank: 5 },
    ].sort((a, b) => b.score - a.score).map((entry, i) => ({ ...entry, rank: i + 1 }));

    return (
      <div className="min-h-screen py-12 px-4 overflow-auto scrollbar-hide">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
          <h1 className="text-6xl font-black italic text-center uppercase tracking-tighter">Ranking Final</h1>
          <RankingBoard entries={mockRankings} />
          <div className="flex gap-4 justify-center mt-12 pb-24">
            <Button size="lg" className="h-16 px-8 text-xl" onClick={() => navigate('/')}>Volver al Inicio</Button>
            <Button size="lg" variant="secondary" className="h-16 px-8 text-xl" onClick={() => window.location.reload()}>Jugar de Nuevo</Button>
          </div>
        </motion.div>
      </div>
    );
  }


  const question = quiz.questions[currentQ];
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="min-h-screen flex flex-col p-6 lg:p-10 z-10">
      {/* Header Area */}
      <header className="flex justify-between items-center mb-8 bg-black/20 backdrop-blur-md p-4 rounded-2xl border border-white/10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center shadow-glow-cyan">
            <span className="text-2xl font-black">T!</span>
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight uppercase">Quizphera</h1>
            <p className="text-[10px] text-cyan-400 font-mono uppercase tracking-widest">Pregunta {currentQ + 1} de {quiz.questions.length}</p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
            <div className="bg-white/5 px-4 py-2 rounded-full border border-white/10 flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium uppercase tracking-wider">Live: 24 Jugadores</span>
            </div>
            <div className="bg-white/10 px-6 py-2 rounded-xl font-black text-xl text-cyan-400 border border-white/10">
                {score.toLocaleString()} PTS
            </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row gap-8">
        <div className="flex-1 flex flex-col gap-6">
          {/* Question Card */}
          <div className="glass rounded-3xl p-12 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[300px]">
             {/* Timer Circle */}
             {!showResult && (
                <div className="absolute top-6 right-6">
                    <div className="w-24 h-24 rounded-full border-4 border-cyan-400 flex flex-col items-center justify-center shadow-glow-cyan bg-black/40 backdrop-blur">
                        <span className="text-[10px] font-bold text-cyan-400 uppercase">Tiempo</span>
                        <span className="text-4xl font-black tabular-nums">{timeLeft}</span>
                    </div>
                </div>
             )}

            <AnimatePresence mode="wait">
              {!showResult ? (
                <motion.div 
                  key="q"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="max-w-2xl"
                >
                  <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.3em] mb-6 block">Desafío Quizphera</span>
                  <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                    {question.text}
                  </h2>
                </motion.div>
              ) : (
                <motion.div 
                  key="r"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center flex flex-col items-center gap-4"
                >
                  {isCorrect ? (
                    <>
                      <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.4)] mb-2">
                        <CheckCircle2 className="w-20 h-20 text-white" />
                      </div>
                      <h3 className="text-5xl font-black text-green-400 uppercase tracking-tighter italic">¡CORRECTO!</h3>
                      <p className="text-xl text-green-200 font-medium">Sumaste puntos por velocidad</p>
                    </>
                  ) : (
                    <>
                      <div className="w-32 h-32 bg-red-500 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(239,68,68,0.4)] mb-2">
                        <XCircle className="w-20 h-20 text-white" />
                      </div>
                      <h3 className="text-5xl font-black text-red-400 uppercase tracking-tighter italic">INCORRECTO</h3>
                      <p className="text-xl text-red-200 font-medium">La respuesta era: <span className="text-white">{question.options[question.correctAnswer]}</span></p>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Options Grid */}
          {!showResult && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {question.options.map((opt, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(idx)}
                  className={`${COLORS[idx]} rounded-2xl p-6 text-white text-2xl font-bold flex items-center shadow-xl border-b-4 border-black/30 transition-all text-left group relative overflow-hidden`}
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-6 text-3xl group-hover:scale-110 transition-transform">
                    {SHAPES[idx]}
                  </div>
                  <span className="flex-1 drop-shadow-md">{opt}</span>
                </motion.button>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar Mini Ranking */}
        <aside className="hidden lg:flex w-80 flex-col gap-6">
            <div className="bg-black/40 rounded-3xl p-6 border border-white/10 flex-1 shadow-2xl backdrop-blur-md">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-6 flex justify-between items-center">
                    <span>Ranking Actual</span>
                    <Badge variant="outline" className="text-[8px] bg-white/5 border-white/10">LIVE</Badge>
                </h3>
                <div className="space-y-4">
                    {[
                        { name: 'Cyber-Dragons', score: score + 1200, color: 'bg-cyan-500' },
                        { name: 'Logic Hunters', score: score + 800, color: 'bg-pink-500' },
                        { name: 'Tú', score: score, color: 'bg-orange-500', isMe: true },
                        { name: 'Bit Masters', score: Math.max(0, score - 500), color: 'bg-green-500' }
                    ].sort((a, b) => b.score - a.score).map((p, i) => (
                        <div key={i} className={`flex items-center gap-3 p-3 rounded-2xl border transition-all ${p.isMe ? 'bg-cyan-500/10 border-cyan-500/30' : 'bg-white/5 border-transparent'}`}>
                            <span className={`w-6 font-mono text-xs ${p.isMe ? 'text-cyan-400' : 'opacity-50'}`}>0{i+1}</span>
                            <div className={`w-8 h-8 ${p.color} rounded-full border-2 border-white/20`}></div>
                            <div className={`flex-1 font-bold truncate text-sm ${p.isMe ? 'text-cyan-400' : ''}`}>{p.name}</div>
                            <div className={`font-mono text-xs ${p.isMe ? 'text-cyan-400' : 'opacity-70'}`}>{p.score.toLocaleString()}</div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="bg-white p-6 rounded-3xl flex flex-col items-center text-black shadow-2xl">
                <div className="w-full aspect-square bg-black flex items-center justify-center rounded-2xl p-4 mb-4">
                    <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${id}`} alt="QR" className="w-full h-full" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-tighter text-center">Escanea para unirte a la partida</span>
            </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="mt-8 h-10 border-t border-white/10 flex items-center justify-between px-2">
         <div className="flex gap-4 text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
            <span>© 2026 Mg. Lic. Prof. Leandro Guerschberg - UNPAZ</span>
            <span>Módulo Activo</span>
         </div>
         <div className="text-[10px] uppercase tracking-[0.2em] text-cyan-400 font-bold animate-pulse">
            Sincronización en tiempo real activa
         </div>
      </footer>
    </div>
  );
}
