import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../src/layout/Footer";
import Layout from "../src/layout/Layout";
import { mGalleryCarousel } from "../src/sliderProps";
const Architect = () => {
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
                                        STEP 2
                                    </div>
                                    <div
                                        className="h-title splitting-text-anim-2 scroll-animate"
                                        data-splitting="chars"
                                        data-animate="active"
                                    >
                                        Architect
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
                            style={{ backgroundImage: "url(assets/images/inner_3.png)" }}
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
                                        Architecting Startups
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div
                                    className="description-text scrolla-element-anim-1 scroll-animate"
                                    data-animate="active"
                                >
                                    <p>
                                        Our second high-level step after deciding to pursue a startup project is to “architect” it.  It’s during this stage where we delve much deeper into the app logic/layer of the underlying systems we need to create and identify the underlying components and interdependencies among those components. This involves researching vendors and their products to see if they meet our use case, and then delving deeply into the developer documentation and collaborating with our technical team to perform feasibility assessments across multiple levels. Architecting involves a deeper level of systems design to be able to finalize the systems and cloud architecture, integral to scale, which are typically interrelated.
                                    </p>
                                    <p>
                                        STARTUP EXAMPLE: Marketing/CX platform. One of our marketing/CX platform’s two SaaS products – the one involving automated payouts to influencers – leans heavily into payment processing, not least all of the implicit underlying regulations, which in turns requires spending dozens of hours in technical research to identify which APIs will be leveraged and how, typically culminating in precise business requirements reflecting the architecture of a sub-level system that interacts with other sub-level systems.
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
                                    <Link legacyBehavior href="/build">
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
                                                Building
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
export default Architect;
