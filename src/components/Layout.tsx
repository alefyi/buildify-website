import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { ContactFAB } from './ContactFAB';

const Layout: React.FC = () => {
    return (
        <div className="min-h-screen bg-background font-sans antialiased text-foreground flex flex-col">
            <ScrollToTop />
            <Navbar />
            <main className="flex-1 flex flex-col" role="main">
                <Suspense fallback={
                    <div className="flex-1 flex items-center justify-center min-h-[50vh]">
                        <Loader2 className="w-8 h-8 animate-spin text-zinc-400" />
                    </div>
                }>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
            <ContactFAB />
        </div>
    );
};

export default Layout;
