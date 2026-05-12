'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, FileWarning, TrendingDown, Eye } from 'lucide-react'

const painPoints = [
  {
    number: '01',
    icon: AlertTriangle,
    title: 'Boundary Encroachment',
    description: 'A neighbour builds 3 feet into your plot. By the time your cousin mentions it, there is a compound wall and a legal fight ahead.',
  },
  {
    number: '02',
    icon: FileWarning,
    title: 'Tax & Compliance Gaps',
    description: 'Property tax unpaid for two years. Revenue records still show old pattadar name. RERA non-compliance notice arrives — you learn about it months later.',
  },
  {
    number: '03',
    icon: TrendingDown,
    title: 'Blind to Real Value',
    description: 'A nearby layout sold at Rs. 18,000 per sq.yd last quarter. Your broker quoted Rs. 12,000. Without ground data, you are always the last to know.',
  },
  {
    number: '04',
    icon: Eye,
    title: 'Nobody You Can Trust',
    description: 'Your uncle stopped visiting. The broker wants you to sell. The watchman disappeared. Who is actually looking at your 200 sq.yd in Bheemunipatnam right now?',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function ProblemSection() {
  return (
    <section id="about" className="bg-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              You Left Vizag.
              <br />
              Your Land
              <br />
              <span className="text-primary">Didn&apos;t.</span>
            </h2>
            <p className="mt-6 max-w-md font-sans text-lg leading-relaxed text-white/60">
              Every vacant plot in Visakhapatnam is a sitting target. And from Houston, 
              Dubai, or London — you cannot see what is happening to yours right now.
            </p>
          </motion.div>

          {/* Right Content - Pain Point Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {painPoints.map((point) => {
              const Icon = point.icon
              return (
                <motion.div
                  key={point.number}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-lg bg-white/5 p-6 transition-colors hover:bg-white/10"
                >
                  {/* Background Number */}
                  <span className="absolute -right-2 -top-4 font-mono text-7xl font-bold text-white/5">
                    {point.number}
                  </span>

                  {/* Content */}
                  <div className="relative">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 font-serif text-xl font-semibold text-white">
                      {point.title}
                    </h3>
                    <p className="font-sans text-sm leading-relaxed text-white/60">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
