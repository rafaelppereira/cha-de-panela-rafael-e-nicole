interface CounterTimeProps {
  value: number
  label: string
}

export function CounterTime({ value, label }: CounterTimeProps) {
  return (
    <div className="flex w-[4.8rem] lg:w-[6.5rem] flex-col items-center justify-center gap-1 rounded-md bg-white py-3 lg:py-4 text-[#baaa9e]">
      <h2 className="text-3xl font-semibold">{String(value).padStart(2, "0")}</h2>
      <span className="text-xs lg:text-sm font-medium">{label}</span>
    </div>
  );
}