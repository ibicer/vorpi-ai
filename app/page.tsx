"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bot,
  Boxes,
  BrainCircuit,
  Building2,
  Check,
  ChevronRight,
  CircleDot,
  Database,
  Factory,
  Gauge,
  GitBranch,
  Layers3,
  LineChart,
  MapPin,
  Menu,
  Network,
  PackageSearch,
  PlayCircle,
  Radar,
  ShieldCheck,
  Sparkles,
  Target,
  Truck,
  Users,
  Workflow,
  X,
  Zap,
} from "lucide-react";

const navItems = [
  { id: "platform", label: "Platform" },
  { id: "architecture", label: "Architecture" },
  { id: "intelligence", label: "Intelligence" },
  { id: "copilot", label: "AI Copilot" },
  { id: "company", label: "Company" },
];

const pillars = [
  {
    letter: "V",
    title: "Vendors",
    description:
      "Supplier relationships, lead times, pricing, performance, contracts, and procurement risk.",
    icon: Truck,
  },
  {
    letter: "O",
    title: "Operations",
    description:
      "Orders, routings, work execution, activity dependencies, fulfillment, and operational events.",
    icon: Workflow,
  },
  {
    letter: "R",
    title: "Resources",
    description:
      "People, machines, work centers, capacity, inventory, and manufacturing constraints.",
    icon: Gauge,
  },
  {
    letter: "P",
    title: "Products",
    description:
      "Product masters, categories, bills of materials, critical paths, and product structures.",
    icon: Boxes,
  },
  {
    letter: "I",
    title: "Intelligence",
    description:
      "Forecasting, optimization, planning, executive insights, and conversational decision support.",
    icon: BrainCircuit,
  },
];

const engines = [
  {
    eyebrow: "Versatile Architecture",
    title: "A proprietary enterprise model built for AI at supply-chain scale.",
    description:
      "The VORPI Framework connects vendors, operations, resources, products, and locations into one operational knowledge model. AI can reason across the enterprise because the relationships, dependencies, and trade-offs are represented explicitly.",
    icon: Network,
    points: [
      "Enterprise Core for trusted operational data and execution",
      "Relationship-aware model across products, suppliers, resources, and locations",
      "Critical-path and multi-echelon visibility for complex manufacturing",
    ],
  },
  {
    eyebrow: "Versatile Forecasting",
    title: "Demand models built from the real mechanics of customer acquisition.",
    description:
      "VORPI uses Fast Fourier Transform methods to combine uncertainty from customer traffic, product selection, order occurrence, and quantity. The result is a richer demand model than a single aggregated time-series forecast.",
    icon: LineChart,
    points: [
      "Additive, multiplicative, and intermittent demand modeling",
      "Transaction-level learning with uncertainty preserved",
      "Scenario distributions designed for planning and service decisions",
    ],
  },
  {
    eyebrow: "Versatile Optimization",
    title: "Reinforcement learning that turns uncertainty into enterprise decisions.",
    description:
      "The platform uses reinforcement learning, decomposition, and critical-path logic to evaluate inventory, procurement, production, and planning decisions over time—balancing service, risk, working capital, and operational feasibility.",
    icon: Target,
    points: [
      "Multi-echelon safety-stock and decoupling-point decisions",
      "Q-learning and policy evaluation across planning horizons",
      "Explainable recommendations for FAS, MPS, MRP, and procurement",
    ],
  },
];

const outcomes = [
  { value: "Faster", label: "decision cycles", icon: Zap },
  { value: "Lower", label: "inventory exposure", icon: PackageSearch },
  { value: "Higher", label: "service performance", icon: ShieldCheck },
  { value: "Clearer", label: "enterprise visibility", icon: Radar },
];

const industries = [
  {
    title: "Industrial Manufacturing",
    description:
      "For complex BOMs, long lead times, constrained resources, and high-mix / low-volume environments.",
    icon: Factory,
  },
  {
    title: "OEMs",
    description:
      "Coordinate suppliers, components, final assembly, customer commitments, and critical-path risk.",
    icon: Building2,
  },
  {
    title: "Wholesale & Distribution",
    description:
      "Improve replenishment, inventory placement, supplier coordination, and multi-location service.",
    icon: Database,
  },
  {
    title: "Retail & CPG",
    description:
      "Model traffic, product choice, channel demand, promotions, and fulfillment at scale.",
    icon: BarChart3,
  },
];

