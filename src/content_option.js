import chatbotImg from "./assets/images/Flow_Chatbot_Telegram_Claude.png";

const logotext = "Hi! i'm Faris";
const meta = {
    title: "Muhammad Al-farisy",
    description: "I’m Muhammad Al-farisy, a Data Analyst Engineer and Power BI Specialist.",
};

const introdata = {
    title: "I’m Muhammad Al-farisy",
    animated: {
        first: "Data Analyst Engineer",
        second: "Power BI Developer",
        third: "Data Warehouse Specialist",
    },
    description: "Expert in DAX Power BI and Data Warehouse development. I specialize in building end-to-end ETL pipelines to Google BigQuery and developing robust data solutions using Python.",
    your_img_url: "https://raw.githubusercontent.com/mhdalfarisy/mhdalfarisy.github.io/main/src/assets/images/poto_profil.jpeg",    
};

// const dataabout = {
//     title: "A bit about myself",
//     aboutme: "As a Data Analyst Engineer, my daily focus involves monitoring and developing high-impact Power BI dashboards. I am highly proficient in DAX and have extensive experience in building data warehouses from diverse sources, including managing ETL processes to Google BigQuery using Python.",
// };

const dataabout = {
    title: "A bit about myself",
    aboutme: "As a Data Analyst Engineer, my daily focus involves monitoring and developing high-impact Power BI dashboards. I am highly proficient in DAX and have extensive experience in building data warehouses from diverse sources, including managing ETL processes to Google BigQuery using Python.",
        
    education: [
        {
            institution: "Universitas Pamulang",
            degree: "Master of Science in Informatics Engineering (MTI)",
            education_education : "Thesis On Development",
            year: "2025 - Present",
        },
        {
            institution: "Universitas Pasundan",
            degree: "Bachelor of Accounting (S.E)", 
            education_education : "Pengaruh Profitabilitas, Corporate Social Responsibility (CSR), Ukuran Perusahaan, dan Kepemilikan Institusional terhadap Tax Avoidance: Studi Kasus pada Perusahaan Sub-Sektor Pertambangan Batu Bara yang Terdaftar di Bursa Efek Indonesia Tahun 2015–2019.",            
            year: "2018 - 2020",
        },
        {
            institution: "Politeknik Negeri Lhokseumawe",
            degree: "Diploma III (A.Md, Ak)", 
            education_education : "Analisis Penerapan Akuntansi Kas pada Departemen PKBL dan Corporate Social Responsibility (CSR) di PT Pupuk Iskandar Muda.",            
            year: "2015 - 2018",
        },        
    ],
    training: [
        {
            title: "Artificial Inteligent for Accounting System",
            organizer: "Ruby Thalib AI Consulting",
            year: "2025",
        },          
        {
            title: "Data Engineer",
            organizer: "Dibimbing Bootcamp",
            year: "2024",
        },        
        {
            title: "Data Science and Machine Learning",
            organizer: "Purwadhika Digital Technology School",
            year: "2022",
        },
        {
            title: "SQL (Advance Level)",
            organizer: "Hacker Rank",
            year: "2022",
        },    
        {
            title: "Brevet A & B",
            organizer: "Tax Tic Tax Bandung",
            year: "2019",
        },                      
    ],
    achievements: [
        {
            title: "Certified BNSP Data Science",
            Note_Desc : "Certified Data Science Associate",            
            year: "2026 - 2028",
        },
        {
            title: "Publish Journal PROKASDADIK : Prosiding Kecerdasan, Sains Data dan Pendidikan Masa Depan",
            Note_Desc : "Vol.4, No 1, (2026) E-ISSN: 3063-5845",
            year: "2026",
        },        
    ],
};

