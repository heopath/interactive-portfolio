# MINJAE.DEV — Interactive Portfolio

> 현장 IT 운영 경험부터 Java/Spring 서비스의 개발·배포까지 탐험하는 인터랙티브 포트폴리오

허민재의 1년 10개월 IT 인프라 운영 경험과 백엔드 프로젝트를 횡스크롤 게임 형태로 구성한 웹 포트폴리오입니다. 게임을 사용하지 않아도 ‘30초 요약’에서 핵심 역량과 프로젝트를 바로 확인할 수 있습니다.

**[배포된 포트폴리오 바로 보기](https://heopath.github.io/interactive-portfolio/)**

## 핵심 경험

- 1년 10개월의 IT 인프라·MES·Windows Server·AD/ACL 운영
- Java·Spring Boot 기반 웹 백엔드 개발
- AWS·Docker·GitHub Actions를 활용한 배포 자동화
- 팀장 경험과 운영 이슈를 고려한 문제 해결

## 주요 기능

- 횡스크롤 챕터 탐색과 걷기 애니메이션
- 프로젝트 상세 패널과 30초 요약
- 모바일 반응형 UI
- 모션 감소 설정 지원

## 포트폴리오 지도

| 구역 | 보여주는 경험 | 대표 기술/프로젝트 |
|---|---|---|
| Backend Journey | 포지셔닝과 핵심 강점 | Java/Spring, IT 운영 1년 10개월 |
| All My Trips | 팀장·백엔드·인프라 역량 종합 | Redis 대기열, PostgreSQL 재고, AWS CI/CD |
| K-Market | 관리자 운영 도메인 | Spring Boot, MySQL, GitHub Actions |
| Field Base | IT혁신팀 실무 경험 | MES, Windows Server, AD/ACL |
| Spring Transition | 웹 백엔드 전환 | Java, Spring Boot, JPA/MyBatis |
| Smart Factory | 제조 공정 데이터 연동 | C# WinForms, Oracle DB |
| Next Stage | 성장 목표와 연락 | Backend Engineering, Operation |

## 대표 프로젝트

- [All My Trips](https://github.com/heopath/TravelGuide-Project-Team1) — 여행 계획부터 예약·결제·QR 검표까지 연결한 AI 여행 플랫폼 ([시연 영상](https://youtu.be/HHS_6rQ8duA))
- [K-Market](https://github.com/heopath/ShoppingMall-Project-Team3) — 상품·주문·배송·반품 관리자 운영 흐름
- [PVC 재활용 공정 MES](https://github.com/heopath/2022-SmartFactory) — Oracle DB와 C# WinForms 기반 제조실행시스템

## 기술 구성

- React
- TypeScript
- Vite
- CSS Animation
- Lucide Icons
- GitHub Actions
- GitHub Pages

현재 개선된 게임형 화면이 기본 경로에 표시됩니다. 초기 화면은 [`v1.html`](https://heopath.github.io/interactive-portfolio/v1.html)에 보존하고, 기존 `v2.html` 주소도 호환용으로 유지합니다. 두 화면은 `src/portfolioData.ts`의 동일한 경력·프로젝트 데이터를 사용합니다.

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
