import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Heart, MessageCircle, Share2, Music2, Plus, Bookmark } from "lucide-react";

const reelData = [
  {
    id: 1,
    username: "orbito.dev",
    caption: "Building scalable backends that handle 100K+ concurrent users 🚀 #engineering #startup",
    likes: "12.4K",
    comments: "342",
    shares: "89",
    gradient: "from-violet-600 via-purple-600 to-indigo-800",
    music: "Original Audio — orbito.dev",
  },
  {
    id: 2,
    username: "reelbox.app",
    caption: "Infinite scroll, zero buffering. ReelBox makes it feel native ⚡ #reelclone #product",
    likes: "8.7K",
    comments: "215",
    shares: "156",
    gradient: "from-rose-600 via-pink-600 to-fuchsia-800",
    music: "Trending Sound — Viral Mix",
  },
  {
    id: 3,
    username: "orbito.dev",
    caption: "Hot key distribution, cache stampede protection — built into v0 🔐 #backend #scale",
    likes: "5.2K",
    comments: "128",
    shares: "67",
    gradient: "from-emerald-600 via-teal-600 to-cyan-800",
    music: "Code Flow — Lo-Fi Beats",
  },
  {
    id: 4,
    username: "reelbox.app",
    caption: "White-label your own reel platform. Your brand, our tech 🎬 #saas #video",
    likes: "15.1K",
    comments: "489",
    shares: "234",
    gradient: "from-amber-600 via-orange-600 to-red-800",
    music: "Product Launch — Hype Track",
  },
  {
    id: 5,
    username: "orbito.dev",
    caption: "From Kafka to screen in under 200ms. Real-time, for real. 📊 #data #analytics",
    likes: "3.8K",
    comments: "97",
    shares: "45",
    gradient: "from-blue-600 via-sky-600 to-cyan-800",
    music: "Tech Vibes — Digital Dreams",
  },
];

const ReelCard = ({ reel, isActive }: { reel: typeof reelData[0]; isActive: boolean }) => {
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
            animate={isActive ? { scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] } : {}}
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

        <button onClick={() => setLiked(!liked)} className="flex flex-col items-center gap-1">
          <Heart className={`w-7 h-7 ${liked ? 'fill-red-500 text-red-500' : 'text-white'} transition-colors`} />
          <span className="text-[11px] text-white font-medium">{reel.likes}</span>
        </button>

        <button className="flex flex-col items-center gap-1">
          <MessageCircle className="w-7 h-7 text-white" />
          <span className="text-[11px] text-white font-medium">{reel.comments}</span>
        </button>

        <button onClick={() => setSaved(!saved)} className="flex flex-col items-center gap-1">
          <Bookmark className={`w-7 h-7 ${saved ? 'fill-white text-white' : 'text-white'} transition-colors`} />
        </button>

        <button className="flex flex-col items-center gap-1">
          <Share2 className="w-7 h-7 text-white" />
          <span className="text-[11px] text-white font-medium">{reel.shares}</span>
        </button>
      </div>

      {/* Bottom content overlay */}
      <div className="absolute bottom-0 left-0 right-14 p-4 z-10">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-white/20 border border-white/40 flex items-center justify-center">
            <span className="text-[10px] font-bold">O</span>
          </div>
          <span className="text-sm font-semibold text-white">{reel.username}</span>
          <button className="ml-2 px-3 py-0.5 border border-white rounded text-[11px] font-semibold text-white hover:bg-white hover:text-black transition-colors">
            Follow
          </button>
        </div>
        <p className="text-[13px] text-white/90 leading-snug mb-3">{reel.caption}</p>
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
    <section className="py-24 bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Info */}
          <div>
            <h2 className="section-heading mb-6">
              <span className="heading-accent">ReelBox</span>
              <br />
              Your Own Reel Platform
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A production-ready, white-label short-video platform. Infinite scroll
              that feels native, video transcoding pipeline, recommendation engine,
              and scalable architecture — all out of the box.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "60fps infinite scroll on mid-range devices",
                "Video preloading with zero buffering",
                "Built-in thundering herd & cache stampede protection",
                "White-label ready — your brand, our engine",
                "100K+ concurrent users on $200/mo infrastructure",
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300">
                  <span className="text-primary mt-1 shrink-0">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <a href="/blog/instagram-reel-clone" className="inline-flex items-center text-primary hover:underline font-medium">
              Read the full case study →
            </a>
          </div>

          {/* Right: Phone Mockup with Reels */}
          <div className="flex justify-center">
            <div className="relative w-[280px] h-[580px]">
              {/* Phone frame */}
              <div className="absolute inset-0 rounded-[40px] border-[3px] border-white/20 bg-black overflow-hidden shadow-2xl shadow-black/50">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-20" />

                {/* Scrollable reels container */}
                <div
                  ref={scrollRef}
                  className="w-full h-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
                  style={{ scrollbarWidth: "none" }}
                >
                  {[...reelData, ...reelData].map((reel, idx) => (
                    <div key={`${reel.id}-${idx}`} className="w-full h-full snap-start snap-always shrink-0">
                      <ReelCard reel={reel} isActive={idx === activeIndex} />
                    </div>
                  ))}
                </div>

                {/* Bottom home indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/40 rounded-full z-20" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReelShowcase;
