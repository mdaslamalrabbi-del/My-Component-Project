import 'package:flutter/material.dart';

class TopNav extends StatelessWidget {
  const TopNav({super.key, required this.title, required this.tabs, required this.tab, required this.onTab, required this.filters, required this.filter, required this.onFilter, required this.onQuery, this.onBack, this.onAdd, this.backAtBottom = false});
  final String title, tab, filter; final List<String> tabs, filters;
  final ValueChanged<String> onTab, onFilter, onQuery; final VoidCallback? onBack, onAdd; final bool backAtBottom;

  Widget _track(List<String> items, String value, ValueChanged<String> on) => Container(
        padding: const EdgeInsets.all(4),
        decoration: BoxDecoration(color: const Color(0xFF121113), borderRadius: BorderRadius.circular(8)),
        child: Row(children: [
          for (final i in items)
            GestureDetector(onTap: () => on(i), child: Container(
              height: 24, padding: const EdgeInsets.symmetric(horizontal: 12), alignment: Alignment.center,
              decoration: BoxDecoration(color: i == value ? const Color(0xFF27272A) : null, borderRadius: BorderRadius.circular(6)),
              child: Text(i, style: TextStyle(fontSize: 14, color: i == value ? Colors.white : const Color(0xFFD2CFD9))))),
        ]),
      );

  @override
  Widget build(BuildContext context) {
    final back = TextButton.icon(onPressed: onBack, icon: const Icon(Icons.arrow_back, size: 16), label: const Text('Go Back', style: TextStyle(fontSize: 12)),
        style: TextButton.styleFrom(backgroundColor: const Color(0xFF27272A), foregroundColor: Colors.white, minimumSize: const Size(0, 32), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8))));
    return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      if (!backAtBottom) back,
      const SizedBox(height: 12),
      Text(title, style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w600, color: Colors.white)),
      const SizedBox(height: 12),
      Row(children: [
        _track(tabs, tab, onTab), const SizedBox(width: 12),
        Container(width: 1, height: 32, color: const Color(0xFF27272A)), const SizedBox(width: 12),
        _track(filters, filter, onFilter), const SizedBox(width: 12),
        Expanded(child: SizedBox(height: 32, child: TextField(onChanged: onQuery, style: const TextStyle(fontSize: 14, color: Colors.white),
          decoration: InputDecoration(hintText: 'Search skills and plugins', prefixIcon: const Icon(Icons.search, size: 16), filled: true, fillColor: const Color(0xFF121113), contentPadding: EdgeInsets.zero,
            border: OutlineInputBorder(borderRadius: BorderRadius.circular(8), borderSide: BorderSide.none))))),
        const SizedBox(width: 12),
        FilledButton(onPressed: onAdd, style: FilledButton.styleFrom(backgroundColor: Colors.white, foregroundColor: const Color(0xFF121113), minimumSize: const Size(0, 32), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8))), child: const Text('Add +')),
      ]),
      if (backAtBottom) ...[const SizedBox(height: 12), back],
    ]);
  }
}
