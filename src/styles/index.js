import styled from "styled-components";

/* -------------- Sidebar ---------------- */
export const SidebarStyled = styled.div`
  width: 100%;
  max-width: 15.3rem;
  height: 100%;
  min-height: 100vh;
  position: fixed;
  background-color: var(--sidebar-dark-color);
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  @media screen and (max-width: 1200px) {
    transform: translateX(-100%);
    z-index: 20;
  }
`;

export const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 2px solid var(--border-color);

  .avatar {
    width: 80%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1.2rem 0;
    img {
      width: 85%;
      border-radius: 50%;
      border: 8px solid var(--border-color);
    }
  }

  .nav-items {
    width: 100%;
    text-align: center;
    .active-class {
      background-color: var(--primary-color-light);
      color: var(--white-color);
    }
    li {
      display: block;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 0;
        position: relative;
        z-index: 10;
        text-transform: uppercase;
        transition: all 0.4s ease-in-out;
        font-weight: 600;
        letter-spacing: 1.1px;

        &:hover {
          cursor: pointer;
          color: var(--white-color);
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 60%;
          background-color: var(--primary-color);
          transition: All 0.4s cubic-bezier(1, -0.2, 0.25, 0.65);
          opacity: 0.21;
          z-index: -1;
        }
      }

      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }

  footer {
    border-top: 1px solid var(--border-color);
    width: 85%;
    p {
      padding: 1.3rem 0;
      font-size: 1rem;
      display: block;
      text-align: center;
    }
  }
`;
/* END SIDEBAR */
/* -------------------------------------------- */
/* MAIN-CONTENT */
export const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;
/* END MAIN-CONTENT */
/* --------------------------------------- */
/* MAIN LAYOUT */
export const MainLayout = styled.div`
  padding: 4rem;
  @media screen and (max-width: 642px) {
    padding: 4rem;
  }

  @media screen and (max-width: 571px) {
    padding: 2rem 0.4rem;
  }
`;
export const InnerLayout = styled.div`
  padding: 2rem 0;

  @media screen and (max-width: 992px) {
    padding: 1.6rem;
  }
`;
/* END MAIN LAYOUT */

/* -------------------------------------------- */
/* HOME PAGE */
export const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    .icons {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }
      .i-linkedIn {
        &:hover {
          border: 2px solid #0077b7;
          color: #0077b7;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;
/* END HOME PAGE */
/* ----------------------------- */
/* ABOUT PAGE */
export const AboutStyled = styled.section``;
/* END ABOUT PAGE */
/* ----------------------------- */
/* TITLE */
export const TitleStyled = styled.div`
  position: relative;
  h2 {
    color: var(--white-color);
    font-size: 3.1rem;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
    padding-bottom: 0.7rem;
    @media screen and (max-width: 850px) {
      font-size: 2.8rem;
    }
    @media screen and (max-width: 600px) {
      font-size: 2rem;
    }
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 7.4rem;
      height: 0.33rem;
      background-color: var(--background-light-color-2);
      border-radius: 15px;
      left: 0;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      width: 3.5rem;
      height: 0.33rem;
      background-color: var(--primary-color-light);
      border-radius: 15px;
      left: 0;
    }
    span {
      font-weight: 900;
      color: rgba(25, 29, 43, 0.44);
      font-size: 4rem;
      position: absolute;
      left: 0;
      top: 30%;
      z-index: -1;
      opacity: 0.8;
      @media screen and (max-width: 496px) {
        font-size: 3rem;
      }
      @media screen and (max-width: 370px) {
        font-size: 2rem;
      }
    }
  }
`;

export const SubTitleStyled = styled.div`
  position: relative;
  h3 {
    color: cornflowerblue;
    font-size: 1.8rem;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
    padding-bottom: 1.5rem;
    text-align: center;
    @media screen and (max-width: 496px) {
      font-size: 1.4rem;
      padding-bottom: 1rem;
    }
  }
