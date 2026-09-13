# MINJAE.DEV — Interactive Portfolio

> Java·Spring 백엔드 신입 | IT 인프라 운영·웹 서비스 구현 참여·클라우드 배포 경험

허민재의 MES·IT 인프라 운영 경력 1년 10개월과 교육 과정의 백엔드 팀 프로젝트를 정리한 포트폴리오입니다. 첫 화면에서 참여 역할과 배포 경험을 읽고, 제출용 6쪽 PDF를 내려받을 수 있습니다. 기존 게임형 화면은 선택해서 볼 수 있도록 보존했습니다.

**[배포된 포트폴리오 바로 보기](https://heopath.github.io/interactive-portfolio/)**

- [제출용 PDF](public/minjae-backend-portfolio.pdf)
- [All My Trips 상세 사례](docs/ALL_MY_TRIPS_CASE_STUDY.md)
- [보조 자료 모음](https://drive.google.com/drive/folders/18Xu15urDvRzrrlFgbWPnyJJS14KGT2uY)

## 핵심 경험

- 1년 10개월의 IT 인프라·MES·Windows Server·AD/ACL 운영
- Java·Spring Boot 기반 웹 백엔드 팀 프로젝트 구현 참여
- AWS 배포 후 Oracle Cloud로 애플리케이션·PostgreSQL 데이터 이관
- 앱·DB 서버 분리, Nginx·HTTPS 설정 및 GitHub Actions 배포 흐름 구성 경험
- 5인 팀 프로젝트의 일정·Issue·PR 관리

회사에서의 운영 경력과 교육 과정의 개발 경험을 구분합니다. 구현 과정에서 AI 도구의 도움을 받았으며, 특히 Redis 대기열과 재고 제어는 프로젝트에 적용한 코드를 다시 학습하며 설명·수정할 수 있는 범위를 넓혀가는 중입니다.

## 주요 기능

- 경력·참여 역할·프로젝트·배포 경험을 읽는 요약형 첫 화면
- 제출용 PDF 다운로드와 프로젝트·시연 영상 링크
- 선택형 게임 화면의 횡스크롤 챕터 탐색과 프로젝트 상세 패널
- 모바일 반응형 UI
- 모션 감소 설정 지원

## 게임형 화면의 챕터 구성

아래 지도는 기본 요약 화면이 아닌 기존 게임형 화면의 구성입니다.

| 구역 | 보여주는 경험 | 대표 기술/프로젝트 |
|---|---|---|
| Backend Journey | 포지셔닝과 핵심 강점 | Java/Spring, IT 운영 1년 10개월 |
| All My Trips | 팀장·구현 참여·배포 경험 | Redis 대기열, MyBatis·PostgreSQL 재고, AWS → Oracle Cloud |
| K-Market | 관리자 운영 도메인 | Spring Boot, MySQL, GitHub Actions |
| Field Base | IT혁신팀 실무 경험 | MES, Windows Server, AD/ACL |
| Spring Transition | 웹 백엔드 전환 | Java, Spring Boot, JPA/MyBatis |
| Smart Factory | 제조 공정 데이터 연동 | C# WinForms, Oracle DB |
| Next Stage | 성장 목표와 연락 | Backend Engineering, Operation |

## 대표 프로젝트

- [All My Trips](https://github.com/heopath/TravelGuide-Project-Team1) — 여행 정보·일정 관리와 티켓 예약·모의 결제·QR 검표를 구현한 5인 팀 프로젝트 ([시연 영상](https://youtu.be/HHS_6rQ8duA), [포트폴리오 시연 서비스](https://allmytrip.click))
- [K-Market](https://github.com/heopath/ShoppingMall-Project-Team3) — 상품·주문·배송·반품 관리자 운영 흐름
- [PVC 재활용 공정 MES](https://github.com/heopath/2022-SmartFactory) — Oracle DB와 C# WinForms 기반 제조실행시스템

## 이 포트폴리오 웹사이트의 기술 구성

- React
- TypeScript
- Vite
- CSS Animation
- Lucide Icons
- GitHub Actions
- GitHub Pages

기본 경로는 경력·역할·배포 경험을 바로 읽는 요약형 화면입니다. 6페이지 PDF를 다운로드할 수 있습니다. 기존 게임형은 [`v2.html`](https://heopath.github.io/interactive-portfolio/v2.html), 초기 화면은 `v1.html`에 보존합니다. 공통 프로젝트 데이터는 `src/portfolioData.ts`를 사용합니다.

## 프로젝트 설명과 검증 기록의 범위

- All My Trips는 AWS 배포 후 Oracle Cloud로 애플리케이션·PostgreSQL 데이터를 이관한 포트폴리오 시연용 팀 프로젝트입니다.
- 팀 전체 기능과 개인의 구현 참여 범위를 구분합니다. 결제는 모의 결제이며 AI 도구의 도움을 받은 구현·학습 범위를 명시합니다.
- 테스트 개수·실패율을 현재 운영 성능처럼 요약하지 않습니다. 날짜·환경·예상 응답을 함께 설명할 수 있는 [로컬 k6 검증 기록](https://github.com/heopath/TravelGuide-Project-Team1/blob/main/docs/qa/booking-queue-load-test-results.md)은 상세 사례에 연결했습니다.
- 공개 서비스는 포트폴리오 확인용입니다. 구현 기능과 과거 테스트 기록이 현재 운영 환경의 전체 기능 정상 동작이나 성능을 보장하지는 않습니다.
- `public/minjae-backend-portfolio.pdf`: 제출용 PDF / `src/summary.tsx`: 요약 화면

## 로컬 실행

~~~bash
npm install
npm run dev
~~~

프로덕션 빌드 확인:

~~~bash
npm run build
npm run preview
~~~

## 배포

main 브랜치 변경 사항을 GitHub Actions에서 빌드하여 GitHub Pages로 자동 배포합니다.

~~~text
GitHub → GitHub Actions → Vite Build → GitHub Pages
~~~

## 콘텐츠 출처

- [GitHub 프로필](https://github.com/heopath)
- Notion — AI UX전략과 RAG 인프라 기반 지능형 웹서비스(Java, Spring) 학습 기록
