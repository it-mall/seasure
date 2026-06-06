import React, { useState, useEffect, useMemo } from 'react';

// --- Icon Placeholders (Lucide React Mocks) ---
const IconPlaceholder = ({ name, size = 24, className = "", children, strokeWidth = 2 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-label={`${name} icon`}>
        {children || (<><circle cx="12" cy="12" r="10" /><text x="12" y="17" fontSize="12" textAnchor="middle" fill="currentColor">{name.substring(0, 1)}</text></>)}
    </svg>
);

const LifeBuoy = (props) => <IconPlaceholder name="LifeBuoy" {...props}><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line></IconPlaceholder>;
const Sun = (props) => <IconPlaceholder name="Sun" {...props}><path d="M12 1v2m8.66 1.34l-1.42 1.42M23 12h-2m-1.34 8.66l-1.42-1.42M12 23v-2m-8.66-1.34l1.42-1.42M1 12h2m1.34-8.66l1.42 1.42" /></IconPlaceholder>;
const Moon = (props) => <IconPlaceholder name="Moon" {...props}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></IconPlaceholder>;
const UserCircleIcon = (props) => <IconPlaceholder name="UserCircle" {...props}><path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" /><circle cx="12" cy="12" r="10" /></IconPlaceholder>;
const ShipIcon = (props) => <IconPlaceholder name="Ship" {...props}><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2c1.3 0 1.9-.5 2.5-1" /><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76" /><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" /><path d="M12 10v4" /><path d="M12 2v3" /></IconPlaceholder>;
const FileTextIcon = (props) => <IconPlaceholder name="FileText" {...props}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></IconPlaceholder>;
const SettingsIcon = (props) => <IconPlaceholder name="Settings" {...props}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 .43 1.25V12a2 2 0 0 1-.43 1.25l-.15.1a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-.43-1.25V12a2 2 0 0 1 .43-1.25l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></IconPlaceholder>;
const CheckCircleIcon = (props) => <IconPlaceholder name="CheckCircle" {...props} strokeWidth={props.strokeWidth || 2}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></IconPlaceholder>;
const CircleIcon = (props) => <IconPlaceholder name="Circle" {...props} strokeWidth={props.strokeWidth || 2}><circle cx="12" cy="12" r="10" /></IconPlaceholder>;
const RocketIcon = (props) => <IconPlaceholder name="Rocket" {...props}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></IconPlaceholder>;
const MailIcon = (props) => <IconPlaceholder name="Mail" {...props}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></IconPlaceholder>;
const PhoneIcon = (props) => <IconPlaceholder name="Phone" {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></IconPlaceholder>;
const MapPinIcon = (props) => <IconPlaceholder name="MapPin" {...props}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></IconPlaceholder>;
const CalendarIcon = (props) => <IconPlaceholder name="Calendar" {...props}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></IconPlaceholder>;
const GlobeIcon = (props) => <IconPlaceholder name="Globe" {...props}><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></IconPlaceholder>;
const SaveIcon = (props) => <IconPlaceholder name="Save" {...props}><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></IconPlaceholder>;
const ChevronRightIcon = (props) => <IconPlaceholder name="ChevronRight" {...props}><polyline points="9 18 15 12 9 6"></polyline></IconPlaceholder>;
const ArrowLeftIcon = (props) => <IconPlaceholder name="ArrowLeft" {...props}><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></IconPlaceholder>;
const AnchorIcon = (props) => <IconPlaceholder name="Anchor" {...props}><circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path></IconPlaceholder>;
const TrendingUpIcon = (props) => <IconPlaceholder name="TrendingUp" {...props}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></IconPlaceholder>;
const ShieldCheckIcon = (props) => <IconPlaceholder name="ShieldCheck" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></IconPlaceholder>;
const CheckSquareIcon = (props) => <IconPlaceholder name="CheckSquare" {...props}><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></IconPlaceholder>;
const SquareIcon = (props) => <IconPlaceholder name="Square" {...props}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></IconPlaceholder>;
const CameraIcon = (props) => <IconPlaceholder name="Camera" {...props}><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></IconPlaceholder>;
const MicIcon = (props) => <IconPlaceholder name="Mic" {...props}><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line></IconPlaceholder>;
const LockIcon = (props) => <IconPlaceholder name="LockIcon" {...props}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></IconPlaceholder>;
const UnlockIcon = (props) => <IconPlaceholder name="UnlockIcon" {...props}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></IconPlaceholder>;


// --- Mock React Router Link ---
const Link = ({ to, children, className, ...rest }) => (
    <a href={to} onClick={(e) => { e.preventDefault(); console.log(`Navigating to ${to} (mock)`); }} className={className} {...rest}>
        {children}
    </a>
);

// --- Interfaces ---
interface OnboardingSection {
    id: string;
    title: string;
    description: string;
    icon: React.ElementType;
    isComplete: boolean;
    estimatedTime: string;
    isRequired: boolean;
    path: string;
}

interface OnboardingProgress {
    completedSteps: number;
    totalSteps: number;
    percentage: number;
    estimatedTimeRemaining: string;
}

interface ProfileData { fullName: string; address: string; mobileNumber: string; email: string; dateOfBirth: string; primaryWaterway: string; }
type ExperienceLevelId = 'new' | 'novice' | 'intermediate' | 'expert';
interface ExperienceLevel { id: ExperienceLevelId; title: string; shortDescription: string; detailedDescription: string; seaSureBenefit: string; icon: React.ElementType; }
type PermissionName = 'camera' | 'microphone' | 'location';
type PermissionStatus = 'notSet' | 'allowed' | 'denied'; // In a real app, 'denied' might come from browser API
interface DevicePermissionsState { camera: PermissionStatus; microphone: PermissionStatus; location: PermissionStatus; }

// --- Initial Data ---
const initialSections: OnboardingSection[] = [
    { id: 'profile', title: 'Profile Setup', description: 'Basic information to personalize your SeaSure experience.', icon: UserCircleIcon, isComplete: false, estimatedTime: '~2 minutes', isRequired: true, path: '/onboarding/profile' },
    { id: 'experience', title: 'Boating Experience Level', description: 'Help us tailor our assistance to your experience.', icon: ShipIcon, isComplete: false, estimatedTime: '~30 seconds', isRequired: true, path: '/onboarding/experience' },
    { id: 'terms', title: 'Terms & Agreements', description: 'The not-so-fun but necessary legal stuff (we made it readable!).', icon: FileTextIcon, isComplete: false, estimatedTime: '~1 minute', isRequired: true, path: '/onboarding/terms' },
    { id: 'permissions', title: 'Device Permissions', description: 'Enable features for the best SeaSure experience.', icon: SettingsIcon, isComplete: false, estimatedTime: '~30 seconds', isRequired: false, path: '/onboarding/permissions' },
];

const initialProfileData: ProfileData = { fullName: '', address: '', mobileNumber: '', email: 'user@example.com', dateOfBirth: '', primaryWaterway: '' };
const initialSelectedExperienceLevel: ExperienceLevelId | null = null;
const initialTermsAccepted: boolean = false;
const initialDevicePermissions: DevicePermissionsState = { camera: 'notSet', microphone: 'notSet', location: 'notSet' };

const experienceLevels: ExperienceLevel[] = [ /* ... same as before ... */
    { id: 'new', title: 'New to Boating', shortDescription: "Just getting started on the water.", detailedDescription: "You're new to boat ownership or have very limited boating experience (less than 1 year). You're still learning basic boat systems and terminology. You prefer simple, step-by-step guidance and aren't comfortable with complex maintenance tasks. Most repairs and maintenance are handled by professionals.", seaSureBenefit: "You'll receive beginner-friendly explanations, visual guides, and simplified troubleshooting steps. Technical terms will be explained clearly, and you'll get extra reassurance and safety reminders.", icon: AnchorIcon },
    { id: 'novice', title: 'Weekend Boater', shortDescription: "Comfortable with basics, learning more.", detailedDescription: "You have 1-3 years of boating experience and handle routine maintenance like oil changes, basic cleaning, and simple repairs. You understand fundamental boat systems but still rely on professionals for complex issues. You're building confidence and want to learn more DIY skills.", seaSureBenefit: "You'll get progressive guidance that builds on your existing knowledge, with options to dive deeper into technical details when you're ready. Instructions include both simple and detailed explanations.", icon: ShipIcon },
    { id: 'intermediate', title: 'Experienced Boater', shortDescription: "Hands-on and knowledgeable.", detailedDescription: "You have 3-10 years of experience and handle most routine maintenance and repairs yourself. You understand boat systems well and can troubleshoot common problems. You're comfortable with tools and technical manuals, but appreciate expert guidance for complex or unfamiliar issues.", seaSureBenefit: "You'll receive detailed diagnostic information, technical specifications, and advanced troubleshooting options. SeaSure will respect your knowledge while providing expert insights and verification.", icon: TrendingUpIcon },
    { id: 'expert', title: 'Seasoned Captain', shortDescription: "Expert level with extensive experience.", detailedDescription: "You have 10+ years of experience or professional marine background. You're highly skilled in boat maintenance, systems troubleshooting, and repairs. You often help other boaters and may have professional certifications. You want detailed technical information and advanced diagnostic tools.", seaSureBenefit: "You'll get comprehensive technical data, advanced diagnostic features, and expert-level information. SeaSure will function more as a technical reference and verification tool, respecting your expertise while providing access to specialized knowledge and current best practices.", icon: ShieldCheckIcon },
];

// --- Shared Components & Styles ---
const commonInputStyle = "w-full px-4 py-3.5 rounded-lg bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-[#0077cc] dark:focus:ring-[#00aaff] text-lg text-gray-900 dark:text-slate-100 placeholder-gray-500 dark:placeholder-slate-400 transition-colors duration-150";
const commonButtonBaseStyle = "py-3 px-6 rounded-lg text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors duration-150 flex items-center justify-center gap-2 min-h-[52px]";

const InputField = ({ id, name, label, type = "text", value, onChange, error, icon: Icon, placeholder, autoComplete }: { id: string; name: string; label: string; type?: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void; error?: string; icon?: React.ElementType; placeholder?: string; autoComplete?: string; }) => ( /* ... same as before ... */
    <div>
        <label htmlFor={id} className="block text-lg font-medium text-gray-800 dark:text-slate-200 mb-1.5">{label}</label>
        <div className="relative">
            {Icon && <Icon size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-slate-500 pointer-events-none" />}
            <input id={id} name={name} type={type} value={value} onChange={onChange} className={`${commonInputStyle} ${Icon ? 'pl-12' : 'pl-4'} ${error ? 'border-red-500 dark:border-red-400 ring-red-500' : ''}`} placeholder={placeholder} autoComplete={autoComplete} />
        </div>
        {error && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>}
    </div>
);

// --- Onboarding Step Components ---
const ProfileSetupStep = ({ onSave, onSaveAndNext, onBack, initialData = initialProfileData }: { onSave: (data: ProfileData) => void; onSaveAndNext: (data: ProfileData) => void; onBack: () => void; initialData?: ProfileData; }) => { /* ... same as before ... */
    const [formData, setFormData] = useState<ProfileData>(initialData);
    const [errors, setErrors] = useState<Partial<ProfileData>>({});
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => { const { name, value } = e.target; setFormData(prev => ({ ...prev, [name]: value })); if (errors[name as keyof ProfileData]) setErrors(prev => ({ ...prev, [name]: undefined })); };
    const validate = (): boolean => { const newErrors: Partial<ProfileData> = {}; if (!formData.fullName.trim()) newErrors.fullName = "Full name is required."; if (!formData.email.trim()) newErrors.email = "Email is required."; else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid."; if (!formData.mobileNumber.trim()) newErrors.mobileNumber = "Mobile number is required."; else if (!/^\+?[1-9]\d{1,14}$/.test(formData.mobileNumber.replace(/\s+/g, ''))) newErrors.mobileNumber = "Invalid mobile number format (e.g., +12223334444)."; setErrors(newErrors); return Object.keys(newErrors).length === 0; };
    const handleSave = () => validate() && onSave(formData);
    const handleSaveAndNext = () => validate() && onSaveAndNext(formData);
    return (<div className="p-6 md:p-8 bg-white dark:bg-slate-800 rounded-xl shadow-xl"> <button onClick={onBack} className="mb-6 flex items-center text-lg text-[#0077cc] dark:text-[#00aaff] hover:underline"><ArrowLeftIcon size={22} className="mr-2" /> Back to Onboarding Steps</button> <h2 className="text-3xl font-semibold text-[#1B365D] dark:text-sky-300 mb-2">Profile Setup</h2> <p className="text-gray-600 dark:text-slate-400 mb-8 text-lg">Let's get some basic information to personalize your SeaSure experience.</p> <form onSubmit={(e) => e.preventDefault()} className="space-y-6"> <InputField id="fullName" name="fullName" label="Full Name" value={formData.fullName} onChange={handleChange} error={errors.fullName} icon={UserCircleIcon} placeholder="Captain Jack Sparrow" autoComplete="name" /> <InputField id="email" name="email" label="Email Address" type="email" value={formData.email} onChange={handleChange} error={errors.email} icon={MailIcon} placeholder="captain@example.com" autoComplete="email" /> <InputField id="mobileNumber" name="mobileNumber" label="Mobile Number" type="tel" value={formData.mobileNumber} onChange={handleChange} error={errors.mobileNumber} icon={PhoneIcon} placeholder="+1 555-123-4567" autoComplete="tel" /> <InputField id="address" name="address" label="Address (Optional)" value={formData.address} onChange={handleChange} error={errors.address} icon={MapPinIcon} placeholder="123 Ocean Drive, Miami, FL" autoComplete="street-address" /> <InputField id="dateOfBirth" name="dateOfBirth" label="Date of Birth (Optional)" type="date" value={formData.dateOfBirth} onChange={handleChange} error={errors.dateOfBirth} icon={CalendarIcon} /> <div> <label htmlFor="primaryWaterway" className="block text-lg font-medium text-gray-800 dark:text-slate-200 mb-1.5">Primary Boating Waterway</label> <div className="relative"><GlobeIcon size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-slate-500 pointer-events-none" /><input id="primaryWaterway" name="primaryWaterway" type="text" value={formData.primaryWaterway} onChange={handleChange} className={`${commonInputStyle} pl-12`} placeholder="e.g., Chesapeake Bay, Pacific Coast, Great Lakes" /></div> {errors.primaryWaterway && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.primaryWaterway}</p>} </div> <div className="flex flex-col sm:flex-row gap-4 pt-4"> <button type="button" onClick={handleSave} className={`${commonButtonBaseStyle} flex-1 bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white focus:ring-sky-500`}><SaveIcon size={20} className="mr-2" /> Save</button> <button type="button" onClick={handleSaveAndNext} className={`${commonButtonBaseStyle} flex-1 bg-[#ea580c] hover:bg-[#c2410c] dark:bg-orange-500 dark:hover:bg-orange-600 text-white focus:ring-orange-500`}>Save & Complete Next Section <ChevronRightIcon size={20} className="ml-2" /></button> </div> </form> </div>);
};
const ExperienceLevelStep = ({ onSave, onSaveAndNext, onBack, initialSelection }: { onSave: (levelId: ExperienceLevelId) => void; onSaveAndNext: (levelId: ExperienceLevelId) => void; onBack: () => void; initialSelection: ExperienceLevelId | null; }) => { /* ... same as before ... */
    const [selectedLevelId, setSelectedLevelId] = useState<ExperienceLevelId | null>(initialSelection);
    const [expandedLevelId, setExpandedLevelId] = useState<ExperienceLevelId | null>(null);
    const [error, setError] = useState<string>('');
    const handleSelectLevel = (levelId: ExperienceLevelId) => { setSelectedLevelId(levelId); setExpandedLevelId(levelId); if (error) setError(''); };
    const handleSave = () => { if (!selectedLevelId) { setError("Please select your boating experience level."); return; } onSave(selectedLevelId); };
    const handleSaveAndNext = () => { if (!selectedLevelId) { setError("Please select your boating experience level."); return; } onSaveAndNext(selectedLevelId); };
    return (<div className="p-6 md:p-8 bg-white dark:bg-slate-800 rounded-xl shadow-xl"> <button onClick={onBack} className="mb-6 flex items-center text-lg text-[#0077cc] dark:text-[#00aaff] hover:underline"><ArrowLeftIcon size={22} className="mr-2" /> Back to Onboarding Steps</button> <h2 className="text-3xl font-semibold text-[#1B365D] dark:text-sky-300 mb-2">Boating Experience Level</h2> <p className="text-gray-600 dark:text-slate-400 mb-6 text-lg">Help us tailor our assistance to your experience. Select the level that best describes you.</p> <p className="text-sm text-gray-500 dark:text-slate-500 mb-8">Note: You can change this anytime in your profile settings.</p> <div className="space-y-4"> {experienceLevels.map((level) => { const Icon = level.icon; const isSelected = selectedLevelId === level.id; const isExpanded = expandedLevelId === level.id; return (<div key={level.id} className={`rounded-lg border-2 transition-all duration-200 ${isSelected ? 'border-[#0077cc] dark:border-[#00aaff] shadow-lg scale-[1.01]' : 'border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600'}`}> <button onClick={() => handleSelectLevel(level.id)} className={`w-full p-4 text-left flex items-center gap-4 rounded-t-md ${isSelected ? 'bg-sky-50 dark:bg-slate-700/50' : 'bg-white dark:bg-slate-800'}`}> <div className={`p-2.5 rounded-md text-white ${isSelected ? 'bg-gradient-to-br from-sky-500 to-sky-700' : 'bg-gradient-to-br from-gray-400 to-gray-600 dark:from-slate-500 dark:to-slate-700'}`}> <Icon size={28} /> </div> <div className="flex-1"><h3 className={`text-xl font-semibold ${isSelected ? 'text-[#0077cc] dark:text-[#00aaff]' : 'text-gray-800 dark:text-slate-200'}`}>{level.title}</h3><p className={`text-sm ${isSelected ? 'text-sky-700 dark:text-sky-400' : 'text-gray-600 dark:text-slate-400'}`}>{level.shortDescription}</p></div> <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${isSelected ? 'bg-[#0077cc] border-[#0077cc] dark:bg-[#00aaff] dark:border-[#00aaff]' : 'border-gray-400 dark:border-slate-500'}`}>{isSelected && <CheckCircleIcon size={16} strokeWidth={3} className="text-white" />}</div> </button> {isExpanded && (<div className="p-4 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/30 rounded-b-md"><p className="text-gray-700 dark:text-slate-300 text-base mb-2">{level.detailedDescription}</p><p className="text-sky-700 dark:text-sky-400 text-base font-medium"><strong>What this means for SeaSure:</strong> {level.seaSureBenefit}</p></div>)} </div>); })} </div> {error && <p className="mt-4 text-sm text-center text-red-600 dark:text-red-400">{error}</p>} <div className="flex flex-col sm:flex-row gap-4 pt-8"> <button type="button" onClick={handleSave} className={`${commonButtonBaseStyle} flex-1 bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white focus:ring-sky-500`}><SaveIcon size={20} className="mr-2" /> Save</button> <button type="button" onClick={handleSaveAndNext} className={`${commonButtonBaseStyle} flex-1 bg-[#ea580c] hover:bg-[#c2410c] dark:bg-orange-500 dark:hover:bg-orange-600 text-white focus:ring-orange-500`}>Save & Complete Next Section <ChevronRightIcon size={20} className="ml-2" /></button> </div> </div>);
};
const TermsAndAgreementsStep = ({ onSave, onSaveAndNext, onBack, initialAccepted }: { onSave: (accepted: boolean) => void; onSaveAndNext: (accepted: boolean) => void; onBack: () => void; initialAccepted: boolean; }) => { /* ... same as before ... */
    const [accepted, setAccepted] = useState(initialAccepted);
    const [error, setError] = useState<string>('');
    const termsContent = `SeaSure Terms of Service - Last updated: June 4 2025. READ THIS AGREEMENT CAREFULLY. By accessing or using SeaSure's application, website, APIs, or any related products or services (collectively, "Services"), you ("User," "you," or "your") agree to be bound by these Terms of Service ("Terms"). If you do not agree, do not use the Services. 1. Parties: These Terms form a binding contract between SeaSure LLC, a Virginia limited-liability company ("SeaSure," "Company," "we," "our," or "us"), and you... 2. Eligibility & Account Responsibilities: 2.1 Age & Capacity. You must be at least 18 years old... 2.2 Registration Data. You agree to provide true, current, and complete information... 2.3 Account Security. You are responsible for all activity... 3. License & Acceptable Use: 3.1 Limited License. SeaSure grants you a personal, non-exclusive, non-transferable, revocable license... 3.2 Prohibited Conduct. You shall not: Copy, reproduce, adapt... Reverse-engineer... Provide, resell... Upload malware... Use for unlawful, unsafe, or high-risk activity. 4. Content & Intellectual Property: 4.1 User-Supplied Content. You retain ownership but grant SeaSure a license... 4.2 SeaSure Output. All text, diagrams, images... generated by the Services ("Output") is and remains the exclusive property of SeaSure. Permitted Use. Authorized Users may use Output solely for their own vessel(s)... Restrictions. You may not publish, resell... Commercial Rights. SeaSure reserves the unrestricted right to store, analyze, aggregate, license, sell... data or Output... 4.3 Ownership. All SeaSure trademarks, software, algorithms... are owned by SeaSure... 5. Professional Disclaimer & No Reliance: 5.1 Informational Use Only. The Services provide generalized, Al-generated technical and educational information. SeaSure is not a licensed marine engineer... 5.2 Consult Professionals. Always seek guidance from a qualified marine technician... 5.3 No Guarantee of Accuracy. ...You use it at your own risk. 6. Assumption of Risk & Release: 6.1 User Responsibility. You assume full responsibility for actions... 6.2 Release. ...you hereby release SeaSure and its Affiliates from any liability... 7. Warranties & Disclaimers: THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTIES... 8. Limitation of Liability: 8.1 Excluded Damages. IN NO EVENT SHALL SEASURE... BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL... DAMAGES... 8.2 Cap on Direct Damages. SeaSure's total cumulative liability... shall not exceed USD $50... 9. Indemnification: You agree to indemnify, defend, and hold harmless SeaSure... 10. Fees & Payment: If you purchase subscriptions... you authorize SeaSure to charge your payment method... 11. Modifications, Suspension & Termination... 12. Monitoring, Enforcement & Litigation... 13. Feedback... 14. Privacy: Data practices are detailed in the SeaSure Privacy Policy... 15. Governing Law & Dispute Resolution: Governed by laws of Virginia, USA. Mandatory Arbitration. Class-Action Waiver... 16. International Use & Export Control... 17. Severability... 18. Entire Agreement... 19. Contact Us: SeaSure LLC, Email: support@seasure.ai. By accessing or using the Services, you acknowledge that you have read, understood, and agree to be bound by these Terms.`;
    const handleSave = () => { if (!accepted) { setError("You must accept the Terms of Service to continue."); return; } onSave(accepted); };
    const handleSaveAndNext = () => { if (!accepted) { setError("You must accept the Terms of Service to continue."); return; } onSaveAndNext(accepted); };
    return (<div className="p-6 md:p-8 bg-white dark:bg-slate-800 rounded-xl shadow-xl"> <button onClick={onBack} className="mb-6 flex items-center text-lg text-[#0077cc] dark:text-[#00aaff] hover:underline"><ArrowLeftIcon size={22} className="mr-2" /> Back to Onboarding Steps</button> <h2 className="text-3xl font-semibold text-[#1B365D] dark:text-sky-300 mb-2">Terms & Agreements</h2> <p className="text-gray-600 dark:text-slate-400 mb-6 text-lg">Please review and accept our Terms of Service. We've tried to make them as clear as possible!</p> <div className="h-64 md:h-80 overflow-y-auto p-4 border border-gray-300 dark:border-slate-700 rounded-lg bg-gray-50 dark:bg-slate-900/50 mb-6"><h3 className="text-xl font-semibold text-gray-800 dark:text-slate-200 mb-2">SeaSure Terms of Service</h3><p className="text-xs text-gray-500 dark:text-slate-400 mb-4">Last updated: June 4 2025</p><pre className="whitespace-pre-wrap break-words text-sm text-gray-700 dark:text-slate-300 font-sans leading-relaxed">{termsContent}</pre></div> <div className="flex items-start space-x-3 mb-6"> <button type="button" onClick={() => { setAccepted(!accepted); if (error) setError(''); }} className={`mt-1 p-0.5 rounded ${accepted ? 'bg-[#0077cc] dark:bg-[#00aaff]' : 'bg-gray-200 dark:bg-slate-600'} border ${accepted ? 'border-[#0077cc] dark:border-[#00aaff]' : 'border-gray-400 dark:border-slate-500'} focus:outline-none focus:ring-2 focus:ring-[#0077cc] dark:focus:ring-[#00aaff]`} aria-pressed={accepted} aria-label="Accept Terms of Service">{accepted ? <CheckSquareIcon size={24} className="text-white" /> : <SquareIcon size={24} className="text-transparent" />}</button> <label htmlFor="terms-checkbox-label" className="text-base text-gray-700 dark:text-slate-300 cursor-pointer" onClick={() => { setAccepted(!accepted); if (error) setError(''); }}>I have read and agree to the SeaSure Terms of Service.</label></div> {error && <p className="mb-4 text-sm text-center text-red-600 dark:text-red-400">{error}</p>} <div className="flex flex-col sm:flex-row gap-4 pt-4"> <button type="button" onClick={handleSave} disabled={!accepted} className={`${commonButtonBaseStyle} flex-1 bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white focus:ring-sky-500 disabled:opacity-50`}><SaveIcon size={20} className="mr-2" /> Save & Accept</button> <button type="button" onClick={handleSaveAndNext} disabled={!accepted} className={`${commonButtonBaseStyle} flex-1 bg-[#ea580c] hover:bg-[#c2410c] dark:bg-orange-500 dark:hover:bg-orange-600 text-white focus:ring-orange-500 disabled:opacity-50`}>Accept & Complete Next Section <ChevronRightIcon size={20} className="ml-2" /></button> </div> </div>);
};

// --- DevicePermissionsStep Component ---
const DevicePermissionsStep = ({ onSave, onSaveAndFinish, onBack, initialPermissions }: { onSave: (permissions: DevicePermissionsState) => void; onSaveAndFinish: (permissions: DevicePermissionsState) => void; onBack: () => void; initialPermissions: DevicePermissionsState; }) => {
    const [permissions, setPermissions] = useState<DevicePermissionsState>(initialPermissions);
    const [error, setError] = useState<string>('');

    const permissionItems: { name: PermissionName; title: string; description: string; icon: React.ElementType; }[] = [
        { name: 'camera', title: 'Camera Access', description: 'For taking photos & videos of boat issues for AI analysis and service requests.', icon: CameraIcon },
        { name: 'microphone', title: 'Microphone Access', description: 'For voice commands and live assistance calls with experts (if subscribed).', icon: MicIcon },
        { name: 'location', title: 'Location Access', description: 'To find nearby service providers and for location-specific troubleshooting.', icon: MapPinIcon },
    ];

    const handleTogglePermission = (permissionName: PermissionName) => {
        // Mocking permission request: In a real app, this would trigger browser API.
        // For this mock, we'll just toggle between 'allowed' and 'denied' ('notSet' initially).
        setPermissions(prev => ({
            ...prev,
            [permissionName]: prev[permissionName] === 'allowed' ? 'denied' : 'allowed',
        }));
        if (error) setError('');
    };

    const handleSave = () => {
        // Could add validation if certain permissions are mandatory for core functionality
        onSave(permissions);
    };
    const handleSaveAndFinish = () => {
        onSaveAndFinish(permissions);
    };

    const PermissionToggle = ({ permissionName, title, description, icon: Icon, status, onToggle }: { permissionName: PermissionName; title: string; description: string; icon: React.ElementType; status: PermissionStatus; onToggle: () => void; }) => (
        <div className={`p-4 rounded-lg border flex items-center justify-between transition-colors duration-200 ${status === 'allowed' ? 'bg-green-50 dark:bg-green-900/30 border-green-300 dark:border-green-500' : 'bg-gray-50 dark:bg-slate-700/50 border-gray-300 dark:border-slate-600'}`}>
            <div className="flex items-center gap-4">
                <Icon size={28} className={status === 'allowed' ? "text-green-600 dark:text-green-400" : "text-gray-500 dark:text-slate-400"} />
                <div>
                    <h4 className={`text-lg font-semibold ${status === 'allowed' ? 'text-green-700 dark:text-green-300' : 'text-gray-800 dark:text-slate-200'}`}>{title}</h4>
                    <p className="text-sm text-gray-600 dark:text-slate-400">{description}</p>
                </div>
            </div>
            <button
                type="button"
                onClick={onToggle}
                className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-800 ${status === 'allowed' ? 'bg-[#0077cc] dark:bg-[#00aaff] focus:ring-[#0077cc]' : 'bg-gray-300 dark:bg-slate-600 focus:ring-gray-400'}`}
                aria-checked={status === 'allowed'}
                role="switch"
            >
                <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${status === 'allowed' ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
        </div>
    );

    return (
        <div className="p-6 md:p-8 bg-white dark:bg-slate-800 rounded-xl shadow-xl">
            <button onClick={onBack} className="mb-6 flex items-center text-lg text-[#0077cc] dark:text-[#00aaff] hover:underline">
                <ArrowLeftIcon size={22} className="mr-2" /> Back to Onboarding Steps
            </button>
            <h2 className="text-3xl font-semibold text-[#1B365D] dark:text-sky-300 mb-2">Device Permissions</h2>
            <p className="text-gray-600 dark:text-slate-400 mb-8 text-lg">
                Enable these features for the best SeaSure experience. You can change these anytime in your device settings or app settings.
            </p>

            <div className="space-y-5">
                {permissionItems.map(item => (
                    <PermissionToggle
                        key={item.name}
                        permissionName={item.name}
                        title={item.title}
                        description={item.description}
                        icon={item.icon}
                        status={permissions[item.name]}
                        onToggle={() => handleTogglePermission(item.name)}
                    />
                ))}
            </div>

            {error && <p className="mt-6 text-sm text-center text-red-600 dark:text-red-400">{error}</p>}

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <button type="button" onClick={handleSave} className={`${commonButtonBaseStyle} flex-1 bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white focus:ring-sky-500`}>
                    <SaveIcon size={20} className="mr-2" /> Save Permissions
                </button>
                <button type="button" onClick={handleSaveAndFinish} className={`${commonButtonBaseStyle} flex-1 bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-500 text-white focus:ring-green-500`}>
                    Finish Setup & Explore <RocketIcon size={20} className="ml-2" />
                </button>
            </div>
            <p className="text-xs text-gray-500 dark:text-slate-500 mt-4 text-center">
                Note: Allowing permissions here simulates the request. Actual browser permissions would be handled separately.
            </p>
        </div>
    );
};


// --- OnboardingProgressDisplay Component ---
const OnboardingProgressDisplay = ({ progressData, sections, activeSectionId }: { progressData: OnboardingProgress; sections: OnboardingSection[]; activeSectionId: string | null; }) => ( /* ... same as before ... */
    <div className="mb-8 md:mb-12 p-6 bg-sky-50 dark:bg-slate-800 rounded-xl shadow-lg"> <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4"> <div><p className="text-2xl font-bold text-[#1B365D] dark:text-sky-300">{progressData.percentage}% Complete</p><p className="text-md text-gray-600 dark:text-slate-400">{progressData.completedSteps} of {progressData.totalSteps} steps completed</p></div> <p className="text-md text-gray-700 dark:text-slate-300 font-medium">{progressData.estimatedTimeRemaining}</p> </div> <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-4 overflow-hidden shadow-inner"><div className="bg-gradient-to-r from-sky-500 to-sky-400 dark:from-sky-600 dark:to-sky-500 h-4 rounded-full transition-all duration-500 ease-out" style={{ width: `${progressData.percentage}%` }} role="progressbar" aria-valuenow={progressData.percentage} aria-valuemin={0} aria-valuemax={100} aria-label="Onboarding progress"></div></div> <div className="flex justify-center items-center mt-6 space-x-3"> {sections.map((section, index) => (<React.Fragment key={section.id}> <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${section.isComplete ? 'bg-green-500 border-green-600 dark:bg-green-600 dark:border-green-700' : (index === progressData.completedSteps && activeSectionId === null) ? 'bg-sky-500 border-sky-600 dark:bg-sky-600 dark:border-sky-700 animate-pulse' : (activeSectionId === section.id) ? 'bg-sky-500 border-sky-600 dark:bg-sky-600 dark:border-sky-700 ring-2 ring-offset-2 dark:ring-offset-slate-800 ring-sky-500' : 'bg-gray-300 border-gray-400 dark:bg-slate-600 dark:border-slate-500'}`}>{section.isComplete ? (<CheckCircleIcon size={18} className="text-white" strokeWidth={3} />) : (<span className={`font-bold text-sm ${(index === progressData.completedSteps && activeSectionId === null) || activeSectionId === section.id ? 'text-white' : 'text-gray-600 dark:text-slate-300'}`}>{index + 1}</span>)}</div> {index < sections.length - 1 && (<div className={`flex-1 h-1 rounded-full transition-all duration-300 ${section.isComplete && sections[index + 1].isComplete ? 'bg-green-500' : (section.isComplete ? 'bg-gradient-to-r from-green-500 to-gray-300 dark:to-slate-600' : 'bg-gray-300 dark:bg-slate-600')}`}></div>)} </React.Fragment>))} </div> </div>
);

// --- OnboardingSectionCard Component ---
const OnboardingSectionCard = ({ section, onClick, isActive }: { section: OnboardingSection; onClick: () => void; isActive: boolean; }) => { /* ... same as before ... */
    const IconComponent = section.icon;
    return (<button onClick={onClick} className={`w-full bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl dark:hover:shadow-slate-700/50 transition-all duration-300 ease-in-out flex items-center space-x-4 md:space-x-6 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#ea580c] dark:focus:ring-orange-400 min-h-[120px] text-left ${isActive ? 'ring-2 ring-[#ea580c] dark:ring-orange-400' : ''}`} aria-label={`Start ${section.title}`}> <div className={`p-3 rounded-lg bg-gradient-to-br ${section.isComplete ? 'from-green-400 to-green-600 dark:from-green-500 dark:to-green-700' : 'from-sky-400 to-sky-600 dark:from-sky-500 dark:to-sky-700'} text-white shadow-md`}><IconComponent size={32} className="opacity-90" /></div> <div className="flex-1"><h3 className="text-xl md:text-2xl font-semibold text-[#1B365D] dark:text-sky-300 mb-1">{section.title}</h3><p className="text-gray-600 dark:text-slate-400 text-base leading-relaxed">{section.description}</p><p className="text-sm text-gray-500 dark:text-slate-500 mt-1">{section.estimatedTime}</p></div> <div className="ml-auto pl-3">{section.isComplete ? (<CheckCircleIcon size={36} className="text-green-500 dark:text-green-400" strokeWidth={2} />) : (<CircleIcon size={36} className="text-gray-300 dark:text-slate-600" strokeWidth={2} />)}</div> </button>);
};

// --- Main Onboarding Page Component ---
export const TestPage = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [sectionsData, setSectionsData] = useState<OnboardingSection[]>(() => { const saved = localStorage.getItem('onboardingSections'); if (saved) { try { const sP: Array<{ id: string, isComplete: boolean }> = JSON.parse(saved); return initialSections.map(iS => { const sI = sP.find(s => s.id === iS.id); return { ...iS, isComplete: sI ? sI.isComplete : iS.isComplete, }; }); } catch (e) { console.error("Error parsing sections", e); return initialSections; } } return initialSections; });
    const [profileData, setProfileData] = useState<ProfileData>(() => JSON.parse(localStorage.getItem('onboardingProfileData') || JSON.stringify(initialProfileData)));
    const [selectedExperience, setSelectedExperience] = useState<ExperienceLevelId | null>(() => JSON.parse(localStorage.getItem('onboardingExperienceLevel') || 'null'));
    const [termsAccepted, setTermsAccepted] = useState<boolean>(() => JSON.parse(localStorage.getItem('onboardingTermsAccepted') || 'false'));
    const [devicePermissions, setDevicePermissions] = useState<DevicePermissionsState>(() => JSON.parse(localStorage.getItem('onboardingDevicePermissions') || JSON.stringify(initialDevicePermissions)));
    const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

    const progress = useMemo((): OnboardingProgress => { /* ... */ const cS = sectionsData.filter(s => s.isComplete).length; const tS = sectionsData.length; const p = tS > 0 ? Math.round((cS / tS) * 100) : 0; const tEM = sectionsData.reduce((a, c) => { if (c.isComplete) return a; const tM = c.estimatedTime.match(/(\d+)\s*minute/); return a + (tM ? parseInt(tM[1], 10) : .5); }, 0); return { completedSteps: cS, totalSteps: tS, percentage: p, estimatedTimeRemaining: `~${Math.ceil(tEM)} minute${Math.ceil(tEM) !== 1 ? 's' : ''} remaining` }; }, [sectionsData]);

    useEffect(() => { localStorage.setItem('onboardingSections', JSON.stringify(sectionsData.map(s => ({ id: s.id, isComplete: s.isComplete })))); }, [sectionsData]);
    useEffect(() => { localStorage.setItem('onboardingProfileData', JSON.stringify(profileData)); }, [profileData]);
    useEffect(() => { localStorage.setItem('onboardingExperienceLevel', JSON.stringify(selectedExperience)); }, [selectedExperience]);
    useEffect(() => { localStorage.setItem('onboardingTermsAccepted', JSON.stringify(termsAccepted)); }, [termsAccepted]);
    useEffect(() => { localStorage.setItem('onboardingDevicePermissions', JSON.stringify(devicePermissions)); }, [devicePermissions]);

    useEffect(() => { const pD = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches; const sT = localStorage.getItem('theme'); if (sT === 'dark' || (!sT && pD)) { setIsDarkMode(true); document.documentElement.classList.add('dark'); } else { setIsDarkMode(false); document.documentElement.classList.remove('dark'); } }, []);
    const toggleDarkMode = () => { setIsDarkMode(p => { const n = !p; if (n) { document.documentElement.classList.add('dark'); localStorage.setItem('theme', 'dark'); } else { document.documentElement.classList.remove('dark'); localStorage.setItem('theme', 'light'); } return n; }); };
    const handleSectionClick = (id: string) => setActiveSectionId(id);
    const handleGetStarted = () => { const fI = sectionsData.find(s => !s.isComplete); if (fI) handleSectionClick(fI.id); else { console.log("All steps complete! Navigating to dashboard (mock)."); setActiveSectionId('completed'); /* Or navigate to dashboard */ } };
    const completeSection = (id: string) => setSectionsData(pS => pS.map(s => s.id === id ? { ...s, isComplete: true } : s));

    const handleSaveProfile = (data: ProfileData) => { setProfileData(data); completeSection('profile'); setActiveSectionId(null); };
    const handleSaveProfileAndNext = (data: ProfileData) => { setProfileData(data); completeSection('profile'); const cI = sectionsData.findIndex(s => s.id === 'profile'); if (cI !== -1 && cI < sectionsData.length - 1) setActiveSectionId(sectionsData[cI + 1].id); else setActiveSectionId(null); };
    const handleSaveExperience = (levelId: ExperienceLevelId) => { setSelectedExperience(levelId); completeSection('experience'); setActiveSectionId(null); };
    const handleSaveExperienceAndNext = (levelId: ExperienceLevelId) => { setSelectedExperience(levelId); completeSection('experience'); const cI = sectionsData.findIndex(s => s.id === 'experience'); if (cI !== -1 && cI < sectionsData.length - 1) setActiveSectionId(sectionsData[cI + 1].id); else setActiveSectionId(null); };
    const handleSaveTerms = (accepted: boolean) => { setTermsAccepted(accepted); if (accepted) completeSection('terms'); setActiveSectionId(null); };
    const handleSaveTermsAndNext = (accepted: boolean) => { setTermsAccepted(accepted); if (accepted) completeSection('terms'); const cI = sectionsData.findIndex(s => s.id === 'terms'); if (accepted && cI !== -1 && cI < sectionsData.length - 1) setActiveSectionId(sectionsData[cI + 1].id); else setActiveSectionId(null); };
    const handleSavePermissions = (permissions: DevicePermissionsState) => { setDevicePermissions(permissions); completeSection('permissions'); setActiveSectionId(null); };
    const handleSavePermissionsAndFinish = (permissions: DevicePermissionsState) => { setDevicePermissions(permissions); completeSection('permissions'); setActiveSectionId('completed'); /* Or navigate to dashboard */ console.log("Onboarding finished!"); };

    const renderActiveSection = () => {
        if (activeSectionId === 'completed' || (progress.percentage === 100 && activeSectionId === null)) {
            return (
                <div className="my-8 p-8 bg-green-50 dark:bg-green-900/30 border border-green-400 dark:border-green-600 rounded-xl text-center">
                    <CheckCircleIcon size={64} className="text-green-600 dark:text-green-400 mx-auto mb-6" />
                    <h3 className="text-3xl font-semibold text-green-700 dark:text-green-300 mb-3">Setup Complete!</h3>
                    <p className="text-xl text-green-600 dark:text-green-400 mb-8">You're all set to explore SeaSure. Welcome aboard, Captain!</p>
                    <button onClick={() => console.log("Navigate to Dashboard")} className={`${commonButtonBaseStyle} max-w-xs mx-auto bg-[#ea580c] hover:bg-[#c2410c] text-white focus:ring-[#ea580c]`}>
                        <RocketIcon size={24} className="mr-2" /> Go to Dashboard
                    </button>
                </div>
            );
        }

        switch (activeSectionId) {
            case 'profile': return <ProfileSetupStep onSave={handleSaveProfile} onSaveAndNext={handleSaveProfileAndNext} onBack={() => setActiveSectionId(null)} initialData={profileData} />;
            case 'experience': return <ExperienceLevelStep onSave={handleSaveExperience} onSaveAndNext={handleSaveExperienceAndNext} onBack={() => setActiveSectionId(null)} initialSelection={selectedExperience} />;
            case 'terms': return <TermsAndAgreementsStep onSave={handleSaveTerms} onSaveAndNext={handleSaveTermsAndNext} onBack={() => setActiveSectionId(null)} initialAccepted={termsAccepted} />;
            case 'permissions': return <DevicePermissionsStep onSave={handleSavePermissions} onSaveAndFinish={handleSavePermissionsAndFinish} onBack={() => setActiveSectionId(null)} initialPermissions={devicePermissions} />;
            default: return (<>
                <section className="text-center mb-10 md:mb-12"><h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-800 dark:text-slate-50">Welcome Aboard SeaSure!</h2><p className="text-lg sm:text-xl text-gray-700 dark:text-slate-300 mb-3 max-w-3xl mx-auto leading-relaxed">Let's get you set up and ready to navigate the waters of boat maintenance with confidence! We'll need to gather some basic information about you, ensure your device is ready to work seamlessly with SeaSure, and yes... we'll need to get through those thrilling terms of service agreements (we promise we kept the legal jargon to a minimum and made it as painless as possible!).</p><p className="text-md text-gray-500 dark:text-slate-400 max-w-2xl mx-auto">This quick setup should take less than 5 minutes and will help us provide you with the most relevant assistance for your boating adventures.</p></section>
                <OnboardingProgressDisplay progressData={progress} sections={sectionsData} activeSectionId={activeSectionId} />
                <div className="space-y-5 md:space-y-6 my-8">{sectionsData.map((section) => (<OnboardingSectionCard key={section.id} section={section} onClick={() => handleSectionClick(section.id)} isActive={activeSectionId === section.id} />))}</div>
                <div className="mt-10 md:mt-12 text-center"><button onClick={handleGetStarted} className={`px-10 py-4 text-xl md:text-2xl font-semibold rounded-lg text-white transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-h-[60px] flex items-center justify-center gap-3 mx-auto ${progress.percentage === 100 ? 'bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-500 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-700' : 'bg-[#ea580c] hover:bg-[#c2410c] dark:bg-orange-500 dark:hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-600'}`}><RocketIcon size={28} />{progress.percentage === 100 ? "Explore SeaSure" : (progress.completedSteps > 0 ? "Continue Setup" : "Let's Get You Set Up!")}</button></div>
                {progress.percentage > 70 && progress.percentage < 100 && (<p className="text-center text-lg text-sky-600 dark:text-sky-400 font-semibold mt-6 animate-pulse">Almost there! Just a few more details.</p>)}
            </>);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#F8F9FA] dark:bg-slate-900 font-sans transition-colors duration-300 text-gray-900 dark:text-slate-100">
            <header className="p-4 sticky top-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-sm z-50"><div className="container mx-auto flex justify-between items-center max-w-6xl px-4"><Link to="/" className="flex items-center space-x-2.5"><LifeBuoy size={36} className="text-[#1B365D] dark:text-sky-400" /><h1 className="text-2xl md:text-3xl font-bold text-[#1B365D] dark:text-sky-400">SeaSure</h1></Link><button onClick={toggleDarkMode} aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"} className="p-2.5 rounded-full text-[#1B365D] dark:text-sky-400 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors">{isDarkMode ? <Sun size={24} /> : <Moon size={24} />}</button></div></header>
            <main className="container mx-auto p-4 md:p-8 max-w-4xl flex-grow">{renderActiveSection()}</main>
            <footer className="text-center p-6 border-t border-gray-200 dark:border-slate-700 mt-10 md:mt-12"><p className="text-base text-gray-600 dark:text-slate-400">&copy; {new Date().getFullYear()} SeaSure Marine. All rights reserved.</p></footer>
        </div>);
};

