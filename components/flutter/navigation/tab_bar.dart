import 'package:flutter/material.dart';

class TabItem { final String id, label; final int? count; const TabItem(this.id, this.label, [this.count]); }

class TabBarX extends StatelessWidget {
  const TabBarX({super.key, required this.tabs, required this.value, required this.onChanged});
  final List<TabItem> tabs; final String value; final ValueChanged<String> onChanged;

  @override
  Widget build(BuildContext context) => Container(
        decoration: const BoxDecoration(border: Border(bottom: BorderSide(color: Color(0xFF333137)))),
        child: Row(children: [
          for (final t in tabs)
            Semantics(
              selected: t.id == value, button: true,
              child: InkWell(
                onTap: () => onChanged(t.id),
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  decoration: BoxDecoration(border: Border(bottom: BorderSide(width: 2, color: t.id == value ? Colors.white : Colors.transparent))),
                  child: Text('${t.label}${t.count != null ? '  · ${t.count}' : ''}',
                      style: TextStyle(fontSize: 14, fontWeight: FontWeight.w500, color: t.id == value ? Colors.white : const Color(0xFF71717A))),
                ),
              ),
            ),
        ]),
      );
}
