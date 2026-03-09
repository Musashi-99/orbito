import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ThumbsUp,
  ThumbsDown,
  Share2,
  MoreHorizontal,
  Search,
  Bell,
  Menu,
  Home,
  Play,
  Plus,
  User,
  Library,
  TrendingUp,
  Clock,
  Flame,
  Music2,
  Gamepad2,
} from "lucide-react";

const videoData = [
  {
    id: 1,
    channel: "Orbito Dev",
    channelInitial: "O",
    title: "How We Handle 100K+ Concurrent Users — Backend Architecture",
    views: "124K views",
    time: "2 weeks ago",
    duration: "12:34",
    thumbnail: "from-violet-600/40 via-purple-900/50 to-indigo-950",
  },
  {
    id: 2,
    channel: "Orbito Dev",
    channelInitial: "O",
    title: "Building a Multi-Tenant SaaS from Scratch",
    views: "87K views",
    time: "1 month ago",
    duration: "18:42",
    thumbnail: "from-emerald-600/40 via-teal-900/50 to-cyan-950",
  },
  {
    id: 3,
    channel: "Orbito Dev",
    channelInitial: "O",
    title: "AI Semantic Search — Better Than Algolia?",
    views: "56K views",
    time: "3 weeks ago",
    duration: "15:07",
    thumbnail: "from-rose-600/40 via-pink-900/50 to-fuchsia-950",
  },
  {
    id: 4,
    channel: "Orbito Dev",
    channelInitial: "O",
    title: "Real-Time Analytics with Kafka in 200ms",
    views: "42K views",
    time: "5 days ago",
    duration: "21:15",
    thumbnail: "from-amber-600/40 via-orange-900/50 to-red-950",
  },
  {
    id: 5,
    channel: "Orbito Dev",
    channelInitial: "O",
    title: "WhatsApp E-Commerce Bot — Full System Design",
    views: "93K views",
    time: "2 months ago",
    duration: "24:58",
    thumbnail: "from-blue-600/40 via-sky-900/50 to-cyan-950",
  },
  {
    id: 6,
    channel: "Orbito Dev",
    channelInitial: "O",
    title: "Video Transcoding Pipeline — FFmpeg at Scale",
    views: "31K views",
    time: "1 week ago",
    duration: "16:22",
    thumbnail: "from-indigo-600/40 via-blue-900/50 to-slate-950",
  },
];

const sidebarItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Flame, label: "Trending", active: false },
  { icon: Library, label: "Library", active: false },
  { icon: Clock, label: "History", active: false },
];

const VideoCard = ({ video, index }: { video: (typeof videoData)[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.06 }}
    className="cursor-pointer group"
  >
    {/* Thumbnail */}
    <div className={`relative w-full aspect-video bg-gradient-to-br ${video.thumbnail} rounded-lg overflow-hidden`}>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-8 h-8 rounded-full bg-black/70 flex items-center justify-center">
          <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
        </div>
      </div>
      <div className="absolute bottom-1 right-1 bg-black/85 text-white text-[7px] font-medium px-1 py-[1px] rounded">
        {video.duration}
      </div>
    </div>

    {/* Info */}
    <div className="flex gap-1.5 mt-1.5">
      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shrink-0 mt-0.5">
        <span className="text-[6px] font-bold text-white">{video.channelInitial}</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[8px] font-medium text-white leading-tight line-clamp-2">
          {video.title}
        </p>
        <p className="text-[6.5px] text-gray-400 mt-0.5">
          {video.channel}
        </p>
        <p className="text-[6.5px] text-gray-400">
          {video.views} · {video.time}
        </p>
      </div>
    </div>
  </motion.div>
);

