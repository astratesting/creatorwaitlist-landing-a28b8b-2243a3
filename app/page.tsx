"use client";

import { FormEvent, useState } from "react";

const features = [
  {
    name: "Referral Reward Engine",
    text: "Give early fans share links, milestone rewards, and leaderboard status that turns signups into a launch crew.",
  },
  {
    name: "Live Demand Bar",
    text: "Show real-time waitlist momentum on your page so visitors feel launch energy before checkout opens.",
  },
  {
    name: "Creator Nurture Sequences",
    text: "Send automated welcome, proof, reminder, and launch emails without wiring another campaign tool.",
  },
  {
    name: "Drop Readiness Dashboard",
    text: "Track source, referral velocity, reward unlocks, and conversion intent from one launch command center.",
  },
  {
    name: "Audience Segments",
    text: "Tag superfans, affiliates, beta users, and paid-course buyers so launch messaging lands with precision.",
  },
  {
    name: "One-Click Creator Pages",
    text: "Publish high-converting waitlist pages for courses, templates, communities, apps, and digital drops.",
  },
];

const steps = [
  ["01", "Publish your waitlist", "Pick your launch goal, add product copy, and ship a branded creator page in minutes."],
  ["02", "Turn fans into referrers", "Every signup gets a share link, visible rank, and reward milestones built for community hype."],
  ["03", "Launch to warm demand", "Automations nurture signups until launch day, then segment your hottest buyers first."],
];

