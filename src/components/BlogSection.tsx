import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/lib/blogData";

const BlogSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 5000);
    const stop = () => clearInterval(interval);
    emblaApi.on("pointerDown", stop);
    return () => {
      clearInterval(interval);
      emblaApi.off("pointerDown", stop);
    };
  }, [emblaApi]);

  return (
    <section id="blog" className="py-20 bg-surface-alt">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-center justify-between gap-6 sm:flex-row"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-danger">
              Blog
            </p>
            <h2 className="mt-3 text-3xl font-black text-brand sm:text-4xl">
              Conteúdos que ajudam você
            </h2>
          </div>

          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              aria-label="Post anterior"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface transition-colors hover:bg-surface-alt"
            >
              <ChevronLeft className="h-5 w-5 text-brand" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Próximo post"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface transition-colors hover:bg-surface-alt"
            >
              <ChevronRight className="h-5 w-5 text-brand" />
            </button>
          </div>
        </motion.div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="-ml-4 flex">
            {blogPosts.map((post) => (
              <div
                key={post.slug}
                className="min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <Link to={`/blog/${post.slug}`} className="block h-full">
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-danger px-3 py-1 text-[11px] font-bold uppercase text-white">
                        {post.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="mb-2 text-xs text-muted-foreground">
                        {post.date}
                      </p>
                      <h3 className="mb-2 text-lg font-bold leading-snug text-brand group-hover:text-danger transition-colors">
                        {post.title}
                      </h3>
                      <p className="mb-4 flex-1 text-sm leading-relaxed text-foreground/75">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-danger transition-colors group-hover:text-brand">
                        Ler mais <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </article>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {blogPosts.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Ir para post ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === selectedIndex ? "w-6 bg-danger" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
