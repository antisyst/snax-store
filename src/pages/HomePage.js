import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchProducts } from '../redux/products/products_actions';

import MainBanner from '../components/MainBanner/MainBanner';
import Categories from '../components/Categories/Categories';
import BestProducts from '../components/BestProducts/BestProducts';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import Hero from '../components/Hero/Hero';

const HomePage = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  return (
    <>
      <MainBanner />
      <Categories />
      <Hero
        subtitleHeading="All The Better Sneakers"
      />
    </>
  );
};

export default HomePage;
