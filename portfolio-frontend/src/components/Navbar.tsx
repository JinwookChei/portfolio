"use client";

import { useState } from "react";

// 상단 메뉴에 표시할 항목들 (화면에 보일 이름과 이동할 섹션의 id)
// 각 섹션(About, Skills, Projects, Contact)은 나중에 page.tsx에서
// 동일한 id를 가진 요소(예: <section id="about">)로 만들어주면 됩니다.
const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Timeline", href: "#timeline" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  // 모바일 화면에서 햄버거 메뉴가 열려있는지 여부
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 메뉴 링크를 클릭했을 때, 페이지 새로고침 없이 해당 섹션으로 부드럽게 스크롤 이동
  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    targetElement?.scrollIntoView({ behavior: "smooth" });

    // 모바일 메뉴를 통해 이동했다면, 이동 후 메뉴를 닫아줌
    setIsMenuOpen(false);
  };

  return (
    // fixed + backdrop-blur: 스크롤을 내려도 항상 상단에 고정되고,
    // 아래 콘텐츠가 반투명하게 비치는 블러 효과가 적용됩니다.
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-700 bg-slate-900/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        {/* 좌측: 이름/로고 영역 */}
        <a
          href="#"
          onClick={(event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsMenuOpen(false);
          }}
          className="text-lg font-semibold tracking-tight text-slate-100"
        >
          Dev Portfolio
        </a>

        {/* 우측: 데스크톱 메뉴 (모바일 화면(sm 미만)에서는 숨김) */}
        <ul className="hidden items-center gap-8 text-sm font-medium sm:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(event) => handleLinkClick(event, link.href)}
                className="text-slate-400 transition-colors hover:text-slate-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* 모바일 햄버거 버튼 (데스크톱 화면(sm 이상)에서는 숨김) */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="메뉴 열기/닫기"
          aria-expanded={isMenuOpen}
          className="flex h-9 w-9 items-center justify-center rounded-md sm:hidden"
        >
          {/* 햄버거 아이콘 3줄을 상태에 따라 X자 모양으로 애니메이션 전환 */}
          <div className="flex h-4 w-5 flex-col justify-between">
            <span
              className={`h-0.5 w-full bg-slate-100 transition-transform ${
                isMenuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-slate-100 transition-opacity ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-full bg-slate-100 transition-transform ${
                isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* 모바일 전용 드롭다운 메뉴: isMenuOpen이 true일 때만 렌더링 */}
      {isMenuOpen && (
        <ul className="flex flex-col gap-1 border-t border-slate-700 bg-slate-900/95 px-4 py-3 backdrop-blur-md sm:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(event) => handleLinkClick(event, link.href)}
                className="block rounded-md px-2 py-2 text-sm font-medium text-slate-400 transition-colors hover:bg-slate-800 hover:text-slate-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
