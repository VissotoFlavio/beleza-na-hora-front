declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}

declare module "*.png" {
  import React from "react";
  import { Image } from "react-native";
  const content: React.FC<Image>;
  export default content;
}
