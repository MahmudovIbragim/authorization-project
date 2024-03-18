/* eslint-disable @typescript-eslint/no-explicit-any */
type ProductData = {
  product: {
    _id:number
    isFavorite: boolean;
    isInBasket: boolean;
    photoUrl: string;
    price: number;
    productName: string;
    quantity: number;
  };
  _id: number;
  __v: number;
};

type GetProductRequestData = {
  product_id: string | null | undefined;
};

type GetProductResponseData = ProductData[];

type PostProductRequestData = {
  productName: string;
  price: string;
  quantity: string;
  photoUrl: string;
};

type PostProductResponseData = {
  _id: number ;
  productName: string;
  quantity: number;
  price: number;
  photoUrl: string;
  isFavorite: boolean;
  isInBasket: boolean;
  __v: number;
}[];
