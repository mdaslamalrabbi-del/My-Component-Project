enum StepStatus { done, caret, number }

class StepIndicator extends StatelessWidget {
  const StepIndicator(this.status, {super.key, this.number});
  final StepStatus status;
  final int? number;

  @override
  Widget build(BuildContext context) {
    const c = Color(0xFFA1A1AA);
    switch (status) {
      case StepStatus.done:
        return Container(
            width: 12, height: 12,
            decoration: const BoxDecoration(color: c, shape: BoxShape.circle),
            child: const Icon(Icons.check, size: 8, color: Color(0xFF181715)));
      case StepStatus.caret:
        return const Icon(Icons.chevron_right, size: 12, color: c);
      case StepStatus.number:
        return SizedBox(width: 12, child: Text("$number", textAlign: TextAlign.center,
            style: const TextStyle(fontSize: 11, height: 16 / 11, color: c)));
    }
  }
}
