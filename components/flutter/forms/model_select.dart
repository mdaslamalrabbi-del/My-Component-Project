class ModelSelect extends StatelessWidget {
  const ModelSelect({super.key, required this.model, this.effort, this.onTap});
  final String model;
  final String? effort;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) => InkWell(
        borderRadius: BorderRadius.circular(4),
        hoverColor: const Color(0xFF27272A),
        onTap: onTap,
        child: Padding(
          padding: const EdgeInsets.all(4),
          child: Row(mainAxisSize: MainAxisSize.min, children: [
            Text(model, style: const TextStyle(color: Colors.white, fontSize: 12)),
            if (effort != null) ...[const SizedBox(width: 6), Text(effort!, style: const TextStyle(color: Color(0xFFA1A1AA), fontSize: 12))],
          ]),
        ),
      );
}
