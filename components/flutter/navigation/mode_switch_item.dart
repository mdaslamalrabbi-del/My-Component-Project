import 'package:flutter/material.dart';

class ModeSwitchItem extends StatelessWidget {
  const ModeSwitchItem({super.key, this.label, this.icon, this.active = false, this.large = false, this.onTap});
  final String? label; final IconData? icon; final bool active, large; final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) => InkWell(
    borderRadius: BorderRadius.circular(4), onTap: onTap,
    child: Container(
      height: icon != null ? 24 : (large ? 26 : 22), padding: EdgeInsets.symmetric(horizontal: large ? 16 : 12), alignment: Alignment.center,
      decoration: BoxDecoration(color: active ? const Color(0xFF27272A) : null, borderRadius: BorderRadius.circular(4)),
      child: icon != null
        ? Icon(icon, size: 16, color: active ? Colors.white : const Color(0xFFD2CFD9))
        : Text(label ?? '', style: TextStyle(fontSize: large ? 14 : 12, fontWeight: active && !large ? FontWeight.w500 : FontWeight.w400, color: active ? Colors.white : const Color(0xFFD2CFD9))),
    ),
  );
}
