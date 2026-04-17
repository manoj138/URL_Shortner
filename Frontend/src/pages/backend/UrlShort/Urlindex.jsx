import React, { useState } from "react";
import Input from "../../../components/common/Input";
import { Link2, Send, Copy, Check, Sparkles, Zap } from "lucide-react";
import Button from "../../../components/common/Button";
import Card from "../../../components/common/Card";
import { Api, handleApiError } from "../../../components/common/Api/api";

const Urlindex = () => {
  const [originUrl, setOriginUrl] = useState({
    originalUrl: "",
  });
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputHandler = (e) => {
    setOriginUrl((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!originUrl.originalUrl) return;
    
    setLoading(true);
    try {
      const res = await Api.post("/url/shorten", originUrl);
      setShortUrl(res.data.data);
      setCopied(false);
    } catch (error) {
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card 
        variant="premium"
        className="overflow-visible relative !bg-white/95 dark:!bg-slate-950/90 !rounded-[4rem]"
        title="Quick Shortener"
        subtitle="Transform any long URL into a trackable short link instantly."
        headerAction={
          <div className="p-5 rounded-[2rem] bg-brand-600 text-white shadow-2xl shadow-brand-600/30 animate-glow">
            <Zap size={28} fill="currentColor" />
          </div>
        }
      >
        <div className="absolute -top-16 -right-16 w-32 h-32 bg-brand-500/10 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-accent-500/10 blur-3xl rounded-full"></div>

        <form onSubmit={submitHandler} className="space-y-6 relative z-10 font-sans animate-reveal">
          <div className="flex flex-col md:flex-row gap-3 items-stretch">
            <div className="flex-1 group">
              <Input
                icon={Link2}
                name={"originalUrl"}
                placeholder={"Paste your long link here..."}
                value={originUrl.originalUrl || ""}
                type="url"
                onChange={inputHandler}
                required
                className="group-hover:border-indigo-500/50 transition-all text-base py-4 px-6 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border-slate-200 dark:border-white/5"
              />
            </div>
            <Button 
                variant="primary"
                icon={Zap} 
                type="submit" 
                loading={loading}
                size="lg"
                className="w-full md:w-48 shadow-lg shadow-brand-600/10 !rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all"
            >
              Shorten Now
            </Button>
          </div>
        </form>

        {shortUrl && (
          <div className="mt-12 space-y-4 animate-reveal delay-100 font-sans">
            <div className="flex items-center gap-2 mb-1 ml-2">
                <Sparkles size={14} className="text-brand-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Your shortened link is ready</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between p-6 bg-slate-50 dark:bg-slate-950/30 rounded-3xl border border-slate-200 dark:border-white/5 group shadow-sm hover:border-indigo-500/20 transition-all duration-500">
              <div className="flex items-center gap-4 overflow-hidden w-full">
                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 text-brand-600 shadow-sm transition-transform group-hover:scale-110 group-hover:rotate-6">
                  <Check size={20} strokeWidth={3} />
                </div>
                <a 
                  href={shortUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-xl font-bold text-slate-900 dark:text-slate-100 truncate hover:text-indigo-600 transition-all"
                >
                  {shortUrl}
                </a>
              </div>
              <Button
                variant={copied ? "success" : "secondary"}
                icon={copied ? Check : Copy}
                onClick={copyToClipboard}
                className="rounded-xl mt-4 sm:mt-0 ml-0 sm:ml-6 min-w-[140px] shadow-sm transform active:scale-95 transition-all text-sm py-3"
              >
                {copied ? "Copied" : "Copy"}
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Urlindex;
