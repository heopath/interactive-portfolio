# MINJAE.DEV — Interactive Portfolio

> 현장 IT 운영 경험부터 Java/Spring 서비스의 개발·배포까지 탐험하는 인터랙티브 포트폴리오

허민재의 21개월 IT 인프라·MES 운영 경험과 백엔드 프로젝트를 횡스크롤 게임의 형태로 구성한 웹 포트폴리오입니다. 게임을 사용하지 않아도 빠르게 핵심 역량을 확인할 수 있는 구조를 함께 제공합니다.

## 현재 상태

**MVP 개발 중 · 비공개 검토 단계**

- [x] React + TypeScript 기반 프로젝트 구성
- [x] 횡스크롤 챕터 이동
- [x] CSS 임시 캐릭터와 걷기 애니메이션
- [x] 프로젝트 상세 모달
- [x] 빠르게 보기
- [x] 모바일 반응형과 모션 감소 지원
- [x] 포지셔닝과 전체 콘텐츠 명세
- [x] All My Trips 개인 기여·문제 해결 사례
- [ ] 실제 캐릭터 스프라이트 적용
- [ ] 시연 영상 기반 프로젝트 이미지·GIF 추가
- [ ] 이력서 PDF 연결
- [ ] GitHub Pages 자동 배포
- [ ] 공개 전 개인정보 최종 검토

콘텐츠 방향은 [포트폴리오 명세](docs/PORTFOLIO_BRIEF.md), All My Trips의 상세 근거는 [개인 사례](docs/ALL_MY_TRIPS_CASE_STUDY.md)에서 확인할 수 있습니다. 전체 순서는 [로드맵](docs/ROADMAP.md), 준비할 자료는 [콘텐츠 체크리스트](docs/CONTENT_CHECKLIST.md)에 정리합니다.

## 포트폴리오 지도

| 구역 | 보여주는 경험 | 대표 기술/프로젝트 |
|---|---|---|
| Backend Journey | 포지셔닝과 핵심 강점 | Java/Spring, IT 운영 21개월 |
| Field Base | IT혁신팀 실무 경험 | MES, Windows Server, AD/ACL |
| Smart Factory | 제조 공정 데이터 연동 | C# WinForms, Oracle DB |
| Spring Transition | 웹 백엔드 전환 | Java, Spring Boot, JPA/MyBatis |
| K-Market | 관리자 운영 도메인 | Spring Boot, MySQL, GitHub Actions |
| All My Trips | 팀장·백엔드·인프라 역량 종합 | Redis Lua, PostgreSQL, AWS CI/CD |
| Next Stage | 성장 목표와 연락 | Backend Engineering, Operation |

## 대표 프로젝트

- [All My Trips](https://github.com/heopath/TravelGuide-Project-Team1) — 여행 계획부터 예약·결제·QR 검표까지 연결한 AI 여행 플랫폼
- [K-Market](https://github.com/heopath/ShoppingMall-Project-Team3) — 상품·주문·배송·반품 관리자 운영 흐름
- [PVC 재활용 공정 MES](https://github.com/heopath/2022-SmartFactory) — Oracle DB와 C# WinForms 기반 제조실행시스템

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

