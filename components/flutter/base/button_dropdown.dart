class ButtonDropdown extends StatelessWidget {
  const ButtonDropdown({super.key, this.label = "New task", this.onPressed});
  final String label;
  final VoidCallback? onPressed;

  @override
  Widget build(BuildContext context) => TextButton(
        onPressed: onPressed,
        style: TextButton.styleFrom(
          backgroundColor: const Color(0xFFF7F5FA),
          foregroundColor: const Color(0xFF121113),
          minimumSize: const Size(0, 32),
          padding: const EdgeInsets.only(left: 12, right: 10),
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
        ),
        child: Row(mainAxisSize: MainAxisSize.min, children: [
          Text(label, style: const TextStyle(fontSize: 14, height: 20 / 14)),
          const SizedBox(width: 6),
          const Icon(Icons.keyboard_arrow_down, size: 12),
        ]),
      );
}
