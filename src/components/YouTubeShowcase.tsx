import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  Search,
  Bell,
  Menu,
  Home,
  Play,
  Plus,
  Library,
  Clock,
  Flame,
  MoreVertical,
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

const mobileNavItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Flame, label: "Shorts", active: false },
  { icon: Plus, label: "Create", active: false },
  { icon: Bell, label: "Inbox", active: false },
  { icon: Library, label: "Library", active: false },
];

const BrowserVideoCard = ({
  video,
  index,
}: {
  video: (typeof videoData)[0];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.06 }}
    className="cursor-pointer group"
  >
    <div
      className={`relative aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br ${video.thumbnail}`}
    >
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/70">
          <Play className="ml-0.5 h-4 w-4 fill-white text-white" />
        </div>
      </div>
      <div className="absolute bottom-2 right-2 rounded bg-black/85 px-1.5 py-0.5 text-[10px] font-medium text-white">
        {video.duration}
      </div>
    </div>

    <div className="mt-3 flex gap-2.5">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-700">
        <span className="text-[10px] font-bold text-white">
          {video.channelInitial}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="line-clamp-2 text-xs font-medium leading-tight text-white md:text-sm">
          {video.title}
        </p>
        <p className="mt-1 text-[11px] text-gray-400 md:text-xs">{video.channel}</p>
        <p className="text-[11px] text-gray-400 md:text-xs">
          {video.views} · {video.time}
        </p>
      </div>
    </div>
  </motion.div>
);

const PhoneVideoCard = ({ video }: { video: (typeof videoData)[0] }) => (
  <div className="flex gap-3">
    <div
      className={`relative w-[44%] shrink-0 overflow-hidden rounded-xl bg-gradient-to-br ${video.thumbnail} aspect-video`}
    >
      <div className="absolute bottom-1.5 right-1.5 rounded bg-black/85 px-1 py-0.5 text-[8px] font-medium text-white">
        {video.duration}
      </div>
    </div>
    <div className="min-w-0 flex-1">
      <p className="line-clamp-2 text-[11px] font-medium leading-[1.35] text-white">
        {video.title}
      </p>
      <p className="mt-1 text-[9px] text-gray-400">{video.channel}</p>
      <p className="text-[9px] text-gray-400">
        {video.views} · {video.time}
      </p>
    </div>
    <MoreVertical className="mt-0.5 h-4 w-4 shrink-0 text-white/45" />
  </div>
);

