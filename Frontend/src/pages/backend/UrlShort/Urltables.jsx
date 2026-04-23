import React, { useEffect, useState } from "react";
import Table from "../../../components/common/Table";
import { Api, BASE_URL, handleApiError } from "../../../components/common/Api/api";
import Button from "../../../components/common/Button";
import Card from "../../../components/common/Card";
import Badge from "../../../components/common/Badge";
import EmptyState from "../../../components/common/EmptyState";
import ConfirmModal from "../../../components/common/ConfirmModal";
import { Trash2, ExternalLink, Link as LinkIcon, BarChart3, Clock, MousePointer2, TrendingUp, Calendar, Link2, Sparkles, AlertCircle, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Urltables = () => {
  const [urls, setUrls] = useState([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [stats, setStats] = useState({
    totalLinks: 0,
    totalClicks: 0,
    avgClicks: 0,
    activeLinks: 0
  });

  // Fetch all URLs
  const fetchUrls = async () => {
    try {
      const res = await Api.get("/url");
      const fetchedUrls = res.data.data;
      setUrls(fetchedUrls);

      // Calculate stats
      const totalClicks = fetchedUrls.reduce((acc, curr) => acc + (curr.clicks || 0), 0);
      setStats({
        totalLinks: fetchedUrls.length,
        totalClicks: totalClicks,
        avgClicks: fetchedUrls.length ? (totalClicks / fetchedUrls.length).toFixed(1) : 0,
        activeLinks: fetchedUrls.filter(u => u.clicks > 0).length
      });
    } catch (error) {
      handleApiError(error);
    }
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  // Delete URL confirmed
  const handleDelete = async () => {
    if (!selectedId) return;
    setIsDeleting(true);
    try {
      await Api.delete(`/url/${selectedId}`);
      await fetchUrls();
      setIsDeleteModalOpen(false);
    } catch (error) {
      handleApiError(error);
    } finally {
      setIsDeleting(false);
      setSelectedId(null);
    }
  };

  const openDeleteModal = (id) => {
    setSelectedId(id);
    setIsDeleteModalOpen(true);
  };

  const statItems = [
    { label: 'Total Links', value: stats.totalLinks, icon: Link2, color: 'text-brand-600', bg: 'bg-brand-50 dark:bg-brand-900/40' },
    { label: 'Total Clicks', value: stats.totalClicks, icon: MousePointer2, color: 'text-indigo-600', bg: 'bg-indigo-50 dark:bg-indigo-900/40' },
    { label: 'Performance', value: `${stats.avgClicks}%`, icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-900/40' },
    { label: 'Global Nodes', value: stats.activeLinks, icon: Globe, color: 'text-slate-600', bg: 'bg-slate-50 dark:bg-slate-900/40' },
  ];

  // Table columns
  const columns = [
    {
      header: "Destination URL",
      accessor: "originalUrl",
      render: (val, row) => (
        <div className="flex flex-col gap-1 max-w-xs md:max-w-md font-sans">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200 truncate group">
            <div className="p-1 rounded bg-slate-50 dark:bg-slate-800 text-slate-400 group-hover:text-brand-600 transition-colors">
              <LinkIcon size={12} />
            </div>
            <span className="truncate">{val}</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold text-slate-400 ml-7 tracking-tight">
             <Clock size={10} />
             <span>Created {new Date(row.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      )
    },
    {
      header: "Short ID",
      accessor: "shortCode",
      render: (val) => {
        const shortUrl = `${BASE_URL}/${val}`;
        return (
          <div className="font-mono">
            <a 
              href={shortUrl} 
              target="_blank" 
              rel="noreferrer"
              className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-brand-600 hover:text-white transition-all flex items-center gap-2 border border-slate-200 dark:border-white/5"
            >
              {val}
              <ExternalLink size={10} />
            </a>
          </div>
        );
      },
    },
    {
      header: "Metrics",
      accessor: "clicks",
      render: (val) => (
        <div className="flex flex-col gap-2 min-w-[100px] font-sans">
            <div className="flex items-center justify-between mb-0.5">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">{val} Clicks</span>
            </div>
            <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-brand-600 rounded-full transition-all duration-1000" 
                    style={{ width: `${Math.min((val/20)*100, 100)}%` }}
                ></div>
            </div>
        </div>
      )
    },
    {
      header: "Actions",
      accessor: "_id",
      render: (id) => (
        <div className="flex gap-1 justify-end">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => openDeleteModal(id)}
            className="text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/20 p-2"
            icon={Trash2}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-10 animate-reveal">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
            <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-500 animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Resource Monitor</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight animate-reveal delay-100">
                My Link <span className="text-brand-600">Inventory.</span>
            </h2>
        </div>
        
        <div className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 flex items-center gap-3 shadow-sm hover:border-brand-500/20 transition-all group animate-reveal delay-200">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 relative">
               <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75"></div>
          </div>
          <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest group-hover:text-emerald-500 transition-colors">Network Live</span>
        </div>
      </div>

      {/* Stats Quick View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-sans">
        {[
          { label: 'Total Links', value: stats.totalLinks, icon: Link2, color: 'text-brand-600', bg: 'bg-brand-50 dark:bg-brand-900/40', theme: 'brand' },
          { label: 'Total Clicks', value: stats.totalClicks, icon: MousePointer2, color: 'text-indigo-600', bg: 'bg-indigo-50 dark:bg-indigo-900/40', theme: 'indigo' },
          { label: 'Performance', value: `${stats.avgClicks}%`, icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-900/40', theme: 'emerald' },
          { label: 'Global Nodes', value: stats.activeLinks, icon: Globe, color: 'text-slate-600', bg: 'bg-slate-50 dark:bg-slate-900/40', theme: 'amber' },
        ].map((item, idx) => (
          <Card 
            key={item.label} 
            bubbleTheme={item.theme}
            compact
            className={`!p-4 hover:border-brand-500/30 animate-reveal delay-${(idx+1)*100}`} 
          >
            <div className="flex items-center gap-4">
              <div className={`p-2 rounded-xl ${item.bg} ${item.color} shadow-xs group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                <item.icon size={18} strokeWidth={2.5} />
              </div>
              <div className="space-y-0.5">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none mb-1">{item.label}</p>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-none">
                  {item.value}
                </h3>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Table Section */}
      <Card 
        variant="premium"
        className="overflow-visible !rounded-[3rem] animate-reveal delay-400"
        title="URL Repository" 
        subtitle="Manage your generated short URLs and monitor engagement metrics in real-time."
      >
        {urls.length > 0 ? (
          <div className="px-2">
            <Table
                columns={columns}
                data={urls}
                hoverable
                className="border-none shadow-none bg-transparent"
            />
          </div>
        ) : (
          <div className="py-32 text-center space-y-10">
             <div className="w-24 h-24 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] flex items-center justify-center mx-auto text-slate-300 shadow-inner animate-float">
                <AlertCircle size={48} />
             </div>
             <div className="space-y-4">
                <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">Repository is Empty</h3>
                <p className="text-lg text-slate-500 font-bold max-w-sm mx-auto">Start shortening URLs to populate your analytics cloud with live data.</p>
             </div>
             <Link to="/">
                <Button variant="accent" icon={Zap} size="lg" className="px-12 shadow-2xl hover:scale-110 transition-all">Shorten First Link</Button>
             </Link>
          </div>
        )}
      </Card>

      <ConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        isLoading={isDeleting}
        title="Permanently Delete URL?"
        message="This action cannot be undone. All click history and redirect logic for this shortcode will be purged from our global edge network forever."
        confirmText="Confirm Deletion"
      />
    </div>
  );
};

export default Urltables;
