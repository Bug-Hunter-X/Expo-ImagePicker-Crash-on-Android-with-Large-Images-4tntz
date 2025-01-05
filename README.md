# Expo ImagePicker Crash on Android

This repository demonstrates a bug in the Expo ImagePicker library where selecting large images from the device's gallery on Android leads to an application crash. The crash lacks a clear error message, making debugging challenging.  The provided solution implements error handling and image size checks to mitigate the issue.

## Bug Description

Selecting a large image from the gallery using Expo ImagePicker results in an unexpected app crash on Android. The console doesn't show a specific error, hindering debugging efforts. 

## Solution

The provided solution includes additional error handling and image size checks to prevent crashes. The image size is checked before processing, and if the image exceeds a threshold, a user-friendly message is displayed to the user.  This prevents the crash and informs the user that the selected image is too large.  Additionally, more robust error handling is included to catch potential issues during image processing.