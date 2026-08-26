// 페이지 맨 아래에 표시되는 Footer 컴포넌트입니다.
export default function Footer() {
  // 매번 연도를 직접 수정할 필요 없도록 현재 연도를 자동으로 계산
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10 px-4 py-8 text-center text-sm text-foreground/60 sm:px-6">
      <p>&copy; {currentYear} Dev Portfolio. All rights reserved.</p>
    </footer>
  );
}
