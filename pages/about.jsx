import { Swiper, SwiperSlide } from "swiper/react";
import AboutVideo from "../src/components/AboutVideo";
import Footer from "../src/layout/Footer";
import Layout from "../src/layout/Layout";
import { jsTestimonials } from "../src/sliderProps";
const About = () => {
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
                    className="h-title splitting-text-anim-2 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    Who gets things done?
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
              style={{ backgroundImage: "url(assets/images/team.jpg)" }}
            />
          </div>
        </div>

        {/* Section Testimonials */}
        <div className="section section-inner m-testimonials">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 align-left col-lg-12">
                {/* titles */}
                <div className="m-titles">
                  <h2
                    className="m-title scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    Our Team
                  </h2>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {/* Carousel */}
                <Swiper
                  {...jsTestimonials}
                  className="swiper-container js-testimonials"
                >
                  {/* Testimonials item */}
                  <SwiperSlide className="testimonials-item swiper-slide">
                    <div
                      className="scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="desc">
                        <div className="title">Cosme J</div>
                        <div className="name">Founder, CPO</div>
                        <div className="text">
                          Our self-funded founder is responsible for all aspects of our startup projects from ideation to business model generation to managing our developers to achieve our product vision.
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* Testimonials item */}
                  <SwiperSlide className="testimonials-item swiper-slide">
                    <div
                      className="scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="desc">
                        <div className="title">Kris</div>
                        <div className="name">Back-End Developer</div>
                        <div className="text">
                          She’s one of our remote and part-time contractors who’s been committed to our mission for 4 years and helps to build our software systems with a focus on our PayFac integrations.
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* Testimonials item */}
                  <SwiperSlide className="testimonials-item swiper-slide">
                    <div
                      className="scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="desc">
                        <div className="title">Vishal</div>
                        <div className="name">Back-End Developer</div>
                        <div className="text">
                          He’s one of our remote and part-time contractors who’s been committed to our mission for 4.5 years and helps to build our software systems and is our go-to-person for AWS integrations.
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* Testimonials item */}
                  <SwiperSlide className="testimonials-item swiper-slide">
                    <div
                      className="scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="desc">
                        <div className="title">Ambar</div>
                        <div className="name">Front-End Developer</div>
                        <div className="text">
                          He’s one of our remote and part-time contractors who’s been committed to our mission for 4 years and is presently focused on ensuring we have responsive front-ends for our web-apps.
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Testimonials item */}
                  <SwiperSlide className="testimonials-item swiper-slide">
                    <div
                      className="scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="desc">
                        <div className="title">Toshie</div>
                        <div className="name">Contractor</div>
                        <div className="text">
                          She’s been a loyal contractor for 4 years and although an illustrator by training, will be key to our initial efforts to eventually launch one of our software projects in Japan.
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Testimonials item */}
                  <SwiperSlide className="testimonials-item swiper-slide">
                    <div
                      className="scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="desc">
                        <div className="title">Irene</div>
                        <div className="name">Senior Associate</div>
                        <div className="text">
                          Although no longer part of our team, due to the war in Ukraine, she was with us for 3 years prior to the invasion and was integral in recruiting Kris, Vishal, Ambar and Toshie.
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* Pagination  */}
                  <div className="swiper-pagination" />
                </Swiper>
                {/* /Carousel */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </Layout>
  );
};
export default About;
