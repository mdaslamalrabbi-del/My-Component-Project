enum OpenWithSize {
  large(32, 8, 16),
  small(24, 6, 12);

  const OpenWithSize(this.h, this.radius, this.icon);
  final double h, radius, icon;
}

class ButtonOpenWith extends StatelessWidget {
  const ButtonOpenWith({super.key, required this.text, this.size = OpenWithSize.large,
      this.showLeft = true, this.showRight = true, this.onPressed});
  final String text;
  final OpenWithSize size;
  final bool showLeft, showRight;
  final VoidCallback? onPressed;

  @override
  Widget build(BuildContext context) {
    final icon = Icon(Icons.keyboard_arrow_down, size: size.icon, color: const Color(0xFFD2CFD9));
    return TextButton(
      onPressed: onPressed,
      style: TextButton.styleFrom(
        backgroundColor: const Color(0xFF272729),
        foregroundColor: Colors.white,
        minimumSize: Size(0, size.h),
        padding: const EdgeInsets.symmetric(horizontal: 12),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(size.radius)),
      ),
      child: Row(mainAxisSize: MainAxisSize.min, children: [
        if (showLeft) ...[icon, const SizedBox(width: 8)],
        Text(text, style: const TextStyle(fontSize: 12, height: 16 / 12, fontWeight: FontWeight.w500)),
        if (showRight) ...[const SizedBox(width: 8), icon],
      ]),
    );
  }
}
