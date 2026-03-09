import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  ThumbsUp,
  ThumbsDown,
  Share2,
  Download,
  MoreVertical,
  Search,
  Bell,
  Cast,
  Home,
  Play,
  Plus,
  User,
  Library,
} from "lucide-react";

const videoData = [
  {
    id: 1,
    channel: "Orbito Dev",
    channelInitial: "O",
    title: "How We Handle 100K+ Concurrent Users — Backend Architecture Deep Dive",
    views: "124K views",
    time: "2 weeks ago",
    duration: "12:34",
    likes: "8.2K",
    gradient: "from-slate-900 via-zinc-800 to-neutral-900",
    thumbnail: "from-violet-600/30 via-purple-900/40 to-indigo-950",
  },
  {
    id: 2,
    channel: "Orbito Dev",
    channelInitial: "O",
    title: "Building a Multi-Tenant SaaS Platform from Scratch — Full Walkthrough",
    views: "87K views",
    time: "1 month ago",
    duration: "18:42",
    likes: "5.1K",
    gradient: "from-slate-900 via-zinc-800 to-neutral-900",
    thumbnail: "from-emerald-600/30 via-teal-900/40 to-cyan-950",
  },
  {
    id: 3,
    channel: "Orbito Dev",
    channelInitial: "O",
    title: "AI-Powered Semantic Search — Better Than Algolia? We Built Our Own",
    views: "56K views",
    time: "3 weeks ago",
    duration: "15:07",
    likes: "3.4K",
    gradient: "from-slate-900 via-zinc-800 to-neutral-900",
    thumbnail: "from-rose-600/30 via-pink-900/40 to-fuchsia-950",
  },
  {
    id: 4,
    channel: "Orbito Dev",
    channelInitial: "O",
    title: "Real-Time Analytics with Kafka — From Event to Dashboard in 200ms",
    views: "42K views",
    time: "5 days ago",
    duration: "21:15",
    likes: "2.9K",
    gradient: "from-slate-900 via-zinc-800 to-neutral-900",
    thumbnail: "from-amber-600/30 via-orange-900/40 to-red-950",
  },
  {
    id: 5,
    channel: "Orbito Dev",
    channelInitial: "O",
    title: "WhatsApp E-Commerce Bot — Full System Design & Implementation",
    views: "93K views",
    time: "2 months ago",
    duration: "24:58",
    likes: "6.7K",
    gradient: "from-slate-900 via-zinc-800 to-neutral-900",
    thumbnail: "from-blue-600/30 via-sky-900/40 to-cyan-950",
  },
];

