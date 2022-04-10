import * as request from 'request';

export enum CustomEntryType {
    SingleSelect='SingleSelect', MultipleSelect='MultipleSelect', CustomEntry='CustomEntry'
}

export enum TagType {
    SKU='SKU', Customer='Customer', Store='Store', Class='Class', Color='Color', PriceDiscount='PriceDiscount'
}

export enum Gender {
    M='M', F='F', Male='Male', Female='Female', N='N', NonBinary='NonBinary'
}

export enum Salutation {
    Mr='Mr', Mrs='Mrs', Ms='Ms', Dr='Dr'
}

export enum TransactionType {
    TransferOut="TransferOut", TransferIn="TransferIn", PurchaseOrderReceipt="PurchaseOrderReceipt", PhysicalCount="PhysicalCount", ManualReceipt="ManualReceipt", Returned="Returned", Sale="Sale", Migration="Migration", TransferOutCancel="TransferOutCancel", PhysicalAdjust="PhysicalAdjust", TransferInCancel="TransferInCancel", SalesOrder="SalesOrder", RMA="RMA", MergedPhysical="MergedPhysical", ManualAWCUpdate="ManualAWCUpdate", PendingOrderTransfer="PendingOrderTransfer", AddToNonSellable="AddToNonSellable", ReturnFromNonSellable="ReturnFromNonSellable"
}

export enum NonSellableBatchType {
    ReturnToSupplier="ReturnToSupplier", SellOnSecondaryMarket="SellOnSecondaryMarket", Donate="Donate", Discard="Discard", Shrinkage="Shrinkage", SellToStoreOwner="SellToStoreOwner"
}

export enum SaleType {
    StoreSale="StoreSale", WebSale="WebSale", Telephone="Telephone", Wholesale="Wholesale", Invoice="Invoice", MobileSale="MobileSale"
}

export enum POSTransactionType {
    RegularSales="RegularSales", EmployeeSale="EmployeeSale", SpecialOrderPickup="SpecialOrderPickup", LayawaySale="LayawaySale", GiftCardInternal="GiftCardInternal", ChargePayment="ChargePayment", SpecialOrderDeposit="SpecialOrderDeposit", LayawayPayment="LayawayPayment", Return="Return", GiftCardExternal="GiftCardExternal", SpecialOrderPayment="SpecialOrderPayment", LayawayPickup="LayawayPickup", LayawayCancel="LayawayCancel", SpecialOrderCancel="SpecialOrderCancel", Coupon="Coupon", SalesOrderInvoice="SalesOrderInvoice", RefundHouseCharge="RefundHouseCharge"
}

export enum SortBy {
    SKU="SKU", QuantityAscending="QuantityAscending", QuantityDescending="QuantityDescending", SalesAscending="SalesAscending", SalesDescending="SalesDescending"
}

export enum PurchaseOrderType {
    ReOrder="ReOrder", InitialOrder="InitialOrder"
}

export class CustomEntry {
    TagParentId:string;
    TagTypeKey:Number;
    TagTree:string;
    IsRequired:boolean;
    TagType:string;
    CustomEntryType:string;
    TagText:string;
}

export class CustomEntryResponse {
    CustomEntries:CustomEntry[] = [];
    IsSuccessful:boolean = false;
    Message:string = "";
    ValidationMessages: {
        "": ""
    }

    constructor(json:any) {
        this.CustomEntries = json.CustomEntries;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ValidationMessages = json.ValidationMessages;
    }
}

export class ARCustomerCreditLimit {
    CustomerId:string;
    CreditLimit:Number;
    CurrentBalance:Number;
    CreditLimitTypeLNumber;
}

export class ARCustomerCreditLimitResponse {
    ArCustomerCreditLimit:ARCustomerCreditLimit;
    IsSuccessful:boolean = false;
    Message:string = "";
    ValidationMessages: {
        "": ""
    }

    constructor(json:any) {
        this.ArCustomerCreditLimit = json.ArCustomerCreditLimit;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ValidationMessages = json.ValidationMessages;
    }
}

export class CustomerQuery {
    CustomerId:string;
    AccountNumber:string;
    FirstName:string;
    LastName:string;
    Email:string;
    PhoneNumber:string;
    DateOfBirthStart:string;
    DateOfBirthEnd:string;
    StoreCode:Number;
    Address:string;
    City:string;
    State:string;
    PostalCode:string;
    CountryCode:string;
    CustomEntries:string;
    Take:Number;
    Skip:Number;
}

export class ResultStatistics {
    StartRecord:Number;
    EndRecord:Number;
    TotalRecords:Number;
}

export class Address {
    Addressee:string;
    Address:string;
    City:string;
    State:string;
    PostalCode:string;
    CountryCode:string;
}

export class Customer {
    Email:string;
    PhoneNumber:string;
    DateOfBirth:string;
    BillingAddress:Address;
    MailingAddress:Address;
    CustomerId:string;
    AccountNumber:string;
    FirstName:string;
    LastName:string;
}

export class CustomerResponse {
    Customers:Customer[];
    ResultStatistics:ResultStatistics;
    IsSuccessful:boolean = false;
    Message:string = "";
    ValidationMessages: {
        "": ""
    }

    constructor(json:any) {
        this.Customers = json.Customers;
        this.ResultStatistics = json.ResultStatistics;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ValidationMessages = json.ValidationMessages;
    }
}

export class CustomerDetailQuery {
    CustomerId:string;
    AccountNumber:string;
    FirstName:string;
    LastName:string;
    Email:string;
    Gender:Gender;
    PhoneNumber:string;
    DateOfBirthStart:string;
    DateOfBirthEnd:string;
    Address:string;
    City:string;
    State:string;
    PostalCode:string;
    CountryCode:string;
    CustomEntries:string;
    CreatedStart:string;
    CreatedEnd:string;
    ModifiedStart:string;
    ModifiedEnd:string;
    RelatedAccountNumber:string;
    RelationshipType:string;
    RelatedFirstName:string;
    RelatedLastName:string;
    RelatedDateOfBirthStart:string;
    RelatedDateOfBirthEnd:string;
    Take:Number;
    Skip:Number;
}

export class DetailsCustomEntry {
    TagTree:string;
}

export class Relation {
    CustomerId:string;
    Relationship:string;
    AccountNumber:string;
    FirstName:string;
    LastName:string;
    DateOfBirth:string;
}

export class CustomerDetails {
    Salutation:Salutation;
    MiddleInitial:string;
    Suffix:string;
    Gender:Gender;
    Alert:string;
    CreditLimit:Number;
    TaxExemptId:string;
    IsTaxExempt:boolean;
    CreatedOn:string;
    ModifiedOn:string;
    StopPromptForFBPEnroll:boolean;
    Comments:string;
    EmailReceipt:boolean;
    IsBouncedEmail:boolean;
    IsUnsubscribed:boolean;
    ARPostToId:string;
    DeletedOn:string;
    ARPostAccount:string;
    StoreCode:Number;
    StoreName:string;
    CustomEntries:DetailsCustomEntry[];
    Relationships:Relation[];
    Email:string;
    PhoneNumber:string;
    DateOfBirth:string;
    BillingAddress:Address;
    MailingAddress:Address;
    CustomerId:string;
    AccountNumber:string;
    FirstName:string;
    LastName:string;
}

