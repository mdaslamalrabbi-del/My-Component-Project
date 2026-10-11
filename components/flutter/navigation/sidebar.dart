import 'package:flutter/material.dart';

enum SidebarMode { standard, responsive, code }

class AppSidebar extends StatelessWidget {
  const AppSidebar({super.key, this.mode = SidebarMode.standard, required this.tab, required this.onTab, required this.userName, required this.avatar, this.children = const []});
  final SidebarMode mode; final String tab, userName; final ValueChanged<String> onTab; final ImageProvider avatar; final List<Widget> children;

  @override
  Widget build(BuildContext context) {
    final rail = mode == SidebarMode.responsive;
    return Container(
      width: rail ? 56 : 264,
      decoration: BoxDecoration(color: const Color(0xFF181715), border: Border.all(color: const Color(0xFF27272A))),
      child: Column(children: [
        Padding(padding: const EdgeInsets.all(12), child: ModeSwitch(value: tab, onChanged: onTab, compact: rail)),
        Expanded(child: ListView(padding: const EdgeInsets.symmetric(horizontal: 12), children: children)),
        Container(
          padding: const EdgeInsets.all(12),
          decoration: const BoxDecoration(border: Border(top: BorderSide(color: Color(0xFF27272A)))),
          child: Row(children: [
            ClipRRect(borderRadius: BorderRadius.circular(3), child: Image(image: avatar, width: 20, height: 20)),
            if (!rail) ...[const SizedBox(width: 8), Expanded(child: Text(userName, style: const TextStyle(fontSize: 14, color: Color(0xFFD2CFD9)))), const Icon(Icons.expand_more, size: 16, color: Color(0xFFA1A1AA))],
          ]),
        ),
      ]),
    );
  }
}
