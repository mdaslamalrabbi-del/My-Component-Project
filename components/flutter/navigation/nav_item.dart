import 'package:flutter/material.dart';

enum NavState { normal, active, active2, light, indented }

class NavItem extends StatelessWidget {
  const NavItem({super.key, required this.label, this.icon, this.trailing, this.state = NavState.normal, this.onTap});
  final String label; final IconData? icon; final Widget? trailing; final NavState state; final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) {
    final bg = switch (state) { NavState.active => const Color(0xFF181715), NavState.active2 => const Color(0xFF27272A), NavState.light => Colors.white, _ => Colors.transparent };
    final fg = switch (state) { NavState.active => const Color(0xFFD2CFD9), NavState.active2 => Colors.white, NavState.light => const Color(0xFF333137), _ => const Color(0xFFA1A1AA) };
    return Material(
      color: bg, borderRadius: BorderRadius.circular(6),
      child: InkWell(
        borderRadius: BorderRadius.circular(6), onTap: onTap,
        child: Container(
          height: 32, padding: EdgeInsets.fromLTRB(state == NavState.indented ? 34 : 8, 8, 8, 8),
          child: Row(children: [
            if (icon != null && state != NavState.indented) ...[Icon(icon, size: 16, color: fg), const SizedBox(width: 10)],
            Expanded(child: Text(label, overflow: TextOverflow.ellipsis, style: TextStyle(color: fg, fontSize: 14))),
            if (trailing != null) trailing!,
          ]),
        ),
      ),
    );
  }
}
