// Styles a real scrollbar. Default thumb #333137, hover #D2CFD9, 6px wide, 4px radius.
export function Scroll({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`overflow-y-auto [scrollbar-color:#333137_transparent] [scrollbar-width:thin]
        [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded
        [&::-webkit-scrollbar-thumb]:bg-[#333137] hover:[&::-webkit-scrollbar-thumb]:bg-[#D2CFD9] ${className}`}
      {...props}
    />
  );
}
