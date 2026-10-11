// Needs: flutter_svg is optional. This uses Material icons close to the Figma ones.
enum ContextChipType { defaultType, icon, branch }

class ContextChip extends StatefulWidget {
  const ContextChip({super.key, this.type = ContextChipType.defaultType, this.label = 'samiis-portfolio',
      this.icon, this.checked, this.onChanged, this.toggleLabel = 'worktree'});
  final ContextChipType type;
  final String label;
  final Widget? icon;
  final bool? checked;
  final ValueChanged<bool>? onChanged;
  final String toggleLabel;

  @override
  State<ContextChip> createState() => _ContextChipState();
}

class _ContextChipState extends State<ContextChip> {
  bool _inner = false;
  static const _grey = Color(0xFFA1A1AA);
  static const _text = TextStyle(fontSize: 13, height: 18 / 13, color: Color(0xFFD2CFD9));

  @override
  Widget build(BuildContext context) {
    final on = widget.checked ?? _inner;
    final branch = widget.type == ContextChipType.branch;
    return Container(
      height: 24,
      padding: const EdgeInsets.symmetric(horizontal: 6),
      decoration: BoxDecoration(color: const Color(0xFF27272A), borderRadius: BorderRadius.circular(4)),
      child: Row(mainAxisSize: MainAxisSize.min, children: [
        widget.icon ?? Icon(branch ? Icons.call_split : Icons.folder_open, size: 12, color: _grey),
        if (widget.type != ContextChipType.icon) ...[const SizedBox(width: 6), Text(widget.label, style: _text)],
        if (branch) ...[
          const SizedBox(width: 6),
          Container(width: 1, height: 12, color: const Color(0xFF333137)),
          const SizedBox(width: 6),
          Semantics(
            checked: on, 
            child: InkWell(
              onTap: () => widget.onChanged != null ? widget.onChanged!(!on) : setState(() => _inner = !on),
              child: Row(mainAxisSize: MainAxisSize.min, children: [
                Container(
                  width: 12, height: 12,
                  decoration: BoxDecoration(
                    color: on ? const Color(0xFF9C86FF) : Colors.transparent,
                    border: Border.all(color: on ? const Color(0xFF9C86FF) : _grey),
                    borderRadius: BorderRadius.circular(2)),
                ),
                const SizedBox(width: 6),
                Text(widget.toggleLabel, style: _text),
              ]),
            ),
          ),
        ],
      ]),
    );
  }
}

// Wrapper bar from the Figma set.
class ContextBar extends StatelessWidget {
  const ContextBar({super.key, required this.children});
  final List<Widget> children;
  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(color: const Color(0xFF202022), borderRadius: BorderRadius.circular(5)),
        child: Wrap(spacing: 8, crossAxisAlignment: WrapCrossAlignment.center, children: children),
      );
}
