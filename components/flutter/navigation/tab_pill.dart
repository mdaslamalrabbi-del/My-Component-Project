import 'package:flutter/material.dart';

class TabPill extends StatelessWidget {
  const TabPill({super.key, required this.label, this.active = false, this.onTap});
  final String label; final bool active; final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) => Semantics(
        selected: active, button: true,
        child: InkWell(
          borderRadius: BorderRadius.circular(8), onTap: onTap,
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
            decoration: BoxDecoration(color: active ? const Color(0xFF141311) : null, borderRadius: BorderRadius.circular(8)),
            child: Text(label, style: const TextStyle(fontSize: 14, color: Colors.white)),
          ),
        ),
      );
}

class TabPillGroup extends StatelessWidget {
  const TabPillGroup({super.key, required this.items, required this.value, required this.onChanged});
  final List<String> items; final String value; final ValueChanged<String> onChanged;
  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.all(8),
        decoration: BoxDecoration(color: const Color(0xFF1C1B19), borderRadius: BorderRadius.circular(12)),
        child: Row(mainAxisSize: MainAxisSize.min, children: [for (final i in items) TabPill(label: i, active: i == value, onTap: () => onChanged(i))]),
      );
}
