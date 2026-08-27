"use client";

import { useEffect } from "react";
import Image from "next/image";

interface ProjectModalProps {
  title: string;
  images: string[]; // 상세 스크린샷 목록: 위에서 아래로 스크롤하며 한 장씩 넘어갑니다
  onClose: () => void;
}

// 프로젝트 카드를 클릭하면 뜨는 상세 모달입니다.
// 이미지들을 세로로 이어 붙이고 CSS scroll-snap을 적용해서,
// 스크롤을 내릴 때마다 사진이 한 장씩 딱딱 맞춰 넘어가도록 만듭니다.
export default function ProjectModal({
  title,
  images,
  onClose,
}: ProjectModalProps) {
  // 모달이 열려 있는 동안에는 뒤쪽 페이지가 스크롤되지 않도록 막고,
  // Esc 키로도 닫을 수 있게 합니다.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    // 배경(백드롭) 클릭 시 닫히고, 모달 내용 클릭은 이벤트 전파를 막아 닫히지 않도록 함
    <div
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-2 py-4 backdrop-blur-sm sm:px-6 sm:py-8"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="flex h-[90vh] w-full max-w-none flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-800"
      >
        {/* 상단 헤더: 제목 + 닫기 버튼 */}
        <div className="flex shrink-0 items-center justify-between border-b border-slate-700 px-6 py-4">
          <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="닫기"
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-700 hover:text-slate-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* snap-y + snap-mandatory: 세로로 스크롤할 때 사진 한 장 단위로 딱 맞춰 멈춥니다 */}
        <div className="flex-1 snap-y snap-mandatory overflow-y-auto bg-slate-900">
          {images.map((image, index) => (
            // 슬라이드 안쪽에 넉넉한 여백(p-6~10)을 둬서, 스크롤로 넘어갈 때
            // 이전/다음 사진 사이에 숨 쉴 공간이 생기도록 합니다.
            <div
              key={image + index}
              className="flex h-full w-full shrink-0 snap-start snap-always items-center justify-center p-6 sm:p-10"
            >
              {/* PPT 비율(16:9)을 그대로 유지하면서 가로/세로 중 더 작은 쪽에 맞춰
                  자연스럽게 축소되도록, fill 대신 실제 PPT 해상도(1280x720)를 지정하고
                  max-w-full/max-h-full + w-auto/h-auto 조합으로 크기를 제한합니다.
                  실제 스크린샷을 보여주는 자리라 dark:invert는 붙이지 않습니다.
                  이미지 자체가 배경과 비슷한 어두운 남색이라 border만으로는 경계가
                  잘 안 보여서, ring-offset으로 배경색(slate-900) 틈을 한 겹 두고
                  그 바깥에 밝은 톤의 ring을 둘러 경계를 뚜렷하게 만듭니다. */}
              <Image
                src={image}
                alt={`${title} 상세 이미지 ${index + 1}`}
                width={1280}
                height={720}
                className="h-auto max-h-full w-auto max-w-full rounded-2xl border border-slate-700 bg-slate-800 object-contain shadow-2xl shadow-black/50 ring-2 ring-slate-400/70 ring-offset-4 ring-offset-slate-900"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
