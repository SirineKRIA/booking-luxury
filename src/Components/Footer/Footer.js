import React from "react";

/** Import react-router-dom components */
import { Link } from "react-router-dom";

/** Import css files */
import "./Footer.css";

/** Exported function */
const Footer = () => {
    return (
        <div className="container-fluid pb-0 mb-0 justify-content-center text-light ">
            <footer>
                <div className="row my-5 justify-content-center py-5">
                    <div className="col-11">
                        <div className="row ">
                            {/** Footer description part */}
                            <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                                <h3 className="text-muted mb-md-0 mb-5 bold-text">
                                    Do you have a property to rent and want to
                                    benefit from more income without making the
                                    slightest effort? You knocked on the good
                                    door.
                                </h3>
                            </div>

                            {/** Footer menu part */}
                            <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                                <h6 className="mb-3 mb-lg-4 bold-text ">
                                    <b>Menu</b>
                                </h6>
                                <ul className="list-unstyled menu-list">
                                    <li>
                                        <Link
                                            to="/"
                                            style={{ color: "whitesmoke" }}
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/accommodations"
                                            style={{ color: "whitesmoke" }}
                                        >
                                            Accommodations
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/owner-service"
                                            style={{ color: "whitesmoke" }}
                                        >
                                            Owner Service
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/about"
                                            style={{ color: "whitesmoke" }}
                                        >
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/contact"
                                            style={{ color: "whitesmoke" }}
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/** Footer contact us part */}
                            <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                                <h6 className="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5">
                                    <b>Contact us</b>
                                </h6>
                                <p className="mb-1">
                                    <small>
                                        {" "}
                                        <i className="fa fa-phone-square contact-icon"></i>{" "}
                                        +216 20 12 28 30
                                    </small>
                                </p>

                                <Link
                                    to="/errors"
                                    style={{ color: "whitesmoke" }}
                                    target="_blank"
                                >
                                    <p className="mb-1">
                                        <small>
                                            <i class="far fa-envelope contact-icon"></i>
                                            contact@bookluxury.tn
                                        </small>
                                    </p>
                                </Link>

                                <Link
                                    to="/contact"
                                    style={{ color: "whitesmoke" }}
                                >
                                    <p className="mb-1">
                                        <small>
                                            <i class="far fa-arrow-alt-circle-right contact-icon"></i>
                                            contact us
                                        </small>
                                    </p>
                                </Link>
                            </div>
                        </div>

                        <div className="row ">
                            {/** Footer reserved rights part */}
                            <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                                <small className="rights">
                                    <span>®</span>2021 Booking Luxury - All
                                    rights reserved.
                                </small>
                            </div>

                            {/** Footer empty part: !Important */}
                            <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end "></div>

                            {/** Footer social media contact part */}
                            <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3">
                                <small>
                                    <Link
                                        to="/errors"
                                        style={{ color: "whitesmoke" }}
                                        target="_blank"
                                    >
                                        <i class="fab fa-facebook-f social-media-icon"></i>
                                        <i class="fab fa-instagram social-media-icon"></i>
                                        <i class="fab fa-twitter social-media-icon"></i>
                                    </Link>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

/** Exported function */
export default Footer;
