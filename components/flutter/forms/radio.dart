class PukuRadio<T> extends StatelessWidget {
  const PukuRadio({super.key, required this.value, required this.groupValue, required this.onChanged, this.label});
  final T value, groupValue;
  final ValueChanged<T> onChanged;
  final String? label;

  @override
  Widget build(BuildContext context) {
    final on = value == groupValue;
    return Semantics(
      inMutuallyExclusiveGroup: true, checked: on,
      child: InkWell(
        onTap: () => onChanged(value),
        child: Row(mainAxisSize: MainAxisSize.min, children: [
          Container(
            width: 22, height: 22, alignment: Alignment.center,
            decoration: BoxDecoration(
              shape: BoxShape.circle, color: on ? Colors.white : null,
              border: Border.all(color: on ? const Color(0xFF0075FF) : const Color(0xFFD2CFD9))),
            child: on ? Container(width: 13, height: 13, decoration: const BoxDecoration(color: Color(0xFF0075FF), shape: BoxShape.circle)) : null,
          ),
          if (label != null) ...[const SizedBox(width: 8), Text(label!, style: const TextStyle(color: Colors.white, fontSize: 14))],
        ]),
      ),
    );
  }
}
