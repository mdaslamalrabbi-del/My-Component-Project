class SelectTime extends StatelessWidget {
  const SelectTime({super.key, required this.value, required this.options, required this.onChanged, this.isTime = false});
  final String value;
  final List<String> options;
  final ValueChanged<String?> onChanged;
  final bool isTime;

  @override
  Widget build(BuildContext context) => Container(
        width: isTime ? 84 : 96, height: 32,
        padding: const EdgeInsets.only(left: 8, right: 8),
        decoration: BoxDecoration(color: const Color(0xFF202022), borderRadius: BorderRadius.circular(8)),
        child: DropdownButtonHideUnderline(
          child: DropdownButton<String>(
            value: value, onChanged: onChanged, isExpanded: true, dropdownColor: const Color(0xFF202022),
            icon: const Icon(Icons.expand_more, size: 16, color: Colors.white),
            style: TextStyle(color: isTime ? const Color(0xFFF7F5FA) : Colors.white, fontSize: isTime ? 14 : 11),
            items: [for (final o in options) DropdownMenuItem(value: o, child: Text(o))],
          ),
        ),
      );
}
