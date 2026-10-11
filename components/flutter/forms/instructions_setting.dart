class InstructionsSetting extends StatelessWidget {
  const InstructionsSetting({super.key, this.title = 'Instructions for Claude', required this.body, this.action});
  final String title;
  final InlineSpan body;
  final Widget? action;

  @override
  Widget build(BuildContext context) => Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(title, style: const TextStyle(color: Colors.white, fontSize: 14, fontWeight: FontWeight.w600)),
            const SizedBox(height: 12),
            Text.rich(TextSpan(style: const TextStyle(color: Color(0xFFA1A1AA), fontSize: 14, height: 17 / 14), children: [body])),
          ]),
        ),
        const SizedBox(width: 24),
        SizedBox(width: 278, child: action),
      ]);
}
