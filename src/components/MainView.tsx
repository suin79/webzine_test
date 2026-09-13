import { useState, type FormEvent } from 'react';
import { ArrowUpRight, ArrowRight, Clock, CheckCircle2, ChevronRight, MapPin, Quote, BookOpen } from 'lucide-react';
import { Issue, Article, Writer } from '../types';

interface MainViewProps {
  currentIssue: Issue;
  articles: Article[];
  writers: Writer[];
  previousIssues: Issue[];
  onSelectArticle: (article: Article) => void;
  onSelectIssue: (issueId: string) => void;
  onSelectWriter: (writerId: string) => void;
  onNavigateTab: (tab: 'ARCHIVE' | 'SUBSCRIBE' | 'WRITERS') => void;
}

export function MainView({
  currentIssue,
  articles,
  writers,
  previousIssues,
  onSelectArticle,
  onSelectIssue,
  onSelectWriter,
  onNavigateTab
}: MainViewProps) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [selectedContributorId, setSelectedContributorId] = useState<string>(writers[0]?.id || '');

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => {
      setIsSubscribed(false);
    }, 4500);
  };

  const leadArticle = articles[0];
  const activeContributor = writers.find((w) => w.id === selectedContributorId) || writers[0];
  const activeContributorArticle = articles.find((a) => a.authorId === activeContributor?.id);
  const activeContributorIndex = writers.findIndex((w) => w.id === activeContributor?.id);

  return (
    <div className="space-y-16 sm:space-y-24 py-4 sm:py-8 bg-white" id="main-view-container">
      {/* 1. W Korea Style Hero: High-impact Editorial Cover Feature */}
      <section className="relative border-b border-black pb-12 sm:pb-16" id="current-month-hero">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Visual Cover (left/center) */}
          <div className="lg:col-span-7 relative group cursor-pointer" onClick={() => onSelectArticle(leadArticle)}>
            <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-neutral-100">
              <img
                src={currentIssue.coverImage}
                alt={currentIssue.themeTitle}
                className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-[11px] font-mono tracking-widest uppercase">
                COVER STORY • {currentIssue.month} {currentIssue.year}
              </div>
            </div>
            <p className="text-[11px] font-mono text-neutral-400 mt-2 tracking-widest uppercase flex justify-between">
              <span>PHOTO ARCHIVE • YEOBAEK EDITORIAL</span>
              <span>VOL. 09</span>
            </p>
          </div>

          {/* Editorial Headline & Statement */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold tracking-[0.25em] text-black uppercase border-b border-black pb-0.5">
                  MONTHLY THEME
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  {currentIssue.monthKorean}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-black tracking-tight leading-[1.08]">
                {currentIssue.themeTitle}
              </h1>

              <p className="text-base sm:text-lg text-neutral-800 font-serif leading-relaxed pt-2">
                {currentIssue.themeSubtext}
              </p>

              <div className="text-xs font-mono text-neutral-500 pt-2 tracking-wide leading-relaxed">
                바쁜 일상 사이 남겨두어야 할 사유의 빈칸. 9월의 여백에서 네 명의 작가가 건네는 네 가지 온도와 시선.
              </div>
            </div>

            {/* Lead Article Preview Link */}
            {leadArticle && (
              <div
                onClick={() => onSelectArticle(leadArticle)}
                className="border-t border-neutral-300 pt-5 mt-4 group cursor-pointer"
              >
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                  FEATURED ESSAY 01
                </span>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-serif font-bold text-black group-hover:underline">
                      〈{leadArticle.title}〉
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1 font-mono">
                      BY {leadArticle.authorName} • {leadArticle.readingTime}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2. 이달의 글 4편 - W Korea Magazine Grid Layout */}
      <section id="monthly-articles-section" className="space-y-8">
        {/* Section Header with Bold Black Divider */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b-2 border-black pb-3 gap-2">
          <div className="flex items-baseline gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter uppercase font-editorial text-black">
              MONTHLY ESSAYS
            </h2>
            <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
              / 이달의 글 4편
            </span>
          </div>
          <p className="text-xs font-mono text-neutral-500 tracking-wider uppercase">
            ISSUE NO. 09 • {currentIssue.month} {currentIssue.year}
          </p>
        </div>

        {/* 4 Articles Grid: High-Impact 2x2 Magazine Spread with Prominent Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10" id="four-articles-grid">
          {articles.map((article, idx) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="group cursor-pointer flex flex-col bg-white border border-neutral-300 hover:border-black transition-all duration-300"
              id={`article-card-${article.id}`}
            >
              {/* Large Prominent Editorial Visual (16:10 aspect ratio) */}
              <div className="aspect-[16/10] sm:aspect-[16/9] overflow-hidden relative bg-neutral-100 border-b border-neutral-200">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-full object-cover grayscale contrast-[1.03] group-hover:grayscale-0 group-hover:scale-103 transition-all duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-black text-white px-2.5 py-1 text-[11px] font-mono tracking-widest uppercase">
                  ESSAY 0{idx + 1}
                </div>
                <div className="absolute top-3 right-3 bg-white/95 text-black px-2.5 py-1 text-[10px] font-mono tracking-wider border border-black backdrop-blur-xs">
                  {article.readingTime}
                </div>
                {article.tags && article.tags.length > 0 && (
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 flex-wrap">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="bg-black/80 text-white text-[10px] font-mono px-2 py-0.5 tracking-wider backdrop-blur-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Content Box */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-2.5">
                  {/* Author Meta Line */}
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-500 border-b border-neutral-100 pb-2">
                    <span className="font-bold text-black tracking-wider uppercase flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-black inline-block"></span>
                      {article.authorName}
                    </span>
                    <span className="uppercase tracking-wide">{article.authorRole}</span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-black group-hover:underline leading-snug pt-1">
                    〈{article.title}〉
                  </h3>

                  <p className="text-sm font-serif text-neutral-600 leading-relaxed">
                    {article.subtitle}
                  </p>

                  {/* Excerpt with PullQuote Touch */}
                  <p className="text-xs sm:text-sm text-neutral-700 font-sans leading-relaxed line-clamp-3 pt-2">
                    {article.excerpt}
                  </p>
                </div>

                {/* Bottom read bar */}
                <div className="pt-4 border-t border-neutral-200 flex items-center justify-between text-xs font-mono text-neutral-500 group-hover:text-black">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                    <span>ISSUE NO. 09 • {article.publishedDate}</span>
                  </div>
                  <span className="flex items-center gap-1 font-bold uppercase tracking-widest text-xs group-hover:underline">
                    READ ESSAY
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. 작가별 소개 & 프로필 (CONTRIBUTORS) - W Korea Style Editorial Dossier */}
      <section id="writers-latest-section" className="space-y-6 pt-6 border-t border-neutral-200">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b-2 border-black pb-3 gap-2">
          <div className="flex items-baseline gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter uppercase font-editorial text-black">
              CONTRIBUTORS
            </h2>
            <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
              / 에디터 & 작가진 소개
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-neutral-400 hidden sm:inline">
              CLICK WRITER TO EXPLORE
            </span>
            <button
              onClick={() => onNavigateTab('WRITERS')}
              className="text-xs font-mono tracking-widest uppercase text-black hover:underline flex items-center gap-1 font-semibold"
            >
              <span>VIEW ALL</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Contributor Navigation Tabs */}
        <div className="flex flex-wrap gap-2" id="contributors-tab-bar">
          {writers.map((writer, idx) => {
            const isSelected = writer.id === activeContributor.id;
            return (
              <button
                key={writer.id}
                onClick={() => setSelectedContributorId(writer.id)}
                id={`contributor-tab-${writer.id}`}
                className={`px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-black text-white border-black font-bold shadow-xs'
                    : 'bg-white text-neutral-600 border-neutral-300 hover:border-black'
                }`}
              >
                <span className={`text-[10px] ${isSelected ? 'text-neutral-300' : 'text-neutral-400'}`}>
                  0{idx + 1}
                </span>
                <span>{writer.name}</span>
                <span className={`text-[11px] font-sans ${isSelected ? 'text-neutral-300' : 'text-neutral-400'}`}>
                  ({writer.role.split('&')[0].trim()})
                </span>
              </button>
            );
          })}
        </div>

        {/* Feature Dossier: Wide Editorial Spread */}
        <div className="border border-black bg-white p-6 sm:p-10" id="contributor-dossier-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Author Portrait & Micro Meta (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="aspect-[4/5] sm:aspect-[3/4] bg-neutral-100 overflow-hidden relative border border-neutral-300">
                <img
                  src={activeContributor.avatar}
                  alt={activeContributor.name}
                  className="w-full h-full object-cover grayscale contrast-105"
                />
                <div className="absolute top-3 left-3 bg-black text-white px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase">
                  CONTRIBUTOR 0{activeContributorIndex + 1}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/95 text-black px-2.5 py-1 text-[10px] font-mono tracking-wider flex items-center gap-1 border border-black">
                  <MapPin className="w-3 h-3" />
                  <span>{activeContributor.location}</span>
                </div>
              </div>

              {/* Author Works Counter & Action */}
              <div className="flex items-center justify-between pt-1 text-xs font-mono text-neutral-500 border-t border-neutral-200">
                <span>ARCHIVED ESSAYS: {activeContributor.worksCount} PIECES</span>
                <button
                  onClick={() => onSelectWriter(activeContributor.id)}
                  className="text-black font-semibold uppercase hover:underline flex items-center gap-1"
                >
                  <span>작가 프로필 전체보기</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: Rich Bio, Philosophy & Latest Article (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                {/* Header byline */}
                <div className="border-b border-neutral-200 pb-4">
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-400 block mb-1">
                    CONTRIBUTOR DOSSIER • ISSUE 09
                  </span>
                  <div className="flex flex-wrap items-baseline gap-3">
                    <h3 className="text-3xl sm:text-4xl font-serif font-bold text-black tracking-tight">
                      {activeContributor.name}
                    </h3>
                    <span className="text-xs sm:text-sm font-mono tracking-widest text-neutral-400 uppercase">
                      {activeContributor.englishName}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-mono text-neutral-600 mt-1 uppercase tracking-wide">
                    {activeContributor.role}
                  </p>
                </div>

                {/* Author Philosophy Quote Box */}
                <div className="border-l-2 border-black pl-5 py-2.5 bg-neutral-50">
                  <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase block mb-1">
                    WRITING PHILOSOPHY
                  </span>
                  <p className="text-sm sm:text-base font-serif italic text-black leading-relaxed">
                    &ldquo;{activeContributor.philosophy}&rdquo;
                  </p>
                </div>

                {/* Detailed Author Bio - Generously Displayed */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase block">
                    ABOUT THE AUTHOR
                  </span>
                  <p className="text-sm sm:text-base text-neutral-700 font-sans leading-relaxed">
                    {activeContributor.bio}
                  </p>
                </div>
              </div>

              {/* Latest Essay in this month's issue */}
              {activeContributorArticle && (
                <div
                  onClick={() => onSelectArticle(activeContributorArticle)}
                  className="border border-neutral-300 hover:border-black p-4 sm:p-5 transition-all cursor-pointer group bg-white mt-4"
                  id={`featured-contributor-article-${activeContributorArticle.id}`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 uppercase tracking-widest mb-1.5">
                    <span>9월호 게재 에세이 (ESSAY {activeContributorArticle.issueNumber})</span>
                    <span className="text-black font-semibold flex items-center gap-1 group-hover:underline">
                      READ ESSAY
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-serif font-bold text-black group-hover:underline leading-snug">
                    〈{activeContributorArticle.title}〉
                  </h4>
                  <p className="text-xs text-neutral-500 font-serif mt-1 line-clamp-1">
                    {activeContributorArticle.subtitle}
                  </p>
                  <div className="flex items-center gap-3 text-[11px] font-mono text-neutral-400 mt-2 pt-2 border-t border-neutral-100">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {activeContributorArticle.readingTime}
                    </span>
                    <span>•</span>
                    <span>PUBLISHED {activeContributorArticle.publishedDate}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 4 Contributors Quick-Switch Strip Below */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2" id="contributors-roster-strip">
          {writers.map((writer, idx) => {
            const isSelected = writer.id === activeContributor.id;
            return (
              <div
                key={writer.id}
                onClick={() => setSelectedContributorId(writer.id)}
                className={`p-3 border transition-all cursor-pointer flex items-center gap-3 ${
                  isSelected
                    ? 'border-black bg-neutral-50 ring-1 ring-black'
                    : 'border-neutral-200 hover:border-black bg-white'
                }`}
              >
                <img
                  src={writer.avatar}
                  alt={writer.name}
                  className="w-10 h-10 object-cover grayscale border border-neutral-300 shrink-0"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono text-neutral-400">0{idx + 1}</span>
                    <span className="text-xs font-bold text-black truncate">{writer.name}</span>
                  </div>
                  <p className="text-[10px] font-mono text-neutral-500 truncate uppercase">
                    {writer.role.split('&')[0].trim()}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. 이전 달로 이동 (ARCHIVES) */}
      <section id="previous-months-section" className="space-y-6 pt-6 border-t border-neutral-200">
        <div className="flex items-baseline justify-between border-b-2 border-black pb-3">
          <div className="flex items-baseline gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter uppercase font-editorial text-black">
              PAST ISSUES
            </h2>
            <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
              / 지난 호 둘러보기
            </span>
          </div>
          <button
            onClick={() => onNavigateTab('ARCHIVE')}
            id="view-all-archive-btn"
            className="text-xs font-mono tracking-widest uppercase text-black hover:underline flex items-center gap-1"
          >
            <span>ARCHIVE ALL</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8" id="previous-issues-grid">
          {previousIssues.slice(0, 3).map((issue) => (
            <div
              key={issue.id}
              onClick={() => onSelectIssue(issue.id)}
              className="border border-neutral-200 hover:border-black transition-colors cursor-pointer group bg-white"
              id={`prev-issue-card-${issue.id}`}
            >
              <div className="aspect-[16/10] overflow-hidden relative bg-neutral-100">
                <img
                  src={issue.coverImage}
                  alt={issue.themeTitle}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out grayscale group-hover:grayscale-0"
                  loading="lazy"
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 text-[10px] font-mono tracking-widest bg-black text-white uppercase">
                  {issue.month} {issue.year}
                </span>
              </div>
              <div className="p-5 space-y-2">
                <p className="text-[11px] font-mono text-neutral-500 tracking-wider uppercase">{issue.monthKorean}</p>
                <h3 className="text-lg font-serif font-bold text-black group-hover:underline">
                  {issue.themeTitle}
                </h3>
                <p className="text-xs text-neutral-600 line-clamp-2 font-sans leading-relaxed">
                  {issue.themeSubtext}
                </p>
                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-neutral-500 group-hover:text-black">
                  <span className="uppercase tracking-wider text-[11px]">EXPLORE ISSUE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Minimalist W Korea Style Newsletter Subscription */}
      <section id="main-subscribe-cta" className="pt-8 border-t-2 border-black">
        <div className="bg-neutral-50 border border-black p-8 sm:p-14 text-center">
          <div className="max-w-xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 block">
              YEOBAEK NEWSLETTER
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold tracking-tight text-black leading-snug">
              매달 첫날 아침, 여백의 에세이를 메일로 전합니다.
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
              계절의 결을 담은 사유와 네 작가의 신작 에세이를 놓치지 마세요. 광고 없는 담백한 레터입니다.
            </p>

            {isSubscribed ? (
              <div className="border border-black bg-white p-4 text-black flex items-center justify-center gap-2 text-sm font-mono">
                <CheckCircle2 className="w-4 h-4 text-black" />
                <span>구독 신청이 완료되었습니다. (THANK YOU)</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="pt-4 max-w-md mx-auto" id="main-cta-form">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="이메일 주소를 입력하세요 (email@example.com)"
                    className="flex-1 px-4 py-3 bg-white border border-neutral-300 text-black placeholder-neutral-400 text-xs font-mono focus:outline-none focus:border-black transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-black text-white font-mono text-xs tracking-widest uppercase hover:bg-neutral-800 transition-colors shrink-0"
                  >
                    SUBSCRIBE
                  </button>
                </div>
              </form>
            )}

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
              <span>● MONTHLY 1ST</span>
              <span>● 4 NEW ESSAYS</span>
              <span>● FREE CANCELLATION</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
