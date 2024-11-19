'use client';

import { motion } from 'framer-motion';
import { FaGavel, FaBalanceScale, FaGraduationCap, FaHandHoldingHeart, FaGlobe, FaShieldAlt } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
};

export default function PracticeAreas() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-garamond mb-6"
          >
            Practice Areas
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl"
          >
            Comprehensive legal services across criminal, civil, and educational law with a focus on achieving the best outcomes for clients.
          </motion.p>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Criminal Law */}
            <motion.div variants={itemVariants} className="bg-slate-50 p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <FaGavel className="text-4xl text-gold" />
                <h2 className="text-2xl font-garamond text-navy">Criminal Law</h2>
              </div>
              <p className="text-navy/80 mb-6">
                Experienced representation across all criminal matters in District and High Courts throughout New Zealand.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                  <span>District Courts of Auckland, Manukau, Waitakere, North Shore</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                  <span>High Court Appeals and Judicial Review</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                  <span>Discharge without conviction applications</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                  <span>Bail variations and EM bail applications</span>
                </li>
              </ul>
            </motion.div>

            {/* Civil Law */}
            <motion.div variants={itemVariants} className="bg-slate-50 p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <FaBalanceScale className="text-4xl text-gold" />
                <h2 className="text-2xl font-garamond text-navy">Civil Law</h2>
              </div>
              <p className="text-navy/80 mb-6">
                Comprehensive civil litigation services with expertise in contract disputes and intellectual property matters.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                  <span>Contract disputes and negotiations</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                  <span>Commercial litigation</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                  <span>Arts law and publishing</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                  <span>Defamation cases</span>
                </li>
              </ul>
            </motion.div>

            {/* Education Law */}
            <motion.div variants={itemVariants} className="bg-slate-50 p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <FaGraduationCap className="text-4xl text-gold" />
                <h2 className="text-2xl font-garamond text-navy">Education Law</h2>
              </div>
              <p className="text-navy/80 mb-6">
                Specialized legal services for educational institutions, staff, and students across all levels of education.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                  <span>Employment disputes in educational settings</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                  <span>Student rights and responsibilities</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                  <span>Bullying and harassment cases</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                  <span>Harmful digital communications</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Specialized Areas */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-garamond text-navy mb-12 text-center">Specialized Practice Areas</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <FaHandHoldingHeart className="text-3xl text-gold" />
                <h3 className="text-xl font-garamond text-navy">Mental Health & Advocacy</h3>
              </div>
              <ul className="space-y-3 text-navy/80">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                  <span>Forensic reports and assessments</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                  <span>Mental health team collaboration</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <FaGlobe className="text-3xl text-gold" />
                <h3 className="text-xl font-garamond text-navy">Immigration & Human Rights</h3>
              </div>
              <ul className="space-y-3 text-navy/80">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                  <span>Refugee and protection claims</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                  <span>Partnership Visas</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <FaShieldAlt className="text-3xl text-gold" />
                <h3 className="text-xl font-garamond text-navy">Therapeutic Jurisprudence</h3>
              </div>
              <ul className="space-y-3 text-navy/80">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                  <span>Problem-solving courts</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                  <span>Restorative justice approaches</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-navy-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-garamond mb-6">Need Legal Assistance?</h2>
          <p className="mb-8 text-lg">
            Contact Dr. Elizabeth Gresson for expert legal counsel in any of these areas
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-gold text-navy px-8 py-3 rounded-lg hover:bg-gold-light transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}