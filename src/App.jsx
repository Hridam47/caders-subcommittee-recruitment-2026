import cadersLogo from "./assets/caders-logo.png";

const STATUS_TEXT = "Initial Registration Closed";

const clubDescription =
  "CADers (Computer Aided Designers) is one of the top CAD and engineering clubs in Bangladesh, founded at KUET in 2012 to promote creativity, innovation, and technical excellence among engineering students. Through workshops, seminars, competitions, and collaborative projects, CADers helps students develop practical skills in modern design and engineering technologies while building a strong community of future innovators and designers.";

const heroDescription =
  "CADers brings together the most innovative and creative minds of KUET, creating a platform where students can explore technology, design, leadership, and teamwork. Recognized as one of the leading CAD clubs in Bangladesh, CADers inspires students to learn, innovate, and grow through collaboration, creativity, and engineering excellence.";

const navLinks = [
  { label: "Process", href: "#process" },
  { label: "Departments", href: "#departments" },
  { label: "Status", href: "#status" },
  { label: "FAQ", href: "#faq" },
];

const recruitmentSteps = [
  {
    title: "Initial Submission",
    description:
      "Application submission phase has been completed successfully.",
    marker: "01",
    status: "completed",
  },
  {
    title: "Interview",
    description:
      "Shortlisted applicants will receive interview mails soon. Stay prepared for the next phase.",
    marker: "02",
    status: "active",
  },
  {
    title: "Task Assessment",
    description:
      "Selected candidates may complete a small task to demonstrate creativity, commitment, and teamwork.",
    marker: "03",
    status: "upcoming",
  },
];

const departments = [
  {
    name: "IT and Resource",
    icon: "laptop",
    description:
      "Build digital systems, manage technical resources, and support club operations with smart tools.",
  },
  {
    name: "Treasury",
    icon: "chart",
    description:
      "Track budgets, coordinate funding, and keep financial records clear for every initiative.",
  },
  {
    name: "Event Management",
    icon: "calendar",
    description:
      "Plan sessions, coordinate logistics, and keep CADers programs running smoothly from idea to stage.",
  },
  {
    name: "Content Designing",
    icon: "pen",
    description:
      "Create visuals, posts, and campaign materials that make club communication sharp and memorable.",
  },
  {
    name: "Human Resource",
    icon: "users",
    description:
      "Support members, coordinate teams, and help build a healthy culture of collaboration.",
  },
  {
    name: "Public Relations",
    icon: "megaphone",
    description:
      "Represent CADers, manage outreach, and connect students with club events and opportunities.",
  },
];

const importantNotes = [
  "Eligibility: Batch 2k23 students of KUET.",
  "Initial registration has officially closed.",
  "Initial screening process is currently ongoing.",
  "Interview mails will be sent soon to shortlisted candidates.",
  "Stay alert on official CADers platforms for further updates.",
];

const socialLinks = [
  {
    label: "Facebook Group",
    href: "https://www.facebook.com/groups/caders.kuet/",
  },
  {
    label: "Facebook Page",
    href: "https://www.facebook.com/share/1Dyk7r5uSA/",
  },
  {
    label: "YouTube",
    href: "http://www.youtube.com/@CADersKUET",
  },
];

