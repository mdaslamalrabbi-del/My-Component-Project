enum InputSize { lg, sm }

class PukuInput extends StatelessWidget {
  const PukuInput({super.key, this.label, this.helper, this.hint, this.icon, this.controller,
      this.size = InputSize.lg, this.enabled = true, this.onChanged});
  final String? label, helper, hint;
  final Widget? icon;
  final TextEditingController? controller;
  final InputSize size;
  final bool enabled;
  final ValueChanged<String>? onChanged;

  @override
  Widget build(BuildContext context) {
    final lg = size == InputSize.lg;
    OutlineInputBorder border(Color c) => OutlineInputBorder(
        borderRadius: BorderRadius.circular(lg ? 8 : 6), borderSide: BorderSide(color: c));
    return SizedBox(
      width: 280,
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        if (label != null)
          Text(label!, style: const TextStyle(color: Colors.white, fontSize: 13, height: 18 / 13, fontWeight: FontWeight.w500)),
        const SizedBox(height: 8),
        SizedBox(
          height: lg ? 40 : 32,
          child: TextField(
            controller: controller, enabled: enabled, onChanged: onChanged,
            style: TextStyle(color: Colors.white, fontSize: lg ? 14 : 13),
            decoration: InputDecoration(
              isDense: true, filled: true, fillColor: const Color(0xFF202022),
              hintText: hint, hintStyle: const TextStyle(color: Color(0xFF6C6A64)),
              prefixIcon: icon == null ? null : Padding(padding: const EdgeInsets.symmetric(horizontal: 12), child: IconTheme(data: const IconThemeData(size: 16, color: Color(0xFFA1A1AA)), child: icon!)),
              prefixIconConstraints: const BoxConstraints(minWidth: 0, minHeight: 0),
              contentPadding: const EdgeInsets.symmetric(horizontal: 12),
              enabledBorder: border(const Color(0xFF27272A)),
              focusedBorder: border(const Color(0xFF9C86FF)),
              disabledBorder: border(const Color(0xFF27272A)),
            ),
          ),
        ),
        if (helper != null) ...[
          const SizedBox(height: 8),
          Text(helper!, style: const TextStyle(color: Color(0xFFA1A1AA), fontSize: 13, height: 18 / 13)),
        ],
      ]),
    );
  }
}
