import { useFonts } from "expo-font";

const useCustomFonts = () => {
  return useFonts({
    aston: require("./../../assets/fonts/Aston-Script-Regular.ttf"),
    ephesis: require("./../../assets/fonts/Ephesis-Regular.ttf"),
  });
};

export default useCustomFonts;
