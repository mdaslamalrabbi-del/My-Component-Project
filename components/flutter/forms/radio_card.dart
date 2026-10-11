class RadioCard extends StatelessWidget {
  const RadioCard({super.key, required this.checked, required this.onTap, required this.title,
      required this.price, this.note, this.badge});
  final bool checked;
  final VoidCallback onTap;
  final String title, price;
  final String? note, badge;

  @override
  Widget build(BuildContext context) => Semantics(
        inMutuallyExclusiveGroup: true, checked: checked,
        child: InkWell(
          borderRadius: BorderRadius.circular(12),
          onTap: onTap,
          child: Container(
            width: 257, padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: checked ? Colors.black : const Color(0xFF181715),
              border: Border.all(color: checked ? const Color(0xFF9C86FF) : const Color(0xFF333137)),
              borderRadius: BorderRadius.circular(12)),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
                Container(
                  width: 22, height: 22, alignment: Alignment.center,
                  decoration: BoxDecoration(shape: BoxShape.circle, color: checked ? Colors.white : null,
                      border: Border.all(color: checked ? const Color(0xFF0075FF) : const Color(0xFFD2CFD9))),
                  child: checked ? Container(width: 13, height: 13, decoration: const BoxDecoration(color: Color(0xFF0075FF), shape: BoxShape.circle)) : null),
                if (badge != null)
                  Container(
                    height: 22, padding: const EdgeInsets.symmetric(horizontal: 8), alignment: Alignment.center,
                    decoration: BoxDecoration(color: const Color(0xFF1B4721), borderRadius: BorderRadius.circular(6)),
                    child: Text(badge!, style: const TextStyle(color: Color(0xFF3FB950), fontSize: 12, fontWeight: FontWeight.w500))),
              ]),
              const SizedBox(height: 16),
              Text(title, style: const TextStyle(color: Colors.white, fontSize: 12, fontWeight: FontWeight.w500)),
              const SizedBox(height: 20),
              Text(price, style: const TextStyle(color: Colors.white, fontSize: 14)),
              if (note != null) ...[const SizedBox(height: 12), Text(note!, style: const TextStyle(color: Color(0xFF6C6A64), fontSize: 11))],
            ]),
          ),
        ),
      );
}
