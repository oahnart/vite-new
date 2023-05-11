import {
  DMSerifDisplayItalic,
  DMSerifDisplayRegular,
  MontserratBlack,
  MontserratBlackItalic,
  MontserratBold,
  MontserratBoldItalic,
  MontserratExtraBold,
  MontserratExtraBoldItalic,
  MontserratExtraLight,
  MontserratExtraLightItalic,
  MontserratItalic,
  MontserratLight,
  MontserratLightItalic,
  MontserratMedium,
  MontserratMediumItalic,
  MontserratRegular,
  MontserratSemiBold,
  MontserratSemiBoldItalic,
  MontserratThin,
  MontserratThinItalic,
  NotoSansKrBlack,
  NotoSansKrBold,
  NotoSansKrLight,
  NotoSansKrMedium,
  NotoSansKrRegular,
  NotoSansKrThin,
  RobotoBlack,
  RobotoBlackItalic,
  RobotoBold,
  RobotoBoldItalic,
  RobotoItalic,
  RobotoLight,
  RobotoLightItalic,
  RobotoMedium,
  RobotoMediumItalic,
  RobotoRegular,
  RobotoThin,
  RobotoThinItalic,
} from "assets/fonts/font";
import { createGlobalStyle } from "styled-components";
// themify
import "assets/fonts/themify_font/themify-icons.css";

