import * as React from 'react';
import { DivPropsWithoutRef } from 'react-html-props';
import { TwitterTweetEmbedProps } from 'react-twitter-embed/dist/components/TwitterTweetEmbed';
import { PlaceholderEmbedProps } from '../placeholder/PlaceholderEmbed';
export interface XEmbedProps extends DivPropsWithoutRef {
    url: string;
    width?: string | number;
    height?: string | number;
    linkText?: string;
    placeholderImageUrl?: string;
    placeholderSpinner?: React.ReactNode;
    placeholderSpinnerDisabled?: boolean;
    placeholderProps?: PlaceholderEmbedProps;
    embedPlaceholder?: React.ReactNode;
    placeholderDisabled?: boolean;
    twitterTweetEmbedProps?: TwitterTweetEmbedProps;
}
export declare const XEmbed: ({ url, width, height, linkText, placeholderImageUrl, placeholderSpinner, placeholderSpinnerDisabled, placeholderProps, embedPlaceholder, placeholderDisabled, twitterTweetEmbedProps, ...divProps }: XEmbedProps) => React.JSX.Element;
