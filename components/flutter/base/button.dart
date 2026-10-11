// 24, 32 and 40 come from the Figma component. 36 and 48 are proposed, not in Figma.
enum ButtonSize {
  px24(24, 12, 6, 4, 12, 10, 4, 4),
  px32(32, 14, 8, 6, 12, 8, 8, 8),
  px36(36, 14, 8, 8, 14, 12, 8, 9),
  px40(40, 14, 8, 8, 16, 14, 8, 10),
  px48(48, 16, 8, 8, 20, 16, 10, 12);

  const ButtonSize(this.h, this.font, this.radius, this.gap, this.padText, this.padOne, this.padBoth, this.padOnly);
  final double h, font, radius, gap, padText, padOne, padBoth, padOnly;
}

class PukuButton extends StatelessWidget {
  const PukuButton({super.key, this.label, this.size = ButtonSize.px40, this.iconLeft,
      this.iconRight, this.iconOnly, this.onPressed});
  final String? label;
  final ButtonSize size;
  final Widget? iconLeft, iconRight, iconOnly;
  final VoidCallback? onPressed;

  @override
  Widget build(BuildContext context) {
    final only = iconOnly != null;
    final both = iconLeft != null && iconRight != null;
    final pad = only ? size.padOnly : both ? size.padBoth
        : (iconLeft != null || iconRight != null) ? size.padOne : size.padText;
    bool has(Set<WidgetState> s, WidgetState x) => s.contains(x);
    return TextButton(
      onPressed: onPressed,
      style: ButtonStyle(
        minimumSize: WidgetStatePropertyAll(Size(only ? size.h : 0, size.h)),
        maximumSize: WidgetStatePropertyAll(Size(only ? size.h : double.infinity, size.h)),
        padding: WidgetStatePropertyAll(EdgeInsets.symmetric(horizontal: pad)),
        shape: WidgetStatePropertyAll(
            RoundedRectangleBorder(borderRadius: BorderRadius.circular(only ? 8 : size.radius))),
        textStyle: WidgetStatePropertyAll(TextStyle(fontSize: size.font, fontWeight: FontWeight.w500)),
        backgroundColor: WidgetStateProperty.resolveWith((s) => has(s, WidgetState.disabled)
            ? const Color(0xFF181715)
            : has(s, WidgetState.hovered) || has(s, WidgetState.pressed) || size == ButtonSize.px24
                ? const Color(0xFF27272A) : const Color(0xFF181715)),
        foregroundColor: WidgetStateProperty.resolveWith((s) => has(s, WidgetState.disabled)
            ? const Color(0xFF6C6A64)
            : has(s, WidgetState.pressed) ? Colors.white : const Color(0xFFD2CFD9)),
        side: WidgetStateProperty.resolveWith((s) => BorderSide(
            color: has(s, WidgetState.disabled) ? Colors.transparent
                : has(s, WidgetState.hovered) || has(s, WidgetState.pressed) ? const Color(0xFF333137)
                : only ? const Color(0xFF27272A) : Colors.transparent)),
      ),
      child: only
          ? iconOnly!
          : Row(mainAxisSize: MainAxisSize.min, children: [
              if (iconLeft != null) ...[iconLeft!, SizedBox(width: size.gap)],
              Text(label ?? ""),
              if (iconRight != null) ...[SizedBox(width: size.gap), iconRight!],
            ]),
    );
  }
}
