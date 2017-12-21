# Live Image Recognition through CoreML and ReactNative

![Alt Text](https://github.com/jigsawxyz/react-native-coreml-image-example/raw/master/images/demo.gif)

This component provides a live camera view that allows you to integrate CoreML's Image Recognition into your apps.

For full details on how to use it, see the documentation below, but essentially the steps are:

1. Create & train or download an existing machine learning model
2. Drop the .mlmodelc file into your project
3. Add this component to one of your views

We have an example project (based on hot dog or not hot dog 🌭) here - https://github.com/jigsawxyz/react-native-coreml-image-example.

And a blog post about the project here - https://medium.com/jigsaw-xyz/realtime-image-recognition-in-reactnative-with-coreml-24ed7d414f23

## Installation instructions
Within your react native project, run the following command to install the module:

```javascript
npm install react-native-core-ml-image --save
```

Once that has completed, run the following command to link it to your project:

```javascript
react-native link
```

## Set your project up to use Swift
If your project isn't yet setup to use Swift, there are a few final steps you need to go through:

1. In XCode, right click on your project, then on New File...
2. Choose a Swift file, click next
3. You'll then be asked if you want to create a bridging header - click yes to this
4. The module is written in Swift 4, so if you get errors compiling, go to your project's Build Settings in XCode, find Swift Language Version and make sure it is set to Swift 4.0

## Add a CoreML Model to your project
Next, you need to add a CoreML Model to your project.
Apple provides a number of open source models here - https://developer.apple.com/machine-learning/

We're in the process of writing a tutorial on how to create your own model using TuriCreate. Stay tuned for that.

Once you've downloaded, or created, a CoreML Model, rename it from .mlmodel to .mlmodelc and drop it into your XCode project (ensure that you add it to your main project target if offered the choice).

Go to the Build Phases tab of your project in XCode, and check that the model file you added is listed under the Copy Bundle Resources section. If not, add it.

## Add NSCameraUsageDescription to your info.plist
The component uses the camera to identify objects, so you need to add a description to the NSCameraUsageDescription in your info.plist file.

## Using the component in your app
Using the component in your app is simple. First import the module:

```javascript
import CoreMLImage from "react-native-core-ml-image";
```

... then, add the component wherever you want it...

```javascript
    <CoreMLImage 
        modelFile="MyModelFile" 
        onClassification={(evt) => this.onClassification(evt)}/>
```

You must provide a modelFile. This should be the name of the model file you added to your project without any suffix. E.g. if your model file was called MyModelFile.mlmodelc then you should set modelFile as MyModelFile.

Remember - the model file must have the file ending .mlmodelc to work.

### onClassification
The onClassification event allows you to receive updates when a new object has been classified/identified. The callback includes data in the following format:

```javascript
[{
    identifier: "cat",
    confidence: 0.87
},
{
    identifier: "dog",
    confidence: 0.4
}]
```

## Overlaying content on top of the camera view
One common use of this component is to show details in real time about which object has been recognised as an overlay (check out our example project for more on this).

```javascript
    <CoreMLImage 
        modelFile="DogCatDolphin" 
        onClassification={(evt) => this.onClassification(evt)}>
            <View style={styles.container}>
                <Text style={styles.info}>{classification}</Text>
            </View>
    </CoreMLImage>
```

```javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  info: {
    fontSize: 20,
    color: "#ffffff",
    textAlign: 'center',
    fontWeight: "900",
    margin: 10,
  }
});
```