`;

/* END TITLE */
/* ----------------------------- */
/* IMAGE SECTION */
export const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  @media screen and (max-width: 571px) {
    margin-top: 3rem;
    width: 100%;
    padding: 20px;
  }

  .left-content {
    width: 100%;
    img {
      width: 95%;
      max-width: 485px;
      height: 100%;
      object-fit: cover;
      border-radius: 15px;
      border: 1px solid var(--border-color);

      @media screen and (max-width: 1000px) {
        width: 100%;
        max-width: 950px;
        height: 736px;
      }
      @media screen and (max-width: 700px) {
        max-width: 700px;
        height: 515px;
      }
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }

      @media screen and (max-width: 500px) {
        font-size: 1.5rem;
        span {
          font-size: 1.5rem;
        }
      }
      @media screen and (max-width: 330px) {
        font-size: 1.2rem;
        span {
          font-size: 1.2rem;
        }
      }
    }
    .paragraph {
      padding: 1rem 0;
      color: var(--white-color);
      @media screen and (max-width: 500px) {
        font-size: 1rem;
        span {
          font-size: 1rem;
        }
      }
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      color: var(--white-color);

      .info-title {
        padding-right: 2rem;
        p {
          font-weight: 600;
          padding: 0.5rem 0;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;

/* END IMAGE SECTION */
/* ----------------------------- */
/* PRIMARY BUTTON SECTION */
export const PrimaryButtonStyled = styled.button`
  background-color: var(--primary-color-light);
  padding: 0.8rem 2.5rem;
  color: var(--white-color);
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;
  transition: all 0.4s ease-in-out;
  border-radius: 4px;
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0.2rem;
    transition: all 0.4s ease-in-out;
    left: 0;
    bottom: 0;
    opacity: 0.7;
  }
  &:hover::after {
    width: 100%;
    background-color: var(--white-color);
  }
`;
/* END PRIMARY BUTTON SECTION */
/* ----------------------------- */
/* CONTACT PAGE SECTION */
export const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 3rem;
      }
    }

    @media screen and (max-width: 500px) {
      padding: 10px;
    }

    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      @media screen and (max-width: 502px) {
        width: 100%;
      }
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      @media screen and (max-width: 502px) {
        width: 100%;
      }
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
          @media screen and (max-width: 450px) {
            padding: 0 5px;
            width: 95%;
          }
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
          @media screen and (max-width: 450px) {
            padding: 0 5px;
            width: 95%;
          }
        }
      }
    }
  }
`;

/* CONTACT PAGE CONTACTITEM */
export const ContactItemStyled = styled.div`
  padding: 1.5rem 2rem;
  background-color: var(--background-dark-grey);
  display: flex;
  align-items: center;
  border-radius: 8px;
  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }

  @media screen and (max-width: 502px) {
    width: 98%;
    padding: 1rem;
  }

  .left-content {
    padding: 1.5rem;
    border: 1px solid var(--border-color);
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;
    @media screen and (max-width: 450px) {
      padding: 0.2rem 0.5rem;
      margin: 0 0.5rem;
    }

    svg {
      font-size: 2.3rem;
    }
  }
  .right-content {
    h6 {
      color: var(--white-color);
      font-size: 1rem;
      padding-bottom: 0.6rem;
      @media screen and (max-width: 450px) {
        margin-left: 1rem;
      }
    }
    p {
      padding: 0.1rem 0;
      @media screen and (max-width: 450px) {
        margin-left: 0rem;
      }
    }
  }

  .icons-ContactItem {
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 450px) {
      margin-left: 1rem;
      justify-content: flex-start;
    }

    a {
      margin-right: 1rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: all 0.4s ease-in-out;
      cursor: pointer;
      padding: 0.3rem;
      border: 1px solid var(--secondary-color);
    }
    .i-linkedIn {
      &:hover {
        color: #0077b7;
        border: 1px solid #0077b7;
      }
    }
    .i-github {
      &:hover {
        border: 1px solid #5f4687;
        color: #5f4687;
      }
    }
  }
`;

/* END CONTACT PAGE CONTACTITEM */
/* ------------------------------- */
/* RESUME PAGE */
export const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 1rem;
    grid-column-gap: 3.5rem;

    @media screen and (max-width: 850px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-row-gap: 1rem;
      grid-column-gap: 0.3rem;
    }

    @media screen and (max-width: 450px) {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-row-gap: 0;
      grid-column-gap: 0.3rem;
    }
  }

  .lastSkill {
    padding-bottom: 3rem;
  }
