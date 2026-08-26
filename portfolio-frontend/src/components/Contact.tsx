// 문의 폼 없이, 이메일/GitHub 링크로 바로 연락할 수 있게 안내하는 섹션입니다.
// 정적 사이트 특성상 별도 백엔드 없이는 폼 전송이 불가능하므로 링크 방식만 사용합니다.
export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl scroll-mt-16 px-4 py-20 sm:px-6"
    >
      <h2 className="text-2xl font-semibold text-slate-100 sm:text-3xl">
        Contact
      </h2>

      <div className="mt-6 flex flex-col gap-4">
        {/* TODO: 이메일/GitHub 주소를 실제 정보로 교체하세요. */}
        <p className="leading-relaxed text-slate-400">
          새로운 기회나 협업 제안은 언제나 환영합니다. 아래 이메일이나
          GitHub으로 편하게 연락해주세요.
        </p>

        <a
          href="mailto:your-email@example.com"
          className="flex items-center gap-2 text-slate-400 transition-colors hover:text-slate-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            className="h-5 w-5 shrink-0"
            aria-hidden="true"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path
              d="m4 7 8 6 8-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          your-email@example.com
        </a>

        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-slate-400 transition-colors hover:text-slate-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 shrink-0"
            aria-hidden="true"
          >
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.71 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.18 1.83 1.18 3.09 0 4.44-2.69 5.42-5.26 5.7.42.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
          </svg>
          github.com/your-username
        </a>
      </div>
    </section>
  );
}
