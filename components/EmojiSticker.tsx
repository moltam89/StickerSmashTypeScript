import { ImageSourcePropType, View } from "react-native";
import Animated from "react-native-reanimated";

interface EmojiStickerProps {
  imageSize: number;
  stickerSource: ImageSourcePropType;
}

export default function EmojiSticker({
  imageSize,
  stickerSource,
}: EmojiStickerProps) {
  return (
    <View style={{ top: -350 }}>
      <Animated.Image
        source={stickerSource}
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
}
