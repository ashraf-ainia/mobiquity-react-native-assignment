# Mobiquity react-native assignment

## Overview

This is a React Native app created to solve the coding challange.<br>
The app was initialized using "npx react-native init" command.<br>
The app is written in Javascript.
___

## Run the app
[Setup development environment] based on your pc type.<br>
Clone the repository, then run below commands:

### For run on simulator/device:

- npm install
- npx pod-install
- npm run ios
- npm run android

### For running tests:
- npm run test
<br>or
- npm run test:watch

### Demo video
https://drive.google.com/file/d/1esz5SKrOrJjEX9QNyzXXCAZSl9-XqlHv/view?usp=sharing
___

## Application functionalities

### Main screen:

Main screen has the following two functionalities:
1. Renders a search text input.
2. Renders a list of common terms cards in a horizontal scroll view.
3. To fetch a list of images: each term card can be clicked based on the term topic or by typing in the search input.
4. Renders a paginated list of images "20 images per API call" fetched from **Flickr** API after clicking any term card or by typing in the search input.
5. Another set of images will be fetched whenever screen reached the bottom of the images list.
6. Images list will be reset every time the user clicked a new term card or typed a new text in the search input.

___

## Useful information
- Flickr API documentation: https://www.flickr.com/services/api

___

## Third party libraries

### Production:
- [axios]: A promise based HTTP client, used for configure a Flickr API instance as Singleton design pattern and use it through the app.

- [use-debounce]: A React hook for value and callback debouncing

### Development:
- [@testing-library/react-native]: A lightweight solution for testing React Native components.

___

## App architecture

### Architecture pattern:
I decided to use Container/Component pattern rather than using the state patern "like Redux" because the app data is not shared between multible screens.

### Folders structure:
- screens: contains the app containers components.
- components: contains the app view components.
- config: contains the app overall configurations and keys.
- constants: contains constants values that will not be changed through the app.
- services: handling app data from sources like http requests and local storage.
- axios: contains HTTP clients instances.

[axios]: https://github.com/axios/axios
[use-debounce]: https://www.npmjs.com/package/use-debounce
[@testing-library/react-native]: https://testing-library.com/docs/react-native-testing-library/intro
[Setup development environment]: https://reactnative.dev/docs/environment-setup