import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Layout from './components/Layout';
import LoadingSpinner from './components/LoadingSpinner';
import Home from './pages/Home';

// Lazy Load Pages
const IndustryPage = React.lazy(() => import('./pages/IndustryPage'));
const Development = React.lazy(() => import('./pages/Development'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Calculator = React.lazy(() => import('./pages/Calculator'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const BlogIndex = React.lazy(() => import('./pages/BlogIndex'));

const StyleGuide = React.lazy(() => import('./pages/StyleGuide'));
const ServicePage = React.lazy(() => import('./pages/ServicePage'));
const Enterprise = React.lazy(() => import('./pages/Enterprise'));
const MarketAnalysis = React.lazy(() => import('./pages/MarketAnalysis'));
const BrandingIdentity = React.lazy(() => import('./pages/BrandingIdentity'));
const Wireframes = React.lazy(() => import('./pages/Wireframes'));
const NextVersions = React.lazy(() => import('./pages/NextVersions'));
const UseCases = React.lazy(() => import('./pages/UseCases'));
const Business = React.lazy(() => import('./pages/Business'));
const Referral = React.lazy(() => import('./pages/Referral'));
const Bill = React.lazy(() => import('./pages/Bill'));
const Adalo = React.lazy(() => import('./pages/Adalo'));
const Creators = React.lazy(() => import('./pages/Creators'));
const AuthorPage = React.lazy(() => import('./pages/AuthorPage'));
const Discovery = React.lazy(() => import('./pages/Discovery'));

// Legal Pages
const Privacy = React.lazy(() => import('./pages/disclosures/Privacy'));
const Terms = React.lazy(() => import('./pages/disclosures/Terms'));
const AcceptableUse = React.lazy(() => import('./pages/disclosures/AcceptableUse'));
const NDA = React.lazy(() => import('./pages/disclosures/NDA'));
const ScopeEstimate = React.lazy(() => import('./pages/forms/ScopeEstimate'));

// 404
import NotFound from './pages/NotFound';
import Banner from './components/Banner';

const USCCGrant = React.lazy(() => import('./pages/USCCGrant'));

const App: React.FC = () => {
    return (
        <HelmetProvider>
            <Router>
                <Banner />
                <Suspense fallback={<LoadingSpinner />}>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />

                            {/* Core Pages */}
                            <Route path="development" element={<Development />} />
                            <Route path="contact" element={<Contact />} />
                            <Route path="app-calculator/*" element={<Calculator />} />

                            {/* New Service Routes */}
                            <Route path="market-analysis" element={<MarketAnalysis />} />
                            <Route path="branding-identity" element={<BrandingIdentity />} />
                            <Route path="wireframes-blueprints" element={<Wireframes />} />
                            <Route path="next-versions" element={<NextVersions />} />
                            <Route path="insights" element={<BlogIndex />} />
                            <Route path="enterprise" element={<Enterprise />} />
                            <Route path="use-cases" element={<UseCases />} />
                            <Route path="business" element={<Business />} />
                            <Route path="referral" element={<Referral />} />
                            <Route path="bill" element={<Bill />} />
                            <Route path="adalo" element={<Adalo />} />
                            <Route path="creators" element={<Creators />} />
                            <Route path="author/:name" element={<AuthorPage />} />
                            <Route path="discovery" element={<Discovery />} />
                            <Route path="uscc-grant" element={<USCCGrant />} />

                            {/* Disclosures (Legal) */}
                            <Route path="disclosures/privacy" element={<Privacy />} />
                            <Route path="disclosures/terms" element={<Terms />} />
                            <Route path="disclosures/acceptable-use" element={<AcceptableUse />} />
                            <Route path="disclosures/nda" element={<NDA />} />

                            {/* Forms */}
                            <Route path="form/scope-estimate" element={<ScopeEstimate />} />

                            {/* Dynamic Routes */}
                            <Route path="post/:slug" element={<BlogPost />} />
                            <Route path="for/:industry" element={<IndustryPage />} />
                            <Route path="style-guide" element={<StyleGuide />} />
                            <Route path="services/:id" element={<ServicePage />} />

                            {/* Fallback */}
                            <Route path="404" element={<NotFound />} />
                            <Route path="*" element={<Navigate to="/404" replace />} />
                        </Route>
                    </Routes>
                </Suspense>
            </Router>
            <Analytics />
            <SpeedInsights />
        </HelmetProvider>
    );
};

export default App;
