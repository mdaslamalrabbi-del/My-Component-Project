// pubspec: file_picker: ^8.0.0 (add desktop_drop for real drag and drop on desktop)
import 'package:file_picker/file_picker.dart';

enum DropZoneVariant { file, empty }

class DropZone extends StatelessWidget {
  const DropZone({super.key, this.variant = DropZoneVariant.file, required this.caption,
      this.icon, this.onFiles, this.onTap});
  final DropZoneVariant variant;
  final String caption;
  final Widget? icon;
  final ValueChanged<List<PlatformFile>>? onFiles;
  final VoidCallback? onTap;

  Future<void> _pick() async {
    final res = await FilePicker.platform.pickFiles(allowMultiple: true);
    if (res != null) onFiles?.(res.files);
  }

  @override
  Widget build(BuildContext context) => Semantics(
        button: true,
        child: InkWell(
          borderRadius: BorderRadius.circular(12),
          onTap: variant == DropZoneVariant.file ? _pick : onTap,
          child: Container(
            width: 262, height: 140, padding: const EdgeInsets.symmetric(horizontal: 24),
            decoration: BoxDecoration(
              color: const Color(0xFF181715),
              border: Border.all(color: const Color(0xFF27272A)),
              borderRadius: BorderRadius.circular(12)),
            child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
              Container(
                width: 40, height: 40,
                decoration: BoxDecoration(color: const Color(0xFF121113), borderRadius: BorderRadius.circular(6)),
                child: IconTheme(data: const IconThemeData(size: 20, color: Color(0xFF4A4850)), child: icon ?? const SizedBox()),
              ),
              const SizedBox(height: 16),
              Text(caption, textAlign: TextAlign.center,
                  style: const TextStyle(color: Color(0xFFA1A1AA), fontSize: 13, height: 18 / 13)),
            ]),
          ),
        ),
      );
}
