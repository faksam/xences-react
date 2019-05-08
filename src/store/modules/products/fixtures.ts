// fixtures
import { attributes } from '../attributes/fixtures';
import { brands } from '../brands/fixtures';
import { categories } from '../categories/fixtures';
import { ratings } from '../ratings/fixtures';
import { reviews } from '../reviews/fixtures';
import { shops } from '../shops/fixtures';

export const products = [
  {
    attributes,
    reviews,
    ratings,
    id: '1',
    name: 'Nice shirt',
    discountPercent: '10',
    price: '2000',
    gender: 'male',
    brand: brands[0],
    quantity: 7,
    pictures: 'picture.jpg',
    shop: shops[0],
    category: categories[0],
    createdAt: '05/12/19',
  },
  {
    attributes,
    reviews,
    ratings,
    id: '2',
    name: 'Nice cap',
    discountPercent: '10',
    price: '2000',
    gender: 'male',
    brand: brands[0],
    quantity: 7,
    pictures: 'picture.jpg',
    shop: shops[0],
    category: categories[0],
    createdAt: '05/12/19',
  },
  {
    attributes,
    reviews,
    ratings,
    id: '3',
    name: 'Nice coat',
    discountPercent: '10',
    price: '2000',
    gender: 'male',
    brand: brands[0],
    quantity: 7,
    pictures: 'picture.jpg',
    shop: shops[0],
    category: categories[0],
    createdAt: '05/12/19',
  },
  {
    attributes,
    reviews,
    ratings,
    id: '4',
    name: 'Nice top',
    discountPercent: '10',
    price: '2000',
    gender: 'male',
    brand: brands[0],
    quantity: 7,
    pictures: 'picture.jpg',
    shop: shops[0],
    category: categories[0],
    createdAt: '05/12/19',
  },
  {
    attributes,
    reviews,
    ratings,
    id: '5',
    name: 'Nice skirt',
    discountPercent: '10',
    price: '2000',
    gender: 'male',
    brand: brands[0],
    quantity: 7,
    pictures: 'picture.jpg',
    shop: shops[0],
    category: categories[0],
    createdAt: '05/12/19',
  },
];
