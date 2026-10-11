import 'package:flutter/material.dart';

class SearchableMenu extends StatefulWidget {
  const SearchableMenu({super.key, required this.items, this.value, required this.onChanged});
  final List<String> items; final String? value; final ValueChanged<String> onChanged;
  @override State<SearchableMenu> createState() => _SearchableMenuState();
}

class _SearchableMenuState extends State<SearchableMenu> {
  String q = '';
  @override
  Widget build(BuildContext context) {
    final shown = widget.items.where((i) => i.toLowerCase().contains(q.toLowerCase())).toList();
    return Container(
      width: 180, padding: const EdgeInsets.all(4),
      decoration: BoxDecoration(color: const Color(0xFF202022), borderRadius: BorderRadius.circular(8)),
      child: Column(mainAxisSize: MainAxisSize.min, children: [
        Container(
          height: 32, padding: const EdgeInsets.symmetric(horizontal: 8), margin: const EdgeInsets.only(bottom: 4),
          decoration: BoxDecoration(color: const Color(0xFF27272A), borderRadius: BorderRadius.circular(6)),
          child: Row(children: [
            const Icon(Icons.search, size: 14, color: Color(0xFF6C6A64)), const SizedBox(width: 8),
            Expanded(child: TextField(onChanged: (v) => setState(() => q = v), style: const TextStyle(color: Colors.white, fontSize: 12),
              decoration: const InputDecoration(border: InputBorder.none, isDense: true, hintText: 'Search', hintStyle: TextStyle(color: Color(0xFF6C6A64))))),
          ]),
        ),
        ConstrainedBox(constraints: const BoxConstraints(maxHeight: 216), child: ListView(shrinkWrap: true, children: [
          for (final i in shown)
            InkWell(onTap: () => widget.onChanged(i), child: SizedBox(height: 26, child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 8),
              child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
                Text(i, style: const TextStyle(color: Color(0xFFD2CFD9), fontSize: 13)),
                if (i == widget.value) const Icon(Icons.check, size: 14, color: Color(0xFFD2CFD9)),
              ])))),
        ])),
      ]),
    );
  }
}
