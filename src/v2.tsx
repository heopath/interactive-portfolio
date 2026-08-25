import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowLeft, ArrowRight, Check, ChevronRight, ExternalLink, Mail, Map, X } from 'lucide-react'
import './v2.css'

type Project = {
  period: string
  team: string
  role: string
  outcome: string
  proof: string[]
  metrics?: string[]
  links: { label: string; href: string }[]
}

type Stop = {
  id: string
  title: string
  subtitle: string
  story: string
  skills: string[]
  color: string
  kind: string
  project?: Project
}

const stops: Stop[] = [
  { id: 'start', title: 'Backend Journey', subtitle: '현장을 이해하는 백엔드 개발자', story: '21개월의 MES·IT 인프라 운영 경험을 바탕으로 사용자의 업무 흐름을 이해하고, 개발부터 배포·운영까지 연결합니다.', skills: ['Java / Spring', 'IT 인프라 21개월', 'Service Operation'], color: '#ff7657', kind: 'home' },
  { id: 'field', title: 'Field Base', subtitle: '운영 현장에서 배운 시스템의 책임', story: '생산 프로그램과 파일 서버, 권한, 보안 솔루션과 현장 장비를 운영하며 코드가 실제 업무와 연결될 때 비로소 가치가 생긴다는 기준을 얻었습니다.', skills: ['MES 유지보수', 'Windows Server', 'AD / ACL'], color: '#74aa6a', kind: 'factory' },
  { id: 'mes', title: 'Smart Factory', subtitle: 'PVC 재활용 공정 MES', story: 'C# WinForms와 Oracle DB를 연결해 원재료 투입, LOT, 재고와 공정 데이터를 추적하고 설비 상태를 직관적으로 보여주는 현장 화면을 구현했습니다.', skills: ['C# WinForms', 'Oracle DB', 'Traceability'], color: '#4d9ec5', kind: 'plant', project: { period: '2022.10 — 12', team: '교육 프로젝트', role: '현장 통합 UI · 1·2차 분쇄 공정 · DB 연동 · 최종 발표', outcome: '설비 가동과 저장소 현황을 공정도 기반 애니메이션으로 시각화', proof: ['원재료 투입과 LOT 추가·삭제, 재고 관리 구현', 'Oracle DB 연동과 공정 데이터 추적', '공정도 기반 생산 현황 시각화'], links: [{ label: 'GitHub', href: 'https://github.com/heopath/2022-SmartFactory' }] } },
  { id: 'spring', title: 'Spring Transition', subtitle: '운영 경험을 웹 백엔드로 확장', story: 'Java와 Spring Boot, 관계형 데이터 모델링, Docker와 AWS 배포를 학습하며 기존 C#·인프라 경험을 웹 서비스의 설계와 운영 역량으로 확장했습니다.', skills: ['Java 21', 'Spring Boot', 'Docker / AWS'], color: '#8b79c6', kind: 'academy' },
  { id: 'shop', title: 'K-Market', subtitle: '운영 흐름을 구현한 쇼핑몰', story: '상품 등록부터 주문·배송·반품까지 이어지는 관리자 운영 흐름을 구현하고 GitHub Actions와 AWS EC2를 연결해 반복 가능한 배포 환경을 구성했습니다.', skills: ['Spring Boot', 'MySQL', 'GitHub Actions'], color: '#b4d446', kind: 'market', project: { period: '2026.06 — 07', team: '팀 프로젝트', role: '관리자 대시보드 · 환경설정 · 상품 · 주문/배송/반품 · CI/CD', outcome: '관리자가 상품과 주문 상태를 한 화면에서 처리하는 운영 흐름 완성', proof: ['회원·판매자·관리자 권한 구분', 'JPA·MyBatis 기반 상품과 주문 처리', 'EC2 서비스 재시작까지 자동 배포'], links: [{ label: 'GitHub', href: 'https://github.com/heopath/ShoppingMall-Project-Team3' }] } },
  { id: 'trips', title: 'All My Trips', subtitle: '계획부터 현장 입장까지 하나의 여정', story: '여행 일정과 AI 추천, 관광 티켓 예약·결제·QR 검표를 하나의 서비스로 연결했습니다. 팀장으로서 인증·인프라와 티켓 전 과정을 맡았습니다.', skills: ['Spring Boot 4', 'Redis Lua', 'AWS CI/CD'], color: '#ff9d45', kind: 'airport', project: { period: '2026.08 — 09', team: '5인 팀 · PM/팀장', role: '인증·보안 · 인프라 · 티켓 예약/결제/발권/검표 · 통합 검수', outcome: '예약부터 현장 검표까지의 전체 흐름과 반복 가능한 운영 배포 완성', proof: ['Redis Lua로 대기열 등록·순번·입장을 원자적으로 처리', '결제 승인부터 QR 발권·중복 검표 방지까지 상태 연결', 'GitHub Actions → OIDC → S3 → SSM 자동 배포'], metrics: ['서버 테스트 718개', '화면 수용 테스트 37개', '재고 10개 · 동시 접근 30명', '최근 전체 배포 2분 23초'], links: [{ label: 'GitHub', href: 'https://github.com/heopath/TravelGuide-Project-Team1' }, { label: 'Live', href: 'https://allmytrip.click/home' }, { label: 'Wiki', href: 'https://github.com/heopath/TravelGuide-Project-Team1/wiki' }] } },
  { id: 'next', title: 'Next Stage', subtitle: '신뢰를 만드는 개발자로', story: '기능 구현 이후의 보안, 배포와 운영까지 고려하며 동료에게는 함께 일하기 좋은 개발자, 사용자에게는 실제 도움이 되는 서비스를 만들겠습니다.', skills: ['Backend Engineering', 'Reliable Delivery', 'Clear Communication'], color: '#e66f66', kind: 'tower' }
]

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
      <a className="logo" href="/">MINJAE<span>.DEV</span></a>
      <div className="quest-title"><span>ACTIVE JOURNEY</span><b>Java · Spring Backend Developer</b></div>
      <div className="hud-actions">
        <button onClick={event => { lastTriggerRef.current = event.currentTarget; setMapOpen(true) }}><Map /> 전체 지도</button>
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
      <button className="drawer-close" onClick={closePanel} aria-label="전체 지도 닫기"><X /></button>
      <h2 id="map-heading">나의 개발 여정</h2><p>게임을 건너뛰고 원하는 경력 지점으로 바로 이동할 수 있습니다.</p>
      <div className="map-route">{stops.map((stop, index) => <button key={stop.id} onClick={() => { go(index); closePanel() }} className={index === active ? 'active' : ''}><span style={{ background: stop.color }}>{String(index + 1).padStart(2, '0')}</span><div><b>{stop.title}</b><small>{stop.subtitle}</small></div><ChevronRight /></button>)}</div>
      <div className="map-contact"><a href="mailto:heocoding@gmail.com"><Mail /> heocoding@gmail.com</a><a href="https://github.com/heopath" target="_blank" rel="noreferrer"><b>GH</b> GitHub</a></div>
    </aside>}
    {panelOpen && <button className="shade" onClick={closePanel} aria-label="열린 패널 닫기" tabIndex={-1} />}
  </main>
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>)
