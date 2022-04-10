# node-rics
RICS Api Node JS Library

Usage

Get a value for a gift card

import { Rics, GiftCardsResponse } from './modules/node-rics/node-rics';
const API_TOKEn = '*Your Token*';

var giftCardNumber = '1234';
var rics = new Rics(API_TOKEN);

var data = await rics.GetGiftCardByNumber(giftCardNumber) as GiftCardsResponse;
console.log(data.GiftCards[0].GiftCardValue);
