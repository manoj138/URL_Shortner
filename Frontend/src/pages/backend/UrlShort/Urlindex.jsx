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
    <div className="w-full">
      <Card 
        variant="premium"
        compact
        className="overflow-visible relative !bg-white/95 dark:!bg-slate-950/90 !rounded-[2.5rem]"
        bodyClassName="!px-8 !py-6 md:!px-12 md:!py-8"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 animate-reveal">
           <div className="space-y-1">
              <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">Quick Shortener</h3>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Transform long links into trackable assets instantly</p>
           </div>
           <div className="hidden md:flex p-3 rounded-2xl bg-brand-600 text-white shadow-2xl shadow-brand-600/30 animate-glow">
              <Zap size={20} fill="currentColor" />
           </div>
        </div>


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
                className="group-hover:border-indigo-500/50 transition-all text-base px-6 rounded-xl bg-white dark:bg-slate-900 shadow-sm border-slate-200 dark:border-white/5 h-14"
              />
            </div>
            <Button 
                variant="primary"
                icon={Zap} 
                type="submit" 
                loading={loading}
                size="lg"
                className="w-full md:w-48 shadow-lg shadow-brand-600/10 !rounded-xl font-extrabold hover:scale-105 active:scale-95 transition-all h-14"
            >
              Shorten
            </Button>
          </div>
        </form>

        {shortUrl && (
          <div className="mt-8 pt-8 border-t border-slate-100 dark:border-white/5 space-y-4 animate-reveal delay-100 font-sans">
            <div className="flex flex-col sm:flex-row items-center justify-between p-5 bg-slate-50 dark:bg-slate-950/30 rounded-2xl border border-slate-200 dark:border-white/5 group shadow-sm hover:border-indigo-500/20 transition-all duration-500">
              <div className="flex items-center gap-4 overflow-hidden w-full">
                <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 text-brand-600 shadow-sm transition-transform group-hover:scale-110 group-hover:rotate-6">
                  <Check size={18} strokeWidth={3} />
                </div>
                <a 
                  href={shortUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-lg font-bold text-slate-900 dark:text-slate-100 truncate hover:text-indigo-600 transition-all"
                >
                  {shortUrl}
                </a>
              </div>
              <Button
                variant={copied ? "success" : "secondary"}
                icon={copied ? Check : Copy}
                onClick={copyToClipboard}
                className="rounded-lg mt-4 sm:mt-0 ml-0 sm:ml-6 min-w-[120px] shadow-sm transform active:scale-95 transition-all text-xs py-2.5 h-10"
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
