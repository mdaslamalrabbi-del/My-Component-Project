import 'package:flutter/material.dart';

class SegItem { final String value, label; final IconData? icon; const SegItem(this.value, this.label, [this.icon]); }

class SegmentedControl extends StatelessWidget {
  const SegmentedControl({super.key, required this.items, required this.value, required this.onChanged, this.iconOnly = false});
  final List<SegItem> items; final String value; final ValueChanged<String> onChanged; final bool iconOnly;

  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.all(8),
        decoration: BoxDecoration(color: const Color(0xFF1F1E1B), borderRadius: BorderRadius.circular(12)),
        child: Row(mainAxisSize: MainAxisSize.min, children: [
          for (final it in items) ...[
            Semantics(
              selected: it.value == value, button: true, label: it.label,
              child: GestureDetector(
                onTap: () => onChanged(it.value),
                child: Container(
                  height: 32, width: iconOnly ? 32 : null,
                  padding: EdgeInsets.symmetric(horizontal: iconOnly ? 0 : 16),
                  decoration: BoxDecoration(
                    color: it.value == value ? const Color(0xFF27272A) : null,
                    border: Border.all(color: it.value == value ? const Color(0xFF333137) : Colors.transparent),
                    borderRadius: BorderRadius.circular(8)),
                  child: Row(mainAxisSize: MainAxisSize.min, mainAxisAlignment: MainAxisAlignment.center, children: [
                    if (it.icon != null) Icon(it.icon, size: 16, color: it.value == value ? Colors.white : const Color(0xFFA09D96)),
                    if (!iconOnly) ...[const SizedBox(width: 6), Text(it.label, style: TextStyle(fontSize: 14, fontWeight: FontWeight.w500, color: it.value == value ? Colors.white : const Color(0xFFA09D96)))],
                  ]),
                ),
              ),
            ),
            if (it != items.last) const SizedBox(width: 6),
          ],
        ]),
      );
}
