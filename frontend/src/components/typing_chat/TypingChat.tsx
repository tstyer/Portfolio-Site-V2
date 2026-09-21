import { useState, useEffect } from "react";

interface Message {
    from: 'visitor' | 'travis',
    text: string,
}

const conversation: Message[] = [
    { from: 'visitor', text: "Hey Travis, can you help me build my website?" },
    { from: 'travis', text: "Hey, sure thing! When are you free to chat?" },
];

const TYPING_SPEED = 45;   // milliseconds per character
const PAUSE_BETWEEN = 900; // pause after a message finishes, before the reply starts

export function TypingChat() {
    // Which message is currently being typed, and how much of it is visible so far.
    const [index, setIndex] = useState(0);
    const [charCount, setCharCount] = useState(0);
    const [done, setDone] = useState(false);

    useEffect(() => {
        // Anyone who has asked their OS to reduce motion gets the finished
        // conversation straight away instead of the animation.
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setIndex(conversation.length);
            setDone(true);
            return;
        }

        if (index >= conversation.length) {
            setDone(true);
            return;
        }

        const current = conversation[index];
        if (!current) return;

        // Still typing this message - reveal one more character.
        if (charCount < current.text.length) {
            const timer = setTimeout(() => setCharCount((c) => c + 1), TYPING_SPEED);
            return () => clearTimeout(timer); // cleanup stops a stray timer if this re-runs
        }

        // Message finished - wait, then start the next one.
        const timer = setTimeout(() => {
            setIndex((i) => i + 1);
            setCharCount(0);
        }, PAUSE_BETWEEN);
        return () => clearTimeout(timer);
    }, [index, charCount]);

    // Messages before the current one are shown whole; the current one is sliced.
    const visible = conversation.slice(0, index + 1).map((msg, i) => ({
        from: msg.from,
        text: i < index ? msg.text : msg.text.slice(0, charCount),
    }));

    return (
        <div className="w-full max-w-md">

            {/* The animation is decorative, so it is hidden from screen readers and
                the full conversation is provided here as plain text instead. */}
            <div className="sr-only">
                {conversation.map((msg) => (
                    <p key={msg.text}>{msg.from === 'visitor' ? 'Visitor' : 'Travis'}: {msg.text}</p>
                ))}
            </div>

            {/* min-h reserves room for both bubbles so the page doesn't jump
                as the second message appears */}
            <div aria-hidden="true" className="flex flex-col gap-4 min-h-[200px]">
                {visible.map((msg, i) => (
                    <div
                        key={i}
                        className={`max-w-[85%] ${msg.from === 'visitor' ? 'self-start' : 'self-end'}`}
                    >
                        <p className="font-text text-xs text-amber-900/60 mb-1 px-1">
                            {msg.from === 'visitor' ? 'Them' : 'Travis'}
                        </p>
                        <div
                            className={`border border-solid border-emerald-100 rounded-lg px-4 py-3 shadow-[3px_3px_0px_black] ${
                                msg.from === 'visitor' ? 'bg-[#D6D3CC]' : 'bg-[#f1eee6]'
                            }`}
                        >
                            <p className="font-text text-sm leading-relaxed">
                                {msg.text}
                                {/* caret only on the message currently being typed */}
                                {i === index && !done && (
                                    <span className="animate-caret ml-0.5">|</span>
                                )}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}