const VideoCard = ({ video, index }: { video: (typeof videoData)[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.08 }}
    className="w-full"
  >
    {/* Thumbnail */}
    <div className={`relative w-full aspect-video bg-gradient-to-br ${video.thumbnail} rounded-lg overflow-hidden`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-10 h-10 rounded-full bg-black/60 flex items-center justify-center backdrop-blur-sm"
        >
          <Play className="w-4 h-4 text-white fill-white ml-0.5" />
        </motion.div>
      </div>
      {/* Duration badge */}
      <div className="absolute bottom-1.5 right-1.5 bg-black/80 text-white text-[9px] font-medium px-1.5 py-0.5 rounded">
        {video.duration}
      </div>
    </div>

    {/* Video info */}
    <div className="flex gap-2 mt-2 px-0.5">
      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shrink-0 mt-0.5">
        <span className="text-[9px] font-bold text-white">{video.channelInitial}</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[11px] font-medium text-white leading-tight line-clamp-2">
          {video.title}
        </p>
        <p className="text-[9px] text-gray-400 mt-0.5">
          {video.channel} · {video.views} · {video.time}
        </p>
      </div>
      <MoreVertical className="w-3.5 h-3.5 text-gray-500 shrink-0 mt-0.5" />
    </div>
  </motion.div>
);

const YouTubeShowcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-32 bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Phone Mockup with YouTube */}
          <div className="flex justify-center order-2 lg:order-1">
            <motion.div
              whileHover={{ scale: 1.025 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-[280px] h-[580px]"
            >
              {/* Red glow behind phone */}
              <div
                className="absolute inset-0 rounded-[40px] z-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 60%, hsl(0 72% 50% / 0.15) 0%, transparent 70%)",
                  filter: "blur(18px)",
                  transform: "scale(1.15)",
                }}
              />
              {/* Phone frame */}
              <div
                className="absolute inset-0 rounded-[40px] border-[3px] border-white/20 bg-[#0f0f0f] overflow-hidden z-10 flex flex-col"
                style={{
                  boxShadow:
                    "0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04), 0 0 40px hsl(0 72% 50% / 0.1)",
                }}
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-20" />

                {/* YouTube Top Bar */}
                <div className="pt-8 px-3 pb-2 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 bg-red-600 rounded flex items-center justify-center">
                      <Play className="w-2.5 h-2.5 text-white fill-white" />
                    </div>
                    <span className="text-white text-[11px] font-bold tracking-tight">YouTube</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Cast className="w-4 h-4 text-white/70" />
                    <Bell className="w-4 h-4 text-white/70" />
                    <Search className="w-4 h-4 text-white/70" />
                    <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center">
                      <span className="text-[8px] text-white font-bold">S</span>
                    </div>
                  </div>
                </div>

                {/* Category chips */}
                <div className="px-3 pb-2 flex gap-1.5 overflow-hidden shrink-0">
                  {["All", "Tech", "Backend", "AI", "SaaS"].map((chip, i) => (
                    <div
                      key={chip}
                      className={`px-2.5 py-1 rounded-md text-[9px] font-medium whitespace-nowrap shrink-0 ${
                        i === 0
                          ? "bg-white text-black"
                          : "bg-white/10 text-white/80"
                      }`}
                    >
                      {chip}
                    </div>
                  ))}
                </div>

                {/* Scrollable video feed */}
                <div
                  ref={scrollRef}
                  className="flex-1 overflow-y-auto px-3 pb-14 space-y-4"
                  style={{ scrollbarWidth: "none" }}
                >
                  {videoData.map((video, idx) => (
                    <VideoCard key={video.id} video={video} index={idx} />
                  ))}
                </div>

                {/* Bottom navigation bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#0f0f0f] border-t border-white/10 px-2 pb-4 pt-1.5 flex items-center justify-around z-20">
                  {[
                    { icon: Home, label: "Home", active: true },
                    { icon: Play, label: "Shorts", active: false },
                    { icon: Plus, label: "", active: false, isCreate: true },
                    { icon: Library, label: "Library", active: false },
                    { icon: User, label: "You", active: false },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-0.5">
                      {item.isCreate ? (
                        <div className="w-8 h-5 rounded-lg bg-white/10 flex items-center justify-center -mt-0.5">
                          <Plus className="w-4 h-4 text-white" />
                        </div>
                      ) : (
                        <item.icon
                          className={`w-4 h-4 ${
                            item.active ? "text-white" : "text-white/50"
                          }`}
                          {...(item.active && item.icon === Home ? { fill: "white" } : {})}
                        />
                      )}
                      {item.label && (
                        <span
                          className={`text-[8px] ${
                            item.active ? "text-white" : "text-white/50"
                          }`}
                        >
                          {item.label}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Bottom home indicator */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/30 rounded-full z-30" />
              </div>
            </motion.div>
          </div>

          {/* Right: Info */}
          <div className="max-w-[520px] order-1 lg:order-2">
            <div
              className="mb-5 inline-block"
              style={{
                fontSize: "3.2rem",
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "hsl(0, 72%, 55%)",
                filter:
                  "drop-shadow(0 0 8px hsl(0 72% 55% / 0.55)) drop-shadow(0 0 2px hsl(0 72% 55% / 0.4))",
              }}
            >
              VidStack
            </div>

            <h2
              className="mb-8 font-extrabold tracking-tight text-white"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)",
                lineHeight: 1.13,
                maxWidth: "26rem",
              }}
            >
              Your Own Video Platform.
              <span className="block mt-1">Built to Scale. Ready to Ship.</span>
            </h2>

            <p
              className="mb-4 leading-[1.9] text-gray-400"
              style={{ fontSize: "0.9rem", maxWidth: "30rem" }}
            >
              A production-ready, white-label video platform built for founders
              who want to launch their own{" "}
              <strong className="text-gray-200 font-semibold">YouTube-style</strong>{" "}
              video sharing and streaming service without the years of{" "}
              <strong className="text-gray-200 font-semibold">infrastructure</strong> development.
            </p>

            <p
              className="mb-12 leading-[1.95] text-gray-500"
              style={{ fontSize: "0.85rem", maxWidth: "30rem" }}
            >
              VidStack gives you the complete tech stack to run a video platform —{" "}
              <strong className="text-gray-300 font-semibold">video transcoding</strong>,
              adaptive streaming, recommendation engine,{" "}
              <strong className="text-gray-300 font-semibold">creator dashboards</strong>,
              comment system, subscription management, and{" "}
              <strong className="text-gray-300 font-semibold">monetization</strong> tools
              — all pre-built and production-tested.
            </p>

            <ul className="space-y-[16px] mb-14">
              {([
                ["YouTube-style", " video feed with ", "recommendation engine"],
                ["Video transcoding", " + adaptive ", "bitrate streaming"],
                ["Creator dashboard", " with analytics & upload tools"],
                ["Comment system", " with moderation & ", "spam detection"],
                ["Subscription", " & channel ", "membership", " support"],
                ["Ad integration", " ready (pre-roll, mid-roll, banners)"],
                ["Full source code", " — white-label, your brand"],
                ["Scales to ", "1M+ videos", " with CDN integration"],
                ["Monetization", " built-in: ads, subscriptions, pay-per-view"],
                ["Mobile-first", " responsive design"],
              ] as const).map((parts, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.045 }}
                  className="flex items-start gap-3"
                  style={{ fontSize: "0.925rem" }}
                >
                  <span
                    className="mt-[2px] shrink-0 font-bold text-[13px]"
                    style={{
                      color: "hsl(0, 72%, 55%)",
                      filter: "drop-shadow(0 0 5px hsl(0 72% 55% / 0.65))",
                      lineHeight: 1.6,
                    }}
                  >
                    ✓
                  </span>
                  <span className="text-gray-200 leading-relaxed">
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

            <NavLink
              to="/blog/revhub-media-cms-platform"
              className="inline-flex items-center gap-2 font-bold transition-all duration-200 hover:opacity-90"
              style={{
                fontSize: "1.05rem",
                color: "hsl(0, 72%, 60%)",
                textShadow:
                  "0 0 22px hsl(0 72% 55% / 0.55), 0 0 8px hsl(0 72% 55% / 0.35)",
                marginTop: "0.5rem",
              }}
            >
              Launch your own video platform. Own the audience. Keep the revenue.{" "}
              <span style={{ filter: "brightness(1.4)" }}>→</span>
            </NavLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default YouTubeShowcase;
