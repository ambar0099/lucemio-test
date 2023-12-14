import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../src/layout/Footer";
import Layout from "../src/layout/Layout";
import { mGalleryCarousel } from "../src/sliderProps";
const Design = () => {
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
                                        className="h-subtitle splitting-text-anim-1 scroll-animate"
                                        data-splitting="chars"
                                        data-animate="active"
                                    >
                                        STEP 1
                                    </div>
                                    <div
                                        className="h-title splitting-text-anim-2 scroll-animate"
                                        data-splitting="chars"
                                        data-animate="active"
                                    >
                                        Design
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
                            style={{ backgroundImage: "url(assets/images/inner_2.png)" }}
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
                                        Designing Startups
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div
                                    className="description-text scrolla-element-anim-1 scroll-animate"
                                    data-animate="active"
                                >
                                    <p>
                                        Our first high-level step when considering the creation of a new startup is to “design” it. Design typically involves a broad cross-section of considerations not least the product idea’s current business model and state, gap analysis to determine meaningful modifications which could move the business model to a better future state; CX and UX analysis, UI prototyping; determining market-fit, competitor analysis; pricing, and financial analysis. This helps us determine if architecting the startup product is worthwhile.
                                    </p>
                                    <p>
                                        STARTUP EXAMPLE: Marketing/CX platform. Our desire to create referral marketing stemmed from our own issues when working on subscription-based ecommerce projects. Most advertising is dominated by Meta, Google, and so forth; while most referral marketing SaaS was fairly expensive. We perceived a “gap” and potential market opportunity to design a unified platform with two initial SaaS products – (1) allowing merchants to create referral coupons with rewards, and (2) automate payouts to influencers.
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
                                    <Link legacyBehavior href="/architect">
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
                                                Architecting
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
export default Design;
