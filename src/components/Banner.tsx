import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Banner = () => {
    const location = useLocation();

    // Hide banner on the grant page itself
    if (location.pathname === '/uscc-grant') return null;

    return (
        <div className="bg-black text-white px-4 py-2 text-center text-sm font-medium flex items-center justify-center gap-2 border-b border-zinc-800">
            <span className="hidden sm:inline">🇺🇸 The US CC Grant Program is open!</span>
            <span className="sm:hidden">The US CC Grant Program is open!</span>
            <Link to="/uscc-grant" className="text-white underline underline-offset-4 hover:text-zinc-300 transition-colors flex items-center gap-1 group">
                Apply Here <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
        </div>
    );
};

export default Banner;
