import { useState, type FormEvent } from 'react';
import { X, Mail, CheckCircle2, Send } from 'lucide-react';

interface QuickSubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuickSubscribeModal({ isOpen, onClose }: QuickSubscribeModalProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white p-8 max-w-md w-full border border-black relative space-y-6">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1 text-black hover:opacity-60 transition-opacity"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2 text-center pt-2">
          <div className="w-10 h-10 border border-black flex items-center justify-center mx-auto mb-2 text-black">
            <Mail className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-400 block">
            NEWSLETTER SUBSCRIPTION
          </span>
          <h3 className="text-xl font-serif font-bold text-black">
            여백(YEOBAEK) 뉴스레터 구독
          </h3>
          <p className="text-xs text-neutral-600 font-sans leading-relaxed">
            매월 1일 아침, 네 작가가 발견한 4편의 이야기와 계절의 사유를 메일로 전해드립니다.
          </p>
        </div>

        {submitted ? (
          <div className="py-4 text-center space-y-2 border border-black p-4">
            <CheckCircle2 className="w-6 h-6 text-black mx-auto" />
            <p className="text-sm font-serif font-bold text-black">
              구독 신청이 완료되었습니다.
            </p>
            <p className="text-xs text-neutral-500 font-mono">
              {email}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일 주소를 입력하세요 (reader@yeobaek.kr)"
              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 text-xs font-mono text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors"
            />
            <button
              type="submit"
              className="w-full py-3 bg-black text-white text-xs font-mono tracking-widest uppercase hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>SUBSCRIBE NOW</span>
            </button>
            <p className="text-[10px] font-mono text-neutral-400 text-center uppercase tracking-wider">
              FREE SUBSCRIPTION • INSTANT UNSUBSCRIBE
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
