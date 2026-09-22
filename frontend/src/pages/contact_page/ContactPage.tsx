import { NavBar } from "../../components/nav_bar/Navbar"
import { Footer } from "../../components/footer/Footer"
import { TypingChat } from "../../components/typing_chat/TypingChat"
import { ServicesTabs } from "../../components/services_tabs/ServicesTabs"
import { useState, type ChangeEvent, type SubmitEvent } from "react"

interface Contact {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber?: string,
    subject: string,
    messageContent: string,
}

const emptyForm: Contact = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    messageContent: '',
}

export function ContactPage() {

    // by default, set to emptyForm, where the rule is that is must match <Contact>
    const [contactForm, setContactForm] = useState<Contact>(emptyForm);

    // Rules are in arrow brackets - can be either of these options
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setContactForm((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault(); // preventDefault stops the webpage from doing a hard refresh
        setStatus('submitting');

        try {
            // first tries to post the contact data
            const res = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(contactForm),
            });

            if (!res.ok) {
                throw new Error('Submission failed');
            }

            setStatus('success');
            setContactForm(emptyForm);
        } catch (err) {
            console.error('Error submitting contact form:', err);
            setStatus('error');
        }
    }

    const inputClasses = "font-text text-sm w-full px-3 py-2 border border-solid border-emerald-100 bg-[#f1eee6] rounded-md";
    const labelClasses = "font-text text-xs text-amber-900/70 tracking-wide mb-1 block";

    return(
        // min-h-screen + flex-1 on <main> holds the footer at the bottom of the
        // viewport even when the page is shorter than the screen
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 min-h-screen flex flex-col">

            <NavBar />

        <main className="flex-1">

        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 pt-8 md:pt-16">

            <div className="flex flex-col flex-1 min-w-0 gap-6 md:gap-10">

              <div className="px-3 py-2">
                <h1 className="font-heading font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">How can I help?</h1>
              </div>

              <div className="bg-[#D6D3CC] border border-solid border-emerald-100 rounded-lg p-6 md:p-8 w-full">

                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">

                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                            <label htmlFor="firstName" className={labelClasses}>First Name</label>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                required
                                value={contactForm.firstName}
                                onChange={handleChange}
                                className={inputClasses} />
                        </div>

                        <div className="flex-1">
                            <label htmlFor="lastName" className={labelClasses}>Last Name</label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                required
                                value={contactForm.lastName}
                                onChange={handleChange}
                                className={inputClasses} />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className={labelClasses}>Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={contactForm.email}
                            onChange={handleChange}
                            className={inputClasses} />
                    </div>

                    <div>
                        <label htmlFor="phoneNumber" className={labelClasses}>Phone Number (optional)</label>
                        <input
                            id="phoneNumber"
                            name="phoneNumber"
                            type="tel"
                            value={contactForm.phoneNumber}
                            onChange={handleChange}
                            className={inputClasses} />
                    </div>

                    <div>
                        <label htmlFor="subject" className={labelClasses}>Subject</label>
                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            required
                            value={contactForm.subject}
                            onChange={handleChange}
                            className={inputClasses} />
                    </div>

                    <div>
                        <label htmlFor="messageContent" className={labelClasses}>Message</label>
                        <textarea
                            id="messageContent"
                            name="messageContent"
                            required
                            rows={5}
                            value={contactForm.messageContent}
                            onChange={handleChange}
                            className={inputClasses} />
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="px-6 py-2 md:px-8 md:py-3 font-medium font-text text-sm border border-solid border-emerald-100 bg-[#f1eee6] transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed self-start">
                        {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>

                    {status === 'success' && (
                        <p className="font-text text-sm text-green-700">Thanks for reaching out — I'll get back to you soon.</p>
                    )}
                    {status === 'error' && (
                        <p className="font-text text-sm text-red-700">Something went wrong sending your message. Please try again.</p>
                    )}
                </form>

              </div>
            </div>

            <TypingChat />

        </div>

        <ServicesTabs />

        </main>

            <Footer />
        </div>
    )
}
