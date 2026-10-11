class Option {
  const Option(this.value, this.label);
  final String value, label;
}

class PukuSelect extends StatelessWidget {
  const PukuSelect({super.key, required this.options, required this.value, required this.onChanged,
      this.hint = 'Select your role', this.small = false, this.leading});
  final List<Option> options;
  final String? value;
  final ValueChanged<String?> onChanged;
  final String hint;
  final bool small;
  final Widget? leading;

  @override
  Widget build(BuildContext context) {
    OutlineInputBorder border(Color c) =>
        OutlineInputBorder(borderRadius: BorderRadius.circular(8), borderSide: BorderSide(color: c));
    return SizedBox(
      width: 348,
      height: small ? 32 : 40,
      child: DropdownButtonFormField<String>(
        value: value,
        onChanged: onChanged,
        isExpanded: true,
        dropdownColor: const Color(0xFF202022),
        borderRadius: BorderRadius.circular(8),
        icon: const Icon(Icons.expand_more, size: 12, color: Color(0xFFA1A1AA)),
        style: const TextStyle(color: Colors.white, fontSize: 14),
        hint: Text(hint, style: const TextStyle(color: Color(0xFFA1A1AA), fontSize: 14)),
        decoration: InputDecoration(
          isDense: true, filled: true, fillColor: const Color(0xFF181715),
          prefixIcon: leading,
          contentPadding: EdgeInsets.symmetric(horizontal: small ? 8 : 12),
          enabledBorder: border(const Color(0xFF27272A)),
          focusedBorder: border(const Color(0xFF9C86FF)),
        ),
        items: [for (final o in options) DropdownMenuItem(value: o.value, child: Text(o.label, style: const TextStyle(color: Color(0xFFD2CFD9))))],
      ),
    );
  }
}
