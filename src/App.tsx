import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import FeatureTimeline from './components/FeatureTimeline';
import TrustBanner from './components/TrustBanner';
import ScienceSection from './components/ScienceSection';
import CtaSection from './components/CtaSection';
import ResourcesSection from './components/ResourcesSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <FeatureTimeline />
      <TrustBanner />
      <ScienceSection />
      <CtaSection />
      <ResourcesSection />
      <Footer />
    </div>
  );
}

export default App;