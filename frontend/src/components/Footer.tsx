import React from "react";
import {
  RiMailSendLine,
  RiFacebookCircleFill,
  RiInstagramLine,
  RiTwitterLine,
} from "react-icons/ri";
import ScrollRevealWrapper from "./ScrollRevealWrapper";

const Footer: React.FC = () => {
  return (
    <ScrollRevealWrapper direction="bottom" delay={0.7}>
      <footer className="footer section">
        <div className="footer__container container grid">
        <ScrollRevealWrapper direction="top" delay={0.1}>
          <a href="#" className="footer__logo">
            <img src="img/logo_.png" alt="logo" />
          </a>
          </ ScrollRevealWrapper>
        
          <ScrollRevealWrapper direction="top" delay={0.1}>
          <div className="footer__content">
            <h3 className="footer__title">Support</h3>
            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  Product help
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Register
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Updates
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Provides
                </a>
              </li>
            </ul>
          </div></ScrollRevealWrapper>
        <ScrollRevealWrapper direction="top" delay={0.1}>
          <div className="footer__content">
            <form action="" className="footer__form">
              <input
                type="email"
                placeholder="email"
                className="footer__input"
              />
              <button className="button button--flex">
                <RiMailSendLine className="button__icon" /> Subscribe
              </button>
            </form>

            <div className="footer__social">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="footer__social-link"
              >
                <RiFacebookCircleFill />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="footer__social-link"
              >
                <RiInstagramLine />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                className="footer__social-link"
              >
                <RiTwitterLine />
              </a>
            </div>
          </div>
          </ScrollRevealWrapper>
        </div>
      <ScrollRevealWrapper direction="top" delay={0.1}>
        <p className="footer__copy">
          <a
            href="https://github.com/OAtulA"
            target="_blank"
            className="footer__copy-link"
          >
            By Atul, Created for joy
          </a>
        </p>
        </ ScrollRevealWrapper>
      </footer>
    </ScrollRevealWrapper>
  );
};

export default Footer;
