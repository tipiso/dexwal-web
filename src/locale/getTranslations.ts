import { AppLangEnum } from "src/lib/types";
import pl from "./pl.json";
import cs from "./cs.json";
import en from "./en.json";
import es from "./es.json";

export const getTranslations = (lang: AppLangEnum | string | undefined) => {
  switch (lang) {
    case AppLangEnum.PL:
      return pl;
    case AppLangEnum.CS:
      return cs;
    case AppLangEnum.EN:
      return en;
    case AppLangEnum.ES:
      return es;
    default:
      return pl;
  }
};
