"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceholderDisabled = exports.PlaceholderSpinnerDisabled = exports.CustomPlaceholderLinkText = exports.CustomPlaceholder = exports.WithPlaceholderImage = exports.UrlOnly = exports.Width100Percent = exports.Size150x570AtUnderMin = exports.Size600x650 = exports.Size400x570 = exports.Size250x570AtMinWidth = exports.MainExample = void 0;
const react_1 = __importDefault(require("react"));
const LinkedInEmbed_1 = require("../../components/embeds/LinkedInEmbed");
const Templates_1 = require("../Templates");
// === Setup ===
const StoryComponent = LinkedInEmbed_1.LinkedInEmbed; // <-- Set to your component
const meta = {
    title: 'Embeds/LinkedInEmbed', // <-- Set to your story title
    component: StoryComponent,
    parameters: {
        options: { showPanel: false }, // Don't show addons panel
    },
};
exports.default = meta;
// === Stories ===
const url = 'https://www.linkedin.com/embed/feed/update/urn:li:share:6898694772484112384';
const postUrl = 'https://www.linkedin.com/posts/peterdiamandis_5-discoveries-the-james-webb-telescope-will-activity-6898694773406875648-z-D7';
const placeholderImageUrl = `https://placekitten.com/504/325`;
exports.MainExample = {
    args: {
        url,
        postUrl,
        width: 325,
        height: 570,
    },
    decorators: [Templates_1.MainExampleTemplate],
};
exports.Size250x570AtMinWidth = {
    args: {
        url,
        postUrl,
        width: 250,
        height: 570,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.Size400x570 = {
    args: {
        url,
        postUrl,
        width: 400,
        height: 570,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.Size600x650 = {
    args: {
        url,
        postUrl,
        width: 600,
        height: 650,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.Size150x570AtUnderMin = {
    args: {
        url,
        postUrl,
        width: 150,
        height: 570,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.Width100Percent = {
    args: {
        url,
        postUrl,
        width: '100%',
        height: 570,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.UrlOnly = {
    args: {
        url,
        postUrl,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.WithPlaceholderImage = {
    args: {
        url,
        postUrl,
        width: 325,
        height: 570,
        placeholderImageUrl,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.CustomPlaceholder = {
    args: {
        url,
        postUrl,
        width: 325,
        height: 570,
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
        postUrl,
        width: 325,
        height: 570,
        linkText: 'Custom link text',
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.PlaceholderSpinnerDisabled = {
    args: {
        url,
        postUrl,
        width: 325,
        height: 570,
        placeholderSpinnerDisabled: true,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.PlaceholderDisabled = {
    args: {
        url,
        postUrl,
        width: 325,
        height: 570,
        placeholderDisabled: true,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
