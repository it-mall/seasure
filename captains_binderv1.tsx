import React, { useState, useRef, useEffect } from 'react';
import { 
  FolderOpen, 
  FileText, 
  Image, 
  Video, 
  Upload, 
  Search, 
  Plus, 
  ChevronRight, 
  ChevronDown, 
  MessageSquare, 
  Send, 
  Filter, 
  Download, 
  Trash2, 
  Eye, 
  Bot, 
  Compass, 
  Wrench, 
  Battery, 
  Zap, 
  Monitor, 
  Droplets, 
  Wind, 
  Ship, 
  Settings,
  Calendar,
  Tag,
  Star,
  Clock,
  User,
  FileIcon,
  Folder,
  Grid3X3,
  List,
  SortAsc,
  MoreVertical,
  X,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';

const CaptainsBinder = () => {
  const [selectedBoat, setSelectedBoat] = useState('buddy-iii');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAgent, setSelectedAgent] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('name'); // 'name', 'date', 'type', 'size'
  const [expandedFolders, setExpandedFolders] = useState(new Set(['master']));
  const [selectedFiles, setSelectedFiles] = useState(new Set());
  const [showNewFolderDialog, setShowNewFolderDialog] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const [newFolderParent, setNewFolderParent] = useState('master');
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const fileInputRef = useRef(null);

  const boats = [
    { id: 'buddy-iii', name: 'Buddy III', type: 'Sea Ray 350' },
    { id: 'ocean-dream', name: 'Ocean Dream', type: 'Catalina 385' },
    { id: 'wave-runner', name: 'Wave Runner', type: 'Boston Whaler 280' }
  ];

  const agents = [
    { id: 'all', name: 'All Categories', icon: Grid3X3, color: 'bg-slate-500' },
    { id: 'master', name: 'Master Agent', icon: Compass, color: 'bg-blue-500', description: 'General boat documentation and guides' },
    { id: 'engine', name: 'Engine Agent', icon: Wrench, color: 'bg-red-500', description: 'Engine manuals, maintenance logs, and troubleshooting' },
    { id: 'battery', name: 'Battery Systems', icon: Battery, color: 'bg-green-500', description: 'Electrical systems, batteries, and charging equipment' },
    { id: 'generator', name: 'Generator Agent', icon: Zap, color: 'bg-yellow-500', description: 'Generator manuals, maintenance, and power systems' },
    { id: 'electronics', name: 'Electronics Agent', icon: Monitor, color: 'bg-purple-500', description: 'Navigation, communication, and electronic systems' },
    { id: 'water', name: 'Water Systems', icon: Droplets, color: 'bg-cyan-500', description: 'Plumbing, pumps, and water management systems' },
    { id: 'hvac', name: 'HVAC Agent', icon: Wind, color: 'bg-orange-500', description: 'Heating, ventilation, and air conditioning systems' },
    { id: 'hull', name: 'Hull Agent', icon: Ship, color: 'bg-indigo-500', description: 'Hull, structural components, and safety systems' },
    { id: 'running-gear', name: 'Running Gear', icon: Settings, color: 'bg-pink-500', description: 'Propulsion, steering, and drive systems' }
  ];

  // Sample file structure
  const [fileStructure, setFileStructure] = useState({
    master: {
      files: [
        { id: 1, name: 'Owners Manual - Sea Ray 350.pdf', type: 'pdf', size: '15.2 MB', date: '2024-01-15', agent: 'master', starred: true },
        { id: 2, name: 'Warranty Information.pdf', type: 'pdf', size: '2.1 MB', date: '2024-01-10', agent: 'master' },
        { id: 3, name: 'Insurance Documents.pdf', type: 'pdf', size: '1.8 MB', date: '2024-02-01', agent: 'master' }
      ],
      folders: {
        'maintenance-logs': {
          name: 'Maintenance Logs',
          files: [
            { id: 4, name: 'Annual Service 2024.pdf', type: 'pdf', size: '3.2 MB', date: '2024-05-15', agent: 'master' },
            { id: 5, name: 'Hull Inspection Report.pdf', type: 'pdf', size: '8.7 MB', date: '2024-03-20', agent: 'master' }
          ]
        },
        'certificates': {
          name: 'Certificates & Documentation',
          files: [
            { id: 6, name: 'Registration Certificate.pdf', type: 'pdf', size: '1.2 MB', date: '2024-01-01', agent: 'master' },
            { id: 7, name: 'Safety Inspection.pdf', type: 'pdf', size: '2.8 MB', date: '2024-04-10', agent: 'master' }
          ]
        }
      }
    },
    engine: {
      files: [
        { id: 8, name: 'MerCruiser 350 Service Manual.pdf', type: 'pdf', size: '25.4 MB', date: '2024-01-15', agent: 'engine', starred: true },
        { id: 9, name: 'Engine Oil Analysis Report.pdf', type: 'pdf', size: '1.5 MB', date: '2024-05-20', agent: 'engine' },
        { id: 10, name: 'Fuel System Diagram.jpg', type: 'image', size: '2.1 MB', date: '2024-02-10', agent: 'engine' }
      ],
      folders: {
        'maintenance': {
          name: 'Maintenance Records',
          files: [
            { id: 11, name: 'Oil Change Log 2024.xlsx', type: 'spreadsheet', size: '245 KB', date: '2024-06-01', agent: 'engine' },
            { id: 12, name: 'Filter Replacement Schedule.pdf', type: 'pdf', size: '1.1 MB', date: '2024-01-20', agent: 'engine' }
          ]
        },
        'troubleshooting': {
          name: 'Troubleshooting Guides',
          files: [
            { id: 13, name: 'Engine Overheating Checklist.pdf', type: 'pdf', size: '890 KB', date: '2024-03-15', agent: 'engine' },
            { id: 14, name: 'Starting Problems Video.mp4', type: 'video', size: '45.2 MB', date: '2024-04-05', agent: 'engine' }
          ]
        }
      }
    },
    battery: {
      files: [
        { id: 15, name: 'Battery Bank Wiring Diagram.pdf', type: 'pdf', size: '3.2 MB', date: '2024-02-01', agent: 'battery' },
        { id: 16, name: 'Charging System Manual.pdf', type: 'pdf', size: '8.9 MB', date: '2024-01-25', agent: 'battery', starred: true }
      ],
      folders: {
        'installation': {
          name: 'Installation Guides',
          files: [
            { id: 17, name: 'Lithium Battery Install.pdf', type: 'pdf', size: '5.4 MB', date: '2024-03-10', agent: 'battery' }
          ]
        }
      }
    },
    generator: {
      files: [
        { id: 18, name: 'Kohler 7.3kW Generator Manual.pdf', type: 'pdf', size: '12.1 MB', date: '2024-01-15', agent: 'generator', starred: true }
      ],
      folders: {}
    },
    electronics: {
      files: [
        { id: 19, name: 'Garmin Chartplotter Manual.pdf', type: 'pdf', size: '18.7 MB', date: '2024-02-15', agent: 'electronics' },
        { id: 20, name: 'VHF Radio Setup Guide.pdf', type: 'pdf', size: '4.2 MB', date: '2024-02-20', agent: 'electronics' }
      ],
      folders: {
        'navigation': {
          name: 'Navigation Equipment',
          files: [
            { id: 21, name: 'Chart Updates 2024.zip', type: 'archive', size: '156 MB', date: '2024-05-01', agent: 'electronics' }
          ]
        }
      }
    },
    water: {
      files: [
        { id: 22, name: 'Freshwater System Diagram.pdf', type: 'pdf', size: '2.8 MB', date: '2024-01-30', agent: 'water' }
      ],
      folders: {}
    },
    hvac: {
      files: [
        { id: 23, name: 'Marine Air AC Manual.pdf', type: 'pdf', size: '9.1 MB', date: '2024-02-10', agent: 'hvac' }
      ],
      folders: {}
    },
    hull: {
      files: [
        { id: 24, name: 'Hull Warranty Documentation.pdf', type: 'pdf', size: '6.5 MB', date: '2024-01-05', agent: 'hull' }
      ],
      folders: {}
    },
    'running-gear': {
      files: [
        { id: 25, name: 'Propeller Specifications.pdf', type: 'pdf', size: '1.9 MB', date: '2024-02-25', agent: 'running-gear' }
      ],
      folders: {}
    }
  });

  const getFileIcon = (type) => {
    switch (type) {
      case 'pdf': return <FileText className="w-5 h-5 text-red-400" />;
      case 'image': return <Image className="w-5 h-5 text-blue-400" />;
      case 'video': return <Video className="w-5 h-5 text-purple-400" />;
      case 'spreadsheet': return <FileIcon className="w-5 h-5 text-green-400" />;
      case 'archive': return <FileIcon className="w-5 h-5 text-yellow-400" />;
      default: return <FileText className="w-5 h-5 text-slate-400" />;
    }
  };

  const getAllFiles = () => {
    let allFiles = [];
    Object.keys(fileStructure).forEach(agentKey => {
      if (selectedAgent === 'all' || selectedAgent === agentKey) {
        // Add files from root of agent category
        fileStructure[agentKey].files.forEach(file => {
          allFiles.push({ ...file, path: agents.find(a => a.id === agentKey)?.name || agentKey });
        });
        
        // Add files from folders
        Object.keys(fileStructure[agentKey].folders).forEach(folderKey => {
          fileStructure[agentKey].folders[folderKey].files.forEach(file => {
            allFiles.push({ 
              ...file, 
              path: `${agents.find(a => a.id === agentKey)?.name || agentKey} / ${fileStructure[agentKey].folders[folderKey].name}`
            });
          });
        });
      }
    });

    // Filter by search query
    if (searchQuery) {
      allFiles = allFiles.filter(file => 
        file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        file.path.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort files
    allFiles.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'date':
          return new Date(b.date) - new Date(a.date);
        case 'type':
          return a.type.localeCompare(b.type);
        case 'size':
          return parseFloat(b.size) - parseFloat(a.size);
        default:
          return 0;
      }
    });

    return allFiles;
  };

  const toggleFolder = (agentId) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(agentId)) {
      newExpanded.delete(agentId);
    } else {
      newExpanded.add(agentId);
    }
    setExpandedFolders(newExpanded);
  };

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    // Here you would handle the file upload
    console.log('Files to upload:', files);
  };

  const createNewFolder = () => {
    if (newFolderName.trim()) {
      const agentKey = newFolderParent;
      const folderKey = newFolderName.toLowerCase().replace(/\s+/g, '-');
      
      setFileStructure(prev => ({
        ...prev,
        [agentKey]: {
          ...prev[agentKey],
          folders: {
            ...prev[agentKey].folders,
            [folderKey]: {
              name: newFolderName,
              files: []
            }
          }
        }
      }));
      
      setNewFolderName('');
      setShowNewFolderDialog(false);
    }
  };

  const handleSendChatMessage = () => {
    if (!chatMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: chatMessage,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    setChatMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        type: 'ai',
        content: `I can help you find information in your Captain's Binder. Based on your question "${chatMessage}", I'm searching through your ${getAllFiles().length} documents across all agent categories. What specific information are you looking for?`,
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="h-screen bg-slate-900 text-white flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-slate-700/50 bg-slate-800/30">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
              <FolderOpen className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">CAPTAIN'S BINDER</h1>
              <p className="text-slate-400">Organized knowledge base for your boat systems</p>
            </div>
          </div>
          
          {/* Boat Selector */}
          <div className="flex items-center space-x-4">
            <select 
              value={selectedBoat}
              onChange={(e) => setSelectedBoat(e.target.value)}
              className="bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {boats.map(boat => (
                <option key={boat.id} value={boat.id}>
                  {boat.name} ({boat.type})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Search and Controls */}
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search across all files and documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg pl-10 pr-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
              className="p-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors duration-200"
              title={`Switch to ${viewMode === 'grid' ? 'list' : 'grid'} view`}
            >
              {viewMode === 'grid' ? <List className="w-5 h-5" /> : <Grid3X3 className="w-5 h-5" />}
            </button>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-slate-700 border border-slate-600 rounded-lg px-3 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="name">Sort by Name</option>
              <option value="date">Sort by Date</option>
              <option value="type">Sort by Type</option>
              <option value="size">Sort by Size</option>
            </select>
            
            <button
              onClick={handleFileUpload}
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
            >
              <Upload className="w-5 h-5" />
              <span>Upload Files</span>
            </button>
            
            <button
              onClick={() => setShowNewFolderDialog(true)}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              <span>New Folder</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Agent Categories Sidebar */}
        <div className="w-80 bg-slate-800/50 border-r border-slate-700/50 overflow-y-auto">
          <div className="p-4">
            <h3 className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wide">
              Agent Categories
            </h3>
            <div className="space-y-2">
              {agents.map(agent => {
                const IconComponent = agent.icon;
                const isSelected = selectedAgent === agent.id;
                const fileCount = agent.id === 'all' ? getAllFiles().length : 
                  (fileStructure[agent.id]?.files?.length || 0) + 
                  Object.values(fileStructure[agent.id]?.folders || {}).reduce((acc, folder) => acc + folder.files.length, 0);
                
                return (
                  <button
                    key={agent.id}
                    onClick={() => setSelectedAgent(agent.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 ${
                      isSelected 
                        ? 'bg-orange-500/20 border border-orange-500/30 text-white' 
                        : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                    }`}
                  >
                    <div className={`w-10 h-10 ${agent.color} rounded-lg flex items-center justify-center`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="font-medium">{agent.name}</p>
                      <p className="text-xs text-slate-400">{fileCount} files</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6">
            {selectedAgent === 'all' ? (
              // All Files View
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-white">
                    All Files ({getAllFiles().length})
                  </h2>
                  <div className="text-sm text-slate-400">
                    {searchQuery && `Filtered by: "${searchQuery}"`}
                  </div>
                </div>
                
                {viewMode === 'grid' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {getAllFiles().map(file => (
                      <div 
                        key={file.id} 
                        className="p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-slate-600/50 transition-colors duration-200 cursor-pointer"
                      >
                        <div className="flex items-start justify-between mb-3">
                          {getFileIcon(file.type)}
                          <button className="text-slate-400 hover:text-white">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-medium text-white text-sm truncate" title={file.name}>
                            {file.name}
                          </h4>
                          <p className="text-xs text-slate-400 truncate" title={file.path}>
                            {file.path}
                          </p>
                          <div className="flex items-center justify-between text-xs text-slate-500">
                            <span>{file.size}</span>
                            <span>{new Date(file.date).toLocaleDateString()}</span>
                          </div>
                          {file.starred && (
                            <div className="flex justify-end">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-2">
                    {getAllFiles().map(file => (
                      <div 
                        key={file.id}
                        className="flex items-center space-x-4 p-3 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-slate-600/50 transition-colors duration-200 cursor-pointer"
                      >
                        <div className="flex-shrink-0">
                          {getFileIcon(file.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-medium text-white truncate">{file.name}</h4>
                            {file.starred && <Star className="w-4 h-4 text-yellow-400 fill-current flex-shrink-0" />}
                          </div>
                          <p className="text-sm text-slate-400 truncate">{file.path}</p>
                        </div>
                        <div className="flex-shrink-0 text-right">
                          <p className="text-sm text-slate-300">{file.size}</p>
                          <p className="text-xs text-slate-500">{new Date(file.date).toLocaleDateString()}</p>
                        </div>
                        <button className="flex-shrink-0 text-slate-400 hover:text-white">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              // Agent-Specific View
              <div>
                {(() => {
                  const agent = agents.find(a => a.id === selectedAgent);
                  const IconComponent = agent.icon;
                  const agentData = fileStructure[selectedAgent] || { files: [], folders: {} };
                  
                  return (
                    <div>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`w-12 h-12 ${agent.color} rounded-xl flex items-center justify-center`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-white">{agent.name}</h2>
                          <p className="text-slate-400">{agent.description}</p>
                        </div>
                      </div>

                      {/* Root Files */}
                      {agentData.files.length > 0 && (
                        <div className="mb-8">
                          <h3 className="text-lg font-semibold text-white mb-4">Files</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {agentData.files.map(file => (
                              <div 
                                key={file.id} 
                                className="p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-slate-600/50 transition-colors duration-200 cursor-pointer"
                              >
                                <div className="flex items-start justify-between mb-3">
                                  {getFileIcon(file.type)}
                                  <button className="text-slate-400 hover:text-white">
                                    <MoreVertical className="w-4 h-4" />
                                  </button>
                                </div>
                                <div className="space-y-2">
                                  <h4 className="font-medium text-white text-sm truncate" title={file.name}>
                                    {file.name}
                                  </h4>
                                  <div className="flex items-center justify-between text-xs text-slate-500">
                                    <span>{file.size}</span>
                                    <span>{new Date(file.date).toLocaleDateString()}</span>
                                  </div>
                                  {file.starred && (
                                    <div className="flex justify-end">
                                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Folders */}
                      {Object.keys(agentData.folders).length > 0 && (
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-4">Folders</h3>
                          <div className="space-y-4">
                            {Object.entries(agentData.folders).map(([folderKey, folder]) => {
                              const isExpanded = expandedFolders.has(`${selectedAgent}-${folderKey}`);
                              
                              return (
                                <div key={folderKey} className="bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden">
                                  <button
                                    onClick={() => {
                                      const folderFullKey = `${selectedAgent}-${folderKey}`;
                                      const newExpanded = new Set(expandedFolders);
                                      if (newExpanded.has(folderFullKey)) {
                                        newExpanded.delete(folderFullKey);
                                      } else {
                                        newExpanded.add(folderFullKey);
                                      }
                                      setExpandedFolders(newExpanded);
                                    }}
                                    className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-700/30 transition-colors duration-200"
                                  >
                                    <div className="flex items-center space-x-3">
                                      <Folder className="w-5 h-5 text-orange-400" />
                                      <span className="font-medium text-white">{folder.name}</span>
                                      <span className="text-sm text-slate-400">({folder.files.length} files)</span>
                                    </div>
                                    {isExpanded ? (
                                      <ChevronDown className="w-5 h-5 text-slate-400" />
                                    ) : (
                                      <ChevronRight className="w-5 h-5 text-slate-400" />
                                    )}
                                  </button>
                                  
                                  {isExpanded && (
                                    <div className="p-4 border-t border-slate-700/50">
                                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {folder.files.map(file => (
                                          <div 
                                            key={file.id} 
                                            className="p-3 bg-slate-700/30 border border-slate-600/30 rounded-lg hover:border-slate-500/50 transition-colors duration-200 cursor-pointer"
                                          >
                                            <div className="flex items-start justify-between mb-2">
                                              {getFileIcon(file.type)}
                                              <button className="text-slate-400 hover:text-white">
                                                <MoreVertical className="w-4 h-4" />
                                              </button>
                                            </div>
                                            <div className="space-y-1">
                                              <h5 className="font-medium text-white text-sm truncate" title={file.name}>
                                                {file.name}
                                              </h5>
                                              <div className="flex items-center justify-between text-xs text-slate-500">
                                                <span>{file.size}</span>
                                                <span>{new Date(file.date).toLocaleDateString()}</span>
                                              </div>
                                              {file.starred && (
                                                <div className="flex justify-end">
                                                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                </div>
                                              )}
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Empty State */}
                      {agentData.files.length === 0 && Object.keys(agentData.folders).length === 0 && (
                        <div className="text-center py-12">
                          <div className={`w-16 h-16 ${agent.color} rounded-2xl flex items-center justify-center mx-auto mb-4 opacity-50`}>
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-lg font-medium text-white mb-2">No files yet</h3>
                          <p className="text-slate-400 mb-6">Upload manuals, guides, and documentation for {agent.name.toLowerCase()}</p>
                          <button
                            onClick={handleFileUpload}
                            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2 mx-auto"
                          >
                            <Upload className="w-5 h-5" />
                            <span>Upload First File</span>
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>
            )}
          </div>

          {/* Chat Interface */}
          <div className={`border-t border-slate-700/50 bg-slate-800/30 transition-all duration-300 ${chatOpen ? 'h-96' : 'h-16'}`}>
            <div className="p-4">
              <button
                onClick={() => setChatOpen(!chatOpen)}
                className="w-full flex items-center justify-between text-left hover:bg-slate-700/30 p-2 rounded-lg transition-colors duration-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Chat with Captain's Binder</p>
                    <p className="text-xs text-slate-400">Ask questions about your documents</p>
                  </div>
                </div>
                {chatOpen ? (
                  <X className="w-5 h-5 text-slate-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>

              {chatOpen && (
                <div className="mt-4 flex flex-col h-80">
                  {/* Chat Messages */}
                  <div className="flex-1 overflow-y-auto mb-4 space-y-3">
                    {chatMessages.length === 0 ? (
                      <div className="text-center py-8">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <MessageSquare className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-medium text-white mb-2">Ask me anything about your documents</h4>
                        <p className="text-sm text-slate-400">I can help you find specific information, explain procedures, or suggest relevant documents.</p>
                      </div>
                    ) : (
                      chatMessages.map(message => (
                        <div
                          key={message.id}
                          className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`max-w-xs lg:max-w-md ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                            <div className={`flex items-start space-x-2 ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                              <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                                message.type === 'user' 
                                  ? 'bg-gradient-to-br from-orange-500 to-red-500' 
                                  : 'bg-gradient-to-br from-blue-500 to-cyan-500'
                              }`}>
                                {message.type === 'user' ? (
                                  <User className="w-3 h-3 text-white" />
                                ) : (
                                  <Bot className="w-3 h-3 text-white" />
                                )}
                              </div>
                              <div className={`rounded-xl p-3 ${
                                message.type === 'user' 
                                  ? 'bg-orange-500 text-white' 
                                  : 'bg-slate-700 text-slate-200'
                              }`}>
                                <p className="text-sm">{message.content}</p>
                                <p className={`text-xs mt-1 ${
                                  message.type === 'user' ? 'text-orange-100' : 'text-slate-400'
                                }`}>
                                  {message.timestamp.toLocaleTimeString()}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                    
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="flex items-start space-x-2">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                            <Bot className="w-3 h-3 text-white" />
                          </div>
                          <div className="bg-slate-700 rounded-xl p-3">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Chat Input */}
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendChatMessage()}
                      placeholder="Ask about your documents..."
                      className="flex-1 bg-slate-700/50 border border-slate-600/50 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-sm"
                    />
                    <button
                      onClick={handleSendChatMessage}
                      disabled={!chatMessage.trim()}
                      className="px-3 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-slate-600 disabled:cursor-not-allowed text-white rounded-lg transition-colors duration-200"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.mp4,.mov,.xlsx,.xls,.zip"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* New Folder Dialog */}
      {showNewFolderDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 w-96">
            <h3 className="text-lg font-bold text-white mb-4">Create New Folder</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Folder Name
                </label>
                <input
                  type="text"
                  value={newFolderName}
                  onChange={(e) => setNewFolderName(e.target.value)}
                  placeholder="Enter folder name..."
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Parent Category
                </label>
                <select
                  value={newFolderParent}
                  onChange={(e) => setNewFolderParent(e.target.value)}
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50"
                >
                  {agents.filter(agent => agent.id !== 'all').map(agent => (
                    <option key={agent.id} value={agent.id}>
                      {agent.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowNewFolderDialog(false)}
                className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={createNewFolder}
                disabled={!newFolderName.trim()}
                className="flex-1 px-4 py-2 bg-orange-500 hover:bg-orange-600 disabled:bg-slate-600 disabled:cursor-not-allowed text-white rounded-lg transition-colors duration-200"
              >
                Create Folder
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaptainsBinder;