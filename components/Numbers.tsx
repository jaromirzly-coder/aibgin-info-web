const numbers = [
  { value: "100+", label: "patent claims" },
  { value: "2",    label: "applications filed in 2026" },
  { value: "7",    label: "layers of AIB.core" },
  { value: "10",   label: "levels, S1 to S10" },
  { value: "0",    label: "ads" },
  { value: "1",    label: "AIB. Yours." },
];

export default function Numbers() {
  return (
    <section aria-label="AIB.core in numbers" className="bg-surface border-b border-rule">
      <dl className="max-w-6xl mx-auto px-4 sm:px-7 py-12 sm:py-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10">
        {numbers.map((n) => (
          <div key={n.label} className="min-w-0">
            <dt className="headline text-ink text-5xl sm:text-[3.4rem]">{n.value}</dt>
            <dd className="mt-2 text-sm text-soft">{n.label}</dd>
          </div>
        ))}
      </dl>
      <p className="max-w-6xl mx-auto px-4 sm:px-7 pb-10 -mt-2 text-sm text-faint">
        Powered by AIB.core · Patent pending — over 100 patent claims, two applications filed in 2026.
      </p>
    </section>
  );
}
