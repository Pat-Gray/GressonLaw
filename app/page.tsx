'use client';

import Image from "next/image";
import Elizabeth from '@/public/Elizabeth.webp';
import { FaGavel, FaBalanceScale, FaGraduationCap } from 'react-icons/fa'; // Install with: npm install react-icons
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] bg-navy text-white">
        <div className="container mx-auto h-full px-4">
          <div className="flex flex-col md:flex-row items-center justify-between h-full py-12 md:py-20">
            {/* Left content */}
            <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-5xl font-garamond mb-4 leading-tight">
                  Dr. Elizabeth Gresson
                </h1>
                <p className="text-xl md:text-2xl mb-6">
                  Barrister at Law | Auckland, New Zealand
                </p>
                <p className="text-lg mb-8">
                  Specializing in Criminal Law, Civil Law and Education Law
                </p>
                <a 
                  href="/contact" 
                  className="inline-block bg-gold text-navy px-6 py-3 rounded hover:bg-gold-light transition-colors font-semibold"
                >
                  Contact for Legal Assistance
                </a>
              </div>
            </div>
            
            {/* Right image */}
            <div className="w-full md:w-1/2 min-h-[300px] md:min-h-[600px] relative">
              <Image 
                src={Elizabeth} 
                alt="Dr. Elizabeth Gresson" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ 
                  objectFit: 'cover', 
                  objectPosition: 'top' 
                }}
                className="rounded-3xl"
                priority
              />
              {/* Optional overlay for better text contrast */}
              <div className="absolute inset-0 bg-navy/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Practice Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-garamond text-navy text-center mb-12"
          >
            Areas of Practice
          </motion.h2>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Criminal Law */}
            <motion.div 
              variants={cardVariants}
              className="group border-2 border-navy p-8 rounded-lg hover:shadow-2xl transition-all duration-300 bg-white relative overflow-hidden"
            >
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-navy/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500" />
              
              <div className="relative">
                <div className="flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-navy mx-auto group-hover:scale-110 transition-all duration-300">
                  <FaGavel className="w-10 h-10 text-gold group-hover:rotate-12 transition-transform duration-300" />
                </div>
                
                <h3 className="text-2xl font-garamond text-navy mb-4 text-center">
                  Criminal Law
                </h3>
                
                <ul className="space-y-3 text-navy/80 mb-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-gold rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span>Legal Aid matters and Duty Lawyer services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-gold rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span>Crimes Act and Land Transport Act cases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-gold rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span>Family Violence Protection Act matters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-gold rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span>Bail Applications and Criminal Proceeds Recovery</span>
                  </li>
                </ul>

                <div className="text-center mt-8">
                  <a 
                    href="/practicearea"
                    className="inline-flex items-center justify-center px-6 py-3 bg-navy text-gold rounded-lg
                    hover:bg-gold hover:text-navy transition-colors duration-300 group-hover:shadow-lg
                    font-semibold text-sm uppercase tracking-wider"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Civil Law */}
            <motion.div 
              variants={cardVariants}
              className="group border-2 border-navy p-8 rounded-lg hover:shadow-2xl transition-all duration-300 bg-white relative overflow-hidden"
            >
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-navy/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500" />
              
              <div className="relative">
                <div className="flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-navy mx-auto group-hover:scale-110 transition-all duration-300">
                  <FaBalanceScale className="w-10 h-10 text-gold group-hover:rotate-12 transition-transform duration-300" />
                </div>
                
                <h3 className="text-2xl font-garamond text-navy mb-4 text-center">
                  Civil Law
                </h3>
                
                <ul className="space-y-3 text-navy/80 mb-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-gold rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span>Judicial Review proceedings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-gold rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span>Civil litigation and dispute resolution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-gold rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span>Professional legal opinions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-gold rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span>Thoroughly researched submissions</span>
                  </li>
                </ul>

                <div className="text-center mt-8">
                  <a 
                    href="/practicearea"
                    className="inline-flex items-center justify-center px-6 py-3 bg-navy text-gold rounded-lg
                    hover:bg-gold hover:text-navy transition-colors duration-300 group-hover:shadow-lg
                    font-semibold text-sm uppercase tracking-wider"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Education Law */}
            <motion.div 
              variants={cardVariants}
              className="group border-2 border-navy p-8 rounded-lg hover:shadow-2xl transition-all duration-300 bg-white relative overflow-hidden"
            >
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-navy/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500" />
              
              <div className="relative">
                <div className="flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-navy mx-auto group-hover:scale-110 transition-all duration-300">
                  <FaGraduationCap className="w-10 h-10 text-gold group-hover:rotate-12 transition-transform duration-300" />
                </div>
                
                <h3 className="text-2xl font-garamond text-navy mb-4 text-center">
                  Education Law
                </h3>
                
                <ul className="space-y-3 text-navy/80 mb-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-gold rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span>School stand-down and suspension cases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-gold rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span>Education legislation expertise</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-gold rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span>Former Dean at RMIT University</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-gold rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span>Doctor of Philosophy in Education</span>
                  </li>
                </ul>

                <div className="text-center mt-8">
                  <a 
                    href="/practiceareas"
                    className="inline-flex items-center justify-center px-6 py-3 bg-navy text-gold rounded-lg
                    hover:bg-gold hover:text-navy transition-colors duration-300 group-hover:shadow-lg
                    font-semibold text-sm uppercase tracking-wider"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-navy/5">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <blockquote className="text-3xl italic text-navy font-garamond">
          &quot;You bring a wealth of life experience to the practice of law.&quot;
          </blockquote>
        </div>
      </section>
    </main>
  );
}
