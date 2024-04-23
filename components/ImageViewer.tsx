import { StyleSheet, Image, ImageSourcePropType } from "react-native";

interface ImageViewerProps {
  placeholderImageSource: ImageSourcePropType;
  imageURI?: string;
}

export default function ImageViewer({
  placeholderImageSource,
  imageURI,
}: ImageViewerProps) {
  return (
    <Image
      source={imageURI ? { uri: imageURI } : placeholderImageSource}
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
