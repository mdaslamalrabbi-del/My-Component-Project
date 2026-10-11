enum SkipKind { button, text }

class ButtonSkip extends StatelessWidget {
  const ButtonSkip({super.key, this.label = "Skip", this.kind = SkipKind.button,
      this.showLeft = false, this.showRight = false, this.onPressed});
  final String label;
  final SkipKind kind;
  final bool showLeft, showRight;
  final VoidCallback? onPressed;

  @override
  Widget build(BuildContext context) {
    const caret = Icon(Icons.keyboard_arrow_down, size: 10, color: Color(0xFFA1A1AA));
    return TextButton(
      onPressed: onPressed,
      style: TextButton.styleFrom(
        backgroundColor: kind == SkipKind.button ? const Color(0xFF272729) : Colors.transparent,
        foregroundColor: Colors.white,
        minimumSize: const Size(0, 24),
        padding: const EdgeInsets.symmetric(horizontal: 12),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(6)),
      ),
      child: Row(mainAxisSize: MainAxisSize.min, children: [
        if (showLeft) ...[caret, const SizedBox(width: 4)],
        Text(label, style: TextStyle(fontSize: 12, height: 16 / 12,
            fontWeight: kind == SkipKind.text ? FontWeight.w500 : FontWeight.w400)),
        if (showRight) ...[const SizedBox(width: 4), caret],
      ]),
    );
  }
}
