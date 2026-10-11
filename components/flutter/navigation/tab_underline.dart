import 'package:flutter/material.dart';

class TabUnderline extends StatelessWidget {
  const TabUnderline({super.key, required this.label, this.count, this.active = false, this.onTap});
  final String label; final int? count; final bool active; final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) => Semantics(
        selected: active, button: true,
        child: InkWell(
          onTap: onTap,
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
            decoration: BoxDecoration(border: Border(bottom: BorderSide(width: 2, color: active ? const Color(0xFFA1A1AA) : Colors.transparent))),
            child: Text('$label${count != null ? '  · $count' : ''}', style: TextStyle(fontSize: 14, color: active ? const Color(0xFFD2CFD9) : const Color(0xFF52525B))),
          ),
        ),
      );
}
