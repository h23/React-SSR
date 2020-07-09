"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _pages = _interopRequireDefault(require("../client/pages"));

var _server = require("react-dom/server");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//完成react ssr工作的中间件,组件在服务端渲染的逻辑都在这个文件内
var _default = function _default(ctx, next) {
  var html = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_pages.default, null));
  ctx.body = "<!DOCTYPE html>\n                <html lang=\"en\">\n                <head>\n                    <meta charset=\"UTF-8\">\n                    <title>demo2-\u5B9E\u73B0\u4EA4\u4E92</title>\n                </head>\n                <body>\n                    <div id=\"root\">\n                       ".concat(html, " <span>\u5F15\u5165JS</span>\n                    </div>\n                    <!--\u6B65\u9AA45 \u5F15\u5165 index.js\u4EE3\u7801\uFF0C\u6D4F\u89C8\u5668\u4F1A\u4E0B\u8F7D\u540E\u6267\u884C-->\n                    <script type=\"text/javascript\" src=\"index.js\"></script>\n                </body>\n                </html>\n                ");
  return next();
};

exports.default = _default;