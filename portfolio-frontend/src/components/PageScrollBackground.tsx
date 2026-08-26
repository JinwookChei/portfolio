"use client";

import { useEffect, useRef, useState } from "react";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

// Hero에서 About으로 스크롤하는 동안, 화면 전체 폭이었던 다크 블루 배경 패널을
// About 콘텐츠 폭(max-w-5xl)까지 서서히 좁힙니다. About 지점을 지나고 나면
// 진행률이 1로 고정되어, 좁아진 폭 그대로 Projects/Contact/Footer를 지나
// 페이지 맨 아래까지 계속 유지됩니다.
export default function PageScrollBackground() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [panelStyle, setPanelStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const heroEl = wrapper.querySelector<HTMLElement>("#hero");
    const aboutEl = wrapper.querySelector<HTMLElement>("#about");
    if (!heroEl || !aboutEl) return;

    let frameId = 0;

    // 진행률(progress) 0~1: Hero 맨 위(0)에서 About이 화면 상단에 닿는 시점(1)까지.
    // 그 이후로는 Math.min(1, ...)에 의해 계속 1로 고정됩니다.
    const update = () => {
      const wrapperTop = wrapper.getBoundingClientRect().top;
      const scrolled = -wrapperTop;
      const linear = Math.min(1, Math.max(0, scrolled / heroEl.offsetHeight));
      // smoothstep: 스크롤에 리니어하게 반응하는 대신 시작/끝을 천천히, 중간을 빠르게
      // 지나가도록 완만한 곡선을 그려서 훨씬 자연스럽게 좁아지도록 만듭니다.
      const progress = linear * linear * (3 - 2 * linear);

      // 시작 너비: Hero처럼 화면 전체 폭 / 끝 너비: About 콘텐츠 실제 렌더링 폭(max-w-5xl)에
      // 여유 폭(EXTRA_WIDTH)을 더해, 콘텐츠보다 배경이 살짝 더 넓게 보이도록 합니다.
      const EXTRA_WIDTH = 64;
      const fullWidth = wrapper.getBoundingClientRect().width;
      const narrowWidth = aboutEl.getBoundingClientRect().width + EXTRA_WIDTH;
      const width = fullWidth + (narrowWidth - fullWidth) * progress;
      const radius = progress * 32; // 좁아질수록 모서리도 함께 둥글어짐 (최대 rounded-3xl 수준)

      setPanelStyle({ width: `${width}px`, borderRadius: `${radius}px` });
    };

    const onScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      {/* 스크롤에 따라 폭이 좁아지는 다크 블루 배경 패널 (장식용 요소라 스크린리더에서는 숨김)
          큰 blur box-shadow는 패널 좌우로 흐릿한 빛 번짐이 전체 높이만큼 이어져
          부자연스러워 보이므로 제거하고, 옅은 테두리/배경색만으로 경계를 표현합니다.
          transition으로 프레임 사이 값 변화를 부드럽게 보간합니다. */}
      <div
        aria-hidden="true"
        style={panelStyle}
        className="pointer-events-none absolute top-0 bottom-0 left-1/2 z-0 w-screen -translate-x-1/2 bg-blue-950/40 transition-[width,border-radius] duration-150 ease-out"
      >
        {/* 패널 테두리 바깥쪽으로 살짝 번지는 좌우 그라데이션.
            딱딱한 border 없이, 그라데이션 시작 색을 패널 배경색(blue-950/40)과 똑같이 맞춰서
            패널과 그라데이션 사이에 경계선이 보이지 않고 자연스럽게 이어지도록 합니다.
            부모(패널)의 좌/우 끝을 기준으로 위치하므로, 패널 폭이 바뀌면 함께 따라 움직입니다. */}
        <div className="pointer-events-none absolute top-0 right-full bottom-0 w-24 bg-gradient-to-l from-blue-950/40 to-transparent sm:w-32" />
        <div className="pointer-events-none absolute top-0 left-full bottom-0 w-24 bg-gradient-to-r from-blue-950/40 to-transparent sm:w-32" />
      </div>

      {/* 실제 콘텐츠는 패널 위(z-10)에 그대로 쌓습니다 */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
