export function IconTileSmall({ children }: { children: React.ReactNode }) {
  return (
    <span className="grid size-9 place-items-center rounded-lg bg-[#272729] text-[#D2CFD9] [&>svg]:size-5">
      {children}
    </span>
  );
}

// Usage
<IconTileSmall><Briefcase strokeWidth={1.25} /></IconTileSmall>
