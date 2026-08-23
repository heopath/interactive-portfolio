import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowLeft, ArrowRight, ExternalLink, X, Map, BookOpen } from 'lucide-react'
import './style.css'

type Stop = { id:string; eyebrow:string; title:string; subtitle:string; story:string; skills:string[]; color:string; icon:string; project?:{name:string; role:string; result:string; link:string} }

const stops: Stop[] = [
  {id:'start',eyebrow:'CHAPTER 00',title:'배움의 출발점',subtitle:'720시간의 개발 여정',story:'문제를 코드로 해결하는 개발자가 되기 위해 부산 그린컴퓨터아카데미에서 AI 기반 지능형 웹서비스 과정을 시작했습니다.',skills:['2026.04—09','Problem Solving','Code Review'],color:'#f05d3f',icon:'✦'},
  {id:'java',eyebrow:'CHAPTER 01',title:'Java Forest',subtitle:'기초를 단단하게',story:'문법을 외우는 데서 멈추지 않고 객체지향 설계, 예외 처리와 컬렉션을 반복 실습하며 생각을 코드로 옮기는 힘을 길렀습니다.',skills:['Java','OOP','Collections','JSP'],color:'#4b8557',icon:'{}'},
  {id:'data',eyebrow:'CHAPTER 02',title:'Data Lab',subtitle:'데이터의 흐름을 설계하다',story:'MariaDB와 관계형 모델링을 익히고, 화면 뒤에서 데이터가 안전하게 생성·조회·수정되는 전체 흐름을 연결했습니다.',skills:['MariaDB','SQL','ERD','JPA'],color:'#3478a4',icon:'▦'},
  {id:'shop',eyebrow:'CHAPTER 03',title:'K-Market',subtitle:'첫 번째 팀 프로젝트',story:'상품·주문·회원·관리자까지 쇼핑몰의 전체 도메인을 설계했습니다. Git 브랜치와 PR을 활용해 팀이 함께 하나의 서비스를 완성하는 과정을 배웠습니다.',skills:['Spring Boot','MySQL','Thymeleaf','Teamwork'],color:'#9acb34',icon:'▣',project:{name:'ShoppingMall Project',role:'관리자 메인·상품·주문·설정 영역',result:'30개 이상의 비즈니스 테이블과 쇼핑 전 과정을 설계',link:'https://github.com/heopath/ShoppingMall-Project-Team3'}},
  {id:'spring',eyebrow:'CHAPTER 04',title:'Spring City',subtitle:'서비스가 움직이기 시작하다',story:'Spring Security, JPA, Docker와 GitHub Actions를 연결하며 기능 구현을 넘어 배포 가능한 서비스의 구조를 경험했습니다.',skills:['Spring Security','Docker','CI/CD','AWS'],color:'#7458a6',icon:'⬡',project:{name:'Spring Board & CI/CD',role:'게시판 CRUD와 자동 배포 흐름 학습',result:'코드 변경부터 빌드·배포까지의 파이프라인 구성',link:'https://github.com/heopath/spring-github-action-app'}},
  {id:'ai',eyebrow:'CHAPTER 05',title:'AI Terminal',subtitle:'All My Trips',story:'여행 조건을 이해해 맞춤 일정을 제안하는 AI 여행 플랫폼입니다. 추천에서 일정 편집, 실시간 정보, RAG 기반 개인화까지 확장 가능한 구조를 설계했습니다.',skills:['Gemini API','RAG','ChromaDB','Redis'],color:'#ee8d37',icon:'✈',project:{name:'All My Trips',role:'팀장 · 서비스/DB/AI 아키텍처 설계',result:'AI 추천과 사용자 편집을 결합한 여행 플래너',link:'https://github.com/heopath/TravelGuide-Project-Team1'}},
]

function Character({moving}:{moving:boolean}){return <div className={`character ${moving?'walking':''}`} aria-label="걷는 캐릭터"><div className="hair"/><div className="face"><i/><i/></div><div className="body"/><div className="arm a1"/><div className="arm a2"/><div className="leg l1"/><div className="leg l2"/></div>}

