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
        className="overflow-visible relative"
        title="Quick Shortener"
        subtitle="Transform any long URL into a trackable short link in a single step."
        headerAction={
          <div className="p-3 rounded-2xl bg-brand-500 text-white shadow-lg shadow-brand-500/30 animate-glow">
            <Zap size={20} fill="currentColor" />
          </div>
        }
      >
        <div className="absolute -top-12 -right-12 w-24 h-24 bg-brand-500/10 blur-2xl rounded-full"></div>
        <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-purple-500/10 blur-2xl rounded-full"></div>

        <form onSubmit={submitHandler} className="space-y-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-4 items-stretch">
            <div className="flex-1 group">
              <Input
                icon={Link2}
                name={"originalUrl"}
                placeholder={"Paste your long link here..."}
                value={originUrl.originalUrl || ""}
                type="url"
                onChange={inputHandler}
                required
                className="group-hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
            <Button 
                icon={Zap} 
                type="submit" 
                loading={loading}
                size="xl"
                className="w-full md:w-56 shadow-2xl shadow-brand-500/25"
            >
              Shorten Now
            </Button>
          </div>
        </form>

        {shortUrl && (
          <div className="mt-12 space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex items-center gap-2 mb-2">
                <Sparkles size={14} className="text-amber-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Your Magic Link is Ready</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between p-6 bg-brand-50/30 dark:bg-brand-900/10 rounded-[2rem] border-2 border-brand-500/20 shadow-inner group">
              <div className="flex items-center gap-4 overflow-hidden w-full">
                <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 text-emerald-500 shadow-sm group-hover:scale-110 transition-transform">
                  <Check size={20} strokeWidth={3} />
                </div>
                <a 
                  href={shortUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-xl font-black text-gray-900 dark:text-brand-300 truncate hover:text-brand-600 dark:hover:text-brand-400 transition-all underline decoration-brand-500/20 underline-offset-8"
                >
                  {shortUrl}
                </a>
              </div>
              <Button
                variant={copied ? "success" : "glass"}
                icon={copied ? Check : Copy}
                onClick={copyToClipboard}
                className="rounded-2xl mt-4 sm:mt-0 ml-0 sm:ml-6 min-w-[140px] shadow-sm transform active:scale-90 transition-all"
              >
                {copied ? "Copied!" : "Copy Link"}
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Urlindex;
