class CheckboxField extends StatelessWidget {
  const CheckboxField({super.key, required this.label, required this.value, required this.onChanged});
  final String label;
  final bool value;
  final ValueChanged<bool> onChanged;

  @override
  Widget build(BuildContext context) => InkWell(
        onTap: () => onChanged(!value),
        child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
          PukuCheckbox(value: value, onChanged: onChanged),
          const SizedBox(width: 12),
          Padding(padding: const EdgeInsets.only(top: 2), child: Text(label, style: const TextStyle(color: Colors.white, fontSize: 14))),
        ]),
      );
}
