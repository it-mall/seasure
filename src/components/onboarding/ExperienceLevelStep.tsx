import React, { useState } from 'react';
import type { ExperienceLevelStepProps, ExperienceLevel, ExperienceLevelId } from '../../types/onboarding';
import { Ship, TrendingUp, ShieldCheck, Rocket } from '../../assets/icons';

const experienceLevels: ExperienceLevel[] = [
    {
        id: 'new',
        title: 'New to Boating',
        shortDescription: 'Just starting your boating journey',
        detailedDescription: 'You\'re new to boating and looking to learn the basics. We\'ll help you understand the fundamentals of boat maintenance and safety.',
        seaSureBenefit: 'Get personalized guidance and step-by-step instructions for every maintenance task.',
        icon: Ship
    },
    {
        id: 'novice',
        title: 'Novice Boater',
        shortDescription: 'Some experience with basic maintenance',
        detailedDescription: 'You\'ve been boating for a while and know the basics. You\'re comfortable with routine maintenance but want to learn more.',
        seaSureBenefit: 'Access to intermediate maintenance guides and tips to improve your skills.',
        icon: TrendingUp
    },
    {
        id: 'intermediate',
        title: 'Intermediate Boater',
        shortDescription: 'Experienced with most maintenance tasks',
        detailedDescription: 'You\'re comfortable with most maintenance tasks and have a good understanding of boat systems. You\'re looking to refine your skills.',
        seaSureBenefit: 'Advanced maintenance guides and troubleshooting assistance for complex issues.',
        icon: ShieldCheck
    },
    {
        id: 'expert',
        title: 'Expert Boater',
        shortDescription: 'Professional or highly experienced',
        detailedDescription: 'You\'re a professional or highly experienced boater with extensive knowledge of boat maintenance and systems.',
        seaSureBenefit: 'Access to professional-grade tools and advanced diagnostics to maintain your expertise.',
        icon: Rocket
    }
];

export const ExperienceLevelStep: React.FC<ExperienceLevelStepProps> = ({
    onSave,
    onSaveAndNext,
    onBack,
    initialSelection
}) => {
    const [selectedLevelId, setSelectedLevelId] = useState<ExperienceLevelId | null>(initialSelection);
    const [expandedLevelId, setExpandedLevelId] = useState<ExperienceLevelId | null>(null);
    const [error, setError] = useState<string>('');

    const handleSelectLevel = (levelId: ExperienceLevelId) => {
        setSelectedLevelId(levelId);
        setExpandedLevelId(levelId);
        if (error) setError('');
    };

    const handleSave = () => {
        if (!selectedLevelId) {
            setError("Please select your boating experience level.");
            return;
        }
        onSave(selectedLevelId);
    };

    const handleSaveAndNext = () => {
        if (!selectedLevelId) {
            setError("Please select your boating experience level.");
            return;
        }
        onSaveAndNext(selectedLevelId);
    };

    return (
        <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Select Your Experience Level</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
                This helps us provide you with the most relevant assistance for your boating adventures.
            </p>

            <div className="space-y-4">
                {experienceLevels.map((level) => {
                    const isSelected = selectedLevelId === level.id;
                    const isExpanded = expandedLevelId === level.id;
                    const Icon = level.icon;

                    return (
                        <div
                            key={level.id}
                            className={`border rounded-lg p-4 transition-all duration-200 ${isSelected
                                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
                                }`}
                        >
                            <button
                                onClick={() => handleSelectLevel(level.id)}
                                className="w-full text-left focus:outline-none"
                            >
                                <div className="flex items-center">
                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3 ${isSelected
                                        ? 'border-blue-500 bg-blue-500'
                                        : 'border-gray-300 dark:border-gray-600'
                                        }`}>
                                        {isSelected && (
                                            <div className="w-3 h-3 bg-white rounded-full" />
                                        )}
                                    </div>
                                    <Icon
                                        size={24}
                                        className={`mr-3 ${isSelected
                                            ? 'text-blue-500'
                                            : 'text-gray-500 dark:text-gray-400'
                                            }`}
                                    />
                                    <div className="flex-grow">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                            {level.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">
                                            {level.shortDescription}
                                        </p>
                                    </div>
                                </div>
                            </button>

                            {isExpanded && (
                                <div className="mt-4 pl-9 space-y-3">
                                    <p className="text-gray-700 dark:text-gray-200">
                                        {level.detailedDescription}
                                    </p>
                                    <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg">
                                        <p className="text-sm text-blue-700 dark:text-blue-300">
                                            <strong>SeaSure Benefit:</strong> {level.seaSureBenefit}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {error && (
                <p className="mt-4 text-sm text-red-600 dark:text-red-400">{error}</p>
            )}

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
                        onClick={handleSaveAndNext}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        Save & Continue
                    </button>
                </div>
            </div>
        </div>
    );
}; 