const worktimeline = [
    {
        jobtitle: "Data Analyst",
        where: "PT Merdeka Copper Gold Tbk",
        date: "Dec 2022 - Present",
        description: [
        "- Main Responsibilities:",
        
        "Design, develop, and maintain interactive, scalable, and user-friendly dashboards and reports using Power BI based on business requirements.",
        "Collect, cleanse, transform, and validate data from multiple sources (data warehouse, internal databases, APIs, Excel files, etc.) to ensure data accuracy, consistency, and reliability.",
        "Develop and optimize data models, including defining relationships, creating calculated columns/measures using DAX, and implementing best practices for performance.",
        "Design and implement data marts and database schemas to support efficient reporting and analytical processes.",
        "Improve dashboard performance and optimize queries to ensure fast data retrieval and smooth user experience.",
        "Create Power BI mockups and prototypes to align visualization design with stakeholder expectations before development.",
        "Automate reporting processes using scheduling tools (e.g., Task Scheduler) and Power Automate for report distribution to stakeholders via email.",
        "Collaborate with IT teams, business users, and cross-functional stakeholders to gather requirements and deliver effective data visualization solutions.",
        "Ensure data governance, security, and confidentiality in compliance with company policies and best practices.",
        "Perform regular maintenance, monitoring, and enhancements to ensure dashboard accuracy, relevance, and performance.",

        "- Supporting Responsibilities:",
        "Support data engineering processes by assisting in the development and maintenance of ETL/ELT pipelines from data sources to the data warehouse.",
        "Collaborate with the Programmer Team to optimize data extraction, transformation, and loading processes.",
        "Implement scheduling and orchestration of data pipelines to ensure timely and reliable data availability.",
        "Assist in troubleshooting data issues, ensuring data integrity, and improving overall data quality."
        ]
    },
    {
        jobtitle: "Data Analyst and Visualization",
        where: "PT Adhi Commuter Properti Tbk",
        date: "Aug 2022 - Oct 2022",
        description: [
            "Collect, process, and validate data from the Marketing Admin team as a foundation for analysis.",
            "Collaborate with Marketing Managers, Project Managers, and Project Directors to identify business problems and analytical requirements.",
            "Perform data cleaning, preprocessing, and analysis on consumer and sales databases.",
            "Develop machine learning models, both supervised and unsupervised, to generate insights and predictive outcomes that support business strategies.",
            "Coordinate with the digital marketing team to analyze the performance of online campaigns (Google Ads, Facebook Ads, and Instagram Ads).",
            "Create data visualizations using Tableau to present insights in a clear, informative, and actionable manner for stakeholders.",
            "Prepare reports and deliver presentations of analytical findings and strategic recommendations to support data-driven decision-making."
        ]
    },
    {
        jobtitle: "Operations and Accounting",
        where: "Nectico (TaniHub Collaboration)",
        date: "Sep 2021 - Mar 2022",
        description: [
            "Migrated accounting data and verified accuracy for cooperative clients.",
            "Implemented PSAK ETAP standards for financial reporting system.",
            "Performed cash traceback and ledger reconciliation."
        ]
    },
    {
        jobtitle: "Technical Operations",
        where: "Nectico",
        date: "Jun 2021 - Sep 2021",
        description: [
            "Mapped business flows into the Accounting System infrastructure.",
            "Prepared full financial statements (Journal to Trial Balance).",
            "Presented financial reports to Top Management (GM level)."
        ]
    }
];

const skills = [
    {
        name: "Power BI (Expert DAX & Web Service)",
    },
    {
        name: "Python (EDA & ETL Automation)",
    },
    {
        name: "SQL (PostgreSQL & SQL Server)",
    },
    {
        name: "Google BigQuery (Data Warehousing)",
    },
    {
        name: "Airflow & Task Scheduler (Orchestration)",
    },
    {
        name: "Power Automate (Workflow Automation)",
    },
];

