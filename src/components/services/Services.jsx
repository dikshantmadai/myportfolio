
import React, { useState} from 'react';
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState]= useState(0);

    const toggleTab=(index) => {
        setToggleState(index);
    }

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">Data <br /> analysis</h3>
                    </div>

                    <span className="services__button" onClick ={() => toggleTab(1)} >View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={()=> toggleTab(0)}className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Data analysis </h3>

                            <p className="services__modal-description">
                                Service with more than 2 years of experience.Providing quality work to clients and companies.
                            </p>

                            <ui className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info"> I collect, clean, and analyze data to uncover insights that inform business decisions and strategies</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info"> Exploratory Data Analysis (EDA).</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info"> Data Modeling & Analysis</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info"> Data Visualization</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info"> Data Strategy & Consulting</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Data Reporting & Communication</p>
                                </li>


                            </ui>

                        </div>
                    </div>

                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Frontend <br /> Developer</h3>
                    </div>

                    <span onClick ={() => toggleTab(2)} className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Frontend Developer</h3>

                            <p className="services__modal-description">
                                Service with more than 2 years of experience.Providing quality work to clients and companies.
                            </p>

                            <ui className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info"> I collect, clean, and analyze data to uncover insights that inform business decisions and strategies</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info"> Exploratory Data Analysis (EDA).</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info"> Data Modeling & Analysis</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info"> Data Visualization</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info"> Data Strategy & Consulting</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Data Reporting & Communication</p>
                                </li>


                            </ui>

                        </div>
                    </div>

                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Ui/Ux <br /> Designer</h3>
                    </div>

                    <span onClick={() => toggleTab(3)} className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Ui/Ux Designer</h3>

                            <p className="services__modal-description">
                                Service with more than 2 years of experience.Providing quality work to clients and companies.
                            </p>

                            <ui className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info"> I collect, clean, and analyze data to uncover insights that inform business decisions and strategies</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info"> Exploratory Data Analysis (EDA).</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info"> Data Modeling & Analysis</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info"> Data Visualization</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info"> Data Strategy & Consulting</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Data Reporting & Communication</p>
                                </li>


                            </ui>

                        </div>
                    </div>

                </div>


            </div>

            

        </section>
    );
};

export default Services
// #1:45
