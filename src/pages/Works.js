import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";

import Loading from "../blocks/loading/Loading";
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";
import Github from "./Github";
import PageTitleWorks from "../blocks/page-title/PageTitleWorks";
import Gallery from "../blocks/gallery/Gallery";

const Works = () => {
  document.body.classList.add("archive");
  document.body.classList.add("bg-fixed");
  document.body.classList.add("bg-line");

  return (
    <Fragment>
      <MetaTags>
        <meta charSet="UTF-8" />
        <title>Works |Wahome Gichuki</title>

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
        <PageTitleWorks />

        <section id="page-content" className="spacer p-top-xl">
          <Gallery paddingBottomClass=" pb-0" />
        </section>

        <section id="page-title">
          <div className="wrapper">
            <div className="title position-relative">
              <h1>
                Github<span className="dot">.</span>
              </h1>

              <div className="title-clone">Github.</div>
            </div>
          </div>
        </section>

        <section id="page-content" className="spacer p-top-xl">
          <Github paddingBottomClass=" pb-0" />
        </section>
      </main>

      <Footer />
    </Fragment>
  );
};

export default Works;
