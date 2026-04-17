import React, { useState } from "react";
import Input from "../../../components/common/Input";
import { Link2, Send, Copy, Check } from "lucide-react";
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
    <div className="max-w-4xl mx-auto py-4">
      <Card 
        className="card-premium !bg-white/40 dark:!bg-slate-900/40"
        title="Quick Shortener"
        subtitle="Transform any long URL into a trackable short link in a single step."
        headerAction={
          <div className="p-2 rounded-xl bg-brand-500 text-white animate-pulse">
            <Send size={18} />
          </div>
        }
      >
        <form onSubmit={submitHandler} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 w-full group">
              <Input
                icon={Link2}
                name={"originalUrl"}
                placeholder={"Paste your long link here..."}
                value={originUrl.originalUrl || ""}
                type="url"
                onChange={inputHandler}
                required
                className="rounded-2xl border-gray-200 focus:border-brand-500 transition-all"
              />
            </div>
            <Button 
                icon={Send} 
                type="submit" 
                loading={loading}
                className="w-full md:w-48 h-[52px] rounded-2xl shadow-lg shadow-brand-500/20"
            >
              Shorten Now
            </Button>
          </div>
        </form>

        {shortUrl && (
          <div className="mt-8 space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between p-4 bg-white/80 dark:bg-slate-800/80 rounded-2xl border-2 border-brand-500/20 shadow-inner">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600">
                  <Check size={18} />
                </div>
                <a 
                  href={shortUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-lg font-bold text-gray-900 dark:text-brand-300 truncate hover:text-brand-600 transition-colors underline decoration-brand-500/30 underline-offset-4"
                >
                  {shortUrl}
                </a>
              </div>
              <Button
                variant={copied ? "success" : "secondary"}
                icon={copied ? Check : Copy}
                onClick={copyToClipboard}
                className="rounded-xl ml-4 min-w-[110px]"
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
