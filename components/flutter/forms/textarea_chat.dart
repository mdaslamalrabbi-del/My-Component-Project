import 'package:flutter/material.dart';

class TextareaChat extends StatefulWidget {
  const TextareaChat({super.key, required this.onSend, this.processing, this.hint = 'Write a message…'});
  final ValueChanged<String> onSend; final String? processing; final String hint;
  @override State<TextareaChat> createState() => _TextareaChatState();
}

class _TextareaChatState extends State<TextareaChat> {
  final c = TextEditingController();
  @override void dispose() { c.dispose(); super.dispose(); }

  @override
  Widget build(BuildContext context) {
    return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      if (widget.processing != null) ...[
        Text(widget.processing!, style: const TextStyle(color: Color(0xFFA1A1AA), fontSize: 13)),
        const SizedBox(height: 16),
      ],
      Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(color: const Color(0xFF181715), borderRadius: BorderRadius.circular(16), border: Border.all(color: const Color(0xFF27272A))),
        child: Row(children: [
          Expanded(child: TextField(controller: c, minLines: 1, maxLines: 5, style: const TextStyle(color: Colors.white, fontSize: 14),
            decoration: InputDecoration(border: InputBorder.none, isDense: true, hintText: widget.hint, hintStyle: const TextStyle(color: Color(0xFFA1A1AA))))),
          const SizedBox(width: 24),
          ValueListenableBuilder<TextEditingValue>(valueListenable: c, builder: (_, v, __) {
            final has = v.text.trim().isNotEmpty;
            return InkWell(
              borderRadius: BorderRadius.circular(8),
              onTap: has ? () { widget.onSend(c.text); c.clear(); } : null,
              child: Container(width: 32, height: 32, decoration: BoxDecoration(color: has ? const Color(0xFF9C86FF) : const Color(0xFF27272A), borderRadius: BorderRadius.circular(8)),
                child: Icon(Icons.arrow_upward, size: 16, color: has ? Colors.white : const Color(0xFF6C6A64))),
            );
          }),
        ]),
      ),
    ]);
  }
}
