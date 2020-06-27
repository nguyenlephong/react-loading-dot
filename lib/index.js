"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loading = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var bounceLoading = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nto {\n  opacity: 0.3;\n  transform: translate3d(0, -1.5rem, 0);\n}\n"], ["\nto {\n  opacity: 0.3;\n  transform: translate3d(0, -1.5rem, 0);\n}\n"])));
exports.Loading = function () {
    var Wraper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    justify-content: center;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  "], ["\n    display: flex;\n    justify-content: center;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  "])));
    var Dot = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    width: 1.5rem;\n    height: 1.5rem;\n    margin: 2rem 1rem;\n    background: rgb(202, 57, 57);\n    border-radius: 50%;\n    animation: 0.8s ", " infinite alternate;\n    &:nth-child(2) {\n      animation-delay: 0.3s;\n    }\n\n    &:nth-child(3) {\n      animation-delay: 0.6s;\n    }\n  "], ["\n    width: 1.5rem;\n    height: 1.5rem;\n    margin: 2rem 1rem;\n    background: rgb(202, 57, 57);\n    border-radius: 50%;\n    animation: 0.8s ", " infinite alternate;\n    &:nth-child(2) {\n      animation-delay: 0.3s;\n    }\n\n    &:nth-child(3) {\n      animation-delay: 0.6s;\n    }\n  "])), bounceLoading);
    return (react_1.default.createElement(Wraper, null,
        react_1.default.createElement(Dot, null),
        react_1.default.createElement(Dot, null),
        react_1.default.createElement(Dot, null)));
};
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=index.js.map