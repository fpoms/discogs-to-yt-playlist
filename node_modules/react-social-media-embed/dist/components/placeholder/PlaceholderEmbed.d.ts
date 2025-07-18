import React from 'react';
import { DivProps } from 'react-html-props';
export interface PlaceholderEmbedProps extends DivProps {
    url: string;
    linkText?: string;
    imageUrl?: string;
    spinner?: React.ReactNode;
    spinnerDisabled?: boolean;
    allowJavaScriptUrls?: boolean;
}
export declare const PlaceholderEmbed: ({ url, linkText, imageUrl, spinner, allowJavaScriptUrls, spinnerDisabled, ...divProps }: PlaceholderEmbedProps) => React.JSX.Element | null;
