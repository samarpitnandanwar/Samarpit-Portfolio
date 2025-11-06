import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import GithubCalendar from "../app/components/GithubCalendar";
import BlocksColumn from "./components/BlocksColumn";
async function getData() {
  let page = 1;
  const allBlogs = [];

  while (true) {
    const res = await fetch(
      `https://dev.to/api/articles?username=${personalData.devUsername}&page=${page}&per_page=400`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    if (data.length === 0) {
      break; // No more articles available
    }

    const filtered = data.filter((item) => item?.cover_image); // Filter blogs with cover image
    allBlogs.push(...filtered);

    // Optional: Add delay to avoid hitting rate limits
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1-second delay
    page++;
  }

  // Shuffle the combined list of articles
  return allBlogs.sort(() => Math.random() - 0.5);
}

export default async function Home() {
  const blogs = await getData();
  const projectsCount = 10;
  const blogsCount = 5;
  const certificatesCount = 7;

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      {/* <BlocksColumn
        projectsCount={projectsCount}
        blogsCount={blogsCount}
        certificatesCount={certificatesCount}
      /> */}
      <GithubCalendar username="samarpitnandanwar" />
      <ContactSection />
    </>
  );
};