// don't touch this file, it's generated
var languages = {
  "ar-ma": function() {return require("./locale/ar-ma.js");},
  "ar-sa": function() {return require("./locale/ar-sa.js");},
  "ar": function() {return require("./locale/ar.js");},
  "az": function() {return require("./locale/az.js");},
  "bg": function() {return require("./locale/bg.js");},
  "bn": function() {return require("./locale/bn.js");},
  "br": function() {return require("./locale/br.js");},
  "bs": function() {return require("./locale/bs.js");},
  "ca": function() {return require("./locale/ca.js");},
  "cs": function() {return require("./locale/cs.js");},
  "cv": function() {return require("./locale/cv.js");},
  "cy": function() {return require("./locale/cy.js");},
  "da": function() {return require("./locale/da.js");},
  "de-at": function() {return require("./locale/de-at.js");},
  "de": function() {return require("./locale/de.js");},
  "el": function() {return require("./locale/el.js");},
  "en-au": function() {return require("./locale/en-au.js");},
  "en-ca": function() {return require("./locale/en-ca.js");},
  "en-gb": function() {return require("./locale/en-gb.js");},
  "eo": function() {return require("./locale/eo.js");},
  "es": function() {return require("./locale/es.js");},
  "et": function() {return require("./locale/et.js");},
  "eu": function() {return require("./locale/eu.js");},
  "fa": function() {return require("./locale/fa.js");},
  "fi": function() {return require("./locale/fi.js");},
  "fo": function() {return require("./locale/fo.js");},
  "fr-ca": function() {return require("./locale/fr-ca.js");},
  "fr": function() {return require("./locale/fr.js");},
  "gl": function() {return require("./locale/gl.js");},
  "he": function() {return require("./locale/he.js");},
  "hi": function() {return require("./locale/hi.js");},
  "hr": function() {return require("./locale/hr.js");},
  "hu": function() {return require("./locale/hu.js");},
  "hy-am": function() {return require("./locale/hy-am.js");},
  "id": function() {return require("./locale/id.js");},
  "is": function() {return require("./locale/is.js");},
  "it": function() {return require("./locale/it.js");},
  "ja": function() {return require("./locale/ja.js");},
  "ka": function() {return require("./locale/ka.js");},
  "km": function() {return require("./locale/km.js");},
  "ko": function() {return require("./locale/ko.js");},
  "lb": function() {return require("./locale/lb.js");},
  "lt": function() {return require("./locale/lt.js");},
  "lv": function() {return require("./locale/lv.js");},
  "mk": function() {return require("./locale/mk.js");},
  "ml": function() {return require("./locale/ml.js");},
  "mr": function() {return require("./locale/mr.js");},
  "ms-my": function() {return require("./locale/ms-my.js");},
  "nb": function() {return require("./locale/nb.js");},
  "ne": function() {return require("./locale/ne.js");},
  "nl": function() {return require("./locale/nl.js");},
  "nn": function() {return require("./locale/nn.js");},
  "pl": function() {return require("./locale/pl.js");},
  "pt-br": function() {return require("./locale/pt-br.js");},
  "pt": function() {return require("./locale/pt.js");},
  "ro": function() {return require("./locale/ro.js");},
  "ru": function() {return require("./locale/ru.js");},
  "sk": function() {return require("./locale/sk.js");},
  "sl": function() {return require("./locale/sl.js");},
  "sq": function() {return require("./locale/sq.js");},
  "sr-cyrl": function() {return require("./locale/sr-cyrl.js");},
  "sr": function() {return require("./locale/sr.js");},
  "sv": function() {return require("./locale/sv.js");},
  "ta": function() {return require("./locale/ta.js");},
  "th": function() {return require("./locale/th.js");},
  "tl-ph": function() {return require("./locale/tl-ph.js");},
  "tr": function() {return require("./locale/tr.js");},
  "tzm-latn": function() {return require("./locale/tzm-latn.js");},
  "tzm": function() {return require("./locale/tzm.js");},
  "uk": function() {return require("./locale/uk.js");},
  "uz": function() {return require("./locale/uz.js");},
  "vi": function() {return require("./locale/vi.js");},
  "zh-cn": function() {return require("./locale/zh-cn.js");},
  "zh-tw": function() {return require("./locale/zh-tw.js");}
};
module.exports = function(key) {
  if (languages[key] === null) {
    throw new Error("no language file was found for the key: "+key);
  }
  return languages[key]();
};