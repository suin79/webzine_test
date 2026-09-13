import { useState, useMemo } from 'react';
import { Gnb } from './components/Gnb';
import { MainView } from './components/MainView';
import { ArchiveView } from './components/ArchiveView';
import { SubscribeView } from './components/SubscribeView';
import { WritersView } from './components/WritersView';
import { ArticleReader } from './components/ArticleReader';
import { WebzineFooter } from './components/WebzineFooter';
import { QuickSubscribeModal } from './components/QuickSubscribeModal';

import { ISSUES, ARTICLES, WRITERS } from './data/webzineData';
import { NavigationTab, Article, Issue, Writer } from './types';

export default function App() {
  // Navigation State
  const [activeTab, setActiveTab] = useState<NavigationTab>('MAIN');
  const [selectedIssueId, setSelectedIssueId] = useState<string>('2026-09');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedWriterId, setSelectedWriterId] = useState<string | null>(null);
  const [isQuickSubscribeOpen, setIsQuickSubscribeOpen] = useState(false);

  // Current active issue (Latest: 2026-09)
  const currentIssue = useMemo<Issue>(() => {
    return ISSUES.find((i) => i.id === '2026-09') || ISSUES[0];
  }, []);

  // Previous issues for Main page
  const previousIssues = useMemo<Issue[]>(() => {
    return ISSUES.filter((i) => i.id !== '2026-09');
  }, []);

  // Current month's 4 articles
  const currentMonthArticles = useMemo<Article[]>(() => {
    return ARTICLES.filter((a) => a.issueId === currentIssue.id);
  }, [currentIssue.id]);

  // Tab navigation handler
  const handleSelectTab = (tab: NavigationTab) => {
    setActiveTab(tab);
    setSelectedArticle(null);
    if (tab !== 'WRITERS') {
      setSelectedWriterId(null);
    }
  };

  // Article selection handler (enters reader)
  const handleSelectArticle = (article: Article) => {
    setSelectedArticle(article);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Issue selection handler (goes to ARCHIVE and focuses on that issue)
  const handleSelectIssue = (issueId: string) => {
    setSelectedIssueId(issueId);
    setSelectedArticle(null);
    setActiveTab('ARCHIVE');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Writer selection handler (goes to WRITERS and focuses on that writer)
  const handleSelectWriter = (writerId: string) => {
    setSelectedWriterId(writerId);
    setSelectedArticle(null);
    setActiveTab('WRITERS');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Exit reader back to current tab
  const handleExitReader = () => {
    setSelectedArticle(null);
  };

  // Find issue and writer for reader view
  const activeArticleIssue = useMemo(() => {
    if (!selectedArticle) return undefined;
    return ISSUES.find((i) => i.id === selectedArticle.issueId);
  }, [selectedArticle]);

  const activeArticleWriter = useMemo(() => {
    if (!selectedArticle) return undefined;
    return WRITERS.find((w) => w.id === selectedArticle.authorId);
  }, [selectedArticle]);

  const allArticlesInActiveIssue = useMemo(() => {
    if (!selectedArticle) return [];
    return ARTICLES.filter((a) => a.issueId === selectedArticle.issueId);
  }, [selectedArticle]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans selection:bg-black selection:text-white" id="webzine-app-root">
      {/* Top GNB: MAIN | ARCHIVE | SUBSCRIBE | WRITERS */}
      <Gnb
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenQuickSubscribe={() => setIsQuickSubscribeOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8" id="webzine-main-content">
        {selectedArticle ? (
          /* Single Article Reader View */
          <ArticleReader
            article={selectedArticle}
            issue={activeArticleIssue}
            writer={activeArticleWriter}
            allIssueArticles={allArticlesInActiveIssue}
            onBack={handleExitReader}
            onSelectArticle={handleSelectArticle}
            onSelectWriter={handleSelectWriter}
          />
        ) : (
          /* Tab Views */
          <>
            {activeTab === 'MAIN' && (
              <MainView
                currentIssue={currentIssue}
                articles={currentMonthArticles}
                writers={WRITERS}
                previousIssues={previousIssues}
                onSelectArticle={handleSelectArticle}
                onSelectIssue={handleSelectIssue}
                onSelectWriter={handleSelectWriter}
                onNavigateTab={(tab) => handleSelectTab(tab)}
              />
            )}

            {activeTab === 'ARCHIVE' && (
              <ArchiveView
                issues={ISSUES}
                articles={ARTICLES}
                selectedIssueId={selectedIssueId}
                onSelectIssueId={setSelectedIssueId}
                onSelectArticle={handleSelectArticle}
              />
            )}

            {activeTab === 'SUBSCRIBE' && <SubscribeView />}

            {activeTab === 'WRITERS' && (
              <WritersView
                writers={WRITERS}
                articles={ARTICLES}
                selectedWriterId={selectedWriterId}
                onSelectWriterId={setSelectedWriterId}
                onSelectArticle={handleSelectArticle}
              />
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <WebzineFooter
        onNavigateTab={handleSelectTab}
        onOpenSubscribe={() => setIsQuickSubscribeOpen(true)}
      />

      {/* Quick Newsletter Modal */}
      <QuickSubscribeModal
        isOpen={isQuickSubscribeOpen}
        onClose={() => setIsQuickSubscribeOpen(false)}
      />
    </div>
  );
}
