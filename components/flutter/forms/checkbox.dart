class PukuCheckbox extends StatelessWidget {
  const PukuCheckbox({super.key, required this.value, required this.onChanged});
  final bool value;
  final ValueChanged<bool>? onChanged;

  @override
  Widget build(BuildContext context) => Semantics(
        checked: value, enabled: onChanged != null,
        child: GestureDetector(
          onTap: onChanged == null ? null : () => onChanged!(!value),
          child: Container(
            width: 20, height: 20, alignment: Alignment.center,
            decoration: BoxDecoration(
              color: value ? const Color(0xFF9C86FF) : const Color(0xFF27272A),
              border: value ? null : Border.all(color: const Color(0xFF333137)),
              borderRadius: BorderRadius.circular(6)),
            child: value ? const Icon(Icons.check, size: 14, color: Colors.white) : null,
          ),
        ),
      );
}
