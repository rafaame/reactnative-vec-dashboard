debug-apk:
	rm -rf android/app/src/main/assets/index.android.bundle
	rm -rf android/app/build/outputs/apk/*.apk
	react-native bundle --dev false --platform android --entry-file index.android.js --bundle-output ./android/app/src/main/assets/index.android.bundle --assets-dest ./android/app/src/main/assets/
	cd android && ./gradlew assembleDebug

release-apk:
	rm -rf android/app/src/main/assets/index.android.bundle
	rm -rf android/app/build/outputs/apk/*.apk
	react-native bundle --dev false --platform android --entry-file index.android.js --bundle-output ./android/app/src/main/assets/index.android.bundle --assets-dest ./android/app/src/main/assets/
	cd android && ./gradlew assembleRelease

debug-deploy:
	adb install -r android/app/build/outputs/apk/app-debug.apk
	adb shell am start -n me.rafaa.vec.dashboard/.MainActivity

release-deploy:
	adb install -r android/app/build/outputs/apk/app-release.apk
	adb shell am start -n me.rafaa.vec.dashboard/.MainActivity

uninstall:
	adb uninstall me.rafaa.vec.dashboard

logs:
	react-native log-android

device-unlock:
	adb shell input keyevent 82

device-reboot:
	adb reboot