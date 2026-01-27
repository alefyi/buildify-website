
import React from 'react';

export interface SitePreviewData {
    heroTitle: string;
    heroSub: string;
    primaryColor: string;
    sections: Array<{
        title: string;
        body: string;
    }>;
}

export interface EstimationResult {
    revenueIncrease: string;
    customersKept: string;
}
