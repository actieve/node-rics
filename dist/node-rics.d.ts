export declare enum CustomEntryType {
    SingleSelect = "SingleSelect",
    MultipleSelect = "MultipleSelect",
    CustomEntry = "CustomEntry"
}
export declare enum TagType {
    SKU = "SKU",
    Customer = "Customer",
    Store = "Store",
    Class = "Class",
    Color = "Color",
    PriceDiscount = "PriceDiscount"
}
export declare enum Gender {
    M = "M",
    F = "F",
    Male = "Male",
    Female = "Female",
    N = "N",
    NonBinary = "NonBinary"
}
export declare enum Salutation {
    Mr = "Mr",
    Mrs = "Mrs",
    Ms = "Ms",
    Dr = "Dr"
}
export declare enum TransactionType {
    TransferOut = "TransferOut",
    TransferIn = "TransferIn",
    PurchaseOrderReceipt = "PurchaseOrderReceipt",
    PhysicalCount = "PhysicalCount",
    ManualReceipt = "ManualReceipt",
    Returned = "Returned",
    Sale = "Sale",
    Migration = "Migration",
    TransferOutCancel = "TransferOutCancel",
    PhysicalAdjust = "PhysicalAdjust",
    TransferInCancel = "TransferInCancel",
    SalesOrder = "SalesOrder",
    RMA = "RMA",
    MergedPhysical = "MergedPhysical",
    ManualAWCUpdate = "ManualAWCUpdate",
    PendingOrderTransfer = "PendingOrderTransfer",
    AddToNonSellable = "AddToNonSellable",
    ReturnFromNonSellable = "ReturnFromNonSellable"
}
export declare enum NonSellableBatchType {
    ReturnToSupplier = "ReturnToSupplier",
    SellOnSecondaryMarket = "SellOnSecondaryMarket",
    Donate = "Donate",
    Discard = "Discard",
    Shrinkage = "Shrinkage",
    SellToStoreOwner = "SellToStoreOwner"
}
export declare enum SaleType {
    StoreSale = "StoreSale",
    WebSale = "WebSale",
    Telephone = "Telephone",
    Wholesale = "Wholesale",
    Invoice = "Invoice",
    MobileSale = "MobileSale"
}
export declare enum POSTransactionType {
    RegularSales = "RegularSales",
    EmployeeSale = "EmployeeSale",
    SpecialOrderPickup = "SpecialOrderPickup",
    LayawaySale = "LayawaySale",
    GiftCardInternal = "GiftCardInternal",
    ChargePayment = "ChargePayment",
    SpecialOrderDeposit = "SpecialOrderDeposit",
    LayawayPayment = "LayawayPayment",
    Return = "Return",
    GiftCardExternal = "GiftCardExternal",
    SpecialOrderPayment = "SpecialOrderPayment",
    LayawayPickup = "LayawayPickup",
    LayawayCancel = "LayawayCancel",
    SpecialOrderCancel = "SpecialOrderCancel",
    Coupon = "Coupon",
    SalesOrderInvoice = "SalesOrderInvoice",
    RefundHouseCharge = "RefundHouseCharge"
}
export declare enum SortBy {
    SKU = "SKU",
    QuantityAscending = "QuantityAscending",
    QuantityDescending = "QuantityDescending",
    SalesAscending = "SalesAscending",
    SalesDescending = "SalesDescending"
}
export declare enum PurchaseOrderType {
    ReOrder = "ReOrder",
    InitialOrder = "InitialOrder"
}
export declare class CustomEntry {
    TagParentId: string;
    TagTypeKey: Number;
    TagTree: string;
    IsRequired: boolean;
    TagType: string;
    CustomEntryType: string;
    TagText: string;
}
export declare class CustomEntryResponse {
    CustomEntries: CustomEntry[];
    IsSuccessful: boolean;
    Message: string;
    ValidationMessages: {
        "": "";
    };
    constructor(json: any);
}
export declare class ARCustomerCreditLimit {
    CustomerId: string;
    CreditLimit: Number;
    CurrentBalance: Number;
    CreditLimitTypeLNumber: any;
}
export declare class ARCustomerCreditLimitResponse {
    ArCustomerCreditLimit: ARCustomerCreditLimit;
    IsSuccessful: boolean;
    Message: string;
    ValidationMessages: {
        "": "";
    };
    constructor(json: any);
}
export declare class CustomerQuery {
    CustomerId: string;
    AccountNumber: string;
    FirstName: string;
    LastName: string;
    Email: string;
    PhoneNumber: string;
    DateOfBirthStart: string;
    DateOfBirthEnd: string;
    StoreCode: Number;
    Address: string;
    City: string;
    State: string;
    PostalCode: string;
    CountryCode: string;
    CustomEntries: string;
    Take: Number;
    Skip: Number;
}
export declare class ResultStatistics {
    StartRecord: Number;
    EndRecord: Number;
    TotalRecords: Number;
}
export declare class Address {
    Addressee: string;
    Address: string;
    City: string;
    State: string;
    PostalCode: string;
    CountryCode: string;
}
export declare class Customer {
    Email: string;
    PhoneNumber: string;
    DateOfBirth: string;
    BillingAddress: Address;
    MailingAddress: Address;
    CustomerId: string;
    AccountNumber: string;
    FirstName: string;
    LastName: string;
}
export declare class CustomerResponse {
    Customers: Customer[];
    ResultStatistics: ResultStatistics;
    IsSuccessful: boolean;
    Message: string;
    ValidationMessages: {
        "": "";
    };
    constructor(json: any);
}
export declare class CustomerDetailQuery {
    CustomerId: string;
    AccountNumber: string;
    FirstName: string;
    LastName: string;
    Email: string;
    Gender: Gender;
    PhoneNumber: string;
    DateOfBirthStart: string;
    DateOfBirthEnd: string;
    Address: string;
    City: string;
    State: string;
    PostalCode: string;
    CountryCode: string;
    CustomEntries: string;
    CreatedStart: string;
    CreatedEnd: string;
    ModifiedStart: string;
    ModifiedEnd: string;
    RelatedAccountNumber: string;
    RelationshipType: string;
    RelatedFirstName: string;
    RelatedLastName: string;
    RelatedDateOfBirthStart: string;
    RelatedDateOfBirthEnd: string;
    Take: Number;
    Skip: Number;
}
export declare class DetailsCustomEntry {
    TagTree: string;
}
export declare class Relation {
    CustomerId: string;
    Relationship: string;
    AccountNumber: string;
    FirstName: string;
    LastName: string;
    DateOfBirth: string;
}
export declare class CustomerDetails {
    Salutation: Salutation;
    MiddleInitial: string;
    Suffix: string;
    Gender: Gender;
    Alert: string;
    CreditLimit: Number;
    TaxExemptId: string;
    IsTaxExempt: boolean;
    CreatedOn: string;
    ModifiedOn: string;
    StopPromptForFBPEnroll: boolean;
    Comments: string;
    EmailReceipt: boolean;
    IsBouncedEmail: boolean;
    IsUnsubscribed: boolean;
    ARPostToId: string;
    DeletedOn: string;
    ARPostAccount: string;
    StoreCode: Number;
    StoreName: string;
    CustomEntries: DetailsCustomEntry[];
    Relationships: Relation[];
    Email: string;
    PhoneNumber: string;
    DateOfBirth: string;
    BillingAddress: Address;
    MailingAddress: Address;
    CustomerId: string;
    AccountNumber: string;
    FirstName: string;
    LastName: string;
}
export declare class CustomerDetailResponse {
    CustomerDetails: CustomerDetails[];
    ResultStatistics: ResultStatistics;
    IsSuccessful: boolean;
    Message: string;
    ValidationMessages: {
        "": "";
    };
    constructor(json: any);
}
export declare class CustomerPurchase {
    TicketLineNumber: Number;
    Quantity: Number;
    AmountPaid: Number;
    Sku: string;
    Summary: string;
    Description: string;
    SupplierCode: string;
    SupplierName: string;
    Color: string;
    Column: string;
    Row: string;
    OnHand: Number;
}
export declare class SaleHeader {
    TicketDateTime: string;
    TicketNumber: Number;
    Change: Number;
    TicketVoided: boolean;
    ReceiptPrinted: boolean;
    TicketSuspended: boolean;
    ReceiptEmailed: boolean;
    SaleDateTime: string;
    TicketModifiedOn: string;
    ModifiedBy: string;
    CreatedOn: string;
    CustomerPurchases: CustomerPurchase[];
}
export declare class CustomerPurchaseResponse {
    SaleHeaders: SaleHeader[];
    ResultStatistics: ResultStatistics;
    IsSuccessful: boolean;
    Message: string;
    ValidationMessages: {
        "": "";
    };
    constructor(json: any);
}
export declare class CustomerInfo {
    CustomerId: string;
    AccountNumber: string;
    FirstName: string;
    LastName: string;
    Email: string;
    PhoneNumber: string;
    DateOfBirth: string;
    Salutation: Salutation;
    MiddleInitial: string;
    Suffix: string;
    Gender: Gender;
    Alert: string;
    CreditLimit: string;
    ChargeBalance: string;
    StoreCredit: string;
    TaxExemptId: string;
    IsTaxExempt: boolean;
    StopPromptForFBPEnroll: string;
    Comments: string;
    EmailReceipt: string;
    IsBouncedEmail: string;
    IsUnsubscribed: string;
    ARPostToId: string;
    CustomEntries: CustomEntry[];
    MailingAddress: Address;
    BillingAddress: Address;
}
export declare class SaveCustomerResponse {
    Customer: Customer;
    IsSuccessful: boolean;
    Message: string;
    ValidationMessages: {
        "": "";
    };
    constructor(json: any);
}
export declare class DiscountReason {
    DiscountReasonName: string;
    DiscountReasonCode: string;
}
export declare class DiscountReasonResponse {
    DiscountReason: DiscountReason;
    IsSuccessful: boolean;
    Message: string;
    ValidationMessages: {
        "": "";
    };
    constructor(json: any);
}
export declare class Plan {
    FBPlanId: string;
    OrganizationId: string;
    FBName: string;
    Summary: string;
    FBPlanTypeKey: Number;
    RewardAmount: Number;
    Breakpoint: Number;
    MaxRewardAmount: Number;
    GraduationPlanId: string;
    IsActive: boolean;
    IsDefaultPlan: boolean;
    FBRewardAvailabilityTypeKey: Number;
    IsCreditClassesOnly: boolean;
    IsDiscountFullPriceOnly: boolean;
    IsRetainPartialCredit: boolean;
    ReceiptShowAccumulation: boolean;
    ReceiptShowAmtToGo: boolean;
    ReceiptShowEstimatedReward: boolean;
    MaximumMarkdownPercent: Number;
    RewardsExpireAfterDays: Number;
    GracePeriodDays: Number;
    MinimumAccumulatingPrice: Number;
    PointsFactor: Number;
}
export declare class Reward {
    FBRewardId: string;
    CustomerId: string;
    FBPlanId: string;
    RewardAmount: Number;
    RewardPercent: Number;
    OriginalAmount: Number;
    FBActionTypeKey: Number;
    ExpiresOn: string;
    CreatedOn: string;
    ModifiedOn: string;
}
export declare class RewardCustomer {
    CustomerId: string;
    FBPlanId: string;
    DollarsAccumulated: Number;
    QuantityAccumulated: Number;
    CreatedOn: string;
    ModifiedOn: string;
}
export declare class FrequentBuyerRewardsResponse {
    Plans: Plan[];
    Rewards: Reward[];
    Customer: RewardCustomer;
    IsSuccessful: boolean;
    AllowMultipleRewards: boolean;
    Message: string;
    ResultStatistics: ResultStatistics;
    ProductTypesAndCategoriesByPlanId: {
        "": [];
    };
    ValidationMessages: {
        "": "";
    };
    constructor(json: any);
}
export declare class BuyerActivityQuery {
    AccountNumber: string;
    FirstName: string;
    LastName: string;
    Email: string;
    Gender: Gender;
    PhoneNumber: string;
    DateOfBirthStart: string;
    DateOfBirthEnd: string;
    Address: string;
    City: string;
    State: string;
    PostalCode: string;
    CountryCode: string;
    CustomEntries: string;
    FBPlanName: string;
    StoreCode: Number;
    Summary: string;
    DollarsAccumulated: Number;
    QuantityAccumulated: Number;
    OutstandingReward: Number;
    Skip: Number;
    Take: Number;
}
export declare class FBCustomer {
    DollarsAccumulated: Number;
    QuantityAccumulated: Number;
    OutstandingReward: Number;
    CreatedOn: string;
    ModifiedOn: string;
    Customer: Buyer;
    Transactions: Transaction[];
    Rewards: BuyerReward[];
}
export declare class Buyer {
    CustomerId: string;
    AccountNumber: string;
    FirstName: string;
    LastName: string;
}
export declare class Transaction {
    DollarsChange: Number;
    DollarsBalance: Number;
    QuantityChange: Number;
    QuantityBalance: Number;
    Memo: string;
    CreatedOn: string;
    TransactionType: string;
}
export declare class BuyerReward {
    RewardAmount: Number;
    RewardPercent: Number;
    OriginalAmount: Number;
    ExpiresOn: string;
    CreatedOn: string;
    EarnedOn: string;
    ActionType: string;
}
export declare class BuyerPlan {
    FBName: string;
    Summary: string;
    RewardAmount: Number;
    Breakpoint: Number;
    MaxRewardAmount: Number;
    PointsFactor: Number;
    IsActive: boolean;
    IsDefaultPlan: boolean;
    IsCreditClassesOnly: boolean;
    IsDiscountFullPriceOnly: boolean;
    IsRetainPartialCredit: boolean;
    ReceiptShowAccumulation: boolean;
    ReceiptShowAmtToGo: boolean;
    ReceiptShowEstimatedReward: boolean;
    MinimumAccumulatingPrice: Number;
    MaximumMarkdownPercent: Number;
    RewardsExpireAfterDays: Number;
    GracePeriodDays: Number;
    ExpiresOn: string;
    PlanType: string;
    AvailabilityType: string;
    FBCustomers: FBCustomer[];
}
export declare class BuyerActivityResponse {
    Plans: BuyerPlan[];
    IsSuccessful: boolean;
    Message: string;
    ResultStatistics: ResultStatistics;
    ValidationMessages: {
        "": "";
    };
    constructor(json: any);
}
export declare class GiftCardDetail {
    GiftCardId: string;
    OrganizationId: string;
    GiftCardNumber: string;
    GiftCardValue: Number;
    IsStoredValue: boolean;
    StartDate: string;
    EndDate: string;
    ModifiedBy: string;
}
export declare class GiftCardResponse {
    GiftCard: GiftCardDetail[];
    IsSuccessful: boolean;
    Message: string;
    ResultStatistics: ResultStatistics;
    ValidationMessages: {
        "": "";
    };
    constructor(json: any);
}
export declare class GiftCard {
    GiftCardId: string;
    GiftCardNumber: string;
    GiftCardValue: Number;
    IsStoredValue: boolean;
}
export declare class GiftCardsResponse {
    GiftCards: GiftCard[];
    IsSuccessful: boolean;
    Message: string;
    ResultStatistics: ResultStatistics;
    ValidationMessages: {
        "": "";
    };
    constructor(json: any);
}
export declare class GiftCardTransactionQuery {
    AccountNumber: string;
    FirstName: string;
    LastName: string;
    Email: string;
    Gender: string;
    PhoneNumber: string;
    DateOfBirthStart: string;
    DateOfBirthEnd: string;
    Address: string;
    City: string;
    State: string;
    PostalCode: string;
    CountryCode: string;
    CustomEntries: string[];
    CardNumber: string;
    CardValue: Number;
    CreatedStart: string;
    CreatedEnd: string;
    DeletedStart: string;
    DeletedEnd: string;
    StoreCode: Number;
    Change: Number;
    ChangeType: string;
    ChangeDateStart: string;
    ChangeDateEnd: string;
    TicketNumber: Number;
    CashierCode: string;
    CashierLogin: string;
    CashierUserName: string;
    SalesPersonCode: string;
    SalesPersonLogin: string;
    SalesPersonUserName: string;
    Skip: Number;
    Take: Number;
}
export declare class TransactionCard {
    GiftCardId: string;
    CardNumber: string;
    CardValue: Number;
    IsStoredValue: boolean;
    StartDate: string;
    EndDate: string;
    CreatedOn: string;
    ModifiedOn: string;
    DeletedOn: string;
}
export declare class Cashier {
    UserCashierCode: string;
    RicsUserId: string;
    OrganizationId: string;
    FirstName: string;
    MiddleName: string;
    LastName: string;
    Login: string;
    Email: string;
}
export declare class SalesPerson {
    UserCashierCode: string;
    RicsUserId: string;
    OrganizationId: string;
    FirstName: string;
    MiddleName: string;
    LastName: string;
    Login: string;
    Email: string;
}
export declare class GiftCardTransaction {
    Change: Number;
    Memo: string;
    ChangeDate: string;
    CreatedOn: string;
    ChangeType: string;
    TicketNumber: Number;
    GiftCard: TransactionCard;
    Cashier: Cashier;
    SalesPerson: SalesPerson;
    Customer: Buyer;
}
export declare class GiftCardTransactionResponse {
    GiftCardTransaction: GiftCardTransaction[];
    IsSuccessful: boolean;
    Message: string;
    ResultStatistics: ResultStatistics;
    ValidationMessages: {
        "": "";
    };
    constructor(json: any);
}
export declare class GiftCardInfo {
    GiftCardId: string;
    CardNumber: string;
    CardValue: Number;
    StartDate: string;
    EndDate: string;
    IsStoredValue: boolean;
}
export declare class GiftCardSavedResponse {
    GiftCard: GiftCardInfo;
    IsSuccessful: boolean;
    Message: string;
    ResultStatistics: ResultStatistics;
    ValidationMessages: {
        "": "";
    };
    constructor(json: any);
}
export declare class InventoryQuery {
    SKU: string;
    Column: string;
    Row: string;
    Brand: string;
    UPC: string;
    Style: string;
    SupplierCode: string;
    Supplier: string;
    SupplierSKU: string;
    IsSellableOnline: boolean;
    Summary: string;
    Colors: string;
    Classes: string;
    ProductCustomEntries: string;
    StoreCode: Number;
    MaxOnHand: Number;
    MinOnHand: Number;
    Skip: Number;
    Take: Number;
}
export declare class Item {
    AvailableToOrderUntil: string;
    Sku: string;
    Brand: string;
    Style: string;
    SupplierCode: string;
    Supplier: string;
    IsSellableOnline: boolean;
    Summary: string;
    Column: string;
    ColumnOrdinal: Number;
    Row: string;
    RowOrdinal: Number;
    UPC: string;
    Cost: Number;
    RetailPrice: Number;
    ActivePrice: Number;
    Perk: Number;
    OnHand: Number;
    Colors: DetailsCustomEntry;
    Classes: DetailsCustomEntry[];
    UPCs: string[];
}
export declare class Store {
    StoreCode: Number;
    StoreName: string;
    Items: Item[];
}
export declare class InventoryResponse {
    Items: Item[];
    IsSuccessful: boolean;
    Message: string;
    ResultStatistics: ResultStatistics;
    ValidationMessages: {
        "": "";
    };
    constructor(json: any);
}
export declare class InventoryTransactionQuery {
    TransactionStart: string;
    TransactionEnd: string;
    StoreCode: Number;
    SKU: string;
    Column: string;
    Row: string;
    Brand: string;
    UPC: string;
    Style: string;
    SupplierCode: string;
    Supplier: string;
    SupplierSKU: string;
    Summary: string;
    Colors: string[];
    Classes: string[];
    ProductCustomEntries: string[];
    TransactionType: TransactionType;
    WebOrderNumber: string;
    PurchaseOrderNumber: string;
    TransferOrderNumber: string;
    Skip: Number;
    Take: Number;
}
export declare class ProductItem {
    Sku: string;
    Brand: string;
    Style: string;
    SupplierCode: string;
    Supplier: string;
    Summary: string;
    Colors: DetailsCustomEntry[];
    Classes: DetailsCustomEntry[];
    UPCs: string[];
    AvailableToOrderUntil: Date;
    DeletedOn: Date;
    Column: string;
    ColumnOrdinal: Number;
    Row: string;
    RowOrdinal: Number;
    UPC: string;
}
export declare class InventoryTransaction {
    OnHand: Number;
    TransactionQuantity: Number;
    Cost: Number;
    AverageWeightedCost: Number;
    RmaNumber: string;
    TransactionDate: Date;
    CreatedOn: Date;
    User: string;
    FreightAmount: Number;
    DiscountAmount: Number;
    TransactionType: string;
    TransferToStoreCode: Number;
    TransferToStoreName: string;
    TicketNumber: Number;
    PurchaseOrderNumber: string;
    TransferOrderNumber: string;
    WebOrderNumber: string;
    ReceivingLogBatchNumber: string;
    LocalDate: Date;
    ProductItem: ProductItem;
}
export declare class TransactionResponse {
    Transactions: InventoryTransaction[];
    IsSuccessful: boolean;
    Message: string;
    ResultStatistics: ResultStatistics;
    ValidationMessages: {
        "": "";
    };
    constructor(json: any);
}
export declare class NonSellableBatchDetail {
    DateAdded: Date;
    NonSellableBatchId: string;
    Memo: string;
    Quantity: Number;
    UnitValue: Number;
    SupplierCode: string;
    SupplierName: string;
    Brand: string;
    Column: string;
    Row: string;
    StoreCode: Number;
    SKU: string;
    ReturnDescription: string;
}
export declare class NonSellableBatch {
    NonSellableBatchId: string;
    BatchName: string;
    RMA: string;
    TotalValue: Number;
    CreatedOn: Date;
    CompletedOn: Date;
    Comment: string;
    StoreCode: Date;
    NonSellableBatchType: string;
    SupplierCode: string;
    SupplierName: string;
}
export declare class NonSellableBatchQuery {
    NonSellableBatchId: string;
    BatchName: string;
    StoreCode: Number;
    NonSellableBatchType: string;
    SupplierCode: string;
    SupplierName: string;
    RMANumber: string;
    Comment: string;
    Recipient: string;
    TotalValueMin: Number;
    TotalValueMax: Number;
    CreatedOnStart: Date;
    CreatedOnEnd: Date;
    CompletedOnStart: Date;
    CompletedOnEnd: Date;
    Skip: Number;
    Take: Number;
}
export declare class NonSellableBatchResponse {
    NonSellableBatchs: NonSellableBatch[];
    IsSuccessful: boolean;
    Message: string;
    ResultStatistics: ResultStatistics;
    ValidationMessages: {
        "": "";
    };
    constructor(json: any);
}
export declare class NonSellableBatchDetailsQuery {
    NonSellableBatchId: string;
    StoreCode: Number;
    QuantityMin: Number;
    QuantityMax: Number;
    UnitValueMin: Number;
    UnitValueMax: Number;
    Memo: string;
    DateAddedStart: Date;
    DateAddedEnd: Date;
    BatchName: string;
    NonSellableBatchType: NonSellableBatchType;
    SupplierCode: string;
    SupplierName: string;
    SKU: string;
    Column: string;
    Row: string;
    Brand: string;
    ReturnDescription: string;
    Skip: Number;
    Take: Number;
}
export declare class NonSellableBatchDetailsResponse {
    NonSellableDetails: NonSellableBatchDetail[];
    IsSuccessful: boolean;
    Message: string;
    ResultStatistics: ResultStatistics;
    ValidationMessages: {
        "": "";
    };
    constructor(json: any);
}
export declare class PosTransactionQuery {
    BatchStartDate: Date;
    BatchEndDate: Date;
    SKU: string;
    Column: string;
    Row: string;
    Brand: string;
    UPC: string;
    Style: string;
    SupplierCode: string;
    Supplier: string;
    SupplierSKU: string;
    Summary: string;
    Colors: string[];
    Classes: string[];
    ProductCustomEntries: string[];
    StoreCode: Number;
    StoreState: string;
    TerminalDescription: string;
    CashierCode: string;
    CashierLogin: string;
    CashierUserName: string;
    TicketDateStart: Date;
    TicketDateEnd: Date;
    VoidedOnStart: Date;
    VoidedOnEnd: Date;
    ModifiedOnStart: Date;
    ModifiedOnEnd: Date;
    CreatedOnStart: Date;
    CreatedOnEnd: Date;
    SalesPersonCode: string;
    SalesPersonLogin: string;
    SalesPersonUserName: string;
    TicketNumber: Number;
    TicketDiscountPercent: Number;
    DiscountAmount: Number;
    SaleType: SaleType;
    ShipToZipCode: string;
    PromotionCode: string;
    TransactionType: POSTransactionType;
    CustomerId: string;
    AccountNumber: string;
    GiftCardNumber: string;
    CouponCode: string;
    ReturnDescription: string;
    ShipToCustomer: string;
    DiscountDescription: string;
    IsSellable: Boolean;
    Skip: Number;
    Take: Number;
}
export declare class User {
    UserCashierCode: string;
    RicsUserId: string;
    OrganizationId: string;
    FirstName: string;
    MiddleName: string;
    LastName: string;
    Login: string;
    Email: string;
}
export declare class SaleHeaderDetail {
    TicketDateTime: Date;
    TicketNumber: Number;
    TicketComment: string;
    Alert: string;
    Shipping: Number;
    Change: Number;
    AlternateChange: Number;
    ExchangeRate: Number;
    TicketVoided: boolean;
    ReceiptPrinted: boolean;
    TicketSuspended: boolean;
    ReceiptEmailed: boolean;
    ReceiptText: string;
    SaleDateTime: Date;
    TicketModifiedOn: Date;
    ModifiedBy: string;
    ShipToZipcode: string;
    OrderNumber: string;
    VoidedDate: Date;
    CreatedOn: Date;
    PromotionCode: string;
    PromotionDescription: string;
    SaleType: string;
    EcommerceProviderType: string;
    SaleDetails: SaleDetails[];
    CustomerPurchases: CustomerPurchaseDetails[];
    Tenders: Tender[];
    Cashier: Cashier;
    Customer: SaleCustomer;
}
export declare class SaleCustomer {
    Email: string;
    PhoneNumber: string;
    DateOfBirth: Date;
    BillingAddress: Address;
    MailingAddress: Address;
    CustomerId: string;
    AccountNumber: string;
    FirstName: string;
    LastName: string;
}
export declare class Tender {
    AmountTendered: Number;
    AlternateAmount: Number;
    IsAlternateCurrency: boolean;
    ExchangeRate: Number;
    AccountType: string;
    IsForced: boolean;
    PaymentCardResponse: string;
    TenderDescription: string;
    GiftCardNumber: string;
}
export declare class ProductDetailItem {
    AvailableToOrderUntil: Date;
    DeletedOn: Date;
    Column: string;
    ColumnOrdinal: Number;
    Row: string;
    RowOrdinal: Number;
    UPC: string;
    UPCs: string[];
}
export declare class Product {
    Sku: string;
    Style: string;
    Summary: string;
    Description: string;
    Alert: string;
    SupplierSku: string;
    AvailableToPOSOn: Date;
    CreatedOn: Date;
    SupplierCode: string;
    SupplierName: string;
    LabelType: string;
    ColumnName: string;
    RowName: string;
    OnHand: Number;
    DeletedOn: Date;
    ProductItems: ProductDetailItem[];
    Colors: DetailsCustomEntry[];
    Classes: DetailsCustomEntry[];
    ProductCustomEntries: DetailsCustomEntry[];
}
export declare class CustomerPurchaseDetails {
    TicketLineNumber: Number;
    Quantity: Number;
    AmountPaid: Number;
    Sku: string;
    Summary: string;
    Description: string;
    SupplierCode: string;
    SupplierName: string;
    Color: string;
    Column: string;
    Row: string;
    OnHand: Number;
    Product: Product;
}
export declare class SaleTax {
    TaxAmount: Number;
    IsUserOverridden: boolean;
    TaxRate: Number;
    TaxableAmount: Number;
    OrganizationTaxDescription: string;
}
export declare class SpecialOrderLayaway {
    OriginalQuantity: Number;
    OriginalTicketNumber: Number;
    OriginalAmount: Number;
    AmountPaidToDate: Number;
    DiscountRate: Number;
    DiscountAmount: Number;
    Price: Number;
    TaxApplied: Number;
    PickedUpQuantity: Number;
    CancelledQuantity: Number;
    RemainingAmountPaid: Number;
}
export declare class SaleDetails {
    TicketLineNumber: Number;
    Quantity: Number;
    SalePrice: Number;
    RetailPrice: Number;
    DiscountRate: Number;
    DiscountAmount: Number;
    CommissionAmount: Number;
    PerkAmount: Number;
    AmountPaid: Number;
    Cost: Number;
    ShippingCharges: Number;
    ShipToCustomer: boolean;
    SKUComment: string;
    ModifiedOn: Date;
    ModifiedBy: string;
    IsFBQualified: boolean;
    ActivePrice: Number;
    IsSellable: boolean;
    AdditionalInformation: string;
    NetSales: Number;
    CouponAmountApplied: Number;
    GiftCardNumber: string;
    CouponCode: string;
    CouponDescription: string;
    ReturnDescription: string;
    TransactionSaleDescription: string;
    DiscountReasonDescription: string;
    SaleTax: SaleTax;
    SalesPerson: Cashier;
    SpecialOrderLayaway: SpecialOrderLayaway;
    Customer: Buyer;
    ProductItem: ProductItem[];
}
export declare class BatchPayout {
    Value: Number;
    CurrencyType: string;
    Memo: string;
    PayoutDate: Date;
    CreatedOn: Date;
    ModifiedOn: Date;
    ModifiedBy: string;
}
export declare class Sale {
    BatchStartDate: Date;
    BatchEndDate: Date;
    BatchOverShort: Number;
    BatchStartingBalance: Number;
    BatchEndingBalance: Number;
    BatchCreatedOn: Date;
    BatchModifiedOn: Date;
    BatchModifiedBy: string;
    BatchTotalDeposit: Number;
    BatchEDI852ReportedReportedOn: Date;
    BatchFinancialExportedOn: Date;
    TerminalDescription: string;
    StoreCode: Number;
    StoreName: string;
    User: User;
    SaleHeaders: SaleHeaderDetail[];
    BatchPayouts: BatchPayout[];
}
export declare class PosTransactionResponse {
    Sales: Sale[];
    IsSuccessful: boolean;
    Message: string;
    ResultStatistics: ResultStatistics;
    ValidationMessages: {
        "": "";
    };
    constructor(json: any);
}
export declare class ProductQuery {
    SKU: string;
    Brand: string;
    Style: string;
    SupplierCode: string;
    Supplier: string;
    SupplierSKU: string;
    Summary: string;
    Colors: string[];
    Classes: string[];
    ProductCustomEntries: string[];
    StoreCode: Number;
    MinOnHand: Number;
    Skip: Number;
    Take: Number;
}
export declare class ProductDetailQuery {
    UPC: string;
    Column: string;
    Row: string;
    SKU: string;
    Brand: string;
    Style: string;
    SupplierCode: string;
    Supplier: string;
    SupplierSKU: string;
    Summary: string;
    Colors: string[];
    Classes: string[];
    ProductCustomEntries: string[];
    StoreCode: Number;
    MinOnHand: Number;
    Skip: Number;
    Take: Number;
}
export declare class ProductResponse {
    Products: Product[];
    IsSuccessful: boolean;
    Message: string;
    ResultStatistics: ResultStatistics;
    ValidationMessages: {
        "": "";
    };
    constructor(json: any);
}
export declare class CustomerTag {
    CustomerTagId: string;
    CustomerId: string;
    TagId: string;
    CustomAttributeText: string;
    TagPath: string;
}
export declare class CustomerTagResponse {
    CustomerTags: {
        "": CustomerTag[];
    };
    IsSuccessful: boolean;
    Message: string;
    ValidationMessages: {
        "": "";
    };
    constructor(json: any);
}
export declare class Tag {
    TagId: string;
    TagParentId: string;
    CustomEntryType: Number;
    TagType: Number;
    TagValue: string;
    TagPath: string;
    IsRequired: boolean;
    Ordinal: Number;
}
export declare class TagResponse {
    Tags: Tag[];
    IsSuccessful: boolean;
    Message: string;
    ValidationMessages: {
        "": "";
    };
    constructor(json: any);
}
export declare class SaleInfo {
    SalePrice: Number;
    SaleAmount: Number;
    Sku: string;
    HourOfDay: Number;
    UniqueCustomers: Number;
    NumberOfTickets: Number;
    SaleQuantity: Number;
    StoreCode: Number;
    SalesPerson: Cashier;
}
export declare class SalesResponse {
    Sales: SaleInfo[];
    IsSuccessful: boolean;
    Message: string;
    ResultStatistics: ResultStatistics;
    ValidationMessages: {
        "": "";
    };
    constructor(json: any);
}
export declare class Receipt {
    StoreCode: Number;
    TicketNumber: Number;
    ReceiptText: string;
}
export declare class ReceiptResponse {
    Receipt: Receipt[];
    IsSuccessful: boolean;
    constructor(json: any);
}
export declare class PurchaseOrderInfo {
    PurchaseOrderNumber: string;
    ConfirmationNumber: string;
    Terms: string;
    ShipVia: string;
    AllowBackOrdered: boolean;
    AllowSplitShipment: boolean;
    IsSpecialOrder: boolean;
    Alert: string;
    SalesPeriodStart: Date;
    SalesPeriodEnd: Date;
    ProgramCode: string;
    DiscountPercent: Number;
    CustomerOrderNumber: string;
    OrderedOn: Date;
    ExportedOn: Date;
    ShipOn: Date;
    CancelOn: Date;
    PayOn: Date;
    ExpectedToShipOn: Date;
    AcknowledgedOn: Date;
    OriginalShipOn: Date;
    OriginalCancelOn: Date;
    ClosedOn: Date;
    CreatedOn: Date;
    ShipToCustomerAccountNumber: string;
    PurchaseOrderType: string;
    BillToStoreCode: Number;
    BillToStoreName: string;
    ShipToStoreCode: Number;
    ShipToStoreName: string;
    SupplierName: string;
    SupplierCode: string;
    ShippingInstructionDescription: string;
    PackagingType: string;
    EDIPurchaseOrderType: string;
    DeletedOn: Date;
    Details: PurchaseOrderDetail[];
}
export declare class PurchaseOrderDetail {
    OrderQuantity: Number;
    ReceivedQuantity: Number;
    Cost: Number;
    ReceiveAtCost: Number;
    RetailPrice: Number;
    OriginalOrderQuantity: Number;
    OriginalCost: Number;
    CreatedOn: Date;
    ModifiedOn: Date;
    DeletedOn: Date;
    ProductItem: ProductItem;
}
export declare class PurchaseOrder {
    PurchaseOrderNumber: string;
    SupplierCode: string;
    BillToStoreCode: Number;
    ShipToStoreCode: Number;
    DiscountPercent: Number;
    ConfirmationNumber: string;
    ShipVia: string;
    Terms: string;
    OrderDate: Date;
    ShipDate: Date;
    CancelDate: Date;
    PaymentDate: Date;
    Comment: string;
    AlertMessage: string;
    PurchaseOrderInfo: PurchaseOrderDetail[];
}
export declare class GenericResponse {
    IsSuccessful: boolean;
    Message: string;
    ValidationMessages: {
        "": "";
    };
    constructor(json: any);
}
export declare class PurchaseOrderQuery {
    SKU: string;
    Column: string;
    Row: string;
    Brand: string;
    UPC: string;
    Style: string;
    SupplierCode: string;
    Supplier: string;
    SupplierSKU: string;
    Summary: string;
    Colors: string[];
    Classes: string[];
    ProductCustomEntries: string[];
    PurchaseOrderNumber: string;
    BillToStoreCode: Number;
    BillToStoreName: string;
    ShipToStoreCode: Number;
    ShipToStoreName: string;
    ShipToCustomerAccountNumber: string;
    ConfirmationNumber: string;
    PurchaseOrderType: PurchaseOrderType;
    PurchaseOrderClosedStatus: boolean;
    Skip: Number;
    Take: Number;
}
export declare class PurchaseOrderResponse {
    Sales: SaleInfo[];
    IsSuccessful: boolean;
    Message: string;
    ResultStatistics: ResultStatistics;
    ValidationMessages: {
        "": "";
    };
    constructor(json: any);
}
export declare class Rics {
    token: string;
    baseUrl: string;
    constructor(token: string);
    /**
     * Returns the AR Customer Credit Limit
     *
     * @param customerId The Customer Guid
     * @returns The AR Customer Credit Limit
     */
    GetArCustomerCreditLimit(customerId: string): Promise<unknown>;
    /**
     * Returns the custom entries that match the query
     *
     * @param types The custom entry types to find.
     * @param tagTypes The tag types to find
     * @returns The list of custom entries
     */
    GetCustomEntry(types: CustomEntryType[], tagTypes: TagType[]): Promise<unknown>;
    /**
     * Get a single customer given an email address
     *
     * @param customerId The unique customer guid
     * @returns The customer object
     */
    GetCustomersByEMail(email: string): Promise<unknown>;
    /**
     * Get a single customer given the identifier
     *
     * @param customerId The unique customer guid
     * @returns The customer object
     */
    GetCustomerById(customerId: string): Promise<unknown>;
    /**
     * Returns the results of a full customer query
     *
     * @param query A Full Customer Query Object
     * @returns The customer search result
     */
    GetCustomer(query: CustomerQuery): Promise<unknown>;
    /**
     * Returns the Customer Details from a Customer Detail Query
     *
     * @param query The full Customer Detail Query object
     * @returns The results of the Customer Detail Query
     */
    GetCustomerDetails(query: CustomerDetailQuery): Promise<unknown>;
    /**
     * Returns the customer purchase details
     *
     * @param customerId The unique customer identifier
     * @param take The amount of records to return
     * @param skip The amount of records to skip
     * @returns The list of Sales for the Customer
     */
    GetCustomerPurchaseHistory(customerId: string, take?: Number, skip?: Number): Promise<unknown>;
    /**
     * Save customer information to the system
     *
     * @param customer The Customer Info Object
     * @returns A Status object along with the new Customer info
     */
    SaveCustomer(customer: CustomerInfo): Promise<unknown>;
    /**
     * List the various discounts in the system
     *
     * @returns The Discount Results
     */
    GetDiscountReason(): Promise<unknown>;
    /**
     * Query for a users frequency rewards
     *
     * @param customerId The unique customer identifier
     * @returns The Frequest Buyer Rewards data
     */
    GetFrequentBuyerRewards(customerId: string): Promise<unknown>;
    /**
     * Look up buyer activity for frequent customers
     *
     * @param query The query object to look up buyer activities
     * @returns The list of plans
     */
    GetFrequentBuyerActivity(query: BuyerActivityQuery): Promise<unknown>;
    /**
     * Look up gift card information based on the unique identifier
     *
     * @param cardId The unique card identifier
     * @returns Any associated gift cards
     */
    GetGiftCardById(cardId: string): Promise<unknown>;
    /**
     * Search for a gift card by a number
     *
     * @param cardNumber The Gift Card Number to check
     * @returns The Gift Card Object
     */
    GetGiftCardByNumber(cardNumber: string): Promise<unknown>;
    /**
     * Get the gift card transactions from the Rics System
     *
     * @param query The Query object to retrieve gift card transactions
     * @returns The transacton response object
     */
    GetGiftCardTransaction(query: GiftCardTransactionQuery): Promise<unknown>;
    /**
     * Save the updated information to Rics
     *
     * @param info The Gift Card Info to save
     * @returns The save results containing the new card
     */
    SaveGiftCard(info: GiftCardInfo): Promise<unknown>;
    /**
     * Check the Rics system for inventory
     *
     * @param query The contents of the inventory query
     * @returns The items that match the query
     */
    GetInventoryOnHand(query: InventoryQuery): Promise<unknown>;
    /**
     * Get a list of inventory transactions matching the defined query
     *
     * @param query The inventory transaction query
     * @returns The list of transactions
     */
    GetInventoryTransaction(query: InventoryTransactionQuery): Promise<unknown>;
    /**
     * Return a list of non sellable batch records
     *
     * @param query The query for the Non Sellable Batch Results
     * @returns The results of the Non Sellable Batch Query
     */
    GetNonSellableBatch(query: NonSellableBatchQuery): Promise<unknown>;
    /**
     * Return a list of non sellable batch details
     *
     * @param query Non Sellable Details Query
     * @returns The response to the Non Sellable Batch Details Query
     */
    GetNonSellableBatchDetails(query: NonSellableBatchDetailsQuery): Promise<unknown>;
    /**
     * Query the system for POS Transactions
     *
     * @param query The query to search for POS Transactions
     * @returns The List of POS Transactions that match the query
     */
    GetPOSTransaction(query: PosTransactionQuery): Promise<unknown>;
    /**
     * Get a list of products that match the query
     *
     * @param query The Product Query
     * @returns The results of the product query
     */
    GetProduct(query: ProductQuery): Promise<unknown>;
    /**
     * Get a list of product details that match the query
     *
     * @param query The Product Detail Query
     * @returns The Product list that matches the query
     */
    GetProductDetails(query: ProductDetailQuery): Promise<unknown>;
    /**
     * Search for Purchase Orders
     *
     * @param query The Purchase Order Query Object
     * @returns The list of Purchase Orders that match the query
     */
    GetPurchaseOrder(query: PurchaseOrderQuery): Promise<unknown>;
    /**
     * Saves the purchase order to the system
     *
     * @param po The PurchaseOrder object to save
     * @returns The Generic Response for the save action
     */
    SavePurchaseOrder(po: PurchaseOrder): Promise<unknown>;
    /**
     * Get any Receipt information from a list of TicketNumbers
     *
     * @param ticketNumbers An array of up to 10 ticket numbers
     * @returns The Contents of the Receipt
     */
    GetReceipt(ticketNumbers: string[]): Promise<unknown>;
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
    GetSalesBySalesperson(startDate: Date, endDate: Date, salesPersonUsername?: string, sortBy?: SortBy, storeCode?: Number, skip?: Number, take?: Number): Promise<unknown>;
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
    GetSalesBySKU(startDate: Date, endDate: Date, sku?: string, sortBy?: SortBy, storeCode?: Number, skip?: Number, take?: Number): Promise<unknown>;
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
    GetSalesByStoreCode(startDate: Date, endDate: Date, storeCode: Number, skip?: Number, take?: Number): Promise<unknown>;
    /**
     * Search for sales for a store code between two dates at a particular time
     *
     * @param startDate The Start Date to search for, include time
     * @param endDate The end date to search for, include time
     * @param storeCode The store code to search for sales
     * @returns The list of sales matching the query
     */
    GetSalesByTimeOfDay(startDate: Date, endDate: Date, storeCode: Number): Promise<unknown>;
    /**
     * Search for tags assigned to customers
     *
     * @param customerId A list of Customer Guids to search for
     * @returns The assocated tags for those customers
     */
    GetCustomerTags(customerId: string[]): Promise<unknown>;
    /**
     * Query for organized tags in the system
     *
     * @param tagType The tag type t o search for
     * @returns A list of tags that match the type
     */
    GetOrganizationTags(tagType: string): Promise<unknown>;
}
