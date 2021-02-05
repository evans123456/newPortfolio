import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";

import Loading from "../blocks/loading/Loading";
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

import PageTitleContacts from "../blocks/page-title/PageTitleContacts";
import ContactForm from "../components/form/ContactForm";

const Contacts = () => {
  document.body.classList.add("page");
  document.body.classList.add("bg-fixed");
  document.body.classList.add("bg-line");

  return (
    <Fragment>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>Contacts | Evans Wahome Gichuki</title>

        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow, noodp" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
      </MetaTags>

      <Loading />

      <Header />

      <main id="main" className="site-main">
        <PageTitleContacts />

        <section id="page-content" className="block spacer p-top-xl">
          <div className="wrapper">
            <div id="contacts" className="block">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                  <h2>
                    Here you <br />
                    can <span className="line">contact me</span>
                  </h2>

                  <p className="mt-0">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae.
                  </p>
                </div>

                <div className="col-xl-8 col-lg-8 col-md-8 col-12">
                  <div className="list-group list-group-horizontal-sm">
                    <div className="list-group-item">
                      <h4>City</h4>

                      <p>Guildford Surrey</p>
                    </div>

                    {/* <div className="list-group-item">
                                            <h4>Clipping</h4>

                                            <p>CO</p>
                                        </div> */}

                    <div className="list-group-item">
                      <h4>Country</h4>

                      <p>United Kingdom</p>
                    </div>

                    <div className="list-group-item">
                      <h4>Phone</h4>

                      <p>
                        <a title="+44 786-245-0446" href="tel:+44 786-245-0446">
                          +44 786-245-0446
                        </a>
                      </p>
                      <p>
                        <a title="+254-701-802-417" href="tel:+254-701-802-417">
                          +254-701-802-417
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="list-group list-group-horizontal-sm mt-0">
                    <div className="list-group-item mb-0 pb-0">
                      <h4>Email</h4>

                      <p>
                        <a
                          title="evansgichuki656@gmail.com"
                          href="mailto:evansgichuki656@gmail.com"
                        >
                          evansgichuki656@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="block spacer p-top-xl">
              <h2>
                Fill up a <span className="line">form</span>
              </h2>

              <ContactForm />
            </div> */}
          </div>
        </section>
      </main>

      <Footer />
    </Fragment>
  );
};

export default Contacts;