function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </div>
      <h2 className="text-balance text-3xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-5 text-pretty text-base leading-8 text-slate-300 md:text-lg">
          {body}
        </p>
      ) : null}
    </div>
  );
}

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href="#top"
      className="flex shrink-0 items-center"
      aria-label="VORPI AI home"
    >
      <img
        src="/vorpi-logo-wide-transparent.png"
        alt="VORPI AI"
        className={
          compact
            ? "h-12 w-auto max-w-[210px] object-contain sm:h-14 sm:max-w-[250px]"
            : "h-14 w-auto max-w-[260px] object-contain sm:h-16 sm:max-w-[310px]"
        }
      />
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#070b12]/85 shadow-[0_16px_50px_rgba(0,0,0,.28)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >

      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 md:px-8">
        <Logo compact />

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="mailto:contact@vorpi.ai?subject=VORPI%20AI%20Enterprise%20Platform"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
          >
            Request a conversation
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#080d15]/96 px-5 py-5 backdrop-blur-xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="mailto:contact@vorpi.ai?subject=VORPI%20AI%20Enterprise%20Platform"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950"
            >
              Request a conversation
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-[#060a11] pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(34,211,238,.12),transparent_26%),radial-gradient(circle_at_86%_28%,rgba(148,163,184,.12),transparent_30%),linear-gradient(180deg,#070b12_0%,#0a1019_58%,#070b12_100%)]" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
        <div className="absolute -right-40 top-24 h-[520px] w-[520px] rounded-full border border-cyan-200/10" />
        <div className="absolute -right-20 top-44 h-[370px] w-[370px] rounded-full border border-white/10" />
      </div>

      <div className="relative mx-auto grid min-h-[830px] max-w-7xl items-center gap-16 px-5 py-24 md:px-8 lg:grid-cols-[1.05fr_.95fr] lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,.05)]">
            <CircleDot className="h-4 w-4 text-cyan-300" />
            AI First. Enterprise-wide. Built for decisions.
          </div>

          <h1 className="mt-7 max-w-4xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white md:text-7xl lg:text-[5.25rem]">
            The Enterprise Artificial Intelligence Platform
          </h1>

          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-300 md:text-xl">
            VORPI AI transforms operational execution into enterprise intelligence. Our platform
            listens to users, understands their needs, and orchestrates forecasting, optimization,
            planning, and operational tools to produce explainable decisions.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:contact@vorpi.ai?subject=Enterprise%20AI%20Platform%20Conversation"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
            >
              Discuss your enterprise challenge
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#platform"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
            >
              Explore the platform
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            {[
              ["Architecture", "VORPI Framework"],
              ["Forecasting", "Fast Fourier Transform"],
              ["Optimization", "Reinforcement Learning"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
                  {label}
                </div>
                <div className="mt-2 text-sm font-medium leading-6 text-white">{value}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,.09),rgba(255,255,255,.025))] p-4 shadow-[0_35px_100px_rgba(0,0,0,.48)] backdrop-blur-xl">
            <div className="rounded-[1.55rem] border border-white/10 bg-[#0a1019]/95 p-5 md:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Enterprise AI Copilot
                  </div>
                  <div className="mt-1 text-lg font-semibold text-white">From user intent to action</div>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10">
                  <Bot className="h-5 w-5 text-cyan-200" />
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                  User request
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  “Which components should we protect to meet a six-week customer lead time while
                  reducing excess inventory?”
                </p>
              </div>

              <div className="my-5 flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />
                <Sparkles className="h-4 w-4 text-cyan-300" />
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />
              </div>

              <div className="grid gap-3">
                {[
                  [BrainCircuit, "Understand", "Interpret intent, context, constraints, and decision horizon"],
                  [GitBranch, "Orchestrate", "Select forecasting, critical-path, optimization, and planning tools"],
                  [Activity, "Execute", "Run business logic across the VORPI enterprise model"],
                  [BarChart3, "Explain", "Deliver recommendations, assumptions, scenarios, and impact"],
                ].map(([Icon, title, body]) => {
                  const ItemIcon = Icon as typeof BrainCircuit;
                  return (
                    <div key={title as string} className="flex gap-4 rounded-2xl border border-white/8 bg-white/[0.025] p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                        <ItemIcon className="h-5 w-5 text-cyan-200" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">{title as string}</div>
                        <div className="mt-1 text-xs leading-5 text-slate-400">{body as string}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 rounded-2xl border border-emerald-300/15 bg-emerald-300/[0.06] p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-emerald-200">
                  <Check className="h-4 w-4" />
                  Explainable enterprise recommendation
                </div>
                <div className="mt-2 text-xs leading-5 text-slate-400">
                  Prioritized component protection, planning implications, expected service impact,
                  and the rationale behind the decision.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AiFirstSection() {
  return (
    <section id="platform" className="border-y border-white/8 bg-[#0a1019] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="The AI-First Philosophy"
          title="Enterprise software should not merely tell people how to use a system. It should help the enterprise decide."
          body="Most vendors begin with ERP workflows and add AI as an assistant around the edges. VORPI begins with intelligence: understanding the enterprise, modeling uncertainty, evaluating alternatives, and coordinating the right operational tools to turn insight into action."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 md:p-9">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              ERP First
            </div>
            <h3 className="mt-3 text-2xl font-semibold text-slate-200">AI helps users navigate software.</h3>
            <div className="mt-7 space-y-4">
              {[
                "The transaction system remains the center of the architecture",
                "AI primarily retrieves information or explains existing workflows",
                "Forecasting, optimization, and planning remain disconnected modules",
                "Decisions still depend on users assembling the full picture manually",
              ].map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-6 text-slate-400">
                  <X className="mt-1 h-4 w-4 shrink-0 text-slate-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(145deg,rgba(34,211,238,.12),rgba(255,255,255,.035))] p-7 shadow-[0_28px_80px_rgba(8,145,178,.12)] md:p-9">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="relative">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                AI First — VORPI
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-white">AI orchestrates enterprise decisions.</h3>
              <div className="mt-7 space-y-4">
                {[
                  "The enterprise knowledge model is designed for machine reasoning",
                  "LLMs understand needs, constraints, and business context",
                  "Forecasting and optimization engines are selected and combined dynamically",
                  "Recommendations are executed through integrated planning and operational workflows",
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-6 text-slate-200">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-cyan-200" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArchitectureSection() {
  return (
    <section id="architecture" className="bg-[#070b12] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Versatile Architecture"
          title="The VORPI Framework gives AI an enterprise it can understand."
          body="VORPI represents the operating system of the supply chain: Vendors, Operations, Resources, Products, and Intelligence. The platform pairs these dimensions with locations, transactions, dependencies, and constraints so that AI can reason across the full enterprise rather than within isolated functions."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.article
                key={pillar.letter}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.06 }}
                className="group rounded-[1.7rem] border border-white/10 bg-white/[0.028] p-5 transition hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.045]"
              >
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-semibold tracking-[-0.05em] text-white">{pillar.letter}</div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] text-cyan-200">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="mt-7 text-lg font-semibold text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{pillar.description}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]">
          <div className="grid lg:grid-cols-[.8fr_1.2fr]">
            <div className="border-b border-white/10 p-7 md:p-10 lg:border-b-0 lg:border-r">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                Enterprise Core
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-white">Trusted execution and operational truth</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                Manage enterprise records, transactions, relationships, and workflows across vendors,
                operations, resources, and products.
              </p>
            </div>
            <div className="p-7 md:p-10">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                Enterprise Intelligence Platform
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-white">Predictive, prescriptive, and conversational intelligence</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                Transform enterprise data into demand models, optimization policies, synchronized plans,
                executive visibility, and explainable recommendations through the Enterprise AI Copilot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntelligenceSection() {
  const [active, setActive] = useState(0);
  const ActiveIcon = engines[active].icon;

  return (
    <section id="intelligence" className="border-y border-white/8 bg-[#0a1019] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="The Three Versatile Engines"
          title="One platform. Three differentiated capabilities."
          body="VORPI combines a proprietary enterprise architecture, FFT-based uncertainty modeling, and reinforcement-learning optimization. Together, they form a decision system designed for the real complexity of supply chains."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
          <div className="space-y-3">
            {engines.map((engine, index) => {
              const Icon = engine.icon;
              const isActive = active === index;
              return (
                <button
                  key={engine.eyebrow}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`w-full rounded-[1.4rem] border p-5 text-left transition ${
                    isActive
                      ? "border-cyan-300/25 bg-cyan-300/[0.08]"
                      : "border-white/10 bg-white/[0.025] hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border ${
                        isActive
                          ? "border-cyan-300/25 bg-cyan-300/10 text-cyan-200"
                          : "border-white/10 bg-white/[0.03] text-slate-400"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                        0{index + 1}
                      </div>
                      <div className={`mt-1 font-semibold ${isActive ? "text-white" : "text-slate-300"}`}>
                        {engine.eyebrow}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,.065),rgba(255,255,255,.02))] p-7 md:p-10"
          >
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-cyan-300/[0.08] blur-3xl" />
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                <ActiveIcon className="h-7 w-7" />
              </div>
              <div className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                {engines[active].eyebrow}
              </div>
              <h3 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-white">
                {engines[active].title}
              </h3>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                {engines[active].description}
              </p>
              <div className="mt-8 grid gap-3">
                {engines[active].points.map((point) => (
                  <div key={point} className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.025] p-4">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" />
                    <div className="text-sm leading-6 text-slate-200">{point}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CopilotSection() {
  const steps = useMemo(
    () => [
      {
        number: "01",
        title: "Listen",
        body: "Capture goals, constraints, context, and follow-up questions in natural language.",
        icon: Users,
      },
      {
        number: "02",
        title: "Understand",
        body: "Use enterprise context and memory to determine the real decision behind the request.",
        icon: BrainCircuit,
      },
      {
        number: "03",
        title: "Orchestrate",
        body: "Select and sequence the right forecasting, optimization, planning, and reporting tools.",
        icon: GitBranch,
      },
      {
        number: "04",
        title: "Deliver",
        body: "Return insights, recommendations, scenarios, and actions with clear explanations.",
        icon: Sparkles,
      },
      {
        number: "05",
        title: "Learn",
        body: "Use outcomes and feedback to improve future models, policies, and recommendations.",
        icon: Activity,
      },
    ],
    []
  );

  return (
    <section id="copilot" className="bg-[#070b12] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Enterprise AI Copilot"
          title="The intelligence layer that connects people, models, and enterprise execution."
          body="The VORPI AI Copilot is not a chat interface placed on top of an ERP. It is an orchestration layer that translates business intent into coordinated analytical and operational workflows."
          align="center"
        />

        <div className="relative mt-16">
          <div className="absolute left-8 right-8 top-[3.4rem] hidden h-px bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent lg:block" />
          <div className="grid gap-4 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.07 }}
                  className="relative rounded-[1.6rem] border border-white/10 bg-white/[0.028] p-5"
                >
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-[#0a1019] text-cyan-200 shadow-[0_0_0_8px_#070b12]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-7 text-xs font-semibold uppercase tracking-[0.17em] text-slate-500">
                    {step.number}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{step.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            [LineChart, "Analytics", "Forecasting, uncertainty, inventory, scenario analysis"],
            [Workflow, "Planning", "FAS, MPS, ATP, capacity, procurement, production"],
            [BarChart3, "Reporting", "BOM, critical path, ex-factory, performance, risk"],
            [ShieldCheck, "Governance", "Permissions, confirmations, auditability, explainability"],
          ].map(([Icon, title, body]) => {
            const CapabilityIcon = Icon as typeof LineChart;
            return (
              <div key={title as string} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <CapabilityIcon className="h-5 w-5 text-cyan-200" />
                <div className="mt-4 font-semibold text-white">{title as string}</div>
                <div className="mt-2 text-sm leading-6 text-slate-400">{body as string}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function OutcomesSection() {
  return (
    <section className="border-y border-white/8 bg-[#0a1019] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="Enterprise Impact"
            title="From operational data to intelligent decisions—and from decisions to measurable outcomes."
            body="VORPI helps organizations improve planning quality without losing the operational discipline, traceability, and human judgment required in real enterprises."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {outcomes.map((outcome) => {
              const Icon = outcome.icon;
              return (
                <div key={outcome.label} className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6">
                  <Icon className="h-5 w-5 text-cyan-200" />
                  <div className="mt-7 text-3xl font-semibold tracking-[-0.04em] text-white">{outcome.value}</div>
                  <div className="mt-1 text-sm text-slate-400">{outcome.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section className="bg-[#070b12] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Built for complex supply chains"
          title="Designed for organizations where uncertainty, dependencies, and operational trade-offs matter."
          body="The initial focus is manufacturing, with an architecture that can extend across wholesale, consumer packaged goods, and retail environments."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <article key={industry.title} className="group rounded-[1.7rem] border border-white/10 bg-white/[0.028] p-6 transition hover:border-cyan-300/20 hover:bg-white/[0.045] md:p-7">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{industry.title}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">{industry.description}</p>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] text-cyan-200 transition group-hover:bg-cyan-300/10">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CompanySection() {
  return (
    <section id="company" className="border-t border-white/8 bg-[#0a1019] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.028] p-7 md:p-10">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">Research-driven innovation</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white md:text-4xl">
              Scientific rigor. Enterprise practicality. Long-term partnership.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              VORPI AI brings together nearly two decades of work in supply-chain management,
              uncertainty modeling, optimization, enterprise systems, and decision intelligence.
              The objective is not to replace human expertise, but to augment it with transparent,
              explainable, and measurable enterprise AI.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["19 years", "academic and industry experience"],
                ["2 books", "Cambridge University Press and Springer Nature"],
                ["15 articles", "peer-reviewed research publications"],
              ].map(([value, label]) => (
                <div key={value} className="rounded-2xl border border-white/8 bg-white/[0.025] p-4">
                  <div className="text-lg font-semibold text-white">{value}</div>
                  <div className="mt-1 text-xs leading-5 text-slate-500">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,.06),rgba(255,255,255,.02))] p-7 md:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <img
                src="/team/isik.jpg"
                alt="Işık Biçer"
                className="h-28 w-28 rounded-[1.6rem] border border-white/10 object-cover grayscale"
              />
              <div>
                <div className="text-2xl font-semibold text-white">Işık Biçer, PhD</div>
                <div className="mt-2 text-sm text-cyan-200">Founder & Chief Scientist, VORPI AI</div>
                <div className="mt-1 text-sm leading-6 text-slate-400">
                  Associate Professor of Operations Management and Information Systems,
                  Schulich School of Business, York University.
                </div>
              </div>
            </div>
            <p className="mt-7 text-sm leading-7 text-slate-300">
              Işık’s work spans demand forecasting, probabilistic modeling, mathematical
              optimization, simulation, machine learning, and enterprise decision intelligence.
              His research and analytical frameworks have supported initiatives across manufacturing,
              pharmaceuticals, agriculture, finance, retail, and the public sector.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/isikbicer"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/12 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/5"
              >
                LinkedIn
              </a>
              <a
                href="https://www.yorku.ca/research/areas/supplychainanalytics/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/12 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/5"
              >
                Research lab
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#060a11] py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(34,211,238,.13),transparent_42%)]" />
      <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[1.4rem] border border-cyan-300/20 bg-cyan-300/10">
          <BrainCircuit className="h-8 w-8 text-cyan-200" />
        </div>
        <h2 className="mt-7 text-balance text-4xl font-semibold tracking-[-0.045em] text-white md:text-6xl">
          Bring AI First thinking to your enterprise.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-300">
          Tell us where operational complexity is limiting planning, service, inventory,
          productivity, or growth. We will explore how the VORPI Enterprise AI Platform can
          turn that challenge into an intelligent, scalable decision system.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="mailto:contact@vorpi.ai?subject=VORPI%20AI%20Enterprise%20Conversation&body=Hello%20VORPI%20AI%20Team,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20our%20enterprise%20planning%20and%20AI%20needs.%0D%0A%0D%0ACompany:%0D%0AIndustry:%0D%0APriority%20challenge:%0D%0A"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
          >
            Start the conversation
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="mailto:contact@vorpi.ai"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
          >
            contact@vorpi.ai
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#05080d]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 md:px-8 lg:flex-row lg:items-center lg:justify-between">
        <Logo compact />
        <div className="text-sm text-slate-500">
          Transforming operational execution into enterprise intelligence.
        </div>
        <div className="text-sm text-slate-600">© {new Date().getFullYear()} VORPI AI</div>
      </div>
    </footer>
  );
}

export default function VorpiLandingPage() {
  return (
    <main className="min-h-screen bg-[#070b12] text-white selection:bg-cyan-300/25">
      <Header />
      <Hero />
      <AiFirstSection />
      <ArchitectureSection />
      <IntelligenceSection />
      <CopilotSection />
      <OutcomesSection />
      <IndustriesSection />
      <CompanySection />
      <CtaSection />
      <Footer />
    </main>
  );
}