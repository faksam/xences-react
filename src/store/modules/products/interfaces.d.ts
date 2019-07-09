// interfaces
import { Attribute } from 'modules/attributes/interfaces';
import { Brand } from 'modules/brands/interfaces';
import { Category } from 'modules/categories/interfaces';
import { Rating } from 'modules/rating/interfaces';
import { Review } from 'modules/reviews/interfaces';

export interface Product {
  id: string;
  name: string;
  description: string;
  discountPercent: string;
  price: string;
  gender: string;
  brand: Brand;
  attributes: Attribute[];
  quantity: Number;
  pictures: string;
  shop: Shop;
  category: Category;
  reviews: Review[];
  ratings: Rating[];
  createdAt: string | Moment;
}
