import React from 'react';
import { IconPlaceholder, type IconProps } from './IconPlaceholder';

// Basic UI Icons
export const LifeBuoy: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="LifeBuoy" {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
    <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
    <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
    <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
    <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
  </IconPlaceholder>
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

// Navigation and Action Icons
export const Mail: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="Mail" {...props}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </IconPlaceholder>
);

export const Phone: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="Phone" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </IconPlaceholder>
);

export const MapPin: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="MapPin" {...props}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </IconPlaceholder>
);

export const Calendar: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="Calendar" {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </IconPlaceholder>
);

export const Anchor: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="Anchor" {...props}>
    <circle cx="12" cy="5" r="3" />
    <line x1="12" y1="22" x2="12" y2="8" />
    <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
  </IconPlaceholder>
);

// Authentication and User Icons
export const Lock: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="Lock" {...props}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </IconPlaceholder>
);

export const Unlock: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="Unlock" {...props}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 9.9-1" />
  </IconPlaceholder>
);

export const Eye: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="Eye" {...props}>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </IconPlaceholder>
);

export const EyeOff: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="EyeOff" {...props}>
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7c.34 0 .66-.05.97-.15" />
    <line x1="2" y1="2" x2="22" y2="22" />
  </IconPlaceholder>
);

export const LogIn: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="LogIn" {...props}>
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
    <polyline points="10 17 15 12 10 7" />
    <line x1="15" y1="12" x2="3" y2="12" />
  </IconPlaceholder>
);

export const UserPlus: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="UserPlus" {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <line x1="19" y1="8" x2="19" y2="14" />
    <line x1="22" y1="11" x2="16" y2="11" />
  </IconPlaceholder>
);

export const User: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="User" {...props}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </IconPlaceholder>
);

export const UserCircle: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="UserCircle" {...props}>
    <path d="M18 20a6 6 0 0 0-12 0" />
    <circle cx="12" cy="10" r="4" />
    <circle cx="12" cy="12" r="10" />
  </IconPlaceholder>
);

// Status and Feedback Icons
export const CheckCircle: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="CheckCircle" {...props}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </IconPlaceholder>
);

export const AlertCircle: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="AlertCircle" {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
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

// Feature and Action Icons
export const Rocket: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="Rocket" {...props}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </IconPlaceholder>
);

export const Ship: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="Ship" {...props}>
    <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2c1.3 0 1.9-.5 2.5-1" />
    <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76" />
    <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" />
    <path d="M12 10v4" />
    <path d="M12 2v3" />
  </IconPlaceholder>
);

export const TrendingUp: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="TrendingUp" {...props}>
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </IconPlaceholder>
);

export const ShieldCheck: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="ShieldCheck" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </IconPlaceholder>
);

export const FileText: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="FileText" {...props}>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </IconPlaceholder>
);

export const Camera: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="Camera" {...props}>
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </IconPlaceholder>
);

export const Mic: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="Mic" {...props}>
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </IconPlaceholder>
);

// Social and Brand Icons
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

export const Globe: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="Globe" {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </IconPlaceholder>
);

export const Save: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="Save" {...props}>
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
    <polyline points="17 21 17 13 7 13 7 21" />
    <polyline points="7 3 7 8 15 8" />
  </IconPlaceholder>
);

export const ChevronRight: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="ChevronRight" {...props}>
    <polyline points="9 18 15 12 9 6" />
  </IconPlaceholder>
);

export const ArrowLeft: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="ArrowLeft" {...props}>
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </IconPlaceholder>
);

export const Circle: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="Circle" {...props} strokeWidth={props.strokeWidth || 2}>
    <circle cx="12" cy="12" r="10" />
  </IconPlaceholder>
);

export const Settings: React.FC<IconProps> = (props) => (
  <IconPlaceholder name="Settings" {...props}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 .43 1.25V12a2 2 0 0 1-.43 1.25l-.15.1a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-.43-1.25V12a2 2 0 0 1 .43-1.25l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </IconPlaceholder>
);
