import 'package:flutter/material.dart';

class PaneTab extends StatelessWidget {
  const PaneTab({super.key, required this.label, this.icon = Icons.public, this.active = false, this.preview = false, required this.onSelect, required this.onClose});
  final String label; final IconData icon; final bool active, preview; final VoidCallback onSelect, onClose;

  @override
  Widget build(BuildContext context) => Container(
    height: 22, constraints: const BoxConstraints(maxWidth: 197), padding: const EdgeInsets.only(left: 6, right: 8),
    decoration: BoxDecoration(color: active ? const Color(0xFF27272A) : null, borderRadius: BorderRadius.circular(6)),
    child: Row(mainAxisSize: MainAxisSize.min, children: [
      Flexible(child: InkWell(onTap: onSelect, child: Row(mainAxisSize: MainAxisSize.min, children: [
        Icon(icon, size: 12, color: const Color(0xFFD2CFD9)), const SizedBox(width: 6),
        Flexible(child: Text(label, overflow: TextOverflow.ellipsis,
          style: TextStyle(fontSize: 14, color: active ? Colors.white : const Color(0xFFD2CFD9), fontStyle: preview ? FontStyle.italic : FontStyle.normal))),
      ]))),
      const SizedBox(width: 6),
      InkWell(onTap: onClose, child: const Icon(Icons.close, size: 12, color: Color(0xFFA1A1AA))),
    ]),
  );
}
