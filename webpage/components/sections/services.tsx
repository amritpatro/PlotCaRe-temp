'use client'

import { motion } from 'framer-motion'
import { 
  Camera, 
  FileText, 
  Bell, 
  Scale, 
  TrendingUp, 
  FolderLock 
} from 'lucide-react'

const services = [
  {
    icon: Camera,
    title: 'Monthly Ground Inspection',
    description: 'A verified local agent physically walks your plot every 30 days. Four boundary photos, geotagged with GPS coordinates and timestamp. You see exactly what your plot looks like today.',
  },
  {
    icon: FileText,
    title: 'Photo Report on WhatsApp',
    description: 'No login required to see your report. A detailed PDF with drone-level clarity hits your WhatsApp and email. Boundary status, vegetation growth, neighbouring construction — everything documented.',
  },
  {
    icon: Bell,
    title: 'Instant Encroachment Alert',
    description: 'New construction material on your boundary? Unauthorised digging? Our agent flags it within 24 hours and we call you directly. No surprises six months later.',
  },
  {
    icon: Scale,
    title: 'Legal & Tax Health Check',
    description: 'EC status verified quarterly. Property tax paid on time. Pattadar passbook updated. RERA compliance tracked. We catch the paperwork gaps before they become court cases.',
  },
  {
    icon: TrendingUp,
    title: 'Live Value Tracker',
    description: 'Know your plot is worth Rs. 14,200/sq.yd because the adjacent layout registered at that rate last Tuesday — not because a broker guessed.',
  },
  {
    icon: FolderLock,
    title: 'Digital Document Vault',
    description: 'Sale deed, patta, EC, link documents — everything stored with bank-grade encryption. Share with a lawyer or buyer instantly. Never scramble for paperwork again.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            One Subscription. <span className="text-primary">Complete Protection.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-lg text-muted-foreground">
            We are your eyes, ears, and legal shield on the ground in Visakhapatnam. 
            Everything an absent landowner needs, in one monthly plan.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group rounded-lg border border-border bg-white p-8 transition-shadow hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
