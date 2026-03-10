import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { blogPosts } from "@/lib/blogData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getWhatsAppLink } from "@/lib/contact";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (post) {
      document.title = `${post.title} | SÓ Multas Blog`;
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex min-h-[60vh] items-center justify-center pt-[60px]">
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-black text-brand">Post não encontrado</h1>
            <Link to="/#blog" className="text-danger hover:underline">
              ← Voltar ao blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-[60px]">
        {/* Hero */}
        <div className="relative h-[340px] overflow-hidden sm:h-[420px]">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand/90 to-brand/30" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-3xl px-6 pb-10 lg:px-8">
              <span className="mb-3 inline-block rounded-full bg-danger px-3 py-1 text-[11px] font-bold uppercase text-white">
                {post.category}
              </span>
              <h1 className="text-2xl font-black leading-tight text-white sm:text-4xl">
                {post.title}
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-white/80">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Tag className="h-4 w-4" /> {post.category}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="mx-auto max-w-3xl px-6 py-12 lg:px-8">
          <Link
            to="/#blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-danger hover:text-brand transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar ao blog
          </Link>

          <div className="prose prose-lg max-w-none prose-headings:text-brand prose-h2:text-2xl prose-h2:font-black prose-h3:text-xl prose-h3:font-bold prose-p:text-foreground/85 prose-a:text-danger prose-strong:text-foreground prose-table:text-sm prose-th:bg-surface-alt prose-th:p-3 prose-td:p-3 prose-th:text-left prose-tr:border-border">
            {renderMarkdown(post.content)}
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl border border-border bg-surface-alt p-8 text-center">
            <h3 className="mb-2 text-xl font-black text-brand">
              Precisa de ajuda com sua multa?
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Nossa equipe de especialistas está pronta para analisar o seu caso gratuitamente.
            </p>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
            >
              Fale conosco no WhatsApp
            </a>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

/** Simple markdown-to-JSX renderer for blog content */
function renderMarkdown(md: string) {
  const lines = md.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Headings
    if (line.startsWith("### ")) {
      elements.push(<h3 key={key++}>{inlineFormat(line.slice(4))}</h3>);
      i++;
      continue;
    }
    if (line.startsWith("## ")) {
      elements.push(<h2 key={key++}>{inlineFormat(line.slice(3))}</h2>);
      i++;
      continue;
    }

    // Table
    if (line.startsWith("|")) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        const cells = lines[i]
          .split("|")
          .filter((c) => c.trim() !== "")
          .map((c) => c.trim());
        // skip separator row
        if (cells.every((c) => /^[-:]+$/.test(c))) {
          i++;
          continue;
        }
        rows.push(cells);
        i++;
      }
      if (rows.length > 0) {
        const header = rows[0];
        const body = rows.slice(1);
        elements.push(
          <table key={key++}>
            <thead>
              <tr>
                {header.map((h, j) => (
                  <th key={j}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci}>{inlineFormat(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        );
      }
      continue;
    }

    // Unordered list
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={key++}>
          {items.map((item, j) => (
            <li key={j}>{inlineFormat(item)}</li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol key={key++}>
          {items.map((item, j) => (
            <li key={j}>{inlineFormat(item)}</li>
          ))}
        </ol>
      );
      continue;
    }

    // Empty line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Paragraph
    elements.push(<p key={key++}>{inlineFormat(line)}</p>);
    i++;
  }

  return elements;
}

function inlineFormat(text: string): React.ReactNode {
  // Bold
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export default BlogPost;
