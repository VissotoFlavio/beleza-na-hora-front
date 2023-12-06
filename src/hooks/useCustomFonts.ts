import { useFonts } from "expo-font";

const useCustomFonts = () => {
  console.log(require("./../../assets/fonts/AstonScript.ttf"));
  useFonts({
    AstonRegular: require("./../../assets/fonts/AstonScript.ttf"),
  });
};

export default useCustomFonts;
