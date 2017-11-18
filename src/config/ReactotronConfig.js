import Reactotron from 'reactotron-react-native';

if(__DEV__) {
  console.tron = Reactotron
    .configure()
    .useReactNative()
    .connect();
}
