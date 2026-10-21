
'use client';

import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function SiteLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-body">
      <Header />
      <ScrollToTop />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
