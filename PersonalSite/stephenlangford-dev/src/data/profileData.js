const profileData = {
    summary: {
        title: 'Professional Summary',
        linkedIn: 'https://www.linkedin.com/in/s-langford/',
        description:
            'Cybersecurity Specialist with a strong foundation in security operations, threat analysis, and secure software development. Holds a B.S. in Computer Science with a Minor in Statistics & Mathematics from Georgia State University. Experienced in security monitoring, incident response, vulnerability assessment, and secure coding practices. Skilled in Python, SIEM tools, threat intelligence, and scripting. Passionate about strengthening system defenses, mitigating cyber threats, and improving security posture through proactive monitoring and risk assessment. Founded and led the official GSU Cybersecurity Club.',
    },

    techSkills: {
        title: 'Technical Skills',
        skills: [
            {
                category: 'Security Tools & Frameworks',
                items: [
                    'SIEM (Splunk)',
                    'Microsoft Defender',
                    'NIST (RMF & CSF)',
                    'OWASP',
                ],
            },
            {
                category: 'Programming & Scripting',
                items: ['Python', 'Bash', 'PowerShell', 'SQL'],
            },
            {
                category: 'Network Security',
                items: [
                    'Firewalls',
                    'VPNs',
                    'TCP/IP',
                    'Network Protocols',
                    'Packet Analysis',
                    'Active Directory',
                ],
            },
            {
                category: 'Secure Software Development',
                items: ['OAuth', 'API Security', 'Encryption (AES)'],
            },
            {
                category: 'Cloud & Infrastructure',
                items: ['Oracle', 'Microsoft Azure', 'Hadoop', 'Spark'],
            },
        ],
    },

    experience: {
        title: 'Work Experience',
        jobs: [
            {
                role: 'SOC Analyst Intern',
                company: 'Verint Systems',
                location: 'Atlanta, GA',
                period: 'May 2022 – Oct 2022',
                responsibilities: [
                    'Monitored security alerts and investigated potential incidents using Splunk SIEM, reducing false positives by 30%.',
                    'Conducted log analysis to detect anomalies and suspicious activity, preventing potential security breaches.',
                    'Assisted in threat intelligence gathering, tracking emerging cyber threats, and recommending mitigations.',
                    'Implemented a security automation script in Python, improving incident response efficiency by 40%.',
                    'Led a team of 6 interns to develop a customer engagement metric, selected as the top innovation proposal.',
                ],
            },
            {
                role: 'Full Stack Developer',
                company: 'EekTee AI-Powered T-Shirt E-Store',
                location: 'Remote',
                period: 'Feb 2024 – Present',
                responsibilities: [
                    'Built and optimized a full-stack e-commerce platform, integrating AI-generated designs and secure transactions.',
                    'Designed and implemented scalable REST APIs for AI-powered image generation, improving system response time by 30%.',
                    'Developed React-based UI components, increasing user engagement by 25% through improved accessibility and design.',
                    'Enhanced backend performance by reducing API request latency by 40% through query optimization and caching strategies.',
                    'Led automated testing for API endpoints, improving test coverage by 80%, reducing production defects by 20%.',
                ],
            },
            {
                role: 'Mobile App Developer',
                company: 'Zlume',
                location: 'Remote',
                period: 'Dec 2023 – May 2024',
                responsibilities: [
                    'Developed a React Native music streaming app integrated with the Spotify Web API.',
                    'Refactored codebase into modular React components, reducing code complexity by 35% and improving maintainability.',
                    'Designed and deployed a cross-platform mobile prototype for iOS and Android, accelerating time-to-market by 40%.',
                    'Proposed and tested machine learning solutions for personalized recommendations, increasing user retention by 15%.',
                ],
            },
        ],
    },

    projects: {
        title: 'Projects',
        github: 'https://github.com/Stephen-Langford/CybersecurityPortfolio',
        list: [
            {
                name: 'Distributed Cluster Computing (Big Data Processing)',
                description: [
                    'Designed and implemented a 3-node distributed cluster using Hadoop and Spark to process large-scale batch jobs.',
                    'Developed optimized algorithms in Python & Java, reducing computation time by 35% for Monte Carlo simulations & PageRank.',
                ],
            },
            {
                name: 'PawPals (Full Stack Web App)',
                description: [
                    'Built a secure pet-sitting web app with encryption, OAuth authentication, and secure database access.',
                    'Conducted penetration testing to mitigate security vulnerabilities, improving system integrity.',
                ],
            },
            {
                name: 'Zlume (Mobile App)',
                description: [
                    'Developed a React Native music streaming app, integrating Spotify API for seamless playback.',
                    'Enhanced cross-platform UX, reducing navigation latency by 20% for smoother user interactions.',
                ],
            },
        ],
    },

    education: {
        title: 'Education',
        degree: 'B.S. in Computer Science, Minor in Statistics & Mathematics',
        school: 'Georgia State University, Atlanta, GA',
        graduation: 'May 2023',
        highlights: [
            'Founded and led the GSU Cybersecurity Club, placing Top 50 out of 900 teams in national cybersecurity competition.',
            'Collaborated with Google Engineers to refine secure coding and penetration testing skills.',
            'Relevant Coursework: Cybersecurity, Ethical Hacking, Network Security, Cryptography, Digital Forensics.',
        ],
    },
    contact: {
        title: 'Contact Information',
        phone: '770-402-0461',
        email: 'slangford1050@gmail.com',
        linkedIn: 'https://www.linkedin.com/in/s-langford/',
        github: 'https://github.com/Stephen-Langford/CybersecurityPortfolio',
    },
};

export default profileData;
