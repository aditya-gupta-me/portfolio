import PageContainer from "@/components/PageContainer";
import { AnimatedSection } from "@/components/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my latest thoughts, tutorials, and technical articles.",
};

export default function BlogPage() {
  return (
    <PageContainer>
      <div className="animate-fade-up" style={{ animationDelay: '0ms' }}>
        <h1 className="text-lg font-semibold mb-6">Blog</h1>
      </div>
      <AnimatedSection>
        <div className="text-black/50 dark:text-white/50">
          <p>Coming soon...</p>
        </div>
      </AnimatedSection>
    </PageContainer>
  );
}
