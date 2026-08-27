// Timeline 섹션: 지금까지의 주요 연혁(수상, 프로젝트, 활동 등)을 시간순으로 보여줍니다.
//
// 연혁을 추가하고 싶다면 아래 TIMELINE_ITEMS 배열에 객체 하나만 추가하면 됩니다.
// (연/월/일, 제목, 상세 설명만 채우면 되고 UI 코드는 건드릴 필요가 없습니다)
const TIMELINE_ITEMS = [
  {
    year: 2024,
    month: 3,
    day: 15,
    title: "게임 프로그래밍 학습 시작",
    description:
      "C++과 자료구조를 기초부터 다시 공부하며 게임 개발자로서의 첫걸음을 뗐습니다.",
  },
  {
    year: 2024,
    month: 8,
    day: 1,
    title: "Unity 기반 개인 프로젝트 시작",
    description:
      "Unity로 2D 액션 게임 프로토타입을 제작하며 게임 루프와 물리 시스템을 직접 구현했습니다.",
  },
  {
    year: 2025,
    month: 2,
    day: 10,
    title: "Unreal Engine으로 전환",
    description:
      "Unreal Engine과 C++을 학습하며 렌더링 파이프라인과 최적화 기법을 공부했습니다.",
  },
  // 새로운 연혁은 이 아래에 { year, month, day, title, description } 형태로 추가하세요.
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="mx-auto max-w-5xl scroll-mt-16 px-4 py-20 sm:px-6"
    >
      <h2 className="text-2xl font-semibold text-slate-100 sm:text-3xl">
        Timeline
      </h2>

      {/* 세로선(border-l) 하나를 기준으로 각 항목을 나란히 쌓아 타임라인처럼 보이게 합니다 */}
      <ol className="mt-6 border-l border-slate-700">
        {TIMELINE_ITEMS.map((item, index) => (
          <li key={index} className="relative pb-10 pl-8 last:pb-0">
            {/* 세로선 위에 찍히는 원형 점 */}
            <span className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full bg-blue-500" />

            {/* 년/월/일 날짜 표시 */}
            <time className="text-sm font-medium text-blue-400">
              {item.year}.{String(item.month).padStart(2, "0")}.
              {String(item.day).padStart(2, "0")}
            </time>

            <h3 className="mt-1 text-lg font-semibold text-slate-100">
              {item.title}
            </h3>

            <p className="mt-2 leading-relaxed text-slate-400">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
