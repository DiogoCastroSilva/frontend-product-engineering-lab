import Link from "next/link";
import { WorkspaceActions } from "./workspace-actions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-canvas px-6 py-16 text-ink sm:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
        <header className="flex items-center justify-between border-b pb-5">
          <Link href="/" className="text-lg font-bold tracking-tight">
            fieldnote<span className="text-primary">.</span>
          </Link>
          <span className="rounded-full bg-primary-subtle px-3 py-1 text-xs font-semibold text-primary">
            FIELDWORK WORKSPACE
          </span>
        </header>

        <section className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-end">
          <div className="flex flex-col items-start gap-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Fieldwork, thoughtfully organized
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Good science starts with being{" "}
              <span className="text-primary">out there.</span>
            </h1>
            <p className="max-w-xl text-lg leading-8 text-ink-subtle">
              Keep field observations, species records, and team work in one
              calm, dependable workspace.
            </p>
            <WorkspaceActions />
          </div>

          <aside className="rounded-2xl border bg-surface p-6 shadow-sm">
            <p className="text-sm font-medium text-ink-subtle">
              YOUR FIELD SEASON
            </p>
            <p className="mt-3 text-3xl font-semibold">Spring survey</p>
            <p className="mt-2 text-sm leading-6 text-ink-subtle">
              Boulder Creek · Riparian habitat
            </p>
            <div className="my-6 h-px bg-surface-subtle" />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-2xl font-semibold">24</p>
                <p className="mt-1 text-sm text-ink-subtle">Observations</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">8</p>
                <p className="mt-1 text-sm text-ink-subtle">Species logged</p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-success">
              <span className="size-2 rounded-full bg-success" /> All field
              notes synced
            </div>
          </aside>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          {[
            {
              number: "01",
              title: "Capture observations",
              body: "Record what you see while the details are fresh.",
            },
            {
              number: "02",
              title: "Build shared context",
              body: "Keep locations, species, and notes connected.",
            },
            {
              number: "03",
              title: "Return to the field",
              body: "Spend less time organizing and more time outside.",
            },
          ].map((item) => (
            <article
              key={item.number}
              className="rounded-2xl border bg-surface p-6"
            >
              <p className="text-sm font-semibold text-primary">
                {item.number}
              </p>
              <h2 className="mt-4 text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-ink-subtle">
                {item.body}
              </p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
