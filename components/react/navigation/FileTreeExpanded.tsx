const tree = [
  { name: ".claude-plugin", children: [{ name: "marketplace.json" }, { name: "plugin.json" }] },
  { name: "agents", children: [] },
  { name: "skills", children: [] },
  { name: "LICENSE" },
  { name: "README.md" },
];

// Files at the root use white Medium text (no icon); folders use the muted default.
export function FileTreeExpanded() {
  return (
    <nav aria-label="Files" className="flex w-60 flex-col gap-0.5">
      <FileTree nodes={tree.slice(0, 3)} defaultOpen={[".claude-plugin"]} />
      {tree.slice(3).map((f) => (
        <div key={f.name} className="flex h-8 items-center rounded-md p-2 text-sm font-medium text-white">{f.name}</div>
      ))}
    </nav>
  );
}
