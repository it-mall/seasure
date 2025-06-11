import React, { useState, useEffect } from 'react';
import {
  MessageSquare,
  Ship,
  FolderOpen,
  Users,
  Wrench,
  LifeBuoy,
  Settings,
  User,
  ChevronRight,
  Camera,
  Video,
  Mic,
  Plus,
  Bell,
  Compass,
  Zap,
  AlertTriangle,
  CheckCircle,
  Clock,
  Send,
  Image,
  Play,
  ChevronDown,
  Menu,
  X,
  FileUp,
  BarChart3,
} from 'lucide-react';

const SeaSureChatInterface = () => {
  const [selectedChat, setSelectedChat] = useState('new-chat');
  const [currentMessage, setCurrentMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [selectedBoat, setSelectedBoat] = useState('buddy-iii');
  const [showBoatSelector, setShowBoatSelector] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentView, setCurrentView] = useState('chat'); // 'chat', 'dashboard', 'boats', 'settings', or 'binder'
  const [activeSettingsTab, setActiveSettingsTab] = useState('Profile');

  const sidebarItems = [
    { id: 'dashboard', icon: LifeBuoy, label: 'Dashboard', section: 'main' },
    { id: 'boats', icon: Ship, label: 'My Boats', section: 'main' },
    { id: 'binder', icon: FolderOpen, label: "Captain's Binder", section: 'main' },
    { id: 'service-request', icon: Wrench, label: 'Service Request', section: 'main' },
    { id: 'service-providers', icon: Users, label: 'Service Providers', section: 'main' },
    { id: 'account', icon: User, label: 'Account Usage', section: 'main' },
    { id: 'support', icon: LifeBuoy, label: 'SeaSure Support', section: 'main' },
    { id: 'settings', icon: Settings, label: 'Settings', section: 'main' },
  ];

  const chatHistory = [
    { id: 'new-chat', title: 'New Chat', icon: Plus, isNew: true },
    {
      id: 'engine-overheat',
      title: 'Engine overheating issue',
      subtitle: 'Sea Ray 350 • Resolved',
      icon: AlertTriangle,
      status: 'resolved',
    },
    {
      id: 'oil-leak',
      title: 'Oil leak from engine bay',
      subtitle: 'Catalina 385 • In progress',
      icon: Wrench,
      status: 'active',
    },
    {
      id: 'vibration',
      title: 'Vibration at idle speed',
      subtitle: 'Sea Ray 350 • Need help',
      icon: Zap,
      status: 'pending',
    },
    {
      id: 'filter-change',
      title: 'How to change fuel filter',
      subtitle: 'General question',
      icon: MessageSquare,
      status: 'completed',
    },
  ];

  const boats = [
    { id: 'buddy-iii', name: 'Buddy III', type: 'Sea Ray 350', status: 'active' },
    { id: 'ocean-dream', name: 'Ocean Dream', type: 'Catalina 385', status: 'seasonal' },
    { id: 'wave-runner', name: 'Wave Runner', type: 'Boston Whaler 280', status: 'maintenance' },
  ];

  const quickSuggestions = [
    'My engine is overheating and I need assistance.',
    'An alarm indicator just went off on my boat, help me find the cause.',
    'Should I add any fuel additives to my diesel engine?',
    'Can you help me identify a part and part number?',
    'Walk me through winterizing my boat',
    'How do I check my engine oil properly?',
  ];

  const serviceRequests = [
    {
      id: 1,
      title: 'Engine Overheating Investigation & Diagnosis',
      boat: 'Buddy III',
      provider: 'Marina Bay Service Center',
      status: 'scheduled',
      date: 'Jun 10, 2PM',
      updatedAt: 'Yesterday',
    },
    {
      id: 2,
      title: 'Generator Not Starting - Fuel System Check',
      boat: 'Ocean Dream',
      provider: 'Atlantic Marine Techs Inc.',
      status: 'in-progress',
      date: 'Jun 8, 10AM',
      updatedAt: '2 days ago',
    },
    {
      id: 3,
      title: 'Annual Engine Service & Oil Change',
      boat: 'Buddy III',
      provider: 'SeaPort Marine Services',
      status: 'completed',
      date: 'May 28',
      updatedAt: '1 week ago',
    },
  ];

  const fleetData = [
    {
      id: 'buddy-iii',
      name: 'Buddy III',
      model: 'Sea Ray 350 Sundancer',
      year: '2019',
      engine: 'Twin 350HP MerCruiser',
      status: 'active',
      lastService: '2 weeks ago',
    },
    {
      id: 'ocean-dream',
      name: 'Ocean Dream',
      model: 'Catalina 385',
      year: '2020',
      engine: '40HP Yanmar',
      status: 'seasonal',
      lastService: '1 month ago',
    },
    {
      id: 'wave-runner',
      name: 'Wave Runner',
      model: 'Boston Whaler 280',
      year: '2018',
      engine: 'Twin 300HP Mercury',
      status: 'maintenance',
      lastService: 'In progress',
    },
  ];

  const handleSendMessage = async () => {
    if (!currentMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: currentMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setCurrentMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        type: 'ai',
        content:
          "I understand you're experiencing an issue with your boat. Let me help you troubleshoot this step by step. First, can you tell me what type of boat and engine you have? Also, if you can share a photo or video of the problem area, that would help me provide more accurate guidance.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleSuggestionClick = (suggestion) => {
    setCurrentMessage(suggestion);
  };

  return (
    <div className="flex h-screen bg-slate-900 text-white">
      {/* Sidebar */}
      <div
        className={`${sidebarCollapsed ? 'w-16' : 'w-80'} bg-slate-800/50 border-r border-slate-700/50 flex flex-col transition-all duration-300 ease-in-out relative`}
      >
        {/* Collapse Toggle Button */}
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="absolute -right-3 top-6 w-6 h-6 bg-slate-700 hover:bg-slate-600 border border-slate-600 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
        >
          {sidebarCollapsed ? (
            <ChevronRight className="w-3 h-3 text-slate-300" />
          ) : (
            <X className="w-3 h-3 text-slate-300" />
          )}
        </button>

        {/* Header */}
        <div className="p-6 border-b border-slate-700/50">
          {!sidebarCollapsed ? (
            <>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Compass className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    SeaSure
                  </h1>
                  <p className="text-xs text-slate-400">Marine AI Assistant</p>
                </div>
              </div>

              {/* Boat Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowBoatSelector(!showBoatSelector)}
                  className="w-full flex items-center justify-between text-sm text-slate-300 hover:text-white p-3 bg-slate-700/30 rounded-xl transition-all duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        boats.find((b) => b.id === selectedBoat)?.status === 'active'
                          ? 'bg-green-400'
                          : boats.find((b) => b.id === selectedBoat)?.status === 'seasonal'
                            ? 'bg-yellow-400'
                            : 'bg-red-400'
                      }`}
                    ></div>
                    <div className="text-left">
                      <p className="font-medium text-white">
                        {boats.find((b) => b.id === selectedBoat)?.name}
                      </p>
                      <p className="text-xs text-slate-400">
                        {boats.find((b) => b.id === selectedBoat)?.type}
                      </p>
                    </div>
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Boat Dropdown */}
                {showBoatSelector && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-slate-700 rounded-xl shadow-xl z-50">
                    {boats.map((boat) => (
                      <button
                        key={boat.id}
                        onClick={() => {
                          setSelectedBoat(boat.id);
                          setShowBoatSelector(false);
                        }}
                        className="w-full flex items-center space-x-3 p-3 text-left hover:bg-slate-700/50 first:rounded-t-xl last:rounded-b-xl transition-colors duration-200"
                      >
                        <div
                          className={`w-3 h-3 rounded-full ${
                            boat.status === 'active'
                              ? 'bg-green-400'
                              : boat.status === 'seasonal'
                                ? 'bg-yellow-400'
                                : 'bg-red-400'
                          }`}
                        ></div>
                        <div>
                          <p className="font-medium text-white">{boat.name}</p>
                          <p className="text-xs text-slate-400">{boat.type}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center space-y-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <div
                className={`w-3 h-3 rounded-full ${
                  boats.find((b) => b.id === selectedBoat)?.status === 'active'
                    ? 'bg-green-400'
                    : boats.find((b) => b.id === selectedBoat)?.status === 'seasonal'
                      ? 'bg-yellow-400'
                      : 'bg-red-400'
                }`}
              ></div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-1 mb-6">
            {sidebarItems.map((item) => {
              const IconComponent = item.icon;
              const isActive =
                (item.id === 'dashboard' && currentView === 'dashboard') ||
                (item.id === 'boats' && currentView === 'boats') ||
                (item.id === 'settings' && currentView === 'settings') ||
                (item.id === 'binder' && currentView === 'binder') ||
                (item.id !== 'dashboard' &&
                  item.id !== 'boats' &&
                  item.id !== 'settings' &&
                  item.id !== 'binder' &&
                  currentView === 'chat');
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.id === 'dashboard') {
                      setCurrentView('dashboard');
                    } else if (item.id === 'boats') {
                      setCurrentView('boats');
                    } else if (item.id === 'settings') {
                      setCurrentView('settings');
                    } else if (item.id === 'binder') {
                      setCurrentView('binder');
                    } else {
                      setCurrentView('chat');
                    }
                  }}
                  className={`w-full flex items-center ${sidebarCollapsed ? 'justify-center px-2' : 'justify-start px-4'} py-3 text-left hover:text-white hover:bg-slate-700/50 rounded-xl transition-all duration-200 group relative ${
                    isActive
                      ? 'bg-blue-500/20 border border-blue-500/30 text-white'
                      : 'text-slate-300'
                  }`}
                  title={sidebarCollapsed ? item.label : undefined}
                >
                  <IconComponent className="w-5 h-5 flex-shrink-0" />
                  {!sidebarCollapsed && <span className="font-medium ml-3">{item.label}</span>}
                  {sidebarCollapsed && (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-slate-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                      {item.label}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Chat History */}
          {!sidebarCollapsed && (
            <div>
              <h3 className="text-sm font-semibold text-slate-400 px-4 mb-3 uppercase tracking-wide">
                Recent Chats
              </h3>
              <div className="space-y-1">
                {chatHistory.map((chat) => {
                  const IconComponent = chat.icon;
                  const isActive = selectedChat === chat.id;
                  return (
                    <button
                      key={chat.id}
                      onClick={() => setSelectedChat(chat.id)}
                      className={`w-full flex items-start space-x-3 px-4 py-3 text-left rounded-xl transition-all duration-200 ${
                        isActive
                          ? 'bg-blue-500/20 border border-blue-500/30 text-white'
                          : 'text-slate-300 hover:text-white hover:bg-slate-700/30'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center mt-0.5 ${
                          chat.isNew
                            ? 'bg-gradient-to-br from-green-500 to-emerald-500'
                            : chat.status === 'resolved'
                              ? 'bg-green-500/20'
                              : chat.status === 'active'
                                ? 'bg-orange-500/20'
                                : 'bg-slate-600/50'
                        }`}
                      >
                        <IconComponent
                          className={`w-4 h-4 ${
                            chat.isNew
                              ? 'text-white'
                              : chat.status === 'resolved'
                                ? 'text-green-400'
                                : chat.status === 'active'
                                  ? 'text-orange-400'
                                  : 'text-slate-400'
                          }`}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className={`font-medium text-sm ${isActive ? 'text-white' : 'text-slate-200'} truncate`}
                        >
                          {chat.title}
                        </p>
                        {chat.subtitle && (
                          <p className="text-xs text-slate-400 truncate">{chat.subtitle}</p>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* User Profile */}
        <div className="p-4 border-t border-slate-700/50">
          {!sidebarCollapsed ? (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-white">sgross@gmail.com</p>
                <p className="text-xs text-slate-400">Pro Plan Active</p>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {currentView === 'dashboard' ? (
          <>
            {/* Dashboard Header */}
            <div className="p-6 border-b border-slate-700/50 bg-slate-800/30">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">DASHBOARD</h2>
                  <p className="text-slate-400">
                    Overview of your boats, usage, and service requests
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-slate-300">All Systems Operational</span>
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Monthly Usage */}
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white flex items-center">
                      <BarChart3 className="w-6 h-6 mr-3 text-orange-500" />
                      Monthly Usage
                    </h3>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-300">AI Chat Messages</span>
                        <span className="text-slate-300">247 / Unlimited</span>
                      </div>
                      <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                        <div className="w-1/4 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-300">Live Video Minutes</span>
                        <span className="text-slate-300">12 / 30</span>
                      </div>
                      <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                        <div className="w-2/5 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-300">File Storage</span>
                        <span className="text-slate-300">2.4 GB / 10 GB</span>
                      </div>
                      <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                        <div className="w-1/4 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Active Service Requests */}
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white flex items-center">
                      <Wrench className="w-6 h-6 mr-3 text-blue-500" />
                      Active Service Requests
                    </h3>
                    <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors duration-200">
                      + New Request
                    </button>
                  </div>
                  <div className="space-y-4 max-h-64 overflow-y-auto">
                    {serviceRequests.map((request) => (
                      <div key={request.id} className="p-4 bg-slate-700/30 rounded-xl">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium text-white text-sm">{request.title}</h4>
                          <button className="text-slate-400 hover:text-white">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                          </button>
                        </div>
                        <p className="text-xs text-slate-400 mb-2">
                          For: {request.boat} • With: {request.provider}
                        </p>
                        <div className="flex items-center justify-between">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              request.status === 'scheduled'
                                ? 'bg-blue-500/20 text-blue-400'
                                : request.status === 'in-progress'
                                  ? 'bg-orange-500/20 text-orange-400'
                                  : 'bg-green-500/20 text-green-400'
                            }`}
                          >
                            {request.status === 'scheduled'
                              ? 'Scheduled'
                              : request.status === 'in-progress'
                                ? 'In Progress'
                                : 'Completed'}
                          </span>
                          <span className="text-xs text-slate-500">{request.updatedAt}</span>
                        </div>
                        {request.date && (
                          <p className="text-xs text-slate-300 mt-1">
                            {request.status === 'scheduled' ? 'Scheduled: ' : ''}
                            {request.date}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* My Fleet */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <Ship className="w-6 h-6 mr-3 text-orange-500" />
                    My Fleet
                  </h3>
                  <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
                    <Plus className="w-5 h-5" />
                    <span>Add New Boat</span>
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {fleetData.map((boat) => (
                    <div
                      key={boat.id}
                      className="p-5 bg-slate-700/30 rounded-xl border border-slate-600/30 hover:border-slate-500/50 transition-colors duration-200"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-4 h-4 rounded-full ${
                              boat.status === 'active'
                                ? 'bg-green-400'
                                : boat.status === 'seasonal'
                                  ? 'bg-yellow-400'
                                  : 'bg-red-400'
                            }`}
                          ></div>
                          <div>
                            <h4 className="font-bold text-white">{boat.name}</h4>
                            <p className="text-sm text-slate-400">{boat.model}</p>
                          </div>
                        </div>
                        <button className="text-slate-400 hover:text-white">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </button>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Year:</span>
                          <span className="text-slate-200">{boat.year}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Engine:</span>
                          <span className="text-slate-200">{boat.engine}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Last Service:</span>
                          <span className="text-slate-200">{boat.lastService}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Status:</span>
                          <span
                            className={`capitalize ${
                              boat.status === 'active'
                                ? 'text-green-400'
                                : boat.status === 'seasonal'
                                  ? 'text-yellow-400'
                                  : 'text-red-400'
                            }`}
                          >
                            {boat.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : currentView === 'settings' ? (
          <>
            {/* Settings Header */}
            <div className="p-6 border-b border-slate-700/50 bg-slate-800/30">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white flex items-center">
                    <Settings className="w-8 h-8 mr-3 text-orange-500" />
                    ACCOUNT SETTINGS
                  </h2>
                  <p className="text-slate-400">
                    Manage your profile, subscription, and preferences
                  </p>
                </div>
              </div>
            </div>

            {/* Settings Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="max-w-4xl mx-auto">
                {/* Settings Tabs */}
                <div className="mb-8">
                  <div className="flex space-x-1 bg-slate-800/50 p-1 rounded-xl border border-slate-700/50">
                    {['Profile', 'Password', 'Boating Experience', 'Subscription'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveSettingsTab(tab)}
                        className={`flex-1 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                          activeSettingsTab === tab
                            ? 'bg-blue-500 text-white shadow-lg'
                            : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Settings Form Content */}
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
                  {activeSettingsTab === 'Profile' && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-white mb-6">Profile Information</h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">
                            First Name
                          </label>
                          <input
                            type="text"
                            defaultValue="Shawn"
                            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">
                            Last Name
                          </label>
                          <input
                            type="text"
                            defaultValue="Gross"
                            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          defaultValue="sgross@gmail.com"
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Mobile Number
                        </label>
                        <input
                          type="tel"
                          defaultValue="222-555-1212"
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Address
                        </label>
                        <input
                          type="text"
                          defaultValue="222 High Street, Columbus, Ohio 44124"
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Primary Boating Waterway
                        </label>
                        <input
                          type="text"
                          defaultValue="Chesapeake Bay Watershed"
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                        />
                      </div>

                      <div className="flex justify-end pt-4">
                        <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
                          <span>Save Changes</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {activeSettingsTab === 'Password' && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-white mb-6">Change Password</h3>

                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Current Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                          placeholder="Enter current password"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          New Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                          placeholder="Enter new password"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                          placeholder="Confirm new password"
                        />
                      </div>

                      <div className="bg-slate-700/30 border border-slate-600/30 rounded-lg p-4">
                        <h4 className="text-sm font-medium text-slate-300 mb-2">
                          Password Requirements:
                        </h4>
                        <ul className="text-xs text-slate-400 space-y-1">
                          <li>• At least 8 characters long</li>
                          <li>• Include at least one uppercase letter</li>
                          <li>• Include at least one lowercase letter</li>
                          <li>• Include at least one number</li>
                          <li>• Include at least one special character</li>
                        </ul>
                      </div>

                      <div className="flex justify-end pt-4">
                        <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors duration-200">
                          Update Password
                        </button>
                      </div>
                    </div>
                  )}

                  {activeSettingsTab === 'Boating Experience' && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-white mb-6">
                        Boating Experience & Preferences
                      </h3>

                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Years of Boating Experience
                        </label>
                        <select className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50">
                          <option>Less than 1 year</option>
                          <option>1-3 years</option>
                          <option>4-10 years</option>
                          <option selected>11-20 years</option>
                          <option>More than 20 years</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Primary Boat Type
                        </label>
                        <select className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50">
                          <option>Sailboat</option>
                          <option selected>Power Boat</option>
                          <option>Fishing Boat</option>
                          <option>Yacht</option>
                          <option>Pontoon</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Maintenance Comfort Level
                        </label>
                        <select className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50">
                          <option>Beginner - Prefer professional help</option>
                          <option selected>Intermediate - Basic maintenance only</option>
                          <option>Advanced - Comfortable with most repairs</option>
                          <option>Expert - Can handle complex issues</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Preferred Communication Style
                        </label>
                        <select className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50">
                          <option>Simple explanations</option>
                          <option selected>Detailed technical guidance</option>
                          <option>Step-by-step instructions</option>
                          <option>Visual aids preferred</option>
                        </select>
                      </div>

                      <div className="flex justify-end pt-4">
                        <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors duration-200">
                          Save Preferences
                        </button>
                      </div>
                    </div>
                  )}

                  {activeSettingsTab === 'Subscription' && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-white mb-6">Subscription Management</h3>

                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h4 className="text-lg font-bold text-white">Pro Plan</h4>
                            <p className="text-slate-300">$29.99/month</p>
                          </div>
                          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                            Active
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="text-slate-400">AI Chat Messages</p>
                            <p className="text-white font-medium">Unlimited</p>
                          </div>
                          <div>
                            <p className="text-slate-400">Live Video Minutes</p>
                            <p className="text-white font-medium">30 per month</p>
                          </div>
                          <div>
                            <p className="text-slate-400">File Storage</p>
                            <p className="text-white font-medium">10 GB</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-white mb-4">Billing Information</h4>
                        <div className="bg-slate-700/30 border border-slate-600/30 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-slate-300">Payment Method</span>
                            <span className="text-white">•••• •••• •••• 4242</span>
                          </div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-slate-300">Next Billing Date</span>
                            <span className="text-white">July 8, 2025</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-300">Amount</span>
                            <span className="text-white">$29.99</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        <button className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors duration-200">
                          Change Plan
                        </button>
                        <button className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors duration-200">
                          Update Payment
                        </button>
                        <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors duration-200">
                          Cancel Subscription
                        </button>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-white mb-4">Billing History</h4>
                        <div className="space-y-3">
                          {[
                            { date: 'Jun 8, 2025', amount: '$29.99', status: 'Paid' },
                            { date: 'May 8, 2025', amount: '$29.99', status: 'Paid' },
                            { date: 'Apr 8, 2025', amount: '$29.99', status: 'Paid' },
                          ].map((invoice, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between p-3 bg-slate-700/30 border border-slate-600/30 rounded-lg"
                            >
                              <div>
                                <p className="text-white font-medium">{invoice.date}</p>
                                <p className="text-slate-400 text-sm">Pro Plan Monthly</p>
                              </div>
                              <div className="text-right">
                                <p className="text-white font-medium">{invoice.amount}</p>
                                <p className="text-green-400 text-sm">{invoice.status}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : currentView === 'binder' ? (
          <>
            {/* Captain's Binder Header */}
            <div className="p-6 border-b border-slate-700/50 bg-slate-800/30">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white flex items-center">
                    <FolderOpen className="w-8 h-8 mr-3 text-orange-500" />
                    CAPTAIN'S BINDER
                  </h2>
                  <p className="text-slate-400">
                    Organize and access your boat's documentation and manuals
                  </p>
                </div>
                <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
                  <Plus className="w-5 h-5" />
                  <span>Upload Document</span>
                </button>
              </div>
            </div>

            {/* Captain's Binder Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="max-w-6xl mx-auto">
                {/* Storage Usage */}
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white">Storage Usage</h3>
                    <span className="text-sm text-slate-400">2.4 GB / 10 GB used</span>
                  </div>
                  <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                    <div className="w-1/4 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                  </div>
                </div>

                {/* Document Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {[
                    {
                      name: 'Engine Manuals',
                      count: 12,
                      icon: '🔧',
                      color: 'from-orange-500 to-red-500',
                      files: [
                        '2019 MerCruiser 350 Manual.pdf',
                        'Yanmar 40HP Service Guide.pdf',
                        'Mercury 300HP Operator Manual.pdf',
                      ],
                    },
                    {
                      name: 'Electronics',
                      count: 8,
                      icon: '📱',
                      color: 'from-blue-500 to-cyan-500',
                      files: [
                        'Garmin 7612xsv Manual.pdf',
                        'Raymarine Axiom Installation.pdf',
                        'VHF Radio Setup Guide.pdf',
                      ],
                    },
                    {
                      name: 'Safety Equipment',
                      count: 6,
                      icon: '🛟',
                      color: 'from-green-500 to-emerald-500',
                      files: [
                        'Life Jacket Inspection.pdf',
                        'Fire Extinguisher Service.pdf',
                        'EPIRB Registration.pdf',
                      ],
                    },
                    {
                      name: 'Insurance & Registration',
                      count: 4,
                      icon: '📄',
                      color: 'from-purple-500 to-pink-500',
                      files: [
                        'Boat Insurance Policy.pdf',
                        'Registration Certificate.pdf',
                        'Survey Report 2024.pdf',
                      ],
                    },
                    {
                      name: 'Maintenance Records',
                      count: 15,
                      icon: '📋',
                      color: 'from-yellow-500 to-orange-500',
                      files: [
                        'Engine Service Log.pdf',
                        'Bottom Paint Records.pdf',
                        'Generator Maintenance.pdf',
                      ],
                    },
                    {
                      name: 'Wiring Diagrams',
                      count: 7,
                      icon: '⚡',
                      color: 'from-indigo-500 to-purple-500',
                      files: [
                        'Electrical System Diagram.pdf',
                        'Navigation Light Wiring.pdf',
                        'Battery Bank Layout.pdf',
                      ],
                    },
                  ].map((category, index) => (
                    <div
                      key={index}
                      className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-200 cursor-pointer group"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-200`}
                        >
                          {category.icon}
                        </div>
                        <span className="text-sm text-slate-400">{category.count} files</span>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">{category.name}</h4>
                      <div className="space-y-1">
                        {category.files.slice(0, 2).map((file, fileIndex) => (
                          <p key={fileIndex} className="text-xs text-slate-400 truncate">
                            {file}
                          </p>
                        ))}
                        {category.files.length > 2 && (
                          <p className="text-xs text-slate-500">
                            +{category.files.length - 2} more files
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent Documents */}
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">Recent Documents</h3>
                    <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                      View All
                    </button>
                  </div>
                  <div className="space-y-4">
                    {[
                      {
                        name: '2024 Annual Survey Report.pdf',
                        category: 'Insurance & Registration',
                        size: '2.3 MB',
                        date: '2 days ago',
                        icon: '📄',
                      },
                      {
                        name: 'Engine Oil Change Log - June 2025.pdf',
                        category: 'Maintenance Records',
                        size: '856 KB',
                        date: '1 week ago',
                        icon: '📋',
                      },
                      {
                        name: 'Garmin 7612xsv Installation Manual.pdf',
                        category: 'Electronics',
                        size: '4.1 MB',
                        date: '2 weeks ago',
                        icon: '📱',
                      },
                      {
                        name: 'Bottom Paint Application Photos.zip',
                        category: 'Maintenance Records',
                        size: '12.5 MB',
                        date: '3 weeks ago',
                        icon: '📸',
                      },
                      {
                        name: 'VHF Radio DSC Programming Guide.pdf',
                        category: 'Electronics',
                        size: '1.2 MB',
                        date: '1 month ago',
                        icon: '📻',
                      },
                    ].map((doc, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-4 p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-colors duration-200 cursor-pointer group"
                      >
                        <div className="w-10 h-10 bg-slate-600/50 rounded-lg flex items-center justify-center text-lg group-hover:bg-slate-600 transition-colors duration-200">
                          {doc.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-white truncate">{doc.name}</h4>
                          <p className="text-sm text-slate-400">
                            {doc.category} • {doc.size}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-slate-400">{doc.date}</p>
                          <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-blue-400 hover:text-blue-300 text-sm">
                            Open
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  <button className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-left hover:bg-blue-500/20 transition-colors duration-200 group">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                      <Plus className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Upload Documents</h4>
                    <p className="text-sm text-slate-400">
                      Add manuals, receipts, and maintenance records
                    </p>
                  </button>

                  <button className="p-6 bg-green-500/10 border border-green-500/20 rounded-2xl text-left hover:bg-green-500/20 transition-colors duration-200 group">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Scan Documents</h4>
                    <p className="text-sm text-slate-400">
                      Use your camera to scan and store documents
                    </p>
                  </button>

                  <button className="p-6 bg-orange-500/10 border border-orange-500/20 rounded-2xl text-left hover:bg-orange-500/20 transition-colors duration-200 group">
                    <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                      <FolderOpen className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Organize Files</h4>
                    <p className="text-sm text-slate-400">
                      Create folders and organize your documentation
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : currentView === 'boats' ? (
          <>
            {/* My Boats Header */}
            <div className="p-6 border-b border-slate-700/50 bg-slate-800/30">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white flex items-center">
                    <Ship className="w-8 h-8 mr-3 text-orange-500" />
                    MY FLEET
                  </h2>
                  <p className="text-slate-400">
                    Manage your boats, systems, and maintenance schedules
                  </p>
                </div>
                <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
                  <Plus className="w-5 h-5" />
                  <span>Add New Boat</span>
                </button>
              </div>
            </div>

            {/* My Boats Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-1 gap-6">
                {fleetData.map((boat) => (
                  <div
                    key={boat.id}
                    className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:border-slate-600/50 transition-colors duration-200"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-4 h-4 rounded-full ${
                            boat.status === 'active'
                              ? 'bg-green-400'
                              : boat.status === 'seasonal'
                                ? 'bg-yellow-400'
                                : 'bg-red-400'
                          }`}
                        ></div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{boat.name}</h3>
                          <p className="text-lg text-slate-400">{boat.model}</p>
                        </div>
                      </div>
                      <button className="text-slate-400 hover:text-white p-2">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-base">
                      <div className="space-y-1">
                        <p className="text-slate-400">Year:</p>
                        <p className="text-white font-medium text-lg">{boat.year}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-slate-400">Engine:</p>
                        <p className="text-white font-medium text-lg">{boat.engine}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-slate-400">Last Service:</p>
                        <p className="text-white font-medium text-lg">{boat.lastService}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-slate-400">Status:</p>
                        <p
                          className={`capitalize font-medium text-lg ${
                            boat.status === 'active'
                              ? 'text-green-400'
                              : boat.status === 'seasonal'
                                ? 'text-yellow-400'
                                : 'text-red-400'
                          }`}
                        >
                          {boat.status}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Chat Header */}
            <div className="p-6 border-b border-slate-700/50 bg-slate-800/30">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">MARINE AI ASSISTANT</h2>
                  <p className="text-slate-400">
                    Get instant help with boat troubleshooting and maintenance
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-slate-300">AI Online</span>
                </div>
              </div>
            </div>

            {/* Chat Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {selectedChat === 'new-chat' && messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-start pt-8">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <MessageSquare className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Welcome to SeaSure AI</h3>
                    <p className="text-slate-400 max-w-md">
                      Your intelligent marine assistant is ready to help with troubleshooting,
                      maintenance, and expert guidance.
                    </p>
                  </div>
                  <div className="w-full max-w-4xl">
                    <h4 className="text-lg font-semibold text-white mb-4 text-center">
                      Common Questions:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-8">
                      {quickSuggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-left text-slate-300 hover:text-white hover:bg-slate-700/50 hover:border-slate-600 transition-all duration-200"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 pb-8">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-3xl ${message.type === 'user' ? 'order-2' : 'order-1'}`}
                      >
                        <div
                          className={`flex items-start space-x-3 ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}
                        >
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              message.type === 'user'
                                ? 'bg-gradient-to-br from-blue-500 to-purple-500'
                                : 'bg-gradient-to-br from-orange-500 to-red-500'
                            }`}
                          >
                            {message.type === 'user' ? (
                              <User className="w-4 h-4 text-white" />
                            ) : (
                              <Compass className="w-4 h-4 text-white" />
                            )}
                          </div>
                          <div
                            className={`rounded-2xl p-4 ${
                              message.type === 'user'
                                ? 'bg-blue-500 text-white'
                                : 'bg-slate-800/50 border border-slate-700/50 text-slate-200'
                            }`}
                          >
                            <p>{message.content}</p>
                            <p
                              className={`text-xs mt-2 ${
                                message.type === 'user' ? 'text-blue-100' : 'text-slate-400'
                              }`}
                            >
                              {message.timestamp.toLocaleTimeString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                          <Compass className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-4">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                              style={{ animationDelay: '0.1s' }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                              style={{ animationDelay: '0.2s' }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-6 border-t border-slate-700/50 bg-slate-800/30">
              <div className="relative">
                <input
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Describe your boat issue or ask a question..."
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 pr-12 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!currentMessage.trim()}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-blue-500 hover:bg-blue-600 disabled:bg-slate-600 disabled:cursor-not-allowed text-white rounded-lg transition-colors duration-200"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="flex space-x-2 mt-3">
                <button className="flex-1 flex flex-col items-center space-y-2 px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors duration-200 min-h-[80px]">
                  <FileUp className="w-6 h-6" />
                  <span className="text-sm text-center leading-tight">
                    Add
                    <br />
                    File
                  </span>
                </button>
                <button className="flex-1 flex flex-col items-center space-y-2 px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors duration-200 min-h-[80px]">
                  <Camera className="w-6 h-6" />
                  <span className="text-sm text-center leading-tight">
                    Add or take
                    <br />
                    picture
                  </span>
                </button>
                <button className="flex-1 flex flex-col items-center space-y-2 px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors duration-200 min-h-[80px]">
                  <Video className="w-6 h-6" />
                  <span className="text-sm text-center leading-tight">
                    Add or take
                    <br />
                    video
                  </span>
                </button>
                <button className="flex-1 flex flex-col items-center space-y-2 px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors duration-200 min-h-[80px]">
                  <Mic className="w-6 h-6" />
                  <span className="text-sm text-center leading-tight">
                    Go Live with
                    <br />
                    SeaSure
                  </span>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SeaSureChatInterface;
