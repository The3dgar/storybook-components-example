/// <reference types="react" />
import './MyLabel.css';
export interface ButtonProps {
    /**
     * The label to display
     */
    label: string;
    /**
     * The size of the label
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Capitalize the label
     */
    allCaps?: boolean;
    /**
     * The color of the label
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * The custom color of the font
     */
    fontColor?: string;
    /**
     * The custom background color of the label
     */
    bgColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, bgColor, }: ButtonProps) => JSX.Element;
