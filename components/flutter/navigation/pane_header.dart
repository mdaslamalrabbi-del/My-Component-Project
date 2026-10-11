import 'package:flutter/material.dart';

class PaneHeader extends StatelessWidget {
  const PaneHeader.plan({super.key, this.title = 'Plan', required this.onClose}) : tabs = const [], url = null, onUrl = null, onBack = null, onForward = null;
  const PaneHeader.browser({super.key, required this.tabs, required this.url, required this.onUrl, required this.onBack, required this.onForward, required this.onClose}) : title = null;
  final String? title; final List<Widget> tabs; final String? url; final ValueChanged<String>? onUrl; final VoidCallback? onBack, onForward; final VoidCallback onClose;

  @override
  Widget build(BuildContext context) {
    final close = IconButton(onPressed: onClose, icon: const Icon(Icons.close, size: 16, color: Color(0xFFA1A1AA)), tooltip: 'Close');
    if (title != null) {
      return Container(height: 40, padding: const EdgeInsets.only(left: 16, right: 8), color: const Color(0xFF27272A),
        child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
          Text(title!, style: const TextStyle(color: Colors.white, fontSize: 14, fontWeight: FontWeight.w600)), close]));
    }
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8), color: const Color(0xFF27272A),
      child: Column(children: [
        Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [Row(children: tabs), close]),
        Row(children: [
          IconButton(onPressed: onBack, icon: const Icon(Icons.arrow_back, size: 16, color: Color(0xFFA1A1AA))),
          IconButton(onPressed: onForward, icon: const Icon(Icons.arrow_forward, size: 16, color: Color(0xFFA1A1AA))),
          Expanded(child: Container(height: 32, padding: const EdgeInsets.symmetric(horizontal: 12),
            decoration: BoxDecoration(color: const Color(0xFF1D1D1F), borderRadius: BorderRadius.circular(6)),
            child: TextField(onChanged: onUrl, style: const TextStyle(color: Colors.white, fontSize: 14),
              decoration: const InputDecoration(border: InputBorder.none, isDense: true, icon: Icon(Icons.search, size: 14, color: Color(0xFFA1A1AA)),
                hintText: 'Type a URL', hintStyle: TextStyle(color: Color(0xFFA1A1AA)))))),
        ]),
      ]),
    );
  }
}
