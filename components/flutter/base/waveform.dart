class Waveform extends StatelessWidget {
  const Waveform({super.key, this.bars = 35, this.color = const Color(0xFFA1A1AA)});
  final int bars;
  final Color color;
  static const _heights = [4.0, 12.0, 8.0, 4.0, 6.0]; // repeats 7 times = 35 bars

  @override
  Widget build(BuildContext context) => ExcludeSemantics(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 4),
          child: SizedBox(
            height: 12,
            child: Row(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                for (var i = 0; i < bars; i++) ...[
                  if (i > 0) const SizedBox(width: 4),
                  Container(width: 1, height: _heights[i % 5], color: color),
                ],
              ],
            ),
          ),
        ),
      );
}
