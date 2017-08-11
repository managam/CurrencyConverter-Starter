import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
//import Home from "./screens/Home";
//import CurrencyList from "./screens/CurrencyList";
//import Options from "./screens/Options";
//import Themes from "./screens/Themes";
import Navigator from "./config/routes";

EStyleSheet.build({
  $primaryBlue: "#4F6D7A",
  $primaryOrange: "#d57a66",
  $primaryGreen: "#00db9d",
  $primaryPurple: "#9e768f",
  $secondYellow: "yellow",
  $white: "#fff",
  $border: "#e2e2e2",
  $inputText: "#797979",
  $darkText: "#343434",
  $lightGray: "#f0f0f0"
});

export default () => <Navigator />;
