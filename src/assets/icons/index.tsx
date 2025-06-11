import React from 'react';

export interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

interface IconPlaceholderProps extends IconProps {
  name: string;
  children?: React.ReactNode;
}

const IconPlaceholder: React.FC<IconPlaceholderProps> = ({
  name,
  size = 24,
  className = '',
  children,
  strokeWidth = 2,
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

export const LifeBuoy: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="4"></circle>
    <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
    <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
    <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
    <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
  </svg>
);

export const Sun: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="Sun" {...props}>
    <path d="M12 1v2m8.66 1.34l-1.42 1.42M23 12h-2m-1.34 8.66l-1.42-1.42M12 23v-2m-8.66-1.34l1.42-1.42M1 12h2m1.34-8.66l1.42 1.42" />
  </IconPlaceholder>
);

export const Moon: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="Moon" {...props}>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </IconPlaceholder>
);

export const Mail: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 2 }) => (
  <IconPlaceholder name="Mail" size={size} className={className} strokeWidth={strokeWidth}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </IconPlaceholder>
);

export const Lock: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 2 }) => (
  <IconPlaceholder name="Lock" size={size} className={className} strokeWidth={strokeWidth}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </IconPlaceholder>
);

export const Eye: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="Eye" {...props}>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </IconPlaceholder>
);

export const EyeOff: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="EyeOff" {...props}>
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7c.34 0 .66-.05.97-.15"></path>
    <line x1="2" y1="2" x2="22" y2="22"></line>
  </IconPlaceholder>
);

export const LogIn: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="LogIn" {...props}>
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
    <polyline points="10 17 15 12 10 7" />
    <line x1="15" y1="12" x2="3" y2="12" />
  </IconPlaceholder>
);

export const Google: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 488 512"
    className={className}
    aria-hidden="true"
    focusable="false"
    data-prefix="fab"
    data-icon="google"
    role="img"
  >
    <path
      fill="currentColor"
      d="M488 261.8C488 403.3 381.5 512 244 512 110.3 512 0 398.8 0 256S110.3 0 244 0c73.5 0 136.3 24.8 186.6 65.7l-67.4 64.4C338.9 102.3 300.5 78.9 244 78.9c-69.1 0-125.5 50.8-141.2 116.5H24.1v78.3h180v-0.1c12.3-53.6 58.2-95.3 112.2-95.3 33.6 0 61.5 11.6 83.8 30.4l73.1-70.9C453.9 104.6 394.4 55.5 331.1 29.8L331.1 29.8zM244 512c51.9 0 97.4-15.7 133.2-42.1L331.1 411c-27.9 17.6-63.8 29.5-104.6 29.5-69.2 0-125.5-50.8-141.3-116.5H24.1v78.3h180c12.3 53.6 58.2 95.3 112.2 95.3z"
    />
  </svg>
);

export const UserPlus: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="UserPlus" {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <line x1="19" y1="8" x2="19" y2="14" />
    <line x1="22" y1="11" x2="16" y2="11" />
  </IconPlaceholder>
);

export const CheckSquare: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="CheckSquare" {...props}>
    <polyline points="9 11 12 14 22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </IconPlaceholder>
);

export const Square: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="Square" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
  </IconPlaceholder>
);

export const User: React.FC<IconProps> = ({ size = 24, className = '', strokeWidth = 2 }) => (
  <IconPlaceholder name="User" size={size} className={className} strokeWidth={strokeWidth}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </IconPlaceholder>
);

export const CheckCircle = ({ size = 24, className = '', strokeWidth = 2 }: IconProps) => (
  <IconPlaceholder name="CheckCircle" size={size} className={className} strokeWidth={strokeWidth}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </IconPlaceholder>
);

export const AlertCircle = ({ size = 24, className = '', strokeWidth = 2 }: IconProps) => (
  <IconPlaceholder name="AlertCircle" size={size} className={className} strokeWidth={strokeWidth}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </IconPlaceholder>
);
