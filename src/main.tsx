import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowLeft, ArrowRight, ExternalLink, X, Map, BookOpen, Mail, CheckCircle2 } from 'lucide-react'
import './style.css'

type ProjectLink = { label:string; href:string }
type Project = {
  name:string
  period:string
  status?:string
  team?:string
  role:string
  result:string
  summary:string
  highlights:string[]
  metrics?:string[]
  links:ProjectLink[]
}
type Stop = { id:string; eyebrow:string; title:string; subtitle:string; story:string; skills:string[]; color:string; icon:string; project?:Project }

const stops: Stop[] = [
  {id:'start',eyebrow:'CHAPTER 00',title:'Backend Journey',subtitle:'현장을 이해하는 백엔드 개발자',story:'21개월의 MES·IT 인프라 운영 경험을 바탕으로 사용자의 업무 흐름을 이해하고, 개발부터 배포·운영까지 연결하는 Java/Spring 백엔드 개발자입니다.',skills:['Java / Spring','IT 인프라 21개월','Service Operation'],color:'#f05d3f',icon:'✦'},
  {id:'field',eyebrow:'CHAPTER 01',title:'Field Base',subtitle:'운영 현장에서 배운 시스템의 책임',story:'IT혁신팀에서 생산 프로그램과 파일 서버, 권한, 보안 솔루션과 현장 장비를 운영했습니다. 코드가 실제 업무와 연결될 때 비로소 가치가 생긴다는 기준을 얻었습니다.',skills:['MES 유지보수','Windows Server','AD / ACL','Troubleshooting'],color:'#4b8557',icon:'⌁'},
  {id:'mes',eyebrow:'CHAPTER 02',title:'Smart Factory',subtitle:'PVC 재활용 공정 MES',story:'C# WinForms와 Oracle DB를 연결해 원재료 투입, LOT, 재고와 공정 데이터를 추적하고 설비 상태를 직관적으로 확인할 수 있는 현장 화면을 구현했습니다.',skills:['C# WinForms','Oracle DB','Traceability','LiveCharts'],color:'#3478a4',icon:'▦',project:{name:'PVC 재활용 공정 MES',period:'2022.10.29 — 12.17',team:'교육 프로젝트',role:'현장 통합 UI · 1·2차 분쇄 공정 · DB 연동 · 최종 발표',result:'설비 가동과 저장소 현황을 애니메이션으로 시각화',summary:'제조 공정의 데이터가 현장 작업자에게 정확하고 빠르게 전달되도록 공정 화면과 데이터 흐름을 연결했습니다.',highlights:['원재료 투입과 LOT 추가·삭제, 재고 관리 구현','Oracle DB 연동과 공정 데이터 추적','공정도 기반 애니메이션과 생산 현황 시각화'],links:[{label:'GitHub',href:'https://github.com/heopath/2022-SmartFactory'}]}},
  {id:'spring',eyebrow:'CHAPTER 03',title:'Spring Transition',subtitle:'운영 경험을 웹 백엔드로 확장하다',story:'Java와 Spring Boot, 관계형 데이터 모델링, Docker와 AWS 배포를 학습하며 기존 C#·인프라 경험을 웹 서비스의 설계와 운영 역량으로 확장했습니다.',skills:['Java 21','Spring Boot','JPA / MyBatis','Docker / AWS'],color:'#7458a6',icon:'⬡'},
  {id:'shop',eyebrow:'CHAPTER 04',title:'K-Market',subtitle:'운영 흐름을 구현한 쇼핑몰',story:'상품 등록부터 주문·배송·반품까지 이어지는 관리자 운영 흐름을 구현하고, GitHub Actions와 AWS EC2를 연결해 반복 가능한 배포 환경을 구성했습니다.',skills:['Spring Boot','MySQL','Thymeleaf','GitHub Actions'],color:'#9acb34',icon:'▣',project:{name:'K-Market',period:'2026.06.12 — 07.14',team:'팀 프로젝트',role:'관리자 대시보드 · 환경설정 · 상품 · 주문/배송/반품 · CI/CD',result:'관리자가 상품과 주문 상태를 한 화면에서 처리하는 운영 흐름 완성',summary:'판매자가 등록한 상품과 고객 주문, 관리자의 처리 결과가 각 단계에 일관되게 반영되도록 관리자 도메인과 상태 흐름을 연결했습니다.',highlights:['일반회원·판매자·관리자 권한 구분','JPA·MyBatis를 활용한 상품과 주문 데이터 처리','Gradle 빌드부터 EC2 서비스 재시작까지 자동 배포'],links:[{label:'GitHub',href:'https://github.com/heopath/ShoppingMall-Project-Team3'}]}},
  {id:'all-my-trips',eyebrow:'CHAPTER 05',title:'All My Trips',subtitle:'계획부터 현장 입장까지 하나의 여정으로',story:'여행 일정과 AI 추천, 관광 티켓 예약·결제·QR 검표를 하나의 서비스로 연결했습니다. 팀장으로서 인증·인프라와 티켓 전 과정을 맡고 통합·배포를 검수했습니다.',skills:['Spring Boot 4','PostgreSQL','Redis Lua','AWS CI/CD'],color:'#ee8d37',icon:'✈',project:{name:'All My Trips',period:'2026.08.03 — 09.04',status:'v0.0.5 · 핵심 기능 구현 및 운영 배포',team:'5인 팀 · PM/팀장',role:'인증·보안 · 인프라 · 티켓 예약/결제/발권/검표 · 통합 검수',result:'예약부터 현장 검표까지의 전체 흐름과 반복 가능한 운영 배포 완성',summary:'분산된 여행 계획과 예약 과정을 하나로 연결한 AI 여행 플랫폼입니다. 팀 전체 기능과 개인 기여를 구분하고, 개인 사례에서는 운영 안정성과 데이터 정확성에 집중합니다.',highlights:['Redis Lua로 대기열 등록·순번·입장을 원자적으로 처리','결제 승인부터 QR 발권·중복 검표 방지까지 상태 흐름 연결','GitHub Actions → OIDC → S3 → SSM → systemd 자동 배포'],metrics:['서버 테스트 718개','화면 수용 테스트 37개','재고 10개 · 동시 접근 30명 · 예약 성공 10건','최근 기록 기준 전체 배포 2분 23초'],links:[{label:'GitHub',href:'https://github.com/heopath/TravelGuide-Project-Team1'},{label:'Live',href:'https://allmytrip.click/home'},{label:'Wiki',href:'https://github.com/heopath/TravelGuide-Project-Team1/wiki'}]}},
  {id:'next',eyebrow:'CHAPTER 06',title:'Next Stage',subtitle:'현장을 이해하고 신뢰를 만드는 개발자',story:'기능 구현 이후의 보안, 배포와 운영까지 고려하며 동료에게는 함께 일하기 좋은 개발자, 사용자에게는 실제 도움이 되는 서비스를 만드는 개발자로 성장하겠습니다.',skills:['Backend Engineering','Reliable Delivery','Clear Communication'],color:'#8f6454',icon:'→'},
]

