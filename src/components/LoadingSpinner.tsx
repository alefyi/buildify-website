import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <Loader2 className="w-8 h-8 animate-spin text-black" />
        </div>
    );
};

export default LoadingSpinner;
