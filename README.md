Night Out Roulette
====================================

## Description

Night Out Roulette is an restaurant finder app built in React Native with Expo. [Expo](https://expo.io/tools) is a development tool that allows sharing and publishing mobile projects so that one can test them directly on a mobile device using the Expo Client app.

Night Out Roulette exercises the [Yelp Business Endpoint API](https://www.yelp.com/developers/documentation/v3/business_search) to find restaurants based on factors like cuisine type, maximum distance, price range, and more.

## System Requirements
- [NodeJS 10.16+ (latest release recommended)](https://nodejs.org/en/)
- NPM 6.2+ (latest release recommended, comes with NodeJS)
- [Expo Client app on a mobile device](https://expo.io/tools)

## Running
Before starting, obtain an API key for the Yelp Business Endpoint. Store the key like so in a .env file in the root of the directory. Make sure to also add the .env file to a .gitignore so as not to publish sensitive data to Github:

```
YELP_API_KEY = <API_KEY_HERE>
```

To run the app locally, first, clone this repository to your local machine.

```bash
git clone https://github.com/cs394-w20/night-out-roulette.git
cd night-out-roulette
```

Then, In the root directory, open a terminal window and install all necessary packages:

```bash
npm install
```

Then, in the same directory, run the following Expo command to begin a local server to host building and packaging services:

```bash
expo start
```

Finally, use a smartphone with the Expo Client app to scan the resulting QR code.

In order to deploy the app to the Expo platform, sign in with an Expo account, and use the following command:

```bash
expo publish
```

## License

This project is open source following the MIT License guidelines.
