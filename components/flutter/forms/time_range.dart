import 'package:flutter/material.dart';

class TimeRange extends StatelessWidget {
  const TimeRange({super.key, required this.day, required this.start, required this.end, required this.times,
    required this.onStart, required this.onEnd, this.nextDay = false});
  final String day, start, end; final List<String> times; final ValueChanged<String> onStart, onEnd; final bool nextDay;

  static const _t = TextStyle(color: Color(0xFFA1A1AA), fontSize: 14, fontWeight: FontWeight.w500);

  Widget _sel(String v, ValueChanged<String> on, double w, double fs) => Container(
    width: w, height: 32, padding: const EdgeInsets.only(left: 12, right: 8),
    decoration: BoxDecoration(color: const Color(0xFF1D1D1F), borderRadius: BorderRadius.circular(8)),
    child: DropdownButtonHideUnderline(child: DropdownButton<String>(
      value: v, isExpanded: true, dropdownColor: const Color(0xFF202022), iconEnabledColor: Colors.white,
      style: TextStyle(color: Colors.white, fontSize: fs),
      items: [for (final t in times) DropdownMenuItem(value: t, child: Text(t))],
      onChanged: (x) => x == null ? null : on(x),
    )),
  );

  @override
  Widget build(BuildContext context) => Row(mainAxisSize: MainAxisSize.min, children: [
    SizedBox(width: 92, child: Text(day, style: _t)), const SizedBox(width: 40),
    _sel(start, onStart, 96, 16), const SizedBox(width: 8), const Text('To', style: _t), const SizedBox(width: 8), _sel(end, onEnd, 84, 12),
    if (nextDay) ...[const SizedBox(width: 48), const Text('next day', style: _t)],
  ]);
}
