import PageContent from '@/components/PageContent';

export const metadata = {
  title: 'Pinvoke - Smart Credit Card Widgets & Alarms',
  description: 'Never miss a due date again. Pinvoke provides smart interactive widgets, persistent lock-screen alarms, and reliable tracking for your credit cards and bills.',
  keywords: 'Android, Widget, Alarms, Credit Card, Due Dates, Finance Tracking, Pinvoke'
};

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary/30">
      {/* Abstract Background Elements */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 blur-[120px] rounded-full mix-blend-screen"></div>
      </div>

      <PageContent />
    </main>
  );
}
