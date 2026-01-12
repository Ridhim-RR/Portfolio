"use client";
import Image from "next/image";
import Header from "./header";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ClientPageRoot } from "next/dist/client/components/client-page";
const skills = [
  { name: "TypeScript", logo: "/logos/typescript.png" },
  { name: "JavaScript", logo: "/logos/js.png" },
  { name: "React", logo: "/logos/react.png" },
  { name: "Next.js", logo: "/logos/next.png" },
  { name: "Node.js", logo: "/logos/nodejs.png" },
  { name: "tRPC", logo: "/logos/trpc.svg" },
  { name: "MongoDB", logo: "/logos/mongodb.png" },
  { name: "MySQL", logo: "/logos/mysql.png" },
];

const workHistory = [
  {
    company: "Suffescom Solutions",
    link: "https://www.suffescom.com/",
    period: "Sept 2024 - Oct 2025",
    location: "Mohali, India",
    details: [
      "Designed and owned end-to-end authentication and payment workflows, integrating third-party gateways and implementing idempotency and reconciliation logic to reduce payment transaction mismatch cases by ~75–80%.",
      "Designed a real-time game state management system that reduced backend bottlenecks and cut gameplay latency by ~40%, significantly improving responsiveness.",
    ],
  },
  {
    company: "Immanent Solutions",
    link: "https://immanentsolutions.com/",
    period: "Aug 2022 - Aug 2024",
    location: "Mohali, India",
    details: [
      "Developed and maintained production-ready frontend and backend features, contributing to core workflows, service integrations, and maintainable backend modules over 2 years.",
      "Delivered multiple client-facing features and backend optimizations, improving reliability and system responsiveness.",
    ],
  },
];

export default function Home() {
  const [contributed, setContributed] = useState([]);
  const [totalPRs, setTotalPRs] = useState(0);

  const api = async () => {
    const res = await fetch(
      "https://api.github.com/search/issues?q=is:pr+author:Ridhim-RR&per_page=20",
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
          Accept: "application/vnd.github+json",
        },
      }
    );
    if (res?.status === 200) {
      const data = await res.json();
      setTotalPRs(data.total_count);
      setContributed(data.items);
    }
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <main className="min-h-screen  px-4 py-12 md:px-8 lg:px-12">
      {/* <Header /> */}
      <article className="mx-auto max-w-4xl space-y-12">
        <h1 className="text-2xl  mb-8">Hi, I'm Ridhim Singh Raizada 👋</h1>
        <section>
          <p className="text-900">
            I'm a Full-Stack Developer with 3+ years of experience, focused on
            building secure and reliable systems.
          </p>
          <br />
          <p>
            I believe{" "}
            <span className="font-bold text-[var(--matrix-green)]">
              first-principles thinking
            </span>{" "}
            is key to solving complex problems in an ever-changing tech
            landscape. While tools and frameworks evolve, strong fundamentals
            remain constant.
          </p>
          <br />
          <p>
            {" "}
            I specialize in{" "}
            <span className="font-bold text-[var(--matrix-green)]">
              authentication systems, high-reliability backends, and TypeScript.
            </span>
          </p>
          <br />
          <p className="text-[var(--matrix-green)]">
            {" "}
            Currently contributing to open-source projects including Better Auth
            .
          </p>
        </section>

        {/* <section>
          <h1 className="text-4xl font-semibold mb-2">Skills</h1>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className="inline-flex items-center gap-2 rounded-full border border-dashed border-neutral-300 bg-white px-4 py-2 text-sm text-black shadow-sm"
              >
                <Image
                  src={skill.logo}
                  alt={skill.name}
                  width={25}
                  height={18}
                  className="rounded-sm"
                />
                <span>{skill.name}</span>
              </span>
            ))}
          </div>
        </section> */}

        {/* Experience */}
        <section className="space-y-6">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div>
              <h2 className="text-2xl font-semibold text-[var(--matrix-green)]">
                Professional Experience
              </h2>
            </div>
            <a
              href="https://drive.google.com/file/d/1YaOaUp4tkEjY5Iwz2PzQJ8ORWGSFZQ5u/view?usp=drive_link"
              target="_blank"
              download
              className="inline-flex items-center gap-2 rounded-full border border-black bg-[var(--matrix-green)] px-4 py-2 text-sm font-bold text-black shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span>Resume</span>
            </a>
          </div>

          <div className="space-y-3 rounded-2xl  bg-neutral p-5 text-black shadow-sm">
            <div className="space-y-6">
              {workHistory.map((item) => (
                <div key={item.company} className="flex items-start gap-3">
                  <div
                    className="mt-1 h-2 w-2 rounded-full bg-neutral-900"
                    aria-hidden
                  />
                  <div className="space-y-1">
                    <div className="text-xs uppercase tracking-wide -500 text-white">
                      {item.period}
                    </div>
                    <div className="text-lg font-semibold -900 text-white">
                      <Link
                        href={item.link}
                        target="_blank"
                        className="underline"
                      >
                        {item.company}
                      </Link>
                    </div>
                    <div className="text-sm -700 text-white mb-3">
                      {item.location}
                    </div>
                    <div>
                      <ul className="list-disc pl-5 space-y-1 mt-2 text-white">
                        {item.details.map((detail, index) => (
                          <li key={`${detail}-${index}`}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--matrix-green)]">
            Open Source Contributions
          </h2>
          <h4 className="text-1xl font-semibold mb-4 text-[var(--matrix-green)]">
            Recent Contributions(Total PRs: {totalPRs})
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-base text-white font-medium">
            {contributed?.length > 0 ? (
              contributed.map((item: any) => (
                <li key={item.id}>
                  <Link
                    href={item.html_url || item.url}
                    target="_blank"
                    className="underline"
                  >
                    {item.title || item.html_url || item.url}
                  </Link>
                </li>
              ))
            ) : (
              <p className="text-base text-white/80">Loading...</p>
            )}
          </ul>
          <div className="mt-4">
            <a
              href="https://github.com/pulls?q=is%3Apr+author%3ARidhim-RR"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-black bg-[var(--matrix-green)] px-4 py-2 text-sm font-bold text-black shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              See more on GitHub
            </a>
          </div>
        </section>

        {/* Projects */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[var(--matrix-green)]">
            Projects
          </h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold">
                <a
                  href="https://fastoo.app"
                  target="_blank"
                  className="underline "
                >
                  Fastoo
                </a>
              </h3>
              <p className="text-sm -700">
                Fastoo is a multi-currency e-wallet that enables users to
                securely and easily manage their finances without compromising
                privacy. At Fastoo, we prioritise safeguarding our users
                privacy, ensuring complete confidentiality.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                <a
                  href="https://www.bitanicagames.com/"
                  target="_blank"
                  className="underline"
                >
                  Bitanica Mines
                </a>
              </h3>
              <p className="text-sm -700">
                Game for Bitanica Mines crypto game for web and Telegram bot.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="space-y-1">
          <h2 className="text-2xl font-semibold text-[var(--matrix-green)]">
            Contact
          </h2>
          <p>Email: ridhimraizada.rr@gmail.com</p>
          <p>
            <a
              href="https://github.com/Ridhim-RR"
              target="_blank"
              className="underline"
            >
              GitHub
            </a>{" "}
            ·{" "}
            <a
              href="https://www.linkedin.com/in/ridhim-singh-raizada-811832116"
              target="_blank"
              className="underline"
            >
              LinkedIn
            </a>{" "}
            ·{" "}
            <a
              href="https://x.com/SinghRidhim"
              target="_blank"
              className="underline"
            >
              X
            </a>
          </p>
        </section>
      </article>
    </main>
  );
}
