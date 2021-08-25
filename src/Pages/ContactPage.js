import React from "react";

import { MainLayout, InnerLayout, ContactPageStyled } from "../styles/index.js";
import Title from "../Components/Title";
import PrimaryButton from "../Components/PrimaryButton";
import ContactItem from "../Components/ContactItem.js";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import GroupAddIcon from "@material-ui/icons/GroupAdd";

const ContactPage = () => {
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;
  const social = <GroupAddIcon />;
  return (
    <MainLayout>
      <Title title={"Contacto"} span={"Contacto"} />
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          <div className="left-content">
            <div className="contact-title">
              <h4>Contáctame</h4>
            </div>
            <form className="form">
              <div className="form-field">
                <label htmlFor="name">Ingresa tu nombre*</label>
                <input type="text" id="name" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Ingresa tu email*</label>
                <input type="email" id="email" />
              </div>
              <div className="form-field">
                <label htmlFor="subject">Ingresa tu asunto</label>
                <input type="text" id="subject" />
              </div>
              <div className="form-field">
                <label htmlFor="text-area">Ingresa tu Mensaje*</label>
                <textarea
                  name="textarea"
                  id="textarea"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="form-field f-button">
                <PrimaryButton title={"Enviar Email"} mailto="true" />
              </div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem title={"Social"} icon={social} sc="true" />
            <ContactItem
              title={"Telefono"}
              icon={phone}
              cont1={"+54-1151753787"}
            />
            <ContactItem
              title={"Email"}
              icon={email}
              cont1={"alej.tartaglia@gmail.com"}
            />
            <ContactItem
              title={"Ubicación"}
              icon={location}
              cont1={"Barcelona, Cataluña, España"}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
};

export default ContactPage;
