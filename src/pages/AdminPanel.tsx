import React, { useState } from 'react';
import { Routes, Route, useNavigate, Link, useParams, useLocation } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';
import { ALL_QUIZZES } from '../utils/quizzes';
import { QuizEditor } from '../components/Admin/QuizEditor';
import { LayoutDashboard, BookOpen, Trophy, Users, LogOut, Plus, Settings, Play } from 'lucide-react';
import { toast } from 'sonner';

export function AdminPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'Admin' && password === 'admin') {
      setIsLoggedIn(true);
      toast.success('Bienvenido, Administrador');
    } else {
      toast.error('Credenciales incorrectas');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 relative bg-black">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#4c1d95,transparent_60%)] pointer-events-none opacity-50 z-0"></div>
        <Card className="w-full max-w-md glass border-white/20 shadow-2xl overflow-hidden relative z-10 bg-black/60">
          <div className="bg-gradient-to-r from-cyan-400 to-blue-600 h-2 w-full"></div>
          <CardHeader className="text-center pt-10">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/10">
              <Settings className="w-10 h-10 text-cyan-400 font-bold" />
            </div>
            <CardTitle className="text-3xl font-black uppercase tracking-tighter italic text-white">
              QUIZPHERA <span className="text-cyan-400">ADMIN</span>
            </CardTitle>
            <p className="text-[10px] text-white/40 font-mono uppercase tracking-widest mt-2">Quizphera Systems v2.4</p>
          </CardHeader>
          <CardContent className="p-10">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Usuario de Sistema</label>
                <Input 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  placeholder="Admin" 
                  className="bg-black/40 border-white/10 h-12 text-lg focus:ring-cyan-500 text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Clave de Acceso</label>
                <Input 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  placeholder="••••••" 
                  className="bg-black/40 border-white/10 h-12 text-lg focus:ring-cyan-500 text-white"
                />
              </div>
              <Button type="submit" className="w-full h-14 text-xl font-black bg-cyan-500 hover:bg-cyan-600 text-white shadow-glow-cyan uppercase italic tracking-tighter mt-4 cursor-pointer">
                AUTENTICAR
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden text-white z-10 bg-black">
      {/* Sidebar */}
      <aside className="w-72 bg-black/40 backdrop-blur-xl border-r border-white/10 flex flex-col p-8 shadow-2xl">
        <div className="mb-12 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-immersive-purple to-pink-600 rounded-lg flex items-center justify-center font-black text-xl">
            A
          </div>
          <div>
            <h1 className="text-xl font-black italic uppercase tracking-tighter leading-tight">QUIZPHERA <span className="text-pink-400">ADMIN</span></h1>
            <p className="text-[10px] text-white/40 font-mono uppercase tracking-[0.2em]">Secure Session</p>
          </div>
        </div>

        <nav className="flex-1 space-y-2">
          <NavLink to="/admin" icon={<LayoutDashboard />}>Dashboard</NavLink>
          <NavLink to="/admin/host" icon={<Play />}>Lanzar Sesión</NavLink>
          <NavLink to="/admin/quizzes" icon={<BookOpen />}>Biblioteca</NavLink>
          <NavLink to="/admin/rankings" icon={<Trophy />}>Clasificaciones</NavLink>
          <NavLink to="/admin/users" icon={<Users />}>Usuarios</NavLink>
        </nav>

        <div className="pt-8 border-t border-white/5 space-y-4">
            <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Servidor Activo</span>
                </div>
                <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                    <div className="bg-cyan-400 h-full w-[92%] shadow-glow-cyan"></div>
                </div>
                <p className="text-[8px] text-white/20 mt-2 font-mono italic">UNPAZ / Mg. Lic. Prof. Leandro Guerschberg</p>
            </div>
            <Button variant="ghost" className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-500/10 h-12 rounded-xl cursor-pointer" onClick={() => setIsLoggedIn(false)}>
              <LogOut className="mr-3 h-5 w-5" /> Terminar Sesión
            </Button>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 overflow-auto bg-black/20 relative custom-scrollbar">
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="host" element={<HostSelection />} />
          <Route path="quizzes" element={<QuizList />} />
          <Route path="quizzes/new" element={<QuizEditor onSave={(q) => { toast.success('Quiz Guardado'); navigate('/admin/quizzes'); }} />} />
          <Route path="quizzes/edit/:id" element={<EditQuizWrapper />} />
          <Route path="rankings" element={<RankingsDashboard />} />
          <Route path="users" element={<UserManagement />} />
        </Routes>
      </main>
    </div>
  );
}

