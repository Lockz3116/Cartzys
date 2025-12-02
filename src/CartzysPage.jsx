// ...Top of file unchanged
import React, { useRef, useEffect, useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    title: 'Resell Blueprint: Full Course',
    image: '/images/resell-blueprint.png',
    price: '$49.99',
    original: '$199.99',
    subtitle: 'Best Seller',
    stripe: 'https://buy.stripe.com/7sY9AL0IIgiD5TNcrMbfO08',
    details: `The ultimate beginner-to-pro flipping course. Learn how to start, scale, and automate your reselling business with zero prior experience.

You’ll get:
• 30+ HD video lessons walking you through setup to sales
• Secret vendor list with plug pricing
• Monthly strategy updates
• Templates, scripts, and checklists

Perfect for anyone serious about resell income in 2025.`
  },
  {
    title: 'All Supplier Bundle',
    image: '/images/all-suppliers.png',
    price: '$39.99',
    original: '$99.99',
    subtitle: 'Most Value',
    stripe: 'https://buy.stripe.com/5kQaEPezyc2n3LF1N8bfO09',
    details: `Get every trusted plug in one bundle.

Includes:
• Reselling Starter Guide
• 2x Watch Vendors
• Clothes + Tech Vendors
• Cologne, Sneaker, Bag suppliers

Trusted by 700+ full-time flippers. Real plugs, low minimums, high ROI.`
  },
  {
    title: 'Fragrance Plug Guide',
    image: '/images/fragrance-guide.png',
    price: '$14.99',
    original: '$49.99',
    subtitle: 'Trending',
    stripe: 'https://buy.stripe.com/5kQbITezyeavgyrbnIbfO0a',
    details: `Smell like $1,000 for $14.99. Unlock access to premium plug vendors for:

• Creed Aventus, Dior Sauvage, Baccarat Rouge
• Bulk pricing for personal use or flipping
• Same scent — fraction of the cost

Instant download. Real tested vendors.`
  },
  {
    title: 'Sneaker Plug',
    image: '/images/sneaker-plug.png',
    price: '$29.99',
    original: '$79.99',
    subtitle: 'Fast Shipping',
    stripe: 'https://buy.stripe.com/7sYfZ9ezy6I3dmf8bwbfO0b',
    details: `The #1 sneaker resale source.

What’s inside:
• 1:1 plug vendors for Yeezys, Jordans, Dunks
• Verified quality + fast shipping
• Connect direct, no markup

Over 100+ flippers using this weekly.`
  },
  {
    title: 'Custom Vendor Request',
    image: '/images/custom-vendor.png',
    price: '$19.99',
    original: '$59.99',
    subtitle: 'Tailored Plug',
    stripe: 'https://buy.stripe.com/dRmcMXezyaYjgyr1N8bfO0c',
    details: `Can’t find a specific product?
We’ll find the plug for you within 24 hours.

Ideal for:
• Niche or rare items
• Private label brand owners
• Exclusive resellers

Message us post-purchase — we’ll hunt it down.`
  },
  {
    title: 'Starter Flip Guide',
    image: '/images/starter-guide.png',
    price: '$9.99',
    original: '$39.99',
    subtitle: 'Quick Start',
    stripe: 'https://buy.stripe.com/cNi5kv8ba9UfcibbnIbfO07',
    details: `Want to flip with $50 or less?

This mini-guide breaks down:
• Best beginner flips by category
• Where to source them cheap
• Sell tactics that work fast

Fast wins, fast cash. Perfect side hustle.`
  }
];

const faqs = [
  {
    question: 'How will I receive the links?',
    answer: 'Once you purchase, the vendor links are INSTANTLY sent to your email inbox. You’ll receive a secure download link or access page. Make sure you enter the correct email during checkout — check your spam/junk folder if you don’t see it immediately.'
  },
  {
    question: 'What does buying a vendor get me?',
    answer: 'You get direct access to a trusted supplier who offers high-quality products at low prices. These vendors are vetted, real-world contacts used by full-time resellers — with zero middlemen or markup.'
  },
  {
    question: 'Why choose your vendors over others?',
    answer: 'Because we’ve tested hundreds over the last 7 years. We’ve filtered out the unreliable, overpriced, and slow suppliers — only keeping the top performers. You’re getting access to real plugs that deliver results.'
  },
  {
    question: 'How will I receive access?',
    answer: 'All access is 100% digital and sent via email right after your purchase. You’ll either get a PDF guide or a clickable download button with the vendor information. There’s nothing physical shipped — access is instant.'
  },
  {
    question: 'Do the vendors ship worldwide?',
    answer: 'Yes — all our vendors ship globally. Whether you’re in the U.S., U.K., Europe, or elsewhere, your order can be fulfilled. Some vendors also offer express or tracked shipping based on your region.'
  },
  {
    question: 'What if I never got the links?',
    answer: 'No stress — just contact us. Message @cartzys on Instagram or email support@cartzys.com with your name and order receipt. We’ll re-send your access immediately.'
  },
  {
    question: 'How much do products cost?',
    answer: 'Vendors typically charge $20–$90 per product depending on what you’re buying — watches, shoes, cologne, tech, and more. All prices are wholesale level — perfect for flipping or personal use.'
  }
];


