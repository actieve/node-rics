# Node-Rics

RICS Api Node JS Library for accessing the Enterprise Rics Services

## Installation

```bash
npm install node-rics
```

## Usage

```typescript
# Get a value for a gift card

import { Rics, GiftCardsResponse } from 'node-rics';
const API_TOKEN = 'Your Token';
var giftCardNumber = '1234';
var rics = new Rics(API_TOKEN);
var data = await rics.GetGiftCardByNumber(giftCardNumber) as GiftCardsResponse;
console.log(data.GiftCards[0].GiftCardValue);
```

## JavaScript Usage

```javascript

var ricsLibrary = require('node-rics');

const API_TOKEN = 'Your Token';
var rics = new ricsLibrary.Rics(API_TOKEN);
var query = new ricsLibrary.ProductDetailQuery();
query.SKU = "123046P";

rics.GetProduct(query).then((data) => {
    console.log(data);
});
```