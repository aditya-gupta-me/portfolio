export default function StatusBadge() {
  return (
    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 text-xs font-medium">
      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
      Working
    </div>
  );
}
