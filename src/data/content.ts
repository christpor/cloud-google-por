export interface ProductItem {
  id: string;
  name: string;
  category: 'AI & ML' | 'Compute' | 'Databases' | 'Analytics' | 'Storage' | 'Networking' | 'Management';
  desc: string;
  tag?: string;
  imageIcon: string;
  docsUrl: string;
}

export interface CustomerStory {
  id: string;
  company: string;
  industry: string;
  quote: string;
  stat: string;
  statLabel: string;
  logo: string;
  productUsed: string;
  bgImage?: string;
}

export interface CloudPricingTier {
  id: string;
  name: string;
  specs: string;
  monthlyEstimate: number;
  features: string[];
}

export interface HeroCarouselItem {
  id: string;
  category: string;
  title: string;
  badge?: string;
  accentColor: string;
  image?: string;
  actionText: string;
  url: string;
}

export interface AccordionCategory {
  id: string;
  name: string;
  products: {
    name: string;
    desc: string;
    imageIcon: string;
    url: string;
  }[];
}

export const HERO_CAROUSEL_ITEMS: HeroCarouselItem[] = [
  {
    id: 'gemini-at-work',
    category: 'GLOBAL DIGITAL EVENT',
    title: 'Register for Gemini at Work: See how industry leaders put AI agents to work.',
    badge: "Gemini at Work '26",
    accentColor: '#1A73E8',
    actionText: 'Register now',
    url: '/ai/gemini'
  },
  {
    id: 'ai-announcements',
    category: 'AI ANNOUNCEMENTS',
    title: 'What Google Cloud announced in AI this month',
    badge: 'Monthly Briefing',
    accentColor: '#EA4335',
    actionText: 'Read announcements',
    url: '/ai/gemini'
  },
  {
    id: 'ai-infra',
    category: 'AI INFRASTRUCTURE',
    title: "What's new in AI infrastructure and orchestration this month",
    badge: 'Cloud TPU & GPU',
    accentColor: '#FBBC04',
    actionText: 'Explore infrastructure',
    url: '/solutions/infrastructure-modernization'
  },
  {
    id: 'gemini-enterprise',
    category: 'GEMINI ENTERPRISE',
    title: 'One platform for agent development, orchestration, and governance',
    badge: 'Agent Platform',
    accentColor: '#34A853',
    actionText: 'Discover Agent Platform',
    url: '/ai/gemini'
  }
];

export const GOOGLE_CLOUD_PRODUCTS: ProductItem[] = [
  {
    id: 'gemini-app',
    name: 'Gemini Enterprise app',
    category: 'AI & ML',
    desc: 'Secure platform to discover, create, run, and govern AI agents for employees.',
    tag: 'Next-Gen AI',
    imageIcon: '/assets/images/logo_gemini_2025_color_2x_web_24dp.png',
    docsUrl: '/ai/gemini'
  },
  {
    id: 'agent-platform',
    name: 'Agent Platform',
    category: 'AI & ML',
    desc: 'Unified platform for ML models, generative AI, and autonomous agent building.',
    tag: 'Autonomous',
    imageIcon: '/assets/images/logo_gemini_2025_color_2x_web_24dp.png',
    docsUrl: '/ai/gemini'
  },
  {
    id: 'compute-engine',
    name: 'Compute Engine',
    category: 'Compute',
    desc: "Virtual machines running in Google's hyper-scale, carbon-neutral data centers.",
    tag: 'Core Compute',
    imageIcon: '/assets/images/compute-engine.png',
    docsUrl: '/solutions/infrastructure-modernization'
  },
  {
    id: 'cloud-storage',
    name: 'Cloud Storage',
    category: 'Storage',
    desc: "Object storage that's secure, durable, and scalable with 11 9s durability.",
    tag: '11 9s Durability',
    imageIcon: '/assets/images/cloud-storage.png',
    docsUrl: '/products/managed-lustre'
  },
  {
    id: 'bigquery',
    name: 'BigQuery',
    category: 'Analytics',
    desc: 'Autonomous data-to-AI platform for enterprise analytics, ML, and data science.',
    tag: 'Serverless AI',
    imageIcon: '/assets/images/bigquery.png',
    docsUrl: '/bigquery'
  },
  {
    id: 'cloud-run',
    name: 'Cloud Run',
    category: 'Compute',
    desc: 'Fully managed environment for running containerized apps with scale-to-zero.',
    tag: 'Serverless',
    imageIcon: '/assets/images/cloud-run.png',
    docsUrl: '/solutions/infrastructure-modernization'
  },
  {
    id: 'gke',
    name: 'Google Kubernetes Engine (GKE)',
    category: 'Compute',
    desc: 'Managed enterprise environment for running containerized apps at planetary scale.',
    tag: 'Kubernetes #1',
    imageIcon: '/assets/images/google-kubernetes-engine.svg',
    docsUrl: '/solutions/infrastructure-modernization'
  },
  {
    id: 'looker',
    name: 'Looker',
    category: 'Analytics',
    desc: 'Unified platform for enterprise BI, data applications, and embedded analytics.',
    tag: 'BI Platform',
    imageIcon: '/assets/images/looker.svg',
    docsUrl: '/bigquery'
  },
  {
    id: 'apigee',
    name: 'Apigee API Management',
    category: 'Management',
    desc: 'Manage the full life cycle of APIs anywhere with end-to-end security and visibility.',
    tag: 'Enterprise API',
    imageIcon: '/assets/images/apigee.png',
    docsUrl: '/solutions/risk-and-compliance-as-code'
  },
  {
    id: 'cloud-sql',
    name: 'Cloud SQL',
    category: 'Databases',
    desc: 'Relational database services for MySQL, PostgreSQL, and SQL Server.',
    tag: 'Fully Managed',
    imageIcon: '/assets/images/cloud-sql.png',
    docsUrl: '/products/managed-lustre'
  },
  {
    id: 'cloud-cdn',
    name: 'Cloud CDN',
    category: 'Networking',
    desc: 'Global content delivery network caching web and video at Google edge locations.',
    tag: 'Anycast CDN',
    imageIcon: '/assets/images/super_cloud_gradient.png',
    docsUrl: '/solutions/infrastructure-modernization'
  }
];

