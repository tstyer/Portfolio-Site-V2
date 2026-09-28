import { useEffect, useId, useState, useSyncExternalStore } from 'react';
import './keyboard_hero.css';

// Change these phrases to customise the introduction.
const phrases = ['SEO copywriter', 'Website developer', 'Product builder'];
const motionQuery = '(prefers-reduced-motion: reduce)';

function subscribeToMotionPreference(onChange: () => void) {
    const preference = window.matchMedia(motionQuery);
    preference.addEventListener('change', onChange);
    return () => preference.removeEventListener('change', onChange);
}

function prefersReducedMotion() {
    return window.matchMedia(motionQuery).matches;
}

interface Key {
    label: string;
    code: string;
    units: number;
}

const key = (label: string, units = 1, code = label.toLowerCase()): Key => ({ label, code, units });
const letters = (value: string) => [...value].map((letter) => key(letter));

const rows: Key[][] = [
    [key('esc'), ...letters('1234567890'), key('-'), key('='), key('⌫', 2, 'backspace')],
    [key('tab', 1.5), ...letters('QWERTYUIOP'), key('['), key(']'), key('\\', 1.5)],
    [key('caps', 1.75), ...letters('ASDFGHJKL'), key(';'), key("'"), key('enter', 2.25)],
    [key('shift', 2.25), ...letters('ZXCVBNM'), key(','), key('.'), key('/'), key('shift', 2.75, 'right-shift')],
    [key('ctrl', 1.25), key('⌘', 1.25, 'meta'), key('alt', 1.25), key('', 6.25, 'space'), key('alt', 1.25, 'right-alt'), key('fn', 1.25), key('☰', 1.25, 'menu'), key('ctrl', 1.25, 'right-ctrl')],
];

const positionedKeys = rows.flatMap((row, rowIndex) => {
    let x = 14;
    return row.map((keyboardKey) => {
        const positionedKey = { ...keyboardKey, x, y: 12 + rowIndex * 28, width: keyboardKey.units * 24 - 4 };
        x += keyboardKey.units * 24;
        return positionedKey;
    });
});

interface AnimationState {
    phraseIndex: number;
    length: number;
    deleting: boolean;
    pressedKey: string | null;
}

