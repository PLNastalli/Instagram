export interface Post {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  likes: number;
  comments: number;
  date: string;
  tags: string[];
}

export interface Message {
  id: string;
  text: string;
  sender: "me" | "them";
  timestamp: string;
}

export interface Chat {
  id: number;
  name: string;
  avatar: string;
  activeTime: string;
  messages: Message[];
}

export const profileData = {
  username: "PLNastalli",
  fullName: "PL Nastalli",
  bio: "Software Developer 🚀\nBuilding digital experiences.\nReact | Node.js | UI/UX",
  link: "github.com/PLNastalli",
  avatarUrl: "https://picsum.photos/seed/avatar/1080/1080",
  stats: {
    posts: 12,
    followers: "10.5K",
    following: 420,
  },
  highlights: [
    {
      id: "1",
      title: "React",
      imageUrl: "https://picsum.photos/seed/react/1080/1920",
    },
    {
      id: "2",
      title: "Node.js",
      imageUrl: "https://picsum.photos/seed/node/1080/1920",
    },
    {
      id: "3",
      title: "UI/UX",
      imageUrl: "https://picsum.photos/seed/uiux/1080/1920",
    },
    {
      id: "4",
      title: "Mobile",
      imageUrl: "https://picsum.photos/seed/mobile/1080/1920",
    },
  ],
};

export const postsData: Post[] = [
  {
    id: "1",
    imageUrl: "https://picsum.photos/seed/project1/1080/1080",
    title: "E-commerce Platform",
    description:
      "Built a modern e-commerce platform using Next.js and Stripe. Features include real-time inventory, user authentication, and a seamless checkout experience.",
    likes: 342,
    comments: 28,
    date: "2 DAYS AGO",
    tags: ["#nextjs", "#react", "#ecommerce", "#stripe"],
  },
  {
    id: "2",
    imageUrl: "https://picsum.photos/seed/project2/1080/1080",
    title: "AI Chat Application",
    description:
      "Developed an AI-powered chat application using OpenAI API and WebSockets for real-time communication.",
    likes: 512,
    comments: 45,
    date: "1 WEEK AGO",
    tags: ["#ai", "#openai", "#websockets", "#react"],
  },
  {
    id: "3",
    imageUrl: "https://picsum.photos/seed/project3/1080/1080",
    title: "Fintech Dashboard",
    description:
      "Designed and developed a comprehensive financial dashboard with interactive charts and real-time data visualization.",
    likes: 892,
    comments: 67,
    date: "2 WEEKS AGO",
    tags: ["#fintech", "#dashboard", "#dataviz", "#d3js"],
  },
  {
    id: "4",
    imageUrl: "https://picsum.photos/seed/project4/1080/1080",
    title: "Social Media App",
    description:
      "A mobile-first social media application built with React Native and Firebase.",
    likes: 421,
    comments: 32,
    date: "3 WEEKS AGO",
    tags: ["#reactnative", "#firebase", "#mobileapp"],
  },
  {
    id: "5",
    imageUrl: "https://picsum.photos/seed/project5/1080/1080",
    title: "Portfolio Website",
    description:
      "A minimalist portfolio website for a photographer, featuring a custom masonry grid and smooth page transitions.",
    likes: 256,
    comments: 18,
    date: "1 MONTH AGO",
    tags: ["#portfolio", "#webdesign", "#framer-motion"],
  },
  {
    id: "6",
    imageUrl: "https://picsum.photos/seed/project6/1080/1080",
    title: "Task Management Tool",
    description:
      "A collaborative task management tool with drag-and-drop functionality and real-time updates.",
    likes: 678,
    comments: 54,
    date: "2 MONTHS AGO",
    tags: ["#productivity", "#saas", "#react", "#nodejs"],
  },
  {
    id: "7",
    imageUrl: "https://picsum.photos/seed/project7/1080/1080",
    title: "Fitness Tracker App",
    description:
      "A comprehensive fitness tracking application with workout plans, progress charts, and social features.",
    likes: 890,
    comments: 76,
    date: "3 MONTHS AGO",
    tags: ["#fitness", "#health", "#mobileapp", "#reactnative"],
  },
  {
    id: "8",
    imageUrl: "https://picsum.photos/seed/project8/1080/1080",
    title: "Real Estate Platform",
    description:
      "A property listing platform with advanced search filters, virtual tours, and agent messaging.",
    likes: 543,
    comments: 41,
    date: "4 MONTHS AGO",
    tags: ["#realestate", "#webdev", "#nextjs", "#graphql"],
  },
  {
    id: "9",
    imageUrl: "https://picsum.photos/seed/project9/1080/1080",
    title: "Recipe Sharing Network",
    description:
      "A community-driven recipe sharing platform with ingredient parsing and nutritional analysis.",
    likes: 765,
    comments: 89,
    date: "5 MONTHS AGO",
    tags: ["#food", "#community", "#react", "#firebase"],
  },
];

export const initialChatsData: Chat[] = [
  {
    id: 1,
    name: "dev_guru_99",
    avatar: "https://picsum.photos/seed/user1/100/100",
    activeTime: "Active now",
    messages: [
      {
        id: "1",
        text: "Hey! Loved your recent React project.",
        sender: "them",
        timestamp: "10:00 AM",
      },
      {
        id: "2",
        text: "Thanks! I've been working hard on it.",
        sender: "me",
        timestamp: "10:05 AM",
      },
      {
        id: "3",
        text: "Are you open to freelance work?",
        sender: "them",
        timestamp: "10:06 AM",
      },
    ],
  },
  {
    id: 2,
    name: "ui_ux_designer",
    avatar: "https://picsum.photos/seed/user2/100/100",
    activeTime: "Active 2h ago",
    messages: [
      {
        id: "1",
        text: "Can we collaborate on a new app design?",
        sender: "them",
        timestamp: "Yesterday",
      },
      {
        id: "2",
        text: "Sure, what did you have in mind?",
        sender: "me",
        timestamp: "Yesterday",
      },
    ],
  },
  {
    id: 3,
    name: "tech_recruiter",
    avatar: "https://picsum.photos/seed/user3/100/100",
    activeTime: "Active 5h ago",
    messages: [
      {
        id: "1",
        text: "Hi PL, we have an opening at our company.",
        sender: "them",
        timestamp: "Tuesday",
      },
    ],
  },
];
