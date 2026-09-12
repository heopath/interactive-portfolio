import React from 'react'
import { createRoot } from 'react-dom/client'
import { stops } from './portfolioData'
import './summary.css'

const base = import.meta.env.BASE_URL
const trips = stops.find(s => s.id === 'trips')!.project!
const shop = stops.find(s => s.id === 'shop')!.project!

function App() {
  return <>
    <a className="skip" href="#content">본문 바로가기</a>
    <header className="header"><a className="brand" href={base}>MINJAE<span>.DEV</span></a><nav aria-label="주요 메뉴"><a href="#trips">대표 프로젝트</a><a href="#experience">경험</a><a href={`${base}v2.html`}>게임형으로 보기</a></nav></header>
    <main id="content">
      <section className="intro" aria-labelledby="intro-title">
        <div><p className="eyebrow">허민재 / JAVA · SPRING BACKEND</p><h1 id="intro-title">IT 인프라 운영에서<br/>웹 서비스 구현·배포까지.</h1><p className="lead">MES·IT 인프라 운영 1년 10개월. Java·Spring 교육 수료 후 백엔드 신입 직무에 지원하고 있습니다.</p><p>All My Trips 팀 프로젝트에서 PM·팀장 역할과 백엔드 구현에 참여했고, AWS 배포와 Oracle Cloud 이관을 경험했습니다.</p><div className="actions"><a className="primary" href={`${base}minjae-backend-portfolio.pdf`} download>포트폴리오 PDF 다운로드</a><a href="https://github.com/heopath">GitHub</a><a href="mailto:heocoding@gmail.com">이메일</a></div></div>
        <aside className="summary"><p className="eyebrow">AT A GLANCE</p><dl><dt>지원 직무</dt><dd>Java·Spring 백엔드 신입</dd><dt>이전 업무</dt><dd>MES 유지보수 · IT 인프라 운영</dd><dt>대표 경험</dt><dd>5인 팀 프로젝트 · 클라우드 배포</dd><dt>교육</dt><dd>Java·Spring 과정 수료<br/><small>2026.09.04</small></dd></dl></aside>
      </section>
      <section id="trips" className="section"><div className="section-heading"><span>01 / SELECTED PROJECT</span><h2>All My Trips</h2><p>2026.08.03 - 2026.09.04 · 5인 팀 프로젝트</p></div>
        <div className="project-layout"><div><h3>여행 계획부터 티켓 예약까지</h3><p>여행 정보 탐색, 일정 관리, 체험 티켓 예약·모의 결제·QR 발권·검표 기능을 구현한 팀 웹 프로젝트입니다.</p><h3>개인 참여 범위</h3><p>{trips.role}</p><ul>{trips.proof.map(item=><li key={item}>{item}</li>)}</ul><div className="actions">{trips.links.map(link=><a key={link.label} href={link.href}>{link.label} ↗</a>)}</div></div><figure><img src={`${base}allmytrips-ticket-list.png`} alt="All My Trips 예약 페이지의 체험 티켓 목록 화면"/><figcaption>Oracle Cloud 이관 과정에서 저장한 팀 서비스 화면 일부. 개인 단독 제작 화면을 의미하지 않습니다.</figcaption></figure></div>
        <div className="note"><h3>프로젝트에 적용한 기술과 학습 범위</h3><p>Java·Spring Boot, JPA·MyBatis, PostgreSQL, Redis를 사용했습니다. AI 도구의 도움을 받아 구현했으며, 요청 처리 흐름과 데이터 접근 코드, Redis 대기열의 동작 원리를 학습·보완하고 있습니다.</p><p>JPA는 Entity·Repository 기반 CRUD와 연관관계 매핑에, MyBatis는 Mapper XML 기반 SQL 처리에 사용했습니다. 재고 제어는 Spring 트랜잭션과 PostgreSQL 행 잠금·조건부 UPDATE를 적용한 프로젝트 경험입니다.</p></div>
      </section>
      <section className="section" id="deployment"><div className="section-heading"><span>02 / DEPLOYMENT</span><h2>AWS에서 Oracle Cloud로</h2><p>포트폴리오를 확인할 수 있는 실행 환경을 유지하기 위한 이관 경험</p></div><ol className="deployment"><li><b>기존 배포</b><p>AWS EC2·RDS 배포와 GitHub Actions 기반 빌드·배포 흐름을 경험했습니다.</p></li><li><b>환경·데이터 이전</b><p>Oracle Cloud E2 Micro 환경으로 옮기고, 앱·DB 서버를 분리해 PostgreSQL 데이터를 이전했습니다.</p></li><li><b>서비스 연결</b><p>Nginx·HTTPS를 설정하고 allmytrip.click에서 홈·예약·티켓 화면을 확인한 기록을 남겼습니다.</p></li></ol><h3>제약과 대응</h3><p>A1 인스턴스는 용량 부족으로 생성되지 않아 E2 Micro 환경으로 진행했습니다. 포트폴리오 확인 목적에 맞춰 저메모리 배포 환경을 구성하는 경험이었습니다.</p><p className="muted">포트폴리오 시연용 서비스입니다. 과거 화면 확인 기록이 모든 기능의 현재 정상 동작을 보장하지는 않으며, 외부 API·모의 결제·메일 등은 연동 상태에 따라 별도 확인이 필요합니다.</p></section>
      <section className="section" id="experience"><div className="section-heading"><span>03 / EXPERIENCE</span><h2>프로젝트와 실무 경험</h2></div><div className="experience"><article><p className="eyebrow">2026.06 - 07 / TEAM PROJECT</p><h3>K-market</h3><p>{shop.role}</p><p>Spring Boot·Thymeleaf·JPA·MyBatis·MySQL을 활용한 데이터 처리와 화면 연동, GitHub Actions·AWS EC2 배포 환경 구성 경험입니다.</p><a href={shop.links[0].href}>프로젝트 코드 ↗</a></article><article><p className="eyebrow">2023.12 - 2025.09 / 1년 10개월</p><h3>㈜용산 · IT혁신팀 매니저</h3><ul><li>MES 유지보수 및 C# 현장 프로그램 수정</li><li>Windows 파일 서버·공유 폴더·접근 권한 운영</li><li>사용자 PC·소프트웨어·현장 장비 지원</li><li>보안 솔루션·전산 자산 운영</li></ul></article></div><p>안동대학교 컴퓨터공학과 졸업 · 평점 3.92/4.5 · 정보처리기사 · Java·Spring 교육과정 수료</p></section>
      <section className="closing"><p className="eyebrow">NEXT STEP</p><h2>직접 설명하고 수정할 수 있는 범위를 넓히겠습니다.</h2><p>Java·Spring, SQL·트랜잭션과 Redis를 학습하며, 작은 기능부터 이해·수정·테스트하는 역량을 쌓고 있습니다.</p><div className="actions"><a className="primary" href={`${base}minjae-backend-portfolio.pdf`} download>PDF 다운로드</a><a href="https://drive.google.com/drive/folders/18Xu15urDvRzrrlFgbWPnyJJS14KGT2uY">발표·설계 등 팀 자료</a><a href="https://blog.naver.com/heo-world">학습 기록</a><a href={`${base}v2.html`}>인터랙티브 포트폴리오</a></div></section>
    </main><footer>허민재 · <a href="mailto:heocoding@gmail.com">heocoding@gmail.com</a> · 2026.09</footer>
  </>
}
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>)
