# stalcraft.js - [Stalcraft.net](https://stalcraft.net/) API Wrapper

_This is not an Official Stalcraft Package!_

## Todo

- Verify API Key
- Auction Price History - <https://eapi.stalcraft.net/{region}/auction/{item}/history>
- Auction Lots - <https://eapi.stalcraft.net/{region}/auction/{item}/lots>
- Characters List - <https://eapi.stalcraft.net/{region}/characters>
- Clan Information - <https://eapi.stalcraft.net/{region}/clan/{clan-id}/info>
- Clan Members - <https://eapi.stalcraft.net/{region}/clan/{clan-id}/members>
- Clans List - <https://eapi.stalcraft.net/{region}/clans>
- Emission Information - <https://eapi.stalcraft.net/{region}/emission>
- List of Friends - <https://eapi.stalcraft.net/{region}/friends/{character}>

## Install

```bash
npm install stalcraft.js
pnpm install stalcraft.js
yarn add stalcraft.js
```

## Usage

<!-- To use `stalcraft.js` you will need to generate an API key on the [FaceIT Developer Website](https://developers.faceit.com/) and replace `your_api_key` with it: -->

```js
// Javascript
const Stalcraft = require("stalcraft.js");
// Typescript
import Stalcraft from "stalcraft.js";
const stalcraft = new Stalcraft(`your-api-key`);
```

<!-- You will now be able to test if your API key is correct by using the following function: -->

<!-- ```js -->
<!-- console.log(await stalcraft.testKey()); -->
<!-- ``` -->

<!-- If you get a response of `true` your API key is valid. If you get a response of `false` your API key is invalid. -->
