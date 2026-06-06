import React, { useState } from 'react';
import type { DevicePermissionsStepProps, PermissionToggleProps, PermissionName, PermissionStatus } from '../../types/onboarding';
import { Camera, Mic, Globe } from '../../assets/icons';

const PermissionToggle: React.FC<PermissionToggleProps> = ({
  permissionName,
  title,
  description,
  icon: Icon,
  status,
  onToggle
}) => {
  const getStatusColor = (status: PermissionStatus) => {
    switch (status) {
      case 'allowed':
        return 'text-green-500 dark:text-green-400';
      case 'denied':
        return 'text-red-500 dark:text-red-400';
      default:
        return 'text-gray-400 dark:text-gray-500';
    }
  };

  const getStatusText = (status: PermissionStatus) => {
    switch (status) {
      case 'allowed':
        return 'Allowed';
      case 'denied':
        return 'Denied';
      default:
        return 'Not Set';
    }
  };

  return (
    <div className="flex items-start space-x-4 p-4 border rounded-lg border-gray-200 dark:border-gray-700">
      <div className="flex-shrink-0">
        <Icon size={24} className={getStatusColor(status)} />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              {description}
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <span className={`text-sm font-medium ${getStatusColor(status)}`}>
              {getStatusText(status)}
            </span>
            <button
              onClick={onToggle}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${status === 'allowed'
                ? 'bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50'
                : 'bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400 dark:hover:bg-green-900/50'
                }`}
            >
              {status === 'allowed' ? 'Deny' : 'Allow'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DevicePermissionsStep: React.FC<DevicePermissionsStepProps> = ({
  onSave,
  onSaveAndFinish,
  onBack,
  initialPermissions
}) => {
  const [permissions, setPermissions] = useState(initialPermissions);

  const handleTogglePermission = (permissionName: PermissionName) => {
    setPermissions(prev => ({
      ...prev,
      [permissionName]: prev[permissionName] === 'allowed' ? 'denied' : 'allowed'
    }));
  };

  const handleSave = () => {
    onSave(permissions);
  };

  const handleSaveAndFinish = () => {
    onSaveAndFinish(permissions);
  };

  const permissionConfigs = [
    {
      name: 'camera' as PermissionName,
      title: 'Camera Access',
      description: 'Allow SeaSure to access your camera for documenting maintenance tasks and inspections.',
      icon: Camera
    },
    {
      name: 'microphone' as PermissionName,
      description: 'Enable voice notes and audio instructions for maintenance tasks.',
      icon: Mic,
      title: 'Microphone Access'
    },
    {
      name: 'location' as PermissionName,
      description: 'Share your location to receive relevant local weather and marine conditions.',
      icon: Globe,
      title: 'Location Access'
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Device Permissions</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        SeaSure needs certain permissions to provide you with the best experience. You can change these settings later in your account preferences.
      </p>

      <div className="space-y-4">
        {permissionConfigs.map(config => (
          <PermissionToggle
            key={config.name}
            permissionName={config.name}
            title={config.title}
            description={config.description}
            icon={config.icon}
            status={permissions[config.name]}
            onToggle={() => handleTogglePermission(config.name)}
          />
        ))}
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={onBack}
          className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
        >
          Back
        </button>
        <div className="space-x-4">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            Save
          </button>
          <button
            onClick={handleSaveAndFinish}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Complete Setup
          </button>
        </div>
      </div>
    </div>
  );
}; 