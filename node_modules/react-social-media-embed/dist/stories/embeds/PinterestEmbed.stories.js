"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceholderDisabled = exports.PlaceholderSpinnerDisabled = exports.CustomPlaceholderLinkText = exports.CustomPlaceholder = exports.WithPlaceholderImage = exports.UrlOnly = exports.Width100Percent = exports.Width50Percent = exports.Width150AtUnderMin = exports.Width800AtOverMax = exports.Width550AtMax = exports.Width400 = exports.Width250AtMin = exports.FluidWidth = exports.MainExample = void 0;
const react_1 = __importDefault(require("react"));
const PinterestEmbed_1 = require("../../components/embeds/PinterestEmbed");
const Templates_1 = require("../Templates");
// === Setup ===
const StoryComponent = PinterestEmbed_1.PinterestEmbed; // <-- Set to your component
const meta = {
    title: 'Embeds/PinterestEmbed', // <-- Set to your story title
    component: StoryComponent,
    parameters: {
        options: { showPanel: false }, // Don't show addons panel
    },
};
exports.default = meta;
// === Stories ===
const url = 'https://www.pinterest.com/pin/121949102401595647/';
const placeholderImageUrl = `https://placekitten.com/550/325`;
exports.MainExample = {
    args: {
        url,
        width: 345,
        height: 574,
    },
    decorators: [Templates_1.MainExampleTemplate],
};
exports.FluidWidth = {
    args: {
        url,
        style: { maxWidth: 550 },
        width: '100%',
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.Width250AtMin = {
    args: {
        url,
        width: 250,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.Width400 = {
    args: {
        url,
        width: 400,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.Width550AtMax = {
    args: {
        url,
        width: 550,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.Width800AtOverMax = {
    args: {
        url,
        width: 800,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.Width150AtUnderMin = {
    args: {
        url,
        width: 150,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.Width50Percent = {
    args: {
        url,
        width: '50%',
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.Width100Percent = {
    args: {
        url,
        width: '100%',
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.UrlOnly = {
    args: {
        url,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.WithPlaceholderImage = {
    args: {
        url,
        placeholderImageUrl,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.CustomPlaceholder = {
    args: {
        url,
        embedPlaceholder: (react_1.default.createElement("div", { style: {
                width: 325,
                padding: '150px 0',
                backgroundColor: 'lightsteelblue',
                textAlign: 'center',
            } }, "Custom Placeholder!")),
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.CustomPlaceholderLinkText = {
    args: {
        url,
        linkText: 'Custom link text',
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.PlaceholderSpinnerDisabled = {
    args: {
        url,
        width: 400,
        placeholderSpinnerDisabled: true,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.PlaceholderDisabled = {
    args: {
        url,
        placeholderDisabled: true,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
