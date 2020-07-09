"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _pages = _interopRequireDefault(require("./pages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//步骤2 添加浏览器端渲染入口文件
//渲染index组件
_reactDom.default.hydrate( /*#__PURE__*/_react.default.createElement(_pages.default, null), document.getElementById('root')); // hydrate是React中提供在初次渲染的时候，去复用原本已经存在的DOM节点，减少重新生成节点以及删除原本DOM节点的开销，来加速初次渲染的功能。