#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
// import header
#import "RNCConfig.h"
#import <Firebase.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [FIRApp configure];
  self.moduleName = @"Mektapp";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};
  
  // then read individual keys like:
  NSString *apiUrl = [RNCConfig envFor:@"USERNAME"];

  // or just fetch the whole config
  //NSDictionary *config = [RNCConfig env];
  
  NSLog(@"env-var%@", apiUrl);

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (BOOL)bridgelessEnabled
{
    return YES;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self getBundleURL];
}

- (NSURL *)getBundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
