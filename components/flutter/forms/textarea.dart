class PukuTextarea extends StatelessWidget {
  const PukuTextarea({super.key, this.controller, this.hint, this.onChanged, this.minLines = 3});
  final TextEditingController? controller;
  final String? hint;
  final ValueChanged<String>? onChanged;
  final int minLines;

  @override
  Widget build(BuildContext context) {
    OutlineInputBorder border(Color c) => OutlineInputBorder(borderRadius: BorderRadius.circular(8), borderSide: BorderSide(color: c));
    return TextField(
      controller: controller, onChanged: onChanged, minLines: minLines, maxLines: null,
      style: const TextStyle(color: Colors.white, fontSize: 14),
      decoration: InputDecoration(
        filled: true, fillColor: const Color(0xFF27272A), contentPadding: const EdgeInsets.all(12),
        hintText: hint, hintStyle: const TextStyle(color: Color(0xFF6C6A64)),
        enabledBorder: border(Colors.transparent), focusedBorder: border(const Color(0xFF333137)),
      ),
    );
  }
}