function HostSelection() {
    const navigate = useNavigate();
    return (
        <div className="p-10 space-y-10">
            <div>
                <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-pink-400 mb-2">Session Initiation</h2>
                <h2 className="text-5xl font-black uppercase tracking-tight italic text-white">Seleccionar Juego</h2>
                <p className="text-white/40 mt-4 max-w-2xl uppercase text-[10px] tracking-widest font-mono">Elige un módulo de la biblioteca para desplegar en la red y comenzar la sesión de competencia en tiempo real.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {ALL_QUIZZES.map((quiz, i) => (
                    <Card key={i} className="bg-gradient-to-br from-white/10 to-transparent border-white/10 text-white rounded-3xl overflow-hidden group hover:scale-[1.02] transition-all cursor-pointer shadow-2xl" onClick={() => {
                        const randomCode = Math.random().toString(36).substring(2, 6).toUpperCase();
                        navigate(`/lobby/${randomCode}?quiz=${i}`);
                    }}>
                        <div className="p-10 flex gap-8 items-center">
                            <div className="w-24 h-24 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                                <Play className="w-12 h-12 text-cyan-400 fill-cyan-400/20" />
                            </div>
                            <div className="flex-1">
                                <Badge className="mb-2 bg-cyan-400/20 text-cyan-400 border-none uppercase text-[8px] font-black">Módulo de Juego {i+1}</Badge>
                                <h3 className="text-3xl font-black uppercase tracking-tight italic leading-none mb-2 group-hover:text-cyan-400 transition-colors">{quiz.name}</h3>
                                <p className="text-white/40 text-[10px] font-mono uppercase tracking-widest">{quiz.questions.length} PREGUNTAS • PREPARADO PARA DESPLIEGUE</p>
                            </div>
                        </div>
                        <div className="bg-cyan-500/20 h-2 w-0 group-hover:w-full transition-all duration-500"></div>
                    </Card>
                ))}
            </div>
        </div>
    );
}

function EditQuizWrapper() {
    const { id } = useParams();
    const navigate = useNavigate();
    const quizIndex = id ? parseInt(id) : 0;
    const quiz = ALL_QUIZZES[quizIndex];
    
    return (
        <div className="p-10">
             <div className="mb-8">
                <Button variant="outline" size="sm" onClick={() => navigate('/admin/quizzes')} className="mb-4 text-white hover:bg-white/10 border-white/10">
                    ← Volver a lista
                </Button>
                <h2 className="text-4xl font-black uppercase italic text-white">Editar: {quiz?.name}</h2>
            </div>
            <QuizEditor 
                initialQuiz={quiz} 
                onSave={(q) => { 
                    toast.success('Cambios guardados localmente'); 
                    navigate('/admin/quizzes'); 
                }} 
            />
        </div>
    );
}

