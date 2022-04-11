"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesPerson = exports.Cashier = exports.TransactionCard = exports.GiftCardTransactionQuery = exports.GiftCardsResponse = exports.GiftCard = exports.GiftCardResponse = exports.GiftCardDetail = exports.BuyerActivityResponse = exports.BuyerPlan = exports.BuyerReward = exports.Transaction = exports.Buyer = exports.FBCustomer = exports.BuyerActivityQuery = exports.FrequentBuyerRewardsResponse = exports.RewardCustomer = exports.Reward = exports.Plan = exports.DiscountReasonResponse = exports.DiscountReason = exports.SaveCustomerResponse = exports.CustomerInfo = exports.CustomerPurchaseResponse = exports.SaleHeader = exports.CustomerPurchase = exports.CustomerDetailResponse = exports.CustomerDetails = exports.Relation = exports.DetailsCustomEntry = exports.CustomerDetailQuery = exports.CustomerResponse = exports.Customer = exports.Address = exports.ResultStatistics = exports.CustomerQuery = exports.ARCustomerCreditLimitResponse = exports.ARCustomerCreditLimit = exports.CustomEntryResponse = exports.CustomEntry = exports.PurchaseOrderType = exports.SortBy = exports.POSTransactionType = exports.SaleType = exports.NonSellableBatchType = exports.TransactionType = exports.Salutation = exports.Gender = exports.TagType = exports.CustomEntryType = void 0;
exports.Rics = exports.PurchaseOrderResponse = exports.PurchaseOrderQuery = exports.GenericResponse = exports.PurchaseOrder = exports.PurchaseOrderDetail = exports.PurchaseOrderInfo = exports.ReceiptResponse = exports.Receipt = exports.SalesResponse = exports.SaleInfo = exports.TagResponse = exports.Tag = exports.CustomerTagResponse = exports.CustomerTag = exports.ProductResponse = exports.ProductDetailQuery = exports.ProductQuery = exports.PosTransactionResponse = exports.Sale = exports.BatchPayout = exports.SaleDetails = exports.SpecialOrderLayaway = exports.SaleTax = exports.CustomerPurchaseDetails = exports.Product = exports.ProductDetailItem = exports.Tender = exports.SaleCustomer = exports.SaleHeaderDetail = exports.User = exports.PosTransactionQuery = exports.NonSellableBatchDetailsResponse = exports.NonSellableBatchDetailsQuery = exports.NonSellableBatchResponse = exports.NonSellableBatchQuery = exports.NonSellableBatch = exports.NonSellableBatchDetail = exports.TransactionResponse = exports.InventoryTransaction = exports.ProductItem = exports.InventoryTransactionQuery = exports.InventoryResponse = exports.Store = exports.Item = exports.InventoryQuery = exports.GiftCardSavedResponse = exports.GiftCardInfo = exports.GiftCardTransactionResponse = exports.GiftCardTransaction = void 0;
const request = require("request");
var CustomEntryType;
(function (CustomEntryType) {
    CustomEntryType["SingleSelect"] = "SingleSelect";
    CustomEntryType["MultipleSelect"] = "MultipleSelect";
    CustomEntryType["CustomEntry"] = "CustomEntry";
})(CustomEntryType = exports.CustomEntryType || (exports.CustomEntryType = {}));
var TagType;
(function (TagType) {
    TagType["SKU"] = "SKU";
    TagType["Customer"] = "Customer";
    TagType["Store"] = "Store";
    TagType["Class"] = "Class";
    TagType["Color"] = "Color";
    TagType["PriceDiscount"] = "PriceDiscount";
})(TagType = exports.TagType || (exports.TagType = {}));
var Gender;
(function (Gender) {
    Gender["M"] = "M";
    Gender["F"] = "F";
    Gender["Male"] = "Male";
    Gender["Female"] = "Female";
    Gender["N"] = "N";
    Gender["NonBinary"] = "NonBinary";
})(Gender = exports.Gender || (exports.Gender = {}));
var Salutation;
(function (Salutation) {
    Salutation["Mr"] = "Mr";
    Salutation["Mrs"] = "Mrs";
    Salutation["Ms"] = "Ms";
    Salutation["Dr"] = "Dr";
})(Salutation = exports.Salutation || (exports.Salutation = {}));
var TransactionType;
(function (TransactionType) {
    TransactionType["TransferOut"] = "TransferOut";
    TransactionType["TransferIn"] = "TransferIn";
    TransactionType["PurchaseOrderReceipt"] = "PurchaseOrderReceipt";
    TransactionType["PhysicalCount"] = "PhysicalCount";
    TransactionType["ManualReceipt"] = "ManualReceipt";
    TransactionType["Returned"] = "Returned";
    TransactionType["Sale"] = "Sale";
    TransactionType["Migration"] = "Migration";
    TransactionType["TransferOutCancel"] = "TransferOutCancel";
    TransactionType["PhysicalAdjust"] = "PhysicalAdjust";
    TransactionType["TransferInCancel"] = "TransferInCancel";
    TransactionType["SalesOrder"] = "SalesOrder";
    TransactionType["RMA"] = "RMA";
    TransactionType["MergedPhysical"] = "MergedPhysical";
    TransactionType["ManualAWCUpdate"] = "ManualAWCUpdate";
    TransactionType["PendingOrderTransfer"] = "PendingOrderTransfer";
    TransactionType["AddToNonSellable"] = "AddToNonSellable";
    TransactionType["ReturnFromNonSellable"] = "ReturnFromNonSellable";
})(TransactionType = exports.TransactionType || (exports.TransactionType = {}));
var NonSellableBatchType;
(function (NonSellableBatchType) {
    NonSellableBatchType["ReturnToSupplier"] = "ReturnToSupplier";
    NonSellableBatchType["SellOnSecondaryMarket"] = "SellOnSecondaryMarket";
    NonSellableBatchType["Donate"] = "Donate";
    NonSellableBatchType["Discard"] = "Discard";
    NonSellableBatchType["Shrinkage"] = "Shrinkage";
    NonSellableBatchType["SellToStoreOwner"] = "SellToStoreOwner";
})(NonSellableBatchType = exports.NonSellableBatchType || (exports.NonSellableBatchType = {}));
var SaleType;
(function (SaleType) {
    SaleType["StoreSale"] = "StoreSale";
    SaleType["WebSale"] = "WebSale";
    SaleType["Telephone"] = "Telephone";
    SaleType["Wholesale"] = "Wholesale";
    SaleType["Invoice"] = "Invoice";
    SaleType["MobileSale"] = "MobileSale";
})(SaleType = exports.SaleType || (exports.SaleType = {}));
var POSTransactionType;
(function (POSTransactionType) {
    POSTransactionType["RegularSales"] = "RegularSales";
    POSTransactionType["EmployeeSale"] = "EmployeeSale";
    POSTransactionType["SpecialOrderPickup"] = "SpecialOrderPickup";
    POSTransactionType["LayawaySale"] = "LayawaySale";
    POSTransactionType["GiftCardInternal"] = "GiftCardInternal";
    POSTransactionType["ChargePayment"] = "ChargePayment";
    POSTransactionType["SpecialOrderDeposit"] = "SpecialOrderDeposit";
    POSTransactionType["LayawayPayment"] = "LayawayPayment";
    POSTransactionType["Return"] = "Return";
    POSTransactionType["GiftCardExternal"] = "GiftCardExternal";
    POSTransactionType["SpecialOrderPayment"] = "SpecialOrderPayment";
    POSTransactionType["LayawayPickup"] = "LayawayPickup";
    POSTransactionType["LayawayCancel"] = "LayawayCancel";
    POSTransactionType["SpecialOrderCancel"] = "SpecialOrderCancel";
    POSTransactionType["Coupon"] = "Coupon";
    POSTransactionType["SalesOrderInvoice"] = "SalesOrderInvoice";
    POSTransactionType["RefundHouseCharge"] = "RefundHouseCharge";
})(POSTransactionType = exports.POSTransactionType || (exports.POSTransactionType = {}));
var SortBy;
(function (SortBy) {
    SortBy["SKU"] = "SKU";
    SortBy["QuantityAscending"] = "QuantityAscending";
    SortBy["QuantityDescending"] = "QuantityDescending";
    SortBy["SalesAscending"] = "SalesAscending";
    SortBy["SalesDescending"] = "SalesDescending";
})(SortBy = exports.SortBy || (exports.SortBy = {}));
var PurchaseOrderType;
(function (PurchaseOrderType) {
    PurchaseOrderType["ReOrder"] = "ReOrder";
    PurchaseOrderType["InitialOrder"] = "InitialOrder";
})(PurchaseOrderType = exports.PurchaseOrderType || (exports.PurchaseOrderType = {}));
class CustomEntry {
}
exports.CustomEntry = CustomEntry;
class CustomEntryResponse {
    constructor(json) {
        this.CustomEntries = [];
        this.IsSuccessful = false;
        this.Message = "";
        this.CustomEntries = json.CustomEntries;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ValidationMessages = json.ValidationMessages;
    }
}
exports.CustomEntryResponse = CustomEntryResponse;
class ARCustomerCreditLimit {
}
exports.ARCustomerCreditLimit = ARCustomerCreditLimit;
class ARCustomerCreditLimitResponse {
    constructor(json) {
        this.IsSuccessful = false;
        this.Message = "";
        this.ArCustomerCreditLimit = json.ArCustomerCreditLimit;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ValidationMessages = json.ValidationMessages;
    }
}
exports.ARCustomerCreditLimitResponse = ARCustomerCreditLimitResponse;
class CustomerQuery {
}
exports.CustomerQuery = CustomerQuery;
class ResultStatistics {
}
exports.ResultStatistics = ResultStatistics;
class Address {
}
exports.Address = Address;
class Customer {
}
exports.Customer = Customer;
class CustomerResponse {
    constructor(json) {
        this.IsSuccessful = false;
        this.Message = "";
        this.Customers = json.Customers;
        this.ResultStatistics = json.ResultStatistics;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ValidationMessages = json.ValidationMessages;
    }
}
exports.CustomerResponse = CustomerResponse;
class CustomerDetailQuery {
}
exports.CustomerDetailQuery = CustomerDetailQuery;
class DetailsCustomEntry {
}
exports.DetailsCustomEntry = DetailsCustomEntry;
class Relation {
}
exports.Relation = Relation;
class CustomerDetails {
}
exports.CustomerDetails = CustomerDetails;
class CustomerDetailResponse {
    constructor(json) {
        this.IsSuccessful = false;
        this.Message = "";
        this.CustomerDetails = json.CustomerDetails;
        this.ResultStatistics = json.ResultStatistics;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ValidationMessages = json.ValidationMessages;
    }
}
exports.CustomerDetailResponse = CustomerDetailResponse;
class CustomerPurchase {
}
exports.CustomerPurchase = CustomerPurchase;
class SaleHeader {
}
exports.SaleHeader = SaleHeader;
class CustomerPurchaseResponse {
    constructor(json) {
        this.IsSuccessful = false;
        this.Message = "";
        this.SaleHeaders = json.SaleHeaders;
        this.ResultStatistics = json.ResultStatistics;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ValidationMessages = json.ValidationMessages;
    }
}
exports.CustomerPurchaseResponse = CustomerPurchaseResponse;
class CustomerInfo {
}
exports.CustomerInfo = CustomerInfo;
class SaveCustomerResponse {
    constructor(json) {
        this.IsSuccessful = false;
        this.Message = "";
        this.Customer = json.Customer;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ValidationMessages = json.ValidationMessages;
    }
}
exports.SaveCustomerResponse = SaveCustomerResponse;
class DiscountReason {
}
exports.DiscountReason = DiscountReason;
class DiscountReasonResponse {
    constructor(json) {
        this.IsSuccessful = false;
        this.Message = "";
        this.DiscountReason = json.DiscountReason;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ValidationMessages = json.ValidationMessages;
    }
}
exports.DiscountReasonResponse = DiscountReasonResponse;
class Plan {
}
exports.Plan = Plan;
class Reward {
}
exports.Reward = Reward;
class RewardCustomer {
}
exports.RewardCustomer = RewardCustomer;
class FrequentBuyerRewardsResponse {
    constructor(json) {
        this.IsSuccessful = false;
        this.AllowMultipleRewards = false;
        this.Message = "";
        this.Plans = json.Plans;
        this.Rewards = json.Rewards;
        this.Customer = json.Customer;
        this.ProductTypesAndCategoriesByPlanId = json.ProductTypesAndCategoriesByPlanId;
        this.AllowMultipleRewards = json.AllowMultipleRewards;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ResultStatistics = json.ResultStatistics;
        this.ValidationMessages = json.ValidationMessages;
    }
}
exports.FrequentBuyerRewardsResponse = FrequentBuyerRewardsResponse;
class BuyerActivityQuery {
}
exports.BuyerActivityQuery = BuyerActivityQuery;
class FBCustomer {
}
exports.FBCustomer = FBCustomer;
class Buyer {
}
exports.Buyer = Buyer;
class Transaction {
}
exports.Transaction = Transaction;
class BuyerReward {
}
exports.BuyerReward = BuyerReward;
class BuyerPlan {
}
exports.BuyerPlan = BuyerPlan;
class BuyerActivityResponse {
    constructor(json) {
        this.IsSuccessful = false;
        this.Message = "";
        this.Plans = json.Plans;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ResultStatistics = json.ResultStatistics;
        this.ValidationMessages = json.ValidationMessages;
    }
}
exports.BuyerActivityResponse = BuyerActivityResponse;
class GiftCardDetail {
}
exports.GiftCardDetail = GiftCardDetail;
class GiftCardResponse {
    constructor(json) {
        this.IsSuccessful = false;
        this.Message = "";
        this.GiftCard = json.GiftCard;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ResultStatistics = json.ResultStatistics;
        this.ValidationMessages = json.ValidationMessages;
    }
}
exports.GiftCardResponse = GiftCardResponse;
class GiftCard {
}
exports.GiftCard = GiftCard;
class GiftCardsResponse {
    constructor(json) {
        this.IsSuccessful = false;
        this.Message = "";
        this.GiftCards = json.GiftCards;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ResultStatistics = json.ResultStatistics;
        this.ValidationMessages = json.ValidationMessages;
    }
}
exports.GiftCardsResponse = GiftCardsResponse;
class GiftCardTransactionQuery {
}
exports.GiftCardTransactionQuery = GiftCardTransactionQuery;
class TransactionCard {
}
exports.TransactionCard = TransactionCard;
class Cashier {
}
exports.Cashier = Cashier;
class SalesPerson {
}
exports.SalesPerson = SalesPerson;
class GiftCardTransaction {
}
exports.GiftCardTransaction = GiftCardTransaction;
class GiftCardTransactionResponse {
    constructor(json) {
        this.IsSuccessful = false;
        this.Message = "";
        this.GiftCardTransaction = json.GiftCardTransaction;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ResultStatistics = json.ResultStatistics;
        this.ValidationMessages = json.ValidationMessages;
    }
}
exports.GiftCardTransactionResponse = GiftCardTransactionResponse;
class GiftCardInfo {
}
exports.GiftCardInfo = GiftCardInfo;
class GiftCardSavedResponse {
    constructor(json) {
        this.IsSuccessful = false;
        this.Message = "";
        this.GiftCard = json.GiftCard;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ResultStatistics = json.ResultStatistics;
        this.ValidationMessages = json.ValidationMessages;
    }
}
exports.GiftCardSavedResponse = GiftCardSavedResponse;
class InventoryQuery {
}
exports.InventoryQuery = InventoryQuery;
class Item {
}
exports.Item = Item;
class Store {
}
exports.Store = Store;
class InventoryResponse {
    constructor(json) {
        this.IsSuccessful = false;
        this.Message = "";
        this.Items = json.Items;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ResultStatistics = json.ResultStatistics;
        this.ValidationMessages = json.ValidationMessages;
    }
}
exports.InventoryResponse = InventoryResponse;
class InventoryTransactionQuery {
}
exports.InventoryTransactionQuery = InventoryTransactionQuery;
class ProductItem {
}
exports.ProductItem = ProductItem;
class InventoryTransaction {
}
exports.InventoryTransaction = InventoryTransaction;
class TransactionResponse {
    constructor(json) {
        this.IsSuccessful = false;
        this.Message = "";
        this.Transactions = json.Transactions;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ResultStatistics = json.ResultStatistics;
        this.ValidationMessages = json.ValidationMessages;
    }
}
exports.TransactionResponse = TransactionResponse;
class NonSellableBatchDetail {
}
exports.NonSellableBatchDetail = NonSellableBatchDetail;
class NonSellableBatch {
}
exports.NonSellableBatch = NonSellableBatch;
class NonSellableBatchQuery {
}
exports.NonSellableBatchQuery = NonSellableBatchQuery;
class NonSellableBatchResponse {
    constructor(json) {
        this.IsSuccessful = false;
        this.Message = "";
        this.NonSellableBatchs = json.NonSellableBatchs;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ResultStatistics = json.ResultStatistics;
        this.ValidationMessages = json.ValidationMessages;
    }
}
exports.NonSellableBatchResponse = NonSellableBatchResponse;
class NonSellableBatchDetailsQuery {
}
exports.NonSellableBatchDetailsQuery = NonSellableBatchDetailsQuery;
class NonSellableBatchDetailsResponse {
    constructor(json) {
        this.IsSuccessful = false;
        this.Message = "";
        this.NonSellableDetails = json.NonSellableDetails;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ResultStatistics = json.ResultStatistics;
        this.ValidationMessages = json.ValidationMessages;
    }
}
exports.NonSellableBatchDetailsResponse = NonSellableBatchDetailsResponse;
class PosTransactionQuery {
}
exports.PosTransactionQuery = PosTransactionQuery;
class User {
}
exports.User = User;
class SaleHeaderDetail {
}
exports.SaleHeaderDetail = SaleHeaderDetail;
class SaleCustomer {
}
exports.SaleCustomer = SaleCustomer;
class Tender {
}
exports.Tender = Tender;
class ProductDetailItem {
}
exports.ProductDetailItem = ProductDetailItem;
class Product {
}
exports.Product = Product;
class CustomerPurchaseDetails {
}
exports.CustomerPurchaseDetails = CustomerPurchaseDetails;
class SaleTax {
}
exports.SaleTax = SaleTax;
class SpecialOrderLayaway {
}
exports.SpecialOrderLayaway = SpecialOrderLayaway;
class SaleDetails {
}
exports.SaleDetails = SaleDetails;
class BatchPayout {
}
exports.BatchPayout = BatchPayout;
class Sale {
}
exports.Sale = Sale;
class PosTransactionResponse {
    constructor(json) {
        this.IsSuccessful = false;
        this.Message = "";
        this.Sales = json.Sales;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ResultStatistics = json.ResultStatistics;
        this.ValidationMessages = json.ValidationMessages;
    }
}
exports.PosTransactionResponse = PosTransactionResponse;
class ProductQuery {
}
exports.ProductQuery = ProductQuery;
class ProductDetailQuery {
}
exports.ProductDetailQuery = ProductDetailQuery;
class ProductResponse {
    constructor(json) {
        this.IsSuccessful = false;
        this.Message = "";
        this.Products = json.Products;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ResultStatistics = json.ResultStatistics;
        this.ValidationMessages = json.ValidationMessages;
    }
}
exports.ProductResponse = ProductResponse;
class CustomerTag {
}
exports.CustomerTag = CustomerTag;
class CustomerTagResponse {
    constructor(json) {
        this.IsSuccessful = false;
        this.Message = "";
        this.CustomerTags = json.CustomerTags;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ValidationMessages = json.ValidationMessages;
    }
}
exports.CustomerTagResponse = CustomerTagResponse;
class Tag {
}
exports.Tag = Tag;
class TagResponse {
    constructor(json) {
        this.IsSuccessful = false;
        this.Message = "";
        this.Tags = json.Tags;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ValidationMessages = json.ValidationMessages;
    }
}
exports.TagResponse = TagResponse;
class SaleInfo {
}
exports.SaleInfo = SaleInfo;
class SalesResponse {
    constructor(json) {
        this.IsSuccessful = false;
        this.Message = "";
        this.Sales = json.Sales;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ResultStatistics = json.ResultStatistics;
        this.ValidationMessages = json.ValidationMessages;
    }
}
exports.SalesResponse = SalesResponse;
class Receipt {
}
exports.Receipt = Receipt;
class ReceiptResponse {
    constructor(json) {
        this.Receipt = json.Receipt;
        this.IsSuccessful = json.IsSuccessful;
    }
}
exports.ReceiptResponse = ReceiptResponse;
class PurchaseOrderInfo {
}
exports.PurchaseOrderInfo = PurchaseOrderInfo;
class PurchaseOrderDetail {
}
exports.PurchaseOrderDetail = PurchaseOrderDetail;
class PurchaseOrder {
}
exports.PurchaseOrder = PurchaseOrder;
class GenericResponse {
    constructor(json) {
        this.IsSuccessful = false;
        this.Message = "";
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ValidationMessages = json.ValidationMessages;
    }
}
exports.GenericResponse = GenericResponse;
class PurchaseOrderQuery {
}
exports.PurchaseOrderQuery = PurchaseOrderQuery;
class PurchaseOrderResponse {
    constructor(json) {
        this.IsSuccessful = false;
        this.Message = "";
        this.Sales = json.Sales;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ResultStatistics = json.ResultStatistics;
        this.ValidationMessages = json.ValidationMessages;
    }
}
exports.PurchaseOrderResponse = PurchaseOrderResponse;
class Rics {
    constructor(token) {
        this.baseUrl = 'https://enterprise.ricssoftware.com/api/';
        this.token = token;
    }
    /**
     * Returns the AR Customer Credit Limit
     *
     * @param customerId The Customer Guid
     * @returns The AR Customer Credit Limit
     */
    async GetArCustomerCreditLimit(customerId) {
        return new Promise((resolve, reject) => {
            var params = {
                CustomerId: customerId
            };
            request.post(this.baseUrl + "Customer/GetCustomerDetails", { json: params, headers: { "token": this.token, "User-Agent": "application/json" } }, (err, res, body) => {
                if (body)
                    resolve(new ARCustomerCreditLimitResponse(body));
                else
                    reject(err);
            });
        });
    }
    /**
     * Returns the custom entries that match the query
     *
     * @param types The custom entry types to find.
     * @param tagTypes The tag types to find
     * @returns The list of custom entries
     */
    async GetCustomEntry(types, tagTypes) {
        return new Promise((resolve, reject) => {
            var params = {
                CustomEntryTypes: types,
                TagTypes: tagTypes
            };
            request.post(this.baseUrl + "CustomEntry/GetCustomEntry", { json: params, headers: { "token": this.token, "User-Agent": "application/json" } }, (err, res, body) => {
                if (body)
                    resolve(new CustomEntryResponse(body));
                else
                    reject(err);
            });
        });
    }
    /**
     * Get a single customer given an email address
     *
     * @param customerId The unique customer guid
     * @returns The customer object
     */
    async GetCustomersByEMail(email) {
        return new Promise((resolve, reject) => {
            var query = new CustomerQuery();
            query.Email = email;
            request.post(this.baseUrl + "Customer/GetCustomer", { json: query, headers: { "token": this.token, "User-Agent": "application/json" } }, (err, res, body) => {
                if (body) {
                    var result = new CustomerResponse(body);
                    if (result.ResultStatistics.TotalRecords > 0)
                        resolve(result.Customers);
                    else
                        resolve([]);
                }
                else
                    reject(err);
            });
        });
    }
    /**
     * Get a single customer given the identifier
     *
     * @param customerId The unique customer guid
     * @returns The customer object
     */
    async GetCustomerById(customerId) {
        return new Promise((resolve, reject) => {
            var query = new CustomerQuery();
            query.CustomerId = customerId;
            request.post(this.baseUrl + "Customer/GetCustomer", { json: query, headers: { "token": this.token, "User-Agent": "application/json" } }, (err, res, body) => {
                if (body) {
                    var result = new CustomerResponse(body);
                    if (result.ResultStatistics.TotalRecords > 0)
                        resolve(result.Customers[0]);
                    else
                        resolve(new Customer());
                }
                else
                    reject(err);
            });
        });
    }
    /**
     * Returns the results of a full customer query
     *
     * @param query A Full Customer Query Object
     * @returns The customer search result
     */
    async GetCustomer(query) {
        return new Promise((resolve, reject) => {
            request.post(this.baseUrl + "Customer/GetCustomer", { json: query, headers: { "token": this.token, "User-Agent": "application/json" } }, (err, res, body) => {
                if (body)
                    resolve(new CustomerResponse(body));
                else
                    reject(err);
            });
        });
    }
    /**
     * Returns the Customer Details from a Customer Detail Query
     *
     * @param query The full Customer Detail Query object
     * @returns The results of the Customer Detail Query
     */
    async GetCustomerDetails(query) {
        return new Promise((resolve, reject) => {
            request.post(this.baseUrl + "Customer/GetCustomerDetails", { json: query, headers: { "token": this.token, "User-Agent": "application/json" } }, (err, res, body) => {
                if (body)
                    resolve(new CustomerDetailResponse(body));
                else
                    reject(err);
            });
        });
    }
    /**
     * Returns the customer purchase details
     *
     * @param customerId The unique customer identifier
     * @param take The amount of records to return
     * @param skip The amount of records to skip
     * @returns The list of Sales for the Customer
     */
    async GetCustomerPurchaseHistory(customerId, take = null, skip = null) {
        return new Promise((resolve, reject) => {
            var params = {
                CustomerId: customerId,
                Take: take,
                Skip: skip
            };
            request.post(this.baseUrl + "Customer/GetCustomerPurchaseHistory", { json: params, headers: { "token": this.token, "User-Agent": "application/json" } }, (err, res, body) => {
                if (body)
                    resolve(new CustomerPurchaseResponse(body));
                else
                    reject(err);
            });
        });
    }
    /**
     * Save customer information to the system
     *
     * @param customer The Customer Info Object
     * @returns A Status object along with the new Customer info
     */
    async SaveCustomer(customer) {
        return new Promise((resolve, reject) => {
            request.post(this.baseUrl + "Customer/SaveCustomer", { json: customer, headers: { "token": this.token, "User-Agent": "application/json" } }, (err, res, body) => {
                if (body)
                    resolve(new SaveCustomerResponse(body));
                else
                    reject(err);
            });
        });
    }
    /**
     * List the various discounts in the system
     *
     * @returns The Discount Results
     */
    async GetDiscountReason() {
        return new Promise((resolve, reject) => {
            request.post(this.baseUrl + "Discount/GetDiscountReason", { json: {}, headers: { "token": this.token, "User-Agent": "application/json" } }, (err, res, body) => {
                if (body)
                    resolve(new DiscountReasonResponse(body));
                else
                    reject(err);
            });
        });
    }
    /**
     * Query for a users frequency rewards
     *
     * @param customerId The unique customer identifier
     * @returns The Frequest Buyer Rewards data
     */
    async GetFrequentBuyerRewards(customerId) {
        return new Promise((resolve, reject) => {
            var params = {
                CustomerId: customerId
            };
            request.post(this.baseUrl + "FrequentBuyer/GetFrequentBuyerRewards", { json: params, headers: { "token": this.token, "User-Agent": "application/json" } }, (err, res, body) => {
                if (body)
                    resolve(new FrequentBuyerRewardsResponse(body));
                else
                    reject(err);
            });
        });
    }
    /**
     * Look up buyer activity for frequent customers
     *
     * @param query The query object to look up buyer activities
     * @returns The list of plans
     */
    async GetFrequentBuyerActivity(query) {
        return new Promise((resolve, reject) => {
            request.post(this.baseUrl + "FrequentBuyer/GetFrequentBuyerActivity", { json: query, headers: { "token": this.token, "User-Agent": "application/json" } }, (err, res, body) => {
                if (body)
                    resolve(new BuyerActivityResponse(body));
                else
                    reject(err);
            });
        });
    }
    /**
     * Look up gift card information based on the unique identifier
     *
     * @param cardId The unique card identifier
     * @returns Any associated gift cards
     */
    async GetGiftCardById(cardId) {
        return new Promise((resolve, reject) => {
            var params = {
                GiftCardId: cardId
            };
            request.post(this.baseUrl + "GiftCard/GetGiftCardById", { json: params, headers: { "token": this.token, "User-Agent": "application/json" } }, (err, res, body) => {
                if (body)
                    resolve(new GiftCardResponse(body));
                else
                    reject(err);
            });
        });
    }
    /**
     * Search for a gift card by a number
     *
     * @param cardNumber The Gift Card Number to check
     * @returns The Gift Card Object
     */
    async GetGiftCardByNumber(cardNumber) {
        return new Promise((resolve, reject) => {
            var params = {
                GiftCardNumber: cardNumber
            };
            request.post(this.baseUrl + "GiftCard/GetGiftCardByNumber", { json: params, headers: { "token": this.token, "User-Agent": "application/json" } }, (err, res, body) => {
                if (body)
                    resolve(new GiftCardsResponse(body));
                else
                    reject(err);
            });
        });
    }
    /**
     * Get the gift card transactions from the Rics System
     *
     * @param query The Query object to retrieve gift card transactions
     * @returns The transacton response object
     */
    async GetGiftCardTransaction(query) {
        return new Promise((resolve, reject) => {
            request.post(this.baseUrl + "GiftCard/GetGiftCardTransaction", { json: query, headers: { "token": this.token, "User-Agent": "application/json" } }, (err, res, body) => {
                if (body)
                    resolve(new GiftCardTransactionResponse(body));
                else
                    reject(err);
            });
        });
    }
    /**
     * Save the updated information to Rics
     *
     * @param info The Gift Card Info to save
     * @returns The save results containing the new card
     */
    async SaveGiftCard(info) {
        return new Promise((resolve, reject) => {
            request.post(this.baseUrl + "GiftCard/SaveGiftCard", { json: info, headers: { "token": this.token, "User-Agent": "application/json" } }, (err, res, body) => {
                if (body)
                    resolve(new GiftCardSavedResponse(body));
                else
                    reject(err);
            });
        });
    }
    /**
     * Check the Rics system for inventory
     *
     * @param query The contents of the inventory query
     * @returns The items that match the query
     */
    async GetInventoryOnHand(query) {
        return new Promise((resolve, reject) => {
            request.post(this.baseUrl + "GiftCard/GetInventoryOnHand", { json: query, headers: { "token": this.token, "User-Agent": "application/json" } }, (err, res, body) => {
                if (body)
                    resolve(new InventoryResponse(body));
                else
                    reject(err);
            });
        });
    }
    /**
     * Get a list of inventory transactions matching the defined query
     *
     * @param query The inventory transaction query
     * @returns The list of transactions
     */
    async GetInventoryTransaction(query) {
        return new Promise((resolve, reject) => {
            request.post(this.baseUrl + "GiftCard/GetInventoryTransaction", { json: query, headers: { "token": this.token, "User-Agent": "application/json" } }, (err, res, body) => {
                if (body)
                    resolve(new TransactionResponse(body));
                else
                    reject(err);
            });
        });
    }
    /**
     * Return a list of non sellable batch records
     *
     * @param query The query for the Non Sellable Batch Results
     * @returns The results of the Non Sellable Batch Query
     */
    async GetNonSellableBatch(query) {
        return new Promise((resolve, reject) => {
            request.post(this.baseUrl + "NonSellable/GetNonSellableBatch", { json: query, headers: { "token": this.token, "User-Agent": "application/json" } }, (err, res, body) => {
                if (body)
                    resolve(new NonSellableBatchResponse(body));
                else
                    reject(err);
            });
        });
    }
    /**
     * Return a list of non sellable batch details
     *
     * @param query Non Sellable Details Query
     * @returns The response to the Non Sellable Batch Details Query
     */
    async GetNonSellableBatchDetails(query) {
        return new Promise((resolve, reject) => {
            request.post(this.baseUrl + "NonSellable/GetNonSellableBatchDetails", { json: query, headers: { "token": this.token, "User-Agent": "application/json" } }, (err, res, body) => {
                if (body)
                    resolve(new NonSellableBatchDetailsResponse(body));
                else
                    reject(err);
            });
        });
    }
    /**
     * Query the system for POS Transactions
     *
     * @param query The query to search for POS Transactions
     * @returns The List of POS Transactions that match the query
     */
    async GetPOSTransaction(query) {
        return new Promise((resolve, reject) => {
            request.post(this.baseUrl + "POS/GetPOSTransaction", { json: query, headers: { "token": this.token, "User-Agent": "application/json" } }, (err, res, body) => {
                if (body)
                    resolve(new PosTransactionResponse(body));
                else
                    reject(err);
            });
        });
    }
    /**
     * Get a list of products that match the query
     *
     * @param query The Product Query
     * @returns The results of the product query
     */
    async GetProduct(query) {
        return new Promise((resolve, reject) => {
            request.post(this.baseUrl + "Product/GetProduct", { json: query, headers: { "token": this.token, "User-Agent": "application/json" } }, (err, res, body) => {
                if (body)
                    resolve(new ProductResponse(body));
                else
                    reject(err);
            });
        });
    }
    /**
     * Get a list of product details that match the query
     *
     * @param query The Product Detail Query
     * @returns The Product list that matches the query
     */
    async GetProductDetails(query) {
        return new Promise((resolve, reject) => {
            request.post(this.baseUrl + "Product/GetProductDetails", { json: query, headers: { "token": this.token, "User-Agent": "application/json" } }, (err, res, body) => {
                if (body)
                    resolve(new ProductResponse(body));
                else
                    reject(err);
            });
        });
    }
    /**
     * Search for Purchase Orders
     *
     * @param query The Purchase Order Query Object
     * @returns The list of Purchase Orders that match the query
     */
    async GetPurchaseOrder(query) {
        return new Promise((resolve, reject) => {
            request.post(this.baseUrl + "PurchaseOrder/GetPurchaseOrder", { json: query, headers: { "token": this.token, "User-Agent": "application/json" } }, (err, res, body) => {
                if (body)
                    resolve(new PurchaseOrderResponse(body));
                else
                    reject(err);
            });
        });
    }
    /**
     * Saves the purchase order to the system
     *
     * @param po The PurchaseOrder object to save
     * @returns The Generic Response for the save action
     */
    async SavePurchaseOrder(po) {
        return new Promise((resolve, reject) => {
            request.post(this.baseUrl + "PurchaseOrder/SavePurchaseOrder", { json: po, headers: { "token": this.token, "User-Agent": "application/json" } }, (err, res, body) => {
                if (body)
                    resolve(new GenericResponse(body));
                else
                    reject(err);
            });
        });
    }
    /**
     * Get any Receipt information from a list of TicketNumbers
     *
     * @param ticketNumbers An array of up to 10 ticket numbers
     * @returns The Contents of the Receipt
     */
    async GetReceipt(ticketNumbers) {
        return new Promise((resolve, reject) => {
            if (ticketNumbers.length > 10)
                ticketNumbers = ticketNumbers.slice(0, 10);
            var params = {
                TicketNumber: ticketNumbers
            };
            request.post(this.baseUrl + "Receipt/GetReceipt", { json: params, headers: { "token": this.token, "User-Agent": "application/json" } }, (err, res, body) => {
                if (body)
                    resolve(new ReceiptResponse(body));
                else
                    reject(err);
            });
        });
    }
    /**
     * Search for sales on a particular salesman
     *
     * @param startDate The Start Date to search for
     * @param endDate The end date to search for
     * @param salesPersonUsername The sales persons username
     * @param sortBy How to sort the results
     * @param storeCode The store code to search for sales
     * @param skip The amount of records to skip
     * @param take The amount of records to show, max 2500
     * @returns The list of sales matching the query
     */
    async GetSalesBySalesperson(startDate, endDate, salesPersonUsername = null, sortBy = null, storeCode = null, skip = null, take = null) {
        return new Promise((resolve, reject) => {
            var params = {
                TicketDateStart: startDate,
                TicketDateEnd: endDate,
                SalespersonUsername: salesPersonUsername,
                SortBy: sortBy,
                StoreCode: storeCode,
                Skip: skip,
                Take: take
            };
            request.post(this.baseUrl + "Summary/GetSalesBySalesperson", { json: params, headers: { "token": this.token, "User-Agent": "application/json" } }, (err, res, body) => {
                if (body)
                    resolve(new SalesResponse(body));
                else
                    reject(err);
            });
        });
    }
    /**
     * Search for sales on a particular sku
     *
     * @param startDate The Start Date to search for
     * @param endDate The end date to search for
     * @param sku The sku to search for
     * @param sortBy How to sort the results
     * @param storeCode The store code to search for sales
     * @param skip The amount of records to skip
     * @param take The amount of records to show, max 2500
     * @returns The list of sales matching the query
     */
    async GetSalesBySKU(startDate, endDate, sku = null, sortBy = null, storeCode = null, skip = null, take = null) {
        return new Promise((resolve, reject) => {
            var params = {
                TicketDateStart: startDate,
                TicketDateEnd: endDate,
                SKU: sku,
                SortBy: sortBy,
                StoreCode: storeCode,
                Skip: skip,
                Take: take
            };
            request.post(this.baseUrl + "Summary/GetSalesBySKU", { json: params, headers: { "token": this.token, "User-Agent": "application/json" } }, (err, res, body) => {
                if (body)
                    resolve(new SalesResponse(body));
                else
                    reject(err);
            });
        });
    }
    /**
     * Search for sales for a store code between two dates
     *
     * @param startDate The Start Date to search for
     * @param endDate The end date to search for
     * @param storeCode The store code to search for sales
     * @param skip The amount of records to skip
     * @param take The amount of records to show, max 2500
     * @returns The list of sales matching the query
     */
    async GetSalesByStoreCode(startDate, endDate, storeCode, skip = null, take = null) {
        return new Promise((resolve, reject) => {
            if (take > 2500)
                take = 2500;
            var params = {
                TicketDateStart: startDate,
                TicketDateEnd: endDate,
                StoreCode: storeCode,
                Skip: skip,
                Take: take
            };
            request.post(this.baseUrl + "Summary/GetSalesByStoreCode", { json: params, headers: { "token": this.token, "User-Agent": "application/json" } }, (err, res, body) => {
                if (body)
                    resolve(new SalesResponse(body));
                else
                    reject(err);
            });
        });
    }
    /**
     * Search for sales for a store code between two dates at a particular time
     *
     * @param startDate The Start Date to search for, include time
     * @param endDate The end date to search for, include time
     * @param storeCode The store code to search for sales
     * @returns The list of sales matching the query
     */
    async GetSalesByTimeOfDay(startDate, endDate, storeCode) {
        return new Promise((resolve, reject) => {
            var params = {
                TicketDateStart: startDate,
                TicketDateEnd: endDate,
                StoreCode: storeCode
            };
            request.post(this.baseUrl + "Summary/GetSalesByTimeOfDay", { json: params, headers: { "token": this.token, "User-Agent": "application/json" } }, (err, res, body) => {
                if (body)
                    resolve(new SalesResponse(body));
                else
                    reject(err);
            });
        });
    }
    /**
     * Search for tags assigned to customers
     *
     * @param customerId A list of Customer Guids to search for
     * @returns The assocated tags for those customers
     */
    async GetCustomerTags(customerId) {
        return new Promise((resolve, reject) => {
            var params = {
                CustomerIds: customerId
            };
            request.post(this.baseUrl + "Tags/GetCustomerTags", { json: params, headers: { "token": this.token, "User-Agent": "application/json" } }, (err, res, body) => {
                if (body)
                    resolve(new CustomerTagResponse(body));
                else
                    reject(err);
            });
        });
    }
    /**
     * Query for organized tags in the system
     *
     * @param tagType The tag type t o search for
     * @returns A list of tags that match the type
     */
    async GetOrganizationTags(tagType) {
        return new Promise((resolve, reject) => {
            var params = {
                TagType: tagType
            };
            request.post(this.baseUrl + "Tags/GetOrganizationTags", { json: params, headers: { "token": this.token, "User-Agent": "application/json" } }, (err, res, body) => {
                if (body)
                    resolve(new TagResponse(body));
                else
                    reject(err);
            });
        });
    }
}
exports.Rics = Rics;
