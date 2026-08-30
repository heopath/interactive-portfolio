import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowLeft, ArrowRight, BookOpen, Check, ChevronRight, ExternalLink, Mail, Map, X } from 'lucide-react'
import './v2.css'
import { stops, type Stop } from './portfolioData'

function PixelHero({ moving }: { moving: boolean }) {
  return <div className={`pixel-hero ${moving ? 'moving' : ''}`} aria-label="경력 세계를 걷는 허민재 캐릭터">
    <span className="hero-shadow" /><span className="backpack" /><span className="head"><i /><b /></span><span className="torso" /><span className="arm left" /><span className="arm right" /><span className="foot left" /><span className="foot right" />
  </div>
}

function Landmark({ stop, index, active, onSelect }: { stop: Stop; index: number; active: boolean; onSelect: () => void }) {
  return <button className={`landmark ${stop.kind} ${active ? 'active' : ''}`} style={{ left: `${index * 310}px`, '--landmark': stop.color } as React.CSSProperties} onClick={onSelect} aria-label={`${stop.title} 지점으로 이동`} aria-current={active ? 'step' : undefined}>
    <span className="beacon"><i /></span>
    <span className="structure"><i className="roof" /><i className="window w1" /><i className="window w2" /><i className="door" /><i className="detail-a" /><i className="detail-b" /></span>
    <span className="station-sign"><b>{String(index + 1).padStart(2, '0')}</b>{stop.title}</span>
  </button>
}

