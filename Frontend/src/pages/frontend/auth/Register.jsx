import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, UserPlus, ArrowRight, ShieldCheck, Sparkles, ArrowLeft } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';
import { useToast } from '../../../components/common/Toast';
import Input from '../../../components/common/Input';
import Button from '../../../components/common/Button';
import Card from '../../../components/common/Card';

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { register } = useAuth();
    const { addToast } = useToast();
    const navigate = useNavigate();

    const inputHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const res = await register(formData.name, formData.email, formData.password);
        if (res.success) {
            addToast("अकाउंट यशस्वीरित्या तयार झाले! कृपया लॉगिन करा.", "success");
            navigate('/login');
        } else {
            setError(res.error);
            addToast(res.error, "danger");
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
                            <UserPlus size={28} strokeWidth={2.5} />
                        </div>
                        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">Create Account</h1>
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Get started with professional link management</p>
                    </div>

                    {error && (
                        <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 text-sm font-bold flex items-center gap-3 animate-reveal">
                            <ShieldCheck size={18} />
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                            <Input
                                icon={User}
                                placeholder="Enter your name"
                                name="name"
                                value={formData.name}
                                onChange={inputHandler}
                                required
                            />
                        </div>

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
                            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">Password</label>
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
                            icon={ArrowRight}
                        >
                            Get Started
                        </Button>
                    </form>

                    <div className="mt-6 pt-6 border-t border-slate-100 dark:border-white/5 text-center">
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium tracking-tight">
                            Already have an account?{' '}
                            <Link to="/login" className="text-brand-600 font-extrabold hover:text-brand-700 transition-colors inline-flex items-center gap-1 group">
                                Login here
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </p>
                    </div>
                </Card>

                <div className="mt-8 flex items-center justify-center gap-6 opacity-30">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500"><ShieldCheck size={12}/> Secure Data</div>
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500"><Sparkles size={12}/> AI Powered</div>
                </div>
            </div>
        </div>
    );
};

export default Register;
