"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 步骤1 给组件添加点击事件
var Index = function Index() {
  return /*#__PURE__*/_react.default.createElement("h1", {
    onClick: function onClick() {
      alert('click me');
    }
  }, "hello world!");
};

var _default = Index;
exports.default = _default;