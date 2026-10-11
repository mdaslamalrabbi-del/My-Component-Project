enum AvatarTheme { dark, light }

class AvatarInitial extends StatelessWidget {
  const AvatarInitial(this.initial, {super.key, this.theme = AvatarTheme.dark});
  final String initial;
  final AvatarTheme theme;

  @override
  Widget build(BuildContext context) {
    final dark = theme == AvatarTheme.dark;
    return Container(
      width: 32,
      height: 32,
      alignment: Alignment.center,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        color: dark ? const Color(0xFF272729) : const Color(0xFFF7F5FA),
      ),
      child: Text(
        initial.substring(0, 1).toUpperCase(),
        style: TextStyle(fontSize: 12, height: 16 / 12, fontWeight: FontWeight.w600,
            color: dark ? Colors.white : const Color(0xFF121113)),
      ),
    );
  }
}
