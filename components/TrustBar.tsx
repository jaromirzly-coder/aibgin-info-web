const institutions = [
  "Primary Schools",
  "Secondary Schools",
  "Multi-Academy Trusts",
  "School Districts",
  "After-School Clubs",
  "Youth Centres",
  "Community Learning",
  "Special Ed Institutions",
];

export default function TrustBar() {
  return (
    <div className="bg-white border-b border-slate-100 py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
          Built for every type of child-serving institution
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {institutions.map((inst) => (
            <span
              key={inst}
              className="bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium px-3 py-1.5 rounded-full"
            >
              {inst}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
