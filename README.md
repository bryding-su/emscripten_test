### Installation

_Note: Requires Python 3_

1. Follow this guide to install empscripten https://emscripten.org/docs/getting_started/downloads.html
2. Run `npm ci` in repo root

### Building the Wasm

1. Ensure that emsdk is activated and the ./emsdk_env.sh has been run, which was explained in Installation step 1.
2. Run `npm run buildWasm`

- Output wasm file should appear in /js

### Running the server

1. Run `npm run start`

3. Navigate to localhost:1956 in your browser
