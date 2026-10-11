import 'package:flutter/material.dart';

class FileNode { const FileNode(this.name, [this.children]); final String name; final List<FileNode>? children; }

class FileTree extends StatefulWidget {
  const FileTree({super.key, required this.nodes, this.defaultOpen = const {}});
  final List<FileNode> nodes; final Set<String> defaultOpen;
  @override State<FileTree> createState() => _FileTreeState();
}

class _FileTreeState extends State<FileTree> {
  late final Set<String> open = {...widget.defaultOpen};

  List<Widget> _rows(FileNode n, int depth) {
    final dir = n.children != null;
    return [
      NavItem(label: n.name, icon: dir ? Icons.folder_open : null,
        state: !dir && depth > 0 ? NavState.indented : NavState.normal,
        onTap: dir ? () => setState(() => open.contains(n.name) ? open.remove(n.name) : open.add(n.name)) : null),
      if (dir && open.contains(n.name)) for (final c in n.children!) ..._rows(c, depth + 1),
    ];
  }

  @override
  Widget build(BuildContext context) => SizedBox(width: 240, child: Column(children: [for (final n in widget.nodes) ..._rows(n, 0)]));
}
