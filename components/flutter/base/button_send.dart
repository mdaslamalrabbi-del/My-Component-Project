enum SendState { send, pause, disabled }

class ButtonSend extends StatelessWidget {
  const ButtonSend({super.key, this.state = SendState.send, this.onPressed});
  final SendState state;
  final VoidCallback? onPressed;

  @override
  Widget build(BuildContext context) {
    final send = state == SendState.send;
    final icon = switch (state) {
      SendState.send => const Icon(Icons.arrow_upward, size: 16, color: Colors.white),
      SendState.pause => const Icon(Icons.crop_square, size: 20, color: Color(0xFFD2CFD9)),
      SendState.disabled => const Icon(Icons.arrow_upward, size: 20, color: Color(0xFF6C6A64)),
    };
    return GestureDetector(
      onTap: state == SendState.disabled ? null : onPressed,
      child: Container(
        width: 32,
        height: 32,
        padding: EdgeInsets.all(send ? 1 : 0),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(8),
          color: send ? null : const Color(0xFF272729),
          gradient: send
              ? const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight,
                  colors: [Color(0xFF0718D2), Color(0xFFCF8BFF), Color(0xFFA4ABFF)], stops: [0, .48, 1])
              : null,
        ),
        child: Container(
          alignment: Alignment.center,
          decoration: BoxDecoration(
              color: send ? const Color(0xFF9C86FF) : null, borderRadius: BorderRadius.circular(7)),
          child: icon,
        ),
      ),
    );
  }
}
