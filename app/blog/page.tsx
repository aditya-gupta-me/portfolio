import type { Metadata } from 'next';
import PageContainer from '@/components/PageContainer';
import { AnimatedSection } from '@/components/AnimatedSection';
import { blogPosts, type BlogPost } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Writing',
  description:
    'Technical articles on full-stack development, software architecture, and things I learn building real projects.',
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function FeaturedArticleBlock({
  post,
  isLast,
}: {
  post: BlogPost;
  isLast: boolean;
}) {
  return (
    <div>
      <div className="py-6">
        <a
          href={post.mediumUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
          aria-label={`Read "${post.title}" on Medium (opens in new tab)`}
        >
          <h2
            className="
              text-base font-semibold leading-snug
              text-black dark:text-white
              group-hover:opacity-70
              transition-opacity duration-150
              mb-2
            "
          >
            {post.title}
          </h2>
        </a>

        <p className="text-xs text-black/40 dark:text-white/40 mb-3">
          {formatDate(post.publishedAt)}&nbsp;·&nbsp;{post.readingTime} min read
        </p>

        <p className="text-xs text-black/60 dark:text-white/60 leading-relaxed mb-4 max-w-prose">
          {post.description}
        </p>

        {post.tags.length > 0 && (
          <p className="text-xs text-black/40 dark:text-white/40 mb-4">
            {post.tags.map((tag, i) => (
              <span key={tag}>
                {tag}
                {i < post.tags.length - 1 && (
                  <span className="mx-1.5">·</span>
                )}
              </span>
            ))}
          </p>
        )}

        <a
          href={post.mediumUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-1
            rounded-full border border-black/15 dark:border-white/15
            px-4 py-1.5
            text-xs text-black/70 dark:text-white/70
            hover:border-black/30 dark:hover:border-white/30
            hover:text-black dark:hover:text-white
            transition-all duration-150
          "
          aria-label={`Read "${post.title}" on Medium (opens in new tab)`}
        >
          Read on Medium
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <hr className="border-black/8 dark:border-white/8" />
    </div>
  );
}

function CompactArticleRow({
  post,
  isLast,
}: {
  post: BlogPost;
  isLast: boolean;
}) {
  return (
    <div>
      <a
        href={post.mediumUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group block py-4"
        aria-label={`Read "${post.title}" on Medium (opens in new tab)`}
      >
        <div className="flex items-baseline justify-between gap-4 mb-1">
          <span
            className="
              text-sm font-semibold text-black dark:text-white
              group-hover:opacity-70 transition-opacity duration-150
            "
          >
            {post.title}
          </span>
          <span
            className="
              text-xs text-black/40 dark:text-white/40 shrink-0
              flex items-center gap-1
            "
          >
            {new Date(post.publishedAt).getFullYear()}
            <span
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-150"
              aria-hidden="true"
            >
              ↗
            </span>
          </span>
        </div>

        <p className="text-xs text-black/50 dark:text-white/50 mb-1">
          {post.description}
        </p>

        <p className="text-xs text-black/35 dark:text-white/35">
          {post.tags.join(' · ')}&nbsp;·&nbsp;{post.readingTime} min read
        </p>
      </a>

      {!isLast && (
        <hr className="border-black/8 dark:border-white/8" />
      )}
    </div>
  );
}

export default function BlogPage() {
  const featured = blogPosts.filter((p) => p.featured);
  const remaining = blogPosts.filter((p) => !p.featured);

  return (
    <PageContainer>
      <AnimatedSection>
        {/* Page header */}
        <div className="mb-10">
          <h1 className="text-sm font-semibold mb-1">Writing</h1>
          <p className="text-xs text-black/50 dark:text-white/50 max-w-sm">
            Technical articles on full-stack development, software architecture,
            and things I learn building real projects.
          </p>
        </div>

        {/*Featured articles */}
        {featured.length > 0 && (
          <div className="mb-10">
            {featured.map((post, index) => (
              <FeaturedArticleBlock
                key={post.slug}
                post={post}
                isLast={index === featured.length - 1}
              />
            ))}
          </div>
        )}

        {/* Compact list (remaining posts) */}
        {remaining.length > 0 && (
          <div>
            {featured.length > 0 && (
              <p className="text-xs text-black/30 dark:text-white/30 mb-4">
                More articles
              </p>
            )}
            <div>
              {remaining.map((post, index) => (
                <CompactArticleRow
                  key={post.slug}
                  post={post}
                  isLast={index === remaining.length - 1}
                />
              ))}
            </div>
          </div>
        )}

        {/* Empty state (no posts at all) */}
        {blogPosts.length === 0 && (
          <p className="text-xs text-black/40 dark:text-white/40">
            Articles coming soon.
          </p>
        )}
      </AnimatedSection>
    </PageContainer>
  );
}
