"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceholderDisabled = exports.PlaceholderSpinnerDisabled = exports.CustomPlaceholderLinkText = exports.CustomPlaceholder = exports.WithPlaceholderImage = exports.UrlOnly = exports.Width100Percent = exports.Width150AtUnderMin = exports.Width800AtOverMax = exports.Width480AtMax = exports.Width400 = exports.Width325AtMin = exports.MainExample = void 0;
const react_1 = __importDefault(require("react"));
const TikTokEmbed_1 = require("../../components/embeds/TikTokEmbed");
const Templates_1 = require("../Templates");
// === Setup ===
const StoryComponent = TikTokEmbed_1.TikTokEmbed; // <-- Set to your component
const meta = {
    title: 'Embeds/TikTokEmbed', // <-- Set to your story title
    component: StoryComponent,
    parameters: {
        options: { showPanel: false }, // Don't show addons panel
    },
};
exports.default = meta;
// === Stories ===
const url = 'https://www.tiktok.com/@epicgardening/video/7055411162212633903';
const placeholderImageUrl = `https://placekitten.com/325/560`;
exports.MainExample = {
    args: {
        url,
        width: 325,
    },
    decorators: [Templates_1.MainExampleTemplate],
};
exports.Width325AtMin = {
    args: {
        url,
        width: 325,
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
exports.Width480AtMax = {
    args: {
        url,
        width: 480,
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
