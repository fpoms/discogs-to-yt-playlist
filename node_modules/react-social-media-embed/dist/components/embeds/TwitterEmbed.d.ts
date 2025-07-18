/// <reference types="react" />
import { XEmbedProps } from './XEmbed';
/**
 * @deprecated Twitter was rebranded to the name X in July 2023. Use `XEmbedProps` instead.
 */
export interface TwitterEmbedProps extends XEmbedProps {
}
/**
 * @deprecated Twitter was rebranded to the name X in July 2023. Use `XEmbed` instead.
 */
export declare const TwitterEmbed: ({ url, width, height, linkText, placeholderImageUrl, placeholderSpinner, placeholderSpinnerDisabled, placeholderProps, embedPlaceholder, placeholderDisabled, twitterTweetEmbedProps, ...divProps }: XEmbedProps) => import("react").JSX.Element;
