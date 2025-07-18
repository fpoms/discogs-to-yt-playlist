"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceholderDisabled = exports.PlaceholderSpinnerDisabled = exports.CustomPlaceholderLinkText = exports.CustomPlaceholder = exports.WithPlaceholderImage = exports.UrlOnly = exports.Width100Percent = exports.Width50Percent = exports.Width150AtUnderMin = exports.Width800 = exports.Width600 = exports.Width400 = exports.Width328AtMin = exports.FluidWidth = exports.MainExampleWithCaptions = exports.MainExample = void 0;
const react_1 = __importDefault(require("react"));
const InstagramEmbed_1 = require("../../components/embeds/InstagramEmbed");
const Templates_1 = require("../Templates");
// === Setup ===
const StoryComponent = InstagramEmbed_1.InstagramEmbed; // <-- Set to your component
const meta = {
    title: 'Embeds/InstagramEmbed', // <-- Set to your story title
    component: StoryComponent,
    parameters: {
        options: { showPanel: false }, // Don't show addons panel
    },
};
exports.default = meta;
// === Stories ===
const url = 'https://www.instagram.com/p/CUbHfhpswxt/';
const placeholderImageUrl = `https://placekitten.com/540/400`;
exports.MainExample = {
    args: {
        url,
        width: 328,
    },
    decorators: [Templates_1.MainExampleTemplate],
};
exports.MainExampleWithCaptions = {
    args: {
        url,
        width: 328,
        captioned: true,
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
exports.Width328AtMin = {
    args: {
        url,
        width: 328,
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
exports.Width600 = {
    args: {
        url,
        width: 600,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.Width800 = {
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
        width: 400,
        placeholderImageUrl,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.CustomPlaceholder = {
    args: {
        url,
        width: 400,
        embedPlaceholder: (react_1.default.createElement("div", { style: {
                width: 328,
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
        width: 400,
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
        width: 400,
        placeholderDisabled: true,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
