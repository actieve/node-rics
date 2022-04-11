# Node-Rics

RICS Api Node JS Library for accessing the Enterprise Rics Services

## Installation

```bash
npm install node-rics
```

## TypeSript Usage

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

## Functions

```typescript
    
# Returns the AR Customer Credit Limit
GetArCustomerCreditLimit(customerId: string): Promise<unknown>;

# Returns the custom entries that match the query
GetCustomEntry(types: CustomEntryType[], tagTypes: TagType[]): Promise<unknown>;

# Get a single customer given an email address
GetCustomersByEMail(email: string): Promise<unknown>;

# Get a single customer given the identifier
GetCustomerById(customerId: string): Promise<unknown>;

# Returns the results of a full customer query
GetCustomer(query: CustomerQuery): Promise<unknown>;

# Returns the Customer Details from a Customer Detail Query
GetCustomerDetails(query: CustomerDetailQuery): Promise<unknown>;

# Returns the customer purchase details
GetCustomerPurchaseHistory(customerId: string, take?: Number, skip?: Number): Promise<unknown>;

# Save customer information to the system
SaveCustomer(customer: CustomerInfo): Promise<unknown>;

# List the various discounts in the system
GetDiscountReason(): Promise<unknown>;

# Query for a users frequency rewards
GetFrequentBuyerRewards(customerId: string): Promise<unknown>;

# Look up buyer activity for frequent customers
GetFrequentBuyerActivity(query: BuyerActivityQuery): Promise<unknown>;

# Look up gift card information based on the unique identifier
GetGiftCardById(cardId: string): Promise<unknown>;

# Search for a gift card by a number
GetGiftCardByNumber(cardNumber: string): Promise<unknown>;

# Get the gift card transactions from the Rics System
GetGiftCardTransaction(query: GiftCardTransactionQuery): Promise<unknown>;

# Save the updated information to Rics
SaveGiftCard(info: GiftCardInfo): Promise<unknown>;

# Check the Rics system for inventory
GetInventoryOnHand(query: InventoryQuery): Promise<unknown>;

# Get a list of inventory transactions matching the defined query
GetInventoryTransaction(query: InventoryTransactionQuery): Promise<unknown>;

# Return a list of non sellable batch records
GetNonSellableBatch(query: NonSellableBatchQuery): Promise<unknown>;

# Return a list of non sellable batch details
GetNonSellableBatchDetails(query: NonSellableBatchDetailsQuery): Promise<unknown>;

# Query the system for POS Transactions
GetPOSTransaction(query: PosTransactionQuery): Promise<unknown>;

# Get a list of products that match the query
GetProduct(query: ProductQuery): Promise<unknown>;

# Get a list of product details that match the query
GetProductDetails(query: ProductDetailQuery): Promise<unknown>;

# Search for Purchase Orders
GetPurchaseOrder(query: PurchaseOrderQuery): Promise<unknown>;

# Saves the purchase order to the system
SavePurchaseOrder(po: PurchaseOrder): Promise<unknown>;

# Get any Receipt information from a list of TicketNumbers
GetReceipt(ticketNumbers: string[]): Promise<unknown>;

# Search for sales on a particular salesman
GetSalesBySalesperson(startDate: Date, endDate: Date, salesPersonUsername?: string, sortBy?: SortBy, storeCode?: Number, skip?: Number, take?: Number): Promise<unknown>;

# Search for sales on a particular sku
GetSalesBySKU(startDate: Date, endDate: Date, sku?: string, sortBy?: SortBy, storeCode?: Number, skip?: Number, take?: Number): Promise<unknown>;

# Search for sales for a store code between two dates
GetSalesByStoreCode(startDate: Date, endDate: Date, storeCode: Number, skip?: Number, take?: Number): Promise<unknown>;

# Search for sales for a store code between two dates at a particular time
GetSalesByTimeOfDay(startDate: Date, endDate: Date, storeCode: Number): Promise<unknown>;

# Search for tags assigned to customers
GetCustomerTags(customerId: string[]): Promise<unknown>;

# Query for organized tags in the system
GetOrganizationTags(tagType: string): Promise<unknown>;
```