function App(){
 const [active,setActive]=useState(0), [open,setOpen]=useState<Stop|null>(null), [overview,setOverview]=useState(false), [moving,setMoving]=useState(false)
 const timer=useRef<number|undefined>(undefined)
 const go=(n:number)=>{const next=Math.max(0,Math.min(stops.length-1,n)); if(next===active)return; setMoving(true);setActive(next);window.clearTimeout(timer.current);timer.current=window.setTimeout(()=>setMoving(false),550)}
 useEffect(()=>{const key=(e:KeyboardEvent)=>{if(e.key==='ArrowRight'||e.key==='d')go(active+1);if(e.key==='ArrowLeft'||e.key==='a')go(active-1);if(e.key==='Escape'){setOpen(null);setOverview(false)}};window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key)},[active])
 const current=stops[active]
 return <main style={{'--accent':current.color} as React.CSSProperties}>
  <header><a className="brand" href="#">MINJAE<span>.DEV</span></a><div className="header-center">BACKEND DEVELOPER · AI EXPLORER</div><div className="header-actions"><button onClick={()=>setOverview(true)}><Map size={17}/> 빠르게 보기</button><a href="https://github.com/heopath" target="_blank" aria-label="GitHub"><b>GH</b></a></div></header>
  <section className="scene">
   <div className="sky"><span className="sun"/><span className="cloud c1"/><span className="cloud c2"/></div>
   <div className="chapter-copy"><p>{current.eyebrow}</p><h1>{current.title}</h1><h2>{current.subtitle}</h2><p className="story">{current.story}</p><div className="chips">{current.skills.map(x=><span key={x}>{x}</span>)}</div>{current.project&&<button className="detail" onClick={()=>setOpen(current)}>프로젝트 살펴보기 <ArrowRight size={18}/></button>}</div>
   <div className="world" style={{transform:`translateX(calc(50vw - ${active*260+130}px))`}}>{stops.map((s,i)=><button key={s.id} className={`landmark ${i===active?'active':''}`} style={{left:i*260}} onClick={()=>go(i)} aria-label={`${s.title}로 이동`}><span className="building" style={{'--stop':s.color} as React.CSSProperties}>{s.icon}</span><span className="label">{s.title}</span></button>)}</div>
   <div className="ground"><div className="road"/><div className="char-wrap"><Character moving={moving}/></div></div>
  </section>
  <footer><div className="controls"><button onClick={()=>go(active-1)} disabled={active===0}><ArrowLeft/></button><span><kbd>←</kbd><kbd>→</kbd> 키로 여정을 탐색하세요</span><button onClick={()=>go(active+1)} disabled={active===stops.length-1}><ArrowRight/></button></div><div className="progress"><b>{String(active+1).padStart(2,'0')}</b><span>{stops.map((_,i)=><i key={i} className={i<=active?'on':''}/>)}</span><em>{String(stops.length).padStart(2,'0')}</em></div></footer>
  {open&&<div className="overlay" onClick={()=>setOpen(null)}><article className="modal" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setOpen(null)}><X/></button><span className="modal-icon" style={{background:open.color}}>{open.icon}</span><p>{open.eyebrow}</p><h2>{open.project?.name}</h2><div className="case"><div><small>MY ROLE</small><strong>{open.project?.role}</strong></div><div><small>OUTCOME</small><strong>{open.project?.result}</strong></div></div><p className="modal-story">{open.story}</p><div className="chips">{open.skills.map(x=><span key={x}>{x}</span>)}</div><a className="github-link" href={open.project?.link} target="_blank"><b>GH</b> GitHub에서 코드 보기 <ExternalLink size={15}/></a></article></div>}
  {overview&&<div className="overlay" onClick={()=>setOverview(false)}><article className="modal overview" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setOverview(false)}><X/></button><p>QUICK OVERVIEW</p><h2>한눈에 보는 성장 지도</h2><div className="overview-list">{stops.map((s,i)=><button key={s.id} onClick={()=>{go(i);setOverview(false)}}><span style={{background:s.color}}>{s.icon}</span><div><small>{s.eyebrow}</small><strong>{s.title}</strong><em>{s.subtitle}</em></div><ArrowRight/></button>)}</div><div className="source"><BookOpen size={16}/> Notion의 학습 기록과 GitHub 프로젝트를 바탕으로 구성했습니다.</div></article></div>}
 </main>
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>)
