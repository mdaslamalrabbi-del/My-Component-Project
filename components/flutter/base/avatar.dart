class Avatar extends StatelessWidget {
  const Avatar({super.key, this.size = 46});
  final double size;

  @override
  Widget build(BuildContext context) => Container(
        width: size,
        height: size,
        decoration: const BoxDecoration(color: Colors.black, shape: BoxShape.circle),
      );
}
