import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const slidePadding = 20;

const settings = {
  color: {
    main: "#5659c9",
    red: "#e53238",
    blue: "#0064d2",
    yellow: "#f5af02",
    green: "#86b817",
    lightGray: "rgba(53, 53, 53, 0.2)",
    darkGray: "rgba(33, 33, 33, 1)"
  },
  screen: {
    height,
    width
  },
  slidePadding,
  itemSize: (width - slidePadding) / 5 - 20
};

module.exports = settings;
