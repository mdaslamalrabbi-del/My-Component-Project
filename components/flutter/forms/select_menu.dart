class SelectMenu extends StatelessWidget {
  const SelectMenu({super.key, required this.items, required this.value, required this.onChanged});
  final List<Option> items;     // Option(value, label) from the Select snippet
  final String? value;
  final ValueChanged<String> onChanged;

  @override
  Widget build(BuildContext context) => Container(
        width: 360, padding: const EdgeInsets.all(4),
        decoration: BoxDecoration(color: const Color(0xFF202022), border: Border.all(color: const Color(0xFF333137)), borderRadius: BorderRadius.circular(6)),
        child: Column(children: [
          for (final it in items) SelectOption(label: it.label, selected: it.value == value, onTap: () => onChanged(it.value)),
        ]),
      );
}
