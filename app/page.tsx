import Image from "next/image";

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
    period: "Sept 2024 - Oct 2025",
    location: "Mohali, India",
  },
  {
    company: "Immanent Solutions",
    period: "Aug 2022 - Aug 2024",
    location: "Mohali, India",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen  px-4 py-12 md:px-8 lg:px-12">
      <article className="mx-auto max-w-4xl space-y-12">
        <h1 className="text-4xl font-semibold mb-8">Ridhim Singh Raizada</h1>
        <section>
          <p className="text-900">
            Hi, I am Ridhim Full-Stack Developer with 3+ years of expirence specializing in authentication, high‑reliability systems, and TypeScript.
          </p>
        </section>

        <section>
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
        </section>

        {/* Experience */}
        <section className="space-y-6">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div>
              <h2 className="text-2xl font-semibold">Experience</h2>
            </div>
            <a
              href="https://drive.google.com/file/d/1YaOaUp4tkEjY5Iwz2PzQJ8ORWGSFZQ5u/view?usp=drive_link"
              target="_blank"
              download
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span>Download resume</span>
            </a>
          </div>

          <div className="space-y-3 rounded-2xl border border-neutral-200 bg-white p-5 text-black shadow-sm">
            <div className="text-2xl font-semibold">Companies</div>
            <div className="space-y-4">
              {workHistory.map((item) => (
                <div key={item.company} className="flex items-start gap-3">
                  <div
                    className="mt-1 h-2 w-2 rounded-full bg-neutral-900"
                    aria-hidden
                  />
                  <div className="space-y-1">
                    <div className="text-xs uppercase tracking-wide -500">
                      {item.period}
                    </div>
                    <div className="text-lg font-semibold -900">
                      {item.company}
                    </div>
                    <div className="text-sm -700">
                      {item.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Source Contributions */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">
            Open Source Contributions
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-neutral-200 bg-white p-4 text-black shadow-sm">
              <header className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="font-semibold">Better Auth</h3>
                  <p className="text-xs -500">
                    Core auth framework · TypeScript
                  </p>
                </div>
                <a
                  href="https://github.com/better-auth/better-auth/pulls/Ridhim-RR"
                  className="text-xs underline"
                  target="_blank"
                >
                  View PRs
                </a>
              </header>
              <ul className="text-xs -700 list-disc ml-4 space-y-1">
                <li>16+ PRs across core, adapters.</li>
                <li>
                  Implemented features, bugs around plugins, sessions, mcp etc.
                </li>
              </ul>
            </article>

            <article className="rounded-2xl border border-neutral-200 bg-white p-4 text-black  shadow-sm">
              <header className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="font-semibold">UnKey</h3>
                  <p className="text-xs -500">
                    API key infra · Go/TS
                  </p>
                </div>
                <a
                  href="https://github.com/unkeyed/unkey/pulls/Ridhim-RR"
                  className="text-xs underline"
                  target="_blank"
                >
                  View PRs
                </a>
              </header>
              <ul className="text-xs -700 list-disc ml-4 space-y-1">
                <li>
                  Contributed to rate limiting, analytics, and DX improvements.
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* Projects */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold">
                <a
                  href="https://fastoo.app"
                  target="_blank"
                  className="underline"
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
          <h2 className="text-2xl font-semibold">Contact</h2>
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
