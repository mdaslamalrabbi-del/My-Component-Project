import 'package:flutter/material.dart';

class FileTreeExpanded extends StatelessWidget {
  const FileTreeExpanded({super.key});
  @override
  Widget build(BuildContext context) => SizedBox(width: 240, child: Column(children: [
    const FileTree(defaultOpen: {'.claude-plugin'}, nodes: [
      FileNode('.claude-plugin', [FileNode('marketplace.json'), FileNode('plugin.json')]),
      FileNode('agents', []), FileNode('skills', []),
    ]),
    for (final f in ['LICENSE', 'README.md'])
      Container(height: 32, padding: const EdgeInsets.all(8), alignment: Alignment.centerLeft,
        child: Text(f, style: const TextStyle(color: Colors.white, fontSize: 14, fontWeight: FontWeight.w500))),
  ]));
}
