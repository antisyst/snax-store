import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchProducts } from '../redux/products/products_actions';

import Product from '../components/Product/Product';
import Banner from '../components/Banner/Banner';
import Title from '../components/Title/Title';
import Hero from '../components/Hero/Hero';

import shoesBanner from '../assets/images/banner-10.png';

const ShoesPage = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const shoesProducts = products.filter((product) => product.title === 'airmax');

  return (
    <>
      <Banner image={shoesBanner} />
      <section className="py-5">
        <div className="container">
          <Title title="AIR PRODUCTS" />
          <div className="row">
            {shoesProducts.map((product) => {
              return (
                <div
                  key={product.id}
                  className="col-10 col-md-6 col-lg-4 mx-auto"
                >
                  <Product product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Hero
        subtitleHeading="extra"
      />
    </>
  );
};

export default ShoesPage;
