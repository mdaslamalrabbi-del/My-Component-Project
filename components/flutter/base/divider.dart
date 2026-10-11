enum DividerType { normal, padded, vertical }

class PukuDivider extends StatelessWidget {
  const PukuDivider({super.key, this.type = DividerType.normal});
  final DividerType type;

  @override
  Widget build(BuildContext context) {
    const color = Color(0xFF272729);
    if (type == DividerType.vertical) {
      return const Padding(
        padding: EdgeInsets.symmetric(vertical: 8),
        child: SizedBox(height: 24, child: VerticalDivider(width: 1, thickness: 1, color: color)),
      );
    }
    return Padding(
      padding: EdgeInsets.symmetric(horizontal: type == DividerType.padded ? 8 : 0),
      child: const Divider(height: 1, thickness: 1, color: color),
    );
  }
}
