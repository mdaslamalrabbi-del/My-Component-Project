class BadgeSchedule extends StatelessWidget {
  const BadgeSchedule(this.label, {super.key});
  final String label;

  @override
  Widget build(BuildContext context) => Container(
        height: 18,
        padding: const EdgeInsets.only(left: 4, right: 6),
        decoration: BoxDecoration(color: const Color(0xFF1B4721), borderRadius: BorderRadius.circular(4)),
        child: Row(mainAxisSize: MainAxisSize.min, children: [
          const Icon(Icons.schedule, size: 8, color: Color(0xFF3FB950)),
          const SizedBox(width: 4),
          Text(label, style: const TextStyle(fontSize: 12, height: 16 / 12, color: Color(0xFF3FB950))),
        ]),
      );
}
