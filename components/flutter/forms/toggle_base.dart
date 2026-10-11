import 'package:flutter/material.dart';

class ToggleBase extends StatelessWidget {
  const ToggleBase({super.key, required this.value, required this.onChanged, this.enabled = true, this.size = 'md'});
  final bool value; final ValueChanged<bool> onChanged; final bool enabled; final String size;

  @override
  Widget build(BuildContext context) {
    final s = {'sm':[24.0,16.0,12.0],'md':[32.0,20.0,16.0],'lg':[40.0,24.0,20.0]}[size]!;
    final w = s[0], h = s[1], k = s[2], pad = (h - k) / 2;
    return Semantics(
      toggled: value, enabled: enabled,
      child: GestureDetector(
        onTap: enabled ? () => onChanged(!value) : null,
        child: Opacity(
          opacity: enabled ? 1 : 0.7,
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 150), width: w, height: h, padding: EdgeInsets.all(pad),
            alignment: value ? Alignment.centerRight : Alignment.centerLeft,
            decoration: BoxDecoration(color: value ? const Color(0xFF2D68FE) : const Color(0xFFE6E8EA), borderRadius: BorderRadius.circular(h / 2)),
            child: Container(width: k, height: k, decoration: const BoxDecoration(color: Color(0xFFFFFFFF), shape: BoxShape.circle)),
          ),
        ),
      ),
    );
  }
}
