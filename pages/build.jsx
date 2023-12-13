import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../src/layout/Footer";
import Layout from "../src/layout/Layout";
import { mGalleryCarousel } from "../src/sliderProps";
const Build = () => {
    return (
        <Layout>
            <div className="wrapper">
                {/* Section Started Heading */}
                <div className="section section-inner started-heading">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                {/* titles */}
                                <div className="h-titles">
                                    <div
                                        className="h-subtitle red splitting-text-anim-1 scroll-animate"
                                        data-splitting="chars"
                                        data-animate="active"
                                    >
                                        STEP 3
                                    </div>
                                    <div
                                        className="h-title splitting-text-anim-2 scroll-animate"
                                        data-splitting="chars"
                                        data-animate="active"
                                    >
                                        Build
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section Image Large */}
                <div
                    className="section section-inner m-image-large scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                >
                    <div className="image">
                        <div
                            className="img js-parallax"
                            style={{ backgroundImage: "url(assets/images/started_new.jpg)" }}
                        />
                    </div>
                </div>

                {/* Section Description */}
                <div className="section section-inner m-description">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 align-left col-lg-12">
                                <div className="m-titles">
                                    <div
                                        className="m-title scrolla-element-anim-1 scroll-animate"
                                        data-animate="active"
                                    >
                                        Building Startups
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div
                                    className="description-text scrolla-element-anim-1 scroll-animate"
                                    data-animate="active"
                                >
                                    <p>
                                        Our third high-level step after deciding to pursue a startup project is to “build” it. There’s no way around it, software development is extremely challenging particularly if you’re trying to design and launch innovative new business models or perhaps make existing ones more accessible. It requires managing a cross-functional team principally consisting of web designers, architects, product managers, and front-end and back-end developers with the lion’s share of work falling on the architects and back-end developers. This stage is focused on product development (coding), product management, and testing.
                                    </p>
                                    <p>
                                        STARTUP EXAMPLE: Marketing/CX platform. The complexity of this project was and remains to be its complex logic designed to offer merchants a great deal of choice and flexibility, as well as third-party integrations. That, consequently, resulted in designing and building many interdependent components which creates some level of burden when it comes to product management and testing.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section Navigation */}
                <div className="section section-inner m-page-navigation">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="h-titles h-navs">
                                    <Link legacyBehavior href="/consulting">
                                        <a>
                                            <span
                                                className="nav-arrow scrolla-element-anim-1 scroll-animate"
                                                data-animate="active"
                                            >
                                                Next
                                            </span>
                                            <span
                                                className="h-title splitting-text-anim-2 scroll-animate"
                                                data-splitting="chars"
                                                data-animate="active"
                                            >
                                                Consulting Engagements
                                            </span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};
export default Build;
