export type Project = {
  name: string;
  description: string;
  image: string;
  techStack: string[];
  url: string;
};

export const projects: Project[] = [
  {
    name: 'Portfolio System',
    description: '面向个人品牌展示的响应式作品集，整合项目经历、技能栈和联系入口。',
    image: '/projects/portfolio.svg',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    url: 'https://github.com/piglost/developer_portfoilo_examples',
  },
  {
    name: 'Product Dashboard',
    description: '用于追踪产品指标和发布节奏的数据看板，强调清晰的信息层级。',
    image: '/projects/dashboard.svg',
    techStack: ['React', 'Charts', 'Design System'],
    url: 'https://github.com',
  },
  {
    name: 'Automation Toolkit',
    description: '沉淀常用工程流程的自动化工具集合，减少重复操作和人工检查成本。',
    image: '/projects/toolkit.svg',
    techStack: ['TypeScript', 'Node.js', 'CLI'],
    url: 'https://github.com',
  },
];
