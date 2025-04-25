import { Account, CreditCard, Identity, Transaction } from "@/types/types";

export const mockAccounts: Account[] = [
  {
    account_id: "vzeNDwK7KQIm4yEog683uElbp9GRLEFXGK98D",
    balances: {
      available: 1250.5,
      current: 1300.0,
      currency: "USD"
    },
    mask: "0000",
    name: "Checking Account",
    official_name: "Personal Checking Account",
    type: "checking",
    subtype: "checking",
    institution_id: "ins_109508"
  },
  {
    account_id: "qweRTzUIOp98LKJhgfdsa5432MNbvcXyZ",
    balances: {
      available: 5000.0,
      current: 5000.0,
      currency: "USD"
    },
    mask: "1234",
    name: "Savings Account",
    official_name: "High Yield Savings",
    type: "savings",
    subtype: "savings",
    institution_id: "ins_109509"
  },
  {
    account_id: "poiUYTReWq1234MNbvcXyZ098LKJhgfdsa",
    balances: {
      available: 250.75,
      current: 250.75,
      limit: 1000.0,
      currency: "USD"
    },
    mask: "5678",
    name: "Credit Card",
    official_name: "Visa Platinum",
    type: "credit",
    subtype: "credit card",
    institution_id: "ins_109510"
  },
  {
    account_id: "mnBvcXyZ098LKJhgfdsa5432qweRTzUIOp",
    balances: {
      available: null,
      current: 10000.0,
      currency: "USD"
    },
    mask: "9012",
    name: "Personal Loan",
    official_name: "5-Year Personal Loan",
    type: "loan",
    subtype: "personal",
    institution_id: "ins_109511"
  },
  {
    account_id: "lkjHGFDsa5432mnBvcXyZ098qweRTzUIOp",
    balances: {
      available: 7500.0,
      current: 7500.0,
      currency: "USD"
    },
    mask: "3456",
    name: "Payroll Account",
    official_name: "XYZ Company Payroll",
    type: "checking",
    subtype: "checking",
    institution_id: "ins_109512"
  },
  {
    account_id: "zxcVBNm9876LKJhgfdsa5432qweRTzUIOp",
    balances: {
      available: 200.0,
      current: 200.0,
      currency: "USD"
    },
    mask: "7890",
    name: "Student Account",
    official_name: "University Checking",
    type: "checking",
    subtype: "student",
    institution_id: "ins_109513"
  },
  {
    account_id: "asdFGHjk5432lkjHGFDsa098qweRTzUIOp",
    balances: {
      available: 15000.0,
      current: 15000.0,
      currency: "USD"
    },
    mask: "2345",
    name: "Investment Account",
    official_name: "Brokerage Account",
    type: "investment",
    subtype: "brokerage",
    institution_id: "ins_109514"
  },
  {
    account_id: "qazWSXed5432lkjHGFDsa098qweRTzUIOp",
    balances: {
      available: null,
      current: -500.0,
      limit: 5000.0,
      currency: "USD"
    },
    mask: "6789",
    name: "Debit Card",
    official_name: "Mastercard Gold",
    type: "depository",
    subtype: "debit card",
    institution_id: "ins_109515"
  },
  {
    account_id: "rfvTGBnhy6543lkjHGFDsa098qweRTzUIOp",
    balances: {
      available: 3000.0,
      current: 3000.0,
      currency: "USD"
    },
    mask: "0123",
    name: "Youth Savings",
    official_name: "Young Saver Account",
    type: "savings",
    subtype: "savings",
    institution_id: "ins_109516"
  },
  {
    account_id: "tgbNHYujm7654lkjHGFDsa098qweRTzUIOp",
    balances: {
      available: null,
      current: 200000.0,
      currency: "USD"
    },
    mask: "4567",
    name: "Mortgage",
    official_name: "30-Year Fixed Mortgage",
    type: "loan",
    subtype: "mortgage",
    institution_id: "ins_109517"
  }
];

