import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Badge } from '../ui/badge';
import { Trash2, Plus, Upload, Save } from 'lucide-react';
import { Question, Quiz } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'sonner';
import { motion } from 'motion/react';

interface QuizEditorProps {
  onSave: (quiz: Partial<Quiz>) => void;
  initialQuiz?: Quiz;
}

export function QuizEditor({ onSave, initialQuiz }: QuizEditorProps) {
  const [name, setName] = useState(initialQuiz?.name || '');
  const [description, setDescription] = useState(initialQuiz?.description || '');
  const [questions, setQuestions] = useState<Question[]>(initialQuiz?.questions || []);

  const addQuestion = () => {
    const newQuestion: Question = {
      id: uuidv4(),
      text: '',
      type: 'multiple',
      options: ['', '', '', ''],
      correctAnswer: 0,
      timeLimit: 20
    };
    setQuestions([...questions, newQuestion]);
  };

  const updateQuestion = (index: number, updates: Partial<Question>) => {
    const newQuestions = [...questions];
    newQuestions[index] = { ...newQuestions[index], ...updates };
    setQuestions(newQuestions);
  };

  const removeQuestion = (index: number) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target?.result as string);
        if (data.questions) {
          setQuestions([...questions, ...data.questions]);
          toast.success('Preguntas importadas');
        }
      } catch (err) {
        toast.error('Error al procesar el archivo JSON');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-20">
      <Card className="glass border-white/10 bg-black/40 overflow-hidden rounded-3xl shadow-2xl">
        <div className="bg-gradient-to-r from-cyan-400 to-blue-600 h-1 w-full"></div>
        <CardHeader className="p-8">
            <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] text-cyan-400 mb-2">Configuration</h3>
            <CardTitle className="text-2xl font-black uppercase tracking-tight text-white italic">Atributos del Quiz</CardTitle>
        </CardHeader>
        <CardContent className="px-8 pb-8 space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Título del Desafío</label>
            <Input 
                placeholder="Ej: Trivia de Computación Avanzada" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className="bg-white/5 border-white/10 h-12 text-white focus:ring-cyan-500"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Sinopsis del Objetivo</label>
            <Input 
                placeholder="Descripción breve..." 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                className="bg-white/5 border-white/10 h-12 text-white focus:ring-cyan-500"
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between items-end px-4">
        <div>
            <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] text-pink-400 mb-2">Sequence</h3>
            <h2 className="text-3xl font-black uppercase text-white italic tracking-tight">Preguntas ({questions.length})</h2>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-12 border-white/10 bg-white/5 text-white hover:bg-white/10 rounded-xl font-bold uppercase text-xs cursor-pointer" asChild>
            <label>
              <Upload className="mr-2 h-4 w-4 text-cyan-400" /> Importar JSON
              <input type="file" className="hidden" accept=".json" onChange={handleFileUpload} />
            </label>
          </Button>
          <Button onClick={addQuestion} className="h-12 bg-pink-600 hover:bg-pink-700 text-white rounded-xl font-black uppercase text-xs shadow-lg shadow-pink-600/20 cursor-pointer">
            <Plus className="mr-2 h-4 w-4" /> Nueva Pregunta
          </Button>
        </div>
      </div>

      <div className="space-y-8">
        {questions.map((q, qIndex) => (
          <motion.div
            key={q.id || qIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: qIndex * 0.05 }}
          >
            <Card className="glass border-white/10 bg-black/40 rounded-3xl overflow-hidden group shadow-xl">
              <CardContent className="p-8 space-y-6">
                <div className="flex justify-between items-start gap-6">
                    <div className="flex-1 space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-cyan-400/60">Enunciado {qIndex + 1}</label>
                        <Input 
                            placeholder="¿Cuál es la pregunta?" 
                            value={q.text} 
                            onChange={(e) => updateQuestion(qIndex, { text: e.target.value })} 
                            className="bg-white/5 border-white/10 h-14 text-lg font-bold text-white focus:ring-cyan-500"
                        />
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => removeQuestion(qIndex)} className="text-red-400 hover:text-red-300 hover:bg-red-500/10 h-12 w-12 rounded-xl mt-6 cursor-pointer">
                        <Trash2 className="h-5 w-5" />
                    </Button>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Tipo de Respuesta</label>
                    <select 
                      className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-white text-sm font-bold uppercase tracking-tight focus:ring-2 ring-cyan-500/50 outline-none appearance-none cursor-pointer"
                      value={q.type}
                      onChange={(e) => updateQuestion(qIndex, { type: e.target.value as any })}
                    >
                      <option value="multiple" className="bg-slate-900">Opción Múltiple</option>
                      <option value="boolean" className="bg-slate-900">Verdadero/Falso</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Timer Limit (Seg)</label>
                    <Input 
                      type="number" 
                      value={q.timeLimit} 
                      onChange={(e) => updateQuestion(qIndex, { timeLimit: parseInt(e.target.value) })} 
                      className="bg-white/5 border-white/10 h-12 text-white font-mono"
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Mapeo de Opciones (Definir sistema de aciertos)</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {q.type === 'multiple' ? (
                      q.options.map((opt, oIndex) => (
                        <div key={oIndex} className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${q.correctAnswer === oIndex ? 'bg-cyan-500/10 border-cyan-500/30 ring-1 ring-cyan-500/20' : 'bg-white/5 border-white/10'}`}>
                          <input 
                            type="radio" 
                            name={`correct-${qIndex}`}
                            className="w-5 h-5 accent-cyan-400 cursor-pointer"
                            checked={q.correctAnswer === oIndex} 
                            onChange={() => updateQuestion(qIndex, { correctAnswer: oIndex })}
                          />
                          <Input 
                            placeholder={`Opción ${oIndex + 1}`} 
                            value={opt} 
                            onChange={(e) => {
                              const newOpts = [...q.options];
                              newOpts[oIndex] = e.target.value;
                              updateQuestion(qIndex, { options: newOpts });
                            }}
                            className="bg-transparent border-none p-0 focus-visible:ring-0 text-white font-medium"
                          />
                        </div>
                      ))
                    ) : (
                      ['Verdadero', 'Falso'].map((opt, oIndex) => (
                        <div key={oIndex} className={`flex items-center gap-4 p-4 rounded-2xl border transition-all cursor-pointer ${q.correctAnswer === oIndex ? 'bg-cyan-500/10 border-cyan-500/30' : 'bg-white/5 border-white/10'}`} onClick={() => updateQuestion(qIndex, { correctAnswer: oIndex })}>
                          <input 
                            type="radio" 
                            name={`correct-${qIndex}`}
                            className="w-5 h-5 accent-cyan-400 cursor-pointer"
                            checked={q.correctAnswer === oIndex} 
                            readOnly
                          />
                          <span className="w-full text-white font-bold uppercase tracking-tight italic">{opt}</span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="sticky bottom-8 z-20">
        <Button onClick={() => onSave({ name, description, questions })} className="w-full h-16 text-xl font-black bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-glow-cyan uppercase italic tracking-tighter rounded-2xl cursor-pointer">
          <Save className="mr-3" /> Sincronizar y Guardar Quiz
        </Button>
      </div>
    </div>
  );
}
