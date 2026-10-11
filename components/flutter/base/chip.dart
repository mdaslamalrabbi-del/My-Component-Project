class Chip extends StatelessWidget {
  const Chip({super.key, this.label, this.leftIcon = true, this.rightIcon = true, this.outlined = false});
  final String? label;
  final bool leftIcon, rightIcon, outlined;

  @override
  Widget build(BuildContext context) {
    const c = Color(0xFFD2CFD9);
    return Container(
      height: 20,
      padding: const EdgeInsets.symmetric(horizontal: 8),
      decoration: BoxDecoration(
        color: const Color(0xFF272729),
        borderRadius: BorderRadius.circular(4),
        border: outlined ? Border.all(color: const Color(0xFF333137)) : null,
      ),
      child: Row(mainAxisSize: MainAxisSize.min, children: [
        if (leftIcon) ...[const Icon(Icons.folder_open, size: 12, color: c), const SizedBox(width: 6)],
        if (label != null)
          Text(label!, style: const TextStyle(fontSize: 11, height: 16 / 11, fontWeight: FontWeight.w500, color: c)),
        if (rightIcon) ...[const SizedBox(width: 6), const Icon(Icons.keyboard_arrow_down, size: 12, color: c)],
      ]),
    );
  }
}
