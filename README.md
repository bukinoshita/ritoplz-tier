# ritoplz-tier
> Get League of Legends tier information

[![Codeship Status for bukinoshita/ritoplz-tier](https://app.codeship.com/projects/7525de90-a697-0134-62b2-423aeef756c2/status?branch=master)](https://app.codeship.com/projects/191081)
[![GitHub release](https://img.shields.io/github/release/bukinoshita/ritoplz-tier.svg)](https://www.npmjs.com/package/ritoplz-tier)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/bukinoshita/ritoplz-tier/master/LICENSE)

## Install

```bash
$ npm install --save ritoplz-tier
```

## Usage

```js
const getTier = require('ritoplz-tier')

getTier('bronze')

// {
//   "flag": {
//     "original": "https://ritoplz-tier.now.sh/bronze.png",
//     "small": "https://ritoplz-tier.now.sh/bronze_small.png",
//     "large": "https://ritoplz-tier.now.sh/bronze_large.png"
//   },
//   "tier": {
//     "name": "bronze"
//   }
//  }
```

## API

### getTier(input)

#### input

Type: `string`<br>
Options: `bronze`, `silver`, `gold`, `platinum`, `diamond`, `master`, `challenger`, `unranked`<br>
Required

Get tier information

## Related

[Ritoplz](https://github.com/ritoplz/ritoplz) - League of Legends Rankings

## License

[MIT](https://raw.githubusercontent.com/bukinoshita/ritoplz-tier/master/LICENSE) &copy; Bu Kinoshita
