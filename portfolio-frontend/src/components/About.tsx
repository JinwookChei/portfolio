// About + Skills 섹션: 자기소개와 기술 스택을 함께 보여주는 컴포넌트입니다.
// Navbar의 "About"과 "Skills" 메뉴가 각각 id="about", id="skills"로 스크롤 이동하므로,
// 하나의 컴포넌트 안에 두 개의 <section>을 나누어 배치했습니다.

// 카테고리별 기술 스택 목록입니다. 배열이라서 새로운 카테고리나 기술을
// 추가/삭제하고 싶을 때 이 목록만 수정하면 됩니다.
const SKILL_CATEGORIES = [
  {
    title: "Engines & Tools",
    skills: ["Unity", "Unreal Engine", "Git"],
  },
  {
    title: "Languages",
    skills: ["C++", "C#", "Python", "TypeScript"],
  },
  {
    title: "Core & Graphics",
    skills: ["DirectX", "OpenGL", "Shader/HLSL", "Data Structures"],
  },
];

export default function About() {
  return (
    <>
      {/* ---------- About: 자기소개 카드 ---------- */}
      {/* scroll-mt-16: 고정된 Navbar(h-16)에 제목이 가려지지 않도록 스크롤 여백 확보 */}
      <section
        id="about"
        className="mx-auto max-w-5xl scroll-mt-16 px-4 py-20 sm:px-6"
      >
        <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
          About
        </h2>

        {/* 소개글을 담는 카드 영역 */}
        {/* TODO: 아래 소개 문구를 본인의 실제 이야기로 교체하세요. */}
        <div className="mt-6 rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-6 sm:p-8">
          <p className="leading-relaxed text-foreground/80">
            어릴 때부터 좋아하던 게임을 &ldquo;직접 만들어보고 싶다&rdquo;는
            마음으로 게임 프로그래밍을 시작했습니다. C++과 C#으로 게임
            로직을 구현하고, Unity와 Unreal Engine 위에서 그래픽스·물리·
            최적화 문제를 풀어가는 과정에 가장 큰 흥미를 느낍니다. 지금도
            새로운 엔진 기능과 렌더링 기법을 배우며 완성도 높은 게임을
            만드는 개발자로 성장해가고 있습니다.
          </p>
        </div>
      </section>

      {/* ---------- Skills: 기술 스택 태그 ---------- */}
      <section
        id="skills"
        className="mx-auto max-w-5xl scroll-mt-16 px-4 py-20 sm:px-6"
      >
        <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
          Skills
        </h2>

        {/* 반응형 그리드: 모바일 1열 -> sm 2열 -> lg 3열 */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground/60">
                {category.title}
              </h3>

              {/* 기술 이름들을 뱃지(태그) 형태로 나열 */}
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-foreground/10 bg-background px-3 py-1 text-sm font-medium text-foreground/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
