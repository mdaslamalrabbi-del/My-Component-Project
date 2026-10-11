// Wrap any scrollable. Default thumb #333137, hover #D2CFD9, 6px wide, 4px radius.
class PukuScrollbar extends StatelessWidget {
  const PukuScrollbar({super.key, required this.controller, required this.child});
  final ScrollController controller;
  final Widget child;

  @override
  Widget build(BuildContext context) => ScrollbarTheme(
        data: ScrollbarThemeData(
          thickness: const WidgetStatePropertyAll(6),
          radius: const Radius.circular(4),
          thumbColor: WidgetStateProperty.resolveWith((s) =>
              s.contains(WidgetState.hovered) ? const Color(0xFFD2CFD9) : const Color(0xFF333137)),
        ),
        child: Scrollbar(controller: controller, thumbVisibility: true, child: child),
      );
}
