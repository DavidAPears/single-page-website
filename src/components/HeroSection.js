import React from "react";
import "./HeroSection.css";
import { EmailButton } from "./EmailButton";

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  headline2,
  description,
  address,
  imgStart,
}) {
  return (
    <>
      <div
        className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headline}
                </h1>
                <h1 className={lightText ? "heading2" : "heading2 dark"}>
                  {headline2}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark"
                  }
                >
                  {description}
                </p>
                <p
                  className={
                    lightTextDesc
                      ? "home__hero-address"
                      : "home__hero-address dark"
                  }
                >
                  {address}
                </p>
                <EmailButton
                  label="E-mail"
                  mailto="mailto:hannahcporter1@gmail.com"
                  buttonSize="btn--wide"
                  buttonColor="blue"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