function Character({moving}:{moving:boolean}){return <div className={`character ${moving?'walking':''}`} aria-label="걷는 캐릭터"><div className="hair"/><div className="face"><i/><i/></div><div className="body"/><div className="arm a1"/><div className="arm a2"/><div className="leg l1"/><div className="leg l2"/></div>}

function App(){
 const [active,setActive]=useState(0), [open,setOpen]=useState<Stop|null>(null), [overview,setOverview]=useState(false), [moving,setMoving]=useState(false)
 const timer=useRef<number|undefined>(undefined)
 const go=(n:number)=>{const next=Math.max(0,Math.min(stops.length-1,n)); if(next===active)return; setMoving(true);setActive(next);window.clearTimeout(timer.current);timer.current=window.setTimeout(()=>setMoving(false),550)}
 useEffect(()=>{const key=(e:KeyboardEvent)=>{if(e.key==='ArrowRight'||e.key==='d')go(active+1);if(e.key==='ArrowLeft'||e.key==='a')go(active-1);if(e.key==='Escape'){setOpen(null);setOverview(false)}};window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key)},[active])
 const current=stops[active]
 return <main style={{'--accent':current.color} as React.CSSProperties}>
  <header><a className="brand" href="#">MINJAE<span>.DEV</span></a><div className="header-center">JAVA · SPRING BACKEND DEVELOPER</div><div className="header-actions"><button onClick={()=>setOverview(true)}><Map size={17}/> 빠르게 보기</button><a href="https://github.com/heopath" target="_blank" rel="noreferrer" aria-label="GitHub"><b>GH</b></a></div></header>
  <section className="scene">
   <div className="sky"><span className="sun"/><span className="cloud c1"/><span className="cloud c2"/></div>
   <div className="chapter-copy"><p>{current.eyebrow}</p><h1>{current.title}</h1><h2>{current.subtitle}</h2><p className="story">{current.story}</p><div className="chips">{current.skills.map(x=><span key={x}>{x}</span>)}</div>{current.project&&<button className="detail" onClick={()=>setOpen(current)}>프로젝트 살펴보기 <ArrowRight size={18}/></button>}</div>
   <div className="world" style={{transform:`translateX(calc(50vw - ${active*260+130}px))`}}>{stops.map((s,i)=><button key={s.id} className={`landmark ${i===active?'active':''}`} style={{left:i*260}} onClick={()=>go(i)} aria-label={`${s.title}로 이동`}><span className="building" style={{'--stop':s.color} as React.CSSProperties}>{s.icon}</span><span className="label">{s.title}</span></button>)}</div>
   <div className="ground"><div className="road"/><div className="char-wrap"><Character moving={moving}/></div></div>
  </section>
  <footer><div className="controls"><button onClick={()=>go(active-1)} disabled={active===0}><ArrowLeft/></button><span><kbd>←</kbd><kbd>→</kbd> 키로 여정을 탐색하세요</span><button onClick={()=>go(active+1)} disabled={active===stops.length-1}><ArrowRight/></button></div><div className="progress"><b>{String(active+1).padStart(2,'0')}</b><span>{stops.map((_,i)=><i key={i} className={i<=active?'on':''}/>)}</span><em>{String(stops.length).padStart(2,'0')}</em></div></footer>
  {open&&<div className="overlay" onClick={()=>setOpen(null)}><article className="modal project-modal" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setOpen(null)} aria-label="프로젝트 상세 닫기"><X/></button><span className="modal-icon" style={{background:open.color}}>{open.icon}</span><p>{open.eyebrow}</p><h2>{open.project?.name}</h2><div className="project-meta"><span>{open.project?.period}</span>{open.project?.status&&<span>{open.project.status}</span>}{open.project?.team&&<span>{open.project.team}</span>}</div><p className="modal-story lead">{open.project?.summary}</p><div className="case"><div><small>MY ROLE</small><strong>{open.project?.role}</strong></div><div><small>OUTCOME</small><strong>{open.project?.result}</strong></div></div><section className="project-section"><small>PROBLEM SOLVING</small><ul>{open.project?.highlights.map(item=><li key={item}><CheckCircle2 size={16}/><span>{item}</span></li>)}</ul></section>{open.project?.metrics&&<section className="project-section"><small>VERIFIED RESULTS</small><div className="metrics">{open.project.metrics.map(item=><strong key={item}>{item}</strong>)}</div></section>}<div className="chips">{open.skills.map(x=><span key={x}>{x}</span>)}</div><div className="project-links">{open.project?.links.map(link=><a key={link.label} className="github-link" href={link.href} target="_blank" rel="noreferrer"><b>{link.label==='GitHub'?'GH':'↗'}</b>{link.label}<ExternalLink size={15}/></a>)}</div></article></div>}
  {overview&&<div className="overlay" onClick={()=>setOverview(false)}><article className="modal overview" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setOverview(false)} aria-label="빠르게 보기 닫기"><X/></button><p>QUICK OVERVIEW</p><h2>현장을 이해하고,<br/>운영까지 연결합니다.</h2><p className="overview-intro">21개월의 MES·IT 인프라 운영 경험을 바탕으로 Java/Spring 서비스의 인증, 데이터 흐름, 배포와 운영을 함께 고민합니다.</p><div className="profile-facts"><span><b>21개월</b>IT 운영 실무</span><span><b>3개</b>대표 프로젝트</span><span><b>Java/Spring</b>희망 직무</span></div><div className="overview-list">{stops.map((s,i)=><button key={s.id} onClick={()=>{go(i);setOverview(false)}}><span style={{background:s.color}}>{s.icon}</span><div><small>{s.eyebrow}</small><strong>{s.title}</strong><em>{s.subtitle}</em></div><ArrowRight/></button>)}</div><div className="overview-contact"><a href="https://github.com/heopath" target="_blank" rel="noreferrer"><b>GH</b> GitHub</a><a href="mailto:heocoding@gmail.com"><Mail size={16}/> heocoding@gmail.com</a></div><div className="source"><BookOpen size={16}/> 입사지원서, Notion WBS와 최신 GitHub 프로젝트를 바탕으로 구성했습니다.</div></article></div>}
 </main>
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>)
