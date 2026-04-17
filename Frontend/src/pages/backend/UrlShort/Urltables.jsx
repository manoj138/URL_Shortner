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
    { label: 'Short Links', value: stats.totalLinks, icon: Link2, color: 'text-brand-500', bg: 'bg-brand-50 dark:bg-brand-900/10' },
    { label: 'Total Clicks', value: stats.totalClicks, icon: MousePointer2, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-900/10' },
    { label: 'Performance', value: `${stats.avgClicks}%`, icon: TrendingUp, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/10' },
    { label: 'Global Reach', value: stats.activeLinks, icon: Globe, color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-900/10' },
  ];

  // Table columns
  const columns = [
    {
      header: "Source Destination",
      accessor: "originalUrl",
      render: (val, row) => (
        <div className="flex flex-col gap-1.5 max-w-xs md:max-w-sm">
          <div className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-gray-100 truncate group">
            <div className="p-1.5 rounded-lg bg-gray-50 dark:bg-slate-800 text-gray-400 group-hover:text-brand-500 transition-colors">
              <LinkIcon size={14} />
            </div>
            <span className="truncate">{val}</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 ml-9">
             <Clock size={10} />
             <span>Created on {new Date(row.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      )
    },
    {
      header: "Short Link",
      accessor: "shortCode",
      render: (val) => {
        const shortUrl = `${BASE_URL}/${val}`;
        return (
          <div className="flex items-center gap-2">
            <a 
              href={shortUrl} 
              target="_blank" 
              rel="noreferrer"
              className="px-4 py-2.5 rounded-2xl bg-brand-50/50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-400 font-black text-xs hover:bg-brand-500 hover:text-white transition-all duration-300 flex items-center gap-2 border border-brand-100 dark:border-brand-900/50 shadow-sm"
            >
              {val}
              <ExternalLink size={12} strokeWidth={3} />
            </a>
          </div>
        );
      },
    },
    {
      header: "Engagement",
      accessor: "clicks",
      render: (val) => (
        <div className="flex flex-col gap-2 min-w-[120px]">
            <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{val} Clicks</span>
                <span className="text-[10px] font-black text-emerald-500">Live</span>
            </div>
            <div className="h-1.5 w-full bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-brand-500 rounded-full transition-all duration-1000" 
                    style={{ width: `${Math.min((val/20)*100, 100)}%` }}
                ></div>
            </div>
        </div>
      )
    },
    {
      header: "Action",
      accessor: "_id",
      render: (id) => (
        <div className="flex gap-2 justify-end">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => openDeleteModal(id)}
            className="text-rose-500 hover:bg-rose-500/10 hover:text-rose-600 rounded-xl"
            icon={Trash2}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-12 animate-slide-up">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-3 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
                <Sparkles size={16} className="text-amber-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-600">Analytics Dashboard</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter">
                My <span className="text-gradient">Links</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-bold max-w-md">
                Monitor performance, manage redirects, and gain real-time insights into your audience engagement.
            </p>
        </div>
        
        <div className="flex items-center gap-3 self-center md:self-end">
          <div className="px-6 py-3 rounded-[1.5rem] bg-white dark:bg-slate-900 border-2 border-brand-50 dark:border-slate-800/50 shadow-premium flex items-center gap-4 group hover:border-brand-500/30 transition-all">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 block relative">
                 <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75"></div>
            </div>
            <span className="text-xs font-black text-gray-700 dark:text-gray-300 uppercase tracking-widest">Global Edge Live</span>
          </div>
        </div>
      </div>

      {/* Stats Quick View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statItems.map((item, idx) => (
          <div 
            key={item.label} 
            className="card-premium group" 
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="flex flex-col gap-6">
              <div className={`p-4 rounded-2xl ${item.bg} ${item.color} w-fit shadow-lg shadow-current/5 group-hover:scale-110 transition-transform`}>
                <item.icon size={24} strokeWidth={2.5} />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{item.label}</p>
                <h3 className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter transition-all">
                  {item.value}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <Card 
        variant="premium"
        className="overflow-visible"
        title="URL Repository" 
        subtitle="Manage your generated short URLs and monitor engagement metrics in real-time."
        headerAction={
          <div className="flex gap-2">
             <Button variant="glass" size="sm" icon={TrendingUp}>Export Data</Button>
          </div>
        }
      >
        {urls.length > 0 ? (
          <Table
            columns={columns}
            data={urls}
            hoverable
            className="border-none shadow-none bg-transparent"
          />
        ) : (
          <div className="py-20 text-center space-y-6">
             <div className="w-20 h-20 bg-gray-50 dark:bg-slate-800 rounded-3xl flex items-center justify-center mx-auto text-gray-300">
                <AlertCircle size={40} />
             </div>
             <div className="space-y-2">
                <h3 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">Repository is Empty</h3>
                <p className="text-sm text-gray-500 font-bold">Start shortening URLs to populate your analytics dashboard.</p>
             </div>
             <Link to="/">
                <Button variant="primary" icon={Zap}>Shorten First Link</Button>
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
        message="This action cannot be undone. All click history and redirect logic for this shortcode will be purged from our global edge network."
        confirmText="Confirm Deletion"
      />
    </div>
  );
};

export default Urltables;
