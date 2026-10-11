enum CodeTone { accent, normal }

class InlineCode extends StatelessWidget {
  const InlineCode(this.code, {super.key, this.tone = CodeTone.accent});
  final String code;
  final CodeTone tone;

  @override
  Widget build(BuildContext context) => Container(
        height: 16,
        padding: const EdgeInsets.symmetric(horizontal: 4),
        decoration: BoxDecoration(
          color: const Color(0xFF272729),
          borderRadius: BorderRadius.circular(4),
          border: Border.all(color: const Color(0xFF272729)),
        ),
        child: Center(
          child: Text(code, style: TextStyle(fontSize: 12, height: 16 / 12,
              color: tone == CodeTone.accent ? const Color(0xFFFF9492) : const Color(0xFFD2CFD9))),
        ),
      );
}
