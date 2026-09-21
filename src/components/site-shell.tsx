import { Link } from "@tanstack/react-router";
import { ArrowRight, Instagram, Leaf, Menu, X, Youtube } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { navItems } from "@/lib/sanctuary-data";

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubscribed(true);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
        <div className="mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-8">
          <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"><Leaf className="size-5" /></span>
            <span className="min-w-0 leading-tight"><strong className="block truncate font-display text-lg">Aranya</strong><span className="block truncate text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Wildlife Sanctuary</span></span>
          </Link>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => <Link key={item.to} to={item.to} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary" activeProps={{ className: "text-primary" }}>{item.label}</Link>)}
            <Button asChild variant="earth" size="lg"><Link to="/get-involved">Donate <ArrowRight /></Link></Button>
          </nav>
          <Button className="lg:hidden" variant="ghost" size="icon" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}>{open ? <X /> : <Menu />}</Button>
        </div>
        {open && <nav className="border-t border-border bg-background px-5 py-5 lg:hidden" aria-label="Mobile navigation"><div className="mx-auto grid max-w-7xl gap-1">{navItems.map((item) => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-base font-semibold hover:bg-muted">{item.label}</Link>)}<Button asChild variant="earth" className="mt-3"><Link to="/get-involved" onClick={() => setOpen(false)}>Donate <ArrowRight /></Link></Button></div></nav>}
      </header>
      <main>{children}</main>
      <footer className="bg-forest text-forest-foreground">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="grid gap-12 border-b border-forest-foreground/20 pb-12 md:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_.8fr_1.2fr]">
            <div><div className="mb-5 flex items-center gap-3"><span className="grid size-10 place-items-center rounded-full bg-clay"><Leaf className="size-5" /></span><strong className="font-display text-xl">Aranya</strong></div><p className="max-w-xs text-sm leading-6 text-forest-foreground/75">A lifelong refuge for rescued wildlife, rooted in care, conservation, and coexistence.</p></div>
            <div><h2 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-clay-light">Explore</h2><div className="grid gap-3 text-sm">{navItems.slice(0, 4).map((item) => <Link key={item.to} to={item.to} className="text-forest-foreground/75 hover:text-forest-foreground">{item.label}</Link>)}</div></div>
            <div><h2 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-clay-light">Find us</h2><address className="not-italic text-sm leading-7 text-forest-foreground/75">Aranya Forest Road<br />Ramnagar, Uttarakhand<br /><a href="tel:+915947251800">+91 5947 251 800</a><br /><a href="mailto:hello@aranyasanctuary.org">hello@aranyasanctuary.org</a></address></div>
            <div><h2 className="font-display text-xl">Notes from the wild</h2><p className="mt-2 text-sm text-forest-foreground/75">Seasonal stories, rescue updates, and ways to help.</p>{subscribed ? <p className="mt-5 font-semibold text-clay-light">You’re on the list. Thank you!</p> : <form onSubmit={subscribe} className="mt-5 flex gap-2"><Input required type="email" aria-label="Email for newsletter" placeholder="Your email" className="h-11 border-forest-foreground/30 bg-forest-foreground/10 placeholder:text-forest-foreground/55" /><Button type="submit" variant="clay" size="icon" className="h-11 w-11 shrink-0" aria-label="Subscribe"><ArrowRight /></Button></form>}</div>
          </div>
          <div className="flex flex-col gap-4 pt-8 text-xs text-forest-foreground/60 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Aranya Wildlife Sanctuary. Care without cages.</p><div className="flex gap-3"><a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-forest-foreground"><Instagram className="size-5" /></a><a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:text-forest-foreground"><Youtube className="size-5" /></a></div></div>
        </div>
      </footer>
    </div>
  );
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <section className="bg-forest text-forest-foreground"><div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><p className="eyebrow text-clay-light">{eyebrow}</p><h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">{title}</h1><div className="mt-6 max-w-2xl text-lg leading-8 text-forest-foreground/75">{children}</div></div></section>;
}