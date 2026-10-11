import 'package:flutter/material.dart';

enum HeaderType { task, breadcrumb, breadcrumbActions }

class HeaderBarProject extends StatelessWidget {
  const HeaderBarProject({super.key, this.type = HeaderType.task, this.title = 'New task', this.parent = 'Projects', this.current, this.onToggleSidebar, this.actions = const []});
  final HeaderType type; final String title, parent; final String? current; final VoidCallback? onToggleSidebar; final List<Widget> actions;

  @override
  Widget build(BuildContext context) => Container(
    height: 56, padding: const EdgeInsets.symmetric(horizontal: 24),
    decoration: const BoxDecoration(border: Border(bottom: BorderSide(color: Color(0xFF27272A)))),
    child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
      if (type == HeaderType.task)
        Row(children: [Text(title, style: const TextStyle(color: Colors.white, fontSize: 16, fontWeight: FontWeight.w500)), const Icon(Icons.expand_more, size: 15, color: Color(0xFFA1A1AA))])
      else
        Row(children: [
          Text('$parent /  ', style: const TextStyle(color: Color(0xFFA1A1AA), fontSize: 14)),
          Text(current ?? '', style: const TextStyle(color: Colors.white, fontSize: 16, fontWeight: FontWeight.w500)),
        ]),
      if (type == HeaderType.breadcrumbActions)
        Row(children: [for (final a in actions) Padding(padding: const EdgeInsets.only(left: 12), child: a)])
      else
        IconButton(onPressed: onToggleSidebar, icon: const Icon(Icons.view_sidebar_outlined, size: 20, color: Color(0xFFA1A1AA)), tooltip: 'Toggle sidebar'),
    ]),
  );
}
