class IconTileSmall extends StatelessWidget {
  const IconTileSmall({super.key, required this.icon});
  final IconData icon;

  @override
  Widget build(BuildContext context) => Container(
        width: 36,
        height: 36,
        decoration: BoxDecoration(color: const Color(0xFF272729), borderRadius: BorderRadius.circular(8)),
        child: Icon(icon, size: 20, color: const Color(0xFFD2CFD9)),
      );
}