export default function CartzysPage() {
  const productRefs = useRef([]);
  const headerRef = useRef(null);
  const faqRefs = useRef([]);
  const [viewerCount, setViewerCount] = useState(81);
  const [timeLeft, setTimeLeft] = useState(44 * 60 + 52);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  useEffect(() => {
    gsap.from(headerRef.current, { opacity: 0, y: -30, duration: 1, ease: 'power2.out' });

    productRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          delay: i * 0.08,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 90%' }
        }
      );
    });

    faqRefs.current.forEach((el) => {
      if (!el) return;
      gsap.from(el, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        scrollTrigger: { trigger: el, start: 'top 95%' }
      });
    });

    const timerInterval = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    const viewerInterval = setInterval(() => {
      setViewerCount(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const next = prev + change * Math.floor(Math.random() * 5);
        return Math.max(74, Math.min(100, next));
      });
    }, 4000);

    return () => {
      clearInterval(timerInterval);
      clearInterval(viewerInterval);
    };
  }, []);

  return (
    <div className="relative text-white min-h-screen bg-black font-sans">

      {/* Ticker */}
      <div className="relative overflow-hidden border-b border-purple-800 bg-black py-3">
        <div className="flex whitespace-nowrap animate-marquee-loop">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex gap-10">
              <span className="font-semibold text-purple-300 text-sm px-4">🔥 BEST VENDORS IN THE GAME</span>
              <span className="font-semibold text-purple-300 text-sm px-4">⭐ RATED 4.98/5</span>
              <span className="font-semibold text-purple-300 text-sm px-4">👀 {viewerCount} LIVE VIEWERS</span>
              <span className="font-semibold text-purple-300 text-sm px-4">
                ⏰ PRICE INCREASING IN <span className="bg-red-600 px-2 py-0.5 rounded text-xs font-bold">{formatTime(timeLeft)}</span>
              </span>
              <span className="font-semibold text-purple-300 text-sm px-4">💰 10,247+ CUSTOMERS</span>
            </div>
          ))}
        </div>
        <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-black to-transparent z-10" />
      </div>

      {/* Hero */}
      <header ref={headerRef} className="text-center py-14 px-4 max-w-2xl mx-auto">
        <img src="/images/logo.gif" /> className="mx-auto w-24 mb-6 opacity-90" />
        <h1 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight leading-tight">
          Partner With The <span className="text-purple-500">Suppliers</span> That Powered My Growth
        </h1>
        <p className="text-gray-400 mt-4 text-sm">
          Real vendors. Instant access. Proven flips.
        </p>
        <a href="#products">
          <button className="mt-6 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded text-white font-semibold tracking-wide transition-all hover:scale-105">
            Browse Vendors ↓
          </button>
        </a>
        <p className="text-gray-400 mt-6 text-sm space-x-2">
          <a href="https://discord.gg/Hq8CzJQz" className="hover:underline text-purple-400">Discord</a>
          <span>·</span>
          <a href="mailto:support@yourdomain.com" className="hover:underline text-purple-400">Support</a>
          <span>·</span>
          <a href="#refund-policy" className="hover:underline text-purple-400">Refund Policy</a>
        </p>
      </header>

      {/* Products */}
      <main className="px-4 sm:px-6 pb-24 max-w-7xl mx-auto" id="products">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((p, i) => (
            <div
              key={i}
              ref={(el) => (productRefs.current[i] = el)}
              className="bg-[#111] rounded-xl border border-zinc-800 p-6 shadow-md hover:shadow-purple-700/40 transition-all duration-300 relative"
            >
              {/* Subtitle badge on top-left */}
              <div className="absolute top-3 left-3 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
                {p.subtitle}
              </div>

              <img src={p.image} className="w-full h-44 object-contain mb-4" />
              <h3 className="uppercase font-bold text-lg mb-1 text-center">{p.title}</h3>
              <p className="text-center text-gray-500 text-sm line-through">{p.original}</p>
              <p className="text-center text-purple-400 text-2xl font-bold">{p.price}</p>

              {/* ⭐ Stars */}
              <div className="flex justify-center mt-2 mb-1">
                {Array(5).fill().map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.574-.955L10 0l2.938 5.955 6.574.955-4.756 4.635 1.122 6.545z" />
                  </svg>
                ))}
              </div>

              <details className="mt-2">
                <summary className="text-purple-400 underline cursor-pointer text-center">+ Details</summary>
                <div className="mt-2 bg-zinc-900 p-3 rounded text-xs whitespace-pre-line text-center">
                  {p.details}
                </div>
              </details>

              <a href={p.stripe} target="_blank" rel="noreferrer">
                <button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 py-3 rounded text-white font-bold tracking-wide transition-transform hover:scale-105">
                  BUY NOW →
                </button>
              </a>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <section className="mt-20 max-w-3xl mx-auto">
          <h3 className="text-center text-xl font-bold uppercase mb-6">Frequently Asked</h3>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details
                key={i}
                ref={(el) => (faqRefs.current[i] = el)}
                className="bg-zinc-800 p-4 rounded-md"
              >
                <summary className="flex justify-between items-center cursor-pointer font-semibold">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-purple-400" />
                    {f.question}
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </summary>
                <p className="text-sm text-gray-400 mt-2">{f.answer}</p>
              </details>
            ))}
          </div>
        </section>

 {/* Testimonials */}
