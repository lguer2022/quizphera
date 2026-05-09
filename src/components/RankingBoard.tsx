import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card';
import { Badge } from './ui/badge';
import { Trophy, Medal, Award } from 'lucide-react';
import { motion } from 'motion/react';

interface RankingEntry {
  id: string;
  name: string;
  avatar: string;
  score: number;
  rank: number;
}

interface RankingBoardProps {
  entries: RankingEntry[];
}

export function RankingBoard({ entries }: RankingBoardProps) {
  const topThree = entries.slice(0, 3);
  const others = entries.slice(3);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-16 py-12 px-4 relative z-10">
      <div className="flex justify-center items-end gap-2 md:gap-8 h-80 md:h-96">
        {/* Podium */}
        {topThree[1] && (
          <PodiumItem 
            entry={topThree[1]} 
            height="h-[70%]" 
            color="bg-slate-400" 
            label="2nd"
            medal={<Medal className="w-8 h-8 text-slate-200" />} 
          />
        )}
        {topThree[0] && (
          <PodiumItem 
            entry={topThree[0]} 
            height="h-[90%]" 
            color="bg-cyan-500 shadow-glow-cyan" 
            label="1st"
            medal={<Trophy className="w-12 h-12 text-cyan-200" />} 
            isFirst
          />
        )}
        {topThree[2] && (
          <PodiumItem 
            entry={topThree[2]} 
            height="h-[60%]" 
            color="bg-orange-600" 
            label="3rd"
            medal={<Award className="w-8 h-8 text-orange-200" />} 
          />
        )}
      </div>

      <Card className="glass rounded-3xl border-white/10 shadow-2xl overflow-hidden">
        <CardContent className="p-0">
          <div className="divide-y divide-white/5">
            {others.map((entry, idx) => (
              <motion.div 
                key={entry.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center justify-between p-6 hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-6">
                  <span className="text-xl font-mono text-white/30 w-8">0{entry.rank}</span>
                  <div className="w-14 h-14 rounded-full border-2 border-white/10 bg-white/5 overflow-hidden">
                    <img src={entry.avatar} alt={entry.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-xl font-bold uppercase tracking-tight">{entry.name}</span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <span className="text-2xl font-black text-cyan-400 tabular-nums">{entry.score.toLocaleString()}</span>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-white/40">Points Accum</p>
                  </div>
                  <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30">ELITE</Badge>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function PodiumItem({ entry, height, color, label, medal, isFirst }: { entry: RankingEntry; height: string; color: string; label: string; medal: React.ReactNode; isFirst?: boolean }) {
  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`flex flex-col items-center flex-1 max-w-[240px]`}
    >
      <div className={`relative mb-6 ${isFirst ? 'scale-110' : ''}`}>
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white/20 overflow-hidden shadow-2xl bg-white/10">
            <img src={entry.avatar} alt={entry.name} className="w-full h-full object-cover" />
        </div>
        <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-black text-xs shadow-xl">
             {label}
        </div>
      </div>
      <div className={`w-full ${height} ${color} rounded-t-[2.5rem] flex flex-col items-center justify-center p-6 shadow-2xl relative border-t border-white/20`}>
        <div className="absolute -top-8 bg-black/40 p-3 rounded-full backdrop-blur-xl border border-white/20 shadow-xl">
          {medal}
        </div>
        <span className="text-xl md:text-2xl font-black text-white text-center truncate w-full mb-2 uppercase tracking-tighter italic">{entry.name}</span>
        <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-black text-white">{entry.score.toLocaleString()}</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Final Score</span>
        </div>
      </div>
    </motion.div>
  );
}
