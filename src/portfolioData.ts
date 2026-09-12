export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  name: string
  period: string
  status?: string
  team: string
  role: string
  outcome: string
  summary: string
  proof: string[]
  metrics?: string[]
  links: ProjectLink[]
}

export type Stop = {
  id: string
  eyebrow: string
  title: string
  subtitle: string
  story: string
  skills: string[]
  color: string
  icon: string
  kind: string
  project?: Project
}

export const stops: Stop[] = [
  {
    id: 'start',
    eyebrow: 'CHAPTER 00',
    title: 'Backend Journey',
    subtitle: 'IT 인프라 경험을 개발과 배포로 연결합니다',
    story: 'MES·IT 인프라 운영 1년 10개월을 경험하고 Java·Spring 교육과정을 수료했습니다. 팀 프로젝트 구현과 AWS 배포, Oracle Cloud 이관을 경험했으며 백엔드 신입 직무에 지원하고 있습니다.',
    skills: ['Java / Spring', 'IT 인프라 1년 10개월', 'AWS·Oracle Cloud 배포 경험'],
    color: '#ff7657',
    icon: '✦',
    kind: 'home',
  },
  {
    id: 'trips',
    eyebrow: 'CHAPTER 01',
    title: 'All My Trips',
    subtitle: '예약부터 현장 입장까지 연결한 여행 플랫폼',
    story: '여행 일정과 체험 티켓 예약·모의 결제·QR 검표를 연결한 5인 팀 프로젝트입니다. PM·팀장으로 일정·Issue·PR 관리, 백엔드 구현과 배포 환경 구성에 참여했습니다.',
    skills: ['Spring Boot', 'MyBatis / PostgreSQL', 'Redis 적용 경험', 'AWS → Oracle Cloud'],
    color: '#ff9d45',
    icon: '✈',
    kind: 'airport',
    project: {
      name: 'All My Trips',
      period: '2026.08 — 09',
      status: '포트폴리오 시연용 · AWS 배포 후 Oracle Cloud 이관',
      team: '5인 팀 · PM/팀장',
      role: 'PM·팀장으로 일정·Issue·PR 관리, 백엔드 구현 및 배포 환경 구성 참여',
      outcome: '팀 웹 서비스 구현 참여와 AWS 배포·Oracle Cloud 이관 경험',
      summary: '여행 계획과 티켓 예약·모의 결제를 연결한 팀 웹 프로젝트입니다. 공개 서비스는 포트폴리오 시연용이며 실제 유료 서비스 운영 실적을 의미하지 않습니다.',
      proof: [
        'AWS EC2·RDS 배포 후 Oracle Cloud로 애플리케이션·PostgreSQL 데이터 이관',
        '앱·DB 서버 분리와 Nginx·HTTPS 설정 경험',
        'GitHub Actions 기반 빌드·배포 흐름 구성 경험',
        'Redis 대기열·MyBatis 기반 재고 제어 적용 경험: AI 도구의 도움을 받았으며 동작 원리를 학습 중',
      ],
      links: [
        { label: '서비스', href: 'https://allmytrip.click' },
        { label: 'GitHub', href: 'https://github.com/heopath/TravelGuide-Project-Team1' },
        { label: 'Demo', href: 'https://youtu.be/HHS_6rQ8duA' },
        { label: 'Wiki', href: 'https://github.com/heopath/TravelGuide-Project-Team1/wiki' },
      ],
    },
  },
  {
    id: 'shop',
    eyebrow: 'CHAPTER 02',
    title: 'K-Market',
    subtitle: '운영 흐름을 구현한 쇼핑몰',
    story: '관리자 대시보드·환경설정, 상품·주문·배송·반품 관리 기능 구현에 참여한 팀 프로젝트입니다. GitHub Actions와 AWS EC2를 활용한 배포 환경 구성을 경험했습니다.',
    skills: ['Spring Boot', 'MySQL', 'JPA / MyBatis', 'GitHub Actions'],
    color: '#b4d446',
    icon: '▣',
    kind: 'market',
    project: {
      name: 'K-Market',
      period: '2026.06 — 07',
      team: '팀 프로젝트',
      role: '관리자 대시보드·환경설정, 상품·주문·배송·반품 관리 기능 구현 참여',
      outcome: '관리자 기능 구현 참여와 AWS 배포 환경 구성 경험',
      summary: '판매자가 등록한 상품과 고객 주문, 관리자의 처리 결과가 각 단계에 일관되게 반영되도록 관리자 도메인과 상태 흐름을 연결했습니다.',
      proof: [
        '일반회원·판매자·관리자 권한 구분',
        'JPA·MyBatis를 활용한 상품과 주문 데이터 처리',
        'Gradle 빌드부터 EC2 서비스 재시작까지 자동 배포',
      ],
      links: [{ label: 'GitHub', href: 'https://github.com/heopath/ShoppingMall-Project-Team3' }],
    },
  },
  {
    id: 'field',
    eyebrow: 'CHAPTER 03',
    title: 'Field Base',
    subtitle: '운영 현장에서 배운 시스템의 책임',
    story: 'IT혁신팀에서 생산 프로그램과 파일 서버, 권한, 보안 솔루션과 현장 장비를 운영했습니다. 코드가 실제 업무와 연결될 때 비로소 가치가 생긴다는 기준을 얻었습니다.',
    skills: ['MES 유지보수', 'Windows Server', 'AD / ACL', 'Troubleshooting'],
    color: '#74aa6a',
    icon: '⌁',
    kind: 'factory',
  },
  {
    id: 'spring',
    eyebrow: 'CHAPTER 04',
    title: 'Spring Transition',
    subtitle: '운영 경험을 웹 백엔드로 확장',
    story: 'Java와 Spring Boot, 관계형 데이터 모델링, Docker와 AWS 배포를 학습하며 기존 C#·인프라 경험을 웹 서비스의 설계와 운영 역량으로 확장했습니다.',
    skills: ['Java 21', 'Spring Boot', 'JPA / MyBatis', 'Docker / AWS'],
    color: '#8b79c6',
    icon: '⬡',
    kind: 'academy',
  },
  {
    id: 'mes',
    eyebrow: 'CHAPTER 05',
    title: 'Smart Factory',
    subtitle: '웹 개발 전, 현장 시스템을 만든 경험',
    story: 'C# WinForms와 Oracle DB를 연결해 원재료 투입, LOT, 재고와 공정 데이터를 추적하고 설비 상태를 직관적으로 보여주는 현장 화면을 구현했습니다.',
    skills: ['C# WinForms', 'Oracle DB', 'Traceability', 'LiveCharts'],
    color: '#4d9ec5',
    icon: '▦',
    kind: 'plant',
    project: {
      name: 'PVC 재활용 공정 MES',
      period: '2022.10 — 12',
      team: '교육 프로젝트',
      role: '현장 통합 UI · 1·2차 분쇄 공정 · DB 연동 · 최종 발표',
      outcome: '설비 가동과 저장소 현황을 공정도 기반 애니메이션으로 시각화',
      summary: '제조 공정의 데이터가 현장 작업자에게 정확하고 빠르게 전달되도록 공정 화면과 데이터 흐름을 연결했습니다.',
      proof: [
        '원재료 투입과 LOT 추가·삭제, 재고 관리 구현',
        'Oracle DB 연동과 공정 데이터 추적',
        '공정도 기반 생산 현황 시각화',
      ],
      links: [{ label: 'GitHub', href: 'https://github.com/heopath/2022-SmartFactory' }],
    },
  },
  {
    id: 'next',
    eyebrow: 'CHAPTER 06',
    title: 'Next Stage',
    subtitle: '신뢰를 만드는 백엔드 개발자로',
    story: '구현한 기술을 설명할 수 있도록 꾸준히 학습하고, 기능 이후의 보안·배포·운영까지 고려하는 개발자로 성장하겠습니다.',
    skills: ['Backend Engineering', 'Reliable Delivery', 'Continuous Learning'],
    color: '#e66f66',
    icon: '→',
    kind: 'tower',
  },
]
