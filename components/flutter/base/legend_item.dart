class LegendItem extends StatelessWidget {
  const LegendItem({super.key, this.color = const Color(0xFF9C86FF), required this.label, this.value});
  final Color color;
  final String label;
  final String? value;

  @override
  Widget build(BuildContext context) {
    const text = TextStyle(fontSize: 14, height: 20 / 14);
    return Row(mainAxisSize: MainAxisSize.min, children: [
      Container(width: 10, height: 10, decoration: BoxDecoration(color: color, shape: BoxShape.circle)),
      const SizedBox(width: 12),
      Text(label, style: text.copyWith(color: const Color(0xFFD2CFD9))),
      if (value != null) ...[const SizedBox(width: 10), Text(value!, style: text.copyWith(color: const Color(0xFFA1A1AA)))],
    ]);
  }
}
