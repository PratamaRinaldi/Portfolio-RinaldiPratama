import { useState, useEffect, useRef } from "react"
import fotoProfil from './assets/foto-rinaldi.jpg'
// ─── SVG Icon Components ────────────────────────────────────────────────────
function IconMail({
  size = 22,
  color = "#1d4ed8",
}: {
  size?: number
  color?: string
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect
        x="2"
        y="4"
        width="20"
        height="16"
        rx="3"
        stroke={color}
        strokeWidth="1.8"
        fill="none"
      />
      <path
        d="M2 8l10 6 10-6"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}
function IconPhone({
  size = 22,
  color = "#1d4ed8",
}: {
  size?: number
  color?: string
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M6.6 10.8a15.7 15.7 0 006.6 6.6l2.2-2.2a1 1 0 011.05-.24 11.4 11.4 0 003.57.57A1 1 0 0121 16.5V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 .93c.063 1.226.267 2.44.57 3.57a1 1 0 01-.25 1.05L6.6 10.8z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
function IconLinkedIn({
  size = 22,
  color = "#1d4ed8",
}: {
  size?: number
  color?: string
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="4"
        stroke={color}
        strokeWidth="1.8"
      />
      <path
        d="M7 10v7M7 7v.5"
        stroke={color}
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M11 17v-4a2 2 0 014 0v4M11 10v7"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
function IconExternalLink({
  size = 16,
  color = "rgba(255,255,255,0.4)",
}: {
  size?: number
  color?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}
function IconDownload({
  size = 18,
  color = "#1d4ed8",
}: {
  size?: number
  color?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}
function IconSend({
  size = 18,
  color = "#fff",
}: {
  size?: number
  color?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  )
}
function IconCheck({
  size = 18,
  color = "#fff",
}: {
  size?: number
  color?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
function IconCopy({
  size = 14,
  color = "#2563eb",
}: {
  size?: number
  color?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
    </svg>
  )
}
function IconMenu({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <line x1="3" y1="6" x2="19" y2="6" />
      <line x1="3" y1="12" x2="19" y2="12" />
      <line x1="3" y1="18" x2="19" y2="18" />
    </svg>
  )
}
function IconClose({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <line x1="4" y1="4" x2="18" y2="18" />
      <line x1="18" y1="4" x2="4" y2="18" />
    </svg>
  )
}
function IconChevron({
  size = 16,
  color = "#60a5fa",
}: {
  size?: number
  color?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}
function IconCode({
  size = 20,
  color = "#1d4ed8",
}: {
  size?: number
  color?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}
function IconBriefcase({
  size = 20,
  color = "#1d4ed8",
}: {
  size?: number
  color?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="12" />
    </svg>
  )
}
function IconGraduate({
  size = 20,
  color = "#1d4ed8",
}: {
  size?: number
  color?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10L12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
      <line x1="22" y1="10" x2="22" y2="16" />
    </svg>
  )
}
function IconCertificate({
  size = 20,
  color = "#1d4ed8",
}: {
  size?: number
  color?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M9 12l-2 8 5-3 5 3-2-8" />
    </svg>
  )
}
function IconStar({
  size = 20,
  color = "#1d4ed8",
}: {
  size?: number
  color?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
function IconTarget({
  size = 20,
  color = "#1d4ed8",
}: {
  size?: number
  color?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}
function IconBulb({
  size = 20,
  color = "#1d4ed8",
}: {
  size?: number
  color?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="9" y1="18" x2="15" y2="18" />
      <line x1="10" y1="22" x2="14" y2="22" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14" />
    </svg>
  )
}
function IconUsers({
  size = 20,
  color = "#1d4ed8",
}: {
  size?: number
  color?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  )
}
function IconFolder({
  size = 20,
  color = "#1d4ed8",
}: {
  size?: number
  color?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
    </svg>
  )
}
function IconLocation({
  size = 18,
  color = "#60a5fa",
}: {
  size?: number
  color?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

// ─── Data ────────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  "Home",
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Certificates",
  "Contact",
]

const SKILLS = {
  Technical: [
    { name: "SAP Management System", level: 85 },
    { name: "Power BI", level: 80 },
    { name: "Data Analytics", level: 82 },
    { name: "Visualization Data", level: 78 },
    { name: "Microsoft Office", level: 92 },
    { name: "Project Management", level: 88 },
  ],
  Methodology: [
    { name: "Kaizen / Continuous Improvement", level: 90 },
    { name: "Lean Process", level: 85 },
    { name: "5S Methodology", level: 88 },
    { name: "Six Sigma Green Belt", level: 80 },
    { name: "Supply Chain Management", level: 86 },
    { name: "QC Tools (7 QC)", level: 78 },
  ],
  Soft: [
    { name: "Leadership", level: 87 },
    { name: "Problem Solving", level: 90 },
    { name: "Team Work", level: 93 },
    { name: "Training & Coaching", level: 88 },
    { name: "Communication", level: 85 },
    { name: "Budget Control", level: 80 },
  ],
}

const EXPERIENCES = [
  {
    company: "PT Schneider Electric Manufacturing Batam",
    role: "Logistic Trainer & Improvement Logistic Area",
    period: "November 2025 – Present",
    current: true,
    bullets: [
      "Develop training programs on warehouse and transportation processes for operational operators",
      "Create engaging training materials, manuals, and assessment tools aligned with operational standards",
      "Evaluate training effectiveness through assessments and on-the-job performance observations",
      "Implement process improvements using Kaizen, 5S, and Lean Process methodologies",
      "Monitor and document trainee progress, providing coaching and feedback",
    ],
  },
  {
    company: "PT Epson Batam",
    role: "Project Improvement – Logistic Area",
    period: "June 2024 – August 2025",
    current: false,
    bullets: [
      "Collaboration with IS Development team to develop digitalization technologies",
      "Project management: plan, execute, monitor projects and budgeting",
      "Analyze data to improve efficiency and report progress to management",
      "Conducted efficiency projects with several suppliers of goods",
      "Kaizen Committee participant; Budget and Purchase Request Control",
    ],
  },
  {
    company: "PT Ecogreen Oleochemicals Batam",
    role: "Warehouse Staff",
    period: "September 2022 – May 2024",
    current: false,
    bullets: [
      "Receive and process warehouse stock products",
      "Monthly Planning for Warehouse operations",
      "Perform inventory controls and maintain quality standards for audits",
      "Follow quality service standards and comply with regulations",
    ],
  },
  {
    company: "PT Caterpillar Indonesia Batam",
    role: "Assembly and Test Specialist",
    period: "October 2021 – September 2022",
    current: false,
    bullets: [
      "Assembling, testing, reworking and repairing machine components",
      "Operate test machines to test final drive assemblies",
      "Prepare prime products and attachments for shipping",
      "Disassemble and reassemble complex assemblies to repair or replace damaged parts",
    ],
  },
]

const PROJECTS = [
  {
    name: "Upskilling Learning Application",
    type: "Paper Less",
    desc: "Upskilling learning application for all departments. Features attendance recording, post-test, and skill practice.",
    tags: ["Digital", "Training", "App Dev"],
  },
  {
    name: "Centralize Optimization Small Part",
    type: "Cycle Time Optimization",
    desc: "Centralization of small raw materials. Optimized picking and binning routes, improved storage space and cycle time.",
    tags: ["Logistics", "Optimization", "Warehouse"],
  },
  {
    name: "E-Gatepass",
    type: "Paper Less",
    desc: "Digital approval system replacing paper-based gatepass. Eliminates paper, records history data digitally.",
    tags: ["Digital", "Approval System"],
  },
  {
    name: "RFID System",
    type: "Paper Less & Efficiency",
    desc: "Radio-frequency identification collaboration with suppliers. Real-time data processing, eliminates manual label pasting.",
    tags: ["IoT", "RFID", "Supply Chain"],
  },
  {
    name: "E-Checklist Management",
    type: "Paper Less & Efficiency",
    desc: "Digital checklist system with real-time accuracy in object checking and management visualization dashboard.",
    tags: ["Digital", "Dashboard", "Monitoring"],
  },
  {
    name: "e-Exim (Export & Import)",
    type: "Efficiency",
    desc: "New module on existing system for export-import process. Streamlines data input and simplifies document checking.",
    tags: ["Export", "Import", "System Dev"],
  },
]

const CERT_ICONS = [
  IconCertificate,
  IconStar,
  IconTarget,
  IconCode,
  IconBriefcase,
  IconGraduate,
  IconUsers,
]

const CERTS = [
  {
    title: "Six Sigma Green Belt Specialization",
    issuer: "Kennesaw State University via Coursera",
    date: "July 27, 2026",
    id: "TVFEWYAJB6H5",
  },
  {
    title: "Six Sigma Principles",
    issuer: "University System of Georgia via Coursera",
    date: "September 25, 2023",
    id: "3WY8EAREUUZL",
  },
  {
    title: "Why-Why Analysis",
    issuer: "PT. Epson Batam",
    date: "June 5, 2025",
    id: "PEB/WWA/2025/00011",
  },
  {
    title: "QC Introduction (QC Principles & 7 QC Tools)",
    issuer: "PT. Epson Batam",
    date: "May 8–9, 2025",
    id: "PEB/QCI/2025/00014",
  },
  {
    title: "Warehouse Architecture Design Methodology (WADM)",
    issuer: "Schneider Electric",
    date: "March 2, 2026",
    id: "SE-WADM-2026",
  },
  {
    title: "Methods of Training",
    issuer: "Schneider Electric",
    date: "March 1, 2026",
    id: "SE-MOT-2026",
  },
]

// ─── Hooks ───────────────────────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true)
      },
      { threshold },
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

// ─── Sub-components ──────────────────────────────────────────────────────────
function SkillBar({
  name,
  level,
  delay = 0,
}: {
  name: string
  level: number
  delay?: number
}) {
  const { ref, inView } = useInView()
  return (
    <div ref={ref as any} className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span style={{ fontWeight: 500, color: "#334155" }}>{name}</span>
        <span
          style={{
            fontFamily: "JetBrains Mono, monospace",
            color: "#2563eb",
            fontSize: "0.75rem",
          }}
        >
          {level}%
        </span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: inView ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  )
}

function SectionTitle({ label, title }: { label: string title: string }) {
  const words = title.split(" ")
  return (
    <div className="text-center">
      <div
        style={{
          fontFamily: "JetBrains Mono, monospace",
          color: "#3b82f6",
          fontSize: "0.8rem",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          marginBottom: "0.75rem",
        }}
      >
        {label}
      </div>
      <h2
        style={{
          fontWeight: 700,
          fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
          color: "#0f172a",
        }}
      >
        {words.slice(0, -1).join(" ")}{" "}
        <span className="gradient-text">{words[words.length - 1]}</span>
      </h2>
      <div
        style={{
          margin: "1rem auto 0",
          width: "4rem",
          height: "3px",
          borderRadius: "999px",
          background: "linear-gradient(90deg, #1d4ed8, #93c5fd)",
        }}
      />
    </div>
  )
}

// ─── Main App ────────────────────────────────────────────────────────────────
export default function App() {
  const [activeSection, setActiveSection] = useState("Home")
  const [skillTab, setSkillTab] = useState("Technical")
  const [mobileOpen, setMobileOpen] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [formSent, setFormSent] = useState(false)
  const [copied, setCopied] = useState(false)

  const scrollTo = (id: string) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" })
    setMobileOpen(false)
  }

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + 120
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_LINKS[i].toLowerCase())
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(NAV_LINKS[i])
          break
        }
      }
    }
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Build mailto URL so the email goes directly to Rinaldi's inbox
    const subject = encodeURIComponent(
      `Portfolio Contact from ${contactForm.name}`,
    )
    const body = encodeURIComponent(
      `Hi Rinaldi,\n\nYou have a new message from your portfolio website:\n\n` +
        `Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}\n\n---\nSent via portfolio contact form`,
    )
    window.location.href = `mailto:rinaldiritonga19@gmail.com?subject=${subject}&body=${body}`
    setFormSent(true)
    setTimeout(() => setFormSent(false), 4000)
    setContactForm({ name: "", email: "", message: "" })
  }

  const copyEmail = () => {
    navigator.clipboard.writeText("rinaldiritonga19@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-white min-h-screen text-black antialiased">
      {/* Decorative orbs */}
      <div
        className="orb w-96 h-96 bg-blue-300/30 top-[-8rem] right-[-4rem] fixed"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="orb w-64 h-64 bg-indigo-200/40 top-1/3 left-[-4rem] fixed"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="orb w-80 h-80 bg-sky-200/30 bottom-[-4rem] right-1/4 fixed"
        style={{ animationDelay: "4s" }}
      />

      {/* ── NAV ── */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl">
        <div className="glass rounded-2xl px-4 py-3 flex items-center justify-between">
          <span
            style={{
              fontWeight: 800,
              color: "#1d4ed8",
              fontSize: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            PORTOFOLIO<span style={{ color: "#60a5fa" }}>.</span>
          </span>
          <div className="desktop-nav flex items-center gap-3">
            {NAV_LINKS.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className={`nav-item ${activeSection === l ? "active" : ""}`}
              >
                {l}
              </button>
            ))}
          </div>
          <a
            href="mailto:rinaldiritonga19@gmail.com"
            className="btn-primary hidden md:flex items-center gap-2"
            style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem" }}
          >
            <IconMail size={15} color="#fff" /> Hire Me
          </a>
          <button
            className="mobile-menu p-2 rounded-xl text-blue-700"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
        {mobileOpen && (
          <div className="glass rounded-2xl mt-2 p-4 flex flex-col gap-1 md:hidden">
            {NAV_LINKS.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className={`nav-item text-left w-full ${
                  activeSection === l ? "active" : ""
                }`}
              >
                {l}
              </button>
            ))}
            <a
              href="mailto:rinaldiritonga19@gmail.com"
              className="btn-primary mt-2 text-center flex items-center justify-center gap-2"
            >
              <IconMail size={15} color="#fff" /> Hire Me
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section
        id="home"
        className="black-h-screen flex items-center justify-center px-6 pt-28 pb-16"
      >
        <div className="max-w-5xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <div
              className="inline-flex items-center gap-2 glass-dark rounded-full px-4 py-2 text-sm text-blue-700"
              style={{ fontWeight: 500 }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for new opportunities
            </div>
            <h1
              style={{
                fontWeight: 700,
                fontSize: "clamp(2.5rem, 6vw, 3.75rem)",
                lineHeight: 1.1,
                color: "#0f172a",
              }}
            >
              Rinaldi
              <br />
              <span className="gradient-text">Pratama</span>
              <br />
              Ritonga
            </h1>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#2563eb",
                fontFamily: "Calibri, monospace",
                fontSize: "0.85rem",
              }}
            >
              Logistic Trainer &amp; Improvement Specialist
            </div>
            <p
              style={{ color: "#475569", lineHeight: 1.75, maxWidth: "40rem" }}
            >
              Strong project management skills with a track record of planning,
              executing, and monitoring improvement initiatives involving
              cross-functional teams and external suppliers. Proficient in data
              analysis for performance tracking, cost control, and continuous
              improvement. Competent and responsible in the logistics
              operational process, skilled in collaborating with teams from
              other departments to develop and implement digital solutions that
              improve operation visibility, efficiency, and accuracy.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => scrollTo("Projects")}
                className="btn-primary flex items-center gap-2"
              >
                <IconFolder size={17} color="#fff" /> View My Work
              </button>
              <button
                onClick={() => scrollTo("Contact")}
                className="btn-glass flex items-center gap-2"
              >
                <IconMail size={17} /> Get In Touch
              </button>
              <a
                href="/src/assets/cv.pdf"
                download="Rinaldi_Pratama_Ritonga_CV.pdf"
                className="btn-glass flex items-center gap-2"
              >
                <IconDownload size={17} /> Download CV
              </a>
            </div>
            <div className="flex items-center gap-8 pt-2">
              {[
                { label: "4+", sub: "Years Exp." },
                { label: "6+", sub: "Projects" },
                { label: "6+", sub: "Certifications" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div
                    className="gradient-text"
                    style={{ fontWeight: 700, fontSize: "1.75rem" }}
                  >
                    {s.label}
                  </div>
                  <div
                    style={{
                      color: "#64748b",
                      fontSize: "0.75rem",
                      marginTop: "0.125rem",
                    }}
                  >
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div style={{ position: "relative" }}>
              <div
                className="glass"
                style={{
                  width: "17rem",
                  height: "17rem",
                  borderRadius: "1.5rem",
                  overflow: "hidden",
                  boxShadow: "0 24px 64px rgba(37,99,235,0.3)",
                  border: "3px solid rgba(191,219,254,0.6)",
                }}
              >
                <img
                  src={fotoProfil}
                  alt="Rinaldi Pratama Ritonga"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(15,33,88,0.45) 0%, transparent 50%)",
                  }}
                />
              </div>
              <div
                className="glass"
                style={{
                  position: "absolute",
                  bottom: "-1rem",
                  left: "-1.5rem",
                  padding: "0.5rem 1rem",
                  borderRadius: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  boxShadow: "0 4px 16px rgba(37,99,235,0.15)",
                }}
              >
                <IconLocation size={16} />
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#1d4ed8",
                  }}
                >
                  Batam, Indonesia
                </span>
              </div>
              <div
                className="glass"
                style={{
                  position: "absolute",
                  top: "-1rem",
                  right: "-1rem",
                  padding: "0.5rem 1rem",
                  borderRadius: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  boxShadow: "0 4px 16px rgba(37,99,235,0.15)",
                }}
              >
                <IconBriefcase size={15} />
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#1d4ed8",
                  }}
                >
                  Schneider Electric
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle label="About Me" title="Who I Am" />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="md:col-span-2 glass rounded-2xl p-8 space-y-4">
              <p style={{ color: "#475569", lineHeight: 1.75 }}>
                I'm a results-driven{" "}
                <strong style={{ color: "#1d4ed8" }}>
                  Logistic Trainer and Improvement Specialist
                </strong>{" "}
                with strong project management skills and a track record of
                planning, executing, and monitoring improvement initiatives
                involving cross-functional teams and external suppliers.
              </p>
              <p style={{ color: "#475569", lineHeight: 1.75 }}>
                Proficient in data analysis for performance tracking, cost
                control, and continuous improvement through the{" "}
                <strong style={{ color: "#1d4ed8" }}>Kaizen methodology</strong>
                . Experienced in managing budget releases and purchase
                requisition control.
              </p>
              <p style={{ color: "#475569", lineHeight: 1.75 }}>
                Skilled in collaborating with teams across departments to
                develop and implement{" "}
                <strong style={{ color: "#1d4ed8" }}>digital solutions</strong>{" "}
                that improve supply chain visibility, efficiency, and accuracy.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-3">
                {[
                  {
                    Icon: IconMail,
                    label: "Email",
                    val: "rinaldiritonga19@gmail.com",
                  },
                  { Icon: IconPhone, label: "Phone", val: "+62 822 7712 3920" },
                  {
                    Icon: IconLinkedIn,
                    label: "LinkedIn",
                    val: "rinaldi-pratama-ritonga",
                  },
                  {
                    Icon: IconGraduate,
                    label: "Degree",
                    val: "Bachelor Industrial Engineering",
                  },
                  {
                    Icon: IconBriefcase,
                    label: "University",
                    val: "University of Malikussaleh",
                  },
                  { Icon: IconStar, label: "GPA", val: "3.55 / 4.00" },
                ].map(({ Icon, label, val }) => (
                  <div
                    key={label}
                    className="flex items-start gap-2"
                    style={{ fontSize: "0.875rem" }}
                  >
                    <Icon size={16} color="#60a5fa" />
                    <div>
                      <div
                        style={{
                          color: "#94a3b8",
                          fontSize: "0.7rem",
                          fontWeight: 500,
                        }}
                      >
                        {label}
                      </div>
                      <div style={{ color: "#334155", fontWeight: 500 }}>
                        {val}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {[
                {
                  Icon: IconTarget,
                  title: "Goal-Oriented",
                  desc: "Focused on delivering measurable improvements in operational efficiency",
                },
                {
                  Icon: IconBulb,
                  title: "Digital Innovator",
                  desc: "Building paperless and data-driven systems for modern logistics",
                },
                {
                  Icon: IconUsers,
                  title: "Collaborative",
                  desc: "Cross-functional team leadership and supplier partnerships",
                },
              ].map(({ Icon, title, desc }) => (
                <div key={title} className="glass rounded-2xl p-5 space-y-2">
                  <div
                    className="icon-bubble"
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "0.75rem",
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <div style={{ fontWeight: 700, color: "#0f172a" }}>
                    {title}
                  </div>
                  <div style={{ color: "#64748b", fontSize: "0.875rem" }}>
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle label="Career Path" title="Professional Experience" />
          <div className="mt-12 space-y-0">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div
                    className="icon-bubble"
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "1rem",
                      flexShrink: 0,
                      background: exp.current
                        ? "linear-gradient(135deg, #1d4ed8, #60a5fa)"
                        : undefined,
                    }}
                  >
                    <IconBriefcase
                      size={18}
                      color={exp.current ? "#fff" : "#1d4ed8"}
                    />
                  </div>
                  {i < EXPERIENCES.length - 1 && (
                    <div className="timeline-line flex-1 my-2" />
                  )}
                </div>
                <div
                  className={`glass rounded-2xl p-6 mb-6 flex-1 ${
                    exp.current ? "ring-2 ring-blue-400/50" : ""
                  }`}
                >
                  <div className="flex flex-wrap justify-between gap-2 mb-3">
                    <div>
                      <h3
                        style={{
                          fontWeight: 700,
                          color: "#0f172a",
                          fontSize: "1.05rem",
                        }}
                      >
                        {exp.role}
                      </h3>
                      <p
                        style={{
                          color: "#2563eb",
                          fontWeight: 600,
                          fontSize: "0.9rem",
                          marginTop: "0.2rem",
                        }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span
                        className="glass-dark"
                        style={{
                          color: "#1e40af",
                          fontSize: "0.75rem",
                          fontFamily: "JetBrains Mono, monospace",
                          padding: "0.35rem 0.85rem",
                          borderRadius: "999px",
                        }}
                      >
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span
                          style={{
                            background:
                              "linear-gradient(135deg,#16a34a,#4ade80)",
                            color: "#fff",
                            fontSize: "0.7rem",
                            padding: "0.2rem 0.65rem",
                            borderRadius: "999px",
                            fontWeight: 600,
                          }}
                        >
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex gap-2"
                        style={{ color: "#475569", fontSize: "0.9rem" }}
                      >
                        <IconChevron size={14} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle label="Portfolio" title="Project History" />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS.map((p, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-6 project-card cursor-pointer group"
              >
                <div className="icon-bubble mb-4 group-hover:scale-110 transition-transform">
                  <IconCode size={20} />
                </div>
                <div
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    color: "#3b82f6",
                    fontSize: "0.7rem",
                    marginBottom: "0.35rem",
                  }}
                >
                  {p.type}
                </div>
                <h3
                  style={{
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "0.5rem",
                  }}
                >
                  {p.name}
                </h3>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    marginBottom: "1rem",
                  }}
                >
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="skill-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle label="Expertise" title="Skills & Competencies" />
          <div className="mt-8">
            <div className="glass rounded-2xl p-2 inline-flex gap-1 mb-8">
              {Object.keys(SKILLS).map((k) => (
                <button
                  key={k}
                  onClick={() => setSkillTab(k)}
                  className={`tab-btn ${skillTab === k ? "active" : ""}`}
                >
                  {k}
                </button>
              ))}
            </div>
            <div className="glass rounded-2xl p-8 grid md:grid-cols-2 gap-6">
              {SKILLS[(skillTab as keyof typeof SKILLS)].map((s, i) => (
                <SkillBar
                  key={s.name}
                  name={s.name}
                  level={s.level}
                  delay={i * 80}
                />
              ))}
            </div>
          </div>
          <div className="mt-8 glass rounded-2xl p-6">
            <h4
              style={{
                fontWeight: 600,
                color: "#475569",
                marginBottom: "1rem",
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Core Competencies
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "SAP System",
                "Power BI",
                "Microsoft Office",
                "Data Analytics",
                "Project Management",
                "Kaizen",
                "Microsoft Visual Basic",
                "Lean Process",
                "Six Sigma",
                "Training & Development",
                "Budget Control",
                "Warehouse Operations",
                "RFID Systems",
                "Process Digitalization",
                "Warehouse Management System",
                "QC 7 Tools",
                "Cross-functional Leadership",
              ].map((s) => (
                <span key={s} className="skill-badge cursor-default">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATES ── */}
      <section id="certificates" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            label="Credentials"
            title="Certificates & Achievements"
          />
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {CERTS.map((c, i) => {
              const CertIcon = CERT_ICONS[i % CERT_ICONS.length]
              return (
                <div
                  key={i}
                  className="glass rounded-2xl p-5 flex gap-4 hover:ring-2 hover:ring-blue-300/50 transition-all cursor-default"
                  style={{ transition: "all 0.2s" }}
                >
                  <div className="icon-bubble flex-shrink-0">
                    <CertIcon size={20} />
                  </div>
                  <div className="min-w-0">
                    <h3
                      style={{
                        fontWeight: 700,
                        color: "#0f172a",
                        fontSize: "0.9rem",
                        lineHeight: 1.4,
                      }}
                    >
                      {c.title}
                    </h3>
                    <p
                      style={{
                        color: "#2563eb",
                        fontSize: "0.8rem",
                        marginTop: "0.25rem",
                        fontWeight: 500,
                      }}
                    >
                      {c.issuer}
                    </p>
                    <div className="flex items-center gap-2 mt-2 flex-wrap">
                      <span style={{ color: "#94a3b8", fontSize: "0.75rem" }}>
                        📅 {c.date}
                      </span>
                      <span
                        style={{
                          fontFamily: "JetBrains Mono, monospace",
                          fontSize: "0.7rem",
                          color: "#3b82f6",
                          background: "rgba(219,234,254,0.6)",
                          padding: "0.15rem 0.5rem",
                          borderRadius: "0.25rem",
                        }}
                      >
                        ID: {c.id}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="glass rounded-3xl p-8 flex flex-col md:flex-row gap-6 items-center">
            <div
              className="icon-bubble flex-shrink-0"
              style={{ width: "5rem", height: "5rem", borderRadius: "1.5rem" }}
            >
              <IconGraduate size={30} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  color: "#3b82f6",
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  marginBottom: "0.4rem",
                }}
              >
                Education
              </div>
              <h3
                style={{
                  fontWeight: 700,
                  color: "#0f172a",
                  fontSize: "1.25rem",
                }}
              >
                Bachelor of Industrial Engineering
              </h3>
              <p
                style={{
                  color: "#2563eb",
                  fontWeight: 600,
                  marginTop: "0.25rem",
                }}
              >
                University of Malikussaleh, North Aceh
              </p>
              <p
                style={{
                  color: "#64748b",
                  fontSize: "0.875rem",
                  marginTop: "0.25rem",
                }}
              >
                2016 – 2020
              </p>
              <p
                style={{
                  color: "#64748b",
                  fontSize: "0.875rem",
                  marginTop: "0.5rem",
                }}
              >
                Relevant: Operations Research, Production Planning & Control,
                Quality Control & Six Sigma, Supply Chain Management, Project
                Management, Data Analytics
              </p>
            </div>
            <div className="glass-dark rounded-2xl px-8 py-5 text-center flex-shrink-0">
              <div
                className="gradient-text"
                style={{ fontWeight: 700, fontSize: "2.25rem" }}
              >
                3.55
              </div>
              <div
                style={{
                  color: "#64748b",
                  fontSize: "0.75rem",
                  marginTop: "0.25rem",
                }}
              >
                GPA / 4.00
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle label="Get In Touch" title="Let's Work Together" />
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {/* Contact cards – dark style matching reference */}
            <div className="space-y-4">
              <p
                style={{
                  color: "#475569",
                  lineHeight: 1.75,
                  marginBottom: "0.5rem",
                }}
              >
                Looking for a professional who bridges operations and digital
                transformation? I'm open to opportunities where I can contribute
                to logistics improvement and digital solutions.
              </p>

              {/* Email card – matches reference design */}
              <div
                className="contact-card-dark"
                onClick={copyEmail}
                style={{ cursor: "pointer" }}
              >
                <div className="icon-bubble-dark">
                  <IconMail size={24} color="#1d4ed8" />
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "0.2rem",
                    }}
                  >
                    Email
                  </div>
                  <div
                    style={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    rinaldiritonga19@gmail.com
                  </div>
                  <div
                    style={{
                      color: "rgba(147,197,253,0.8)",
                      fontSize: "0.75rem",
                      marginTop: "0.2rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                    }}
                  >
                    <IconCopy size={12} color="rgba(147,197,253,0.8)" />
                    {copied ? "Copied!" : "Click to copy"}
                  </div>
                </div>
                <span className="ext-icon">
                  <IconExternalLink size={16} />
                </span>
              </div>

              {/* Phone card */}
              <div
                className="contact-card-dark"
                onClick={() => window.open("tel:+6282277123920")}
                style={{ cursor: "pointer" }}
              >
                <div className="icon-bubble-dark">
                  <IconPhone size={24} color="#1d4ed8" />
                </div>
                <div className="flex-1">
                  <div
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "0.2rem",
                    }}
                  >
                    Phone
                  </div>
                  <div
                    style={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                    }}
                  >
                    +62 822 7712 3920
                  </div>
                  <div
                    style={{
                      color: "rgba(147,197,253,0.8)",
                      fontSize: "0.75rem",
                      marginTop: "0.2rem",
                    }}
                  >
                    Click to call
                  </div>
                </div>
                <span className="ext-icon">
                  <IconExternalLink size={16} />
                </span>
              </div>

              {/* LinkedIn card */}
              <div
                className="contact-card-dark"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/public-profile/settings/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact_info%3BP9cpJpJ%2BTUKeUIVOY1dyQQ%3D%3D",
                    "_blank",
                  )
                }
                style={{ cursor: "pointer" }}
              >
                <div className="icon-bubble-dark">
                  <IconLinkedIn size={24} color="#1d4ed8" />
                </div>
                <div className="flex-1">
                  <div
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "0.2rem",
                    }}
                  >
                    LinkedIn
                  </div>
                  <div
                    style={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                    }}
                  >
                    rinaldi-pratama-ritonga
                  </div>
                  <div
                    style={{
                      color: "rgba(147,197,253,0.8)",
                      fontSize: "0.75rem",
                      marginTop: "0.2rem",
                    }}
                  >
                    Click to visit profile
                  </div>
                </div>
                <span className="ext-icon">
                  <IconExternalLink size={16} />
                </span>
              </div>
            </div>

            {/* Contact form */}
            <form
              onSubmit={handleContactSubmit}
              className="glass rounded-2xl p-6 space-y-4"
            >
              <h3
                style={{
                  fontWeight: 700,
                  color: "#0f172a",
                  fontSize: "1.15rem",
                }}
              >
                Send a Message
              </h3>
              <p style={{ color: "#64748b", fontSize: "0.85rem" }}>
                Your message will be sent directly to{" "}
                <strong style={{ color: "#1d4ed8" }}>
                  rinaldiritonga19@gmail.com
                </strong>{" "}
                via your default mail client.
              </p>
              {[
                {
                  id: "name",
                  label: "Your Name",
                  type: "text",
                },
                {
                  id: "email",
                  label: "Your Email",
                  type: "email",
                },
              ].map((field) => (
                <div key={field.id} className="space-y-1.5">
                  <label
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: "#475569",
                    }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    required
                    placeholder={field.placeholder}
                    value={contactForm[(field.id as keyof typeof contactForm)]}
                    onChange={(e) =>
                      setContactForm((prev) => ({
                        ...prev,
                        [field.id]: e.target.value,
                      }))
                    }
                    style={{
                      width: "100%",
                      padding: "0.625rem 1rem",
                      borderRadius: "0.75rem",
                      border: "1px solid rgba(59,130,246,0.25)",
                      background: "rgba(255,255,255,0.65)",
                      backdropFilter: "blur(8px)",
                      fontSize: "0.875rem",
                      color: "#0f172a",
                      outline: "none",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#3b82f6"
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(59,130,246,0.15)"
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(59,130,246,0.25)"
                      e.target.style.boxShadow = "none"
                    }}
                  />
                </div>
              ))}
              <div className="space-y-1.5">
                <label
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "#475569",
                  }}
                >
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={contactForm.message}
                  onChange={(e) =>
                    setContactForm((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  style={{
                    width: "100%",
                    padding: "0.625rem 1rem",
                    borderRadius: "0.75rem",
                    border: "1px solid rgba(59,130,246,0.25)",
                    background: "rgba(255,255,255,0.65)",
                    backdropFilter: "blur(8px)",
                    fontSize: "0.875rem",
                    color: "#0f172a",
                    outline: "none",
                    resize: "none",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#3b82f6"
                    e.target.style.boxShadow = "0 0 0 3px rgba(59,130,246,0.15)"
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(59,130,246,0.25)"
                    e.target.style.boxShadow = "none"
                  }}
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2"
                style={{ padding: "0.875rem" }}
              >
                {formSent ? (
                  <>
                    <IconCheck size={18} color="#fff" /> Opening Mail Client…
                  </>
                ) : (
                  <>
                    <IconSend size={18} color="#fff" /> Send to Rinaldi's Email
                  </>
                )}
              </button>
              {formSent && (
                <p
                  style={{
                    textAlign: "center",
                    color: "#16a34a",
                    fontSize: "0.8rem",
                  }}
                >
                  ✓ Your mail client should open with the pre-filled message.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="py-8 px-6 text-center"
        style={{ borderTop: "1px solid rgba(191,219,254,0.4)" }}
      >
        <div className="glass-dark inline-block px-8 py-4 rounded-2xl">
          <p style={{ color: "#475569", fontSize: "0.875rem" }}>
            © 2026{" "}
            <strong style={{ color: "#1d4ed8" }}>
              Rinaldi Pratama Ritonga
            </strong>{" "}
            · All rights reserved
          </p>
          <p
            style={{
              color: "#94a3b8",
              fontSize: "0.75rem",
              marginTop: "0.25rem",
              fontFamily: "calibri, monospace",
            }}
          >
            Logistic Trainer & Improvement Specialist · Batam, Indonesia
          </p>
        </div>
      </footer>
    </div>
  )
}
