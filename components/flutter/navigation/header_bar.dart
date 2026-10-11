import 'package:flutter/material.dart';

class HeaderBar extends StatelessWidget {
  const HeaderBar({super.key, required this.title, this.folder, this.actions = const [], this.onTitleTap});
  final String title; final String? folder; final List<Widget> actions; final VoidCallback? onTitleTap;

  @override
  Widget build(BuildContext context) => Container(
    height: 50, color: const Color(0xFF121113), padding: const EdgeInsets.only(left: 30, right: 16),
    child: Row(children: [
      InkWell(onTap: onTitleTap, child: Row(children: [
        const Icon(Icons.laptop_mac, size: 16, color: Color(0xFFA1A1AA)), const SizedBox(width: 8),
        Text(title, style: const TextStyle(color: Colors.white, fontSize: 14)),
        const Icon(Icons.expand_more, size: 14, color: Color(0xFFA1A1AA)),
      ])),
      if (folder != null) Container(
        margin: const EdgeInsets.only(left: 8), padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 4),
        decoration: BoxDecoration(color: const Color(0xFF27272A), borderRadius: BorderRadius.circular(4)),
        child: Text(folder!, style: const TextStyle(color: Color(0xFFA1A1AA), fontSize: 11)),
      ),
      const Spacer(),
      for (final a in actions) Padding(padding: const EdgeInsets.only(left: 16), child: a),
    ]),
  );
}