const YouTubeShowcase = () => {
  return (
    <section className="bg-black py-20 lg:py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 items-start gap-12 xl:grid-cols-[minmax(420px,0.95fr)_minmax(0,1.05fr)] xl:gap-10"
        >
          {/* Left: Desktop + Mobile UI Mockups */}
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative mx-auto w-full max-w-[760px]"
              >
                <div
                  className="pointer-events-none absolute inset-0 z-0 rounded-[30px]"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 60%, hsl(0 72% 50% / 0.12) 0%, transparent 70%)",
                    filter: "blur(28px)",
                    transform: "scale(1.06)",
                  }}
                />

                <div
                  className="relative z-10 overflow-hidden rounded-[28px] border border-white/15 bg-[#0f0f0f]"
                  style={{
                    boxShadow:
                      "0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04), 0 0 40px hsl(0 72% 50% / 0.08)",
                  }}
                >
                  <div className="flex items-center gap-2 border-b border-white/5 bg-[#1a1a1a] px-4 py-3">
                    <div className="flex gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                      <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                      <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="mx-2 flex-1 sm:mx-6">
                      <div className="rounded-md bg-[#0f0f0f] px-3 py-1.5 text-center text-[10px] text-gray-500 sm:text-xs">
                        vidstack.app
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-white/5 bg-[#101010] px-4 py-3 sm:px-5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <Menu className="h-4 w-4 text-white/60" />
                        <div className="flex items-center gap-2">
                          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-red-600">
                            <Play className="ml-0.5 h-3 w-3 fill-white text-white" />
                          </div>
                          <span className="text-sm font-bold tracking-tight text-white">
                            VidStack
                          </span>
                        </div>
                      </div>
                      <div className="hidden min-w-0 flex-1 items-center justify-center px-4 sm:flex">
                        <div className="flex w-full max-w-[340px] items-center overflow-hidden rounded-full border border-white/10 bg-white/5">
                          <div className="flex-1 px-4 py-2 text-xs text-gray-500">
                            Search creators, topics, videos
                          </div>
                          <div className="border-l border-white/10 bg-white/5 px-3 py-2">
                            <Search className="h-4 w-4 text-white/50" />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Plus className="h-4 w-4 text-white/60" />
                        <Bell className="h-4 w-4 text-white/60" />
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-600">
                          <span className="text-[10px] font-bold text-white">
                            S
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 overflow-x-auto border-b border-white/5 px-4 py-3 sm:px-5">
                    {["All", "Tech", "Backend", "AI", "SaaS", "Live", "Gaming"].map((chip, i) => (
                      <div
                        key={chip}
                        className={`shrink-0 rounded-full px-3 py-1.5 text-[11px] font-medium sm:text-xs ${
                          i === 0 ? "bg-white text-black" : "bg-white/10 text-white/70"
                        }`}
                      >
                        {chip}
                      </div>
                    ))}
                  </div>

                  <div className="flex min-h-[340px] bg-[#0d0d0d] sm:min-h-[390px] lg:min-h-[430px]">
                    <div className="hidden w-[74px] shrink-0 border-r border-white/5 py-3 md:flex md:flex-col md:gap-1.5">
                      {sidebarItems.map((item) => (
                        <div
                          key={item.label}
                          className={`mx-2 flex flex-col items-center gap-1 rounded-xl px-2 py-3 ${
                            item.active ? "bg-white/10" : "hover:bg-white/5"
                          }`}
                        >
                          <item.icon
                            className={`h-4 w-4 ${item.active ? "text-white" : "text-white/50"}`}
                          />
                          <span
                            className={`text-[10px] ${
                              item.active ? "text-white" : "text-white/50"
                            }`}
                          >
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div
                      className="grid flex-1 auto-rows-min grid-cols-1 gap-x-4 gap-y-5 overflow-y-auto p-4 sm:grid-cols-2 sm:p-5 lg:grid-cols-3"
                      style={{ scrollbarWidth: "none" }}
                    >
                      {videoData.map((video, idx) => (
                        <BrowserVideoCard key={video.id} video={video} index={idx} />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 }}
                className="mx-auto flex w-full max-w-[760px] justify-center"
              >
                <div className="relative w-[300px] sm:w-[330px]">
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[42px]"
                    style={{
                      background:
                        "radial-gradient(ellipse at 50% 60%, hsl(0 72% 50% / 0.14) 0%, transparent 70%)",
                      filter: "blur(20px)",
                      transform: "scale(1.08)",
                    }}
                  />
                  <div
                    className="relative overflow-hidden rounded-[40px] border-[3px] border-white/15 bg-[#0f0f0f]"
                    style={{
                      boxShadow:
                        "0 30px 80px rgba(0,0,0,0.65), 0 0 40px hsl(0 72% 50% / 0.08)",
                    }}
                  >
                    <div className="absolute left-1/2 top-0 z-20 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-black" />

                    <div className="border-b border-white/5 px-4 pb-3 pt-8">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-red-600">
                            <Play className="ml-0.5 h-3 w-3 fill-white text-white" />
                          </div>
                          <span className="text-sm font-semibold tracking-tight text-white">
                            VidStack
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Search className="h-4 w-4 text-white/60" />
                          <Bell className="h-4 w-4 text-white/60" />
                        </div>
                      </div>
                      <div className="mt-3 flex items-center gap-2 overflow-x-auto">
                        {["All", "Music", "Coding", "Scale", "AI"].map((chip, i) => (
                          <div
                            key={chip}
                            className={`shrink-0 rounded-full px-3 py-1 text-[10px] font-medium ${
                              i === 0 ? "bg-white text-black" : "bg-white/10 text-white/70"
                            }`}
                          >
                            {chip}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div
                      className="space-y-4 overflow-y-auto px-4 py-4"
                      style={{ height: "520px", scrollbarWidth: "none" }}
                    >
                      <div
                        className={`relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br ${videoData[0].thumbnail}`}
                      >
                        <div className="absolute bottom-2 right-2 rounded bg-black/85 px-1.5 py-0.5 text-[9px] font-medium text-white">
                          {videoData[0].duration}
                        </div>
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-3 pt-10">
                          <p className="line-clamp-2 text-sm font-medium text-white">
                            {videoData[0].title}
                          </p>
                          <p className="mt-1 text-[10px] text-white/70">
                            {videoData[0].views} · {videoData[0].time}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {videoData.slice(1, 5).map((video) => (
                          <PhoneVideoCard key={video.id} video={video} />
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-5 border-t border-white/5 px-2 py-3">
                      {mobileNavItems.map((item) => (
                        <div
                          key={item.label}
                          className="flex flex-col items-center gap-1"
                        >
                          <item.icon
                            className={`h-4 w-4 ${
                              item.active ? "text-white" : "text-white/45"
                            }`}
                          />
                          <span
                            className={`text-[9px] ${
                              item.active ? "text-white" : "text-white/45"
                            }`}
                          >
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="order-1 max-w-none xl:pl-4 lg:order-2">
            <div
              className="mb-4 inline-block"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
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
              className="mb-5 max-w-3xl font-extrabold tracking-tight text-white"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.3rem)",
                lineHeight: 1.04,
              }}
            >
              Launch Your Own Video Platform.
              <span className="mt-2 block">Own the Content. Keep the Revenue.</span>
            </h2>

            <div className="mb-8 grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(220px,0.85fr)] lg:items-start">
              <p className="max-w-2xl text-base leading-8 text-gray-300 md:text-[1.02rem]">
                A production-ready, white-label platform for founders who want
                to launch a{" "}
                <strong className="font-semibold text-white">YouTube-style</strong>{" "}
                video service with playback, creators, and monetization already
                accounted for.
              </p>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-red-400/80">
                  Built to launch fast
                </p>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  VidStack covers the user-facing product and the media backend
                  together, so teams can focus on distribution and creator
                  growth instead of rebuilding platform primitives.
                </p>
              </div>
            </div>

            <p className="mb-10 max-w-4xl text-sm leading-8 text-gray-500 md:text-[0.98rem]">
              VidStack gives you the full operating layer for a streaming
              product: transcoding, adaptive bitrate delivery, a recommendation
              engine, creator dashboards, comments, subscriptions, and the
              monetization hooks required to turn an audience into a business.
              It is built for teams that need a credible video platform without
              spending years assembling one module at a time.
            </p>

            <ul className="mb-12 grid gap-4 sm:grid-cols-2 xl:gap-x-8">
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
                  className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3"
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

            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 font-bold transition-all duration-200 hover:opacity-90"
              style={{
                fontSize: "1.05rem",
                color: "hsl(0, 72%, 60%)",
                textShadow:
                  "0 0 22px hsl(0 72% 55% / 0.55), 0 0 8px hsl(0 72% 55% / 0.35)",
                marginTop: "0.5rem",
              }}
            >
              Talk to us about launching your video platform.{" "}
              <span style={{ filter: "brightness(1.4)" }}>→</span>
            </NavLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default YouTubeShowcase;
