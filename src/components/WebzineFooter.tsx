import { NavigationTab } from '../types';

interface WebzineFooterProps {
  onNavigateTab: (tab: NavigationTab) => void;
  onOpenSubscribe: () => void;
}

export function WebzineFooter({ onNavigateTab, onOpenSubscribe }: WebzineFooterProps) {
  return (
    <footer className="mt-24 border-t-2 border-black bg-white py-14" id="webzine-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Col 1: Brand & Editorial Statement (W Korea Style) */}
          <div className="md:col-span-6 space-y-4">
            <span className="text-4xl sm:text-5xl font-bold tracking-tighter uppercase font-editorial text-black block">
              YEOBAEK
            </span>
            <p className="text-xs sm:text-sm text-neutral-600 font-sans max-w-md leading-relaxed">
              매달 한 번, 우리가 발견한 이야기를 전하는 에세이 & 비주얼 월간 매거진.
              속도의 시대에 남겨두는 사유의 빈칸이자 고요한 미학의 아카이브입니다.
            </p>
            <div className="text-[11px] font-mono text-neutral-400 space-x-3 uppercase">
              <span>ISSN 2951-8402</span>
              <span>•</span>
              <span>PUBLISHED ON THE 1ST OF EVERY MONTH</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-black border-b border-black pb-1">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-mono uppercase text-neutral-600">
              <li>
                <button
                  onClick={() => onNavigateTab('MAIN')}
                  className="hover:text-black hover:underline"
                >
                  01. MAIN / COVER
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('ARCHIVE')}
                  className="hover:text-black hover:underline"
                >
                  02. ARCHIVE / PAST ISSUES
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('SUBSCRIBE')}
                  className="hover:text-black hover:underline"
                >
                  03. SUBSCRIBE / NEWSLETTER
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('WRITERS')}
                  className="hover:text-black hover:underline"
                >
                  04. WRITERS / CONTRIBUTORS
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Newsletter */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-black border-b border-black pb-1">
              EDITORIAL DESK
            </h4>
            <div className="space-y-2 text-xs font-sans text-neutral-600">
              <p className="font-mono">editorial@yeobaek.kr</p>
              <p>원고 투고 및 콜라보레이션 제안</p>
              <button
                onClick={onOpenSubscribe}
                className="mt-3 inline-block px-4 py-2 bg-black text-white text-[11px] font-mono tracking-widest uppercase hover:bg-neutral-800"
              >
                JOIN NEWSLETTER →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="border-t border-neutral-200 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-neutral-500 gap-3">
          <p>© 2026 YEOBAEK WEBZINE. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6 uppercase tracking-wider">
            <span className="hover:text-black cursor-pointer">PRIVACY POLICY</span>
            <span className="hover:text-black cursor-pointer">TERMS OF SERVICE</span>
            <span className="hover:text-black cursor-pointer">SEOUL, KOREA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
