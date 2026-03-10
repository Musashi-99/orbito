import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Heart,
  MessageCircle,
  Share2,
  Music2,
  Bookmark,
} from "lucide-react";

const reelData = [
  {
    id: 1,
    username: "orbito.dev",
    caption:
      "Building scalable backends that handle 100K+ concurrent users 🚀 #engineering #startup",
    likes: "12.4K",
    comments: "342",
    shares: "89",
    gradient: "from-violet-600 via-purple-600 to-indigo-800",
    music: "Original Audio — orbito.dev",
  },
  {
    id: 2,
    username: "revhub.app",
    caption:
      "Infinite scroll, zero buffering. RevHub makes it feel native ⚡ #reelclone #product",
    likes: "8.7K",
    comments: "215",
    shares: "156",
    gradient: "from-rose-600 via-pink-600 to-fuchsia-800",
    music: "Trending Sound — Viral Mix",
  },
  {
    id: 3,
    username: "orbito.dev",
    caption:
      "Hot key distribution, cache stampede protection — built into v0 🔐 #backend #scale",
    likes: "5.2K",
    comments: "128",
    shares: "67",
    gradient: "from-emerald-600 via-teal-600 to-cyan-800",
    music: "Code Flow — Lo-Fi Beats",
  },
  {
    id: 4,
    username: "revhub.app",
    caption:
      "White-label your own reel platform. Your brand, our tech 🎬 #saas #video",
    likes: "15.1K",
    comments: "489",
    shares: "234",
    gradient: "from-amber-600 via-orange-600 to-red-800",
    music: "Product Launch — Hype Track",
  },
  {
    id: 5,
    username: "orbito.dev",
    caption:
      "From Kafka to screen in under 200ms. Real-time, for real. 📊 #data #analytics",
    likes: "3.8K",
    comments: "97",
    shares: "45",
    gradient: "from-blue-600 via-sky-600 to-cyan-800",
    music: "Tech Vibes — Digital Dreams",
  },
];

