export interface Account {
  account_id: string;
  balances: {
    available: number | null;
    current: number | null;
    limit?: number | null;
    currency: string;
  };
  mask: string;
  name: string;
  official_name?: string;
  type: string;
  subtype: string;
  institution_id: string;
}

export interface Transaction {
  transaction_id: string;
  account_id: string;
  date: string;
  amount: number;
  merchant_name?: string;
  payment_channel: string;
  category: string[];
  location?: {
    city?: string;
    country?: string;
  };
}

export interface Identity {
  names: string[];
  emails: Array<{
    data: string;
    primary: boolean;
  }>;
  phone_numbers: Array<{
    data: string;
    primary: boolean;
  }>;
  addresses: Array<{
    street?: string;
    city?: string;
    postal_code?: string;
    country?: string;
  }>;
}

export interface CreditCard {
  account_id: string;
  aprs: Array<{
    apr_percentage: number;
    apr_type: string;
  }>;
  is_overdue: boolean;
  last_payment_amount: number;
  last_payment_date: string;
  last_statement_balance: number;
  minimum_payment_amount: number;
  next_payment_due_date: string;
}