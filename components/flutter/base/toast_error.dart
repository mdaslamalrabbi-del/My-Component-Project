class ToastError extends StatelessWidget {
  const ToastError(this.message, {super.key, this.onDismiss});
  final String message;
  final VoidCallback? onDismiss;

  @override
  Widget build(BuildContext context) {
    const c = Color(0xFFFF9492);
    return Container(
      padding: const EdgeInsets.all(8),
      decoration: BoxDecoration(color: const Color(0xFF5A1A1A), borderRadius: BorderRadius.circular(6)),
      child: Row(mainAxisSize: MainAxisSize.min, children: [
        const Icon(Icons.warning_amber_rounded, size: 16, color: c),
        const SizedBox(width: 12),
        Text(message, style: const TextStyle(fontSize: 12, height: 16 / 12, fontWeight: FontWeight.w600, color: c)),
        const SizedBox(width: 12),
        InkWell(onTap: onDismiss, child: const Icon(Icons.close, size: 16, color: c)),
      ]),
    );
  }
}
