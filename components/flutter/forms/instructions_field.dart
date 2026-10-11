enum InstructionsType { cloud, local }

class InstructionsField extends StatelessWidget {
  const InstructionsField({super.key, this.type = InstructionsType.cloud, this.controller, this.label = 'Instructions',
      this.hint = 'Describe what Puku should do in each session', this.worktree = false, this.onWorktree});
  final InstructionsType type;
  final TextEditingController? controller;
  final String label, hint;
  final bool worktree;
  final ValueChanged<bool>? onWorktree;

  static const _muted = TextStyle(color: Color(0xFFA1A1AA), fontSize: 12);

  Widget _btn(String t) => Row(mainAxisSize: MainAxisSize.min, children: [
        Text(t, style: _muted), const Icon(Icons.expand_more, size: 14, color: Color(0xFFA1A1AA))]);

  @override
  Widget build(BuildContext context) {
    final cloud = type == InstructionsType.cloud;
    return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      Text(label, style: const TextStyle(color: Colors.white, fontSize: 13, fontWeight: FontWeight.w500)),
      const SizedBox(height: 8),
      ClipRRect(
        borderRadius: BorderRadius.circular(8),
        child: Column(children: [
          Container(
            color: const Color(0xFF181715), padding: const EdgeInsets.all(14), constraints: const BoxConstraints(minHeight: 96),
            child: Column(children: [
              TextField(controller: controller, maxLines: null, style: const TextStyle(color: Colors.white, fontSize: 14),
                  decoration: InputDecoration(isDense: true, border: InputBorder.none, hintText: hint,
                      hintStyle: const TextStyle(color: Color(0xFF4A4850)))),
              const SizedBox(height: 16),
              Row(mainAxisAlignment: cloud ? MainAxisAlignment.end : MainAxisAlignment.spaceBetween, children: [
                if (cloud) ...[_btn('Voice'), const SizedBox(width: 16), _btn('Opus 4.8')] else ...[_btn('Manual'), _btn('Default')],
              ]),
            ]),
          ),
          Container(
            height: 36, color: const Color(0xFF202022), padding: const EdgeInsets.symmetric(horizontal: 14),
            child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
              Text(cloud ? 'Select a repository' : 'Select folder', style: _muted.copyWith(fontSize: 13)),
              if (cloud) Text('puku-cli', style: const TextStyle(color: Color(0xFFD2CFD9), fontSize: 13))
              else InkWell(onTap: () => onWorktree?.call(!worktree), child: Row(children: [
                Container(width: 12, height: 12, decoration: BoxDecoration(
                    color: worktree ? const Color(0xFF9C86FF) : null,
                    border: Border.all(color: worktree ? const Color(0xFF9C86FF) : const Color(0xFFA1A1AA)),
                    borderRadius: BorderRadius.circular(2))),
                const SizedBox(width: 6), Text('Worktree', style: _muted.copyWith(fontSize: 13))])),
            ]),
          ),
        ]),
      ),
    ]);
  }
}
