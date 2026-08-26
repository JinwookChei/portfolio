import Image from "next/image";

// 프로젝트 하나를 표현하는 타입입니다.
// 나중에 Spring Boot API에서 프로젝트 목록을 받아오게 되더라도
// 응답 데이터를 이 타입 구조에 맞춰주면 아래 컴포넌트를 그대로 재사용할 수 있습니다.
interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  imageUrl: string;
}

// 임시(Mock) 프로젝트 데이터입니다.
// TODO: 실제 프로젝트 정보와 스크린샷(imageUrl)으로 교체하세요.
// (추후에는 이 배열 대신 src/lib/api/ 아래의 API 호출 함수로 데이터를 받아올 수 있습니다.)
const PROJECTS: Project[] = [
  {
    id: "portfolio-website",
    title: "포트폴리오 웹사이트",
    description:
      "Next.js App Router와 Tailwind CSS로 제작한 개인 포트폴리오 사이트입니다. 추후 Spring Boot API와 연동할 예정입니다.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/your-username/portfolio-frontend",
    demoUrl: "https://your-portfolio.example.com",
    imageUrl: "/globe.svg",
  },
  {
    id: "legacy-field-project-1",
    title: "기존 분야 프로젝트 1",
    description:
      "웹 개발을 시작하기 전, 기존 전공/분야에서 진행했던 프로젝트입니다. 문제 해결 능력과 기본기를 다진 경험입니다.",
    tags: ["C/C++", "Python"],
    githubUrl: "https://github.com/your-username/legacy-project-1",
    imageUrl: "/file.svg",
  },
  {
    id: "api-backend-service",
    title: "API 백엔드 서비스",
    description:
      "Spring Boot 기반으로 설계한 RESTful API 백엔드 서비스입니다. 도메인 로직과 API 명세를 직접 설계했습니다.",
    tags: ["Spring Boot", "Java", "RESTful API"],
    githubUrl: "https://github.com/your-username/api-backend-service",
    imageUrl: "/window.svg",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl scroll-mt-16 px-4 py-20 sm:px-6"
    >
      <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
        Projects
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <article
            key={project.id}
            // hover:-translate-y-1 + shadow: 마우스를 올렸을 때 카드가 살짝 떠오르는 효과
            className="group flex flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/10"
          >
            {/* 프로젝트 대표 이미지 영역 */}
            <div className="relative aspect-video w-full bg-foreground/5">
              <Image
                src={project.imageUrl}
                alt={`${project.title} 썸네일`}
                fill
                className="object-contain p-10 dark:invert"
              />
            </div>

            <div className="flex flex-1 flex-col gap-4 p-6">
              <h3 className="text-lg font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-foreground/70">
                {project.description}
              </p>

              {/* 사용 기술 태그 */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-foreground/10 bg-background px-3 py-1 text-xs font-medium text-foreground/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* 바로가기 버튼: GitHub는 항상 표시, 데모 링크는 있을 때만 표시 */}
              <div className="mt-2 flex gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-full border border-foreground/20 px-4 py-2 text-center text-sm font-semibold text-foreground transition-colors hover:bg-foreground/5"
                >
                  GitHub
                </a>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-full bg-foreground px-4 py-2 text-center text-sm font-semibold text-background transition-colors hover:opacity-90"
                  >
                    Demo
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
