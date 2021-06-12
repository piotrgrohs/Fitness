import * as Localization from "expo-localization"
import i18n from "i18n-js"

const en = require("./en")

i18n.fallbacks = true
i18n.translations = { en }

i18n.locale = Localization.locale || "en"
