class Bar { const Bar(this.h, this.on); final double h; final bool on; }
class Model { const Model(this.name, this.usage, this.share); final String name, usage, share; }

class AnalyticsCard extends StatelessWidget {
  const AnalyticsCard({super.key, required this.bars, required this.yLabels, required this.xLabels,
      required this.models, this.activeTab = "Overview", this.activeRange = "All"});
  final List<Bar> bars; final List<String> yLabels, xLabels; final List<Model> models;
  final String activeTab, activeRange;

  static const bg = Color(0xFF181715), pill = Color(0xFF272729), muted = Color(0xFFA1A1AA),
      bar = Color(0xFF7F64F7), dot = Color(0xFF9C86FF);

  Widget _pill(String l, bool sel) => Container(
        height: 20, padding: const EdgeInsets.symmetric(horizontal: 6), alignment: Alignment.center,
        decoration: BoxDecoration(color: sel ? pill : null, borderRadius: BorderRadius.circular(4)),
        child: Text(l, style: TextStyle(fontSize: 13, fontWeight: FontWeight.w500, color: sel ? Colors.white : muted)),
      );
  Widget _muted(String t) => Text(t, style: const TextStyle(fontSize: 12, color: muted));

  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(color: bg, borderRadius: BorderRadius.circular(12)),
        child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          Row(children: [
            for (final t in ["Overview", "Models"]) _pill(t, t == activeTab),
            const Spacer(),
            for (final r in ["All", "30d", "7d"]) _pill(r, r == activeRange),
          ]),
          const SizedBox(height: 20),
          SizedBox(height: 161, child: Row(crossAxisAlignment: CrossAxisAlignment.end, children: [
            SizedBox(width: 45, child: Column(mainAxisAlignment: MainAxisAlignment.spaceBetween,
                crossAxisAlignment: CrossAxisAlignment.end, children: yLabels.map(_muted).toList())),
            const SizedBox(width: 16),
            Expanded(child: Padding(padding: const EdgeInsets.only(right: 12), child: Row(
                crossAxisAlignment: CrossAxisAlignment.end,
                children: [for (final b in bars) Expanded(child: Container(
                    margin: const EdgeInsets.symmetric(horizontal: 3), height: b.h,
                    decoration: BoxDecoration(color: b.on ? bar : pill,
                        borderRadius: const BorderRadius.vertical(top: Radius.circular(2)))))]))),
          ])),
          const SizedBox(height: 12),
          Padding(padding: const EdgeInsets.only(left: 76, right: 12),
              child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: xLabels.map(_muted).toList())),
          const SizedBox(height: 20),
          for (final m in models) Padding(padding: const EdgeInsets.only(bottom: 14), child: Row(children: [
            Container(width: 10, height: 10, decoration: BoxDecoration(color: dot, borderRadius: BorderRadius.circular(2))),
            const SizedBox(width: 8),
            Text(m.name, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w500, color: Colors.white)),
            const Spacer(), _muted(m.usage), const SizedBox(width: 32),
            SizedBox(width: 60, child: Text(m.share, textAlign: TextAlign.right,
                style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w500, color: Colors.white))),
          ])),
        ]),
      );
}