const YouTubeShowcase = () => {
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
          {/* Left: Desktop Browser Mockup */}
          <div className="flex justify-center order-2 lg:order-1">
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-[520px]"
            >
              {/* Red glow behind browser */}
              <div
                className="absolute inset-0 rounded-2xl z-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 60%, hsl(0 72% 50% / 0.12) 0%, transparent 70%)",
                  filter: "blur(24px)",
                  transform: "scale(1.1)",
                }}
              />

              {/* Browser frame */}
              <div
                className="relative rounded-xl border border-white/15 bg-[#0f0f0f] overflow-hidden z-10"
                style={{
                  boxShadow:
                    "0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04), 0 0 40px hsl(0 72% 50% / 0.08)",
                }}
              >
                {/* Browser title bar */}
                <div className="bg-[#1a1a1a] px-3 py-2 flex items-center gap-2 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="flex-1 mx-6">
                    <div className="bg-[#0f0f0f] rounded-md px-3 py-1 text-[8px] text-gray-500 text-center">
                      vidstack.app
                    </div>
                  </div>
                </div>

                {/* Top navbar */}
                <div className="bg-[#0f0f0f] px-3 py-2 flex items-center justify-between border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <Menu className="w-3.5 h-3.5 text-white/60" />
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 bg-red-600 rounded-sm flex items-center justify-center">
                        <Play className="w-2 h-2 text-white fill-white" />
                      </div>
                      <span className="text-white text-[9px] font-bold tracking-tight">VidStack</span>
                    </div>
                  </div>
                  <div className="flex items-center bg-white/5 rounded-full overflow-hidden border border-white/10">
                    <div className="px-3 py-1">
                      <span className="text-[7px] text-gray-500">Search</span>
                    </div>
                    <div className="bg-white/5 px-2 py-1 border-l border-white/10">
                      <Search className="w-2.5 h-2.5 text-white/50" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Plus className="w-3.5 h-3.5 text-white/60" />
                    <Bell className="w-3.5 h-3.5 text-white/60" />
                    <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center">
                      <span className="text-[7px] text-white font-bold">S</span>
                    </div>
                  </div>
                </div>

                {/* Category chips */}
                <div className="px-3 py-1.5 flex gap-1.5 border-b border-white/5 overflow-hidden">
                  {["All", "Tech", "Backend", "AI", "SaaS", "Live", "Gaming"].map((chip, i) => (
                    <div
                      key={chip}
                      className={`px-2 py-0.5 rounded text-[7px] font-medium whitespace-nowrap shrink-0 ${
                        i === 0
                          ? "bg-white text-black"
                          : "bg-white/10 text-white/70"
                      }`}
                    >
                      {chip}
                    </div>
                  ))}
                </div>

                {/* Main content area */}
                <div className="flex" style={{ height: "320px" }}>
                  {/* Sidebar */}
                  <div className="w-14 shrink-0 border-r border-white/5 py-2 hidden sm:flex flex-col gap-1">
                    {sidebarItems.map((item) => (
                      <div
                        key={item.label}
                        className={`flex flex-col items-center gap-0.5 py-1.5 px-1 rounded-lg mx-1 ${
                          item.active ? "bg-white/10" : "hover:bg-white/5"
                        }`}
                      >
                        <item.icon className={`w-3 h-3 ${item.active ? "text-white" : "text-white/50"}`} />
                        <span className={`text-[6px] ${item.active ? "text-white" : "text-white/50"}`}>
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Video grid */}
                  <div
                    className="flex-1 p-2.5 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 gap-x-2.5 gap-y-3 auto-rows-min"
                    style={{ scrollbarWidth: "none" }}
                  >
                    {videoData.map((video, idx) => (
                      <VideoCard key={video.id} video={video} index={idx} />
                    ))}
                  </div>
                </div>
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
              Launch Your Own Video Platform.
              <span className="block mt-1">Own the Content. Keep the Revenue.</span>
            </h2>

            <p
              className="mb-4 leading-[1.9] text-gray-400"
              style={{ fontSize: "0.9rem", maxWidth: "30rem" }}
            >
              A production-ready, white-label video platform built for founders
              who want to run their own{" "}
              <strong className="text-gray-200 font-semibold">YouTube-style</strong>{" "}
              video sharing and streaming service without building the{" "}
              <strong className="text-gray-200 font-semibold">infrastructure</strong> from scratch.
            </p>

            <p
              className="mb-12 leading-[1.95] text-gray-500"
              style={{ fontSize: "0.85rem", maxWidth: "30rem" }}
            >
              VidStack gives you the complete tech stack — {" "}
              <strong className="text-gray-300 font-semibold">video transcoding</strong> pipeline,
              adaptive bitrate streaming, recommendation engine,{" "}
              <strong className="text-gray-300 font-semibold">creator dashboards</strong>,
              comment system, subscription management, and{" "}
              <strong className="text-gray-300 font-semibold">monetization</strong> tools
              — already built and production-tested. No large engineering team required.
              No years of development. No platform restrictions.
            </p>

            <ul className="space-y-[16px] mb-14">
              {([
                ["Built for ", "video sharing", " & ", "streaming", " platforms"],
                ["One-time license", " — no monthly platform fees"],
                ["Full source code", " with knowledge transfer"],
                ["YouTube-style", " video feed with ", "recommendation engine"],
                ["Video transcoding", " + adaptive ", "bitrate streaming"],
                ["Creator dashboard", " with analytics & upload management"],
                ["Comment system", " with moderation & ", "spam detection"],
                ["Backend", " ready for ", "100K+ users", " concurrent"],
                ["Monetization", " ready (ads, subscriptions, pay-per-view)"],
                ["White-label", " platform — your brand, your domain, your rules"],
                ["CDN integration", " + edge caching architecture"],
                ["Scales to ", "1M+ videos", " with enterprise-grade infra"],
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
              Launch your own video platform. Own the audience. Keep 100% of the revenue.{" "}
              <span style={{ filter: "brightness(1.4)" }}>→</span>
            </NavLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default YouTubeShowcase;
