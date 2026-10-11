class SelectSort extends StatelessWidget {
  const SelectSort({super.key, this.label = 'Sort by', this.value = 'Next run', this.onTap});
  final String label, value;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) => InkWell(
        borderRadius: BorderRadius.circular(8),
        onTap: onTap,
        child: Container(
          height: 32,
          padding: const EdgeInsets.only(left: 12, right: 10),
          decoration: BoxDecoration(color: const Color(0xFF27272A), borderRadius: BorderRadius.circular(8)),
          child: Row(mainAxisSize: MainAxisSize.min, children: [
            Text(label, style: const TextStyle(color: Color(0xFFA1A1AA), fontSize: 14)),
            const SizedBox(width: 6),
            Text(value, style: const TextStyle(color: Colors.white, fontSize: 14)),
            const SizedBox(width: 6),
            const Icon(Icons.expand_more, size: 12, color: Color(0xFFA1A1AA)),
          ]),
        ),
      );
}
