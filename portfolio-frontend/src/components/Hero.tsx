"use client";

// Hero 섹션: 페이지 맨 위에서 방문자를 처음 맞이하는 영역입니다.
// id="hero"는 현재 Navbar 메뉴에는 연결되어 있지 않지만,
// 나중에 필요하면 다른 섹션들처럼 메뉴/앵커로 연결할 수 있습니다.
export default function Hero() {
  // 버튼 클릭 시 페이지 새로고침 없이 해당 id를 가진 섹션으로 부드럽게 스크롤 이동
  // (Navbar.tsx의 스크롤 로직과 동일한 방식입니다)
  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // min-h-[calc(100vh-4rem)]: 상단 Navbar 높이(4rem = h-16)를 제외한
    // 나머지 화면 전체를 채워서, 처음 페이지를 열었을 때 Hero가 꽉 차 보이도록 함
    <section
      id="hero"
      className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl scroll-mt-16 flex-col items-center justify-center gap-6 px-4 text-center sm:px-6"
    >
      {/* TODO: "OOO" 부분을 실제 이름으로 교체하세요. */}
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
        문제를 코드로 해결하는 개발자, <br className="sm:hidden" />
        OOO입니다
      </h1>

      <p className="max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg">
        사용자 경험과 안정적인 서비스 운영을 함께 고민하는 풀스택 개발자입니다.
      </p>

      {/* 주요 액션 버튼 2개 */}
      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <a
          href="#projects"
          onClick={(event) => scrollToSection(event, "projects")}
          className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-colors hover:opacity-90 sm:text-base"
        >
          프로젝트 보러가기
        </a>
        <a
          href="#contact"
          onClick={(event) => scrollToSection(event, "contact")}
          className="rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/5 sm:text-base"
        >
          연락하기
        </a>
      </div>

      {/* GitHub, 이메일 등 외부 링크/아이콘 영역 */}
      {/* TODO: href의 GitHub 주소와 이메일 주소를 실제 정보로 교체하세요. */}
      <div className="mt-4 flex items-center gap-4">
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex h-10 w-10 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.71 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.18 1.83 1.18 3.09 0 4.44-2.69 5.42-5.26 5.7.42.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
          </svg>
        </a>
        <a
          href="mailto:your-email@example.com"
          aria-label="이메일 보내기"
          className="flex h-10 w-10 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            className="h-5 w-5"
            aria-hidden="true"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}
