import React, { useEffect, useState } from "react";
import Table from "../../../components/common/Table";
import { Api, BASE_URL, handleApiError } from "../../../components/common/Api/api";
import Button from "../../../components/common/Button";
import Card from "../../../components/common/Card";
import Badge from "../../../components/common/Badge";
import EmptyState from "../../../components/common/EmptyState";
import ConfirmModal from "../../../components/common/ConfirmModal";
import { Trash2, ExternalLink, Link as LinkIcon, BarChart3, Clock, MousePointer2, TrendingUp, Calendar, Link2 } from "lucide-react";

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
    { label: 'Total Links', value: stats.totalLinks, icon: Link2, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
    { label: 'Total Clicks', value: stats.totalClicks, icon: MousePointer2, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
    { label: 'Avg. Clicks', value: stats.avgClicks, icon: TrendingUp, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/20' },
    { label: 'Active Links', value: stats.activeLinks, icon: Calendar, color: 'text-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-900/20' },
  ];

  // Table columns
  const columns = [
    {
      header: "Old URL",
      accessor: "originalUrl",
      render: (val, row) => (
        <div className="flex flex-col gap-1 max-w-xs md:max-w-md">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
            <LinkIcon size={14} className="text-gray-400" />
            <span className="truncate">{val}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
             <Clock size={12} />
             <span>{new Date(row.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      )
    },
    {
      header: "New URL",
      accessor: "shortCode",
      render: (val) => {
        const shortUrl = `${BASE_URL}/${val}`;
        return (
          <div className="flex items-center gap-2 min-w-[180px]">
            <a 
              href={shortUrl} 
              target="_blank" 
              rel="noreferrer"
              className="px-3 py-2 rounded-xl bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 font-medium hover:bg-brand-100 dark:hover:bg-brand-900/50 transition-colors flex items-center gap-1.5"
            >
              {val}
              <ExternalLink size={12} />
            </a>
          </div>
        );
      },
    },
    {
      header: "Clicks",
      accessor: "clicks",
      render: (val) => (
        <Badge variant={val > 10 ? "success" : "info"} dot={val > 0}>
          {val} Clicks
        </Badge>
      )
    },
    {
      header: "Actions",
      accessor: "_id",
      render: (id) => (
        <div className="flex gap-2">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => openDeleteModal(id)}
            className="text-danger hover:bg-danger/10"
            icon={Trash2}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">
            My <span className="text-gradient">Links</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 font-medium">
            Review old URLs, open short links, and delete entries when needed.
        </p>
      </div>
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-sm flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Live Analytics</span>
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
            <div className="flex items-start justify-between">
              <div className="space-y-3">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{item.label}</p>
                <h3 className="text-3xl font-black text-gray-900 dark:text-white group-hover:scale-110 transition-transform origin-left">
                  {item.value}
                </h3>
              </div>
              <div className={`p-4 rounded-2xl ${item.bg} ${item.color} shadow-lg shadow-current/10`}>
                <item.icon size={24} />
              </div>
            </div>
            <div className="mt-4 h-1.5 w-full bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div className={`h-full ${item.bg.replace('50', '500').replace('bg-', 'bg-')} w-2/3 rounded-full transition-all duration-1000`}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <Card 
        className="glass border-none shadow-premium overflow-visible"
        title="URL History" 
        subtitle="Old URLs, generated short URLs, clicks, and quick actions in one place."
        headerAction={
          <div className="flex gap-2">
             <Button variant="secondary" size="sm" icon={BarChart3}>Live View</Button>
          </div>
        }
      >
        {urls.length > 0 ? (
          <Table
            columns={columns}
            data={urls}
            hoverable
            className="border-none shadow-none"
          />
        ) : (
          <EmptyState 
            title="Link Repository is Empty" 
            description="Start shortening URLs to populate your analytics dashboard."
          />
        )}
      </Card>

      <ConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        isLoading={isDeleting}
        title="Delete this URL?"
        message="This will remove the short link and its click history permanently."
        confirmText="Delete URL"
      />
    </div>
  );
};

export default Urltables;
