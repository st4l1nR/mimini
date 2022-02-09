export interface Shipping {
  _id?: string;
  countries: [
    {
      name: string;
      code: string;
      cities: [string];
    }
  ];
}

export interface Order {
  _id?: string;
  color: string;
  quantity: number;
  email: string;
  cardholder: string;
  shipping: {
    country: string;
    city: string;
    adress: string;
    zip: string;
    state: string;
  };
  subtotal: number;
}
