import { useState } from "react";
import { View } from "react-native";

type Node = { name: string; children?: Node[] };

function Row({ node, depth, open, toggle }: { node: Node; depth: number; open: Set<string>; toggle: (n: string) => void }) {
  const isDir = !!node.children;
  return (
    <>
      <NavItem label={node.name} state={!isDir && depth ? "indented" : "default"} icon={isDir ? <FolderIcon /> : undefined}
        onPress={() => isDir && toggle(node.name)} />
      {isDir && open.has(node.name) && node.children!.map((c) => <Row key={c.name} node={c} depth={depth + 1} open={open} toggle={toggle} />)}
    </>
  );
}

export function FileTree({ nodes, defaultOpen = [] }: { nodes: Node[]; defaultOpen?: string[] }) {
  const [open, setOpen] = useState(new Set(defaultOpen));
  const toggle = (n: string) => setOpen((s) => { const x = new Set(s); x.has(n) ? x.delete(n) : x.add(n); return x; });
  return <View style={{ width: 240 }}>{nodes.map((n) => <Row key={n.name} node={n} depth={0} open={open} toggle={toggle} />)}</View>;
}
