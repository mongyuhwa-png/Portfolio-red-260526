# Portfolio — Songhee

Vite + React로 구성된 포트폴리오 웹사이트입니다.

## 실행 방법

**Prerequisites**
- Node.js

**Install**
- `npm install`

**Dev**
- `npm run dev`

접속: `http://127.0.0.1:5173/`

## 최근 변경 사항(2026-05-28)

### INFO(자기소개) 페이지 개선
- **자기소개 레이아웃 개편**: 기존 영문 소개 영역을 **이름/한줄소개 + Education/Experiences/Skills + Contact** 구조로 교체
- **프로필 이미지 제거**: INFO 페이지 좌측 이미지 영역에서 사진을 제거하고, **미니멀 패널(텍스처) 형태**로 변경

### 정적 INFO 페이지 설명 문구 추가
- `public/about.html` 상단에 **페이지 설명(소개) 문구** 추가

## 변경된 파일(영향 범위)
- `src/App.tsx`: INFO(about) 뷰 콘텐츠/레이아웃 수정, 이미지 제거, 연락처 반영
- `public/about.html`: INFO 페이지 소개 문구 추가
- `package-lock.json`: 의존성 설치로 생성/갱신
