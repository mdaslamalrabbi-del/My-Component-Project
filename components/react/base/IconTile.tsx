export function IconTile({ children }: { children: React.ReactNode }) {
  return (
    <span className="grid size-10 place-items-center rounded-lg bg-[#272729] text-[#D2CFD9] [&>svg]:size-4">
      {children}
    </span>
  );
}

// Usage
<IconTile><Network strokeWidth={1.25} /></IconTile>
