export function SidebarSettings({ sections, active, onSelect }: { sections: { title: string; items: { id: string; label: string }[] }[]; active: string; onSelect: (id: string) => void }) {
  const [q, setQ] = React.useState("");
  return (
    <aside className="flex h-full w-48 flex-col gap-3 border border-[#27272A] bg-[#181715]">
      <div className="p-3 pb-0"><input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search" aria-label="Search settings" className="h-8 w-full rounded-lg bg-[#27272A] px-2 text-sm text-white" /></div>
      <div className="flex flex-col gap-6 px-3 pb-3">
        {sections.map((sec) => (
          <section key={sec.title} className="flex flex-col gap-3">
            <h3 className="px-2 pt-3 text-xs uppercase text-[#A1A1AA]">{sec.title}</h3>
            <ul className="flex flex-col gap-px">
              {sec.items.filter((i) => i.label.toLowerCase().includes(q.toLowerCase())).map((i) => (
                <li key={i.id}><button onClick={() => onSelect(i.id)} className={`h-8 w-full rounded-lg px-2 text-left text-sm ${i.id === active ? "bg-[#27272A] text-white" : "text-[#A1A1AA] hover:bg-[#181715]"}`}>{i.label}</button></li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </aside>
  );
}
