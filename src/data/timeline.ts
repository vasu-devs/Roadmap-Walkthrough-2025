

export interface Project {
    id: string;
    title: string;
    description: string;
    date: string;
    tech: string[];
    category: 'web' | 'python' | 'ai' | 'tool' | 'agentic';
    link?: string;
    github?: string;
}

export const projects: Project[] = [
    {
        id: 'elevatex',
        title: 'ElevateX',
        description: 'A startup collaboration platform connecting founders and job seekers. Built with PHP and JS.',
        date: 'Jan 2025',
        tech: ['PHP', 'JavaScript', 'MySQL'],
        category: 'web'
    },
    {
        id: 'habitturtle',
        title: 'HabitTurtle',
        description: 'A simple GUI-based habit tracker built with Python.',
        date: 'Feb 2025',
        tech: ['Python', 'Tkinter'],
        category: 'python'
    },
    {
        id: 'waterbuddy',
        title: 'WaterBuddy',
        description: 'Windows notification system to remind you to drink water.',
        date: 'Feb 2025',
        tech: ['Python', 'Win10Toast'],
        category: 'python'
    },
    {
        id: 'folder-summary',
        title: 'Folder Summary Parser',
        description: 'Generates a structural summary of any uploaded folder.',
        date: 'Mar 2025',
        tech: ['Python', 'OS Module'],
        category: 'tool'
    },
    {
        id: 'os-sim',
        title: 'OS Memory Simulator',
        description: 'Real-time simulation of OS memory allocation strategies.',
        date: 'Mar 2025',
        tech: ['Python', 'OS Concepts'],
        category: 'python'
    },
    {
        id: 'culture-compass',
        title: 'CultureCompass',
        description: 'AI chatbot helping tourists understand local culture and history.',
        date: 'Apr 2025',
        tech: ['Python', 'AI'],
        category: 'ai'
    },
    {
        id: 'mainmaster',
        title: 'MainMaster',
        description: 'Tool for tracking house maintenance chores.',
        date: 'Apr 2025',
        tech: ['Python'],
        category: 'python'
    },
    {
        id: 'holeemall',
        title: 'HoleEmAll',
        description: 'A mini-game developed using Python.',
        date: 'May 2025',
        tech: ['Python', 'PyGame'],
        category: 'python'
    },
    {
        id: 'pathfinder',
        title: 'Path Finder Visualizer',
        description: 'GUI visualizer for BFS, DFS, Dijkstra, and A* algorithms.',
        date: 'Jun 2025',
        tech: ['Python', 'Algorithms'],
        category: 'python'
    },
    {
        id: 'weather-ai',
        title: 'Weather Dashboard AI',
        description: 'Analyses weather data to give daily suggestions and clothing advice.',
        date: 'Jul 2025',
        tech: ['FastAPI', 'AI'],
        category: 'ai'
    },
    {
        id: 'email-drafter',
        title: 'EmailDrafter',
        description: 'AI tool to write emails in various tones.',
        date: 'Jul 2025',
        tech: ['AI', 'NLP'],
        category: 'ai'
    },
    {
        id: 'korosuke',
        title: 'KoroSuke',
        description: 'Local LLM sidebar copilot for Arch Linux.',
        date: 'Aug 2025',
        tech: ['Arch Linux', 'Local LLM'],
        category: 'tool'
    },
    {
        id: 'polysee',
        title: 'PolySEE',
        description: 'Multilingual RAG chatbot for college policies. SIH Top 15.',
        date: 'Sep 2025',
        tech: ['RAG', 'Python', 'React'],
        category: 'ai'
    },
    {
        id: 'nyaysaathi',
        title: 'NyaySaathi',
        description: 'Voice-enabled legal assistant for Indian laws and fraud detection.',
        date: 'Sep 2025',
        tech: ['RAG', 'Voice AI', 'LegalTech'],
        category: 'ai'
    },
    {
        id: 'mapmyrepo',
        title: 'MapMyRepo',
        description: 'Turns GitHub profiles into an interactive code universe.',
        date: 'Oct 2025',
        tech: ['React', 'GitHub API', 'Visualization'],
        category: 'web',
        link: 'https://mapmyrepo.vasudev.live'
    },
    {
        id: 'asciirealtime',
        title: 'AsciiRealTime',
        description: 'Real-time camera to ASCII converter (Web & Java).',
        date: 'Oct 2025',
        tech: ['Java', 'Web'],
        category: 'web',
        link: 'https://asciicamera.vasudev.live'
    },
    {
        id: 'leetbot',
        title: 'LeetBot',
        description: 'AI-powered LeetCode companion providing dynamic hints.',
        date: 'Nov 2025',
        tech: ['Chrome Extension', 'AI'],
        category: 'tool'
    },
    {
        id: 'yt-smart-comments',
        title: 'YouTube Smart Comments',
        description: 'Extension that buckets comments based on video sections.',
        date: 'Nov 2025',
        tech: ['Chrome Extension', 'NLP'],
        category: 'tool'
    },
    {
        id: 'auto-timetable',
        title: 'Auto-Timetable',
        description: 'Scheduler using Google OR Tools core.',
        date: 'Nov 2025',
        tech: ['Google OR Tools', 'React'],
        category: 'tool'
    },
    {
        id: 'vaani',
        title: 'Vaani',
        description: 'Sub-500ms latency voice debt collection agent using LiveKit, Groq, Deepgram.',
        date: 'Dec 2025',
        tech: ['LiveKit', 'Groq', 'Deepgram', 'Agentic AI'],
        category: 'agentic'
    },
    {
        id: 'ideon',
        title: 'Odeon',
        description: 'Adversarial testing framework for evolving voice agents.',
        date: 'Dec 2025',
        tech: ['Agentic AI', 'Testing'],
        category: 'agentic'
    },
    {
        id: 'branchgpt',
        title: 'BranchGPT',
        description: 'DAG-based chat interface allowing forking and merging of conversations.',
        date: 'Dec 2025',
        tech: ['Next.js', 'DAG', 'AI'],
        category: 'agentic',
        link: 'https://branchgpt.vasudev.live'
    },
    {
        id: 'portfolio',
        title: 'Portfolio 2025',
        description: 'The culmination of the year\'s work.',
        date: 'Dec 2025',
        tech: ['React', 'Vite', 'Tailwind'],
        category: 'web',
        link: 'https://vasudev.live'
    }
];
