# sampleApp - Cities App
New to React Native? Follow this guide to learn and implement a functional React Native app! This is a starter app to get an idea of what to install to start a project and basic syntax. The code is based on the outdated tutorial [here](https://www.youtube.com/watch?v=frvXANSaSec).

## Installation
Go to Facebook's installation [tutorial](https://facebook.github.io/react-native/docs/getting-started.html) and follow the steps with these configurations: 
- React Native CLI Quickstart 
- Development OS: macOS
- Target OS: Android

You should download Android Studio and Homebrew from their website before starting. 

The following steps should help in debugging. 
1. Go to the home directory. 
2. Type `react-native -v` to verify the version. 
   - If you get `command not found` then the following steps that edit your `.bash_profile` may help. 
     1. `ls-la` 
     2. `sudo nano .bash_profile`
        - `sudo` forces your computer to give access to that file 
        - `nano` gives you the ability to write/edit it 
     3. To edit: `Control + O` then press `Enter` 
     4. To save/write: `Control + X` and you may need to type `Y` for "yes" to write. 
     5. Copy and paste the path from the tutorial website and paste this at the bottom IF you are having trouble running it. 
        ```
        npm set prefix ~/.npm
        PATH="$HOME/.npm/bin:$PATH"
        PATH="./node_modules/.bin:$PATH"
        ```
     6. Then, you have to type the following command to link your path to your downloaded components: 
        `source ~/.bash_profile`
        - This command sets your path. DO NOT IGNORE.
         
## Starting your Project 
1. Use terminal to change to the directory you want to make your project.
2. 'react-native init sampleApp'
3. `App.js` will be the file you need to edit at first.
4. To run in Android: 
   - `react-native run-android`
   - You need to have the android emulator on from Android Studio running before you run the command, otherwise your computer might crash. 
     - Open Android Studio-> AVD Manager -> Create Virtual Device 
5. To run in iOS: 
   - `react-native run-ios`
   - Have XCode open first.
   
## Other Notes 
- The “-g” in npm install means that react native is installing globally 
- Your .bash_profile is important because it gives you access to downloaded components like react native. 
  - If you don’t have one the make one!!
  
If you still get “command not found” when trying to init a React Native project, then it’s probably because you don’t have a PATH established to run React Native. If this is the case, please follow the following steps: 
1. Type this command in Terminal to establish a PATH:
   - `source $HOME/.bash_profile`
   - If “no such file found” error, then it is fine and ignore this command




