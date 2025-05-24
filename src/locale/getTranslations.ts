import { AppLangEnum } from "src/lib/types";
import pl from "./pl.json";

export const getTranslations = (lang: AppLangEnum | string | undefined) => {
  switch (lang) {
    case AppLangEnum.PL:
      return pl;
    default:
      return pl;
  }
};
