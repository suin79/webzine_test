import { ArrowLeft, ArrowUpRight, MapPin, Quote } from 'lucide-react';
import { Writer, Article } from '../types';

interface WritersViewProps {
  writers: Writer[];
  articles: Article[];
  selectedWriterId: string | null;
  onSelectWriterId: (writerId: string | null) => void;
  onSelectArticle: (article: Article) => void;
}

export function WritersView({
  writers,
  articles,
  selectedWriterId,
  onSelectWriterId,
  onSelectArticle
}: WritersViewProps) {
  const activeWriter = writers.find((w) => w.id === selectedWriterId) || null;

  // Articles by selected writer
  const writerArticles = activeWriter
    ? articles
        .filter((a) => a.authorId === activeWriter.id)
        .sort((a, b) => b.publishedDate.localeCompare(a.publishedDate))
    : [];

  return (
    <div className="py-6 sm:py-10 space-y-12 bg-white" id="writers-view-container">
      {/* If a writer is selected, show their individual profile & archive */}
      {activeWriter ? (
        <div className="space-y-10 animate-in fade-in" id="single-writer-profile-page">
          {/* Back button */}
          <button
            onClick={() => onSelectWriterId(null)}
            id="back-to-writers-list-btn"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-black hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO ALL CONTRIBUTORS</span>
          </button>

          {/* Writer Banner & Bio Card - W Korea Minimalist */}
          <div className="border border-black p-6 sm:p-12 flex flex-col md:flex-row items-start gap-8 bg-white">
            <img
              src={activeWriter.avatar}
              alt={activeWriter.name}
              className="w-36 h-36 sm:w-48 sm:h-48 object-cover grayscale border border-neutral-300 shrink-0"
            />

            <div className="flex-1 space-y-4">
              <div className="border-b border-neutral-200 pb-4">
                <div className="flex items-baseline gap-3">
                  <h1 className="text-3xl sm:text-4xl font-serif font-bold text-black">
                    {activeWriter.name}
                  </h1>
                  <span className="text-sm font-mono text-neutral-400 uppercase tracking-widest">
                    {activeWriter.englishName}
                  </span>
                </div>
                <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mt-1">
                  {activeWriter.role} • {activeWriter.location}
                </p>
              </div>

              {/* Bio */}
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-sans">
                {activeWriter.bio}
              </p>

              {/* Philosophy Quote */}
              <div className="border-l-2 border-black pl-4 py-2 my-4">
                <p className="text-xs sm:text-sm font-serif italic text-black">
                  &ldquo;{activeWriter.philosophy}&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Writer's Chronological Archive */}
          <div className="space-y-6">
            <div className="border-b-2 border-black pb-3 flex items-baseline justify-between">
              <div className="flex items-baseline gap-3">
                <h2 className="text-xl sm:text-2xl font-bold font-editorial uppercase tracking-tight text-black">
                  ARTICLES ARCHIVE
                </h2>
                <span className="text-xs font-mono text-neutral-500">
                  / {activeWriter.name} 작가의 글 목록
                </span>
              </div>
              <span className="text-xs font-mono text-neutral-400 uppercase">
                TOTAL {writerArticles.length} PIECES
              </span>
            </div>

            <div className="divide-y divide-neutral-200" id="writer-articles-chronological-list">
              {writerArticles.map((article) => (
                <div
                  key={article.id}
                  onClick={() => onSelectArticle(article)}
                  className="py-5 hover:bg-neutral-50 px-2 transition-colors cursor-pointer group flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  id={`writer-article-item-${article.id}`}
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <span className="text-xs font-mono text-neutral-400 shrink-0">
                      {article.publishedDate}
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-serif font-bold text-black group-hover:underline">
                        〈{article.title}〉
                      </h3>
                      <p className="text-xs text-neutral-500 font-serif mt-0.5 line-clamp-1">
                        {article.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className="self-end sm:self-center text-xs font-mono uppercase tracking-wider text-black font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform shrink-0">
                    READ
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* All Writers Grid */
        <div className="space-y-10">
          <div className="border-b-2 border-black pb-4 flex items-baseline justify-between">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-400">
                MEET OUR AUTHORS
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tighter uppercase font-editorial text-black">
                CONTRIBUTORS
              </h1>
            </div>
            <p className="text-xs font-mono text-neutral-500 uppercase">
              4 REGULAR ESSAYISTS
            </p>
          </div>

          <p className="text-sm sm:text-base text-neutral-600 font-sans max-w-2xl">
            매월 하나의 주제를 저마다의 시선과 고유한 언어로 조망하는 4인의 고정 필진입니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="all-writers-grid">
            {writers.map((writer) => {
              const writerArticleCount = articles.filter((a) => a.authorId === writer.id).length;
              return (
                <div
                  key={writer.id}
                  className="border border-neutral-200 hover:border-black p-6 sm:p-8 flex flex-col justify-between transition-colors bg-white group"
                  id={`writer-full-card-${writer.id}`}
                >
                  <div className="space-y-5">
                    <div className="flex items-start gap-5">
                      <img
                        src={writer.avatar}
                        alt={writer.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 object-cover grayscale border border-neutral-300 shrink-0"
                      />
                      <div className="space-y-1">
                        <div className="flex items-baseline gap-2">
                          <h2 className="text-xl sm:text-2xl font-serif font-bold text-black">
                            {writer.name}
                          </h2>
                          <span className="text-xs font-mono text-neutral-400 uppercase">
                            {writer.englishName}
                          </span>
                        </div>
                        <p className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                          {writer.role}
                        </p>
                        <p className="text-[11px] font-mono text-neutral-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {writer.location}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans line-clamp-3">
                      {writer.bio}
                    </p>

                    <div className="border-l border-neutral-300 pl-3 py-1">
                      <p className="text-xs font-serif italic text-neutral-700">
                        &ldquo;{writer.philosophy}&rdquo;
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between text-xs font-mono">
                    <span className="text-neutral-500">
                      {writerArticleCount} ESSAYS PUBLISHED
                    </span>
                    <button
                      onClick={() => onSelectWriterId(writer.id)}
                      className="text-black font-semibold uppercase tracking-wider hover:underline flex items-center gap-1"
                    >
                      VIEW ESSAYS →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