function NavLink({ to, icon, children }: { to: string; icon: React.ReactNode; children: React.ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link to={to} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold uppercase tracking-tight text-sm group ${isActive ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'text-white/60 hover:text-white hover:bg-white/5 shadow-none border border-transparent'}`}>
      {React.cloneElement(icon as React.ReactElement, { className: `w-5 h-5 ${isActive ? 'text-cyan-400' : 'group-hover:text-white'}` })}
      {children}
    </Link>
  );
}

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="p-10 space-y-10">
      <div className="flex justify-between items-end">
        <div>
            <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-cyan-400 mb-2">Metrics Center</h2>
            <h1 className="text-5xl font-black uppercase tracking-tight italic text-white">Panel General</h1>
        </div>
        <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs font-mono text-white/60">
            Node: US-WEST-02 / Session: OK
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <StatCard 
            title="Quizzes Activos" 
            value={ALL_QUIZZES.length.toString()} 
            color="bg-gradient-to-br from-cyan-500 to-blue-700" 
            onClick={() => navigate('/admin/quizzes')}
        />
        <StatCard title="Sesiones Hoy" value="45" color="bg-gradient-to-br from-purple-600 to-indigo-800" />
        <StatCard title="Usuarios Totales" value="320" color="bg-gradient-to-br from-pink-600 to-rose-800" />
      </div>

      <Card className="glass border-white/10 text-white rounded-3xl overflow-hidden shadow-2xl bg-black/40">
        <CardHeader className="border-b border-white/5 p-6 flex flex-row items-center justify-between">
            <CardTitle className="text-xl font-bold uppercase tracking-tight">Actividad en Tiempo Real</CardTitle>
            <Badge variant="outline" className="bg-cyan-400/10 text-cyan-400 border-cyan-400/30 font-mono">LIVE FEED</Badge>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                        <Users className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">{i === 1 ? 'Nueva partida: Trivia de Computación' : i === 2 ? 'Usuario Anon_89 unido' : 'Sesión finalizada: Bioimágenes'}</p>
                      <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Iniciada hace {i * 5} min • {12 + i * 2} operativos activos</p>
                    </div>
                </div>
                <Badge variant="outline" className="border-white/20 text-white/60 text-[10px] font-bold">MONITORING</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function StatCard({ title, value, color, onClick }: { title: string; value: string; color: string; onClick?: () => void }) {
  return (
    <Card 
        className={`${color} border-none text-white shadow-2xl rounded-3xl relative overflow-hidden group cursor-pointer transition-transform active:scale-95`}
        onClick={onClick}
    >
      <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-110 transition-transform">
         <div className={`w-16 h-16 rounded-full border-4 border-white/30`}></div>
      </div>
      <CardContent className="p-8">
        <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/60 mb-2">{title}</p>
        <p className="text-6xl font-black tracking-tighter">{value}</p>
      </CardContent>
    </Card>
  );
}

function QuizList() {
  const navigate = useNavigate();
  return (
    <div className="p-10 space-y-10">
      <div className="flex justify-between items-end">
        <div>
            <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-cyan-400 mb-2">Content Manager</h2>
            <h2 className="text-5xl font-black uppercase tracking-tight italic text-white">Librería de Quizzes</h2>
        </div>
        <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white font-black shadow-glow-cyan h-14 px-8 rounded-2xl italic uppercase tracking-tighter cursor-pointer" onClick={() => navigate('/admin/quizzes/new')}>
          <Plus className="mr-2" /> Desplegar Nuevo
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ALL_QUIZZES.map((quiz, i) => (
          <Card key={i} className="glass border-white/10 text-white hover:bg-white/10 transition-all cursor-pointer rounded-3xl group shadow-2xl bg-black/40">
            <CardHeader className="p-8">
              <CardTitle className="flex flex-col gap-4">
                <span className="text-3xl font-black tracking-tight uppercase leading-tight group-hover:text-cyan-400 transition-colors">{quiz.name}</span>
                <div className="flex gap-2">
                    <Badge variant="outline" className="text-[10px] font-mono uppercase tracking-widest bg-white/5 border-white/10 text-white/60">DB-REV-0{i+1}</Badge>
                    <Badge variant="secondary" className="text-[10px] font-black uppercase bg-white/20 text-white">{quiz.questions.length} ITEMS</Badge>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-6">Última revisión: Oct {20 + i}, 2024</p>
              <div className="flex gap-3">
                <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 h-10 border-white/10 hover:bg-white/5 rounded-xl font-bold uppercase tracking-tight text-xs text-white cursor-pointer"
                    onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/admin/quizzes/edit/${i}`);
                    }}
                >
                    Ajustes
                </Button>
                <Button 
                  size="sm" 
                  className="bg-cyan-500 flex-1 h-10 rounded-xl font-black uppercase tracking-tight text-xs shadow-glow-cyan text-white cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    const randomCode = Math.random().toString(36).substring(2, 6).toUpperCase();
                    navigate(`/lobby/${randomCode}?quiz=${i}`);
                  }}
                >
                  Lanzar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function RankingsDashboard() {
  return (
    <div className="p-10 space-y-10">
      <div>
          <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-cyan-400 mb-2">History Archive</h2>
          <h2 className="text-5xl font-black uppercase tracking-tight italic text-white">Registros Globales</h2>
      </div>
      
      <Card className="glass border-white/10 text-white rounded-3xl overflow-hidden shadow-2xl bg-black/40">
        <CardContent className="p-0">
          <table className="w-full text-left font-sans">
            <thead className="bg-white/5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 border-b border-white/10">
              <tr>
                <th className="px-8 py-6">ID POS</th>
                <th className="px-8 py-6">OPERATIVO</th>
                <th className="px-8 py-6">MISION</th>
                <th className="px-8 py-6">PUNTUACION</th>
                <th className="px-8 py-6">TIMESTAMP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors group">
                  <td className="px-8 py-6 font-mono text-xl text-white/20 group-hover:text-cyan-400">0{i}</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=p${i}`} alt="" className="w-full h-full object-cover" />
                      </div>
                      <span className="font-bold text-lg uppercase tracking-tight">Agente_{i * 42}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-white/60 font-medium">{ALL_QUIZZES[i % ALL_QUIZZES.length]?.name}</td>
                  <td className="px-8 py-6 font-black text-2xl text-cyan-400 tabular-nums">{(12500 - (i * 1000)).toLocaleString()}</td>
                  <td className="px-8 py-6 text-white/40 font-mono text-[10px] uppercase">HOY / {10 + i}:30 UTC</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}

function UserManagement() {
  const users = [
    { name: 'Dr. Smith', role: 'Super Admin', status: 'Online', lastActive: 'Ahora' },
    { name: 'Lic. Garcia', role: 'Moderador', status: 'Offline', lastActive: '2h ago' },
    { name: 'Ing. Arrieta', role: 'Editor', status: 'Online', lastActive: '10m ago' },
  ];

  return (
    <div className="p-10 space-y-10">
      <div className="flex justify-between items-end">
        <div>
            <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-cyan-400 mb-2">Access Control</h2>
            <h2 className="text-5xl font-black uppercase tracking-tight italic text-white">Operativos de Red</h2>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white font-black h-14 px-8 rounded-2xl italic uppercase tracking-tighter shadow-lg shadow-purple-500/20 cursor-pointer">
            Autorizar Operador
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map((u, i) => (
            <Card key={i} className="glass border-white/10 bg-black/40 rounded-3xl p-6 flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                    <Users className="w-8 h-8 text-white/40" />
                </div>
                <div>
                    <h4 className="font-black text-xl text-white uppercase tracking-tight italic">{u.name}</h4>
                    <p className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">{u.role}</p>
                    <div className="flex items-center gap-2 mt-2">
                        <div className={`w-2 h-2 rounded-full ${u.status === 'Online' ? 'bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]' : 'bg-white/20'}`}></div>
                        <span className="text-[8px] font-bold uppercase tracking-widest text-white/40">{u.status} • {u.lastActive}</span>
                    </div>
                </div>
            </Card>
        ))}
      </div>
    </div>
  );
}
