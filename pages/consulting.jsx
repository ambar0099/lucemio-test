import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../src/layout/Footer";
import Layout from "../src/layout/Layout";
import { mGalleryCarousel } from "../src/sliderProps";
const Consulting = () => {
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
                                        LIMITED
                                    </div>
                                    <div
                                        className="h-title splitting-text-anim-2 scroll-animate"
                                        data-splitting="chars"
                                        data-animate="active"
                                    >
                                        Consulting Engagements
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
                            style={{ backgroundImage: "url(assets/images/inner_5.png)" }}
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
                                        Consulting Engagements
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div
                                    className="description-text scrolla-element-anim-1 scroll-animate"
                                    data-animate="active"
                                >
                                    <p>
                                        Recruiting and managing a team – particularly one that hasn’t worked together before – of analysts, product managers, systems and cloud architects, web designers, and front-end and back-developers could be a daunting task. A storm, as it often becomes. So, oftentimes, it’s important to step back and to plan things carefully to ensure the implementation then becomes smoother, otherwise you’re inviting chaos and costly delays. Enterprises consist of highly siloed, if not territorial, functions which typically don’t work well together. We can help to facilitate a smoother software development process.
                                    </p>
                                    <p>
                                        Consequently, we’re willing to consider certain consulting projects of limited scope which align to our demonstrable areas of expertise but confined to design and architecture where a client seeks strategic or technical guidance and direction, not coding. Such consulting projects start at $175,000 USD for a two-week engagement which aligns to typical enterprise pricing. We’re unable to sacrifice our limited bandwidth when it comes to coding unless it’s an engagement where a client is willing to spend $350,000 USD for a one-month engagement where the requirements are clearly defined and immutable.
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
                                    <Link legacyBehavior href="/training">
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
                                                Training
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
export default Consulting;
