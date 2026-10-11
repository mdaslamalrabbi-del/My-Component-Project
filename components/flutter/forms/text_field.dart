class TextFieldX extends StatelessWidget {
  const TextFieldX({super.key, this.label, this.helper, this.hint, this.error = false, this.enabled = true,
      this.leading, this.trailing, this.controller, this.onChanged});
  final String? label, helper, hint;
  final bool error, enabled;
  final Widget? leading, trailing;
  final TextEditingController? controller;
  final ValueChanged<String>? onChanged;

  @override
  Widget build(BuildContext context) {
    OutlineInputBorder b(Color c) => OutlineInputBorder(borderRadius: BorderRadius.circular(6), borderSide: BorderSide(color: c));
    final helperColor = error ? const Color(0xFFF85149) : enabled ? const Color(0xFFA1A1AA) : const Color(0xFF6C6A64);
    return SizedBox(
      width: 360,
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        if (label != null) Text(label!, style: TextStyle(color: enabled ? Colors.white : const Color(0xFF6C6A64), fontSize: 13, fontWeight: FontWeight.w500)),
        const SizedBox(height: 8),
        SizedBox(
          height: 40,
          child: TextField(
            controller: controller, onChanged: onChanged, enabled: enabled, cursorColor: const Color(0xFF9C86FF),
            style: const TextStyle(color: Colors.white, fontSize: 14),
            decoration: InputDecoration(
              isDense: true, filled: true, fillColor: enabled ? const Color(0xFF27272A) : const Color(0xFF202022),
              hintText: hint, hintStyle: const TextStyle(color: Color(0xFFA1A1AA)),
              prefixIcon: leading, suffixIcon: trailing,
              contentPadding: const EdgeInsets.symmetric(horizontal: 12),
              enabledBorder: b(error ? const Color(0xFFF85149) : const Color(0xFF333137)),
              focusedBorder: b(error ? const Color(0xFFF85149) : const Color(0xFF9C86FF)),
              disabledBorder: b(const Color(0xFF27272A)),
            ),
          ),
        ),
        if (helper != null) ...[const SizedBox(height: 8), Text(helper!, style: TextStyle(color: helperColor, fontSize: 12))],
      ]),
    );
  }
}