export const mockTransactions: Transaction[] = [
  {
    transaction_id: "B6ZvxW4Jq9utk5n7yGKlIQa3EjP7mNoZrR5V",
    account_id: "vzeNDwK7KQIm4yEog683uElbp9GRLEFXGK98D",
    date: "2023-10-15",
    amount: 12.5,
    merchant_name: "Central Coffee",
    payment_channel: "in store",
    category: ["Food and Drink", "Coffee Shop"],
    location: {
      city: "New York",
      country: "US"
    }
  },
  {
    transaction_id: "KZ1mXVnQ7Fw3pV9a8yRtSd2EjO6lNoYqU2iP",
    account_id: "vzeNDwK7KQIm4yEog683uElbp9GRLEFXGK98D",
    date: "2023-10-14",
    amount: 45.0,
    merchant_name: "Fresh Market",
    payment_channel: "in store",
    category: ["Shops", "Supermarkets"]
  },
  {
    transaction_id: "P9o8iU7yT6r5E4w3Q2a1S0dFgHjKlZxCvB",
    account_id: "qweRTzUIOp98LKJhgfdsa5432MNbvcXyZ",
    date: "2023-10-13",
    amount: 120.0,
    merchant_name: "Amazon",
    payment_channel: "online",
    category: ["Shops", "Digital Purchase"]
  },
  {
    transaction_id: "Lp0o9K8jI7uH6yG5tF4r3D2e1Qw2E3r4T",
    account_id: "poiUYTReWq1234MNbvcXyZ098LKJhgfdsa",
    date: "2023-10-12",
    amount: -200.0,
    merchant_name: "Credit Card Payment",
    payment_channel: "other",
    category: ["Payment", "Credit Card"]
  },
  {
    transaction_id: "MnB8v7C6x5Z4l3K2j1H0gF9d8s7A6q5W",
    account_id: "mnBvcXyZ098LKJhgfdsa5432qweRTzUIOp",
    date: "2023-10-11",
    amount: 30.0,
    merchant_name: "Shell Gas Station",
    payment_channel: "in store",
    category: ["Transportation", "Fuel"]
  },
  {
    transaction_id: "Qa1z2S3x4C5v6B7n8M9l0K1j2H3g4F5d6",
    account_id: "lkjHGFDsa5432mnBvcXyZ098qweRTzUIOp",
    date: "2023-10-10",
    amount: 15.99,
    merchant_name: "Netflix",
    payment_channel: "online",
    category: ["Recreation", "Streaming"]
  },
  {
    transaction_id: "W2e3R4t5Y6u7I8o9P0o1K2j3H4g5F6d7",
    account_id: "zxcVBNm9876LKJhgfdsa5432qweRTzUIOp",
    date: "2023-10-09",
    amount: 25.0,
    merchant_name: "Italian Restaurant",
    payment_channel: "in store",
    category: ["Food and Drink", "Restaurant"]
  },
  {
    transaction_id: "E3r4T5y6U7i8O9p0K1j2H3g4F5d6S7a8",
    account_id: "asdFGHjk5432lkjHGFDsa098qweRTzUIOp",
    date: "2023-10-08",
    amount: 1000.0,
    merchant_name: "Payroll Deposit",
    payment_channel: "other",
    category: ["Transfer", "Deposit"]
  },
  {
    transaction_id: "R5t6Y7u8I9o0P1k2J3h4G5f6D7s8A9q0",
    account_id: "qazWSXed5432lkjHGFDsa098qweRTzUIOp",
    date: "2023-10-07",
    amount: 50.0,
    merchant_name: "Gym Membership",
    payment_channel: "in store",
    category: ["Recreation", "Gym"]
  },
  {
    transaction_id: "T6y7U8i9O0p1K2j3H4g5F6d7S8a9Q0w1",
    account_id: "rfvTGBnhy6543lkjHGFDsa098qweRTzUIOp",
    date: "2023-10-06",
    amount: 75.0,
    merchant_name: "Clothing Store",
    payment_channel: "in store",
    category: ["Shops", "Clothing"]
  }
];

export const mockIdentity: Identity = {
  names: ["John Smith"],
  emails: [
    {
      data: "john.smith@example.com",
      primary: true
    },
    {
      data: "john.smith.work@example.com",
      primary: false
    }
  ],
  phone_numbers: [
    {
      data: "+12025551234",
      primary: true
    },
    {
      data: "+12035556789",
      primary: false
    }
  ],
  addresses: [
    {
      street: "123 Main Street",
      city: "New York",
      postal_code: "10001",
      country: "US"
    },
    {
      street: "456 Business Ave",
      city: "New York",
      postal_code: "10002",
      country: "US"
    }
  ]
};

