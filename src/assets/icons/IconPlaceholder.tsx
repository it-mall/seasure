import React from 'react';

export interface IconProps {
    size?: number;
    className?: string;
    strokeWidth?: number;
}

export interface IconPlaceholderProps extends IconProps {
    name: string;
    children?: React.ReactNode;
}

export const IconPlaceholder: React.FC<IconPlaceholderProps> = ({
    name,
    size = 24,
    className = "",
    children,
    strokeWidth = 2
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-label={`${name} icon`}
    >
        {children || (
            <>
                <circle cx="12" cy="12" r="10" />
                <text x="12" y="17" fontSize="12" textAnchor="middle" fill="currentColor">
                    {name.substring(0, 1)}
                </text>
            </>
        )}
    </svg>
); 