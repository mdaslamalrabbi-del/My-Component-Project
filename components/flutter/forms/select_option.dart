class SelectOption extends StatelessWidget {
  const SelectOption({super.key, required this.label, this.selected = false, this.onTap});
  final String label;
  final bool selected;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) => InkWell(
        borderRadius: BorderRadius.circular(4),
        onTap: onTap,
        child: Container(
          height: 26, padding: const EdgeInsets.symmetric(horizontal: 12), alignment: Alignment.centerLeft,
          decoration: BoxDecoration(color: selected ? const Color(0xFF27272A) : null, borderRadius: BorderRadius.circular(4)),
          child: Text(label, style: TextStyle(color: selected ? Colors.white : const Color(0xFFD2CFD9), fontSize: 14)),
        ),
      );
}
