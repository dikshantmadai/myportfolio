import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">DIKSHANT</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio " className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#Testimonials" className="footer__link">
                            Testiomonials
                        </a>
                    </li>
                </ul>




                <div className="footer__social">
                    <a
                        href="https://www.facebook.com/profile.php?id=100026270866753" className="footer__social-link" target="_blank"
                    >
                        <i class="bx bxl-facebook"></i>
                    </a>



                    <a
                        href="https://www.instagram.com/dikshantmadai/" className="footer__social-link" target="_blank">
                        <i class="bx bxl-instagram"></i>
                    </a>


                    <a
                        href="https://twitter.com/DikshantMadai1" className="footer__social-link" target="_blank">
                        <i class="bx bxl-twitter"></i>
                    </a>
                </div>

                <span className='footer__copy'>Copyright © 2023 DIKSHANT </span>
            </div>
        </footer>

    )
}

export default Footer