export const mockCreditCards: CreditCard[] = [
  {
    account_id: "LMBdZRQeK3iXj5v7a9NlUoP2yGc8rTfHn6J",
    aprs: [
      {
        apr_percentage: 15.99,
        apr_type: "purchase"
      },
      {
        apr_percentage: 23.99,
        apr_type: "cash advance"
      }
    ],
    is_overdue: false,
    last_payment_amount: 120.0,
    last_payment_date: "2023-10-01",
    last_statement_balance: 450.0,
    minimum_payment_amount: 25.0,
    next_payment_due_date: "2023-11-05"
  },
  {
    account_id: "ZXCvBNm9876LKJhgfdsa5432qweRTzUIOp",
    aprs: [
      {
        apr_percentage: 12.99,
        apr_type: "purchase"
      }
    ],
    is_overdue: false,
    last_payment_amount: 200.0,
    last_payment_date: "2023-10-15",
    last_statement_balance: 750.0,
    minimum_payment_amount: 35.0,
    next_payment_due_date: "2023-11-20"
  },
  {
    account_id: "QAZwsxEDC5432lkjHGFDsa098qweRTzUIOp",
    aprs: [
      {
        apr_percentage: 18.99,
        apr_type: "purchase"
      },
      {
        apr_percentage: 25.99,
        apr_type: "balance transfer"
      }
    ],
    is_overdue: true,
    last_payment_amount: 50.0,
    last_payment_date: "2023-09-30",
    last_statement_balance: 1200.0,
    minimum_payment_amount: 60.0,
    next_payment_due_date: "2023-10-25"
  },
  {
    account_id: "RFVtgbYHN7654lkjHGFDsa098qweRTzUIOp",
    aprs: [
      {
        apr_percentage: 14.49,
        apr_type: "purchase"
      }
    ],
    is_overdue: false,
    last_payment_amount: 300.0,
    last_payment_date: "2023-10-10",
    last_statement_balance: 1500.0,
    minimum_payment_amount: 75.0,
    next_payment_due_date: "2023-11-15"
  },
  {
    account_id: "TGBnhyUJM6543lkjHGFDsa098qweRTzUIOp",
    aprs: [
      {
        apr_percentage: 16.99,
        apr_type: "purchase"
      },
      {
        apr_percentage: 24.99,
        apr_type: "cash advance"
      }
    ],
    is_overdue: false,
    last_payment_amount: 180.0,
    last_payment_date: "2023-10-05",
    last_statement_balance: 900.0,
    minimum_payment_amount: 45.0,
    next_payment_due_date: "2023-11-10"
  },
  {
    account_id: "YHNujmIKO7654lkjHGFDsa098qweRTzUIOp",
    aprs: [
      {
        apr_percentage: 13.99,
        apr_type: "purchase"
      }
    ],
    is_overdue: false,
    last_payment_amount: 250.0,
    last_payment_date: "2023-10-12",
    last_statement_balance: 1250.0,
    minimum_payment_amount: 62.5,
    next_payment_due_date: "2023-11-17"
  },
  {
    account_id: "UJMikolP8765lkjHGFDsa098qweRTzUIOp",
    aprs: [
      {
        apr_percentage: 17.49,
        apr_type: "purchase"
      },
      {
        apr_percentage: 22.99,
        apr_type: "balance transfer"
      }
    ],
    is_overdue: true,
    last_payment_amount: 40.0,
    last_payment_date: "2023-09-25",
    last_statement_balance: 800.0,
    minimum_payment_amount: 40.0,
    next_payment_due_date: "2023-10-30"
  },
  {
    account_id: "IKOlpQAZ9876lkjHGFDsa098qweRTzUIOp",
    aprs: [
      {
        apr_percentage: 15.49,
        apr_type: "purchase"
      }
    ],
    is_overdue: false,
    last_payment_amount: 175.0,
    last_payment_date: "2023-10-08",
    last_statement_balance: 875.0,
    minimum_payment_amount: 43.75,
    next_payment_due_date: "2023-11-12"
  },
  {
    account_id: "PLMqazWSX0987lkjHGFDsa098qweRTzUIOp",
    aprs: [
      {
        apr_percentage: 19.99,
        apr_type: "purchase"
      },
      {
        apr_percentage: 27.99,
        apr_type: "cash advance"
      }
    ],
    is_overdue: false,
    last_payment_amount: 220.0,
    last_payment_date: "2023-10-03",
    last_statement_balance: 1100.0,
    minimum_payment_amount: 55.0,
    next_payment_due_date: "2023-11-08"
  },
  {
    account_id: "OKNijnUHB7654lkjHGFDsa098qweRTzUIOp",
    aprs: [
      {
        apr_percentage: 14.99,
        apr_type: "purchase"
      }
    ],
    is_overdue: false,
    last_payment_amount: 150.0,
    last_payment_date: "2023-10-18",
    last_statement_balance: 750.0,
    minimum_payment_amount: 37.5,
    next_payment_due_date: "2023-11-22"
  }
];