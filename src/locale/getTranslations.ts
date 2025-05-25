import { AppLangEnum } from "src/lib/types";
import pl from "./pl.json";
import cs from "./cs.json";
import en from "./en.json";

export const getTranslations = (lang: AppLangEnum | string | undefined) => {
  switch (lang) {
    case AppLangEnum.PL:
      return pl;
    case AppLangEnum.CS:
      return cs;
    case AppLangEnum.EN:
      return en;
    default:
      return pl;
  }
};
