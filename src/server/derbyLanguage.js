/*
Language: DerbyJS templates
Requires: xml.js
Author: Nate Smith <nate@lever.co>
Description: Matcher for DerbyJS HTML Templates
*/

module.exports = function(hljs) {
  var EXPRESSION_KEYWORDS = 'if unless else each with on view unbound bound unescaped as';
  return {
    aliases: [],
    case_insensitive: true,
    subLanguage: 'xml',
    subLanguageMode: 'continuous',
    contains: [{
      className: 'expression',
      begin: '{{', end: '}}',
      keywords: EXPRESSION_KEYWORDS
    }]
  };
};
