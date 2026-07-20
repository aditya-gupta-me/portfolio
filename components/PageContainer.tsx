import type { ReactNode } from "react";

export default function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-3xl mx-auto px-6 w-full pb-16">
      {children}
    </div>
  );
}