<section className="mt-24 max-w-5xl mx-auto px-4">
  <h3 className="text-center text-xl font-bold uppercase mb-10">What Flippers Are Saying</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[
      { name: 'Jayden R, NJ', quote: "I made my first $1,000 month using vendors from this site. Zero fluff. Real results." },
      { name: 'Talia F.', quote: "I used to overpay for watches. Now I’m sourcing direct with 70% profit margins." },
      { name: 'Marcus D.', quote: "It’s like having a mentor in your pocket. Products, pricing, tactics — all laid out." },
      { name: 'Sophia K.', quote: "Started reselling cologne with $50 and flipped it into $300 in my first week." },
      { name: 'Liam W.', quote: "This vendor list is better than what I paid $300+ for on another site." },
      { name: 'David N.', quote: "Already placed 5 bulk orders. Margins are insane — thanks for the plug 🔌" },
      { name: 'Emily R.', quote: "Perfect for beginners. The guides break it all down step-by-step — no fluff." },
      { name: 'Carlos G.', quote: "I was skeptical… but now I’m flipping $3K/month using the vendor bundle." },
      { name: 'Aisha M.', quote: "Finally found vendors that don’t flake. Shipping was fast, quality was 🔥" },
      { name: 'Jordan T.', quote: "Made my money back in 2 days. These plugs are the real deal — no middlemen, no BS." },
      { name: 'Ben C.', quote: "Clean site, clean links, clean profits. 10/10" },
      { name: 'Nina P.', quote: "Didn’t expect this level of value for under $50. Absolute steal." },
      { name: 'Travis L.', quote: "Got my first Jordan bulk order and resold in under 24 hrs. Vendors are legit." },
      { name: 'Zara M.', quote: "This flipped my entire approach. I'm hitting $1.2K profit monthly now." },
      { name: 'Rico S.', quote: "Support was fast, and vendors came through. Solid hustle kit 💼" }
    ].map((t, i) => (
      <div key={i} className="bg-zinc-900 p-4 rounded-lg shadow hover:shadow-purple-700/30 transition">
        <p className="italic text-sm text-gray-300">"{t.quote}"</p>
        <p className="mt-3 text-purple-400 text-xs font-bold uppercase">{t.name}</p>
      </div>
    ))}
  </div>
</section>

      {/* Sticky CTA for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-purple-700 text-white text-sm font-semibold py-3 text-center sm:hidden">
        <a href="#products">🔥 Tap to Browse Vendors</a>
      </div>

</main>

{/* Footer */}
<footer className="text-center py-6 text-xs text-gray-500 border-t border-zinc-800">
  Digital product — instant access. All sales final. | © 2025 Cartzys Supply
</footer>

</div> // <-- Closing the top-level wrapper
); // <-- Closing the return
} // <-- Closing the function