export const ACCORDION_CATEGORIES: AccordionCategory[] = [
  {
    id: 'compute',
    name: 'Compute',
    products: [
      { name: 'Compute Engine', desc: 'Secure, customizable VMs running in Google data centers', imageIcon: '/assets/images/compute-engine.png', url: '/solutions/infrastructure-modernization' },
      { name: 'Google Kubernetes Engine (GKE)', desc: 'Leading managed Kubernetes with Autopilot hands-free operations', imageIcon: '/assets/images/google-kubernetes-engine.svg', url: '/solutions/infrastructure-modernization' },
      { name: 'Cloud Run', desc: 'Deploy web apps and APIs directly from containers or source', imageIcon: '/assets/images/cloud-run.png', url: '/solutions/infrastructure-modernization' }
    ]
  },
  {
    id: 'storage',
    name: 'Storage',
    products: [
      { name: 'Cloud Storage', desc: 'Worldwide, highly durable object storage with unified API', imageIcon: '/assets/images/cloud-storage.png', url: '/products/managed-lustre' },
      { name: 'Persistent Disk', desc: 'Block storage for Compute Engine and GKE workloads', imageIcon: '/assets/images/cloud-storage.png', url: '/products/managed-lustre' }
    ]
  },
  {
    id: 'databases',
    name: 'Databases',
    products: [
      { name: 'Cloud SQL', desc: 'Managed MySQL, PostgreSQL, and SQL Server instances', imageIcon: '/assets/images/cloud-sql.png', url: '/products/managed-lustre' },
      { name: 'Cloud Spanner', desc: 'Planetary scale relational database with unlimited horizontal scale', imageIcon: '/assets/images/cloud-sql.png', url: '/products/managed-lustre' }
    ]
  },
  {
    id: 'analytics',
    name: 'Data analytics',
    products: [
      { name: 'BigQuery', desc: 'Serverless multi-cloud data warehouse with integrated AI Studio', imageIcon: '/assets/images/bigquery.png', url: '/bigquery' },
      { name: 'Looker', desc: 'Enterprise business intelligence and embedded dashboard analytics', imageIcon: '/assets/images/looker.svg', url: '/bigquery' }
    ]
  },
  {
    id: 'networking',
    name: 'Networking',
    products: [
      { name: 'Cloud CDN', desc: 'Low-latency global edge content delivery network', imageIcon: '/assets/images/super_cloud_gradient.png', url: '/solutions/infrastructure-modernization' },
      { name: 'Cloud Load Balancing', desc: 'High-performance Anycast routing for global internet traffic', imageIcon: '/assets/images/super_cloud_gradient.png', url: '/solutions/infrastructure-modernization' }
    ]
  },
  {
    id: 'developer-tools',
    name: 'Developer tools',
    products: [
      { name: 'Apigee API Platform', desc: 'Enterprise API gateway and lifecycle governance platform', imageIcon: '/assets/images/apigee.png', url: '/solutions/risk-and-compliance-as-code' },
      { name: 'Agent Platform', desc: 'Enterprise developer suite for building, testing, and scaling autonomous agents', imageIcon: '/assets/images/logo_gemini_2025_color_2x_web_24dp.png', url: '/ai/gemini' }
    ]
  },
  {
    id: 'security',
    name: 'Security',
    products: [
      { name: 'Security Command Center', desc: 'Comprehensive threat detection, risk posture, and compliance monitoring', imageIcon: '/assets/images/super_cloud_gradient.png', url: '/solutions/risk-and-compliance-as-code' },
      { name: 'Cloud Armor', desc: 'Enterprise DDoS protection and web application firewall (WAF)', imageIcon: '/assets/images/super_cloud_gradient.png', url: '/solutions/risk-and-compliance-as-code' }
    ]
  },
  {
    id: 'startups',
    name: 'Startup tools',
    products: [
      { name: 'Google for Startups Cloud Program', desc: 'Up to $350,000 in credits for AI-first startups, plus dedicated mentorship', imageIcon: '/assets/images/logo_gemini_2025_color_2x_web_24dp.png', url: '/pricing/list' }
    ]
  }
];

