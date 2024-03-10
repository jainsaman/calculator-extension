import { Input } from "../ui/input";
import { useState } from "react";

interface InputDetailProps {
  title: string;
  unit?: string;
  value?: string;
  valueId: string;
}

export default function InputDetail({
  title,
  unit,
  value,
  valueId,
}: InputDetailProps) {
  const [inputValue, setInputValue] = useState(value);
  return (
    <div className="w-full flex justify-between items-center">
      <div className="w-2/5 text-slate-900 font-semibold text-sm">{title}</div>
      <div className="w-1/10 text-slate-500 font-medium text-[10px]">
        {unit}
      </div>
      <Input
        id={valueId}
        className="w-2/5 text-slate-900 font-medium text-xs"
        type="text"
        defaultValue={value}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}
