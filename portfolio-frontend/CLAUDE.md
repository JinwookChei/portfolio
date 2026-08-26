@AGENTS.md

# Project Overview
게임 개발자(Game Programmer)를 위한 개인 포트폴리오 정적 웹사이트

## Tech Stack
- Frontend: Next.js (App Router), React, TypeScript
- Styling: Tailwind CSS
- Deployment: Vercel

## Key Commands
- Dev Server: `npm run dev`
- Build Check: `npm run build`
- Lint: `npm run lint`

## Domain & Content Rules (Game Dev Focus)
1. **게임 개발 중심 맥락:** 프로젝트 카드, 기술 스택, 소개 문구는 게임 프로그래밍(엔진, 그래픽스, 물리, 최적화 등)의 맥락을 우선 반영한다.
2. **프로젝트 카드(Projects) 구조:**
   - 엔진/언어 태그 (Unity, Unreal, C++, C#, Godot 등)
   - 게임 플레이 영상/GIF 미리보기 지원
   - 링크 버튼 구성: [GitHub], [플레이 데모/itch.io/Steam], [발표자료/기술문서]
3. **기술 스택(Skills) 분류:**
   - Engines & Tools (Unity, Unreal Engine, Git, etc.)
   - Languages (C++, C#, Python, TypeScript, etc.)
   - Core & Graphics (DirectX, OpenGL, Shader/HLSL, Data Structures, etc.)

## Code & Architecture Rules
1. 모든 UI 컴포넌트는 `src/components/` 하위에 PascalCase로 분리하여 생성한다 (예: `Hero.tsx`, `Projects.tsx`).
2. 프론트엔드 단독 정적 사이트 구조를 유지하며, 불필요한 커스텀 백엔드 서버 로직을 추가하지 않는다.
3. 클라이언트 인터랙션(State, Event Handler 등)이 필요한 컴포넌트 상단에는 반드시 `'use client'` 지시문을 추가한다.
4. 웹 개발 입문자가 쉽게 파악할 수 있도록 주요 로직과 스타일링에 친절한 한국어 주석을 작성한다.