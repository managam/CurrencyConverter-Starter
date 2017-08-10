import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
//import Home from "./screens/Home";
import CurrencyList from "./screens/CurrencyList";

EStyleSheet.build({
  $primaryBlue: "#4F6D7A",
  $secondYellow: "yellow",
  $white: "#fff",
  $border: "#e2e2e2",
  $inputText: "#797979",
  $darkText: "#343434",
  $lightGray: "#f0f0f0"
});

export default () => <CurrencyList />;
