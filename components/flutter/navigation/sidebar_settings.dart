import 'package:flutter/material.dart';

class SettingsSection { final String title; final List<(String id, String label)> items; const SettingsSection(this.title, this.items); }

class SidebarSettings extends StatefulWidget {
  const SidebarSettings({super.key, required this.sections, required this.active, required this.onSelect});
  final List<SettingsSection> sections; final String active; final ValueChanged<String> onSelect;
  @override State<SidebarSettings> createState() => _SidebarSettingsState();
}

class _SidebarSettingsState extends State<SidebarSettings> {
  String q = '';
  @override
  Widget build(BuildContext context) => Container(
        width: 192,
        decoration: BoxDecoration(color: const Color(0xFF181715), border: Border.all(color: const Color(0xFF27272A))),
        child: ListView(padding: const EdgeInsets.all(12), children: [
          SizedBox(height: 32, child: TextField(onChanged: (v) => setState(() => q = v), style: const TextStyle(fontSize: 14, color: Colors.white),
              decoration: InputDecoration(hintText: 'Search', filled: true, fillColor: const Color(0xFF27272A), contentPadding: const EdgeInsets.symmetric(horizontal: 8), border: OutlineInputBorder(borderRadius: BorderRadius.circular(8), borderSide: BorderSide.none)))),
          for (final sec in widget.sections) ...[
            Padding(padding: const EdgeInsets.fromLTRB(8, 24, 8, 12), child: Text(sec.title.toUpperCase(), style: const TextStyle(fontSize: 12, color: Color(0xFFA1A1AA)))),
            for (final it in sec.items.where((i) => i.$2.toLowerCase().contains(q.toLowerCase())))
              InkWell(onTap: () => widget.onSelect(it.$1), borderRadius: BorderRadius.circular(8),
                child: Container(height: 32, alignment: Alignment.centerLeft, padding: const EdgeInsets.symmetric(horizontal: 8),
                  decoration: BoxDecoration(color: it.$1 == widget.active ? const Color(0xFF27272A) : null, borderRadius: BorderRadius.circular(8)),
                  child: Text(it.$2, style: TextStyle(fontSize: 14, color: it.$1 == widget.active ? Colors.white : const Color(0xFFA1A1AA))))),
          ],
        ]),
      );
}
