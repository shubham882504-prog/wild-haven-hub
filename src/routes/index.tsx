import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, MapPin, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/sanctuary-hero.jpg";
import { events, residents } from "@/lib/sanctuary-data";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Aranya Wildlife Sanctuary — A Home for the Wild" },
    { name: "description", content: "Aranya rescues wildlife, restores habitat, and creates a lifelong refuge rooted in compassion and coexistence." },
    { property: "og:title", content: "Aranya Wildlife Sanctuary" },
    { property: "og:description", content: "A home for the wild. A promise for life." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }), component: HomePage,
});

function HomePage() {
  return <>
    <section className="relative flex min-h-[calc(100svh-4.5rem)] items-end overflow-hidden bg-forest text-forest-foreground">
      <img src={hero} alt="Elephants and deer roaming the open sanctuary at sunrise" width={1920} height={1080} fetchPriority="high" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_oklab,var(--forest)_88%,transparent)_0%,color-mix(in_oklab,var(--forest)_55%,transparent)_48%,transparent_78%),linear-gradient(0deg,color-mix(in_oklab,var(--forest)_55%,transparent),transparent_55%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 lg:px-8 lg:pb-20">
        <p className="eyebrow text-clay-light">Ramnagar, Uttarakhand</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[.98] sm:text-7xl lg:text-8xl">A home for the wild.</h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-forest-foreground/85 sm:text-xl">A lifelong refuge where rescued animals heal, habitats return, and people learn to live gently alongside wildlife.</p>
        <div className="mt-8 flex flex-wrap gap-3"><Button asChild variant="clay" size="lg"><Link to="/get-involved">Donate <Heart /></Link></Button><Button asChild variant="light" size="lg"><Link to="/visit">Visit us <MapPin /></Link></Button></div>
      </div>
    </section>

    <section className="section-shell"><div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20"><div><p className="eyebrow text-clay">Our purpose</p><h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">Sanctuary means a promise for life.</h2></div><div><p className="text-xl leading-9 text-muted-foreground">We rescue animals from conflict, captivity, and injury—then give them the time, space, and specialist care to recover on their own terms.</p><Button asChild variant="link" className="mt-5 px-0 text-base"><Link to="/about">Read our story <ArrowRight /></Link></Button></div></div><div className="mt-16 grid gap-4 sm:grid-cols-3">{[["148","animals in lifelong care"],["220","acres of restored habitat"],["26","years of field conservation"]].map(([number,label])=><div key={label} className="border-l-2 border-clay pl-5"><strong className="font-display text-4xl text-primary">{number}</strong><p className="mt-1 text-sm text-muted-foreground">{label}</p></div>)}</div></section>

    <section className="bg-secondary"><div className="section-shell"><div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="eyebrow text-clay">Meet the residents</p><h2 className="mt-3 font-display text-4xl sm:text-5xl">Lives worth knowing.</h2></div><Button asChild variant="outline"><Link to="/animals">Meet everyone <ArrowRight /></Link></Button></div><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{residents.map(a=><Link key={a.name} to="/animals" className="group overflow-hidden rounded-lg bg-card"><div className="overflow-hidden"><img src={a.image} alt={`${a.name}, ${a.species}`} width={1024} height={768} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"/></div><div className="p-5"><p className="eyebrow text-clay">{a.species}</p><h3 className="mt-1 font-display text-2xl">{a.name}</h3></div></Link>)}</div></div></section>

    <section className="section-shell"><div className="grid items-center gap-12 lg:grid-cols-2"><div><p className="eyebrow text-clay">A thoughtful day out</p><h2 className="mt-4 font-display text-4xl sm:text-5xl">Come closer to nature.</h2><p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">Walk shaded trails with a sanctuary guide, hear the stories behind each rescue, and see conservation care in action.</p><div className="mt-7 flex flex-wrap gap-3"><Button asChild variant="earth" size="lg"><Link to="/visit">Plan your visit <ArrowRight /></Link></Button><span className="flex items-center gap-2 text-sm font-semibold text-muted-foreground"><PawPrint className="size-5 text-clay"/> Open Wed–Mon, 8 AM–5 PM</span></div></div><div className="rounded-lg bg-forest p-8 text-forest-foreground sm:p-10"><p className="eyebrow text-clay-light">Visitor note</p><p className="mt-5 font-display text-3xl leading-snug">“Every quiet visit helps an animal feel safe—and helps another person understand why wild lives matter.”</p><p className="mt-6 text-sm text-forest-foreground/65">Dr. Mira Rao, Sanctuary Director</p></div></div></section>

    <section className="bg-muted"><div className="section-shell"><div className="flex items-end justify-between gap-6"><div><p className="eyebrow text-clay">What’s on</p><h2 className="mt-3 font-display text-4xl">Gather for the wild.</h2></div><Button asChild variant="link" className="hidden sm:inline-flex"><Link to="/events">All events <ArrowRight/></Link></Button></div><div className="mt-9 grid gap-5 md:grid-cols-3">{events.map(e=><article key={e.title} className="card-lift rounded-lg bg-card p-6"><p className="eyebrow text-clay">{e.date} · {e.type}</p><h3 className="mt-4 font-display text-2xl">{e.title}</h3><p className="mt-3 leading-7 text-muted-foreground">{e.text}</p></article>)}</div></div></section>
  </>;
}