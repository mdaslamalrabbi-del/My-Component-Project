import 'package:flutter/material.dart';

class HeaderToggle extends StatelessWidget {
  const HeaderToggle({super.key, required this.pressed, required this.onChanged, required this.icon, this.label = ''});
  final bool pressed; final ValueChanged<bool> onChanged; final IconData icon; final String label;

  @override
  Widget build(BuildContext context) => Semantics(
    button: true, selected: pressed, label: label,
    child: InkWell(
      borderRadius: BorderRadius.circular(6), onTap: () => onChanged(!pressed),
      child: Container(width: 26, height: 26, decoration: BoxDecoration(color: pressed ? const Color(0xFF171329) : null, borderRadius: BorderRadius.circular(6)),
        child: Icon(icon, size: 16, color: pressed ? const Color(0xFF9C86FF) : const Color(0xFFA1A1AA))),
    ),
  );
}
