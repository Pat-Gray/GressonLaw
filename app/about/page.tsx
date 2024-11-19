'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Elizabeth2 from '@/public/Elizabeth2.webp';
import Elizabeth3 from '@/public/Elizabeth3.webp';
import VC from '../../public/logos/VulcunChambers.png'
import NZLS from '../../public/logos/NZLS.png'

export default function About() {
  return (
    <main className="bg-white">
      {/* Hero Section with Photo */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-garamond mb-6"
              >
                Dr. Elizabeth M. Gresson
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl"
              >
                New Zealand Barrister at Vulcan Chambers with extensive academic and legal experience across New Zealand, Australia, and Europe.
              </motion.p>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="md:w-1/2"
            >
              <Image
                src={Elizabeth2}
                alt="Dr. Elizabeth Gresson"
                className="rounded-2xl shadow-2xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Summary Blurb - Enhanced */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-4xl mx-auto text-navy/80 space-y-6"
          >
            <p className="text-lg leading-relaxed">
              Dr. Elizabeth Gresson is a barrister at Vulcan Chambers Auckland and Emeritus Professor RMIT University Melbourne, specializing in criminal and civil law matters arising in education, and refugee and protection cases.
            </p>
            
            <p className="text-lg leading-relaxed">
              Coming from the distinguished legal families of Gresson and Grierson, she brings a deep respect for justice and the legal system, combined with astute analytical skills and a commitment to achieving the best outcomes for her clients.
            </p>

            <p className="text-lg leading-relaxed">
              As a skilled communicator and strong advocate, Dr. Gresson leverages her extensive research experience and academic background to provide clear, effective legal representation. Her expertise is evidenced by her numerous publications in law and education, and her successful track record in various courts across New Zealand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
          <div className="">
              <h2 className="text-3xl font-garamond text-navy mb-6">Academic Excellence</h2>
              <p className="text-navy/80 mb-8">
                With a distinguished career spanning academia and law, Dr. Gresson brings unique insights and expertise to her legal practice.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/publications"
                className="inline-flex items-center px-6 py-3 bg-navy text-gold rounded-lg hover:bg-navy/90 transition-colors duration-300"
              >
                View Publications
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </div>
            <div>
              <h2 className="text-3xl font-garamond text-navy mb-8">Academic Qualifications</h2>
              <ul className="space-y-3 text-navy/80">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                  <span>PhD, Doctor of Philosophy (Auckland)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                  <span>JD, Juris Doctor Distinction (RMIT Melbourne)</span>
                </li>
                {/* Add other qualifications similarly */}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-garamond text-navy mb-8">Professional Recognition</h2>
              <ul className="space-y-3 text-navy/80">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                  <span>Life Fellow Royal Society of Arts for Arts, Manufacturers, Commerce</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                  <span>Admitted to the Supreme Court of Victoria</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                  <span>Admitted to the High Court of New Zealand</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Add this section before Experience Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <Image
                src={Elizabeth3}
                alt="Dr. Elizabeth Gresson in court"
                className="rounded-2xl shadow-lg"
              />
            </motion.div>
            <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-garamond text-navy mb-8">Legal Expertise</h2>
          <div className="prose max-w-none text-navy/80">
            <p className="mb-6 text-lg">
              Elizabeth brings extensive experience across multiple legal domains, with particular expertise in:
            </p>
            <div className="grid md:grid-cols-2  gap-x-8 gap-y-6">
              {/* Criminal Law */}
              <div className="space-y-4">
                <h3 className="text-2xl font-garamond text-navy">Criminal Law</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                    <span>Criminal jurisdiction appearances across NZ District Courts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                    <span>Successful sentencing and bail applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                    <span>High Court appeals and judicial review</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                    <span>Criminal Proceeds (Recovery) Act matters</span>
                  </li>
                </ul>
              </div>

              {/* Court Experience */}
              <div className="space-y-4">
                <h3 className="text-2xl  font-garamond text-navy">Judicial Experience</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                    <span>Magistrates&apos; Court of Victoria supervision</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                    <span>Judge alone trials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                    <span>Pre-trial submissions for jury trials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                    <span>Therapeutic jurisprudence approaches</span>
                  </li>
                </ul>
              </div>

              {/* Specialized Areas */}
              <div className="space-y-4">
                <h3 className="text-2xl font-garamond text-navy">Specialized Practice</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                    <span>Mental health advocacy and forensic reports</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                    <span>Education law and employment matters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                    <span>Immigration law and Partnership Visas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                    <span>Human rights and refugee protection</span>
                  </li>
                </ul>
              </div>

              {/* Additional Areas */}
              <div className="space-y-4">
                <h3 className="text-2xl  font-garamond text-navy">Civil Matters</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                    <span>Arts law and intellectual property</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                    <span>Publishing and defamation cases</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

          </div>
          
        </div>
      </section>

      
      {/* Add this new section after Qualifications Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Appointments */}
            <div>
              <h2 className="text-3xl font-garamond text-navy mb-8">Appointments</h2>
              <ul className="space-y-3 text-navy/80">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                  <span>Emeritus Professor RMIT University (Australia)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                  <span>Life Fellow of Royal Society of Arts (UK)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                  <span>InSEA World Councillor, Asia-Pacific Region</span>
                </li>
              </ul>
            </div>

            {/* Additional Qualifications */}
            <div>
              <h2 className="text-3xl font-garamond text-navy mb-8">Additional Qualifications</h2>
              <ul className="space-y-3 text-navy/80">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                  <span>Diploma in Teaching (NZ)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                  <span>Licentiate Diploma Speech Communication (NZ)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                  <span>Associate Trinity College (London)</span>
                </li>
              </ul>
            </div>

            {/* Professional Memberships */}
            <div>
              <h2 className="text-3xl font-garamond text-navy mb-8">Professional Memberships</h2>
              <ul className="space-y-3 text-navy/80">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                  <span>Criminal Bar Association</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                  <span>New Zealand Law Society</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                  <span>Auckland Law Society</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                  <span>Auckland Women Lawyers&apos; Association</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                  <span>Australia New Zealand Education Law Association</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-gold rounded-full flex-shrink-0" />
                  <span>Philosophy of Education Society of Australasia</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Legal Experience Detail */}
     
      {/* Add this Professional Affiliations section before the Contact CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-garamond text-navy mb-12 text-center">Professional Affiliations</h2>
          <div className="flex justify-center items-center gap-8 max-w-2xl mx-auto">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center flex-1"
            >
              <a 
                href="http://www.vulcanchambers.co.nz/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-center block w-full"
              >
                <Image
                  src={VC}
                  alt="Vulcan Chambers"
                  width={150}
                  height={80}
                  className="mx-auto object-contain h-40"
                />
              </a>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center flex-1"
            >
              <a 
                href="https://www.lawsociety.org.nz/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-center block w-full"
              >
                <Image
                  src={NZLS}
                  alt="New Zealand Law Society"
                  width={150}
                  height={80}
                  className="mx-auto object-contain h-40"
                />
              </a>
            </motion.div>
          
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-navy-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-garamond mb-6">Need Legal Assistance?</h2>
          <p className="mb-8 text-lg">
            Contact Dr. Elizabeth Gresson for expert legal counsel
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