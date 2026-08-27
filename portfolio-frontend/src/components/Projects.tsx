import Image from "next/image";

// 프로젝트 하나를 표현하는 타입입니다.
interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[]; // 엔진/언어 태그 (예: Unity, Unreal Engine, C++, C#, Godot 등)
  githubUrl: string;
  demoUrl?: string; // 플레이 데모 / itch.io / Steam 등 실행 가능한 링크
  docsUrl?: string; // 발표자료 / 기술 문서 링크
  imageUrl: string; // 썸네일 이미지 (정적 이미지 또는 GIF)
  videoUrl?: string; // 게임플레이 영상이 있다면 썸네일 대신 재생
}

// 임시(Mock) 프로젝트 데이터입니다.
// TODO: 실제 프로젝트 정보, 스크린샷/GIF(imageUrl), 게임플레이 영상(videoUrl)으로 교체하세요.
const PROJECTS: Project[] = [
  {
    id: "portfolio-website",
    title: "포트폴리오 웹사이트",
    description:
      "Next.js App Router와 Tailwind CSS로 제작한 개인 포트폴리오 정적 웹사이트입니다.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/your-username/portfolio-frontend",
    demoUrl: "https://your-portfolio.example.com",
    imageUrl: "/globe.svg",
  },
  {
    id: "pixel-quest",
    title: "Pixel Quest (2D 플랫포머)",
    description:
      "Unity로 제작한 2D 플랫포머 게임입니다. 타일맵 기반 레벨 디자인과 캐릭터 물리·충돌 처리를 직접 구현했습니다.",
    tags: ["Unity", "C#"],
    githubUrl: "https://github.com/your-username/pixel-quest",
    demoUrl: "https://your-username.itch.io/pixel-quest",
    imageUrl: "/file.svg",
  },
  {
    id: "unreal-shooter-prototype",
    title: "Unreal 슈터 프로토타입",
    description:
      "Unreal Engine과 C++로 제작한 슈터 게임 프로토타입입니다. 무기 시스템과 기본적인 AI 적 로직을 설계했습니다.",
    tags: ["Unreal Engine", "C++"],
    githubUrl: "https://github.com/your-username/unreal-shooter-prototype",
    docsUrl: "https://your-slides.example.com/unreal-shooter-prototype",
    imageUrl: "/window.svg",
  },
  {
    id: "godot-puzzle-game",
    title: "Godot 퍼즐 게임",
    description:
      "Godot 엔진으로 제작한 퍼즐 게임입니다. 그리드 기반 로직과 레벨 데이터 직렬화를 직접 설계했습니다.",
    tags: ["Godot", "GDScript"],
    githubUrl: "https://github.com/your-username/godot-puzzle-game",
    demoUrl: "https://your-username.itch.io/godot-puzzle-game",
    imageUrl: "/globe.svg",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl scroll-mt-16 px-4 py-20 sm:px-6"
    >
      <h2 className="text-2xl font-semibold text-slate-100 sm:text-3xl">
        Projects
      </h2>

      {/* 2 x 2 고정 그리드: 모바일 1열 -> sm 이상에서는 항상 2열로 4칸을 채움 */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <article
            key={project.id}
            // hover:-translate-y-1 + shadow: 마우스를 올렸을 때 카드가 살짝 떠오르는 효과
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/40"
          >
            {/* 프로젝트 미리보기 영역: 게임플레이 영상(videoUrl)이 있으면 영상을,
                없으면 썸네일 이미지(imageUrl)를 보여줍니다. */}
            <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
              {project.videoUrl ? (
                <video
                  src={project.videoUrl}
                  poster={project.imageUrl}
                  className="h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <Image
                  src={project.imageUrl}
                  alt={`${project.title} 썸네일`}
                  fill
                  className="object-contain p-10 dark:invert"
                />
              )}
            </div>

            <div className="flex flex-1 flex-col gap-4 p-6">
              <h3 className="text-lg font-semibold text-slate-100">
                {project.title}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>

              {/* 엔진/언어 등 사용 기술 태그 */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* 바로가기 버튼: GitHub/기술문서는 아웃라인, 플레이 데모는 강조(파란색) 버튼 */}
              <div className="mt-2 flex flex-wrap gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[100px] rounded-full border border-slate-700 px-4 py-2 text-center text-sm font-semibold text-slate-100 transition-colors hover:bg-slate-700"
                >
                  GitHub
                </a>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[100px] rounded-full bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-slate-100 transition-colors hover:bg-blue-500"
                  >
                    플레이 데모
                  </a>
                )}
                {project.docsUrl && (
                  <a
                    href={project.docsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[100px] rounded-full border border-slate-700 px-4 py-2 text-center text-sm font-semibold text-slate-100 transition-colors hover:bg-slate-700"
                  >
                    기술문서
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
