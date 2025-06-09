import React from "react";
import { Check, Anchor, Compass, Ship } from "lucide-react";

/**
 * SubscriptionPage – neon-accent pricing UI with nautical graphics.
 * Colours: black canvas, white text, accent yellows/oranges/greens
 */

interface Plan {
  id: string;
  name: string;
  price: string;
  accent: "yellow" | "orange" | "green";
  Icon: React.ComponentType<{ className?: string }>;
  features: string[];
  badge?: string;
}

const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    accent: "yellow",
    Icon: Anchor, // steady anchor for starters
    features: [
      "AI Chat: 30 messages / mo",
      "Live Video: 0 min / mo",
      "File Storage: 0 MB",
      "API Rate: 10 req / min",
    ],
  },
  {
    id: "plus",
    name: "Plus",
    price: "$9.99",
    accent: "orange",
    Icon: Compass, // navigate further with Plus
    features: [
      "AI Chat: 500 messages / mo",
      "Live Video: 5 min / mo",
      "File Storage: 250 MB",
      "API Rate: 60 req / min",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$29.99",
    accent: "green",
    Icon: Ship, // full‑sail experience for Pros
    badge: "Best Value",
    features: [
      "AI Chat: Unlimited messages",
      "Live Video: 30 min / mo",
      "File Storage: 1 GB",
      "API Rate: 300 req / min",
    ],
  },
];

// Tailwind class maps (explicit so PurgeCSS keeps them)
const ringMap = {
  yellow: "ring-yellow-400/60",
  orange: "ring-orange-500/60",
  green: "ring-green-400/60",
};
const glowMap = {
  yellow: "shadow-yellow-400/50",
  orange: "shadow-orange-500/50",
  green: "shadow-green-400/50",
};
const textMap = {
  yellow: "text-yellow-300",
  orange: "text-orange-400",
  green: "text-green-300",
};
const bgBtnMap = {
  yellow: "bg-yellow-400 hover:bg-yellow-300 text-black",
  orange: "bg-orange-500 hover:bg-orange-400 text-black",
  green: "bg-green-400 hover:bg-green-300 text-black",
};
const badgeBgMap = {
  yellow: "bg-yellow-400 text-black",
  orange: "bg-orange-500 text-black",
  green: "bg-green-400 text-black",
};

const SubscriptionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6 md:px-12">
      {/* header */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Choose your <span className="text-teal-400">SeaSure</span> plan
        </h1>
        <p className="mt-2 text-slate-400 max-w-xl mx-auto">
          Scale your boating‑assistant superpowers. Upgrade or cancel anytime.
        </p>
      </header>

      <section className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <article
            key={plan.id}
            className={`relative rounded-2xl bg-white/5 backdrop-blur-sm ring-2 ${ringMap[plan.accent]} p-8 flex flex-col transition-transform duration-200 hover:-translate-y-2 hover:shadow-xl ${glowMap[plan.accent]}`}
          >
            {/* badge */}
            {plan.badge && (
              <span
                className={`absolute -top-3 right-4 text-xs font-bold px-2 py-1 rounded ${badgeBgMap[plan.accent]}`}
              >
                {plan.badge}
              </span>
            )}

            {/* icon */}
            <div className="mb-6 flex justify-center">
              <div
                className={`w-14 h-14 rounded-full bg-white/10 flex items-center justify-center ring-2 ${ringMap[plan.accent]}`}
              >
                <plan.Icon className={`w-7 h-7 ${textMap[plan.accent]}`} />
              </div>
            </div>

            {/* header */}
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-semibold tracking-wide capitalize">
                {plan.name}
              </h2>
              <div className="flex items-end justify-center mt-4">
                <span className="text-5xl font-extrabold">{plan.price}</span>
                <span className="ml-1 text-slate-400 text-xl">/ mo</span>
              </div>
            </div>

            {/* feature list */}
            <ul className="space-y-3 flex-1 text-sm max-w-xs mx-auto">
              {plan.features.map((feat) => (
                <li key={feat} className="flex items-start space-x-3">
                  <Check className={`w-5 h-5 flex-shrink-0 ${textMap[plan.accent]}`} />
                  <span className="text-slate-200 leading-snug">{feat}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              className={`mt-8 w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${bgBtnMap[plan.accent]}`}
            >
              Get Started
            </button>
          </article>
        ))}
      </section>
    </div>
  );
};

export default SubscriptionPage;
