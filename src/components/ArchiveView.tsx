import { useState } from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { Issue, Article } from '../types';

interface ArchiveViewProps {
  issues: Issue[];
  articles: Article[];
  selectedIssueId: string;
  onSelectIssueId: (issueId: string) => void;
  onSelectArticle: (article: Article) => void;
}

export function ArchiveView({
  issues,
  articles,
  selectedIssueId,
  onSelectIssueId,
  onSelectArticle
}: ArchiveViewProps) {
  const [selectedYear, setSelectedYear] = useState<number>(2026);

  // Available years
  const years = Array.from(new Set(issues.map((i) => i.year))).sort((a, b) => b - a);

  // Filter issues by year
  const yearIssues = issues.filter((i) => i.year === selectedYear);

  // Active Issue
  const currentSelectedIssue = issues.find((i) => i.id === selectedIssueId) || issues[0];

  // Articles for the selected issue
  const currentIssueArticles = articles.filter((a) => a.issueId === currentSelectedIssue.id);

  return (
    <div className="py-6 sm:py-10 space-y-12 bg-white" id="archive-view-container">
      {/* Editorial Header */}
      <div className="border-b-2 border-black pb-6">
        <div className="flex items-baseline justify-between">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-400">
              CHRONOLOGICAL ARCHIVE
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tighter uppercase font-editorial text-black">
              ARCHIVE
            </h1>
          </div>
          <p className="text-xs font-mono text-neutral-500 uppercase">
            ISSUES 2025–2026
          </p>
        </div>

        <p className="mt-3 text-sm sm:text-base text-neutral-600 font-sans max-w-2xl">
          연도와 발행 월을 선택하여 지난 호의 커버 테마와 4편의 에세이 전문을 확인하세요.
        </p>

        {/* Year Selectors */}
        <div className="flex items-center gap-2 mt-6">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => {
                setSelectedYear(year);
                const firstIssueOfYear = issues.find((i) => i.year === year);
                if (firstIssueOfYear) onSelectIssueId(firstIssueOfYear.id);
              }}
              id={`year-tab-${year}`}
              className={`px-5 py-2 text-xs font-mono tracking-widest uppercase transition-all border ${
                selectedYear === year
                  ? 'bg-black text-white border-black font-bold'
                  : 'bg-white text-neutral-600 border-neutral-300 hover:border-black'
              }`}
            >
              {year} ARCHIVE
            </button>
          ))}
        </div>
      </div>

      {/* Month Strip Selector */}
      <div className="space-y-3" id="month-selection-container">
        <div className="flex items-center justify-between text-xs font-mono text-neutral-400 uppercase tracking-widest">
          <span>{selectedYear} ALL MONTHS</span>
          <span>{yearIssues.length} ISSUES PUBLISHED</span>
        </div>

        {/* Grid of Months */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-2">
          {yearIssues.map((issue) => {
            const isSelected = issue.id === currentSelectedIssue.id;
            return (
              <button
                key={issue.id}
                onClick={() => onSelectIssueId(issue.id)}
                id={`archive-month-btn-${issue.id}`}
                className={`p-3 text-left border transition-all ${
                  isSelected
                    ? 'bg-black text-white border-black font-bold'
                    : 'bg-white text-neutral-800 border-neutral-200 hover:border-black'
                }`}
              >
                <div className="text-[10px] font-mono tracking-wider opacity-70">
                  VOL. {issue.monthNumber < 10 ? `0${issue.monthNumber}` : issue.monthNumber}
                </div>
                <div className="text-xs sm:text-sm font-mono tracking-wider font-semibold uppercase mt-0.5">
                  {issue.month.slice(0, 3)}
                </div>
                <div className="text-[11px] font-serif truncate mt-1">
                  {issue.monthKorean}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Issue Showcase: Cover + Articles in W Korea Editorial Grid */}
      <div className="border border-black p-6 sm:p-10 space-y-8 bg-white" id="selected-issue-content">
        {/* Issue Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center border-b border-neutral-200 pb-8">
          <div className="lg:col-span-4 aspect-[4/3] bg-neutral-100 overflow-hidden border border-neutral-200">
            <img
              src={currentSelectedIssue.coverImage}
              alt={currentSelectedIssue.themeTitle}
              className="w-full h-full object-cover grayscale"
            />
          </div>

          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 uppercase tracking-widest">
              <span className="bg-black text-white px-2 py-0.5 font-bold">
                {currentSelectedIssue.year}.{currentSelectedIssue.monthNumber < 10 ? `0${currentSelectedIssue.monthNumber}` : currentSelectedIssue.monthNumber}
              </span>
              <span>{currentSelectedIssue.month} ISSUE</span>
              <span>•</span>
              <span>{currentSelectedIssue.monthKorean}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-black leading-tight">
              &ldquo;{currentSelectedIssue.themeTitle}&rdquo;
            </h2>

            <p className="text-sm sm:text-base font-serif text-neutral-600 leading-relaxed max-w-2xl">
              {currentSelectedIssue.themeSubtext}
            </p>
          </div>
        </div>

        {/* Issue Articles */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-black border-b border-black pb-2">
            <span>CONTENTS / 4 ARTICLES</span>
            <span>CLICK TO READ</span>
          </div>

          {currentIssueArticles.length > 0 ? (
            <div className="divide-y divide-neutral-200" id="archive-issue-articles-list">
              {currentIssueArticles.map((article) => (
                <div
                  key={article.id}
                  onClick={() => onSelectArticle(article)}
                  className="group py-5 hover:bg-neutral-50 px-2 transition-colors cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  id={`archive-article-row-${article.id}`}
                >
                  <div className="flex items-start sm:items-center gap-5">
                    <span className="text-lg font-mono font-bold text-black shrink-0">
                      {article.issueNumber}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-1">
                        <span className="font-semibold text-black uppercase">{article.authorName}</span>
                        <span>•</span>
                        <span>{article.authorRole}</span>
                      </div>
                      <h4 className="text-lg sm:text-xl font-serif font-bold text-black group-hover:underline">
                        〈{article.title}〉
                      </h4>
                      <p className="text-xs text-neutral-500 font-serif mt-1 line-clamp-1">
                        {article.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 self-end sm:self-center shrink-0 text-xs font-mono text-neutral-500 group-hover:text-black">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readingTime}
                    </span>
                    <span className="font-semibold uppercase tracking-wider flex items-center gap-1">
                      READ
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border border-dashed border-neutral-300">
              <p className="text-sm font-mono text-neutral-500">
                NO PIECES FOUND FOR THIS ISSUE
              </p>
              <button
                onClick={() => onSelectIssueId('2026-09')}
                className="mt-3 px-4 py-2 text-xs font-mono uppercase bg-black text-white hover:bg-neutral-800"
              >
                GO TO 2026.09 (LATEST ISSUE)
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
