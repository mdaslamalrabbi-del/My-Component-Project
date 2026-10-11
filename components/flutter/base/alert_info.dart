class AlertInfo extends StatelessWidget {
  const AlertInfo(this.message, {super.key});
  final String message;

  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(color: const Color(0xFF272729), borderRadius: BorderRadius.circular(12)),
        child: Row(children: [
          const Icon(Icons.info_outline, size: 26, color: Color(0xFFD2CFD9)),
          const SizedBox(width: 16),
          Expanded(child: Text(message,
              style: const TextStyle(fontSize: 14, height: 20 / 14, color: Colors.white))),
        ]),
      );
}
