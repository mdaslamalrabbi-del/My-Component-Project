class InputSearchFilter extends StatelessWidget {
  const InputSearchFilter({super.key, this.controller, this.onChanged, this.onFilter, this.hint = 'Search Projects'});
  final TextEditingController? controller;
  final ValueChanged<String>? onChanged;
  final VoidCallback? onFilter;
  final String hint;

  @override
  Widget build(BuildContext context) => SizedBox(
        width: 330,
        child: Row(children: [
          const Icon(Icons.folder_open, size: 18, color: Color(0xFF4A4850)),
          const SizedBox(width: 12),
          Expanded(
            child: TextField(
              controller: controller, onChanged: onChanged,
              style: const TextStyle(color: Color(0xFFD2CFD9), fontSize: 16, fontWeight: FontWeight.w500),
              decoration: InputDecoration(
                isDense: true, border: InputBorder.none, hintText: hint,
                hintStyle: const TextStyle(color: Color(0xFF4A4850), fontSize: 16, fontWeight: FontWeight.w500)),
            ),
          ),
          IconButton(
            onPressed: onFilter, tooltip: 'Filter', iconSize: 18, padding: EdgeInsets.zero,
            constraints: const BoxConstraints(), color: const Color(0xFF6C6A64),
            icon: const Icon(Icons.tune),
          ),
        ]),
      );
}
