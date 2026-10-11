class CaretButton extends StatefulWidget {
  const CaretButton({super.key, this.pressed = false, this.onTap});
  final bool pressed;
  final VoidCallback? onTap;

  @override
  State<CaretButton> createState() => _CaretButtonState();
}

class _CaretButtonState extends State<CaretButton> {
  bool _down = false;

  @override
  Widget build(BuildContext context) {
    final on = _down || widget.pressed;
    return GestureDetector(
      onTapDown: (_) => setState(() => _down = true),
      onTapUp: (_) => setState(() => _down = false),
      onTapCancel: () => setState(() => _down = false),
      onTap: widget.onTap,
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 100),
        width: 10,
        height: on ? 16 : 10,
        decoration: BoxDecoration(
            color: on ? const Color(0xFF272729) : null, borderRadius: BorderRadius.circular(12)),
        child: const Icon(Icons.keyboard_arrow_down, size: 10, color: Color(0xFFA1A1AA)),
      ),
    );
  }
}
