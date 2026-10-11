class PukuTooltip extends StatelessWidget {
  const PukuTooltip(this.message, {super.key, this.width = 189});
  final String message;
  final double width;

  @override
  Widget build(BuildContext context) => Container(
        width: width,
        padding: const EdgeInsets.all(8),
        decoration: BoxDecoration(
          color: const Color(0xFF181715),
          borderRadius: BorderRadius.circular(6),
          border: Border.all(color: const Color(0xFF272729)),
        ),
        child: Text(message, style: const TextStyle(fontSize: 11, height: 16 / 11,
            fontWeight: FontWeight.w500, color: Color(0xFFD2CFD9))),
      );
}
