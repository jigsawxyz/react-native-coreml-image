import Foundation

@available(iOS 11.0, *)
@objc(CoreMLImageManager)
class CoreMLImageManager: RCTViewManager {
  
  override func view() -> UIView! {
    return CoreMLImage();
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
}
