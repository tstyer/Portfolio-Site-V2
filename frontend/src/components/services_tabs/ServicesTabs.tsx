import { useState, useRef, type KeyboardEvent } from "react";

interface Service {
    id: string,
    label: string,
    body: string,
}

const services: Service[] = [
    {
        id: 'market-research',
        label: 'Market Research',
        body: "I'll map your market before a line of code is written: who your customers actually are, what your competitors are getting right, and where the gaps sit. You get a customer persona and the analytics behind it, so every decision that follows is grounded in evidence rather than guesswork.",
    },
    {
        id: 'design',
        label: 'Design',
        body: "In Figma, I'll take you from low-fidelity wireframes through to a high-fidelity prototype you can click through. You review and feed back at each stage, so the layout is settled and agreed before any development starts.",
    },
    {
        id: 'build',
        label: 'Build',
        body: "I build with React or React Native on the front end, and Node, Express and MongoDB behind it, all in TypeScript - plus Next.js where server-side rendering genuinely earns its place. The result is a site or app that's fast, typed end to end, and straightforward to maintain.",
    },
    {
        id: 'write',
        label: 'Write',
        body: "Words do as much work as the interface. I write your page copy, product descriptions and blog content, structured around the keywords your customers actually search for - so your pages get found as well as read.",
    },
    {
        id: 'deploy',
        label: 'Deploy',
        body: "I deploy to AWS by default, with a pipeline that ships updates without taking the site down. If you'd rather stay with another provider or keep the setup simpler, that's a conversation - the infrastructure should fit your budget and your team, not the other way round.",
    },
];

export function ServicesTabs() {
    const [active, setActive] = useState(0);

    // Holds a reference to each tab button so arrow keys can move focus between them.
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    // Arrow keys, Home and End move between tabs - the behaviour people expect
    // from tabs, and what keyboard users need to reach every panel.
    const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
        let next: number | null = null;

        if (e.key === 'ArrowRight') next = (i + 1) % services.length;
        if (e.key === 'ArrowLeft') next = (i - 1 + services.length) % services.length;
        if (e.key === 'Home') next = 0;
        if (e.key === 'End') next = services.length - 1;

        if (next === null) return;

        e.preventDefault(); // stop the arrow key also scrolling the page
        setActive(next);
        tabRefs.current[next]?.focus();
    };

    const current = services[active];

    return (
        <section className="pt-16 md:pt-24">

            <p className="font-text text-xs sm:text-sm text-amber-900/70 tracking-wide">// SERVICES</p>
            <h2 className="font-heading font-bold text-2xl mt-2">What I can do for you...</h2>
            <div className="border-t border-black/10 mt-6 mb-8 md:mb-10" />

            <div role="tablist" aria-label="Services" className="flex flex-wrap gap-3">
                {services.map((service, i) => (
                    <button
                        key={service.id}
                        ref={(el) => { tabRefs.current[i] = el; }}
                        role="tab"
                        id={`tab-${service.id}`}
                        aria-selected={active === i}
                        aria-controls={`panel-${service.id}`}
                        // Only the active tab is in the tab order; arrow keys reach the rest
                        tabIndex={active === i ? 0 : -1}
                        onClick={() => setActive(i)}
                        onKeyDown={(e) => handleKeyDown(e, i)}
                        className={`px-4 py-2 md:px-6 md:py-3 font-medium font-text text-xs sm:text-sm border border-solid border-emerald-100 cursor-pointer transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f1eee6] ${
                            active === i
                                // the selected tab sits in the "pressed in" state
                                ? 'bg-[#D6D3CC] shadow-none translate-x-[3px] translate-y-[3px]'
                                : 'bg-[#f1eee6] shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]'
                        }`}
                    >
                        {service.label}
                    </button>
                ))}
            </div>

            {current && (
                // min-h keeps the panel a steady height so the footer doesn't
                // jump around as you switch between longer and shorter answers
                <div
                    role="tabpanel"
                    id={`panel-${current.id}`}
                    aria-labelledby={`tab-${current.id}`}
                    tabIndex={0}
                    className="bg-[#D6D3CC] border border-solid border-emerald-100 rounded-lg p-6 md:p-8 mt-6 min-h-32 max-w-4xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                    <p className="font-text text-sm sm:text-base leading-relaxed text-amber-900/80">
                        {current.body}
                    </p>
                </div>
            )}

        </section>
    )
}
