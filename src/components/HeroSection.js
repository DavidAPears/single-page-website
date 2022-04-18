import React from "react";
import "./HeroSection.css";
import { EmailButton } from "./EmailButton";
import background from "../images/whiteLogoNoText.png";

function HeroSection() {
  return (
    <>
      <div className="home__container">
        <div
          className="home__bgimage"
          style={{
            backgroundImage: `url(${background})`,
          }}
        />
        <div className="home__copy">
          <p>
            March Creative is an entertainment management company that
            represents creators, writers and directors across all media
          </p>
        </div>
        <EmailButton
          label="E-mail"
          mailto="mailto: info@marchcreativemgmt.com"
          buttonSize="btn--wide"
          buttonColor="blue"
          target="_blank"
        />
      </div>
    </>
  );
}

export default HeroSection;
