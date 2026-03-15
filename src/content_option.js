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

const dataabout = {
    title: "A bit about myself",
    aboutme: "As a Data Analyst Engineer, my daily focus involves monitoring and developing high-impact Power BI dashboards. I am highly proficient in DAX and have extensive experience in building data warehouses from diverse sources, including managing ETL processes to Google BigQuery using Python.",
};

const worktimeline = [
    {
        jobtitle: "Data Analyst",
        where: "PT Merdeka Copper Gold Tbk",
        date: "Dec 2022 - Present",
        description: [
            "Design, develop, and maintain interactive Power BI dashboards using DAX.",
            "Optimize ETL processes and data warehouse integration (BigQuery).",
            "Collaborate with IT and Programmer teams for data transformation.",
            "Automate reporting solutions to increase operational efficiency."
        ]
    },
    {
        jobtitle: "Data Analyst and Visualization",
        where: "PT Adhi Commuter Properti Tbk",
        date: "Aug 2022 - Oct 2022",
        description: [
            "Built Machine Learning models for consumer sales database categorization.",
            "Visualized marketing insights using Tableau for Project Directors.",
            "Analyzed digital campaign performance (Google, FB, and IG Ads)."
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
        description: "Project Sertifikasi BNSP Data Science",
        link: "https://github.com/mhdalfarisy/sertifikasi_bnsp_data_science", // Sesuaikan dengan link repo projectnya
    },
    {
        img: "https://p.statically.io/gh/mhdalfarisy/ETL-Trans-Jakarta/main/Diagram_ETL_Image.png",
        description: "End-to-End ETL Pipeline for TransJakarta Transport Data.",
        link: "https://github.com/mhdalfarisy/ETL-Trans-Jakarta",
    },
    {
        img: "https://raw.githubusercontent.com/mhdalfarisy/Final-Project-Data-Engineer/main/assets/Batch%20Processing%20Flow.jpg",
        description: "Automated ETL Pipeline for Batch Processing to Google BigQuery.",
        link: "https://github.com/mhdalfarisy/Final-Project-Data-Engineer",
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