export function KeyboardHero() {
    const id = useId();
    const reducedMotion = useSyncExternalStore(subscribeToMotionPreference, prefersReducedMotion, () => true);
    const [paused, setPaused] = useState(false);
    const [animation, setAnimation] = useState<AnimationState>({
        phraseIndex: 0,
        length: 0,
        deleting: false,
        pressedKey: null,
    });

    const phrase = phrases[animation.phraseIndex];
    const text = reducedMotion ? phrases[0] : phrase.slice(0, animation.length);
    const pressedKey = reducedMotion || paused ? null : animation.pressedKey;

    useEffect(() => {
        if (reducedMotion || paused) return;

        let next: AnimationState;
        let delay: number;

        if (animation.pressedKey !== null) {
            next = { ...animation, pressedKey: null };
            delay = animation.deleting ? 45 : 110;
        } else if (animation.deleting) {
            next = animation.length > 0
                ? { ...animation, length: animation.length - 1, pressedKey: 'backspace' }
                : { phraseIndex: (animation.phraseIndex + 1) % phrases.length, length: 0, deleting: false, pressedKey: null };
            delay = animation.length > 0 ? 35 : 500;
        } else if (animation.length < phrase.length) {
            const character = phrase[animation.length];
            next = { ...animation, length: animation.length + 1, pressedKey: character === ' ' ? 'space' : character.toLowerCase() };
            delay = animation.length === 0 ? 500 : 85;
        } else {
            next = { ...animation, deleting: true };
            delay = 2000;
        }

        const timer = window.setTimeout(() => setAnimation(next), delay);
        return () => window.clearTimeout(timer);
    }, [animation, paused, phrase, reducedMotion]);

    return (
        <figure className="keyboard-hero">
            <figcaption className="sr-only">
                An illustrated keyboard introducing Travis as an SEO copywriter, website developer, and product builder.
            </figcaption>

            <svg className="keyboard-hero__illustration" viewBox="0 0 480 380" aria-hidden="true" focusable="false">
                <defs>
                    <filter id={`${id}-board-shadow`} x="-20%" y="-30%" width="150%" height="170%">
                        <feDropShadow dx="0" dy="9" stdDeviation="6" floodColor="#51473c" floodOpacity=".18" />
                    </filter>
                    <filter id={`${id}-bubble-shadow`} x="-10%" y="-40%" width="120%" height="190%">
                        <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#51473c" floodOpacity=".12" />
                    </filter>
                </defs>

                <ellipse cx="258" cy="270" rx="192" ry="66" fill="#dfd8cc" opacity=".3" transform="rotate(-15 258 270)" />

                <g className="keyboard-hero__doodles" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <g transform="translate(350 40) rotate(-12)">
                        <circle cx="0" cy="0" r="6" />
                        <path d="m4 4 6 6" />
                    </g>
                    <g transform="translate(378 25) rotate(-8)">
                        <path d="M0 0h21v15H9l-5 5v-5H0Z M5 5h11 M5 9h8" />
                    </g>
                    <path d="m420 28-5 5 5 5 m13-10 5 5-5 5 m-5-12-3 14" />
                    <path d="m32 157-5 5 5 5 m12-10 5 5-5 5 m-5-12-3 14" />
                    <circle cx="69" cy="141" r="6" />
                    <path d="m73 146 6 6 M303 43l-3-5 M309 41l1-6 M315 44l4-3" />
                </g>

                <g transform="matrix(.98 -.28 .52 .82 8 210)">
                    <g filter={`url(#${id}-board-shadow)`}>
                        <rect x="0" y="12" width="388" height="156" rx="11" fill="#aaa295" stroke="#787269" strokeWidth="1.4" />
                        <path d="M12 166h361" fill="none" stroke="#c6bdae" strokeWidth="2" />
                        <rect width="388" height="156" rx="11" fill="#d8d1c5" stroke="#787269" strokeWidth="1.4" />
                        <rect x="7" y="6" width="374" height="145" rx="7" fill="#c8c0b3" stroke="#bab1a3" />
                    </g>

                    {positionedKeys.map((keyboardKey) => {
                        const isPressed = pressedKey === keyboardKey.code;
                        const modifier = keyboardKey.units > 1 && keyboardKey.code !== 'space';

                        return (
                            <g key={keyboardKey.code} transform={`translate(${keyboardKey.x} ${keyboardKey.y})`} className={`keyboard-hero__key${modifier ? ' keyboard-hero__key--modifier' : ''}${isPressed ? ' keyboard-hero__key--pressed' : ''}`} data-key={keyboardKey.code} data-pressed={isPressed}>
                                <rect className="keyboard-hero__key-base" y="5" width={keyboardKey.width} height="21" rx="3" />
                                <g className="keyboard-hero__key-top">
                                    <rect className="keyboard-hero__key-face" width={keyboardKey.width} height="21" rx="3" />
                                    <path d={`M3 3h${keyboardKey.width - 6}`} stroke="#fffaf2" strokeOpacity=".7" strokeWidth="1" />
                                    <text x={keyboardKey.width / 2} y="13.5" textAnchor="middle" className="keyboard-hero__key-label">{keyboardKey.label}</text>
                                    {keyboardKey.code === 'space' && <path d={`M${keyboardKey.width / 2 - 12} 14h24`} stroke="#b5ad9f" strokeWidth="1.3" strokeLinecap="round" />}
                                </g>
                            </g>
                        );
                    })}
                </g>

                <g filter={`url(#${id}-bubble-shadow)`}>
                    <rect x="37" y="70" width="400" height="49" rx="24.5" fill="#fbfaf6" stroke="#918c80" strokeWidth="1.1" />
                </g>
                <g fill="none" stroke="#8a918e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m65 89-5 5 5 5 m13-10 5 5-5 5 m-6-13-3 16" />
                </g>
                <text x="98" y="99" className="keyboard-hero__typed-word">{text}<tspan className={`keyboard-hero__caret${paused || reducedMotion ? ' keyboard-hero__caret--still' : ''}`}>│</tspan></text>
                <circle cx="412" cy="94.5" r="3" fill="#9cae9e" />
            </svg>

            <div className="keyboard-hero__footer">
                <span aria-hidden="true">WEB · WORDS · PRODUCTS</span>
                {!reducedMotion && (
                    <button type="button" className="keyboard-hero__toggle" onClick={() => setPaused(!paused)} aria-label={paused ? 'Resume keyboard animation' : 'Pause keyboard animation'}>
                        <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                            {paused ? <path d="m5 3 8 5-8 5Z" fill="currentColor" /> : <path d="M5 3v10M11 3v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />}
                        </svg>
                        {paused ? 'Play' : 'Pause'}
                    </button>
                )}
            </div>
        </figure>
    );
}
