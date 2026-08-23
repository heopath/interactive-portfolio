# MINJAE.DEV — Interactive Portfolio

> 캐릭터와 함께 Java 기초부터 AI 웹 서비스까지의 성장 과정을 탐험하는 인터랙티브 포트폴리오

허민재의 720시간 교육 과정과 프로젝트 경험을 횡스크롤 게임의 형태로 구성한 웹 포트폴리오입니다. 재미있는 첫인상과 빠른 정보 확인을 모두 제공하는 것을 목표로 합니다.

## 현재 상태

**MVP 개발 중 · 비공개 검토 단계**

- [x] React + TypeScript 기반 프로젝트 구성
- [x] 횡스크롤 챕터 이동
- [x] CSS 임시 캐릭터와 걷기 애니메이션
- [x] 프로젝트 상세 모달
- [x] 빠르게 보기
- [x] 모바일 반응형과 모션 감소 지원
- [ ] 실제 캐릭터 스프라이트 적용
- [ ] 프로젝트 이미지와 문제 해결 사례 추가
- [ ] 이력서와 연락처 연결
- [ ] GitHub Pages 자동 배포
- [ ] 공개 전 개인정보 최종 검토

자세한 순서는 [로드맵](docs/ROADMAP.md), 준비할 자료는 [콘텐츠 체크리스트](docs/CONTENT_CHECKLIST.md)에서 확인할 수 있습니다.

## 포트폴리오 지도

| 구역 | 보여주는 경험 | 대표 기술/프로젝트 |
|---|---|---|
| 출발점 | 교육 과정과 개발 목표 | 720시간 교육 과정 |
| Java Forest | 프로그래밍 기초와 객체지향 | Java, OOP, JSP |
| Data Lab | 데이터 모델링과 저장 | SQL, MariaDB, ERD, JPA |
| K-Market | 팀 협업과 비즈니스 도메인 | Spring Boot, MySQL, Thymeleaf |
| Spring City | 서비스 구조와 배포 | Security, Docker, GitHub Actions |
| AI Terminal | AI 기반 서비스 설계 | Gemini API, RAG, ChromaDB, Redis |

## 대표 프로젝트

- [All My Trips](https://github.com/heopath/TravelGuide-Project-Team1) — AI 맞춤 여행 일정 플랫폼
- [ShoppingMall Project](https://github.com/heopath/ShoppingMall-Project-Team3) — 쇼핑몰 전체 도메인과 관리자 기능
- [Spring GitHub Actions](https://github.com/heopath/spring-github-action-app) — Spring Boot 빌드·배포 자동화 학습

## 기술 구성

- React
- TypeScript
- Vite
- CSS Animation
- Lucide Icons
- GitHub Actions 예정
- GitHub Pages 예정

## 로컬 실행

```bash
npm install
npm run dev
```

프로덕션 빌드 확인:

```bash
npm run build
npm run preview
```

## 디렉터리

```text
interactive-portfolio/
├── .github/             # 이슈 템플릿과 향후 배포 워크플로
├── docs/                # 로드맵과 콘텐츠 준비 문서
├── src/
│   ├── main.tsx         # 포트폴리오 데이터와 인터랙션
│   └── style.css        # 화면·캐릭터·반응형 스타일
├── index.html
└── vite.config.ts
```

## 배포 계획

프론트엔드는 GitHub Pages에 배포합니다. 향후 AI 챗봇이나 Spring Boot API가 필요해지면 Oracle Cloud 백엔드를 별도로 연결합니다.

```text
GitHub → GitHub Actions → Vite Build → GitHub Pages
                                         ↓
                          향후 Oracle Cloud REST API 연결
```

현재 저장소는 비공개입니다. Pages 배포 전 공개해도 되는 정보인지 검토한 뒤 공개 전환합니다.

## 콘텐츠 출처

- [GitHub 프로필](https://github.com/heopath)
- Notion — AI UX전략과 RAG 인프라 기반 지능형 웹서비스(Java, Spring) 학습 기록

