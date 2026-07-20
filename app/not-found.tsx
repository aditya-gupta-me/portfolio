import Link from "next/link";
import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <PageContainer>
      <div>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-6xl font-medium mb-4">404</h1>
        <p className="text-xl text-black/50 mb-8">Page not found</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-medium transition-all hover:shadow-lg hover:scale-105"
        >
          Go back home
        </Link>
      </div>
    </div>
      </PageContainer>
  );
}
