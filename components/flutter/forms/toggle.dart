import 'package:flutter/material.dart';

class Toggle extends StatelessWidget {
  const Toggle({super.key, required this.value, required this.onChanged, this.enabled = true});
  final bool value; final ValueChanged<bool> onChanged; final bool enabled;

  @override
  Widget build(BuildContext context) {
    const w = 28.0, h = 16.0, k = 12.0;
    const pad = (h - k) / 2;
    return Semantics(
      toggled: value, enabled: enabled,
      child: GestureDetector(
        onTap: enabled ? () => onChanged(!value) : null,
        child: Opacity(
          opacity: enabled ? 1 : 0.7,
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 150), width: w, height: h, padding: EdgeInsets.all(pad),
            alignment: value ? Alignment.centerRight : Alignment.centerLeft,
            decoration: BoxDecoration(color: value ? const Color(0xFF9C86FF) : const Color(0xFF333137), borderRadius: BorderRadius.circular(h / 2)),
            child: Container(width: k, height: k, decoration: const BoxDecoration(color: Color(0xFFFFFFFF), shape: BoxShape.circle)),
          ),
        ),
      ),
    );
  }
}
