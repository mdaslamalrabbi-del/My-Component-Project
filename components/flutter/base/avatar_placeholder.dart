class AvatarPlaceholder extends StatelessWidget {
  const AvatarPlaceholder({super.key, required this.url, this.size = 46});
  final String url;
  final double size;

  @override
  Widget build(BuildContext context) => ClipOval(
        child: Image.network(url, width: size, height: size, fit: BoxFit.cover),
      );
}
