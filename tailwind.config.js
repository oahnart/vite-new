/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
      screens: {
        lg: "1280px",
      },
    },
    extend: {
      boxShadow: {
        custom: "0px 15px 15px 0px rgba(0, 0, 0, 0.08)",
        custom1: "0px 4px 4px 0px rgba(0, 0, 0, 0.05)",
        custom2: "0px 4px 15px 0px rgba(0, 0, 0, 0.15)",
        custom3: "0px 0px 8px 0px rgba(0, 0, 0, 0.08)",
        custom4: "0px 4px 4px 0px rgba(0, 0, 0, 0.15)",
        custom5: "0px 4px 8px 0px rgba(0, 0, 0, 0.08)",
        custom6: "0px 0px 8px rgba(0, 0, 0, 0.20)",
        custom7: "0px 5px 0px 0px #121212",
      },
      colors: {
        primary: "#15A0A1",
        primary1: "#17B2B4",
        primary2: "#84E4E4",
        primary3: "#B8EFEF",
        primary4: "#EAFCFC",
        primary5: "#121212",
        secondary1: "#4F5C70",
        secondary2: "#7A89A1",
        secondary3: "#AAB8CE",
        secondary4: "#EAF0FB",
        secondary5: "#051732",
        secondary6: "#DDE4EE",
        textColor: "#051732",
        textColor2: "#687995",
        textColor3: "#1F2835",
        textColor4: "#B9B7B7",
        textColor5: "#2D2D2D",
        textColor6: "#767575",
        textColor7: "#7B8AA4",
        textColor8: "#242426",
        textColor9: "#75E4E4",
        textColor10: "#8F8F8F",
        textColor11: "#B1B0B0",
        textColor12: "#B1B1B1",
        textColor13: "#B6F7F8",
        textColor14: "#949494",
        textColor15: "#A0A0A0",
        textColor16: "#9C9C9C",
        textColor17: "#F24A4A",
        textColor18: "#0695C1",
        textColor19: "#F5F5F5",
        textColor20: "#63DEDF",
        textColor21: "#505050",
        textColor22: "#EDEDED",
        textColor23: "#979797",
        textColor24: "#AAAAAA",
        headerBg: "#070707",
        bgBtn1: "#2D2D2D",
        grayBg: "#E9E9E9",
        grayBg2: "#F2F2F2",
        grayBg3: "#F5F5F5",
        grayBg4: "#474747",
        whiteBg1: "#FAFAFA",
        toggleBgOff: "#E6EDF9",
        lightColor: "#FFFFFF",
        lightColor2: "rgba(255, 255, 255, 0.10)",
        errorColor: "#FF5851",
        primaryOpacity4: "rgba(21, 160, 161, 0.04)",
        balance: "#FAFFFF",
        redColor: "#F24A4A",
        yellowColor: "#D9A00E",
        greenColor: "#3CCE17",
        warningColor: "#F24A4A",
        placeholder: "#A3A3A3",
        border1: "rgba(18, 18, 18, 0.50)",
        border2: "#E7E7E7",
      },
      width: {
        columnGutter12: "calc(50% - 6px)",
        columnGutter24: "calc(50% - 12px)",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      sp200: ["SpoqaHanSansNeo-Thin"],
      sp300: ["SpoqaHanSansNeo-Light"],
      sp400: ["SpoqaHanSansNeo-Regular"],
      sp500: ["SpoqaHanSansNeo-Medium"],
      sp700: ["SpoqaHanSansNeo-Bold"],
    },
    screens: {
      xxs: "360px",
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
    },
  },
  plugins: [],
};
