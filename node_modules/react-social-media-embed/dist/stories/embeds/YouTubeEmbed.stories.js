"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceholderDisabled = exports.PlaceholderSpinnerDisabled = exports.CustomPlaceholderLinkText = exports.CustomPlaceholder = exports.WithPlaceholderImage = exports.UrlOnly = exports.YouTubeShorts = exports.Width100Percent = exports.Width50Percent = exports.Width800 = exports.Width400 = exports.Width200 = exports.Width100 = exports.Size600x400 = exports.Size400x600 = exports.Size400x200 = exports.Size200x400 = exports.Size200x200 = exports.Size200x100 = exports.Size100x200 = exports.Size100x100 = exports.MainExample = void 0;
const react_1 = __importDefault(require("react"));
const YouTubeEmbed_1 = require("../../components/embeds/YouTubeEmbed");
const Templates_1 = require("../Templates");
// === Setup ===
const StoryComponent = YouTubeEmbed_1.YouTubeEmbed; // <-- Set to your component
const meta = {
    title: 'Embeds/YouTubeEmbed', // <-- Set to your story title
    component: StoryComponent,
    parameters: {
        options: { showPanel: false }, // Don't show addons panel
    },
};
exports.default = meta;
// === Stories ===
const url = 'https://www.youtube.com/watch?v=HpVOs5imUN0';
const placeholderImageUrl = `https://i.ytimg.com/vi/HpVOs5imUN0/maxresdefault.jpg?t=${Date.now()}`;
exports.MainExample = {
    args: {
        url,
        placeholderImageUrl,
        width: 325,
        height: 220,
    },
    decorators: [Templates_1.MainExampleTemplate],
};
exports.Size100x100 = {
    args: {
        url,
        width: 100,
        height: 100,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.Size100x200 = {
    args: {
        url,
        width: 100,
        height: 200,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.Size200x100 = {
    args: {
        url,
        width: 200,
        height: 100,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.Size200x200 = {
    args: {
        url,
        width: 200,
        height: 200,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.Size200x400 = {
    args: {
        url,
        width: 200,
        height: 400,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.Size400x200 = {
    args: {
        url,
        width: 400,
        height: 200,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.Size400x600 = {
    args: {
        url,
        width: 400,
        height: 600,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.Size600x400 = {
    args: {
        url,
        width: 600,
        height: 400,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.Width100 = {
    args: {
        url,
        width: 100,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.Width200 = {
    args: {
        url,
        width: 200,
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
exports.Width800 = {
    args: {
        url,
        width: 800,
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
exports.YouTubeShorts = {
    args: {
        url: 'https://www.youtube.com/shorts/zJY7NIzOmC8',
        width: 225,
        height: 400,
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
