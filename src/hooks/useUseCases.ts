import { useMemo } from 'react';
// @ts-ignore
import csvContent from '../use-cases/comma-separated values.csv?raw';
import { parseCSV } from '../lib/csvParser';

export interface UseCase {
    Industry: string;
    Slug: string;
    "SEO Title": string;
    "Meta Description": string;
    "H1 Title": string;
    "H2 Supporting": string;
    "H2 Problem": string;
    "H2 Solution": string;
    "H3 Unique Value Prop": string;
    "Benefit 1": string;
    "Benefit 2": string;
    "Benefit 3": string;
    "Testimonial": string;
    "Testimonial Credit Name": string;
    "Testimonial Credit Place": string;
}

export interface FormattedUseCase {
    name: string;
    slug: string;
    seo: {
        title: string;
        description: string;
    };
    hero: {
        title: string;
        subtitle: string;
    };
    problem: {
        text: string;
    };
    solution: {
        text: string;
        valueProp: string;
    };
    benefits: string[];
    testimonial: {
        quote: string;
        author: string;
        business: string;
    };
}

export function useUseCases() {
    const rawData = useMemo(() => {
        return parseCSV<UseCase>(csvContent);
    }, []);

    const useCases: FormattedUseCase[] = useMemo(() => {
        return rawData.map(item => ({
            name: item.Industry,
            slug: item.Slug,
            seo: {
                title: item["SEO Title"],
                description: item["Meta Description"]
            },
            hero: {
                title: item["H1 Title"],
                subtitle: item["H2 Supporting"]
            },
            problem: {
                text: item["H2 Problem"]
            },
            solution: {
                text: item["H2 Solution"],
                valueProp: item["H3 Unique Value Prop"]
            },
            benefits: [
                item["Benefit 1"],
                item["Benefit 2"],
                item["Benefit 3"]
            ].filter(Boolean),
            testimonial: {
                quote: item["Testimonial"],
                author: item["Testimonial Credit Name"],
                business: item["Testimonial Credit Place"]
            }
        }));
    }, [rawData]);

    const getUseCaseBySlug = (slug: string) => {
        return useCases.find(uc => uc.slug === slug);
    };

    return {
        useCases,
        getUseCaseBySlug
    };
}
