"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToggledOnTemplate = exports.ToggledOffTemplate = exports.MainExampleTemplate = void 0;
const react_1 = __importDefault(require("react"));
const EmbedToggler_1 = require("./EmbedToggler");
const MainExampleTemplate = (Child) => (react_1.default.createElement(EmbedToggler_1.EmbedToggler, { defaultToggledOn: true },
    react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'center' } },
        react_1.default.createElement(Child, null))));
exports.MainExampleTemplate = MainExampleTemplate;
const ToggledOffTemplate = (Child) => (react_1.default.createElement(EmbedToggler_1.EmbedToggler, { defaultToggledOn: typeof window !== 'undefined' && window.location.href.includes('localhost') },
    react_1.default.createElement(Child, null)));
exports.ToggledOffTemplate = ToggledOffTemplate;
const ToggledOnTemplate = (Child) => (react_1.default.createElement(EmbedToggler_1.EmbedToggler, { defaultToggledOn: true },
    react_1.default.createElement(Child, null)));
exports.ToggledOnTemplate = ToggledOnTemplate;
