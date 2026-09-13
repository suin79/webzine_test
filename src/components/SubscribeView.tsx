import { useState, type FormEvent } from 'react';
import { Mail, CheckCircle2, Calendar, BookOpen, Users, ShieldCheck } from 'lucide-react';

export function SubscribeView() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSubscribed(true);
  };

  return (
    <div className="py-6 sm:py-12 max-w-4xl mx-auto space-y-16 bg-white" id="subscribe-view-container">
      {/* Top Manifesto / Intro */}
      <div className="border-b-2 border-black pb-8 text-center space-y-4">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-400">
          MONTHLY DISPATCH
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-black tracking-tight leading-tight">
          매달 한 번, 우리가 발견한 이야기를 보냅니다.
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 font-sans max-w-xl mx-auto leading-relaxed pt-2">
          여백(Yeobaek) 웹진은 속도에 쫓기지 않는 사유를 지향합니다.
          한 달 동안 네 명의 작가가 각자의 자리에서 발견한 사물과 문장,
          그리고 계절의 온도를 정갈하게 다듬어 메일함으로 부칩니다.
        </p>
      </div>

      {/* Subscription Card - W Korea High-contrast Box */}
      <div className="border border-black p-8 sm:p-14 text-center bg-neutral-50" id="subscribe-card">
        <div className="max-w-lg mx-auto space-y-6">
          <div className="w-12 h-12 border border-black flex items-center justify-center mx-auto text-black bg-white">
            <Mail className="w-5 h-5" />
          </div>

          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              JOIN THE CIRCLE
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-black">
              YEOBAEK NEWSLETTER
            </h2>
          </div>

          {isSubscribed ? (
            <div className="space-y-4 py-4 animate-in fade-in bg-white border border-black p-6">
              <div className="w-12 h-12 border border-black text-black flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-black">
                구독이 성공적으로 완료되었습니다.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-sans max-w-md mx-auto leading-relaxed">
                <strong className="text-black">{email}</strong> 주소로 환영 메일이 전송되었습니다.
                다음 달 1일 아침 8시, 온전한 네 편의 이야기와 함께 찾아뵙겠습니다.
              </p>
              <button
                onClick={() => {
                  setIsSubscribed(false);
                  setEmail('');
                }}
                className="mt-2 text-xs font-mono text-neutral-500 underline hover:text-black uppercase"
              >
                SUBSCRIBE ANOTHER EMAIL
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3" id="newsletter-subscribe-form">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="이메일 주소를 입력하세요 (reader@yeobaek.kr)"
                  className="flex-1 px-4 py-3.5 bg-white border border-neutral-300 text-sm font-mono text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors"
                />
                <button
                  type="submit"
                  id="newsletter-subscribe-submit-btn"
                  className="px-8 py-3.5 bg-black hover:bg-neutral-800 text-white text-xs font-mono tracking-widest uppercase transition-colors shrink-0"
                >
                  SUBSCRIBE
                </button>
              </div>
              <p className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                FREE SUBSCRIPTION • ZERO SPAM • INSTANT UNSUBSCRIBE
              </p>
            </form>
          )}
        </div>
      </div>

      {/* 4 Editorial Guarantees */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="subscribe-commitments-grid">
        <div className="border border-neutral-200 p-6 space-y-3 bg-white">
          <div className="w-9 h-9 border border-black flex items-center justify-center text-black">
            <Calendar className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">PROMISE 01</span>
          <h3 className="text-base font-serif font-bold text-black">매월 1일 정기 발송</h3>
          <p className="text-xs text-neutral-600 leading-relaxed font-sans">
            새로운 달을 차분하게 맞이할 수 있도록 매월 1일 이른 아침 전송됩니다.
          </p>
        </div>

        <div className="border border-neutral-200 p-6 space-y-3 bg-white">
          <div className="w-9 h-9 border border-black flex items-center justify-center text-black">
            <BookOpen className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">PROMISE 02</span>
          <h3 className="text-base font-serif font-bold text-black">엄선된 신작 에세이</h3>
          <p className="text-xs text-neutral-600 leading-relaxed font-sans">
            월간 테마에 맞춘 네 명의 작가의 신작 에세이 4편 전문이 온전히 담깁니다.
          </p>
        </div>

        <div className="border border-neutral-200 p-6 space-y-3 bg-white">
          <div className="w-9 h-9 border border-black flex items-center justify-center text-black">
            <Users className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">PROMISE 03</span>
          <h3 className="text-base font-serif font-bold text-black">네 작가의 서로 다른 시선</h3>
          <p className="text-xs text-neutral-600 leading-relaxed font-sans">
            건축, 문학, 다도, 사진 각자의 분야에서 깊이를 쌓은 작가진의 문장을 나눕니다.
          </p>
        </div>

        <div className="border border-neutral-200 p-6 space-y-3 bg-white">
          <div className="w-9 h-9 border border-black flex items-center justify-center text-black">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">PROMISE 04</span>
          <h3 className="text-base font-serif font-bold text-black">방해 없는 클린 리딩</h3>
          <p className="text-xs text-neutral-600 leading-relaxed font-sans">
            광고 배너나 판촉 링크 없이 오직 글과 사진에만 집중할 수 있는 텍스트를 전합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
