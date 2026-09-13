import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Share2, Check, Clock, Calendar, Type } from 'lucide-react';
import { Article, Writer, Issue } from '../types';

interface ArticleReaderProps {
  article: Article;
  issue: Issue | undefined;
  writer: Writer | undefined;
  allIssueArticles: Article[];
  onBack: () => void;
  onSelectArticle: (article: Article) => void;
  onSelectWriter: (writerId: string) => void;
}

export function ArticleReader({
  article,
  issue,
  writer,
  allIssueArticles,
  onBack,
  onSelectArticle,
  onSelectWriter
}: ArticleReaderProps) {
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [article.id]);

  const currentIndex = allIssueArticles.findIndex((a) => a.id === article.id);
  const prevArticle = currentIndex > 0 ? allIssueArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < allIssueArticles.length - 1 ? allIssueArticles[currentIndex + 1] : null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <article className="py-6 max-w-4xl mx-auto space-y-12 animate-in fade-in duration-300 bg-white" id="article-reader-container">
      {/* Editorial Top Bar: Back & Tools */}
      <div className="flex items-center justify-between border-b border-black pb-4">
        <button
          onClick={onBack}
          id="reader-back-btn"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-black hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>INDEX / BACK TO ARTICLES</span>
        </button>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Font size toggle */}
          <button
            onClick={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')}
            className="inline-flex items-center gap-1 px-3 py-1 text-xs font-mono border border-neutral-300 hover:border-black text-black transition-colors"
            title="글자 크기 변경"
          >
            <Type className="w-3.5 h-3.5" />
            <span>{fontSize === 'normal' ? 'SIZE: REGULAR' : 'SIZE: LARGE'}</span>
          </button>

          {/* Share button */}
          <button
            onClick={handleShare}
            id="reader-share-btn"
            className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono border border-neutral-300 hover:border-black text-black transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copied ? 'COPIED' : 'SHARE'}</span>
          </button>
        </div>
      </div>

      {/* Article Header (W Korea Editorial Style) */}
      <header className="space-y-6 pt-2">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-500 uppercase tracking-widest border-b border-neutral-200 pb-3">
          <span className="bg-black text-white px-2 py-0.5 font-bold">
            {article.issueNumber}
          </span>
          {issue && (
            <span>
              {issue.month} {issue.year} • {issue.monthKorean}
            </span>
          )}
          <span>/</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {article.readingTime}
          </span>
          <span>/</span>
          <span>{article.publishedDate}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-black tracking-tight leading-[1.12]">
          〈{article.title}〉
        </h1>

        <p className="text-lg sm:text-2xl font-serif text-neutral-600 font-light leading-relaxed">
          {article.subtitle}
        </p>

        {/* Byline */}
        <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
          <div
            onClick={() => onSelectWriter(article.authorId)}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {writer && (
              <img
                src={writer.avatar}
                alt={writer.name}
                className="w-12 h-12 object-cover grayscale border border-neutral-300 group-hover:border-black transition-all"
              />
            )}
            <div>
              <p className="text-sm font-bold text-black group-hover:underline uppercase tracking-wide">
                WORDS BY {article.authorName}
              </p>
              <p className="text-xs text-neutral-500 font-mono">
                {article.authorRole}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Feature Photo */}
      <div className="overflow-hidden bg-neutral-100 aspect-[16/10] relative border border-neutral-200">
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white/90 px-4 py-2 text-[11px] font-mono tracking-wider flex justify-between">
          <span>YEOBAEK PHOTOGRAPHY ARCHIVE</span>
          <span>EDITORIAL CUT</span>
        </div>
      </div>

      {/* Pull Quote with high contrast editorial border */}
      {article.pullQuote && (
        <div className="my-10 py-8 px-6 sm:px-10 border-y-2 border-black">
          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-black leading-relaxed text-center">
            &ldquo;{article.pullQuote}&rdquo;
          </blockquote>
        </div>
      )}

      {/* Article Content Paragraphs */}
      <div
        className={`max-w-2xl mx-auto space-y-8 font-serif text-neutral-900 leading-[1.85] ${
          fontSize === 'large' ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
        }`}
        id="article-body-text"
      >
        {article.paragraphs.map((para, i) => (
          <p key={i} className="font-light tracking-normal first-letter:float-left first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:font-serif first-letter:leading-none">
            {para}
          </p>
        ))}
      </div>

      {/* Tags */}
      <div className="pt-6 border-t border-neutral-200 flex flex-wrap gap-2 max-w-2xl mx-auto">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-xs font-mono uppercase bg-neutral-100 text-neutral-700 border border-neutral-200"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Author Bio Box */}
      {writer && (
        <div className="max-w-2xl mx-auto border border-neutral-200 p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-5">
          <img
            src={writer.avatar}
            alt={writer.name}
            className="w-16 h-16 object-cover grayscale border border-neutral-300 shrink-0"
          />
          <div className="space-y-2 flex-1">
            <div className="flex items-baseline justify-between">
              <h4 className="text-base font-bold text-black uppercase tracking-wide">
                ABOUT THE WRITER • {writer.name}
              </h4>
              <span className="text-xs font-mono text-neutral-500 uppercase">{writer.role}</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed">
              {writer.bio}
            </p>
            <div className="pt-2">
              <button
                onClick={() => onSelectWriter(writer.id)}
                className="text-xs font-mono uppercase tracking-widest text-black underline hover:opacity-70"
              >
                VIEW ALL ARTICLES BY {writer.name} →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Next / Prev Navigation */}
      <div className="border-t-2 border-black pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {prevArticle ? (
          <button
            onClick={() => onSelectArticle(prevArticle)}
            className="p-5 border border-neutral-200 hover:border-black text-left transition-colors bg-white group flex flex-col justify-between"
          >
            <div className="flex items-center gap-1 text-xs font-mono text-neutral-400 mb-1">
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-black" />
              <span className="text-black font-semibold">PREVIOUS ARTICLE ({prevArticle.issueNumber})</span>
            </div>
            <p className="text-base font-serif font-bold text-black group-hover:underline line-clamp-1">
              〈{prevArticle.title}〉
            </p>
            <span className="text-xs text-neutral-500 font-mono mt-1">
              {prevArticle.authorName}
            </span>
          </button>
        ) : (
          <div />
        )}

        {nextArticle && (
          <button
            onClick={() => onSelectArticle(nextArticle)}
            className="p-5 border border-neutral-200 hover:border-black text-right transition-colors bg-white group flex flex-col justify-between sm:col-start-2"
          >
            <div className="flex items-center justify-end gap-1 text-xs font-mono text-neutral-400 mb-1">
              <span className="text-black font-semibold">NEXT ARTICLE ({nextArticle.issueNumber})</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-black" />
            </div>
            <p className="text-base font-serif font-bold text-black group-hover:underline line-clamp-1">
              〈{nextArticle.title}〉
            </p>
            <span className="text-xs text-neutral-500 font-mono mt-1">
              {nextArticle.authorName}
            </span>
          </button>
        )}
      </div>

      <div className="text-center pt-4">
        <button
          onClick={onBack}
          className="px-8 py-3 text-xs font-mono tracking-widest uppercase bg-black text-white hover:bg-neutral-800 transition-colors"
        >
          BACK TO ISSUES
        </button>
      </div>
    </article>
  );
}
