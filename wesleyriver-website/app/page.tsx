import Image from "next/image";
import Link from "next/link";
import { InstagramIcon, XIcon, TikTokIcon, IMDbIcon, ArrowUpRightIcon } from "./components/icons";
import CursorGlow from "./components/CursorGlow";

// Work Item Component
interface WorkItemProps {
  href: string;
  title: React.ReactNode;
  altText?: string;
  role?: React.ReactNode;
  date: string;
  image?: string;
  rotation?: number;
  className?: string;
}

const WorkItem = ({ href, title, altText, role, date, image, rotation = 0, className = "" }: WorkItemProps) => (
  <div className={`-mx-3 px-3 py-3 link-item flex items-start gap-3 ${className}`}>
    {image && (
      <Link href={href} target="_blank">
        <Image
          src={image}
          alt={altText || ""}
          width={32}
          height={48}
          className="w-7 h-auto rounded-md shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
          style={{ transform: `rotate(${rotation}deg)` }}
        />
      </Link>
    )}
    <span className="flex-1 flex justify-between items-start gap-4">
      <span className="flex flex-col">
        <Link href={href} target="_blank" className="text-foreground text-base font-medium">{title}</Link>
        {role && <span className="text-muted text-sm flex flex-col mt-0.5 pb-2">{role}</span>}
      </span>
      <span className="text-muted text-sm shrink-0">{date}</span>
    </span>
  </div>
);

// Press Item Component
interface PressItemProps {
  href: string;
  title: string;
  source: string;
  year: string;
  className?: string;
}

const PressItem = ({ href, title, source, year, className = "" }: PressItemProps) => (
  <Link
    href={href}
    target="_blank"
    className={`block -mx-3 px-3 py-3 link-item flex items-baseline gap-4 ${className}`}
  >
    <span className="text-muted text-sm shrink-0">{year}</span>
    <span className="flex-1">
      <span className="text-foreground">{title}</span>
    </span>
    <span className="text-muted text-sm shrink-0">{source}</span>
  </Link>
);

// Section Header
const SectionHeader = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h2 className={`text-[11px] font-medium text-muted uppercase tracking-wider pb-4 mb-3 border-b border-neutral-200 w-full block ${className}`}>
    {children}
  </h2>
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col px-10 pt-6 md:pt-10 max-w-2xl mx-auto w-full relative">
      {/* Cursor glow */}
      <CursorGlow />

      {/* Header */}
      <header className="pb-5 animate-fade-in stagger-1">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground pt-10 pb-3">Wesley River</h1>
        <p className="text-muted text-sm leading-relaxed pb-5">Wesley booked his first audition, landing a recurring role as Tyler Jones on HBO&apos;s The Pitt with Noah Wyle, and went on to a leading role opposite James Franco in Foster.</p>
      </header>

      {/* Main Content */}
      <main className="space-y-8 flex-1">
        {/* Films */}
        <section className="animate-fade-in stagger-2">
          <SectionHeader>Films</SectionHeader>
          <div>
            <WorkItem
              href="https://www.imdb.com/title/tt38363559/?ref_=fn_knf_1"
              title="Foster"
              altText="Foster"
              role={
                <>
                  <span className="font-light italic">Lead</span>
                  <span>Charlie, a young boy left on the doorstep of a recovering addict, James Franco, who must protect him from a ruthless crime lord, Ron Perlman.</span>
                </>
              }
              date="Upcoming"
              image="/assets/foster.jpg"
              rotation={-3}
            />
          </div>
        </section>

        {/* Television */}
        <section className="animate-fade-in stagger-3">
          <SectionHeader>Television</SectionHeader>
          <div>
            <WorkItem
              href="https://www.imdb.com/title/tt31938062/?ref_=fn_t_1"
              title="The Pitt"
              altText="The Pitt"
              role={
                <>
                  <span className="font-light italic">Recurring</span>
                  <span>Tyler Jones, a boy hospitalized after accidentally ingesting his parents' weed gummies.</span>
                </>
              }
              date="2025"
              image="/assets/the-pitt.jpg"
              rotation={2}
            />
          </div>
        </section>

        {/* Press */}
        <section className="animate-fade-in stagger-4">
          <SectionHeader>Press</SectionHeader>
          <div>
            <PressItem
              href="https://deadline.com/2025/09/the-pitt-actor-wesley-river-joins-foster-with-james-franco-1236565948/"
              title="'The Pitt' Actor Wesley River Joins 'Foster' Alongside James Franco"
              source="Deadline"
              year="2025"
            />
          </div>
        </section>

        {/* Representation */}
        <section className="animate-fade-in stagger-5 pb-20">
          <SectionHeader>Representation</SectionHeader>
          <Link href="https://pro.imdb.com/company/co0081852/?ref_=search_search_search_result_1" target="_blank" className="-mx-3 px-3 py-3 link-item-sm flex items-center justify-between">
            <span className="flex items-baseline gap-2">
              <span className="text-muted text-sm">Manager</span>
              <span className="text-foreground">Abby Johnson</span>
            </span>
            <span className="text-muted text-sm">Thruline Entertainment</span>
          </Link>
          <Link href="https://pro.imdb.com/company/co0899181/?ref_=nmcc_contact_repr_1" target="_blank" className="-mx-3 px-3 py-3 link-item-sm flex items-center justify-between">
            <span className="flex items-baseline gap-2">
              <span className="text-muted text-sm">Theatrical Agent</span>
              <span className="text-foreground">Danny Bjelajac</span>
            </span>
            <span className="text-muted text-sm">Love Talent</span>
          </Link>
          <Link href="https://pro.imdb.com/company/co0098138/?ref_=nmcc_contact_repr_3" target="_blank" className="-mx-3 px-3 py-3 link-item-sm flex items-center justify-between">
            <span className="flex items-baseline gap-2">
              <span className="text-muted text-sm">Commercial Agent</span>
              <span className="text-foreground">Sharon Seebach</span>
            </span>
            <span className="text-muted text-sm">John Pierce Agency</span>
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="sticky bottom-0 pt-16 pb-6 animate-bounce-in" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', width: '100vw' }}>
        <div className="absolute inset-0 backdrop-blur-md" style={{ maskImage: 'linear-gradient(to top, black 30%, transparent)', WebkitMaskImage: 'linear-gradient(to top, black 30%, transparent)' }} />
        <div className="relative flex justify-between items-center px-6 md:px-10 max-w-2xl mx-auto">
          <div className="flex gap-5 items-center">
            <Link
              href="https://www.instagram.com/iamwesleyriver"
              target="_blank"
              aria-label="Instagram"
              className="text-foreground opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-200"
            >
              <InstagramIcon />
            </Link>
            <Link
              href="https://x.com/iamwesleyriver"
              target="_blank"
              aria-label="X (Twitter)"
              className="text-foreground opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-200"
            >
              <XIcon />
            </Link>
            <Link
              href="https://www.tiktok.com/@iamwesleyriver"
              target="_blank"
              aria-label="TikTok"
              className="text-foreground opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-200"
            >
              <TikTokIcon />
            </Link>
          </div>
          <Link
            href="https://pro.imdb.com/name/nm16365338/?ref_=tt_cst_4"
            target="_blank"
            aria-label="IMDb Pro"
            className="text-foreground opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-200 flex items-center gap-1"
          >
            <IMDbIcon />
            <ArrowUpRightIcon />
          </Link>
        </div>
      </footer>
    </div>
  );
}
