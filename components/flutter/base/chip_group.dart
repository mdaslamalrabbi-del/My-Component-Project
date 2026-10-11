class ChipGroup extends StatelessWidget {
  const ChipGroup({super.key, this.prefix, required this.items, this.suffix});
  final String? prefix, suffix;
  final List<String> items;

  @override
  Widget build(BuildContext context) {
    const t = TextStyle(fontSize: 13, height: 18 / 13, color: Colors.white);
    Widget text(String s) => Padding(padding: const EdgeInsets.symmetric(horizontal: 2), child: Text(s, style: t));
    return Wrap(
      crossAxisAlignment: WrapCrossAlignment.center,
      spacing: 2,
      runSpacing: 4,
      children: [
        if (prefix != null) text(prefix!),
        for (var i = 0; i < items.length; i++) ...[
          Chip(label: items[i], leftIcon: false, rightIcon: false, outlined: true),
          if (i < items.length - 1) text(","),
        ],
        if (suffix != null) text(suffix!),
      ],
    );
  }
}
