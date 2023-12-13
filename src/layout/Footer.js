const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__builder">
        <div className="container align-center">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              {/* titles */}
              <div className="h-titles">
                <div
                  className="h-subtitle scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Address:
                </div>
                <div
                  className="h-text scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  New Haven County, CT
                  <br />
                  United States

                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              {/* titles */}
              <div className="h-titles">
                <div
                  className="h-subtitle scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Follow Us:
                </div>
              </div>
              {/* social */}
              <div className="social-links footer-social-links">
                <a
                  target="_blank"
                  href="https://twitter.com/lucemiollc"
                  className="scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <i aria-hidden="true" className="fab fa-twitter" />
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UC8Yna2j93aI2PuG8L7avQ1w"
                  className="scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <i aria-hidden="true" className="fab fa-youtube" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/3333763/"
                  className="scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <i aria-hidden="true" className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              {/* titles */}
              <div className="h-titles">
                <div
                  className="h-subtitle scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Get in touch:
                </div>
                <div
                  className="h-text scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <p>
                    hello@lucemio.com
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div
                className="copyright-text scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                © lucemio LLC. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
