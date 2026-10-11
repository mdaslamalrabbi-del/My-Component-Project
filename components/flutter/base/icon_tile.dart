class IconTile extends StatelessWidget {
  const IconTile({super.key, required this.icon});
  final IconData icon;

  @override
  Widget build(BuildContext context) => Container(
        width: 40,
        height: 40,
        decoration: BoxDecoration(color: const Color(0xFF272729), borderRadius: BorderRadius.circular(8)),
        child: Icon(icon, size: 16, color: const Color(0xFFD2CFD9)),
      );
}