export const CUSTOMER_STORIES: CustomerStory[] = [
  {
    id: 'volkswagen',
    company: 'Volkswagen',
    industry: 'Automotive',
    quote: 'Volkswagen uses Gemini to power its virtual assistant in the myVW app, surfacing helpful information from the owner’s manual instantly.',
    stat: '10x',
    statLabel: 'Query Response Speed',
    logo: '/assets/images/cloud_google_com_images_icons_icn_manufacturing_png.png',
    bgImage: '/assets/images/d734b528-408f-409c-86a4-49e1b97cc6d1.png',
    productUsed: 'Gemini Enterprise'
  },
  {
    id: 'home-depot',
    company: 'The Home Depot',
    industry: 'Home Improvement',
    quote: 'The Home Depot turns fragmented customer service into seamless digital journeys using Google Cloud conversational AI and computer vision.',
    stat: '90%',
    statLabel: 'Customer Inquiry Automation',
    logo: '/assets/images/cloud_google_com_images_icons_icn_cpg_png.png',
    bgImage: '/assets/images/ENzJ2_oCSpfk_igh-eSyKqJLD9s7-fPI1tqrcupkalxv3lt99pFZ8Nqo1pL2N9_qZYXi7vpnnNmu.png',
    productUsed: 'Dialogflow & Contact Center AI'
  },
  {
    id: 'target',
    company: 'Target',
    industry: 'Retail & eCommerce',
    quote: 'Target modernized their entire data infrastructure using Google Cloud to dramatically improve advertising performance and guest personalization.',
    stat: '100%',
    statLabel: 'Cloud Data Modernization',
    logo: '/assets/images/cloud_google_com_images_icons_icn_retail_png.png',
    productUsed: 'BigQuery & Vertex AI'
  },
  {
    id: 'mlb',
    company: 'MLB',
    industry: 'Sports & Entertainment',
    quote: 'MLB compares live plays with its Statcast dataset in real time and shares fresh player insights using Gemini Enterprise and BigQuery.',
    stat: '30M+',
    statLabel: 'Live Statcast Plays Processed',
    logo: '/assets/images/cloud_google_com_images_icons_icn_gaming_png.png',
    productUsed: 'BigQuery & Gemini'
  }
];

export const PRICING_TIERS: CloudPricingTier[] = [
  {
    id: 'tier-run',
    name: 'Cloud Run Serverless',
    specs: '2 vCPU, 4GB Memory, Auto-Scale to Zero',
    monthlyEstimate: 36,
    features: [
      'Scale to zero when idle (0 cost)',
      'Direct VPC egress integration',
      'Automatic HTTPS & custom domain SSL',
      'Integrated traffic splitting & blue/green'
    ]
  },
  {
    id: 'tier-gke',
    name: 'GKE Autopilot Production',
    specs: 'High-availability control plane + Dynamic nodes',
    monthlyEstimate: 148,
    features: [
      'Google manages node provisioning & hardening',
      'Pay per pod resource consumption',
      '99.99% multi-zonal availability SLA',
      'Automated cluster upgrades & patching'
    ]
  },
  {
    id: 'tier-ai',
    name: 'Gemini 1.5 Enterprise Agent Tier',
    specs: 'Multimodal input, 1M context window',
    monthlyEstimate: 250,
    features: [
      '1M to 2M token context window',
      'Zero training on customer enterprise data',
      'Google Search & Enterprise Grounding',
      'Gemini Code Assist seats included'
    ]
  }
];
