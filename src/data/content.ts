export interface ProductItem {
  id: string;
  name: string;
  category: 'AI & ML' | 'Compute' | 'Databases' | 'Analytics' | 'Security';
  desc: string;
  tag?: string;
  icon: string;
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
}

export interface CloudPricingTier {
  id: string;
  name: string;
  specs: string;
  monthlyEstimate: number;
  features: string[];
}

export const GOOGLE_CLOUD_PRODUCTS: ProductItem[] = [
  {
    id: 'gemini',
    name: 'Gemini Enterprise Agent Platform',
    category: 'AI & ML',
    desc: 'Build and deploy autonomous agents with 200+ foundation models, enterprise grounding, and code completion.',
    tag: 'Next-Gen AI',
    icon: 'neurology',
    docsUrl: '/ai/gemini'
  },
  {
    id: 'vertex-ai',
    name: 'Vertex AI Studio',
    category: 'AI & ML',
    desc: 'Unified enterprise ML platform to train, tune, and evaluate generative models and custom pipelines.',
    tag: 'Popular',
    icon: 'smart_toy',
    docsUrl: '/ai/gemini'
  },
  {
    id: 'bigquery',
    name: 'BigQuery & Studio',
    category: 'Analytics',
    desc: 'Completely serverless, cost-effective multicloud enterprise data warehouse designed for business agility.',
    tag: 'Built-in AI',
    icon: 'database',
    docsUrl: '/bigquery'
  },
  {
    id: 'gke',
    name: 'Google Kubernetes Engine (GKE)',
    category: 'Compute',
    desc: 'The most scalable and fully automated Kubernetes service with 99.99% multi-cluster enterprise SLA.',
    tag: 'Enterprise',
    icon: 'view_in_ar',
    docsUrl: '/solutions/infrastructure-modernization'
  },
  {
    id: 'cloud-run',
    name: 'Cloud Run',
    category: 'Compute',
    desc: 'Build and deploy scalable containerized apps on a fully managed serverless platform in seconds.',
    tag: 'Serverless',
    icon: 'bolt',
    docsUrl: '/solutions/infrastructure-modernization'
  },
  {
    id: 'cloud-spanner',
    name: 'Cloud Spanner',
    category: 'Databases',
    desc: 'Fully managed relational database with unlimited scale, strong consistency, and up to 99.999% availability.',
    icon: 'dataset',
    docsUrl: '/products/managed-lustre'
  },
  {
    id: 'security-command-center',
    name: 'Security Command Center',
    category: 'Security',
    desc: 'Built-in security and risk management platform for Google Cloud assets, containers, and threat detection.',
    tag: 'Zero-Trust',
    icon: 'shield',
    docsUrl: '/solutions/risk-and-compliance-as-code'
  }
];

export const CUSTOMER_STORIES: CustomerStory[] = [
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
    id: 'home-depot',
    company: 'The Home Depot',
    industry: 'Home Improvement',
    quote: 'The Home Depot turns fragmented customer service into seamless digital journeys using Google Cloud conversational AI.',
    stat: '90%',
    statLabel: 'Customer Inquiry Automation',
    logo: '/assets/images/cloud_google_com_images_icons_icn_cpg_png.png',
    productUsed: 'Dialogflow & Contact Center AI'
  },
  {
    id: 'volkswagen',
    company: 'Volkswagen',
    industry: 'Automotive',
    quote: 'Volkswagen uses Gemini to power its virtual assistant in the myVW app, surfacing helpful information from the owner’s manual instantly.',
    stat: '10x',
    statLabel: 'Query Response Speed',
    logo: '/assets/images/cloud_google_com_images_icons_icn_manufacturing_png.png',
    productUsed: 'Gemini Enterprise'
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
