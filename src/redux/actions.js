import { UPDATE_LOCALES } from "./types";

export const updateLocales = (locale) => {
    return {
        type: UPDATE_LOCALES,
        payload: locale
    }
}