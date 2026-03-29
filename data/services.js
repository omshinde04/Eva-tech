const services = [
    {
        slug: "it-software",
        title: "IT & Software Solutions",
        desc: "Build powerful ERP systems and custom software.",
        full: "We design and develop enterprise-grade software solutions tailored to your business needs. From ERP systems to automation platforms, we create scalable and high-performance applications that streamline operations and improve efficiency.",

        image: "/images/services/it.jpg",

        features: [
            "Custom ERP Development",
            "Business Process Automation",
            "Enterprise Web Applications",
            "API Development & Integration",
            "CRM Systems",
            "Workflow Automation Tools",
            "Multi-tenant SaaS Platforms",
            "Role-Based Access Systems",
            "Microservices Architecture",
            "Real-time Data Systems",
        ],

        benefits: [
            { text: "Reduced operational costs", icon: "chart" },
            { text: "Improved efficiency", icon: "zap" },
            { text: "Better decision making", icon: "analytics" },
            { text: "Scalable architecture", icon: "layers" },
            { text: "Faster deployment cycles", icon: "zap" },
            { text: "Improved system reliability", icon: "activity" },
        ],

        technologies: [
            "React.js",
            "Next.js",
            "Node.js",
            "Python",
            "Django",
            "Flask",
            "MySQL",
            "MongoDB",
            "PostgreSQL",
            "Redis",
        ],

        useCases: [
            "Enterprise management systems",
            "Startup SaaS platforms",
            "Automation dashboards",
            "Internal business tools",
            "Inventory systems",
            "HR & payroll systems",
        ],
    },

    {
        slug: "cloud",
        title: "Cloud & Data Infrastructure",
        desc: "Secure cloud hosting and infrastructure.",
        full: "We provide scalable and secure cloud infrastructure solutions with high availability and disaster recovery. Our cloud systems ensure your applications run efficiently with minimal downtime.",

        image: "/images/services/cloud.jpg",

        features: [
            "AWS / Azure Deployment",
            "Cloud Migration",
            "Server Management",
            "Load Balancing",
            "Backup & Disaster Recovery",
            "DevOps Automation",
            "CI/CD Pipelines",
            "Containerization",
            "Auto Scaling Systems",
            "Infrastructure Monitoring",
        ],

        benefits: [
            { text: "High uptime", icon: "activity" },
            { text: "Cost optimization", icon: "chart" },
            { text: "Secure infrastructure", icon: "shield" },
            { text: "Scalable systems", icon: "layers" },
            { text: "Disaster recovery readiness", icon: "shield" },
            { text: "Performance optimization", icon: "zap" },
        ],

        technologies: [
            "AWS",
            "Microsoft Azure",
            "Google Cloud",
            "Docker",
            "Kubernetes",
            "Terraform",
            "Nginx",
            "Linux",
        ],

        useCases: [
            "Application hosting",
            "Enterprise cloud migration",
            "DevOps pipelines",
            "High-traffic platforms",
            "E-commerce scaling",
        ],
    },

    {
        slug: "document-digitisation",
        title: "Document Digitisation & OCR",
        desc: "Convert physical documents into digital assets.",
        full: "We transform physical documents into structured digital data using OCR, indexing, and intelligent workflows. Ideal for enterprises handling large volumes of paperwork.",

        image: "/images/services/data.jpg",

        features: [
            "High-speed scanning",
            "OCR data extraction",
            "Document indexing",
            "Secure digital storage",
            "Automated workflows",
            "Bulk processing systems",
            "AI-based classification",
        ],

        benefits: [
            { text: "Paperless operations", icon: "database" },
            { text: "Faster data retrieval", icon: "clock" },
            { text: "Improved accuracy", icon: "brain" },
            { text: "Secure storage", icon: "lock" },
            { text: "Reduced manual errors", icon: "brain" },
        ],

        technologies: [
            "OCR Engines",
            "Python",
            "AI Models",
            "Cloud Storage",
            "ElasticSearch",
        ],

        useCases: [
            "Government records digitization",
            "Banking document processing",
            "Legal document management",
            "Healthcare records",
            "Invoice processing systems",
        ],
    },

    {
        slug: "ai-automation",
        title: "AI & Automation Solutions",
        desc: "Automate workflows with AI systems.",
        full: "We build AI-powered systems that automate repetitive tasks, improve decision-making, and enhance operational efficiency using machine learning and intelligent automation.",

        image: "/images/services/ai.jpg",

        features: [
            "AI Chatbots",
            "Workflow Automation",
            "Predictive Analytics",
            "Recommendation Systems",
            "AI Integration",
            "NLP Systems",
            "AI Agents",
            "Automation Pipelines",
        ],

        benefits: [
            { text: "Reduced manual effort", icon: "cpu" },
            { text: "Faster operations", icon: "zap" },
            { text: "Better insights", icon: "brain" },
            { text: "Improved customer experience", icon: "chart" },
            { text: "Scalable AI systems", icon: "layers" },
        ],

        technologies: [
            "Python",
            "TensorFlow",
            "PyTorch",
            "OpenAI APIs",
            "LangChain",
        ],

        useCases: [
            "Customer support automation",
            "AI assistants",
            "Business intelligence",
            "Process automation",
            "Sales automation",
        ],
    },

    {
        slug: "gis",
        title: "GIS Technology",
        desc: "Geospatial systems and mapping solutions.",
        full: "We provide advanced GIS solutions including mapping, geospatial analytics, and data visualization for better decision-making and planning.",

        image: "/images/services/gis.jpg",

        features: [
            "Geospatial Mapping",
            "Location Intelligence",
            "Satellite Data Processing",
            "Custom GIS Dashboards",
            "Real-time mapping",
        ],

        benefits: [
            { text: "Better planning", icon: "globe" },
            { text: "Improved analysis", icon: "analytics" },
            { text: "Real-time insights", icon: "activity" },
            { text: "Accurate data visualization", icon: "layers" },
        ],

        technologies: [
            "ArcGIS",
            "QGIS",
            "Python",
            "GeoJSON",
        ],

        useCases: [
            "Urban planning",
            "Logistics optimization",
            "Agriculture analysis",
            "Government projects",
        ],
    },

    {
        slug: "security",
        title: "Security & Surveillance Systems",
        desc: "Smart CCTV and monitoring systems.",
        full: "We design and deploy advanced surveillance systems including CCTV, monitoring solutions, and security infrastructure for enterprises and organizations.",

        image: "/images/services/security.jpg",

        features: [
            "CCTV Installation",
            "Remote Monitoring",
            "Access Control Systems",
            "Security Audits",
            "AI Surveillance",
        ],

        benefits: [
            { text: "Enhanced security", icon: "shield" },
            { text: "Real-time monitoring", icon: "activity" },
            { text: "Reduced risk", icon: "lock" },
            { text: "24/7 surveillance", icon: "clock" },
        ],

        technologies: [
            "IoT Devices",
            "CCTV Systems",
            "Cloud Monitoring",
        ],

        useCases: [
            "Corporate offices",
            "Warehouses",
            "Retail stores",
            "Government facilities",
        ],
    },
];

export default services;