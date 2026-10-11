type Node = { name: string; children?: Node[] };

function Row({ node, depth, open, toggle }: { node: Node; depth: number; open: Set<string>; toggle: (n: string) => void }) {
  const isDir = !!node.children;
  const expanded = open.has(node.name);
  return (
    <>
      <NavItem label={node.name} state={isDir ? "default" : depth ? "indented" : "default"}
        icon={isDir ? <FolderIcon /> : undefined} onClick={() => isDir && toggle(node.name)} />
      {isDir && expanded && node.children!.map((c) => <Row key={c.name} node={c} depth={depth + 1} open={open} toggle={toggle} />)}
    </>
  );
}

export function FileTree({ nodes, defaultOpen = [] }: { nodes: Node[]; defaultOpen?: string[] }) {
  const [open, setOpen] = React.useState(new Set(defaultOpen));
  const toggle = (n: string) => setOpen((s) => { const x = new Set(s); x.has(n) ? x.delete(n) : x.add(n); return x; });
  return <nav aria-label="Files" className="flex w-60 flex-col">{nodes.map((n) => <Row key={n.name} node={n} depth={0} open={open} toggle={toggle} />)}</nav>;
}