function App() {
  const [active, setActive] = useState(0)
  const [moving, setMoving] = useState(false)
  const [details, setDetails] = useState(false)
  const [mapOpen, setMapOpen] = useState(false)
  const timer = useRef<number | undefined>(undefined)
  const dialogRef = useRef<HTMLElement | null>(null)
  const lastTriggerRef = useRef<HTMLElement | null>(null)
  const current = stops[active]
  const panelOpen = details || mapOpen

  const closePanel = () => {
    const trigger = lastTriggerRef.current
    setDetails(false)
    setMapOpen(false)
    window.requestAnimationFrame(() => trigger?.focus())
  }

  const go = (next: number) => {
    const bounded = Math.max(0, Math.min(stops.length - 1, next))
    if (bounded === active) return
    setDetails(false)
    setMoving(true)
    setActive(bounded)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setMoving(false), 620)
  }

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (panelOpen) return
      const target = event.target as HTMLElement | null
      if (target?.closest('button, a, input, textarea, select, [contenteditable="true"]')) return
      if (event.key === 'ArrowRight' || event.key.toLowerCase() === 'd') { event.preventDefault(); go(active + 1) }
      if (event.key === 'ArrowLeft' || event.key.toLowerCase() === 'a') { event.preventDefault(); go(active - 1) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, panelOpen])

  useEffect(() => {
    if (!panelOpen || !dialogRef.current) return
    const dialog = dialogRef.current
    const focusable = Array.from(dialog.querySelectorAll<HTMLElement>('button, a[href], input, textarea, select, [tabindex]:not([tabindex="-1"])'))
    focusable[0]?.focus()
    const trapFocus = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); closePanel(); return }
      if (event.key !== 'Tab' || focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', trapFocus)
    return () => document.removeEventListener('keydown', trapFocus)
  }, [panelOpen])

  return <main className={`game ${current.project ? 'has-project' : ''}`} style={{ '--accent': current.color } as React.CSSProperties}>
    <header className="hud-top" inert={panelOpen || undefined} aria-hidden={panelOpen || undefined}>
      <a className="logo" href={import.meta.env.BASE_URL}>MINJAE<span>.DEV</span></a>
      <div className="quest-title"><span>ACTIVE JOURNEY</span><b>Java · Spring Backend Developer</b></div>
      <div className="hud-actions">
        <button onClick={event => { lastTriggerRef.current = event.currentTarget; setMapOpen(true) }}><Map /> 30초 요약</button>
        <a href="https://github.com/heopath" target="_blank" rel="noreferrer" aria-label="GitHub"><b>GH</b></a>
      </div>
    </header>

    <section className="game-screen" aria-live="polite" inert={panelOpen || undefined} aria-hidden={panelOpen || undefined}>
      <div className="sky-layer"><span className="sun" /><span className="cloud cloud-a" /><span className="cloud cloud-b" /></div>
      <div className="mountain-layer far" style={{ transform: `translateX(${-active * 18}px)` }}><i /><i /><i /></div>
      <div className="mountain-layer near" style={{ transform: `translateX(${-active * 34}px)` }}><i /><i /><i /><i /></div>
      <div className="world-layer" style={{ transform: `translateX(calc(50vw - ${active * 310 + 155}px))` }}>
        <div className="path-line" />
        {stops.map((stop, index) => <Landmark key={stop.id} stop={stop} index={index} active={index === active} onSelect={() => go(index)} />)}
      </div>
      <div className="ground-layer"><div className="road"><i /><i /><i /></div><div className="hero-position"><PixelHero moving={moving} /></div></div>

      <article className="story-panel" key={current.id}>
        <div className="story-count"><span>STAGE</span><b>{String(active + 1).padStart(2, '0')}</b><em>/ {String(stops.length).padStart(2, '0')}</em></div>
        <div className="story-copy"><h1>{current.title}</h1><h2>{current.subtitle}</h2><p>{current.story}</p><div className="skill-row">{current.skills.map(skill => <span key={skill}>{skill}</span>)}</div></div>
        {current.project && <button className="enter-quest" onClick={event => { lastTriggerRef.current = event.currentTarget; setDetails(true) }}>프로젝트 입장 <ChevronRight /></button>}
      </article>

      <div className="mini-map" aria-hidden="true">{stops.map((stop, index) => <i key={stop.id} className={index <= active ? 'passed' : ''} style={{ '--dot': stop.color } as React.CSSProperties} />)}</div>
    </section>

    <footer className="hud-bottom" inert={panelOpen || undefined} aria-hidden={panelOpen || undefined}>
      <button onClick={() => go(active - 1)} disabled={active === 0}><ArrowLeft /><span>이전 지역</span></button>
      <p><kbd>A</kbd><kbd>D</kbd><span className="desktop-hint">또는 방향키로 캐릭터를 이동하세요</span><span className="mobile-hint">캐릭터 이동</span></p>
      <button onClick={() => go(active + 1)} disabled={active === stops.length - 1}><span>다음 지역</span><ArrowRight /></button>
    </footer>

    {details && current.project && <aside ref={dialogRef} className="quest-drawer" role="dialog" aria-modal="true" aria-labelledby="quest-heading">
      <button className="drawer-close" onClick={closePanel} aria-label="프로젝트 기록 닫기"><X /></button>
      <div className="drawer-head"><span>QUEST COMPLETE</span><h2 id="quest-heading">{current.title}</h2><p>{current.project.outcome}</p></div>
      <div className="quest-meta"><div><span>PERIOD</span><b>{current.project.period}</b></div><div><span>PARTY</span><b>{current.project.team}</b></div></div>
      <section><h3>나의 역할</h3><p>{current.project.role}</p></section>
      <section><h3>해결 기록</h3><ul>{current.project.proof.map(item => <li key={item}><Check /><span>{item}</span></li>)}</ul></section>
      {current.project.metrics && <section><h3>검증 결과</h3><div className="metric-grid">{current.project.metrics.map(item => <b key={item}>{item}</b>)}</div></section>}
      <div className="quest-links">{current.project.links.map(link => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}<ExternalLink /></a>)}</div>
    </aside>}

    {mapOpen && <aside ref={dialogRef} className="map-drawer" role="dialog" aria-modal="true" aria-labelledby="map-heading">
      <button className="drawer-close" onClick={closePanel} aria-label="30초 요약 닫기"><X /></button>
      <h2 id="map-heading">핵심 경험 한눈에 보기</h2><p>대표 백엔드 프로젝트부터 인프라 운영 경험까지 빠르게 확인할 수 있습니다.</p>
      <div className="map-route">{stops.map((stop, index) => <button key={stop.id} onClick={() => { go(index); closePanel() }} className={index === active ? 'active' : ''}><span style={{ background: stop.color }}>{String(index + 1).padStart(2, '0')}</span><div><b>{stop.title}</b><small>{stop.subtitle}</small></div><ChevronRight /></button>)}</div>
      <div className="map-contact"><a href="mailto:heocoding@gmail.com"><Mail /> heocoding@gmail.com</a><a href="https://github.com/heopath" target="_blank" rel="noreferrer"><b>GH</b> GitHub</a><a href="https://blog.naver.com/heo-world" target="_blank" rel="noreferrer"><BookOpen /> Blog</a></div>
    </aside>}
    {panelOpen && <button className="shade" onClick={closePanel} aria-label="열린 패널 닫기" tabIndex={-1} />}
  </main>
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>)
