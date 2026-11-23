'use client';
import { useMemo, useState } from 'react';
import { ArrowUpRight, Github, Globe2, Search, SlidersHorizontal, X } from 'lucide-react';
import { projects } from '@/lib/projects';
import Link from 'next/link';

const categories = ['All projects', ...Array.from(new Set(projects.map(p => p.category)))];
const filters = ['All', 'Live', 'Not Live'];

export default function ProjectExplorer() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All projects');
  const [status, setStatus] = useState('All');
  const visible = useMemo(() => projects.filter(p => {
    const q = query.trim().toLowerCase();
    const matchesQuery = !q || [p.name,p.subtitle,p.description,p.category,...p.stack].join(' ').toLowerCase().includes(q);
    const matchesCategory = category === 'All projects' || p.category === category;
    const matchesStatus = status === 'All' || (status === 'Live' ? p.status === 'Live' : p.status !== 'Live');
    return matchesQuery && matchesCategory && matchesStatus;
  }), [query, category, status]);

  return <section id="projects" className="mx-auto max-w-7xl px-5 pb-28 pt-12 sm:px-8">
    <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div><p className="eyebrow">THE WORK, IN ONE PLACE</p><h2 className="section-title">Selected <span className="gradient-text">projects.</span></h2><p className="mt-3 max-w-xl text-sm leading-7 text-white/45">A collection of products, experiments, and tools built across different problem spaces.</p></div>
      <div className="flex gap-3 text-sm text-white/55"><span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2"><b className="text-white">{projects.length}</b> projects</span><span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2"><b className="text-emerald-300">{projects.filter(p=>p.status==='Live').length}</b> live</span></div>
    </div>
    <div className="mb-7 rounded-2xl border border-white/[0.09] bg-white/[0.025] p-3 sm:p-4">
      <div className="flex flex-col gap-3 lg:flex-row">
        <label className="relative flex-1"><Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/35"/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search projects, tools, technologies..." className="h-12 w-full rounded-xl border border-white/[0.08] bg-black/20 pl-11 pr-10 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-violet-400/60"/>{query && <button onClick={()=>setQuery('')} aria-label="Clear search" className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"><X size={16}/></button>}</label>
        <div className="flex flex-wrap gap-2">{filters.map(f=><button key={f} onClick={()=>setStatus(f)} className={`rounded-xl px-4 py-3 text-xs font-semibold transition ${status===f?'bg-violet-500 text-white shadow-lg shadow-violet-500/20':'border border-white/[0.08] text-white/45 hover:bg-white/[0.05] hover:text-white'}`}>{f}</button>)}</div>
      </div>
      <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1"><SlidersHorizontal size={14} className="shrink-0 text-white/30"/>{categories.map(c=><button key={c} onClick={()=>setCategory(c)} className={`whitespace-nowrap rounded-full px-3 py-1.5 text-[11px] transition ${category===c?'bg-white/10 text-white':'text-white/40 hover:text-white/80'}`}>{c}</button>)}</div>
    </div>
    {visible.length ? <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{visible.map((p,index)=><article key={p.id} className="project-card group">
      <div className={`project-art bg-gradient-to-br ${p.accent}`}>{p.screenshots[0] ? <img src={p.screenshots[0].src} alt={p.screenshots[0].alt} className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]" loading="lazy"/> : <><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><span className="project-mark">{p.mark}</span></>}<span className="art-index">PROJECT / {String(p.id).padStart(2,'0')}</span><span className={`status-pill ${p.status==='Live'?'status-live':'status-muted'}`}><i/> {p.status==='Demo link unavailable'?'No demo link':p.status}</span></div>
      <div className="p-5 sm:p-6"><div className="mb-2 flex items-start justify-between gap-3"><div><p className="mb-1 text-[10px] font-bold uppercase tracking-[.18em] text-violet-300/75">{p.category}</p><h3 className="text-xl font-semibold tracking-tight text-white">{p.name}</h3><p className="mt-1 text-xs text-white/35">{p.subtitle}</p></div><span className="mt-1 text-xs text-white/20">{String(index+1).padStart(2,'0')}</span></div>
      <p className="mt-4 min-h-[66px] text-[13px] leading-6 text-white/48">{p.description}</p><div className="mt-4 flex min-h-7 flex-wrap gap-1.5">{p.stack.map(tag=><span key={tag} className="rounded-md border border-white/[0.07] bg-white/[0.025] px-2 py-1 text-[10px] text-white/45">{tag}</span>)}</div>
      <div className="mt-6 flex flex-wrap gap-2 border-t border-white/[0.07] pt-4"><Link href={`/projects/${p.slug}`} className="action-primary flex-1 justify-center">Case study <ArrowUpRight size={13}/></Link><a href={p.repo} target="_blank" rel="noreferrer" className="action-secondary flex-1 justify-center"><Github size={14}/> Source code <ArrowUpRight size={13} className="ml-auto opacity-50"/></a>{p.live ? <a href={p.live} target="_blank" rel="noreferrer" className="action-secondary flex-1 justify-center"><Globe2 size={14}/> Live demo <ArrowUpRight size={13} className="ml-auto"/></a> : <span className="action-disabled flex-1">Demo unavailable</span>}</div></div>
    </article>)}</div> : <div className="rounded-2xl border border-dashed border-white/10 py-20 text-center"><Search className="mx-auto mb-3 text-white/25"/><h3 className="font-medium text-white">No projects found</h3><p className="mt-1 text-sm text-white/40">Try another search or clear your filters.</p><button onClick={()=>{setQuery('');setCategory('All projects');setStatus('All')}} className="mt-4 text-sm text-violet-300 hover:text-violet-200">Reset filters</button></div>}
  </section>;
}
