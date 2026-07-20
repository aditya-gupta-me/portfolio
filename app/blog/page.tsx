import PageContainer from "@/components/PageContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my latest thoughts, tutorials, and technical articles.",
};

export default function BlogPage() {
  return (
    <PageContainer>
      <h1 className="text-3xl font-medium mb-6">Blog</h1>
      <div className="text-black/50 dark:text-white/50">
        <p>Coming soon...</p>
      </div>
    </PageContainer>
  );
}
