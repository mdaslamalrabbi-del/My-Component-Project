import 'package:flutter/material.dart';

class ModeSwitch extends StatelessWidget {
  const ModeSwitch({super.key, required this.items, required this.value, required this.onChanged, this.large = false});
  final List<String> items; final String value; final ValueChanged<String> onChanged; final bool large;

  @override
  Widget build(BuildContext context) => Container(
    padding: EdgeInsets.all(large ? 4 : 2),
    decoration: BoxDecoration(color: const Color(0xFF121113), borderRadius: BorderRadius.circular(6)),
    child: Row(mainAxisSize: MainAxisSize.min, children: [
      for (final i in items) Padding(
        padding: EdgeInsets.only(right: i == items.last ? 0 : (large ? 4 : 2)),
        child: ModeSwitchItem(label: i, large: large, active: i == value, onTap: () => onChanged(i)),
      ),
    ]),
  );
}
