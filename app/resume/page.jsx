import ResumeContent from "@/components/ResumeContent";

export const metadata = {
  title: "Resume",
  description:
    "View and download Aditya Gupta's resume - Full Stack Developer specializing in MERN stack and Java.",
  alternates: { canonical: "/resume" },
  openGraph: {
    title: "Resume | Aditya Gupta",
    description: "View and download Aditya Gupta's resume.",
    url: "/resume",
  },
};

export default function ResumePage() {
  return <ResumeContent />;
}
