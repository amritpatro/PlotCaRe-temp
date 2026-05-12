'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Register Your Plot',
    description: 'Share your survey number, location, and one document. Takes 10 minutes on phone or WhatsApp. No paperwork needed from your side.',
  },
  {
    number: '02',
    title: 'Pick Your Plan',
    description: 'Basic monitoring from Rs. 999/month. Full protection with legal cover from Rs. 1,999. Choose what fits your situation.',
  },
  {
    number: '03',
    title: 'Agent Assigned in 48 Hours',
    description: 'A background-verified field agent from your plot area is assigned. They know the local terrain, the neighbouring owners, and the tehsildar office.',
  },
  {
    number: '04',
    title: 'First Inspection in 7 Days',
    description: 'Your agent visits, photographs all four boundaries, checks for any activity, and sends you a full report with actionable status.',
  },
  {
    number: '05',
    title: 'Monthly Reports, Forever',
    description: 'Every 30 days: fresh photos, boundary status, value update, and legal health check. On WhatsApp. On email. On your dashboard.',
  },
]

export function HowItWorksSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showHint, setShowHint] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="how-it-works" className="bg-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-serif text-4xl font-bold text-white md:text-5xl">
            From Sign-Up to <span className="text-primary">First Report in 7 Days</span>
          </h2>
        </motion.div>

        {/* Scroll Hint */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: showHint ? 1 : 0 }}
          className="mb-4 text-center lg:hidden"
        >
          <span className="font-mono text-xs text-white/40">
            Scroll horizontally to see all steps
          </span>
        </motion.div>

        {/* Horizontal Scroll Container - Mobile/Tablet */}
        <div
          ref={scrollRef}
          className="scrollbar-hide scroll-snap-x -mx-6 flex gap-6 overflow-x-auto px-6 pb-4 lg:hidden"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="scroll-snap-start min-w-[280px] flex-shrink-0 rounded-lg bg-white/5 p-8"
            >
              <span className="font-mono text-4xl font-bold text-primary">
                {step.number}
              </span>
              <h3 className="mt-4 font-serif text-2xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-white/60">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-5 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-lg bg-white/5 p-6 transition-colors hover:bg-white/10"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-white/20 lg:block" />
              )}

              <span className="font-mono text-3xl font-bold text-primary">
                {step.number}
              </span>
              <h3 className="mt-4 font-serif text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-white/60">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
