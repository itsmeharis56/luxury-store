function PageHeading({ label, title, description }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
      <p className="text-xs uppercase tracking-[0.3em] text-[#c9ad78]">
        {label}
      </p>

      <h1 className="mt-5 font-serif text-5xl text-[#f5f1e8] sm:text-7xl">
        {title}
      </h1>

      <p className="mt-6 max-w-xl leading-8 text-stone-400">
        {description}
      </p>
    </section>
  );
}

export default PageHeading;