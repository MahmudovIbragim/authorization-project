/* eslint-disable @typescript-eslint/no-explicit-any */
type GetProductResponse = void;
type GetProductRequest = {
  product_id: Key | null | undefined;
  product: any;
  _id: number ;
  productName: string;
  price: number;
  quantity: number;
  photoUrl: string;
}[];

type PostProductResponse = {
  _id: number ;
  productName: string;
  quantity: number;
  price: number;
  photoUrl: string;
  isFavorite: boolean;
  isInBasket: boolean;
  __v: string;
}[];

type PostProductRequest = {
  productName: string;
  price: string;
  quantity: string;
  photoUrl: string;
};
