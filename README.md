Night Out Roulette
====================================

## Description

Night Out Roulette is an restaurant finder app built in React Native with Expo.

It exercises the [Yelp Business Endpoint API](https://www.yelp.com/developers/documentation/v3/business_search) to find restaurants based on factors like cuisine type, maximum distance, price range, and more.

## System Requirements
- NodeJS 10.16+ (latest release recommended)
- NPM 6.2+ (latest release recommended)

## Running
Before starting, obtain an API key for the Yelp Business Endpoint. Store the key like so in a .env file in the root of the directory:

```
YELP_API_KEY = <API_KEY_HERE>
```

To run the app locally, clone this repository to your local machine. In the root directory, open a terminal window and install all necessary packages:

```bash
npm install
```

Then, use the Expo tool to begin a local server to host building and packaging services:

```bash
expo start
```

Finally, use a smartphone with the Expo app to scan the resulting QR code.

In order to deploy the app to the Expo platform, sign in with an Expo account, and use the following command:

```bash
expo publish
```

## License

This project is open source following the MIT License guidelines.
