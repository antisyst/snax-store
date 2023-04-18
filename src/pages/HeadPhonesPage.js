import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchProducts } from '../redux/products/products_actions';

import Product from '../components/Product/Product';
import Banner from '../components/Banner/Banner';
import Title from '../components/Title/Title';
import Hero from '../components/Hero/Hero';

import headbanner from '../assets/images/converse-banner.jpg';

const HeadPhonesPage = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const headProducts = products.filter(
    (product) => product.title === 'converse'
  );

  return (
    <>
      <Banner image={headbanner} />
      <section className="py-5">
        <div className="container">
          <Title title="CONVERSE PRODUCTS" />
          <div className="row">
            {headProducts.map((product) => {
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
        subtitleHeading="All The Better Sneakers"
      />
    </>
  );
};

export default HeadPhonesPage;
