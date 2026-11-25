function StatCard({ title, value, description, icon, color, growth }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2 className="mt-3 text-2xl font-bold text-slate-900">
            {value}
          </h2>
        </div>

        <div className={`rounded-xl p-3 ${color}`}>
          {icon}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-2">
        <p className="text-xs text-slate-500">
          {description}
        </p>

        <span className="flex items-center gap-1 text-xs font-semibold text-green-600">
          <ArrowUpRight size={14} />
          {growth}
        </span>
      </div>

    </div>
  );
}

export default StatCard;
