import React from 'react';
import { Search, X, CheckCircle2, AlertTriangle, HelpCircle, Layers } from 'lucide-react';
import { Domain } from '../types/quiz';

export type SourceFilter = 'ALL' | 'core' | 'pdf' | 'sakitoo';

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedDomain: Domain | 'ALL';
  onSelectDomain: (d: Domain | 'ALL') => void;
  selectedStatus: 'all' | 'unanswered' | 'correct' | 'incorrect';
  onSelectStatus: (s: 'all' | 'unanswered' | 'correct' | 'incorrect') => void;
  selectedSource: SourceFilter;
  onSelectSource: (s: SourceFilter) => void;
  sourceCounts: { all: number; core: number; pdf: number; sakitoo: number };
  domains: Domain[];
  countsByDomain: Record<string, number>;
  totalCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedDomain,
  onSelectDomain,
  selectedStatus,
  onSelectStatus,
  selectedSource,
  onSelectSource,
  sourceCounts,
  domains,
  countsByDomain,
  totalCount,
}) => {
  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-xs mb-6 space-y-3.5">
      {/* Top row: Search input & Status quick filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="キーワード検索 (例: CIEM, Key Vault, Sentinel, Bicep, PIM, Entra...)"
            className="w-full pl-10 pr-9 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Status filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0 text-xs">
          <button
            onClick={() => onSelectStatus('all')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
              selectedStatus === 'all'
                ? 'bg-slate-900 text-white shadow-2xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            すべて
          </button>
          <button
            onClick={() => onSelectStatus('unanswered')}
            className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg font-medium transition-colors ${
              selectedStatus === 'unanswered'
                ? 'bg-slate-800 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>未回答</span>
          </button>
          <button
            onClick={() => onSelectStatus('correct')}
            className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg font-medium transition-colors ${
              selectedStatus === 'correct'
                ? 'bg-emerald-600 text-white'
                : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200/50'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>正解済み</span>
          </button>
          <button
            onClick={() => onSelectStatus('incorrect')}
            className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg font-medium transition-colors ${
              selectedStatus === 'incorrect'
                ? 'bg-rose-600 text-white'
                : 'bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200/50'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>不正解</span>
          </button>
        </div>
      </div>

      {/* Middle row: Source dataset filter */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-0.5">
        <span className="text-xs font-semibold text-slate-400 mr-1 shrink-0 flex items-center gap-1">
          <Layers className="w-3.5 h-3.5" />
          収録:
        </span>
        <button
          onClick={() => onSelectSource('ALL')}
          className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all shrink-0 ${
            selectedSource === 'ALL'
              ? 'bg-slate-900 text-white shadow-2xs'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          すべて ({sourceCounts.all})
        </button>
        <button
          onClick={() => onSelectSource('core')}
          className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all shrink-0 ${
            selectedSource === 'core'
              ? 'bg-teal-600 text-white shadow-2xs'
              : 'bg-teal-50 text-teal-800 hover:bg-teal-100 border border-teal-200/60'
          }`}
        >
          基礎・シナリオ ({sourceCounts.core})
        </button>
        <button
          onClick={() => onSelectSource('pdf')}
          className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all shrink-0 ${
            selectedSource === 'pdf'
              ? 'bg-indigo-600 text-white shadow-2xs'
              : 'bg-indigo-50 text-indigo-800 hover:bg-indigo-100 border border-indigo-200/60'
          }`}
        >
          PDF模擬問題集 ({sourceCounts.pdf})
        </button>
        <button
          onClick={() => onSelectSource('sakitoo')}
          className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all shrink-0 ${
            selectedSource === 'sakitoo'
              ? 'bg-sky-600 text-white shadow-2xs'
              : 'bg-sky-50 text-sky-800 hover:bg-sky-100 border border-sky-200/60'
          }`}
        >
          Web問題集 (sakitoo.com) ({sourceCounts.sakitoo})
        </button>
      </div>

      {/* Bottom row: Domain Category Badges */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-0.5">
        <span className="text-xs font-semibold text-slate-400 mr-1 shrink-0">分野:</span>
        <button
          onClick={() => onSelectDomain('ALL')}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-all shrink-0 ${
            selectedDomain === 'ALL'
              ? 'bg-blue-600 text-white shadow-2xs'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          全分野 ({totalCount})
        </button>
        {domains.map((dom) => {
          const count = countsByDomain[dom] || 0;
          const isSelected = selectedDomain === dom;
          return (
            <button
              key={dom}
              onClick={() => onSelectDomain(dom)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all shrink-0 flex items-center space-x-1.5 ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <span>{dom}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isSelected ? 'bg-blue-700 text-white' : 'bg-slate-200 text-slate-600'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
