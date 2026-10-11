import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class CardNumberField extends StatelessWidget {
  const CardNumberField({super.key, this.label = 'Card number', required this.onChanged, this.flag, this.brands = false});
  final String label; final ValueChanged<String> onChanged; final Widget? flag; final bool brands;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 348,
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Text(label, style: const TextStyle(color: Colors.white, fontSize: 13, fontWeight: FontWeight.w500)),
        const SizedBox(height: 8),
        Container(
          height: 40, padding: const EdgeInsets.symmetric(horizontal: 12),
          decoration: BoxDecoration(color: const Color(0xFF202022), borderRadius: BorderRadius.circular(8), border: Border.all(color: const Color(0xFF27272A))),
          child: Row(children: [
            Expanded(child: TextField(
              keyboardType: TextInputType.number,
              inputFormatters: [FilteringTextInputFormatter.digitsOnly, LengthLimitingTextInputFormatter(16)],
              onChanged: onChanged, cursorColor: const Color(0xFF9C86FF),
              style: const TextStyle(color: Colors.white, fontSize: 14),
              decoration: const InputDecoration(border: InputBorder.none, isDense: true, hintText: '1234 1234 1234 1234', hintStyle: TextStyle(color: Color(0xFF6C6A64))),
            )),
            if (flag != null) flag!,
            if (brands) const Text('VISA', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontStyle: FontStyle.italic)),
          ]),
        ),
      ]),
    );
  }
}