const services = [
    {
        title: "Power BI Development & Analytics",
        description: "Delivering end-to-end dashboard solutions with expert-level DAX optimization to transform complex datasets into actionable business intelligence.",
    },
    {
        title: "Data Warehousing & ETL Architecture",
        description: "Designing scalable data warehouse architectures and implementing robust ETL pipelines for seamless data integration into Google BigQuery.",
    },
    {
        title: "Power Automation",
        description: "Architecting automated data workflows by integrating Python and Power Automate to streamline complex data processes, ensuring high data integrity and operational efficiency.",
    },
];

// const dataportfolio = [{
//         img: "https://picsum.photos/400/?grayscale",
//         description: "P&L Dashboard Development using advanced DAX.",
//         link: "#",
//     },
const dataportfolio = [
    {
        img: "https://raw.githubusercontent.com/mhdalfarisy/mhdalfarisy.github.io/main/src/assets/images/california_predict_house.png",
        title: "Project Sertifikasi BNSP Data Science: California Housing Price Prediction",
        description: "Developed a machine learning model to predict California housing prices with advanced regression techniques. The project implements data cleaning, exploratory data analysis, and feature engineering, comparing multiple algorithms to achieve optimal prediction accuracy.",
        tech_stack: ["Python", "Pandas", "NumPy", "Scikit-Learn", "XGBoost", "Matplotlib", "Seaborn"],
        link: "https://github.com/mhdalfarisy/sertifikasi_bnsp_data_science",
    },
    {
        img: "https://raw.githubusercontent.com/mhdalfarisy/mhdalfarisy.github.io/main/src/assets/images/Diagram_ETL_Image.png",
        title: "Automated ETL Pipeline for TransJakarta Transport Data (Task Scheduler-Based)",
        description: "Built an automated data pipeline that extracts, transforms, and loads TransJakarta transaction datasets. The system performs data cleaning, normalization, and time-series preparation before loading into Google BigQuery, with automated logging and monitoring capabilities.",
        tech_stack: ["Python", "Pandas", "Google BigQuery", "CSV Processing", "Data Validation", "Logging"],
        link: "https://github.com/mhdalfarisy/ETL-Trans-Jakarta",
    },
    { 
        img: "https://raw.githubusercontent.com/mhdalfarisy/mhdalfarisy.github.io/main/src/assets/images/Batch_Processing_Flow_airflow.png",
        title: "Automated ETL Pipeline for Monitoring Factory Workers’ Daily Performance & Attrition (Apache Airflow)",
        description: "Designed and implemented an enterprise-grade ETL pipeline using Apache Airflow for batch processing. The system monitors and tracks factory workers’ daily performance metrics while analyzing attrition patterns, enabling data-driven HR insights and workforce optimization.",
        tech_stack: ["Python", "Apache Airflow", "Pandas", "SQL", "Data Warehousing", "Batch Processing", "DAG Orchestration"],
        link: "https://github.com/mhdalfarisy/Final-Project-Data-Engineer",
    },
    {
        img: chatbotImg,
        title: "AI Chatbot for Personal Finance Tracking (Telegram Bot with Claude API)",
        description: "Developed a conversational AI chatbot that helps users record and manage daily financial transactions through natural language interactions. The chatbot provides an intuitive and interactive solution for personal finance tracking with persistent data storage.",
        tech_stack: ["Python", "Claude API", "Telegram Bot API", "PostgreSQL", "NLP"],
        link: "https://github.com/mhdalfarisy/chatbot-catat-duitku",
    },
];

const contactConfig = {
    YOUR_EMAIL: "m.alfarisy797@gmail.com",
    description: "I'm open for collaboration on data analytics, warehousing, or business intelligence projects. Let's talk!",
    YOUR_SERVICE_ID: "service_10l3jv9",
    YOUR_TEMPLATE_ID: "template_z95rt3l",
    YOUR_USER_ID: "CKkFp7XubC1kXxu-D",
};

const socialprofils = {
    github: "https://github.com/mhdalfarisy",
    linkedin: "https://www.linkedin.com/in/m-alfarisy97/",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};