const ReelCard = ({
  reel,
  isActive,
}: {
  reel: (typeof reelData)[0];
  isActive: boolean;
}) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div className="relative w-full h-full snap-start snap-always shrink-0">
      {/* Background gradient simulating video */}
      <div className={`absolute inset-0 bg-gradient-to-br ${reel.gradient}`}>
        <div className="absolute inset-0 bg-black/20" />
        {/* Simulated video content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={
              isActive ? { scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] } : {}
            }
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-32 h-32 rounded-full border-2 border-white/20 flex items-center justify-center"
          >
            <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center">
              <div className="w-0 h-0 border-l-[16px] border-l-white/80 border-y-[10px] border-y-transparent ml-1" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right sidebar actions */}
      <div className="absolute right-3 bottom-24 flex flex-col items-center gap-5 z-10">
        <div className="w-9 h-9 rounded-full bg-white/20 border border-white/30 overflow-hidden flex items-center justify-center">
          <span className="text-[10px] font-bold">O</span>
        </div>

        <button
          onClick={() => setLiked(!liked)}
          className="flex flex-col items-center gap-1"
        >
          <Heart
            className={`w-7 h-7 ${liked ? "fill-red-500 text-red-500" : "text-white"} transition-colors`}
          />
          <span className="text-[11px] text-white font-medium">
            {reel.likes}
          </span>
        </button>

        <button className="flex flex-col items-center gap-1">
          <MessageCircle className="w-7 h-7 text-white" />
          <span className="text-[11px] text-white font-medium">
            {reel.comments}
          </span>
        </button>

        <button
          onClick={() => setSaved(!saved)}
          className="flex flex-col items-center gap-1"
        >
          <Bookmark
            className={`w-7 h-7 ${saved ? "fill-white text-white" : "text-white"} transition-colors`}
          />
        </button>

        <button className="flex flex-col items-center gap-1">
          <Share2 className="w-7 h-7 text-white" />
          <span className="text-[11px] text-white font-medium">
            {reel.shares}
          </span>
        </button>
      </div>

      {/* Bottom content overlay */}
      <div className="absolute bottom-0 left-0 right-14 p-4 z-10">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-white/20 border border-white/40 flex items-center justify-center">
            <span className="text-[10px] font-bold">O</span>
          </div>
          <span className="text-sm font-semibold text-white">
            {reel.username}
          </span>
          <button className="ml-2 px-3 py-0.5 border border-white rounded text-[11px] font-semibold text-white hover:bg-white hover:text-black transition-colors">
            Follow
          </button>
        </div>
        <p className="text-[13px] text-white/90 leading-snug mb-3">
          {reel.caption}
        </p>
        <div className="flex items-center gap-2">
          <Music2 className="w-3 h-3 text-white/70" />
          <div className="overflow-hidden">
            <motion.p
              animate={{ x: [0, -100, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="text-[11px] text-white/70 whitespace-nowrap"
            >
              {reel.music}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReelShowcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const height = container.clientHeight;
      const newIndex = Math.round(scrollTop / height);
      setActiveIndex(newIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Infinite scroll: when reaching the end, jump back
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScrollEnd = () => {
      const scrollTop = container.scrollTop;
      const maxScroll = container.scrollHeight - container.clientHeight;
      if (scrollTop >= maxScroll - 10) {
        // Smoothly append by resetting
        container.scrollTop = 0;
        setActiveIndex(0);
      }
    };

    container.addEventListener("scrollend", handleScrollEnd);
    return () => container.removeEventListener("scrollend", handleScrollEnd);
  }, []);

  return (
    <section className="bg-black py-20 lg:py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 items-start gap-12 xl:grid-cols-[minmax(0,1.18fr)_minmax(340px,420px)] xl:gap-8"
        >
          {/* Left: Info */}
          <div className="max-w-none xl:pr-10">
            <div
              className="mb-4 inline-block"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "hsl(142, 80%, 58%)",
                filter:
                  "drop-shadow(0 0 8px hsl(142 80% 58% / 0.55)) drop-shadow(0 0 2px hsl(142 80% 58% / 0.4))",
              }}
            >
              RevHub
            </div>

            <h2
              className="mb-5 max-w-3xl font-extrabold tracking-tight text-white"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.3rem)",
                lineHeight: 1.04,
              }}
            >
              Launch Your Own Adult Video Platform.
              <span className="mt-2 block">Own the Content. Keep the Revenue.</span>
            </h2>

            <div className="mb-8 grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(220px,0.85fr)] lg:items-start">
              <p className="max-w-2xl text-base leading-8 text-gray-300 md:text-[1.02rem]">
                A production-ready, white-label platform for founders who want
                to launch their own{" "}
                <strong className="font-semibold text-white">NSFW</strong>,{" "}
                <strong className="font-semibold text-white">adult</strong>, or
                premium video business without building the streaming stack from
                scratch.
              </p>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/80">
                  Why it works
                </p>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  RevHub packages the launch-critical parts of the product into
                  one deployable system: playback, feed discovery, media
                  processing, caching, and monetization hooks.
                </p>
              </div>
            </div>

            <p className="mb-10 max-w-4xl text-sm leading-8 text-gray-500 md:text-[0.98rem]">
              RevHub is built for operators who want full control over brand,
              pricing, and audience ownership. Instead of depending on
              third-party platforms that cap revenue or control distribution, it
              gives you the full product foundation: video transcoding,
              infinite-scroll feeds, CDN streaming, recommendation logic, cache
              protection, and a scalable backend already tested for real media
              traffic. That compresses years of platform work into a launchable
              product.
            </p>

            <ul className="mb-12 grid gap-4 sm:grid-cols-2 xl:gap-x-8">
              {([
                ["Built for ", "adult", " / ", "NSFW", " / premium video platforms"],
                ["One-time license", " — no monthly platform fees"],
                ["Full source code", " with knowledge transfer"],
                ["Infinite scroll short-video feed (Reels / TikTok style)"],
                ["Video transcoding", " + adaptive ", "streaming", " pipeline"],
                ["Cloudflare ", "CDN", " + R2 storage integration ready"],
                ["Works with high-bandwidth media content"],
                ["Backend", " ready for ", "100K+ users", " concurrent"],
                ["Monetization", " ready (ads, subscriptions, paywall, custom billing)"],
                ["White-label", " platform — your brand, your domain, your rules"],
                ["Cache protection + anti-overload architecture"],
                ["Optimized for large media & ", "adult", " content sites"],
              ] as const).map((parts, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.045 }}
                  className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3"
                >
                  <span
                    className="mt-[2px] shrink-0 font-bold text-[13px]"
                    style={{
                      color: "hsl(142, 80%, 58%)",
                      filter: "drop-shadow(0 0 5px hsl(142 80% 58% / 0.65))",
                      lineHeight: 1.6,
                    }}
                  >
                    ✓
                  </span>
                  <span className="text-[0.95rem] leading-relaxed text-gray-200">
                    {parts.map((part, pi) =>
                      pi % 2 === 1 ? (
                        <strong key={pi} className="text-white font-semibold">
                          {part}
                        </strong>
                      ) : (
                        <span key={pi}>{part}</span>
                      )
                    )}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <NavLink
              to="/blog/revhub-media-cms-platform"
              className="inline-flex items-center gap-2 font-bold transition-all duration-200 hover:opacity-90"
              style={{
                fontSize: "1.05rem",
                color: "hsl(142, 80%, 60%)",
                textShadow:
                  "0 0 22px hsl(142 80% 58% / 0.55), 0 0 8px hsl(142 80% 58% / 0.35)",
                marginTop: "0.5rem",
              }}
            >
              Run your own adult platform. Control your content. Keep 100% of the revenue.{" "}
              <span style={{ filter: "brightness(1.4)" }}>→</span>
            </NavLink>

          </div>

          {/* Right: Phone Mockup with Reels */}
          <div className="flex justify-center xl:justify-end">
            <motion.div
              whileHover={{ scale: 1.025 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative h-[620px] w-[300px] md:h-[650px] md:w-[312px] xl:h-[690px] xl:w-[330px]"
            >
              {/* Green glow behind phone */}
              <div
                className="absolute inset-0 rounded-[40px] z-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 60%, hsl(142 76% 40% / 0.18) 0%, transparent 70%)",
                  filter: "blur(18px)",
                  transform: "scale(1.15)",
                }}
              />
              {/* Phone frame */}
              <div
                className="absolute inset-0 rounded-[40px] border-[3px] border-white/20 bg-black overflow-hidden z-10"
                style={{
                  boxShadow:
                    "0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04), 0 0 40px hsl(142 76% 40% / 0.12)",
                }}
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-20" />

                {/* Scrollable reels container */}
                <div
                  ref={scrollRef}
                  className="w-full h-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
                  style={{ scrollbarWidth: "none" }}
                >
                  {[...reelData, ...reelData].map((reel, idx) => (
                    <div
                      key={`${reel.id}-${idx}`}
                      className="w-full h-full snap-start snap-always shrink-0"
                    >
                      <ReelCard reel={reel} isActive={idx === activeIndex} />
                    </div>
                  ))}
                </div>

                {/* Bottom home indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/40 rounded-full z-20" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReelShowcase;
