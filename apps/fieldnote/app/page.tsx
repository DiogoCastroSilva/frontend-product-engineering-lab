import { Button } from "@fieldnote/design-system";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-canvas px-6 py-16 text-ink sm:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
        <header className="flex items-center justify-between border-b border-[var(--ds-color-border)] pb-5">
          <a href="/" className="text-lg font-bold tracking-tight">fieldnote<span className="text-brand-600">.</span></a>
          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">FIELDWORK WORKSPACE</span>
        </header>

        <section className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-end">
          <div className="flex flex-col items-start gap-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">Fieldwork, thoughtfully organized</p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Good science starts with being <span className="text-brand-600">out there.</span>
            </h1>
            <p className="max-w-xl text-lg leading-8 text-muted">
              Keep field observations, species records, and team work in one calm, dependable workspace.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" onClick={() => alert("Fieldnote workspace is ready for the next learning milestone.")}>Explore workspace</Button>
              <Button size="lg" variant="secondary" onClick={() => window.open("http://localhost:6006", "_blank", "noopener,noreferrer")}>Open component library</Button>
            </div>
          </div>

          <aside className="rounded-2xl border border-[var(--ds-color-border)] bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-muted">YOUR FIELD SEASON</p>
            <p className="mt-3 text-3xl font-semibold">Spring survey</p>
            <p className="mt-2 text-sm leading-6 text-muted">Boulder Creek · Riparian habitat</p>
            <div className="my-6 h-px bg-slate-100" />
            <div className="grid grid-cols-2 gap-4">
              <div><p className="text-2xl font-semibold">24</p><p className="mt-1 text-sm text-muted">Observations</p></div>
              <div><p className="text-2xl font-semibold">8</p><p className="mt-1 text-sm text-muted">Species logged</p></div>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-emerald-700"><span className="size-2 rounded-full bg-emerald-500" /> All field notes synced</div>
          </aside>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          {[
            { number: "01", title: "Capture observations", body: "Record what you see while the details are fresh." },
            { number: "02", title: "Build shared context", body: "Keep locations, species, and notes connected." },
            { number: "03", title: "Return to the field", body: "Spend less time organizing and more time outside." },
          ].map((item) => (
            <article key={item.number} className="rounded-2xl border border-[var(--ds-color-border)] bg-white p-6">
              <p className="text-sm font-semibold text-brand-600">{item.number}</p>
              <h2 className="mt-4 text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
