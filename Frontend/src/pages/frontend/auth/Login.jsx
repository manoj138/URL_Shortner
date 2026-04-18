import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, LogIn, ArrowRight, ShieldCheck, Sparkles, Zap, ArrowLeft } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';
import Input from '../../../components/common/Input';
import Button from '../../../components/common/Button';
import Card from '../../../components/common/Card';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const inputHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const res = await login(formData.email, formData.password);
        if (res.success) {
            navigate('/dashboard');
        } else {
            setError(res.error);
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-transparent">
            {/* Background elements removed */}

            <div className="w-full max-w-lg relative z-10 font-sans">
                <div className="mb-6 animate-reveal">
                    <Link to="/">
                        <Button variant="ghost" size="sm" icon={ArrowLeft} className="text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-brand-600">
                           Back to Home
                        </Button>
                    </Link>
                </div>
                <Card variant="premium" className="p-6 md:p-10">
                    <div className="text-center space-y-4 mb-6">
                        <div className="inline-flex p-3 rounded-2xl bg-brand-600 text-white shadow-xl shadow-brand-600/20 mb-2 animate-float">
                            <LogIn size={28} strokeWidth={2.5} />
                        </div>
                        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">Welcome Back</h1>
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Log in to manage your professional links</p>
                    </div>

                    {error && (
                        <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 text-sm font-bold flex items-center gap-3 animate-reveal">
                            <ShieldCheck size={18} />
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                            <Input
                                icon={Mail}
                                type="email"
                                placeholder="name@company.com"
                                name="email"
                                value={formData.email}
                                onChange={inputHandler}
                                required
                            />
                        </div>

                        <div className="space-y-1">
                            <div className="flex items-center justify-between ml-1">
                                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Password</label>
                                <button type="button" className="text-[10px] font-bold text-brand-600 uppercase tracking-wider hover:text-brand-700 transition-colors">Forgot Password?</button>
                            </div>
                            <Input
                                icon={Lock}
                                type="password"
                                placeholder="••••••••"
                                name="password"
                                value={formData.password}
                                onChange={inputHandler}
                                required
                            />
                        </div>

                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            className="w-full h-14 !rounded-2xl text-base font-extrabold shadow-2xl shadow-brand-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                            loading={loading}
                            icon={Zap}
                        >
                            Sign In
                        </Button>
                    </form>

                    <div className="mt-6 pt-6 border-t border-slate-100 dark:border-white/5 text-center">
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium tracking-tight">
                            Don't have an account yet?{' '}
                            <Link to="/signup" className="text-brand-600 font-extrabold hover:text-brand-700 transition-colors inline-flex items-center gap-1 group">
                                Create Account
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </p>
                    </div>
                </Card>

                <div className="mt-8 flex items-center justify-center gap-6 opacity-30">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500"><ShieldCheck size={12}/> Enterprise Grade</div>
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500"><Sparkles size={12}/> Global Network</div>
                </div>
            </div>
        </div>
    );
};

export default Login;
