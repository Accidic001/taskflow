
import Header from '@/componenets/header';
import Hero from '@/componenets/hero';
import Features from '@/componenets/features';
import Testimonials from '@/componenets/testimonials';
import Footer from '@/componenets/footer';
import Pricing from '@/componenets/pricing';
import CTA from '@/componenets/cta';

const SaaSLandingPage = () => {
  

 

  return (
     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-900 transition-colors duration-300">
      {/* Navigation */}
      <Header/>
      {/* Hero Section */}
      <Hero/>

      {/* Features Section */}
      <Features/>

      {/* Testimonials Section */}
      <Testimonials/>
      {/* Pricing Section */}
      <Pricing/>

      {/* CTA Section */}
      <CTA/>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default SaaSLandingPage;