export class CustomerDetailResponse {
    CustomerDetails:CustomerDetails[];
    ResultStatistics:ResultStatistics;
    IsSuccessful:boolean = false;
    Message:string = "";
    ValidationMessages: {
        "": ""
    }

    constructor(json:any) {
        this.CustomerDetails = json.CustomerDetails;
        this.ResultStatistics = json.ResultStatistics;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ValidationMessages = json.ValidationMessages;
    }
}

export class CustomerPurchase {
    TicketLineNumber:Number;
    Quantity:Number;
    AmountPaid:Number;
    Sku:string;
    Summary:string;
    Description:string;
    SupplierCode:string;
    SupplierName:string;
    Color:string;
    Column:string;
    Row:string;
    OnHand:Number;
}

export class SaleHeader {
    TicketDateTime:string;
    TicketNumber:Number;
    Change:Number;
    TicketVoided:boolean;
    ReceiptPrinted:boolean;
    TicketSuspended:boolean;
    ReceiptEmailed:boolean;
    SaleDateTime:string;
    TicketModifiedOn:string;
    ModifiedBy:string;
    CreatedOn:string;
    CustomerPurchases:CustomerPurchase[];
}

export class CustomerPurchaseResponse {
    SaleHeaders:SaleHeader[];
    ResultStatistics:ResultStatistics;
    IsSuccessful:boolean = false;
    Message:string = "";
    ValidationMessages: {
        "": ""
    }

    constructor(json:any) {
        this.SaleHeaders = json.SaleHeaders;
        this.ResultStatistics = json.ResultStatistics;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ValidationMessages = json.ValidationMessages;
    }
}

export class CustomerInfo {
    CustomerId:string;
    AccountNumber:string;
    FirstName:string;
    LastName:string;
    Email:string;
    PhoneNumber:string;
    DateOfBirth:string;
    Salutation:Salutation;
    MiddleInitial:string;
    Suffix:string;
    Gender:Gender;
    Alert:string;
    CreditLimit:string;
    ChargeBalance:string;
    StoreCredit:string;
    TaxExemptId:string;
    IsTaxExempt:boolean;
    StopPromptForFBPEnroll:string;
    Comments:string;
    EmailReceipt:string;
    IsBouncedEmail:string;
    IsUnsubscribed:string;
    ARPostToId:string;
    CustomEntries:CustomEntry[];
    MailingAddress:Address;
    BillingAddress:Address;

}

export class SaveCustomerResponse {
    Customer:Customer;
    IsSuccessful:boolean = false;
    Message:string = "";
    ValidationMessages: {
        "": ""
    }

    constructor(json:any) {
        this.Customer = json.Customer;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ValidationMessages = json.ValidationMessages;
    }
}

export class DiscountReason {
    DiscountReasonName:string;
    DiscountReasonCode:string;
}

export class DiscountReasonResponse {
    DiscountReason:DiscountReason;
    IsSuccessful:boolean = false;
    Message:string = "";
    ValidationMessages: {
        "": ""
    }

    constructor(json:any) {
        this.DiscountReason = json.DiscountReason;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ValidationMessages = json.ValidationMessages;
    }
}

export class Plan {
    FBPlanId:string;
    OrganizationId:string;
    FBName:string;
    Summary:string;
    FBPlanTypeKey:Number;
    RewardAmount:Number;
    Breakpoint:Number;
    MaxRewardAmount:Number;
    GraduationPlanId:string;
    IsActive:boolean;
    IsDefaultPlan:boolean;
    FBRewardAvailabilityTypeKey:Number;
    IsCreditClassesOnly:boolean;
    IsDiscountFullPriceOnly:boolean;
    IsRetainPartialCredit:boolean;
    ReceiptShowAccumulation:boolean;
    ReceiptShowAmtToGo:boolean;
    ReceiptShowEstimatedReward:boolean;
    MaximumMarkdownPercent:Number;
    RewardsExpireAfterDays:Number;
    GracePeriodDays:Number;
    MinimumAccumulatingPrice:Number;
    PointsFactor:Number;    
}

export class Reward {
    FBRewardId:string;
    CustomerId:string;
    FBPlanId:string;
    RewardAmount:Number;   
    RewardPercent:Number;  
    OriginalAmount:Number;  
    FBActionTypeKey:Number;  
    ExpiresOn:string;
    CreatedOn:string;
    ModifiedOn:string; 
}

export class RewardCustomer {
    CustomerId:string;
    FBPlanId:string;
    DollarsAccumulated:Number;   
    QuantityAccumulated:Number;   
    CreatedOn:string;
    ModifiedOn:string; 
}

export class FrequentBuyerRewardsResponse {
    Plans:Plan[];
    Rewards:Reward[];
    Customer:RewardCustomer;
    IsSuccessful:boolean = false;
    AllowMultipleRewards:boolean = false;
    Message:string = "";
    ResultStatistics:ResultStatistics;
    ProductTypesAndCategoriesByPlanId: {
        "": []
    }
    ValidationMessages: {
        "": ""
    }

