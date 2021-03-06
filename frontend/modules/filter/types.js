const $prefix = "app/filter/";
const SET_ONCHAIN_FILTER_PART = `${$prefix}SET_ONCHAIN_FILTER_PART`;
const SET_REGULAR_FILTER_PART = `${$prefix}SET_REGULAR_FILTER_PART`;
const SET_RECURRING_FILTER_PART = `${$prefix}SET_RECURRING_FILTER_PART`;
const SET_CONTACTS_FILTER_PART = `${$prefix}SET_CONTACTS_FILTER_PART`;
const SET_MERCHANTS_FILTER_PART = `${$prefix}SET_MERCHANTS_FILTER_PART`;
const CLEAR_ALL_FILTERS = `${$prefix}CLEAR_ALL_FILTERS`;
const TYPE_PAYMENT_INCOMING = "Income";
const TYPE_PAYMENT_OUTCOMING = "Outcome";
const FILTER_REGULAR = "Regular";
const FILTER_RECURRING = "Recurring";
const FILTER_ONCHAIN = "Onchain";
const FILTER_CONTACTS = "Contacts";
const FILTER_MERCHANTS = "Merchants";
const FILTER_SOURCES = [
    FILTER_RECURRING,
    FILTER_REGULAR,
    FILTER_ONCHAIN,
    FILTER_CONTACTS,
    FILTER_MERCHANTS,
];
const TYPE_PAYMENT_ALL = "All";
const ANTE_MERIDIEM = "AM";
const POST_MERIDIEM = "PM";
const FILTER_KIND_SEARCH = "Search";
const FILTER_KIND_TYPE = "Type";
const FILTER_KIND_DATE = "Date";
const FILTER_KIND_TIME = "Time";
const FILTER_KIND_PRICE = "Price";
const FILTER_KIND_LIST = [
    FILTER_KIND_SEARCH,
    FILTER_KIND_TYPE,
    FILTER_KIND_DATE,
    FILTER_KIND_TIME,
    FILTER_KIND_PRICE,
];
export {
    SET_ONCHAIN_FILTER_PART,
    SET_REGULAR_FILTER_PART,
    SET_RECURRING_FILTER_PART,
    SET_CONTACTS_FILTER_PART,
    SET_MERCHANTS_FILTER_PART,
    CLEAR_ALL_FILTERS,
    TYPE_PAYMENT_INCOMING,
    TYPE_PAYMENT_OUTCOMING,
    FILTER_REGULAR,
    FILTER_RECURRING,
    FILTER_ONCHAIN,
    FILTER_CONTACTS,
    FILTER_MERCHANTS,
    FILTER_SOURCES,
    TYPE_PAYMENT_ALL,
    ANTE_MERIDIEM,
    POST_MERIDIEM,
    FILTER_KIND_PRICE,
    FILTER_KIND_TIME,
    FILTER_KIND_DATE,
    FILTER_KIND_LIST,
    FILTER_KIND_SEARCH,
    FILTER_KIND_TYPE,
};
