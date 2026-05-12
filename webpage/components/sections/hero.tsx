'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const stats = [
  { value: '340+', label: 'Plots Protected in Vizag' },
  { value: '47', label: 'Encroachments Stopped' },
  { value: '12', label: 'Verified Field Agents' },
  { value: '7 days', label: 'First Report Delivered' },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white pt-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex min-h-[calc(100vh-5rem)] flex-col items-start justify-center py-12 lg:py-20">
          {/* Left Content - Full Width Now */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 font-mono text-sm font-medium uppercase tracking-widest text-primary"
          >
            Asset Protection &amp; Management — Visakhapatnam
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl font-serif text-6xl font-bold leading-[1.1] tracking-tight text-foreground md:text-7xl lg:text-8xl xl:text-9xl"
          >
            Your Plot.
            <br />
            <span className="text-primary">Our Watch.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 max-w-2xl font-sans text-xl leading-relaxed text-muted-foreground md:text-2xl"
          >
            Your neighbour started a compound wall three feet into your boundary last 
            month. You found out just now. We make sure that never happens again — with 
            boots-on-ground inspections, geotagged photo reports, and legal muscle, 
            every single month.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-6"
          >
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-sm bg-primary px-10 py-5 font-sans text-base font-medium text-white transition-all hover:bg-primary/90 md:px-12 md:py-6 md:text-lg"
            >
              Protect My Plot
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-sm border border-foreground bg-transparent px-10 py-5 font-sans text-base font-medium text-foreground transition-all hover:bg-foreground hover:text-white md:px-12 md:py-6 md:text-lg"
            >
              See a Sample Report
            </Link>
          </motion.div>

          {/* Stats Strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 flex flex-wrap gap-12 border-t border-border pt-12 md:gap-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="min-w-[140px]">
                <p className="font-mono text-3xl font-semibold text-primary md:text-4xl lg:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 font-sans text-base text-muted-foreground md:text-lg">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
