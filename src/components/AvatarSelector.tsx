import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/Card';
import { RefreshCw } from 'lucide-react';

interface AvatarSelectorProps {
  onSelect: (avatarUrl: string) => void;
  currentAvatar?: string;
}

const AVATAR_STYLES = ['avataaars', 'bottts', 'pixel-art', 'lorelei', 'notionists'];

export function AvatarSelector({ onSelect, currentAvatar }: AvatarSelectorProps) {
  const [seed, setSeed] = useState(Math.random().toString(36).substring(7));
  const [style, setStyle] = useState('avataaars');

  const avatarUrl = `https://api.dicebear.com/7.x/${style}/svg?seed=${seed}`;

  const handleRefresh = () => {
    const newSeed = Math.random().toString(36).substring(7);
    setSeed(newSeed);
    onSelect(`https://api.dicebear.com/7.x/${style}/svg?seed=${newSeed}`);
  };

  const handleStyleChange = (newStyle: string) => {
    setStyle(newStyle);
    onSelect(`https://api.dicebear.com/7.x/${newStyle}/svg?seed=${seed}`);
  };

  return (
    <Card className="p-4 flex flex-col items-center gap-4 bg-white/50 backdrop-blur">
      <div className="relative w-32 h-32 border-4 border-primary rounded-full overflow-hidden bg-muted">
        <img src={currentAvatar || avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
      </div>
      
      <div className="flex gap-2 flex-wrap justify-center">
        {AVATAR_STYLES.map((s) => (
          <Button 
            key={s} 
            variant={style === s ? 'default' : 'outline'} 
            size="sm"
            onClick={() => handleStyleChange(s)}
            className="capitalize"
          >
            {s}
          </Button>
        ))}
      </div>

      <Button onClick={handleRefresh} variant="secondary" className="w-full">
        <RefreshCw className="mr-2 h-4 w-4" /> Aleatorio
      </Button>
    </Card>
  );
}
