#import <React/RCTBridgeModule.h>
#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(CoreMLImageManager, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(modelFile, NSString);
RCT_EXPORT_VIEW_PROPERTY(onClassification, RCTBubblingEventBlock);
@end
