import 'package:flutter/material.dart';

class TextareaInstructions extends StatelessWidget {
  const TextareaInstructions({super.key, this.footerVariant = false, this.title = 'Instructions for Claude', this.description,
    required this.controller, this.hint = 'e.g. ask clarifying questions before giving detailed answers', this.action, this.footer});
  final bool footerVariant; final String title; final String? description; final TextEditingController controller;
  final String hint; final Widget? action; final Widget? footer;

  Widget _area(Color bg) => Container(
    height: 93, padding: const EdgeInsets.all(12),
    decoration: BoxDecoration(color: bg, borderRadius: BorderRadius.circular(8)),
    child: TextField(controller: controller, maxLines: null, style: const TextStyle(color: Colors.white, fontSize: 14),
      decoration: InputDecoration(border: InputBorder.none, isDense: true, hintText: hint, hintStyle: const TextStyle(color: Color(0xFF6C6A64)))),
  );

  @override
  Widget build(BuildContext context) {
    if (footerVariant) {
      return ClipRRect(borderRadius: BorderRadius.circular(8), child: Container(color: const Color(0xFF27272A), child: Column(children: [
        _area(Colors.black),
        Container(height: 40, padding: const EdgeInsets.symmetric(horizontal: 16), child: footer),
      ])));
    }
    return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(title, style: const TextStyle(color: Colors.white, fontSize: 14, fontWeight: FontWeight.w500)),
          const SizedBox(height: 16),
          Text(description ?? '', style: const TextStyle(color: Color(0xFFA1A1AA), fontSize: 13, height: 1.3)),
        ])),
        if (action != null) ...[const SizedBox(width: 24), action!],
      ]),
      const SizedBox(height: 16), _area(const Color(0xFF27272A)),
      const SizedBox(height: 16), const Divider(height: 1, color: Color(0xFF27272A)),
    ]);
  }
}
