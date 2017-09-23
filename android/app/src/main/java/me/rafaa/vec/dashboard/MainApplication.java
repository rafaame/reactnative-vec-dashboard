package me.rafaa.vec.dashboard;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.BV.LinearGradient.LinearGradientPackage;
import com.github.xinthink.rnmk.ReactMaterialKitPackage;
import com.tradle.react.UdpSocketsModule;
import com.bitgo.randombytes.RandomBytesPackage;
import org.capslock.RNDeviceBrightness.RNDeviceBrightness;
import com.horcrux.svg.RNSvgPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import me.rafaa.react.LockManagerModule;
import com.peel.react.TcpSocketsModule;
import com.github.yamill.orientation.OrientationPackage;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new LinearGradientPackage(),
            new ReactMaterialKitPackage(),
          new UdpSocketsModule(),
          new RandomBytesPackage(),
          new RNDeviceBrightness(),
          new RNSvgPackage(),
          new VectorIconsPackage(),
          new LockManagerModule(),
          new TcpSocketsModule(),
          new OrientationPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
