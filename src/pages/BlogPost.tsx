import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getBlogPost, blogPosts } from "@/data/blogPosts";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = getBlogPost(slug || "");

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Button onClick={() => navigate("/")} className="button-gradient">
            Go Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />

      <article className="container px-4 pt-32 pb-20 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-8 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1">
              <Tag className="w-4 h-4" />
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            {post.title}
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {post.summary}
          </p>

          <div className="aspect-video rounded-xl overflow-hidden mb-12 border border-border">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-invert max-w-none space-y-6">
            {post.content.map((paragraph, idx) => (
              <p key={idx} className="text-lg text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Challenges */}
          <div className="mt-16 p-8 rounded-xl border border-border bg-card">
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Engineering Challenges
            </h3>
            <ul className="space-y-4">
              {post.challenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary mt-1 shrink-0">▸</span>
                  <span className="text-gray-300">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results */}
          <div className="mt-8 p-8 rounded-xl border border-primary/20 bg-primary/5">
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Results
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {post.results.map((result, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-primary mt-1 shrink-0">✓</span>
                  <span className="text-gray-300">{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {post.techStack.map((tech, idx) => (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="bg-secondary/80 text-foreground border border-border"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center p-12 rounded-xl border border-border bg-card">
            <h3 className="text-2xl font-semibold mb-4">
              Want something like this?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              We build production-grade systems that scale. Let's discuss your
              project.
            </p>
            <Button className="button-gradient" size="lg" asChild>
              <a
                href="https://cal.com/your-company"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Meeting
              </a>
            </Button>
          </div>
        </motion.div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