import Close from "assets/icons/close.svg";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "NotoSansKR-Thin";
    src: local("NotoSansKR-Thin"), url(${NotoSansKrThin}) format("opentype");
  }

  @font-face {
    font-family: "NotoSansKR-Light";
    src: local("NotoSansKR-Light"), url(${NotoSansKrLight}) format("opentype");
  }

  @font-face {
    font-family: "NotoSansKR-Regular";
    src: local("NotoSansKR-Regular"),
      url(${NotoSansKrRegular}) format("opentype");
  }

  @font-face {
    font-family: "NotoSansKR-Medium";
    src: local("NotoSansKR-Medium"), url(${NotoSansKrMedium}) format("opentype");
  }

  @font-face {
    font-family: "NotoSansKR-Bold";
    src: local("NotoSansKR-Bold"), url(${NotoSansKrBold}) format("opentype");
  }

  @font-face {
    font-family: "NotoSansKR-Black";
    src: local("NotoSansKR-Black"), url(${NotoSansKrBlack}) format("opentype");
  }

  @font-face {
    font-family: "DMSerifDisplay-Regular";
    src: local("DMSerifDisplay-Regular"),
      url(${DMSerifDisplayRegular}) format("opentype");
  }

  @font-face {
    font-family: "DMSerifDisplay-Light";
    src: local("DMSerifDisplay-Light"),
      url(${DMSerifDisplayItalic}) format("opentype");
  }

  @font-face {
    font-family: "Montserrat-Black";
    src: local("Montserrat-Black"), url(${MontserratBlack}) format("opentype");
  }

  @font-face {
    font-family: "Montserrat-BlackItalic";
    src: local("Montserrat-BlackItalic"),
      url(${MontserratBlackItalic}) format("opentype");
  }

  @font-face {
    font-family: "Montserrat-Bold";
    src: local("Montserrat-Bold"), url(${MontserratBold}) format("opentype");
  }

  @font-face {
    font-family: "Montserrat-BoldItalic";
    src: local("Montserrat-BoldItalic"),
      url(${MontserratBoldItalic}) format("opentype");
  }

  @font-face {
    font-family: "Montserrat-ExtraBold";
    src: local("Montserrat-ExtraBold"),
      url(${MontserratExtraBold}) format("opentype");
  }

  @font-face {
    font-family: "Montserrat-ExtraBoldItalic";
    src: local("Montserrat-ExtraBoldItalic"),
      url(${MontserratExtraBoldItalic}) format("opentype");
  }

  @font-face {
    font-family: "Montserrat-ExtraLight";
    src: local("Montserrat-ExtraLight"),
      url(${MontserratExtraLight}) format("opentype");
  }

  @font-face {
    font-family: "Montserrat-ExtraLightItalic";
    src: local("Montserrat-ExtraLightItalic"),
      url(${MontserratExtraLightItalic}) format("opentype");
  }

  @font-face {
    font-family: "Montserrat-Italic";
    src: local("Montserrat-Italic"), url(${MontserratItalic}) format("opentype");
  }

  @font-face {
    font-family: "Montserrat-Light";
    src: local("Montserrat-Light"), url(${MontserratLight}) format("opentype");
  }

  @font-face {
    font-family: "Montserrat-LightItalic";
    src: local("Montserrat-LightItalic"),
      url(${MontserratLightItalic}) format("opentype");
  }

  @font-face {
    font-family: "Montserrat-Medium";
    src: local("Montserrat-Medium"), url(${MontserratMedium}) format("opentype");
  }

  @font-face {
    font-family: "Montserrat-MediumItalic";
    src: local("Montserrat-MediumItalic"),
      url(${MontserratMediumItalic}) format("opentype");
  }

  @font-face {
    font-family: "Montserrat-Regular";
    src: local("Montserrat-Regular"),
      url(${MontserratRegular}) format("opentype");
  }

  @font-face {
    font-family: "Montserrat-SemiBold";
    src: local("Montserrat-SemiBold"),
      url(${MontserratSemiBold}) format("opentype");
  }

  @font-face {
    font-family: "Montserrat-SemiBoldItalic";
    src: local("Montserrat-SemiBoldItalic"),
      url(${MontserratSemiBoldItalic}) format("opentype");
  }

  @font-face {
    font-family: "Montserrat-Thin";
    src: local("Montserrat-Thin"), url(${MontserratThin}) format("opentype");
  }

  @font-face {
    font-family: "Montserrat-ThinItalic";
    src: local("Montserrat-ThinItalic"),
      url(${MontserratThinItalic}) format("opentype");
  }

  // Roboto
  @font-face {
    font-family: "Roboto-Black";
    src: local("Roboto-Black"), url(${RobotoBlack}) format("opentype");
  }

  @font-face {
    font-family: "Roboto-BlackItalic";
    src: local("Roboto-BlackItalic"),
      url(${RobotoBlackItalic}) format("opentype");
  }

  @font-face {
    font-family: "Roboto-Bold";
    src: local("Roboto-Bold"), url(${RobotoBold}) format("opentype");
  }

  @font-face {
    font-family: "Roboto-BoldItalic";
    src: local("Roboto-BoldItalic"), url(${RobotoBoldItalic}) format("opentype");
  }

  @font-face {
    font-family: "Roboto-Italic";
    src: local("Roboto-Italic"), url(${RobotoItalic}) format("opentype");
  }

  @font-face {
    font-family: "Roboto-Light";
    src: local("Roboto-Light"), url(${RobotoLight}) format("opentype");
  }

  @font-face {
    font-family: "Roboto-LightItalic";
    src: local("Roboto-LightItalic"),
      url(${RobotoLightItalic}) format("opentype");
  }

  @font-face {
    font-family: "Roboto-Medium";
    src: local("Roboto-Medium"), url(${RobotoMedium}) format("opentype");
  }

  @font-face {
    font-family: "Roboto-MediumItalic";
    src: local("Roboto-MediumItalic"),
      url(${RobotoMediumItalic}) format("opentype");
  }

  @font-face {
    font-family: "Roboto-Regular";
    src: local("Roboto-Regular"), url(${RobotoRegular}) format("opentype");
  }

  @font-face {
    font-family: "Roboto-Thin";
    src: local("Roboto-Thin"), url(${RobotoThin}) format("opentype");
  }

  @font-face {
    font-family: "Roboto-ThinItalic";
    src: local("Roboto-ThinItalic"), url(${RobotoThinItalic}) format("opentype");
  }

  * {
    margin: 0;
    font-family: "Montserrat-Regular", sans-serif;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    font-size: 16px;
  }
  body {
    height: 100%;
  }
  a,
  button {
    text-decoration: none;
    cursor: pointer;
    border: none;
    outline: none;
  }

  .hljs {
    background: #000000;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  /* ::-webkit-scrollbar {
    display: none;
  } */
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
    height: 4px;
    display: none;
    /* display: block; */
  }
  &::-webkit-scrollbar-thumb {
    max-width: 230px;
    background-color: rgb(49 53 87);
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(180, 185, 171, 0.3);
    background-color: #b4b9ab;
  }
  outline: none;

  .slick-slider {
    .slick-arrow {
      &.slick-prev {
        display: none !important;
      }
      &.slick-next {
        display: none !important;
      }
    }
  }

  .ant-btn[disabled],
  .ant-btn[disabled]:hover {
    border: none;
    font-family: "NotoSansKR-Medium";
  }

  /* Select */
  .ant-select-item-option-content {
    font-size: 16px;
  }

  .ant-input {
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0.4px;
    padding: 10px 20px;
    line-height: 22px;
  }
  .ant-input::placeholder {
    color: #818181;
  }

  /** ======================================== */

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  .ant-modal-wrap {
    cursor: url(${Close}), auto;

    .ant-input-affix-wrapper {
      min-height: 40px;
      padding: 10px 20px;
    }
    .ant-picker {
      padding: 10px 11px;
    }
    .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
      padding: 6px 20px;
      height: 100%;
      .ant-select-selection-search-input {
        padding: 6px 10px;
        height: 100%;
      }
    }
  }
  .ant-modal-content {
    cursor: default;
  }

  .hidden-mobile {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .ant-pagination {
    .ant-pagination-item {
      border: none;
      background-color: unset;
    }
    .ant-pagination-item-active {
      border: solid 1px #5c7161;
      border-radius: 50%;
      a {
        color: #5c7161;
      }
    }
    .ant-pagination-item-link {
      border: none;
      background: transparent;
    }

    @media screen and (max-width: 768px) {
      justify-content: center;
      text-align: center;
    }
  }
  /**modal */
  .ant-modal-root {
    .ant-modal {
      @media (max-width: 360px) {
        /* margin: 0; */
        max-width: 100% !important;
        padding: 0 15px;
      }
    }
    .ant-modal-title {
      padding-right: 15px;
    }
  }
  /**table */
  .ant-table-wrapper {
    .ant-table-body {
      &::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 0px;
        display: block;
      }
    }
  }
  .ant-table-wrapper .ant-table-body .ant-table-tbody > tr > td {
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    &:last-child {
      border-right: none;
    }
  }

  /**select antd */
  .ant-select-item {
    .ant-select-item-option-content {
      font-family: "Montserrat-Medium";
      font-size: 14px;
      font-weight: 500;
      color: rgb(49 53 87);
    }
  }
  .ant-select:not(.ant-select-customize-input)
    .ant-select-selector
    .ant-select-selection-search-input {
    height: 100%;
  }

  .marquee {
    min-width: unset !important;
  }

  /**popup error api */
  .ant-notification {
    .ant-notification-notice {
      .ant-notification-notice-message {
        text-align: center;
        margin-top: 8px;
        text-align: center;
        font-family: "Montserrat-Medium";
        font-size: 16px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: 0.6px;
        color: #5c7161;
        padding-right: 40px;
      }
      .ant-notification-notice-close {
        top: 24px;
        .ant-notification-close-icon {
          font-size: 13px;
          color: #111;
          border-radius: 50%;
          background-color: #d9d9d9;
          padding: 5px;
        }
      }
    }
  }

  /** daum kakao address */
  .box-modified {
    > div > span {
      background-color: rgb(49 53 87);
    }
  }

  //tini mce
  .certificate {
    .recomended-size,
    .main-img {
      display: none;
    }
  }
  .tox-notifications-container {
    display: none !important;
  }
  .tox-editor-container {
    .tox-promotion {
      display: none;
    }

    .tox-statusbar__branding {
      display: none;
    }
  }

  //style common
  .box-container {
    border-radius: 20px;
    padding: 30px;
    background-color: #fff;
    margin-bottom: 30px;

    .box-between {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  //form antd
  .ant-form {
    .ant-form-item-has-error {
      //tinymce
      .tox-tinymce {
        border: 1px solid #ff4d4f !important;
      }
      //radio
      .ant-radio-inner {
        border: 1px solid #ff4d4f !important;
      }
    }
  }

  //antd input number
  .ant-input-number {
    width: 100%;
    padding: 6px 9px;
  }
`;

export default GlobalStyles;
