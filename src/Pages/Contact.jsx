import { useState } from "react";

const emailAddress = "itsmeharis11@gmail.com";

function Contact() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = form.get("name").trim();
    const email = form.get("email").trim();
    const subject = form.get("subject");
    const message = form.get("message").trim();

    if (!name || !message) {
      setNotice("Please enter your name and message.");
      return;
    }

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n");

    const mailtoLink =
      `mailto:${emailAddress}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    setNotice(
      "Please send the draft from your email app. If no app opens, use the email address shown on this page."
    );

    window.location.href = mailtoLink;
  }

  const inputStyle =
    "mt-2 w-full border border-black/20 bg-white/60 px-4 py-3 text-sm text-[#22221e] outline-none transition-colors focus:border-[#987744] focus:ring-1 focus:ring-[#987744]";

  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#22221e]">
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#806339]">
          Get in touch
        </p>

        <h1 className="mt-5 font-serif text-5xl sm:text-7xl">
          A conversation
          <br />
          <span className="italic text-[#987744]">
            starts here.
          </span>
        </h1>

        <p className="mt-6 max-w-xl leading-8 text-stone-600">
          Have feedback on Luxury Store or a website idea of your
          own? Tell me what you have in mind.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          {/* Contact information */}
          <aside className="bg-[#121210] p-7 text-[#f5f1e8] sm:p-10 lg:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#c9ad78]">
              Let's connect
            </p>

            <h2 className="mt-5 font-serif text-3xl">
              Haris Imran
            </h2>

            <p className="mt-3 text-sm leading-7 text-stone-400">
              Frontend developer building responsive websites
              with React and Tailwind CSS.
            </p>

            <div className="mt-10 border-t border-white/10 pt-6">
              <h3 className="text-[10px] uppercase tracking-widest text-[#c9ad78]">
                Email
              </h3>

              <a
                href={`mailto:${emailAddress}`}
                className="mt-3 inline-block break-all text-sm transition-colors hover:text-[#c9ad78]"
              >
                {emailAddress}
              </a>
            </div>

            <div className="mt-6 border-t border-white/10 pt-6">
              <h3 className="text-[10px] uppercase tracking-widest text-[#c9ad78]">
                Based in
              </h3>

              <p className="mt-3 text-sm text-stone-300">
                Faisalabad, Pakistan
              </p>
            </div>

            <div className="mt-6 border-t border-white/10 pt-6">
              <h3 className="text-[10px] uppercase tracking-widest text-[#c9ad78]">
                Find me online
              </h3>

              <div className="mt-4 flex flex-wrap gap-5 text-sm">
                <a
                  href="https://www.linkedin.com/in/haris-imran-a4b672257"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-[#c9ad78]/40 pb-1 hover:text-[#c9ad78]"
                >
                  LinkedIn ↗
                </a>

                <a
                  href="https://github.com/itsmeharis56"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-[#c9ad78]/40 pb-1 hover:text-[#c9ad78]"
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            <p className="mt-10 text-xs leading-6 text-stone-400">
              Luxury Store is a portfolio demo. No real purchases
              or payments are processed.
            </p>
          </aside>

          {/* Email enquiry form */}
          <div className="border border-black/10 p-6 sm:p-10 lg:col-span-3">
            <h2 className="font-serif text-3xl">
              Tell me about your idea.
            </h2>

            <p className="mt-3 text-sm leading-7 text-stone-600">
              This form prepares an email draft in your email app.
              It does not send a message automatically.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-xs uppercase tracking-widest"
                  >
                    Your name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    required
                    maxLength={100}
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-xs uppercase tracking-widest"
                  >
                    Email address
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                    maxLength={254}
                    className={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="text-xs uppercase tracking-widest"
                >
                  What is it about?
                </label>

                <select
                  id="contact-subject"
                  name="subject"
                  defaultValue=""
                  required
                  className={inputStyle}
                >
                  <option value="" disabled>
                    Choose a topic
                  </option>
                  <option value="Website project enquiry">
                    A website project
                  </option>
                  <option value="Luxury Store feedback">
                    Feedback on Luxury Store
                  </option>
                  <option value="Collaboration enquiry">
                    Collaboration
                  </option>
                  <option value="General enquiry">
                    Something else
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="text-xs uppercase tracking-widest"
                >
                  Your message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  placeholder="Share your idea, requirements, or feedback..."
                  required
                  maxLength={1500}
                  className={`${inputStyle} resize-y`}
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-between gap-5 bg-[#22221e] px-6 py-4 text-xs uppercase tracking-widest text-white transition-colors hover:bg-[#806339]"
              >
                Open email draft
                <span aria-hidden="true">→</span>
              </button>

              <p
                role="status"
                className="text-sm leading-7 text-[#806339]"
              >
                {notice}
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;