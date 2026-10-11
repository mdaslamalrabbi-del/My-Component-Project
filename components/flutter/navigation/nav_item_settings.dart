import 'package:flutter/material.dart';

class NavItemSettings extends StatelessWidget {
  const NavItemSettings({super.key, this.label = 'General', this.icon = Icons.settings_outlined, this.active = false, this.onTap});
  final String label; final IconData icon; final bool active; final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) => SizedBox(
    width: 278,
    child: NavItem(label: label, icon: icon, state: active ? NavState.active2 : NavState.normal, onTap: onTap),
  );
}
