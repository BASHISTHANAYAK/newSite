import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Clients from "@/components/sections/Clients";
import React, { useEffect, useState, lazy, Suspense } from 'react';
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion, AnimatePresence } from "framer-motion";
import { Blog } from "@/components/ui/blog-section";
import Meta from "@/components/layout/Meta";
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";

const Features = React.lazy(() => import('../components/sections/Features'));
// Lazy load components that aren't needed immediately
const LazyFeatures = lazy(() => import("@/components/sections/Features"));
const LazyClients = lazy(() => import("@/components/sections/Clients"));
const LazyTestimonials = lazy(() => import("@/components/sections/Testimonials"));
const LazyBlog = lazy(() => import("@/components/ui/blog-section").then(module => ({ default: module.Blog })));
const LazyContact = lazy(() => import("@/components/sections/Contact"));

// Client logos for the hero section
const clientLogos = [
  {
    id: "logo-9",
    description: "Animal",
    image: "https://connectapp.fra1.digitaloceanspaces.com/uploads/1738844001141_Animal.jpg",
  },
  {
    id: "logo-14",
    description: "Fusion 9",
    image: "https://connectapp.fra1.digitaloceanspaces.com/uploads/1738844004621_Fusion%209.png",
  },
  {
    id: "logo-22",
    description: "Renao",
    image: "https://connectapp.fra1.digitaloceanspaces.com/uploads/1738844010279_Renao.png",
  },
  {
    id: "logo-25",
    description: "Tasca",
    image: "https://connectapp.fra1.digitaloceanspaces.com/uploads/1738844012510_Tasca.png",
  }
];

// Key benefits for the hero section
const keyBenefits = [
  "Digital menus with QR codes",
  "WhatsApp ordering integration",
  "Smart reservation system"
];

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useTranslation();

  // useEffect(() => {
  //   const checkIfMobile = () => {
  //     setIsMobile(window.innerWidth < 768);
  //   };
    
  //   checkIfMobile();
  //   window.addEventListener('resize', checkIfMobile);
    
  //   // Mark as loaded after initial render
  //   setIsLoaded(true);
    
  //   return () => window.removeEventListener('resize', checkIfMobile);
  // }, []);



  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
  
    const handleResize = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleResize);
  
    setIsLoaded(true);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);
  

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Eatoes",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": t('meta.description'),
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1000"
    }
  };

  return (
    <>
      <Meta 
        title={t('meta.title')}
        description={t('meta.description')}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen">
        <Navbar />
        <main>
          {isMobile ? (
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
              <AuroraBackground showRadialGradient={false}>
                <div className="relative flex flex-col gap-5 items-center justify-center px-5 py-10 w-full max-w-md mx-auto">
                  <AnimatePresence>
                    {isLoaded && (
                      <>
                        {/* Badge */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 text-xs font-medium px-3 py-1 rounded-full mb-1"
                        >
                          Trusted by 115+ restaurants
                        </motion.div>
                        
                        {/* Headline */}
                        <motion.h1 
                          className="text-3xl font-bold dark:text-white text-center leading-tight"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                        >
                          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 font-extrabold">
                            {t('hero.title.part1')}
                          </span>
                          <br />
                          <span>{t('hero.title.part2')}</span>
                          <br />
                          <span>{t('hero.title.part3')}</span>
                        </motion.h1>
                        
                        {/* Description */}
                        <motion.p 
                          className="font-normal text-base dark:text-neutral-200 text-center leading-relaxed"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                        >
                          {t('hero.description')}
                        </motion.p>
                        
                        {/* Key Benefits */}
                        <motion.div
                          className="w-full mt-1"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                        >
                          <div className="flex flex-col gap-2">
                            {keyBenefits.map((benefit, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span className="text-sm text-gray-700 dark:text-gray-300">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                        
                        {/* Primary CTA */}
                        <motion.div
                          className="w-full mt-4"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.4 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button 
                            className="bg-black hover:bg-gray-800 text-white rounded-lg w-full py-6 text-base font-medium transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                          >
                            {t('hero.cta')}
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </motion.div>
                        
                        {/* Secondary CTA */}
                        <motion.div
                          className="w-full"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.4, delay: 0.5 }}
                        >
                          <Button 
                            variant="ghost"
                            className="w-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center justify-center gap-1 group"
                          >
                            See how it works
                            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </motion.div>
                        
                        {/* Social Proof */}
                        <motion.div
                          className="flex flex-col items-center gap-3 mt-5 bg-white/50 dark:bg-gray-800/30 rounded-xl p-3 w-full"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.4, delay: 0.6 }}
                        >
                          <div className="flex justify-center gap-2 w-full">
                            {clientLogos.map((logo) => (
                              <div key={logo.id} className="w-14 h-14 rounded-md overflow-hidden bg-white dark:bg-gray-800 p-1 shadow-sm">
                                <img 
                                  src={logo.image} 
                                  alt={logo.description}
                                  className="w-full h-full object-contain"
                                  width={56}
                                  height={56}
                                  loading="lazy"
                                />
                              </div>
                            ))}
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                              ))}
                            </div>
                            <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                              4.8/5 from 115+ restaurants
                            </span>
                          </div>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              </AuroraBackground>
            </section>
          ) : (
            <Hero />
          )}
          
          <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
            {isLoaded ? (
              <>
                <Features />
                <Clients />
                <Testimonials />
                <Blog />
                <Contact />
              </>
            ) : (
              <>
                <LazyFeatures />
                <LazyClients />
                <LazyTestimonials />
                <LazyBlog />
                <LazyContact />
              </>
            )}
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
}