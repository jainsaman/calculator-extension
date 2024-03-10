interface StaticDetailProps {
  id: string;
  title: string;
  unit?: string | undefined | null;
  value?: string;
}

export default function StaticDetail({
  id,
  title,
  unit,
  value,
}: StaticDetailProps) {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="w-2/5 text-slate-900 font-semibold text-sm">{title}</div>
      {unit ? (
        <div className="w-1/10 text-slate-500 font-medium text-[10px]">
          {unit}
        </div>
      ) : (
        <div className="grow"></div>
      )}
      <div
        className="w-2/5 text-slate-900 font-medium text-sm text-right"
        id={id}
      >
        {value}
      </div>
    </div>
  );
}
