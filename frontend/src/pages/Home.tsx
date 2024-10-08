import React, { useEffect } from "react";

import "./Home.css";
import {
  RiShoppingBagLine,
  RiBluetoothLine,
  RiBatteryChargeLine,
  RiPlugLine,
  RiMicFill,
} from "react-icons/ri";
import Header from "../components/Header";
import Footer from "../components/Footer";
import home_helper from "./home_helper";
import ScrollRevealWrapper from "../components/ScrollRevealWrapper";

const HomePage: React.FC = () => {
  useEffect(() => {
    home_helper();
  }, []);
  return (
    <main className="main">
      <title>Home</title>
      <Header />
      <HomeSection />
      <SponsorSection />
      <SpecsSection />
      <CaseSection />
      <DiscountSection />
      <ProductsSection />
      <Footer />
    </main>
  );
};

/**
 * This is the home section of the home page.
 *
 * @returns HomeSection
 */
const HomeSection: React.FC = () => (
  <section className="home section" id="home">
    <div className="home__container container grid">
      <ScrollRevealWrapper direction="top" delay={0.9}>
        <img src="img/home.png" alt="home img" className="home__img" />
      </ScrollRevealWrapper>
      <div className="home__data">
        <div className="home__header">
          <h1 className="home__title">On ear</h1>
          <h2 className="home__subtitles">Beats 3</h2>
        </div>
        <div className="home__footer">
          <h3 className="home__title-description">Overview</h3>
          <p className="home__description">
            Enjoy award-winning Beats sound with wireless listening freedom and
            a sleek design.
          </p>
          <a href="#" className="button button--flex">
            <span className="button-flex">
              <RiShoppingBagLine /> Add to Bag
            </span>
            <span className="home__price">$299</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

// Sponsor Section
const SponsorSection: React.FC = () => (
  <section className="sponsor section">
    <div className="sponsor__container container grid">
      <ScrollRevealWrapper direction="top" delay={0.1}>
        <img
          src="img/sponsor1.png"
          alt="sponsor 1"
          className="sponsor sponsor__img"
        />{" "}
      </ScrollRevealWrapper>

      <ScrollRevealWrapper direction="top" delay={0.1}>
        <img
          src="img/sponsor2.png"
          alt="sponsor 2"
          className="sponsor sponsor__img"
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper direction="top" delay={0.1}>
        <img
          src="img/sponsor3.png"
          alt="sponsor 3"
          className="sponsor sponsor__img"
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper direction="top" delay={0.1}>
        <img
          src="img/sponsor4.png"
          alt="sponsor 4"
          className="sponsor sponsor__img"
        />
      </ScrollRevealWrapper>
    </div>
  </section>
);

// Specs Section
/**
 * This is to display the specifications of the products
 *
 * @returns SpecsSection
 */
const SpecsSection: React.FC = () => (
  <section className="specs section grid" id="specs">
    <ScrollRevealWrapper direction="top" delay={0.6}>
      <h2 className="section__title section__title-gradient">Specs</h2>
    </ScrollRevealWrapper>
    <div className="specs__container container grid">
      <div className="specs__content grid">
        <SpecItem
          title="Connection"
          subtitle="Bluetooth v5.2"
          icon={<RiBluetoothLine />}
        />
        <SpecItem
          title="Battery"
          subtitle="Duration 40h"
          icon={<RiBatteryChargeLine />}
        />
        <SpecItem
          title="Load"
          subtitle="Fast charge 4.2-AAC"
          icon={<RiPlugLine />}
        />
        <SpecItem
          title="Microphone"
          subtitle="Supports Siri and Google"
          icon={<RiMicFill />}
        />
      </div>
      <div>
        <ScrollRevealWrapper direction="right" delay={0.3}>
          <img src="img/specs.png" alt="specs" className="specs__img" />{" "}
        </ScrollRevealWrapper>
      </div>
    </div>
  </section>
);

// SpecItem Component
const SpecItem: React.FC<{
  title: string;
  subtitle: string;
  icon: JSX.Element;
}> = ({ title, subtitle, icon }) => (
  <ScrollRevealWrapper direction="left" delay={0.1}>
    <div className="specs__data">
      {icon}
      <h3 className="specs__title">{title}</h3>
      <span className="specs__subtitle">{subtitle}</span>
    </div>
  </ScrollRevealWrapper>
);

/**
 * Displays the case for storing the headphone and its features
 * @returns CaseSection
 */
// Case Section
const CaseSection: React.FC = () => (
  <section className="case section grid" id="case">
    <h2 className="section__title section__title-gradient">Case</h2>
    <div className="case__container container grid">
      <div>
        <ScrollRevealWrapper direction="top" delay={0}>
          <img src="img/case.png" alt="case" className="case__img" />
        </ScrollRevealWrapper>
      </div>
      <ScrollRevealWrapper direction="top" delay={0.1}>
        <div className="case__data">
          <p className="case__description">
            With a comfortable and adaptable case so that you can store it and
            keep your durability forever.
          </p>
          <a href="#" className="button button--flex">
            <RiShoppingBagLine /> More info
          </a>
        </div>
      </ScrollRevealWrapper>
    </div>
  </section>
);

// Discount Section
const DiscountSection: React.FC = () => (
  <section className="discount section">
    <div className="discount__container container grid">
      <ScrollRevealWrapper direction="left" delay={0.1}>
        <div className="discount__animate">
          <h2 className="discount__title">
            Immerse yourself in <br /> your music
          </h2>
          <p className="discount__description">Get it now, up to 50% off.</p>
          <a href="#" className="button button--flex">
            <RiShoppingBagLine /> Shop now
          </a>
        </div>
      </ScrollRevealWrapper>
      <ScrollRevealWrapper direction="right" delay={0.3}>
        <img src="img/discount.png" alt="discount" className="discount__img" />
      </ScrollRevealWrapper>
    </div>
  </section>
);

/**
 * Listed a few products here
 * @returns ProductsSection
 */
// Products Section
const ProductsSection: React.FC = () => (
  <section className="products section" id="products">
    <h2 className="section__title section__title-gradient products__line">
      Choose <br /> Your Style
    </h2>
    <div className="products__container container grid">
      {productsData.map((product) => (
        <ProductCard key={product.title} {...product} />
      ))}
    </div>
  </section>
);

// ProductCard Component
const ProductCard: React.FC<{
  title: string;
  price: string;
  imgSrc: string;
}> = ({ title, price, imgSrc }) => (
  <ScrollRevealWrapper direction="top" delay={0.2}>
    <article className="products__card">
      <div className="products__content">
        <img src={imgSrc} alt={title} className="products__imgs" />
        <h3 className="products__title">{title}</h3>
        <span className="products__price">{price}</span>
        <button className="button button--flex products__button">
          <RiShoppingBagLine />
        </button>
      </div>
    </article>
  </ScrollRevealWrapper>
);

// Sample Products Data
const productsData = [
  { title: "Black", price: "$249", imgSrc: "img/product1.png" },
  { title: "Red Black", price: "$249", imgSrc: "img/product2.png" },
  { title: "Night Black", price: "$249", imgSrc: "img/product3.png" },
  { title: "Blue", price: "$249", imgSrc: "img/product4.png" },
  { title: "Twilight gray", price: "$249", imgSrc: "img/product5.png" },
];

export default HomePage;
