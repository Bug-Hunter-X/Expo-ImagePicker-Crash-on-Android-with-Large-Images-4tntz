```javascript
import * as ImagePicker from 'expo-image-picker';

async function pickImage() {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.cancelled) {
    // Check image size before processing
    const imageSize = await getImageSize(result.uri);
    if (imageSize > 5 * 1024 * 1024) { // 5MB threshold
      alert('Image is too large. Please select a smaller image.');
      return;
    }
    // Process the image
    // ... your image processing code here ...
  } else {
    console.log('Image selection cancelled');
  }
}

//Helper function to get image size
async function getImageSize(uri) {
  try {
      const response = await fetch(uri);
      return response.headers.get('content-length');
  } catch (error) {
      console.error('Error getting image size', error);
      return null;
  }
}
```