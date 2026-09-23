import { Compass } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border-4 border-sky-100 border-t-sky-600 animate-spin"></div>
        <Compass className="w-7 h-7 text-sky-600 absolute" />
      </div>
      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
        Loading Al Raheeq Tourism...
      </p>
    </div>
  );
}
