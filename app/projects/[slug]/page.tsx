import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Github, Globe2 } from 'lucide-react';
import { getProject, projects } from '@/lib/projects';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: project ? `${project.name} Case Study | DevStak` : 'Project | DevStak', description: project?.description };
}

export default async function ProjectCaseStudy({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return <main className="min-h-screen bg-[#09090f] text-white">
    <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
      <Link href="/" className="flex items-center gap-3"><span className="brand-icon">D<span>.</span></span><span className="text-sm font-bold">devstak<span className="text-violet-400">.</span></span></Link>
      <Link href="/#projects" className="text-xs text-white/55 transition hover:text-white"><ArrowLeft size={13} className="mr-2 inline"/> All projects</Link>
    </header>

    <section className="mx-auto max-w-6xl px-5 pb-14 pt-12 sm:px-8 sm:pt-20">
      <p className="eyebrow">PROJECT / {String(project.id).padStart(2, '0')} · {project.category}</p>
      <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_300px] lg:items-end">
        <div><h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-.055em] sm:text-7xl">{project.name}<span className="text-violet-400">.</span></h1><p className="mt-4 text-lg text-white/55">{project.subtitle}</p><p className="mt-5 max-w-2xl text-sm leading-7 text-white/55">{project.description}</p></div>
        <div className="flex flex-wrap gap-2 lg:justify-end"><span className={`status-pill static ${project.status === 'Live' ? 'status-live' : 'status-muted'}`}><i/> {project.status}</span><a className="action-secondary" href={project.repo} target="_blank" rel="noreferrer"><Github size={14}/> Source code <ArrowUpRight size={13}/></a>{project.live && <a className="action-primary" href={project.live} target="_blank" rel="noreferrer"><Globe2 size={14}/> Live project <ArrowUpRight size={13}/></a>}</div>
      </div>
      <div className="mt-10 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/[.04] px-3 py-1.5 text-[11px] text-white/60">{item}</span>)}</div>
    </section>

    <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
      <div className={`case-hero bg-gradient-to-br ${project.accent}`}>
        {project.screenshots.length > 0 ? <>
          <img src={project.screenshots[0].src} alt={project.screenshots[0].alt} className="case-hero-image" />
          <div className="case-hero-shade" />
        </> : <><div className="case-hero-orbit"/><span className="case-hero-mark">{project.mark}</span></>}
        <span className="absolute bottom-5 left-6 z-10 rounded-full border border-white/15 bg-black/55 px-3 py-1.5 text-[10px] uppercase tracking-[.2em] text-white/75 backdrop-blur">{project.name} · Project overview</span>
      </div>
    </section>

    <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-20 sm:px-8 lg:grid-cols-[minmax(0,1fr)_300px]">
      <div className="space-y-10">
        <article><p className="eyebrow">01 / OVERVIEW</p><h2 className="case-heading">What it is</h2><p className="case-copy">{project.overview}</p></article>
        <article><p className="eyebrow">02 / THE CHALLENGE</p><h2 className="case-heading">The problem to solve</h2><p className="case-copy">{project.challenge}</p></article>
        <article><p className="eyebrow">03 / THE APPROACH</p><h2 className="case-heading">How the experience is shaped</h2><p className="case-copy">{project.approach}</p></article>
        <article><p className="eyebrow">04 / CAPABILITIES</p><h2 className="case-heading">Key features</h2><ul className="mt-5 grid gap-3 sm:grid-cols-2">{project.features.map((feature) => <li key={feature} className="feature-row"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-violet-300"/><span>{feature}</span></li>)}</ul></article>
      </div>
      <aside className="h-fit rounded-2xl border border-white/10 bg-white/[.03] p-5 lg:sticky lg:top-6"><p className="eyebrow">PROJECT DETAILS</p><dl className="mt-5 space-y-4 text-sm"><div><dt className="text-xs text-white/35">Category</dt><dd className="mt-1 text-white/80">{project.category}</dd></div><div><dt className="text-xs text-white/35">Availability</dt><dd className="mt-1 text-white/80">{project.status}</dd></div><div><dt className="text-xs text-white/35">Technologies</dt><dd className="mt-2 flex flex-wrap gap-1.5">{project.stack.map((tag) => <span key={tag} className="rounded-md bg-white/[.06] px-2 py-1 text-[10px] text-white/65">{tag}</span>)}</dd></div></dl><div className="mt-6 grid gap-2"><a href={project.repo} target="_blank" rel="noreferrer" className="action-secondary justify-center"><Github size={14}/> View repository <ArrowUpRight size={13}/></a>{project.live && <a href={project.live} target="_blank" rel="noreferrer" className="action-primary justify-center"><Globe2 size={14}/> Open live website <ArrowUpRight size={13}/></a>}</div></aside>
    </section>

    <section className="border-y border-white/[.07] bg-white/[.02] py-16"><div className="mx-auto max-w-6xl px-5 sm:px-8"><p className="eyebrow">05 / PRODUCT SCREENSHOTS</p><h2 className="case-heading">A closer look.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-white/45">Screens from the project interface, supplied for this portfolio case study.</p>
      {project.screenshots.length ? <div className="mt-8 grid gap-7">{project.screenshots.map((shot, index) => <figure key={shot.src} className="overflow-hidden rounded-2xl border border-white/10 bg-[#11111a] p-2 sm:p-3"><div className="overflow-hidden rounded-xl bg-black"><img src={shot.src} alt={shot.alt} className="h-auto w-full" loading={index === 0 ? 'eager' : 'lazy'}/></div><figcaption className="px-2 py-3 text-xs text-white/50"><span className="mr-3 text-violet-300">0{index + 1}</span>{shot.caption}</figcaption></figure>)}</div> : <div className="mt-8 rounded-2xl border border-dashed border-white/15 px-6 py-14 text-center"><p className="text-sm text-white/60">{project.screenshotNote || 'Screenshots will be added here.'}</p></div>}
    </div></section>

    <footer className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-8"><Link href="/" className="font-semibold text-white/70">devstak<span className="text-violet-400">.</span></Link><Link href="/#projects" className="hover:text-white">Explore more projects <ArrowUpRight size={12} className="inline"/></Link></footer>
  </main>;
}