export default function Home() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  function handleEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (email.trim()) setStep(2);
  }

  function handleProfile(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setJoined(true);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-night text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,.26),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(139,92,246,.22),transparent_30%),radial-gradient(circle_at_50%_85%,rgba(29,78,216,.18),transparent_35%)]" />
      <div className="pointer-events-none fixed inset-0 bg-grid bg-[size:48px_48px] opacity-[.13]" />

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-night/72 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="font-display text-xl font-black tracking-tight">
            Creator<span className="text-accent">Waitlist</span>
          </a>
          <div className="hidden gap-8 text-sm text-blue-100/75 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#proof" className="hover:text-white">Proof</a>
          </div>
          <a href="#join" className="rounded-full border border-blue-400/40 bg-blue-500/10 px-5 py-2 text-sm font-bold text-blue-100 shadow-glow transition hover:bg-blue-500/20">
            Join beta
          </a>
        </div>
      </nav>

      <section id="top" className="relative z-10 mx-auto grid max-w-7xl gap-14 px-5 pb-24 pt-20 lg:grid-cols-[1.04fr_.96fr] lg:pb-32 lg:pt-28">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[.04] px-4 py-2 text-sm font-semibold text-blue-100 shadow-violet">
            Built for courses, communities, templates, apps, and digital drops
          </div>
          <h1 className="font-display text-5xl font-black leading-[.9] tracking-[-.06em] text-white sm:text-7xl lg:text-8xl">
            Launch your creator product with a waitlist that builds hype — not just emails.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-blue-100/72 sm:text-xl">
            CreatorWaitlist turns silent signup forms into referral-fueled launch rooms with visible demand, automated nurture, and reward loops your community wants to share.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#join" className="rounded-full bg-gradient-to-r from-accent to-violetflare px-7 py-4 text-center font-black text-white shadow-glow transition hover:scale-[1.02]">
              Start building launch demand
            </a>
            <a href="#features" className="rounded-full border border-white/12 px-7 py-4 text-center font-bold text-blue-100/80 transition hover:bg-white/5 hover:text-white">
              See creator tools
            </a>
          </div>
        </div>

        <div id="join" className="relative">
          <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-blue-500/25 via-violet-500/15 to-transparent blur-3xl" />
          <div className="relative rounded-[2rem] border border-white/12 bg-white/[.055] p-5 shadow-2xl backdrop-blur-xl sm:p-7">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[.28em] text-blue-200/65">Launch room</p>
                <h2 className="mt-2 font-display text-3xl font-black">Join CreatorWaitlist</h2>
              </div>
              <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-200">Live beta</div>
            </div>

            {!joined && step === 1 && (
              <form onSubmit={handleEmail} className="space-y-4">
                <label className="block text-sm font-semibold text-blue-100/80" htmlFor="email">Creator email</label>
                <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@creatorstudio.com" className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none ring-accent/40 placeholder:text-blue-100/35 focus:ring-4" />
                <button className="w-full rounded-2xl bg-accent px-5 py-4 font-black text-white shadow-glow transition hover:bg-blue-400">
                  Reserve my launch spot
                </button>
              </form>
            )}

            {!joined && step === 2 && (
              <form onSubmit={handleProfile} className="space-y-4">
                <div className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4 text-sm text-blue-100/80">
                  Email locked: <span className="font-bold text-white">{email}</span>
                </div>
                <label className="block text-sm font-semibold text-blue-100/80" htmlFor="name">Name</label>
                <input id="name" required placeholder="Maya Chen" className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none ring-accent/40 placeholder:text-blue-100/35 focus:ring-4" />
                <label className="block text-sm font-semibold text-blue-100/80" htmlFor="referral">Referral code optional</label>
                <input id="referral" placeholder="CREATOR-ALPHA" className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none ring-accent/40 placeholder:text-blue-100/35 focus:ring-4" />
                <button className="w-full rounded-2xl bg-gradient-to-r from-accent to-violetflare px-5 py-4 font-black text-white shadow-glow transition hover:scale-[1.01]">
                  Finish my creator profile
                </button>
              </form>
            )}

            {joined && (
              <div className="rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-6">
                <p className="font-display text-3xl font-black text-white">You are on list.</p>
                <p className="mt-3 text-blue-100/75">Launch kit invite, reward link, and beta onboarding sequence queued.</p>
              </div>
            )}

            <div className="mt-7 rounded-3xl border border-white/10 bg-black/25 p-5">
              <div className="mb-3 flex justify-between text-sm font-bold text-blue-100/70">
                <span>Beta demand</span><span>8,740 / 10,000</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[87%] rounded-full bg-gradient-to-r from-accent to-violetflare" />
              </div>
              <p className="mt-4 text-sm text-blue-100/55">Live progress bars like this create urgency on every creator launch page.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="relative z-10 mx-auto max-w-7xl px-5 py-20">
        <div className="max-w-3xl">
          <p className="font-bold uppercase tracking-[.3em] text-accent">Feature stack</p>
          <h2 className="mt-4 font-display text-4xl font-black tracking-[-.04em] sm:text-6xl">Everything your audience needs before buy button goes live.</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.name} className="group rounded-[1.6rem] border border-white/10 bg-white/[.045] p-7 transition hover:-translate-y-1 hover:border-blue-300/40 hover:bg-white/[.07]">
              <div className="mb-7 h-12 w-12 rounded-2xl bg-gradient-to-br from-accent to-violetflare shadow-glow" />
              <h3 className="font-display text-2xl font-black">{feature.name}</h3>
              <p className="mt-4 leading-7 text-blue-100/65">{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="how" className="relative z-10 mx-auto max-w-7xl px-5 py-20">
        <div className="rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-white/[.08] to-white/[.025] p-6 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[.7fr_1fr]">
            <div>
              <p className="font-bold uppercase tracking-[.3em] text-violet-200">How it works</p>
              <h2 className="mt-4 font-display text-4xl font-black tracking-[-.04em] sm:text-6xl">From quiet idea to noisy launch queue.</h2>
            </div>
            <div className="grid gap-4">
              {steps.map(([number, title, text]) => (
                <div key={number} className="grid gap-5 rounded-3xl border border-white/10 bg-black/22 p-6 sm:grid-cols-[90px_1fr]">
                  <div className="font-display text-5xl font-black text-blue-300/50">{number}</div>
                  <div>
                    <h3 className="font-display text-2xl font-black">{title}</h3>
                    <p className="mt-2 leading-7 text-blue-100/65">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="proof" className="relative z-10 mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["12,000+", "creators building launch lists"],
            ["98%", "waitlist email delivery rate"],
            ["4.9/5", "creator launch team rating"],
          ].map(([value, label]) => (
            <div key={value} className="rounded-[2rem] border border-white/10 bg-white/[.05] p-8 text-center">
              <div className="font-display text-5xl font-black tracking-[-.05em] text-white sm:text-6xl">{value}</div>
              <p className="mt-3 font-semibold text-blue-100/65">{label}</p>
            </div>
          ))}
        </div>
        <blockquote className="mx-auto mt-10 max-w-4xl text-center font-display text-3xl font-black leading-tight tracking-[-.035em] text-blue-50 sm:text-5xl">
          “CreatorWaitlist made our template drop feel sold out before cart opened. Referrals drove 41% of first-day buyers.”
        </blockquote>
        <p className="mt-5 text-center font-bold text-blue-100/55">Nadia Park, founder of Motion Studio OS</p>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-20">
        <div className="overflow-hidden rounded-[2.5rem] border border-blue-300/20 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-8 shadow-glow sm:p-14">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[.3em] text-blue-100/70">Final call</p>
            <h2 className="mt-4 font-display text-4xl font-black tracking-[-.05em] sm:text-6xl">Stop collecting emails. Start creating launch pressure.</h2>
            <p className="mt-5 text-lg leading-8 text-blue-50/78">Reserve beta access and build your next product launch around referrals, visible momentum, and automated nurture from day one.</p>
          </div>
          <a href="#join" className="mt-8 inline-flex rounded-full bg-white px-7 py-4 font-black text-slate-950 transition hover:scale-[1.02]">
            Claim beta invite
          </a>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-blue-100/55 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-lg font-black text-white">Creator<span className="text-accent">Waitlist</span></p>
          <p>Referral-powered waitlists for creator launches.</p>
          <p>© 2026 CreatorWaitlist. Built for launch day.</p>
        </div>
      </footer>
    </main>
  );
}
