import React, { useState } from 'react';
import { Search, Shield, FileText, TrendingUp, Mic, Share2, DollarSign, BookOpen, ChevronDown, ChevronRight, ExternalLink } from 'lucide-react';

const JournalistToolbox = () => {
  const [activeWorkflow, setActiveWorkflow] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedTool, setExpandedTool] = useState(null);

  const workflows = [
    {
      id: 'safety',
      icon: Shield,
      title: 'Stay Safe First',
      color: 'bg-red-50 border-red-200 text-red-900',
      tools: [
        {
          name: 'Signal',
          url: 'https://signal.org/',
          description: 'Encrypted messaging for secure communication with sources',
          howTo: '1. Download from signal.org\n2. Install on phone\n3. Verify contacts\n4. Enable disappearing messages',
          safety: 'HIGH - Trusted by journalists worldwide'
        },
        {
          name: 'Outline VPN',
          url: 'https://getoutline.org/',
          description: 'Set up your own personal VPN for secure internet access',
          howTo: '1. Visit getoutline.org\n2. Follow setup guide\n3. Install on devices\n4. Connect when needed',
          safety: 'HIGH - Open-source, Google-backed'
        },
        {
          name: 'Project Shield',
          url: 'https://projectshield.withgoogle.com/',
          description: 'Protect your website from DDoS attacks',
          howTo: '1. Apply at projectshield.withgoogle.com\n2. Verify ownership\n3. Configure DNS\n4. Monitor dashboard',
          safety: 'HIGH - Free Google protection'
        }
      ]
    },
    {
      id: 'research',
      icon: Search,
      title: 'Find & Verify Information',
      color: 'bg-blue-50 border-blue-200 text-blue-900',
      tools: [
        {
          name: 'Google Pinpoint',
          url: 'https://journaliststudio.google.com/pinpoint/',
          description: 'AI-powered tool to analyze large document collections',
          howTo: '1. Visit journaliststudio.google.com\n2. Upload documents\n3. Search for keywords\n4. Find connections',
          safety: 'MEDIUM - Google account required'
        },
        {
          name: 'Google Trends',
          url: 'https://trends.google.com/',
          description: 'Track search interest and emerging stories',
          howTo: '1. Go to trends.google.com\n2. Enter topic/keyword\n3. Select region and timeframe\n4. Compare trends',
          safety: 'HIGH - No account needed'
        },
        {
          name: 'Perplexity AI',
          url: 'https://www.perplexity.ai/',
          description: 'AI search with sourced answers for quick research',
          howTo: '1. Visit perplexity.ai\n2. Type your question\n3. Review sources\n4. Follow citations',
          safety: 'MEDIUM - Check sources carefully'
        },
        {
          name: 'Visualping',
          url: 'https://visualping.io/',
          description: 'Monitor websites for changes (government, courts, etc.)',
          howTo: '1. Sign up at visualping.io\n2. Enter URL to monitor\n3. Set check frequency\n4. Get email alerts',
          safety: 'HIGH - Passive monitoring'
        },
        {
          name: 'Google Fact Check Explorer',
          url: 'https://toolbox.google.com/factcheck/explorer',
          description: 'Search database of fact-checks worldwide',
          howTo: '1. Visit fact check explorer\n2. Enter claim or topic\n3. Review results\n4. Check original sources',
          safety: 'HIGH - Aggregates verified fact-checks'
        },
        {
          name: 'TinEye',
          url: 'https://tineye.com/',
          description: 'Reverse image search to verify photo origins',
          howTo: '1. Go to tineye.com\n2. Upload image or paste URL\n3. Review matches\n4. Check earliest use',
          safety: 'HIGH - Privacy-focused'
        },
        {
          name: 'OSINT Framework',
          url: 'https://osintframework.com/',
          description: 'Directory of open-source investigation tools',
          howTo: '1. Visit osintframework.com\n2. Browse categories\n3. Click tool name\n4. Use external tools',
          safety: 'VARIES - Check each tool individually'
        }
      ]
    },
    {
      id: 'data',
      icon: TrendingUp,
      title: 'Analyze Data',
      color: 'bg-green-50 border-green-200 text-green-900',
      tools: [
        {
          name: 'Datawrapper',
          url: 'https://www.datawrapper.de/',
          description: 'Create charts and maps with no coding',
          howTo: '1. Sign up at datawrapper.de\n2. Upload data (CSV/Excel)\n3. Choose chart type\n4. Customize and embed',
          safety: 'HIGH - Widely used by newsrooms'
        },
        {
          name: 'Flourish',
          url: 'https://flourish.studio/',
          description: 'Interactive visualizations and data stories',
          howTo: '1. Create account at flourish.studio\n2. Select template\n3. Upload data\n4. Customize design',
          safety: 'HIGH - Professional tool'
        },
        {
          name: 'Tableau Public',
          url: 'https://public.tableau.com/',
          description: 'Complex interactive data visualizations',
          howTo: '1. Download Tableau Public\n2. Connect data source\n3. Drag-drop to create viz\n4. Publish online',
          safety: 'MEDIUM - Data becomes public'
        }
      ]
    },
    {
      id: 'audio',
      icon: Mic,
      title: 'Record & Edit Audio',
      color: 'bg-purple-50 border-purple-200 text-purple-900',
      tools: [
        {
          name: 'oTranscribe',
          url: 'https://otranscribe.com/',
          description: 'Simple audio transcription in browser',
          howTo: '1. Visit otranscribe.com\n2. Upload audio file\n3. Use keyboard shortcuts\n4. Export text',
          safety: 'HIGH - Works offline in browser'
        },
        {
          name: 'Descript',
          url: 'https://www.descript.com/',
          description: 'Edit audio/video by editing text',
          howTo: '1. Sign up at descript.com\n2. Upload media\n3. Auto-transcribe (free tier)\n4. Edit like a document',
          safety: 'MEDIUM - Account required, limited free tier'
        },
        {
          name: 'Otter.ai',
          url: 'https://otter.ai/',
          description: 'Real-time transcription for interviews',
          howTo: '1. Create account at otter.ai\n2. Record or upload audio\n3. Get instant transcript\n4. Edit and export',
          safety: 'MEDIUM - Free tier available'
        }
      ]
    },
    {
      id: 'writing',
      icon: FileText,
      title: 'Write & Edit',
      color: 'bg-yellow-50 border-yellow-200 text-yellow-900',
      tools: [
        {
          name: 'Google Docs',
          url: 'https://docs.google.com/',
          description: 'Collaborative writing with version history',
          howTo: '1. Visit docs.google.com\n2. Create new document\n3. Share with collaborators\n4. Track changes',
          safety: 'HIGH - Industry standard'
        },
        {
          name: 'Grammarly',
          url: 'https://www.grammarly.com/',
          description: 'Grammar and style checking (free version)',
          howTo: '1. Install browser extension\n2. Sign up for free account\n3. Write anywhere online\n4. Accept suggestions',
          safety: 'MEDIUM - Sends text to servers'
        },
        {
          name: 'QuillBot',
          url: 'https://quillbot.com/',
          description: 'Paraphrase and improve writing',
          howTo: '1. Visit quillbot.com\n2. Paste text\n3. Choose mode\n4. Review suggestions',
          safety: 'MEDIUM - Free tier available'
        },
        {
          name: 'Persian Headline Generator',
          url: '#',
          description: 'Generate professional Persian headlines and leads',
          howTo: 'Use the built-in prompt system:\n1. Paste your news content\n2. Get 5 headline options\n3. Each with 40-word lead\n4. Optimized for SEO',
          safety: 'HIGH - Based on your custom prompt',
          isInternal: true
        }
      ]
    },
    {
      id: 'publish',
      icon: Share2,
      title: 'Publish & Share',
      color: 'bg-indigo-50 border-indigo-200 text-indigo-900',
      tools: [
        {
          name: 'Medium',
          url: 'https://medium.com/',
          description: 'Free blogging platform with built-in audience',
          howTo: '1. Create free account\n2. Write in clean editor\n3. Add tags for discovery\n4. Publish publicly',
          safety: 'MEDIUM - Owned by corporation'
        },
        {
          name: 'Substack',
          url: 'https://substack.com/',
          description: 'Newsletter platform for independent journalists',
          howTo: '1. Sign up at substack.com\n2. Customize your page\n3. Write posts\n4. Build subscriber list',
          safety: 'HIGH - Journalist-friendly'
        }
      ]
    },
    {
      id: 'income',
      icon: DollarSign,
      title: 'Support & Income',
      color: 'bg-orange-50 border-orange-200 text-orange-900',
      tools: [
        {
          name: 'Committee to Protect Journalists',
          url: 'https://cpj.org/',
          description: 'Emergency assistance and legal support',
          howTo: '1. Visit cpj.org\n2. Review assistance programs\n3. Apply if needed\n4. Access safety resources',
          safety: 'HIGH - Trusted NGO'
        },
        {
          name: 'Reporters Without Borders',
          url: 'https://rsf.org/',
          description: 'Global press freedom organization',
          howTo: '1. Visit rsf.org\n2. Find your country section\n3. Access resources\n4. Report violations',
          safety: 'HIGH - International support'
        }
      ]
    },
    {
      id: 'training',
      icon: BookOpen,
      title: 'Learn & Improve',
      color: 'bg-teal-50 border-teal-200 text-teal-900',
      tools: [
        {
          name: 'Google News Initiative',
          url: 'https://newsinitiative.withgoogle.com/training/',
          description: 'Free journalism courses and resources',
          howTo: '1. Visit GNI training center\n2. Browse course catalog\n3. Enroll for free\n4. Earn certificates',
          safety: 'HIGH - Industry-recognized'
        },
        {
          name: 'Poynter Online',
          url: 'https://www.poynter.org/',
          description: 'Journalism ethics and skills training',
          howTo: '1. Visit poynter.org\n2. Check free resources\n3. Join webinars\n4. Read latest guides',
          safety: 'HIGH - Respected institution'
        }
      ]
    }
  ];

  const filteredWorkflows = workflows.map(workflow => ({
    ...workflow,
    tools: workflow.tools.filter(tool =>
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(workflow => workflow.tools.length > 0);

  const toggleTool = (toolName) => {
    setExpandedTool(expandedTool === toolName ? null : toolName);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Free Toolbox for Journalists
          </h1>
          <p className="text-gray-600 mb-4">
            Zero-cost tools for independent journalists working under pressure
          </p>
          
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search tools..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Quick Start */}
        <div className="bg-red-100 border-2 border-red-300 rounded-lg p-4 mb-6">
          <h2 className="font-bold text-red-900 mb-2 flex items-center gap-2">
            <Shield size={20} />
            Start Here: Essential Safety Tools
          </h2>
          <p className="text-red-800 text-sm">
            Before using any other tools, secure your communications with Signal and set up a VPN.
          </p>
        </div>

        {/* Workflows */}
        {filteredWorkflows.map((workflow) => {
          const Icon = workflow.icon;
          const isActive = activeWorkflow === workflow.id;
          
          return (
            <div key={workflow.id} className="mb-4">
              <button
                onClick={() => setActiveWorkflow(isActive ? null : workflow.id)}
                className={`w-full ${workflow.color} border-2 rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={24} />
                  <h2 className="text-xl font-bold">{workflow.title}</h2>
                  <span className="text-sm opacity-75">({workflow.tools.length} tools)</span>
                </div>
                {isActive ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              </button>

              {isActive && (
                <div className="mt-2 space-y-2">
                  {workflow.tools.map((tool) => {
                    const isExpanded = expandedTool === tool.name;
                    
                    return (
                      <div key={tool.name} className="bg-white border border-gray-200 rounded-lg">
                        <button
                          onClick={() => toggleTool(tool.name)}
                          className="w-full p-4 text-left hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="font-bold text-gray-900 mb-1">{tool.name}</h3>
                              <p className="text-sm text-gray-600">{tool.description}</p>
                              <div className="mt-2 flex items-center gap-2">
                                <span className={`text-xs px-2 py-1 rounded ${
                                  tool.safety.startsWith('HIGH') 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                  {tool.safety}
                                </span>
                                {!tool.isInternal && (
                                  <a
                                    href={tool.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    Visit <ExternalLink size={14} />
                                  </a>
                                )}
                              </div>
                            </div>
                            {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                          </div>
                        </button>

                        {isExpanded && (
                          <div className="border-t border-gray-200 p-4 bg-gray-50">
                            <h4 className="font-semibold text-gray-900 mb-2">How to Use:</h4>
                            <pre className="text-sm text-gray-700 whitespace-pre-wrap font-sans">
                              {tool.howTo}
                            </pre>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        {/* Footer */}
        <div className="mt-8 bg-gray-100 rounded-lg p-6 text-center">
          <p className="text-sm text-gray-600 mb-2">
            All tools are 100% free. No trials, no credit cards.
          </p>
          <p className="text-xs text-gray-500">
            This is a prototype. For the full toolbox, visit [your-notion-page-here]
          </p>
        </div>
      </div>
    </div>
  );
};

export default JournalistToolbox;