function DepartmentIcon({ type }) {
  const common = {
    className: "size-7",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const icons = {
    laptop: (
      <svg {...common}>
        <path d="M5 6.5h14v9H5z" />
        <path d="M3.5 18h17" />
        <path d="M9 18h6" />
      </svg>
    ),
    chart: (
      <svg {...common}>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="M8 16v-5" />
        <path d="M12 16V8" />
        <path d="M16 16v-8" />
      </svg>
    ),
    calendar: (
      <svg {...common}>
        <path d="M6 4v3" />
        <path d="M18 4v3" />
        <path d="M4.5 8h15" />
        <path d="M5 6h14v14H5z" />
        <path d="m9 14 2 2 4-5" />
      </svg>
    ),
    pen: (
      <svg {...common}>
        <path d="M14.5 4.5 19.5 9.5" />
        <path d="M4 20l4.5-1 10-10a2.1 2.1 0 0 0-3-3l-10 10L4 20z" />
        <path d="m8.5 18.5-3-3" />
      </svg>
    ),
    users: (
      <svg {...common}>
        <path d="M8.5 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        <path d="M15.5 11a2.5 2.5 0 1 0 0-5" />
        <path d="M3.5 20a5 5 0 0 1 10 0" />
        <path d="M13.5 15.5a4.5 4.5 0 0 1 7 4.5" />
      </svg>
    ),
    megaphone: (
      <svg {...common}>
        <path d="M4 13h3l10 4V7L7 11H4z" />
        <path d="M7 13v5" />
        <path d="M17 9.5a3 3 0 0 1 0 5" />
      </svg>
    ),
  };

  return icons[type] ?? icons.laptop;
}

function LogoMark({ className = "size-10" }) {
  return (
    <img
      src={cadersLogo}
      alt="CADers logo"
      className={`${className} rounded-lg bg-white object-contain p-1.5`}
    />
  );
}

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      <div className="fixed inset-0 -z-10 blueprint-grid opacity-80" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_10%,rgba(34,197,94,0.25),transparent_30rem)]" />

      <div className="border-b border-yellow-300/20 bg-yellow-400/10 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.24em] text-yellow-100 sm:text-sm">
        Initial Registration Closed • Recruitment Process Ongoing • Stay Alert
        For Further Updates
      </div>

      <nav className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/82 backdrop-blur-xl">
        <div className="section-shell flex h-16 items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3 font-bold">
            <LogoMark className="size-10" />
            <span className="text-sm uppercase tracking-[0.24em] text-white">
              CADers
            </span>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition hover:text-lime-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden rounded-lg border border-yellow-300/30 bg-yellow-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-yellow-100 sm:block">
            {STATUS_TEXT}
          </div>
        </div>
      </nav>

      <section
        id="top"
        className="relative min-h-[calc(100vh-96px)] overflow-hidden"
      >
        <div className="absolute inset-0 blueprint-grid opacity-60" />
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full border border-lime-200/20 md:h-[34rem] md:w-[34rem]" />
        <div className="cad-ring absolute -right-28 top-24 h-72 w-72 opacity-85 blur-[1px] md:h-[28rem] md:w-[28rem]" />
        <div className="cad-ring absolute -bottom-28 -left-24 h-80 w-80 opacity-65 blur-[1px]" />

        <div className="section-shell relative grid min-h-[calc(100vh-96px)] items-center gap-10 py-20 sm:py-24 lg:grid-cols-[1fr_360px] lg:py-28">
          <div className="max-w-4xl">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-lg border border-emerald-300/40 bg-emerald-500/[0.16] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-emerald-100">
                Initial Submission Completed
              </span>

              <span className="animate-pulse rounded-lg border border-lime-300/30 bg-lime-300/[0.12] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-lime-100">
                Interview Phase Ongoing
              </span>
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-lime-200">
              SHARE YOUR CO-ORDINATES
            </p>

            <h1 className="max-w-5xl text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              CADers Sub-Committee Recruitment 2026
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {heroDescription}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="inline-flex min-h-12 items-center justify-center rounded-lg border border-yellow-300/30 bg-yellow-400/10 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-yellow-100">
                Registration Closed
              </div>

              <a
                href="#status"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-0.5 hover:border-lime-200/70 hover:bg-white/10"
              >
                Recruitment Status
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-8 rounded-full bg-lime-400/10 blur-3xl" />
            <div className="relative rounded-lg border border-lime-300/20 bg-white/[0.04] p-7 shadow-glow">
              <LogoMark className="mx-auto size-56" />
            </div>
          </div>
        </div>
      </section>

      <section
        id="process"
        className="border-y border-white/10 bg-slate-950/70 py-20 sm:py-24"
      >
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-lime-200">
              Recruitment Process
            </p>

            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              Recruitment process is currently progressing.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {recruitmentSteps.map((step) => (
              <article
                key={step.title}
                className={`group rounded-lg border p-6 transition duration-300 hover:-translate-y-1 ${
                  step.status === "completed"
                    ? "border-emerald-300/40 bg-emerald-500/[0.08]"
                    : step.status === "active"
                    ? "border-lime-300/50 bg-lime-400/[0.08] shadow-glow"
                    : "border-white/10 bg-white/[0.045]"
                }`}
              >
                <div className="mb-7 flex items-center justify-between">
                  <span className="text-5xl font-black text-white/10 transition group-hover:text-lime-200/30">
                    {step.marker}
                  </span>

                  <span className="h-px flex-1 bg-gradient-to-r from-lime-300/60 to-transparent" />
                </div>

                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-bold text-white">
                    {step.title}
                  </h3>

                  {step.status === "completed" && (
                    <span className="rounded-full border border-emerald-300/40 bg-emerald-400/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-100">
                      Completed
                    </span>
                  )}

                  {step.status === "active" && (
                    <span className="animate-pulse rounded-full border border-lime-300/40 bg-lime-400/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-lime-100">
                      Ongoing
                    </span>
                  )}
                </div>

                <p className="mt-3 leading-7 text-slate-300">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="section-shell">
          <div className="grid gap-8 rounded-lg border border-lime-300/20 bg-slate-900/75 p-6 shadow-glow sm:p-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-lime-200">
                About CADers Club
              </p>

              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                A community for design minds.
              </h2>
            </div>

            <p className="leading-8 text-slate-300">{clubDescription}</p>
          </div>
        </div>
      </section>

      <section id="departments" className="py-20 sm:py-24">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-lime-200">
                Departments
              </p>

              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                Choose where your energy fits best.
              </h2>
            </div>

            <p className="max-w-sm leading-7 text-slate-300">
              Pick the team that matches your skills, curiosity, or the area you
              want to grow into this year.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((department) => (
              <article
                key={department.name}
                className="group relative overflow-hidden rounded-lg border border-white/10 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-lime-200/60 hover:shadow-glow"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-lime-300 via-green-400 to-emerald-300 opacity-80" />

                <div className="flex items-start gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-lg border border-lime-200/25 bg-lime-300/10 text-lime-100 transition group-hover:scale-105 group-hover:text-lime-50">
                    <DepartmentIcon type={department.icon} />
                  </span>

                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {department.name}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-300">
                      {department.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="status"
        className="border-y border-white/10 bg-lime-400/[0.04] py-14"
      >
        <div className="section-shell">
          <div className="mx-auto max-w-4xl rounded-lg border border-lime-300/20 bg-slate-900/70 p-8 text-center shadow-glow">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-lime-200">
              Recruitment Status
            </p>

            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              Initial Screening In Progress
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
              Initial registration has officially closed. The CADers recruitment team is currently evaluating submissions and shortlisting candidates for the interview phase.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-emerald-300/30 bg-emerald-500/[0.08] p-5 text-left">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-100">
                  Step 1 Completed
                </p>

                <p className="mt-2 text-slate-200">
                  Initial submission phase has been completed successfully.
                </p>
              </div>

              <div className="rounded-lg border border-lime-300/30 bg-lime-400/[0.08] p-5 text-left shadow-glow">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-100">
                  Interview Phase
                </p>

                <p className="mt-2 text-slate-200">
                  Interview mails will be sent soon to shortlisted applicants.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-yellow-300/30 bg-yellow-400/10 px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-100">
              Stay Alert For Further Updates
            </div>
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="border-t border-white/10 bg-slate-950/75 py-20 sm:py-24"
      >
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-lime-200">
                FAQ and Notes
              </p>

              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                Important recruitment updates.
              </h2>
            </div>

            <div className="grid gap-4">
              {importantNotes.map((note) => (
                <div
                  key={note}
                  className="rounded-lg border border-white/10 bg-white/[0.045] p-5 leading-7 text-slate-200"
                >
                  {note}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950 py-10">
        <div className="section-shell flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <LogoMark className="size-12" />

            <div>
              <p className="text-lg font-black text-white">CADers Club</p>

              <p className="mt-1 text-sm text-slate-400">
                Khulna University of Engineering & Technology
              </p>

              <p className="mt-2 text-slate-400">
                SHARE YOUR CO-ORDINATES
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-lime-200/60 hover:text-lime-100"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}


export default App;
