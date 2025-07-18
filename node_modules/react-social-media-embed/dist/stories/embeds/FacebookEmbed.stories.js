"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceholderDisabled = exports.PlaceholderSpinnerDisabled = exports.CustomPlaceholderLinkText = exports.CustomPlaceholder = exports.WithPlaceholderImage = exports.UrlOnly = exports.Width100Percent = exports.Width50Percent = exports.Width800 = exports.Width600 = exports.Width400 = exports.Width325 = exports.Width150 = exports.FluidWidth = exports.LinkPostExampleWidth550 = exports.VideoPostExample = exports.TextPostExample = exports.MainExample = void 0;
const react_1 = __importDefault(require("react"));
const FacebookEmbed_1 = require("../../components/embeds/FacebookEmbed");
const Templates_1 = require("../Templates");
// === Setup ===
const StoryComponent = FacebookEmbed_1.FacebookEmbed; // <-- Set to your component
const meta = {
    title: 'Embeds/FacebookEmbed', // <-- Set to your story title
    component: StoryComponent,
    parameters: {
        options: { showPanel: false }, // Don't show addons panel
    },
};
exports.default = meta;
// === Stories ===
const textUrl = 'https://www.facebook.com/andrewismusic/posts/483451443145971';
const photoUrl = 'https://www.facebook.com/andrewismusic/posts/451971596293956';
const linkUrl = 'https://www.facebook.com/andrewismusic/posts/479747760183006';
const videoUrl = 'https://fb.watch/bfP8U3LBa6/';
const placeholderImageUrl = `https://placekitten.com/325/560`;
exports.MainExample = {
    args: {
        url: photoUrl,
        width: 325,
    },
    decorators: [Templates_1.MainExampleTemplate],
};
exports.TextPostExample = {
    args: {
        url: textUrl,
        width: 325,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.VideoPostExample = {
    args: {
        url: videoUrl,
        width: 325,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.LinkPostExampleWidth550 = {
    args: {
        url: linkUrl,
        width: 550,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.FluidWidth = {
    args: {
        url: photoUrl,
        style: { maxWidth: 550 },
        width: '100%',
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.Width150 = {
    args: {
        url: photoUrl,
        width: 150,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.Width325 = {
    args: {
        url: photoUrl,
        width: 325,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.Width400 = {
    args: {
        url: photoUrl,
        width: 400,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.Width600 = {
    args: {
        url: photoUrl,
        width: 600,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.Width800 = {
    args: {
        url: photoUrl,
        width: 800,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.Width50Percent = {
    args: {
        url: photoUrl,
        width: '50%',
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.Width100Percent = {
    args: {
        url: photoUrl,
        width: '100%',
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.UrlOnly = {
    args: {
        url: photoUrl,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.WithPlaceholderImage = {
    args: {
        url: photoUrl,
        width: 325,
        placeholderImageUrl,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.CustomPlaceholder = {
    args: {
        url: photoUrl,
        width: 325,
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
        url: photoUrl,
        width: 325,
        linkText: 'Custom link text',
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.PlaceholderSpinnerDisabled = {
    args: {
        url: photoUrl,
        width: 325,
        placeholderSpinnerDisabled: true,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
exports.PlaceholderDisabled = {
    args: {
        url: photoUrl,
        width: 325,
        placeholderDisabled: true,
    },
    decorators: [Templates_1.ToggledOffTemplate],
};