`;

export const SKillItemsStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  border: 1px solid #0077b7;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  margin: 1rem;
  &:hover {
    background-color: cornflowerblue;
    color: var(--white-color);
  }

  h6 {
    font-size: 1rem;
    padding: 0.5rem;

    width: 100%;
    min-width: 140px;
    text-align: center;
  }
`;

export const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }
  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;

export const SmallTitleStyled = styled.div`
  display: flex;
  align-items: center;
  p {
    padding-right: 1rem;
    svg {
      font-size: 3rem;
      @media screen and (max-width: 450px) {
        font-size: 2.4rem;
      }
    }
  }
  h3 {
    color: var(--white-color);
    font-size: 2rem;

    @media screen and (max-width: 450px) {
      font-size: 1.3rem;
    }
  }
`;

export const ResumeItemStyled = styled.div`
  display: flex;
  @media screen and (max-width: 421px) {
    p,
    h5,
    h6 {
      font-size: 70%;
    }
  }
  &:not(:last-child) {
    padding-bottom: 3rem;
  }
  .left-content {
    width: 30%;
    padding-left: 20px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: -10px;
      top: 5px;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      border: 2px solid var(--border-color);
      background-color: var(--background-dark-color);
    }
    p {
      display: inline-block;
    }
  }
  .right-content {
    width: 100%;
    padding-left: 5rem;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 16px;
      height: 2px;
      width: 3rem;
      background-color: var(--border-color);
    }
    h5 {
      color: var(--primary-color);
      font-size: 2rem;
      padding-bottom: 0.4rem;

      @media screen and (max-width: 450px) {
        font-size: 1.4rem;
      }
    }
    h6 {
      padding-bottom: 0.6rem;
      font-size: 1.5rem;
      @media screen and (max-width: 450px) {
        font-size: 1.2rem;
      }
    }
  }
`;

/* END RESUME PAGE */
/* ------------------------------- */
/* PORTFOLIOS PAGE */

export const MenuItemStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .grid-item {
    padding: 0.5rem;
    background-color: var(--border-color);
    border-radius: 8px;
    .portfolio-content {
      display: block;
      position: relative;
      overflow: hidden;
      h6 {
        font-size: 1.3rem;
      }
      img {
        width: 100%;
        height: 30vh;
        object-fit: cover;
      }
      ul {
        transform: translateY(-600px);
        transition: all 0.4s ease-in-out;
        position: absolute;
        left: 50%;
        top: 40%;
        opacity: 0;
        li {
          background-color: var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          border-radius: 50%;
          width: 3rem;
          height: 3rem;
          margin: 0 0.5rem;
          transition: all 0.4s ease-in-out;
          &:hover {
            background-color: var(--primary-color);
          }
          a {
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.4s ease-in-out;
          }
        }
      }

      .portfolio-image {
        &::before {
          content: "";
          position: absolute;
          left: 2%;
          top: 3%;
          height: 0;
          width: 0;
          transition: all 0.4s ease-in-out;
          border-radius: 4px;
        }
      }
      .portfolio-image:hover {
        ul {
          transform: translate(-50%, -25%);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease-in-out;
          opacity: 1;
          li {
            transition: all 0.4s ease-in-out;
            &:hover {
              background-color: var(--primary-color);
            }
            a {
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all 0.4s ease-in-out;
            }
          }
          li:hover {
            svg {
              color: var(--white-color);
            }
          }
          svg {
            font-size: 2rem;
          }
        }
        &::before {
          height: calc(100% - 21px);
          width: calc(100% - 4%);
          background-color: white;
          opacity: 0.9;
          transform-origin: left;
          transition: all 0.4s ease-in-out;
        }
      }
    }
  }
`;

export const ButtonStyled = styled.button`
  outline: none;
  border: none;
  background-color: var(--background-light-color-2);
  padding: 0.4rem 2rem;
  font-size: inherit;
  color: var(--white-color);
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  margin-bottom: 0.6rem;
  &:active,
  &:focus {
    background-color: var(--primary-color);
  }
  &:hover {
    background-color: var(--primary-color);
  }
  &:not(:last-child) {
    margin-right: 0.6rem;
  }
`;
export const ButtonsStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 70%;
  margin: 2.4rem auto;
`;
