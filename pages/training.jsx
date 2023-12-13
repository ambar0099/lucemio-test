import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../src/layout/Footer";
import Layout from "../src/layout/Layout";
import { mGalleryCarousel } from "../src/sliderProps";
const Training = () => {
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
                                        REMOTE & ON-DEMAND
                                    </div>
                                    <div
                                        className="h-title splitting-text-anim-2 scroll-animate"
                                        data-splitting="chars"
                                        data-animate="active"
                                    >
                                        Training
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
                                        Learn Cost-Effectively
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div
                                    className="description-text scrolla-element-anim-1 scroll-animate"
                                    data-animate="active"
                                >
                                    <p>
                                        Any company, from Amazon to Toyota, had to create its own methods to better adapt to the unique situations they faced. They’re, of course, now world-renowned; if not in the beginning. And although we don’t train anyone in our proprietary methods, we had to start somewhere with a foundation in Scrum, Agile, and a host of other knowledge bases. So, we offer remote training and on-demand courses.
                                    </p>
                                    <p>
                                        Our on-demand courses presently include learning how to use AI including GPT-4 (gleaned from the hundreds of hours we’ve spent using various AI mostly for coding), startup incorporation and seed financing, and basic financial accounting with an emphasis on understanding financial statements. Unsurprisingly, as a company focused on entrepreneurship, most of what we teach is geared towards founders or small development teams to help them launch or operate more leanly.
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
                                    <Link legacyBehavior href="/work-single">
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
                                                Invest
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
export default Training;
