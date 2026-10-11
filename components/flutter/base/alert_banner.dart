class AlertBanner extends StatelessWidget {
  const AlertBanner({super.key, required this.message, required this.action,
      required this.checked, required this.onChanged});
  final String message, action;
  final bool checked;
  final ValueChanged<bool> onChanged;

  @override
  Widget build(BuildContext context) {
    const text = TextStyle(fontSize: 14, height: 20 / 14, color: Color(0xFFD2CFD9));
    const icon = Color(0xFFA1A1AA);
    return Container(
      constraints: const BoxConstraints(minHeight: 44),
      padding: const EdgeInsets.symmetric(horizontal: 14),
      decoration: BoxDecoration(
          border: Border.all(color: const Color(0xFF272729)), borderRadius: BorderRadius.circular(8)),
      child: Row(children: [
        const Icon(Icons.info_outline, size: 16, color: icon),
        const SizedBox(width: 10),
        Expanded(child: Padding(padding: const EdgeInsets.symmetric(vertical: 12), child: Text(message, style: text))),
        const SizedBox(width: 10),
        const Icon(Icons.wb_sunny_outlined, size: 16, color: icon),
        const SizedBox(width: 10),
        Text(action, style: text),
        const SizedBox(width: 22),
        Switch(value: checked, onChanged: onChanged, activeTrackColor: const Color(0xFF7F64F7),
            inactiveTrackColor: const Color(0xFF333137),
            thumbColor: const WidgetStatePropertyAll(Colors.white)),
      ]),
    );
  }
}
