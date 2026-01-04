"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Menu,
  X,
  Users,
  ArrowRight,
  BarChart3,
  Boxes,
  Building2,
  CheckCircle2,
  Factory,
  Gauge,
  Layers,
  LineChart,
  Lock,
  AlertTriangle,
  ShieldCheck,
  Search,
  Activity,
  Sparkles,
  Brain,
  Store,
  Truck,
  Workflow,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/**
 * vorpi.ai — Full-page snap landing (modern-startup) using shadcn/ui
 *
 * Requirements:
 * - shadcn/ui installed (button, badge, card)
 * - Tailwind configured (shadcn init)
 * - This file is a Client Component (hooks + framer-motion)
 */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1], // <-- replaces "easeOut"
    },
  },
};

function SectionBg({ src }: { src: string }) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <img
        src={src}
        alt=""
        className="h-full w-full object-cover scale-110 brightness-[0.62] contrast-[1.25] saturate-[1.35]"
      />
      <div className="absolute inset-0 bg-sky-600/20 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/65 to-background/55" />
      <div className="absolute inset-0 bg-gradient-to-l from-background/35 via-transparent to-transparent" />
    </div>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 text-sm md:text-base">
      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-primary" />
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}

function WarningItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 text-sm md:text-base text-foreground/90">
      <AlertTriangle className="mt-0.5 h-4 w-4 flex-none text-primary" />
      <span>{children}</span>
    </li>
  );
}


function KPI({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <Card className="shadow-sm">
      <CardContent className="p-4">
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="mt-1 text-lg md:text-xl font-semibold tracking-tight text-foreground">
          {value}
        </div>
        {note ? <div className="mt-1 text-xs text-muted-foreground">{note}</div> : null}
      </CardContent>
    </Card>
  );
}

function TopTabs({
  containerRef,
  items,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
  items: Array<{ id: string; label: string }>;
}) {
  const [active, setActive] = useState(items[0]?.id ?? "product");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const rootEl = containerRef.current;
    if (!rootEl) return;

    const els = items
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    observerRef.current?.disconnect();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top ?? 0) - (b.boundingClientRect.top ?? 0));
        const topMost = visible[0];
        if (!topMost) return;
        setActive((topMost.target as HTMLElement).id);
      },
      {
        root: rootEl,
        rootMargin: "-10% 0px -70% 0px",
        threshold: 0.01,
      }
    );

    els.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, [containerRef, items]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="hidden md:flex items-center gap-1">
      {items.map((t) => (
        <button
          key={t.id}
          type="button"
          onClick={() => scrollTo(t.id)}
          className={cn(
            "rounded-xl px-4 py-2 text-sm font-semibold transition cursor-pointer text-white/80 hover:text-white hover:bg-white/10",
            active === t.id
              ? "bg-white/15 text-white border border-white/30 shadow"
              : "text-white/70 hover:text-white hover:bg-white/10"
          )}
          aria-current={active === t.id ? "page" : undefined}
        >
          {t.label}
        </button>
      ))}
    </nav>
  );
}

