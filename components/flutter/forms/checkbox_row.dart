import 'package:flutter/gestures.dart';

enum CheckboxRowType { checkbox, icon }

class CheckboxRow extends StatefulWidget {
  const CheckboxRow({super.key, this.type = CheckboxRowType.checkbox, this.checked, this.onChanged, this.icon, required this.spans});
  final CheckboxRowType type;
  final bool? checked;
  final ValueChanged<bool>? onChanged;
  final Widget? icon;
  final List<InlineSpan> spans;           // use linkSpan() for underlined links

  @override
  State<CheckboxRow> createState() => _CheckboxRowState();
}

TextSpan linkSpan(String text, VoidCallback onTap) => TextSpan(
    text: text,
    style: const TextStyle(color: Color(0xFFBEB0FF), decoration: TextDecoration.underline),
    recognizer: TapGestureRecognizer()..onTap = onTap);

class _CheckboxRowState extends State<CheckboxRow> {
  bool _inner = false;
  @override
  Widget build(BuildContext context) {
    final on = widget.checked ?? _inner;
    return Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
      if (widget.type == CheckboxRowType.checkbox)
        Semantics(
          checked: on,
          child: GestureDetector(
            onTap: () => widget.onChanged != null ? widget.onChanged!(!on) : setState(() => _inner = !on),
            child: Container(
              margin: const EdgeInsets.only(top: 2), width: 16, height: 16,
              decoration: BoxDecoration(
                color: on ? const Color(0xFF9C86FF) : null,
                border: Border.all(color: on ? const Color(0xFF9C86FF) : const Color(0xFF6C6A64)),
                borderRadius: BorderRadius.circular(3)),
              child: on ? const Icon(Icons.check, size: 12, color: Colors.white) : null,
            ),
          ),
        )
      else
        Container(
          width: 32, height: 32,
          decoration: const BoxDecoration(color: Color(0xFF27272A), shape: BoxShape.circle),
          child: IconTheme(data: const IconThemeData(size: 16, color: Color(0xFFD2CFD9)), child: widget.icon ?? const SizedBox()),
        ),
      const SizedBox(width: 12),
      Expanded(
        child: Text.rich(TextSpan(style: const TextStyle(color: Color(0xFFA1A1AA), fontSize: 13, height: 20 / 13), children: widget.spans)),
      ),
    ]);
  }
}