    constructor(json:any) {
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

export class BuyerActivityQuery {
    AccountNumber:string;
    FirstName:string;
    LastName:string;
    Email:string;
    Gender:Gender;
    PhoneNumber:string;
    DateOfBirthStart:string;
    DateOfBirthEnd:string;
    Address:string;
    City:string;
    State:string;
    PostalCode:string;
    CountryCode:string;
    CustomEntries:string;
    FBPlanName:string;
    StoreCode:Number;
    Summary:string;
    DollarsAccumulated:Number;
    QuantityAccumulated:Number;
    OutstandingReward:Number;
    Skip:Number;
    Take:Number;
}

export class FBCustomer {
    DollarsAccumulated:Number;
    QuantityAccumulated:Number;
    OutstandingReward:Number;
    CreatedOn:string;
    ModifiedOn:string;
    Customer:Buyer;
    Transactions:Transaction[];
    Rewards:BuyerReward[];
}

export class Buyer {
    CustomerId:string;
    AccountNumber:string;
    FirstName:string;
    LastName:string;
}

export class Transaction {
    DollarsChange:Number;
    DollarsBalance:Number;
    QuantityChange:Number;
    QuantityBalance:Number;
    Memo:string;
    CreatedOn:string;
    TransactionType:string;
}

export class BuyerReward {
    RewardAmount:Number;
    RewardPercent:Number;
    OriginalAmount:Number;
    ExpiresOn:string;
    CreatedOn:string;
    EarnedOn:string;
    ActionType:string;
}

export class BuyerPlan {
    FBName:string;
    Summary:string;
    RewardAmount:Number;
    Breakpoint:Number;
    MaxRewardAmount:Number;
    PointsFactor:Number;
    IsActive:boolean;
    IsDefaultPlan:boolean;
    IsCreditClassesOnly:boolean;
    IsDiscountFullPriceOnly:boolean;
    IsRetainPartialCredit:boolean;
    ReceiptShowAccumulation:boolean;
    ReceiptShowAmtToGo:boolean;
    ReceiptShowEstimatedReward:boolean;
    MinimumAccumulatingPrice:Number;
    MaximumMarkdownPercent:Number;
    RewardsExpireAfterDays:Number;
    GracePeriodDays:Number;
    ExpiresOn:string;
    PlanType:string;
    AvailabilityType:string;
    FBCustomers: FBCustomer[];
}

export class BuyerActivityResponse {
    Plans:BuyerPlan[];
    IsSuccessful:boolean = false;
    Message:string = "";
    ResultStatistics:ResultStatistics;
    ValidationMessages: {
        "": ""
    }

    constructor(json:any) {
        this.Plans = json.Plans;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ResultStatistics = json.ResultStatistics;
        this.ValidationMessages = json.ValidationMessages;
    }
}

export class GiftCardDetail {
    GiftCardId:string;
    OrganizationId:string;
    GiftCardNumber:string;
    GiftCardValue:Number;
    IsStoredValue:boolean;
    StartDate:string;
    EndDate:string;
    ModifiedBy:string;
}

export class GiftCardResponse {
    GiftCard:GiftCardDetail[];
    IsSuccessful:boolean = false;
    Message:string = "";
    ResultStatistics:ResultStatistics;
    ValidationMessages: {
        "": ""
    }

    constructor(json:any) {
        this.GiftCard = json.GiftCard;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ResultStatistics = json.ResultStatistics;
        this.ValidationMessages = json.ValidationMessages;
    }
}

export class GiftCard {
    GiftCardId:string;
    GiftCardNumber:string;
    GiftCardValue:Number;
    IsStoredValue:boolean;
}

export class GiftCardsResponse {
    GiftCards:GiftCard[];
    IsSuccessful:boolean = false;
    Message:string = "";
    ResultStatistics:ResultStatistics;
    ValidationMessages: {
        "": ""
    }

    constructor(json:any) {
        this.GiftCards = json.GiftCards;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ResultStatistics = json.ResultStatistics;
        this.ValidationMessages = json.ValidationMessages;
    }
}

export class GiftCardTransactionQuery {
    AccountNumber:string;
    FirstName:string;
    LastName:string;
    Email:string;
    Gender:string;
    PhoneNumber:string;
    DateOfBirthStart:string;
    DateOfBirthEnd:string;
    Address:string;
    City:string;
    State:string;
    PostalCode:string;
    CountryCode:string;
    CustomEntries:string[];
    CardNumber:string;
    CardValue:Number;
    CreatedStart:string;
    CreatedEnd:string;
    DeletedStart:string;
    DeletedEnd:string;
    StoreCode:Number;
    Change:Number;
    ChangeType:string;
    ChangeDateStart:string;
    ChangeDateEnd:string;
    TicketNumber:Number;
    CashierCode:string;
    CashierLogin:string;
    CashierUserName:string;
    SalesPersonCode:string;
    SalesPersonLogin:string;
    SalesPersonUserName:string;
    Skip:Number;
    Take:Number;
}

export class TransactionCard {
    GiftCardId:string;
    CardNumber:string;
    CardValue:Number;
    IsStoredValue:boolean;
    StartDate:string;
    EndDate:string;
    CreatedOn:string;
    ModifiedOn:string;
    DeletedOn:string;
}

export class Cashier {
    UserCashierCode:string;
    RicsUserId:string;
    OrganizationId:string;
    FirstName:string;
    MiddleName:string;
    LastName:string;
    Login:string;
    Email:string;
}

export class SalesPerson {
    UserCashierCode:string;
    RicsUserId:string;
    OrganizationId:string;
    FirstName:string;
    MiddleName:string;
    LastName:string;
    Login:string;
    Email:string;
}

export class GiftCardTransaction {
    Change:Number;
    Memo:string;
    ChangeDate:string;
    CreatedOn:string;
    ChangeType:string;
    TicketNumber:Number;
    GiftCard:TransactionCard;
    Cashier:Cashier;
    SalesPerson:SalesPerson;
    Customer:Buyer;
}

export class GiftCardTransactionResponse {
    GiftCardTransaction:GiftCardTransaction[];
    IsSuccessful:boolean = false;
    Message:string = "";
    ResultStatistics:ResultStatistics;
    ValidationMessages: {
        "": ""
    }

    constructor(json:any) {
        this.GiftCardTransaction = json.GiftCardTransaction;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ResultStatistics = json.ResultStatistics;
        this.ValidationMessages = json.ValidationMessages;
    }
}

export class GiftCardInfo {
    GiftCardId:string;
    CardNumber:string;
    CardValue:Number;
    StartDate:string;
    EndDate:string;
    IsStoredValue:boolean;
}

export class GiftCardSavedResponse {
    GiftCard:GiftCardInfo;
    IsSuccessful:boolean = false;
    Message:string = "";
    ResultStatistics:ResultStatistics;
    ValidationMessages: {
        "": ""
    }

    constructor(json:any) {
        this.GiftCard = json.GiftCard;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ResultStatistics = json.ResultStatistics;
        this.ValidationMessages = json.ValidationMessages;
    }
}

export class InventoryQuery {
    SKU:string;
    Column:string;
    Row:string;
    Brand:string;
    UPC:string;
    Style:string;
    SupplierCode:string;
    Supplier:string;
    SupplierSKU:string;
    IsSellableOnline:boolean;
    Summary:string;
    Colors:string;
    Classes:string;
    ProductCustomEntries:string;
    StoreCode:Number;
    MaxOnHand:Number;
    MinOnHand:Number;
    Skip:Number;
    Take:Number;
}

export class Item {
    AvailableToOrderUntil:string;
    Sku:string;
    Brand:string;
    Style:string;
    SupplierCode:string;
    Supplier:string;
    IsSellableOnline:boolean
    Summary:string;
    Column:string;
    ColumnOrdinal: Number;
    Row:string;
    RowOrdinal: Number;
    UPC:string;
    Cost: Number;
    RetailPrice: Number;
    ActivePrice: Number;
    Perk: Number;
    OnHand: Number;
    Colors:DetailsCustomEntry;
    Classes:DetailsCustomEntry[];
    UPCs:string[];
}

export class Store {
    StoreCode:Number;
    StoreName:string;
    Items:Item[];
}

export class InventoryResponse {
    Items:Item[];
    IsSuccessful:boolean = false;
    Message:string = "";
    ResultStatistics:ResultStatistics;
    ValidationMessages: {
        "": ""
    }

    constructor(json:any) {
        this.Items = json.Items;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ResultStatistics = json.ResultStatistics;
        this.ValidationMessages = json.ValidationMessages;
    }
}

export class InventoryTransactionQuery {
    TransactionStart:string;
    TransactionEnd:string;
    StoreCode:Number;
    SKU:string;
    Column:string;
    Row:string;
    Brand:string;
    UPC:string;
    Style:string;
    SupplierCode:string;
    Supplier:string;
    SupplierSKU:string;
    Summary:string;
    Colors:string[];
    Classes:string[];
    ProductCustomEntries:string[];
    TransactionType:TransactionType;
    WebOrderNumber:string;
    PurchaseOrderNumber:string;
    TransferOrderNumber:string;
    Skip:Number;
    Take:Number;
}

export class ProductItem {
    Sku:string;
    Brand:string;
    Style:string;
    SupplierCode:string;
    Supplier:string;
    Summary:string;
    Colors:DetailsCustomEntry[];
    Classes:DetailsCustomEntry[];
    UPCs:string[];
    AvailableToOrderUntil:Date;
    DeletedOn:Date;
    Column:string;
    ColumnOrdinal:Number;
    Row:string;
    RowOrdinal:Number;
    UPC:string;
}

export class InventoryTransaction {
    OnHand:Number;
    TransactionQuantity:Number;
    Cost:Number;
    AverageWeightedCost:Number;
    RmaNumber:string;
    TransactionDate:Date;
    CreatedOn:Date;
    User:string;
    FreightAmount:Number;
    DiscountAmount:Number;
    TransactionType:string;
    TransferToStoreCode:Number;
    TransferToStoreName:string;
    TicketNumber:Number;
    PurchaseOrderNumber:string;
    TransferOrderNumber:string;
    WebOrderNumber:string;
    ReceivingLogBatchNumber:string;
    LocalDate:Date;
    ProductItem:ProductItem;
}

export class TransactionResponse {
    Transactions:InventoryTransaction[];
    IsSuccessful:boolean = false;
    Message:string = "";
    ResultStatistics:ResultStatistics;
    ValidationMessages: {
        "": ""
    }

    constructor(json:any) {
        this.Transactions = json.Transactions;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ResultStatistics = json.ResultStatistics;
        this.ValidationMessages = json.ValidationMessages;
    }
}

export class NonSellableBatchDetail {
    DateAdded:Date;
    NonSellableBatchId:string;
    Memo:string;
    Quantity:Number;
    UnitValue:Number;
    SupplierCode:string;
    SupplierName:string;
    Brand:string;
    Column:string;
    Row:string;
    StoreCode:Number;
    SKU:string;
    ReturnDescription:string;
}

export class NonSellableBatch {
    NonSellableBatchId:string;
    BatchName:string;
    RMA:string;
    TotalValue:Number;
    CreatedOn:Date;
    CompletedOn:Date;
    Comment:string;
    StoreCode:Date;
    NonSellableBatchType:string;
    SupplierCode:string;
    SupplierName:string;
}

export class NonSellableBatchQuery {
    NonSellableBatchId:string;
    BatchName:string;
    StoreCode:Number;
    NonSellableBatchType:string;
    SupplierCode:string;
    SupplierName:string;
    RMANumber:string;
    Comment:string;
    Recipient:string;
    TotalValueMin:Number;
    TotalValueMax:Number
    CreatedOnStart:Date;
    CreatedOnEnd:Date;
    CompletedOnStart:Date;
    CompletedOnEnd:Date;
    Skip:Number;
    Take:Number;
}

export class NonSellableBatchResponse {
    NonSellableBatchs:NonSellableBatch[];
    IsSuccessful:boolean = false;
    Message:string = "";
    ResultStatistics:ResultStatistics;
    ValidationMessages: {
        "": ""
    }

    constructor(json:any) {
        this.NonSellableBatchs = json.NonSellableBatchs;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ResultStatistics = json.ResultStatistics;
        this.ValidationMessages = json.ValidationMessages;
    }
}

export class NonSellableBatchDetailsQuery {
    NonSellableBatchId:string;
    StoreCode:Number;
    QuantityMin:Number;
    QuantityMax:Number;
    UnitValueMin:Number;
    UnitValueMax:Number;
    Memo:string;
    DateAddedStart:Date;
    DateAddedEnd:Date;
    BatchName:string;
    NonSellableBatchType:NonSellableBatchType;
    SupplierCode:string;
    SupplierName:string;
    SKU:string;
    Column:string;
    Row:string;
    Brand:string;
    ReturnDescription:string;
    Skip:Number;
    Take:Number;
}

export class NonSellableBatchDetailsResponse {
    NonSellableDetails:NonSellableBatchDetail[];
    IsSuccessful:boolean = false;
    Message:string = "";
    ResultStatistics:ResultStatistics;
    ValidationMessages: {
        "": ""
    }

    constructor(json:any) {
        this.NonSellableDetails = json.NonSellableDetails;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ResultStatistics = json.ResultStatistics;
        this.ValidationMessages = json.ValidationMessages;
    }
}

export class PosTransactionQuery {
    BatchStartDate:Date;
    BatchEndDate:Date;
    SKU:string;
    Column:string;
    Row:string;
    Brand:string;
    UPC:string;
    Style:string;
    SupplierCode:string;
    Supplier:string;
    SupplierSKU:string;
    Summary:string;
    Colors:string[];
    Classes:string[];
    ProductCustomEntries:string[];
    StoreCode:Number;
    StoreState:string;
    TerminalDescription:string;
    CashierCode:string;
    CashierLogin:string;
    CashierUserName:string;
    TicketDateStart:Date;
    TicketDateEnd:Date;
    VoidedOnStart:Date;
    VoidedOnEnd:Date;
    ModifiedOnStart:Date;
    ModifiedOnEnd:Date;
    CreatedOnStart:Date;
    CreatedOnEnd:Date;
    SalesPersonCode:string;
    SalesPersonLogin:string;
    SalesPersonUserName:string;
    TicketNumber:Number;
    TicketDiscountPercent:Number;
    DiscountAmount:Number;
    SaleType:SaleType;
    ShipToZipCode:string;
    PromotionCode:string;
    TransactionType:POSTransactionType;
    CustomerId:string;
    AccountNumber:string;
    GiftCardNumber:string;
    CouponCode:string;
    ReturnDescription:string;
    ShipToCustomer:string;
    DiscountDescription:string;
    IsSellable:Boolean;
    Skip:Number;
    Take:Number;
}

export class User {
    UserCashierCode:string;
    RicsUserId:string;
    OrganizationId:string;
    FirstName:string;
    MiddleName:string;
    LastName:string;
    Login:string;
    Email:string;
}

export class SaleHeaderDetail {
    TicketDateTime:Date;
    TicketNumber:Number;
    TicketComment:string;
    Alert:string;
    Shipping:Number;
    Change:Number;
    AlternateChange:Number;
    ExchangeRate:Number;
    TicketVoided:boolean;
    ReceiptPrinted:boolean;
    TicketSuspended:boolean;
    ReceiptEmailed:boolean;
    ReceiptText:string;
    SaleDateTime:Date;
    TicketModifiedOn:Date;
    ModifiedBy:string;
    ShipToZipcode:string;
    OrderNumber:string;
    VoidedDate:Date;
    CreatedOn:Date;
    PromotionCode:string;
    PromotionDescription:string;
    SaleType:string;
    EcommerceProviderType:string;
    SaleDetails: SaleDetails[];
    CustomerPurchases:CustomerPurchaseDetails[];
    Tenders:Tender[];
    Cashier:Cashier;
    Customer:SaleCustomer;
}

export class SaleCustomer {
    Email:string;
    PhoneNumber:string;
    DateOfBirth:Date;
    BillingAddress:Address;
    MailingAddress:Address;
    CustomerId:string;
    AccountNumber:string;
    FirstName:string;
    LastName:string;
}

export class Tender {
    AmountTendered:Number;
    AlternateAmount:Number;
    IsAlternateCurrency:boolean;
    ExchangeRate:Number;
    AccountType:string;
    IsForced:boolean;
    PaymentCardResponse:string;
    TenderDescription:string;
    GiftCardNumber:string;
}

export class ProductDetailItem {
    AvailableToOrderUntil:Date;
    DeletedOn:Date;
    Column:string;
    ColumnOrdinal:Number;
    Row:string;
    RowOrdinal:Number;
    UPC:string;
    UPCs:string[];
}

export class Product {
    Sku:string;
    Style:string;
    Summary:string;
    Description:string;
    Alert:string;
    SupplierSku:string;
    AvailableToPOSOn:Date;
    CreatedOn:Date;
    SupplierCode:string;
    SupplierName:string;
    LabelType:string;
    ColumnName:string;
    RowName:string;
    OnHand:Number;
    DeletedOn:Date;
    ProductItems:ProductDetailItem[];
    Colors:DetailsCustomEntry[];
    Classes:DetailsCustomEntry[];
    ProductCustomEntries:DetailsCustomEntry[];
}

export class CustomerPurchaseDetails {
    TicketLineNumber:Number;
    Quantity:Number;
    AmountPaid:Number;
    Sku:string;
    Summary:string;
    Description:string;
    SupplierCode:string;
    SupplierName:string;
    Color:string;
    Column:string;
    Row:string;
    OnHand:Number;
    Product:Product;
}

export class SaleTax {
    TaxAmount:Number;
    IsUserOverridden:boolean;
    TaxRate:Number;
    TaxableAmount:Number;
    OrganizationTaxDescription:string;
}

export class SpecialOrderLayaway {
    OriginalQuantity:Number;
    OriginalTicketNumber:Number;
    OriginalAmount:Number;
    AmountPaidToDate:Number;
    DiscountRate:Number;
    DiscountAmount:Number;
    Price:Number;
    TaxApplied:Number;
    PickedUpQuantity:Number;
    CancelledQuantity:Number;
    RemainingAmountPaid:Number;
}

export class SaleDetails {
    TicketLineNumber:Number;
    Quantity:Number;
    SalePrice:Number;
    RetailPrice:Number;
    DiscountRate:Number;
    DiscountAmount:Number;
    CommissionAmount:Number;
    PerkAmount:Number;
    AmountPaid:Number;
    Cost:Number;
    ShippingCharges:Number;
    ShipToCustomer:boolean;
    SKUComment:string;
    ModifiedOn:Date;
    ModifiedBy:string;
    IsFBQualified:boolean;
    ActivePrice:Number;
    IsSellable:boolean;
    AdditionalInformation:string;
    NetSales:Number;
    CouponAmountApplied:Number;
    GiftCardNumber:string;
    CouponCode:string;
    CouponDescription:string;
    ReturnDescription:string;
    TransactionSaleDescription:string;
    DiscountReasonDescription:string;
    SaleTax:SaleTax;
    SalesPerson:Cashier;
    SpecialOrderLayaway:SpecialOrderLayaway;
    Customer:Buyer;
    ProductItem:ProductItem[];
}

export class BatchPayout {
    Value:Number;
    CurrencyType:string;
    Memo:string;
    PayoutDate:Date;
    CreatedOn:Date;
    ModifiedOn:Date;
    ModifiedBy:string;
}

export class Sale {
    BatchStartDate:Date;
    BatchEndDate:Date;
    BatchOverShort:Number;
    BatchStartingBalance:Number;
    BatchEndingBalance:Number;
    BatchCreatedOn:Date;
    BatchModifiedOn:Date;
    BatchModifiedBy:string;
    BatchTotalDeposit:Number;
    BatchEDI852ReportedReportedOn:Date;
    BatchFinancialExportedOn:Date;
    TerminalDescription:string;
    StoreCode:Number;
    StoreName:string;
    User:User;
    SaleHeaders: SaleHeaderDetail[];
    BatchPayouts:BatchPayout[];
}

export class PosTransactionResponse {
    Sales:Sale[];
    IsSuccessful:boolean = false;
    Message:string = "";
    ResultStatistics:ResultStatistics;
    ValidationMessages: {
        "": ""
    }

    constructor(json:any) {
        this.Sales = json.Sales;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ResultStatistics = json.ResultStatistics;
        this.ValidationMessages = json.ValidationMessages;
    }
}

export class ProductQuery {
    SKU:string;
    Brand:string;
    Style:string;
    SupplierCode:string;
    Supplier:string;
    SupplierSKU:string;
    Summary:string;
    Colors:string[];
    Classes:string[];
    ProductCustomEntries:string[];
    StoreCode:Number;
    MinOnHand:Number;
    Skip:Number;
    Take:Number;
}

export class ProductDetailQuery {
    UPC:string;
    Column:string;
    Row:string;
    SKU:string;
    Brand:string;
    Style:string;
    SupplierCode:string;
    Supplier:string;
    SupplierSKU:string;
    Summary:string;
    Colors:string[];
    Classes:string[];
    ProductCustomEntries:string[];
    StoreCode:Number;
    MinOnHand:Number;
    Skip:Number;
    Take:Number;
}

export class ProductResponse {
    Products:Product[];
    IsSuccessful:boolean = false;
    Message:string = "";
    ResultStatistics:ResultStatistics;
    ValidationMessages: {
        "": ""
    }

    constructor(json:any) {
        this.Products = json.Products;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ResultStatistics = json.ResultStatistics;
        this.ValidationMessages = json.ValidationMessages;
    }
}

export class CustomerTag {
    CustomerTagId:string;
    CustomerId:string;
    TagId:string;
    CustomAttributeText:string;
    TagPath:string;
}

export class CustomerTagResponse {
    CustomerTags: {
        "": CustomerTag[];
    }
    IsSuccessful:boolean = false;
    Message:string = "";
    ValidationMessages: {
        "": ""
    }

    constructor(json:any) {
        this.CustomerTags = json.CustomerTags;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ValidationMessages = json.ValidationMessages;
    }
}

export class Tag {
    TagId:string;
    TagParentId:string;
    CustomEntryType:Number;
    TagType:Number;
    TagValue:string;
    TagPath:string;
    IsRequired:boolean;
    Ordinal:Number;
}

export class TagResponse {
    Tags:Tag[];
    IsSuccessful:boolean = false;
    Message:string = "";
    ValidationMessages: {
        "": ""
    }

    constructor(json:any) {
        this.Tags = json.Tags;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ValidationMessages = json.ValidationMessages;
    }
}
export class SaleInfo {
    SalePrice:Number;
    SaleAmount:Number;
    Sku:string;
    HourOfDay:Number;
    UniqueCustomers:Number;
    NumberOfTickets:Number;
    SaleQuantity:Number;
    StoreCode:Number;
    SalesPerson: Cashier;
}

export class SalesResponse {
    Sales:SaleInfo[];
    IsSuccessful:boolean = false;
    Message:string = "";
    ResultStatistics:ResultStatistics;
    ValidationMessages: {
        "": ""
    }

    constructor(json:any) {
        this.Sales = json.Sales;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ResultStatistics = json.ResultStatistics;
        this.ValidationMessages = json.ValidationMessages;
    }
}

export class Receipt {
    StoreCode: Number;
    TicketNumber: Number;
    ReceiptText: string;
}

export class ReceiptResponse {
    Receipt: Receipt[];
    IsSuccessful: boolean;

    constructor(json:any) {
        this.Receipt = json.Receipt;
        this.IsSuccessful = json.IsSuccessful;
    }
}

export class PurchaseOrderInfo {
    PurchaseOrderNumber:string;
    ConfirmationNumber:string;
    Terms:string;
    ShipVia:string;
    AllowBackOrdered:boolean;
    AllowSplitShipment:boolean;
    IsSpecialOrder:boolean;
    Alert:string;
    SalesPeriodStart:Date;
    SalesPeriodEnd:Date;
    ProgramCode:string;
    DiscountPercent:Number;
    CustomerOrderNumber:string;
    OrderedOn:Date;
    ExportedOn:Date;
    ShipOn:Date;
    CancelOn:Date;
    PayOn:Date;
    ExpectedToShipOn:Date;
    AcknowledgedOn:Date;
    OriginalShipOn:Date;
    OriginalCancelOn:Date;
    ClosedOn:Date;
    CreatedOn:Date;
    ShipToCustomerAccountNumber:string;
    PurchaseOrderType:string;
    BillToStoreCode:Number;
    BillToStoreName:string;
    ShipToStoreCode:Number;
    ShipToStoreName:string;
    SupplierName:string;
    SupplierCode:string;
    ShippingInstructionDescription:string;
    PackagingType:string;
    EDIPurchaseOrderType:string;
    DeletedOn:Date;
    Details: PurchaseOrderDetail[];
  }

export class PurchaseOrderDetail {
    OrderQuantity:Number;
    ReceivedQuantity:Number;
    Cost:Number;
    ReceiveAtCost:Number;
    RetailPrice:Number;
    OriginalOrderQuantity:Number;
    OriginalCost:Number;
    CreatedOn:Date;
    ModifiedOn:Date;
    DeletedOn:Date;
    ProductItem: ProductItem;
}

export class PurchaseOrder {
    PurchaseOrderNumber:string;
    SupplierCode:string;
    BillToStoreCode:Number;
    ShipToStoreCode:Number;
    DiscountPercent:Number;
    ConfirmationNumber:string;
    ShipVia:string;
    Terms:string;
    OrderDate:Date;
    ShipDate:Date;
    CancelDate:Date;
    PaymentDate:Date;
    Comment:string;
    AlertMessage:string;
    PurchaseOrderInfo:PurchaseOrderDetail[];
}

export class GenericResponse {
    IsSuccessful:boolean = false;
    Message:string = "";
    ValidationMessages: {
        "": ""
    }

    constructor(json:any) {
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ValidationMessages = json.ValidationMessages;
    }
}

export class PurchaseOrderQuery {
    SKU:string;
    Column:string;
    Row:string;
    Brand:string;
    UPC:string;
    Style:string;
    SupplierCode:string;
    Supplier:string;
    SupplierSKU:string;
    Summary:string;
    Colors:string[];
    Classes:string[];
    ProductCustomEntries:string[];
    PurchaseOrderNumber:string;
    BillToStoreCode:Number;
    BillToStoreName:string;
    ShipToStoreCode:Number;
    ShipToStoreName:string;
    ShipToCustomerAccountNumber:string;
    ConfirmationNumber:string;
    PurchaseOrderType:PurchaseOrderType;
    PurchaseOrderClosedStatus:boolean;
    Skip:Number;
    Take:Number;
}

export class PurchaseOrderResponse {
    Sales:SaleInfo[];
    IsSuccessful:boolean = false;
    Message:string = "";
    ResultStatistics:ResultStatistics;
    ValidationMessages: {
        "": ""
    }

    constructor(json:any) {
        this.Sales = json.Sales;
        this.IsSuccessful = json.IsSuccessful;
        this.Message = json.Message;
        this.ResultStatistics = json.ResultStatistics;
        this.ValidationMessages = json.ValidationMessages;
    }
}

export class Rics {
    token:string;
    baseUrl:string = 'https://enterprise.ricssoftware.com/api/';

    constructor(token:string) {
        this.token = token;
    }

    /**
     * Returns the AR Customer Credit Limit
     * 
     * @param customerId The Customer Guid
     * @returns The AR Customer Credit Limit
     */
    async GetArCustomerCreditLimit(customerId:string) {
        return new Promise((resolve, reject) => {
            var params = {
                CustomerId: customerId
            };
            request.post(this.baseUrl+"Customer/GetCustomerDetails", {json: params, headers: {"token": this.token, "User-Agent": "application/json"}}, (err, res, body) => {
                if (body) resolve(new ARCustomerCreditLimitResponse(body));
                else reject(err);
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
    async GetCustomEntry(types:CustomEntryType[], tagTypes:TagType[]) {
        return new Promise((resolve, reject) => {
            var params = {
                CustomEntryTypes: types,
                TagTypes: tagTypes
            };
            request.post(this.baseUrl+"CustomEntry/GetCustomEntry", {json: params, headers: {"token": this.token, "User-Agent": "application/json"}}, (err, res, body) => {
                if (body) resolve(new CustomEntryResponse(body));
                else reject(err);
            });
        });
    }

    /**
     * Get a single customer given an email address
     * 
     * @param customerId The unique customer guid
     * @returns The customer object
     */
    async GetCustomersByEMail(email:string) {
        return new Promise((resolve, reject) => {
            var query = new CustomerQuery();
            query.Email = email;
            request.post(this.baseUrl+"Customer/GetCustomer", {json: query, headers: {"token": this.token, "User-Agent": "application/json"}}, (err, res, body) => {
                if (body) {
                    var result = new CustomerResponse(body);
                    if (result.ResultStatistics.TotalRecords>0) resolve(result.Customers);
                    else resolve([]);
                } else reject(err);
            });
        });
    }

    /**
     * Get a single customer given the identifier
     * 
     * @param customerId The unique customer guid
     * @returns The customer object
     */
    async GetCustomerById(customerId:string) {
        return new Promise((resolve, reject) => {
            var query = new CustomerQuery();
            query.CustomerId = customerId;
            request.post(this.baseUrl+"Customer/GetCustomer", {json: query, headers: {"token": this.token, "User-Agent": "application/json"}}, (err, res, body) => {
                if (body) {
                    var result = new CustomerResponse(body);
                    if (result.ResultStatistics.TotalRecords>0) resolve(result.Customers[0]);
                    else resolve(new Customer());
                } else reject(err);
            });
        });
    }

    /**
     * Returns the results of a full customer query
     * 
     * @param query A Full Customer Query Object
     * @returns The customer search result
     */
    async GetCustomer(query:CustomerQuery) {
        return new Promise((resolve, reject) => {
            request.post(this.baseUrl+"Customer/GetCustomer", {json: query, headers: {"token": this.token, "User-Agent": "application/json"}}, (err, res, body) => {
                if (body) resolve(new CustomerResponse(body));
                else reject(err);
            });
        });
    }

    /**
     * Returns the Customer Details from a Customer Detail Query
     * 
     * @param query The full Customer Detail Query object
     * @returns The results of the Customer Detail Query
     */
    async GetCustomerDetails(query:CustomerDetailQuery) {
        return new Promise((resolve, reject) => {
            request.post(this.baseUrl+"Customer/GetCustomerDetails", {json: query, headers: {"token": this.token, "User-Agent": "application/json"}}, (err, res, body) => {
                if (body) resolve(new CustomerDetailResponse(body));
                else reject(err);
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
    async GetCustomerPurchaseHistory(customerId:string, take:Number=null, skip:Number=null) {
        return new Promise((resolve, reject) => {
            var params = {
                CustomerId: customerId,
                Take: take,
                Skip: skip
            }
            request.post(this.baseUrl+"Customer/GetCustomerPurchaseHistory", {json: params, headers: {"token": this.token, "User-Agent": "application/json"}}, (err, res, body) => {
                if (body) resolve(new CustomerPurchaseResponse(body));
                else reject(err);
            });
        });
    }

    /**
     * Save customer information to the system
     * 
     * @param customer The Customer Info Object
     * @returns A Status object along with the new Customer info
     */
    async SaveCustomer(customer:CustomerInfo) {
        return new Promise((resolve, reject) => {
            request.post(this.baseUrl+"Customer/SaveCustomer", {json: customer, headers: {"token": this.token, "User-Agent": "application/json"}}, (err, res, body) => {
                if (body) resolve(new SaveCustomerResponse(body));
                else reject(err);
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
            request.post(this.baseUrl+"Discount/GetDiscountReason", {json: {}, headers: {"token": this.token, "User-Agent": "application/json"}}, (err, res, body) => {
                if (body) resolve(new DiscountReasonResponse(body));
                else reject(err);
            });
        });
    }

    /**
     * Query for a users frequency rewards
     * 
     * @param customerId The unique customer identifier
     * @returns The Frequest Buyer Rewards data
     */
    async GetFrequentBuyerRewards(customerId:string) {
        return new Promise((resolve, reject) => {
            var params = {
                CustomerId: customerId
            }
            request.post(this.baseUrl+"FrequentBuyer/GetFrequentBuyerRewards", {json: params, headers: {"token": this.token, "User-Agent": "application/json"}}, (err, res, body) => {
                if (body) resolve(new FrequentBuyerRewardsResponse(body));
                else reject(err);
            });
        });
    }

    /**
     * Look up buyer activity for frequent customers
     * 
     * @param query The query object to look up buyer activities 
     * @returns The list of plans
     */
    async GetFrequentBuyerActivity(query:BuyerActivityQuery) {
        return new Promise((resolve, reject) => {
            request.post(this.baseUrl+"FrequentBuyer/GetFrequentBuyerActivity", {json: query, headers: {"token": this.token, "User-Agent": "application/json"}}, (err, res, body) => {
                if (body) resolve(new BuyerActivityResponse(body));
                else reject(err);
            });
        });
    }

    /**
     * Look up gift card information based on the unique identifier
     * 
     * @param cardId The unique card identifier
     * @returns Any associated gift cards
     */
    async GetGiftCardById(cardId:string) {
        return new Promise((resolve, reject) => {
            var params = {
                GiftCardId: cardId
            }
            request.post(this.baseUrl+"GiftCard/GetGiftCardById", {json: params, headers: {"token": this.token, "User-Agent": "application/json"}}, (err, res, body) => {
                if (body) resolve(new GiftCardResponse(body));
                else reject(err);
            });
        });
    }

    /**
     * Search for a gift card by a number
     * 
     * @param cardNumber The Gift Card Number to check
     * @returns The Gift Card Object
     */
    async GetGiftCardByNumber(cardNumber:string) {
        return new Promise((resolve, reject) => {
            var params = {
                GiftCardNumber: cardNumber
            }
            request.post(this.baseUrl+"GiftCard/GetGiftCardByNumber", {json: params, headers: {"token": this.token, "User-Agent": "application/json"}}, (err, res, body) => {
                if (body) resolve(new GiftCardsResponse(body));
                else reject(err);
            });
        });
    }

    /**
     * Get the gift card transactions from the Rics System
     * 
     * @param query The Query object to retrieve gift card transactions
     * @returns The transacton response object
     */
    async GetGiftCardTransaction(query:GiftCardTransactionQuery) {
        return new Promise((resolve, reject) => {
            request.post(this.baseUrl+"GiftCard/GetGiftCardTransaction", {json: query, headers: {"token": this.token, "User-Agent": "application/json"}}, (err, res, body) => {
                if (body) resolve(new GiftCardTransactionResponse(body));
                else reject(err);
            });
        });
    }

    /**
     * Save the updated information to Rics
     * 
     * @param info The Gift Card Info to save
     * @returns The save results containing the new card
     */
    async SaveGiftCard(info:GiftCardInfo) {
        return new Promise((resolve, reject) => {
            request.post(this.baseUrl+"GiftCard/SaveGiftCard", {json: info, headers: {"token": this.token, "User-Agent": "application/json"}}, (err, res, body) => {
                if (body) resolve(new GiftCardSavedResponse(body));
                else reject(err);
            });
        });
    }

    /**
     * Check the Rics system for inventory
     * 
     * @param query The contents of the inventory query
     * @returns The items that match the query
     */
    async GetInventoryOnHand(query:InventoryQuery) {
        return new Promise((resolve, reject) => {
            request.post(this.baseUrl+"GiftCard/GetInventoryOnHand", {json: query, headers: {"token": this.token, "User-Agent": "application/json"}}, (err, res, body) => {
                if (body) resolve(new InventoryResponse(body));
                else reject(err);
            });
        });
    }

    /**
     * Get a list of inventory transactions matching the defined query
     * 
     * @param query The inventory transaction query
     * @returns The list of transactions
     */
    async GetInventoryTransaction(query:InventoryTransactionQuery) {
        return new Promise((resolve, reject) => {
            request.post(this.baseUrl+"GiftCard/GetInventoryTransaction", {json: query, headers: {"token": this.token, "User-Agent": "application/json"}}, (err, res, body) => {
                if (body) resolve(new TransactionResponse(body));
                else reject(err);
            });
        });
    }

    /**
     * Return a list of non sellable batch records
     * 
     * @param query The query for the Non Sellable Batch Results
     * @returns The results of the Non Sellable Batch Query
     */
    async GetNonSellableBatch(query:NonSellableBatchQuery) {
        return new Promise((resolve, reject) => {
            request.post(this.baseUrl+"NonSellable/GetNonSellableBatch", {json: query, headers: {"token": this.token, "User-Agent": "application/json"}}, (err, res, body) => {
                if (body) resolve(new NonSellableBatchResponse(body));
                else reject(err);
            });
        });
    }

    /**
     * Return a list of non sellable batch details
     * 
     * @param query Non Sellable Details Query
     * @returns The response to the Non Sellable Batch Details Query
     */
    async GetNonSellableBatchDetails(query:NonSellableBatchDetailsQuery) {
        return new Promise((resolve, reject) => {
            request.post(this.baseUrl+"NonSellable/GetNonSellableBatchDetails", {json: query, headers: {"token": this.token, "User-Agent": "application/json"}}, (err, res, body) => {
                if (body) resolve(new NonSellableBatchDetailsResponse(body));
                else reject(err);
            });
        });
    }

    /**
     * Query the system for POS Transactions
     * 
     * @param query The query to search for POS Transactions
     * @returns The List of POS Transactions that match the query
     */
    async GetPOSTransaction(query:PosTransactionQuery) {
        return new Promise((resolve, reject) => {
            request.post(this.baseUrl+"POS/GetPOSTransaction", {json: query, headers: {"token": this.token, "User-Agent": "application/json"}}, (err, res, body) => {
                if (body) resolve(new PosTransactionResponse(body));
                else reject(err);
            });
        });
    }

    /**
     * Get a list of products that match the query
     * 
     * @param query The Product Query
     * @returns The results of the product query
     */
    async GetProduct(query:ProductQuery) {
        return new Promise((resolve, reject) => {
            request.post(this.baseUrl+"Product/GetProduct", {json: query, headers: {"token": this.token, "User-Agent": "application/json"}}, (err, res, body) => {
                if (body) resolve(new ProductResponse(body));
                else reject(err);
            });
        });
    }

    /**
     * Get a list of product details that match the query
     * 
     * @param query The Product Detail Query
     * @returns The Product list that matches the query
     */
    async GetProductDetails(query:ProductDetailQuery) {
        return new Promise((resolve, reject) => {
            request.post(this.baseUrl+"Product/GetProductDetails", {json: query, headers: {"token": this.token, "User-Agent": "application/json"}}, (err, res, body) => {
                if (body) resolve(new ProductResponse(body));
                else reject(err);
            });
        });
    }

    /**
     * Search for Purchase Orders
     * 
     * @param query The Purchase Order Query Object
     * @returns The list of Purchase Orders that match the query
     */
    async GetPurchaseOrder(query:PurchaseOrderQuery) {
        return new Promise((resolve, reject) => {
            request.post(this.baseUrl+"PurchaseOrder/GetPurchaseOrder", {json: query, headers: {"token": this.token, "User-Agent": "application/json"}}, (err, res, body) => {
                if (body) resolve(new PurchaseOrderResponse(body));
                else reject(err);
            });
        });
    }

    /**
     * Saves the purchase order to the system
     * 
     * @param po The PurchaseOrder object to save
     * @returns The Generic Response for the save action
     */
    async SavePurchaseOrder(po:PurchaseOrder) {
        return new Promise((resolve, reject) => {
            request.post(this.baseUrl+"PurchaseOrder/SavePurchaseOrder", {json: po, headers: {"token": this.token, "User-Agent": "application/json"}}, (err, res, body) => {
                if (body) resolve(new GenericResponse(body));
                else reject(err);
            });
        });
    }

    /**
     * Get any Receipt information from a list of TicketNumbers
     * 
     * @param ticketNumbers An array of up to 10 ticket numbers
     * @returns The Contents of the Receipt
     */
    async GetReceipt(ticketNumbers:string[]) {
        return new Promise((resolve, reject) => {
            if (ticketNumbers.length>10) ticketNumbers = ticketNumbers.slice(0,10);
            var params = {
                TicketNumber: ticketNumbers
            };
            request.post(this.baseUrl+"Receipt/GetReceipt", {json: params, headers: {"token": this.token, "User-Agent": "application/json"}}, (err, res, body) => {
                if (body) resolve(new ReceiptResponse(body));
                else reject(err);
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
    async GetSalesBySalesperson(startDate:Date, endDate:Date, salesPersonUsername:string=null, sortBy:SortBy=null, storeCode:Number=null, skip:Number=null, take:Number=null) {
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
            request.post(this.baseUrl+"Summary/GetSalesBySalesperson", {json: params, headers: {"token": this.token, "User-Agent": "application/json"}}, (err, res, body) => {
                if (body) resolve(new SalesResponse(body));
                else reject(err);
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
    async GetSalesBySKU(startDate:Date, endDate:Date, sku:string=null, sortBy:SortBy=null, storeCode:Number=null, skip:Number=null, take:Number=null) {
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
            request.post(this.baseUrl+"Summary/GetSalesBySKU", {json: params, headers: {"token": this.token, "User-Agent": "application/json"}}, (err, res, body) => {
                if (body) resolve(new SalesResponse(body));
                else reject(err);
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
    async GetSalesByStoreCode(startDate:Date, endDate:Date, storeCode:Number, skip:Number=null, take:Number=null) {
        return new Promise((resolve, reject) => {
            if (take>2500) take = 2500;
            var params = {
                TicketDateStart: startDate,
                TicketDateEnd: endDate,
                StoreCode: storeCode,
                Skip: skip,
                Take: take
            };
            request.post(this.baseUrl+"Summary/GetSalesByStoreCode", {json: params, headers: {"token": this.token, "User-Agent": "application/json"}}, (err, res, body) => {
                if (body) resolve(new SalesResponse(body));
                else reject(err);
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
    async GetSalesByTimeOfDay(startDate:Date, endDate:Date, storeCode:Number) {
        return new Promise((resolve, reject) => {
            var params = {
                TicketDateStart: startDate,
                TicketDateEnd: endDate,
                StoreCode: storeCode
            };
            request.post(this.baseUrl+"Summary/GetSalesByTimeOfDay", {json: params, headers: {"token": this.token, "User-Agent": "application/json"}}, (err, res, body) => {
                if (body) resolve(new SalesResponse(body));
                else reject(err);
            });
        });
    }

    /**
     * Search for tags assigned to customers
     * 
     * @param customerId A list of Customer Guids to search for
     * @returns The assocated tags for those customers
     */
    async GetCustomerTags(customerId:string[]) {
        return new Promise((resolve, reject) => {
            var params = {
                CustomerIds: customerId
            };
            request.post(this.baseUrl+"Tags/GetCustomerTags", {json: params, headers: {"token": this.token, "User-Agent": "application/json"}}, (err, res, body) => {
                if (body) resolve(new CustomerTagResponse(body));
                else reject(err);
            });
        });
    }

    /**
     * Query for organized tags in the system
     * 
     * @param tagType The tag type t o search for
     * @returns A list of tags that match the type
     */
    async GetOrganizationTags(tagType:string) {
        return new Promise((resolve, reject) => {
            var params = {
                TagType: tagType
            };
            request.post(this.baseUrl+"Tags/GetOrganizationTags", {json: params, headers: {"token": this.token, "User-Agent": "application/json"}}, (err, res, body) => {
                if (body) resolve(new TagResponse(body));
                else reject(err);
            });
        });
    }
}