function MobileTabs({
  containerRef,
  items,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
  items: Array<{ id: string; label: string; icon: React.ComponentType<{ className?: string }> }>;
}) {
  const [active, setActive] = useState(items[0]?.id ?? "product");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const rootEl = containerRef.current;
    if (!rootEl) return;

    const els = items
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    observerRef.current?.disconnect();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top ?? 0) - (b.boundingClientRect.top ?? 0));
        const topMost = visible[0];
        if (!topMost) return;
        setActive((topMost.target as HTMLElement).id);
      },
      {
        root: rootEl,
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0.01,
      }
    );

    els.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, [containerRef, items]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="md:hidden fixed bottom-3 left-0 right-0 z-50 px-3">
      <div className="mx-auto max-w-md rounded-2xl border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 shadow-lg">
        <div className="grid grid-cols-5">
          {items.map((t) => {
            const Icon = t.icon;
            const isActive = active === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => scrollTo(t.id)}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-medium transition cursor-pointer",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                <span
                  className={cn(
                    "inline-flex h-9 w-9 items-center justify-center rounded-xl transition",
                    isActive ? "bg-primary/12 border border-primary/25" : "bg-transparent"
                  )}
                >
                  <Icon className={cn("h-5 w-5", isActive ? "text-primary" : "")} />
                </span>
                <span className={cn("leading-none", isActive ? "text-foreground" : "")}>{t.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function BootstrapCarousel() {
  const slides = [
    {
      k: "Unique Architecture",
      title: "VORPI - 5 dimensions of supply chains",
      image: "/vorpi-bootstrap-one.jpg",
      bullets: [
        "Vendors, operations, resources, products, and intelligence",
        "AI architecture built on key dimensions and trade-offs",
      ],
    },
    {
      k: "Novel AI Algorithms",
      title: "Advanced Predictive and Optimization Models",
      image: "/vorpi-bootstrap-two.jpg",
      bullets: [
        "Uncertainty modeling for accurate forecasting with transactional data",
        "Large-scale optimization using decomposition techniques",
      ],
    },
    {
      k: "Robust Improvements",
      title: "A Peer-Reviewed Breakthrough in Supply Chain Management",
      image: "/vorpi-bootstrap-three.jpg",
      bullets: [
        "+10% reduction of inventory levels with service targets",
        "5% reduction of working capital needs",
      ],
    },
  ];

  const [i, setI] = useState(0);
  const total = slides.length;

  const prev = () => setI((v) => (v - 1 + total) % total);
  const next = () => setI((v) => (v + 1) % total);

  const [paused, setPaused] = useState(false);

  // Make this smaller to go faster (e.g., 1800–2500)
  const AUTO_MS = 3500;

  useEffect(() => {
    if (paused) return;

    const id = window.setInterval(() => {
      // don’t advance if tab is hidden
      if (document.hidden) return;
      setI((v) => (v + 1) % total);
    }, AUTO_MS);

    return () => window.clearInterval(id);
  }, [paused, total]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      {/* Single outer glass frame */}
      <div className="overflow-hidden rounded-[28px] border border-white/15 bg-white/5 backdrop-blur-xl shadow-2xl">
        {/* Track */}
        <div
          className="flex w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${i * 100}%)` }}
        >
          {slides.map((s, idx) => (
            <div key={s.k} className="w-full min-w-full flex-none" aria-hidden={idx !== i}>
              <div className="p-6 md:p-10">
                <div className="grid md:grid-cols-12 gap-6 items-center">
                  {/* Image */}
                  <div className="md:col-span-5 flex justify-center">
                    <div className="h-[220px] md:h-[320px] w-full flex items-center justify-center">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="max-h-full w-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="md:col-span-7">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-foreground/70 font-semibold">
                      {s.k}
                    </div>

                    <h3 className="mt-2 text-xl md:text-3xl font-semibold tracking-tight text-foreground">
                      {s.title}
                    </h3>

                    <ul className="mt-4 space-y-3">
                      {s.bullets.map((b) => (
                        <ListItem key={b}>{b}</ListItem>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={prev}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-background/70 hover:bg-background"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-background/70 hover:bg-background"
            aria-label="Next"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setI(idx)}
              className={cn(
                "h-2.5 w-2.5 rounded-full transition",
                idx === i ? "bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}




function SnapSection({
  id,
  children,
  tone = "base",
}: {
  id: string;
  children: React.ReactNode;
  tone?: "base" | "tint";
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden snap-start min-h-screen flex items-center",
        tone === "tint" ? "bg-primary/5" : "bg-background"
      )}
    >
      <div className="mx-auto max-w-6xl px-4 w-full pt-20 pb-14 md:pb-18">
        {children}
      </div>
    </section>
  );
}

export default function VorpiLanding() {

  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

const tabs = [
  { id: "bootstrap", label: "Highlights", icon: Workflow }, 
  { id: "product", label: "Product", icon: LineChart },
  { id: "for", label: "Industries", icon: Factory },
  { id: "why", label: "Innovation", icon: Brain },
  { id: "proof", label: "Cases", icon: BarChart3 },
  { id: "team", label: "Team", icon: Users }, 
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  setMobileOpen(false);
};

  return (
    <div
      ref={scrollRef}
      className="h-screen overflow-y-auto scroll-smooth snap-y snap-proximity md:snap-mandatory bg-background text-foreground pb-24 md:pb-0"
    >
      {/* Sticky header */}
      <header
        className="sticky top-0 z-40 border-b"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/vorpi-logo-wide-bg.jpg')" }}
        />

        {/* Optional: subtle contrast layer (keep it LIGHT so it doesn't go black) */}
        <div className="absolute inset-0 bg-black/15" />

        {/* Content */}
        <div className="relative">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            {/* Logo strip with smooth fade to the right */}
            <div className="relative h-14">
              <img
                src="/vorpi-logo-wide.jpg"
                alt="VORPI AI"
                className="h-14 w-auto"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 78%, rgba(0,0,0,0) 100%)",
                  maskImage:
                    "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 78%, rgba(0,0,0,0) 100%)",
                }}
              />
            </div>

            {/* Desktop tabs (make text white on this header) */}
            <div className="hidden md:block text-white">
              <TopTabs containerRef={scrollRef} items={tabs} />
            </div>

            {/* Mobile hamburger (white icon) */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur hover:bg-white/15"
                aria-label="Open menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
              </button>
            </div>

            {/* Contact button (white style) */}
            <div className="hidden md:block">
              <Button asChild className="bg-white text-black hover:bg-white/90">
                <a href="#contact">Contact us</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu dropdown */}
      {mobileOpen ? (
        <div className="md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />

          {/* Branded panel */}
          <div className="fixed left-0 right-0 top-[57px] z-50 overflow-hidden">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/vorpi-logo-wide-bg.jpg')" }}
            />
            {/* Light contrast layer */}
            <div className="absolute inset-0 bg-black/25" />

            {/* Content */}
            <div className="relative mx-auto max-w-6xl px-4 py-4">
              <div className="grid gap-2 text-white">
                {tabs.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => scrollToSection(t.id)}
                    className="w-full rounded-xl px-4 py-3 text-left text-sm font-semibold
                              hover:bg-white/15 transition"
                  >
                    {t.label}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className="mt-2 w-full rounded-xl bg-white text-black px-4 py-3 text-left
                            text-sm font-semibold hover:bg-white/90 transition"
                >
                  Contact us
                </button>
              </div>
            </div>
          </div>

          <MobileTabs containerRef={scrollRef} items={tabs} />
        </div>
      ) : null}


      {/* BOOTSTRAP ENTRY */}
      <SnapSection id="bootstrap" tone="base">
        <SectionBg src="/vorpi-bootstrap.jpg" />
        <div className="relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
              AI-powered operating system for supply chain management
            </h2>
          </motion.div>

          <div className="mt-4 text-base md:text-lg font-semibold leading-relaxed">
            <BootstrapCarousel />
          </div>
        </div>
      </SnapSection>



      {/* PRODUCT */}
      <SnapSection id="product" tone="base">
        <SectionBg src="/vorpi-product.jpg" />
        <div className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="lg:col-span-12"
          >

            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Designed for supply chain complexity with transactional granularity</h2>


            <ul className="mt-6 space-y-3">
              <WarningItem>
                Data aggregation reduces granularity, leading to information loss and less accurate forecasts.
              </WarningItem>

              <WarningItem>
                Optimization tools are often inflexible and rely on unrealistic assumptions.
              </WarningItem>

              <WarningItem>
                Reporting applications can obscure or conflate critical operational trade-offs.
              </WarningItem>
            </ul>

            <p className="mt-4 text-base md:text-lg font-semibold leading-relaxed">
              VORPI AI addresses these issues through{" "}
              <span className="underline decoration-primary/30">research-backed innovations:</span>
            </p>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          <Card className="relative overflow-hidden rounded-3xl bg-background/85 backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <LineChart className="h-4 w-4 text-primary" /> Accurate Demand Forecasting
              </CardTitle>
              <CardDescription>Uncertainty modeling for robust and precise forecasting.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <ListItem>Built on the fast Fourier transform and machine-learning regularization. </ListItem>
                <ListItem>Operates directly on transactional data while incorporating customer traffic, product-selection, and demand lead-time dynamics. </ListItem>
              </ul>              
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Layers className="h-4 w-4 text-primary" /> Inventory & Fulfillment Optimization
              </CardTitle>
              <CardDescription>Large-scale optimization under uncertainty.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <ListItem>Built on dynamic optimization and decomposition techniques. </ListItem>
                <ListItem>Optimizes end-to-end decisions (including procurement, production, and fulfillment) across the supply chain.</ListItem>
              </ul> 
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" /> Detailed Scenario Analysis
              </CardTitle>
              <CardDescription>Simplified scenario analysis in complex environments.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <ListItem>Built on the VORPI framework (Vendors, Operations, Resources, Products, Intelligence), articulating the five fundamental supply chain trade-offs. </ListItem>
                <ListItem>Structures scenario analysis directly around these interacting trade-offs.</ListItem>
              </ul> 
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Activity className="h-4 w-4 text-primary" /> Real Time Activity Monitoring
              </CardTitle>
              <CardDescription>Blending operational monitoring with predictive foresight.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <ListItem>Powered by a database model uniquely tailored to the VORPI framework. </ListItem>
                <ListItem>Enables rapid information transfer and continuously updates system trajectories in real time.</ListItem>
              </ul> 
            </CardContent>
          </Card>
        </div>
        </div>
      </SnapSection>





      {/* INDUSTRIES */}
      <SnapSection id="for" tone="tint">
        <SectionBg src="/vorpi-for.jpg" />
        <div className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-12 items-start"></div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }}>
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Built for manufacturers, wholesalers, and retailers</h2>
          <p className="mt-3 max-w-3xl text-base md:text-lg leading-relaxed">
            Same twin, different decisions. Clear outcomes for each audience.
          </p>
        </motion.div>
        

        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          <Card className="lg:col-span-4 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Factory className="h-4 w-4 text-primary" /> Manufacturers
              </CardTitle>
              <CardDescription>Plan and execute under deep uncertainty.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <ListItem>Inventory optimization under demand, production lead time, and supply lead time uncertainties.</ListItem>
                <ListItem>State-of-art demand forecasting with advance order and demand lead time variations.</ListItem>
                <ListItem>Seamless integration of sales transactions and MPS/MRP. </ListItem>
              </ul>
            </CardContent>
          </Card>

          <Card className="lg:col-span-4 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Truck className="h-4 w-4 text-primary" /> Wholesalers
              </CardTitle>
              <CardDescription>Allocate scarce supply across customers.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <ListItem>Inventory optimization with downstream proliferation of locations.</ListItem>
                <ListItem>State-of-art demand forecasting with price-dependent product selection.</ListItem>
                <ListItem>Strategic inventory placement across distribution and fulfillment centers.</ListItem>
              </ul>
            </CardContent>
          </Card>

          <Card className="lg:col-span-4 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Store className="h-4 w-4 text-primary" /> Retailers
              </CardTitle>
              <CardDescription>Keep products where and when customers buy.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <ListItem>Omni-channel inventory optimization.</ListItem>
                <ListItem>State-of-art demand forecasting with store and website traffic, product selection, and pricing dynamics.</ListItem>
                <ListItem>Streamline replenishment at key locations.</ListItem>
              </ul>
            </CardContent>
          </Card>
        </div>
        </div>
      </SnapSection>





      {/* OUR INNOVATION */}
      <SnapSection id="why" tone="base">
        <SectionBg src="/vorpi-why.jpg" />
        <div className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-12 items-start"></div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }}>
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Major breakthrough in supply chain management</h2>
          <p className="mt-3 max-w-3xl text-base md:text-lg leading-relaxed">
            Perfect decomposition of predictive, optimization, and reporting tools.
          </p>
        </motion.div>

                <Card className="mt-8 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Gauge className="h-4 w-4 text-primary" /> VORPI AI redefines supply chains in the most simple way.
            </CardTitle>
            <CardDescription>
              Modern supply chain management is all about receiving inputs from (1) vendors (e.g., raw material suppliers), carrying out (2) operations that utilize some (3) resources, and move (4) products to the market in an (5) intelligent way to meet customer demand. These five elements are the key dimensions of supply chains, representing different trade-offs decision makers face.
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            { icon: Factory, t: "Vendors", d: "In-house vs outsourcing." },
            { icon: Boxes, t: "Operations", d: "Excess inventory vs shortages." },
            { icon: Truck, t: "Resources", d: "Efficiency vs responsiveness." },
            { icon: Building2, t: "Products", d: "Standardization vs customization." },
            { icon: Sparkles, t: "Intelligence", d: "Inventory imbalances vs revenue growth." },
          ].map((x) => (
            <Card key={x.t} className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <x.icon className="h-4 w-4 text-primary" /> {x.t}
                </CardTitle>
                <CardDescription>{x.d}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Card className="mt-8 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Brain className="h-4 w-4 text-primary" /> Decomposition keeps it fast at high granularity
            </CardTitle>
            <CardDescription>
              Instead of one opaque model, VORPI AI coordinates modular subproblems (forecasting, inventory, sourcing, fulfillment) through shared constraints and KPIs.
            </CardDescription>
          </CardHeader>
        </Card>
        </div>
      </SnapSection>



      {/* CASE STUDIES */}
      <SnapSection id="proof" tone="tint">
        <SectionBg src="/vorpi-proof.jpg" />
        <div className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-12 items-start"></div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }}>
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight"> Case studies </h2>
          <p className="mt-3 max-w-3xl text-base md:text-lg leading-relaxed">
            Evidence-based research tested extensively in practice.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          <Card className="lg:col-span-7 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-primary" /> Success stories
              </CardTitle>
              <CardDescription>Our case studies went through extensive academic reviews to justify our claims.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <ListItem>
                Working capital reduction and accurate demand forecasting in the automotive industry. &nbsp;
                <a
                  href="https://hbr.org/2022/01/using-uncertainty-modeling-to-better-predict-demand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-primary hover:text-primary/80 transition"
                >
                  Read our article published at the Harvard Business Review!
                </a>
                </ListItem>
                <ListItem>
                Inventory and fulfillment optimization in the manufacturing, wholesale, and retail industries. &nbsp;
                <a
                  href="https://link.springer.com/book/10.1007/978-3-031-30347-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-primary hover:text-primary/80 transition"
                >
                  Read our book published by Springer!
                </a>
                </ListItem>
                <ListItem>
                Supply chain design boosting performance. &nbsp;
                <a
                  href="https://www.cambridge.org/core/books/reimagining-supply-chain-management/F52562BF8E0860206693593CC8A0B73D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-primary hover:text-primary/80 transition"
                >
                  Read our book published by the Cambridge University Press!
                </a>
                </ListItem>
              </ul>
            </CardContent>
          </Card>

          <Card className="lg:col-span-5 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Lock className="h-4 w-4 text-primary" /> Enterprise readiness
              </CardTitle>
              <CardDescription>Start small, scale confidently.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              {["Pilot-first", "Integration-friendly architecture", "Tailored to your company's needs"].map(
                (t) => (
                  <div key={t} className="rounded-2xl border bg-primary/5 p-3 text-sm text-muted-foreground">
                    {t}
                  </div>
                )
              )}
            </CardContent>
          </Card>
        </div>
        </div>
      </SnapSection>




      {/* TEAM */}
      <SnapSection id="team" tone="tint">
        {/* Background (same treatment as your other pages) */}
        <SectionBg src="/vorpi-team.jpg" />

        <div className="relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Team</h2>
            <p className="mt-3 max-w-3xl text-base md:text-lg leading-relaxed">
              Researchers with professional experience focusing on measurable operational performance.
            </p>
          </motion.div>

          <div className="mt-8 grid gap-4 lg:grid-cols-12">
            {/* Left: Founder profile (main card) */}
            <Card className="lg:col-span-8 relative overflow-hidden rounded-3xl bg-background/85 backdrop-blur-xl border border-white/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  Our Founder
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col md:flex-row gap-6">
                {/* Photo */}
                <div className="flex-none">
                  <div className="h-28 w-28 md:h-32 md:w-32 rounded-2xl overflow-hidden border border-white/30 shadow-sm">
                    <img
                      src="/team/isik.jpg"   // <-- put your headshot here
                      alt="Your name"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Bio */}
                <div className="min-w-0">
                  <div className="text-lg font-semibold">Isik Bicer, PhD</div>
                  <div className="text-sm text-muted-foreground">
                    Founder, VORPI AI • Supply chain analytics & optimization
                  </div>

                  <p className="mt-3 text-sm md:text-base leading-relaxed text-muted-foreground">
                    Isik is a tenured professor of operations management and information systems at the Schulich School of Business,
                    York University, where he leads the Supply Chain Analytics Lab.
                    With 19 years of academic and industry experience, he has published 15 top-tier journal articles,
                    authored a book on supply-chain analytics with Springer Nature, and a second book on
                    digital transformation with Cambridge University Press. The analytical tools and
                    frameworks he has developed have been adopted across the pharmaceutical, automotive, agriculture,
                    and finance industries. 
                  </p>

                  {/* Links */}
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Button asChild size="sm">
                      <a href="https://www.linkedin.com/in/isikbicer" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <a href="https://www.yorku.ca/research/areas/supplychainanalytics/" target="_blank" rel="noopener noreferrer">
                        Isik's lab webpage
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <a href="mailto:contact@vorpi.ai">Email</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </SnapSection>






      {/* CONTACT */}
      <SnapSection id="contact" tone="base">
        <SectionBg src="/vorpi-contact.jpg" />
        <div className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-12 items-start"></div>
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="lg:col-span-7"
          >
            <h2 className="mt-4 text-2xl md:text-4xl font-semibold tracking-tight">Run VORPI AI on Your Supply Chain</h2>
            <p className="mt-3 max-w-2xl text-base md:text-lg leading-relaxed">
              Tell us your problem. We’ll come up with a digital solution tailored to your operations.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg">
                <a
                  href="mailto:contact@vorpi.ai?subject=Vorpi%20Demo%20Request&body=Hello%20Vorpi%20Team,%0D%0A%0D%0AI%20would%20like%20to%20request%20a%20demo%20of%20Vorpi%E2%80%99s%20Transactional%20Digital%20Twin.%0D%0A%0D%0ACompany:%0D%0AIndustry:%0D%0AThank%20you,%0D%0A"
                  target="_blank"
                >
                  Email us
                </a>
              </Button>

              <Button asChild variant="outline" size="lg">
                <a
                  href="https://calendly.com/your-calendar-link"
                  target="_blank"
                >
                  Book a call
                </a>
              </Button>
            </div>

          </motion.div>
        </div>

        <div className="mt-10 text-sm text-muted-foreground">
          © {new Date().getFullYear()} VORPI AI • Transactional Digital Twin
        </div>
        </div>
      </SnapSection>
    </div>
  );
}
