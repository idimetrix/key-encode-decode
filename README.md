# key-encode-decode
`key-encode-decode` is a simple Node.js package for encoding and decoding strings using a specified key with AES-256-CBC encryption.

## Installation

To install the package, use npm:

```bash
pnpm add key-encode-decode

yarn install key-encode-decode

npm install key-encode-decode
```

## Usage

```typescript
import { encodeWithKey, decodeWithKey } from 'key-encode-decode';

const key = 'your-encryption-key-32-characters-long'; // Ensure the key is 32 characters long
const data = 'Hello, World!';

// Encode the data
const encoded = encodeWithKey(data, key);
console.log('Encoded:', encoded);

// Decode the data
const decoded = decodeWithKey(encoded, key);
console.log('Decoded:', decoded);
```


## encodeWithKey(decodedData: string, key: string): string
Encodes a string using the specified key. The key must be a 32-character string (256 bits).

### Parameters:

### decodedData: The string to be encoded.
key: The encryption key (must be 32 characters long).
Returns:

The encoded string in hexadecimal format.

## decodeWithKey(encodedData: string, key: string): string
Decodes a string using the specified key. The key must be a 32-character string (256 bits).

### Parameters:

### encodedData: The string to be decoded (in hexadecimal format).
key: The encryption key (must be 32 characters long).
Returns:

The decoded string.

## tsup
Bundle your TypeScript library with no config, powered by esbuild.

https://tsup.egoist.dev/

## How to use this
1. install dependencies
```
# pnpm
$ pnpm install

# yarn
$ yarn install

# npm
$ npm install
```
2. Add your code to `src`
3. Add export statement to `src/index.ts`
4. Test build command to build `src`.
Once the command works properly, you will see `dist` folder.

```zsh
# pnpm
$ pnpm run build

# yarn
$ yarn run build

# npm
$ npm run build
```
5. Publish your package

```zsh
$ npm publish
```


## test package
https://www.npmjs.com/package/key-encode-decode
