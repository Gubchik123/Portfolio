export default [
    // TODO: Sub-stack for some stacks. Ex: Django - (allauth, ckeditor, etc.)
    // TODO: Add demo_images for some projects
    // Sites
    {
        id: "LapZone",
        name: "LapZone",
        category: "Site",
        deploy_status: "Deployed",
        url: "https://lapzone.store/",
        header_image: "https://raw.githubusercontent.com/Gubchik123/LapZone/master/static/images/site_header.webp",
        repo: {
            platform: "GitHub",
            url: "https://github.com/Gubchik123/LapZone"
        },
        description: "The Internet shop for selling laptops and accessories for them.",
        skills: ["Python", "Django", "SQL", "PostgreSQL", "HTML", "CSS", "JavaScript", "Bootstrap5", "UnitTest", "Git", "GitHub", "VSCode", "Heroku"]
    },
    {
        id: "ITish",
        name: "ITish",
        category: "Site",
        deploy_status: "Deployed",
        url: "https://itish.site/",
        header_image: "https://raw.githubusercontent.com/Gubchik123/ITish/master/md_images/readme_header.png",
        repo: {
            platform: "GitHub",
            url: "https://github.com/Gubchik123/ITish"
        },
        description: "The blog site with registration to publish posts on the IT topic.",
        skills: ["Python", "Flask", "SQL", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap5", "PyTest", "Git", "GitHub", "VSCode", "Azure"]
    },
    // Telegram bots
    {
        id: "WeatherBot",
        name: "WeatherBot",
        category: "Telegram bot",
        deploy_status: "Deployed",
        url: "https://t.me/WeatherGubchikBot",
        header_image: "https://raw.githubusercontent.com/Gubchik123/WeatherGubchikBot/master/images/WeatherGubchikBot_header.png",
        repo: {
            platform: "GitHub",
            url: "https://github.com/Gubchik123/WeatherGubchikBot"
        },
        description: "The bot for searching information about the weather in cities around the world (three languages and mailing).",
        skills: ["Python", "asyncio", "aiogram", "SQL", "PostgreSQL", "SQLAlchemy", "Parsing", "Git", "GitHub", "VSCode", "Railway"]
    },
    {
        id: "JobsDOUBot",
        name: "JobsDOUBot",
        category: "Telegram bot",
        deploy_status: "Deployed",
        url: "https://t.me/DOUGubchikBot",
        header_image: "https://raw.githubusercontent.com/Gubchik123/DOUGubchikBot/master/header.png",
        repo: {
            platform: "GitHub",
            url: "https://github.com/Gubchik123/DOUGubchikBot"
        },
        description: "The bot for for tracking new vacancies on the jobs.dou.ua website.",
        skills: ["Python", "asyncio", "aiogram", "SQL", "PostgreSQL", "SQLAlchemy", "Parsing", "Git", "GitHub", "VSCode", "Railway"]
    },
    {
        id: "EasyPostBot",
        name: "EasyPostBot",
        category: "Telegram bot",
        deploy_status: "Paused",
        url: "https://t.me/PostGubchikBot",
        header_image: "https://raw.githubusercontent.com/Gubchik123/PostGubchikBot/master/header.png",
        repo: {
            platform: "GitHub",
            url: "https://github.com/Gubchik123/PostGubchikBot"
        },
        description: "The assistant bot for channel and chat owners, publishes posts at specified intervals and settings.",
        skills: ["Python", "asyncio", "aiogram", "SQL", "PostgreSQL", "SQLAlchemy", "Parsing", "Git", "GitHub", "VSCode", "Railway"]
    },
    {
        id: "SmileBot",
        name: "SmileBot",
        category: "Telegram bot",
        deploy_status: "Paused",
        url: "https://t.me/SmileGubchikBot",
        header_image: "https://raw.githubusercontent.com/Gubchik123/SmileGubchikBot/master/md_images/SmileGubchikBot.png",
        repo: {
            platform: "GitHub",
            url: "https://github.com/Gubchik123/SmileGubchikBot"
        },
        description: "The bot for jokes and memes.",
        skills: ["Python", "asyncio", "aiogram", "Parsing", "Git", "GitHub", "VSCode", "Railway"]
    },
    // Test tasks
    {
        id: "dZENcode-test-task",
        name: "dZENcode test task",
        category: "Test task",
        deploy_status: "Not deployed",
        url: null,
        header_image: "https://raw.githubusercontent.com/Gubchik123/dZENcode-test-task/master/static/images/site_header.webp",
        repo: {
            platform: "GitHub",
            url: "https://github.com/Gubchik123/dZENcode-test-task",
        },
        description: "The test task for the dZENcode company. The landing page for leaving comments.",
        skills: ["Python", "Django", "SQL", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap5", "UnitTest", "Git", "GitHub", "VSCode"]
    },
    {
        id: "DrumNCode-test-task",
        name: "DrumNCode test task",
        category: "Test task",
        deploy_status: "Not deployed",
        url: null,
        header_image: "https://raw.githubusercontent.com/Gubchik123/DrumNCode-test-task/master/header.png",
        repo: {
            platform: "GitHub",
            url: "https://github.com/Gubchik123/DrumNCode-test-task",
        },
        description: "The test task for the DrumNCode company. API for book library management.",
        skills: ["Python", "Django", "DRF", "UnitTest", "SQL", "PostgreSQL", "Git", "GitHub", "VSCode"]
    },
    // REST APIs
    {
        id: "LapZoneAPI",
        name: "LapZoneAPI",
        category: "REST API",
        deploy_status: "Not deployed",
        url: null,
        header_image: "https://raw.githubusercontent.com/Gubchik123/LapZoneAPI/master/header.png",
        repo: {
            platform: "GitHub",
            url: "https://github.com/Gubchik123/LapZoneAPI"
        },
        description: "The REST API for the <a href='#LapZone'>LapZone</a> site.",
        skills: ["Python", "Django", "DRF", "SQL", "PostgreSQL", "Git", "GitHub", "VSCode"]
    },
    {
        id: "ITishAPI",
        name: "ITishAPI",
        category: "REST API",
        deploy_status: "Not deployed",
        url: null,
        header_image: "https://raw.githubusercontent.com/Gubchik123/ITishAPI/master/header.png",
        repo: {
            platform: "GitHub",
            url: "https://github.com/Gubchik123/ITishAPI"
        },
        description: "The REST API for the <a href='#ITish'>ITish</a> site.",
        skills: ["Python", "FastAPI", "SQL", "MySQL", "SQLAlchemy", "Git", "GitHub", "VSCode"]
    },
    // gRPC services
    {
        id: "ITish-gRPC",
        name: "ITish gRPC",
        category: "gRPC",
        deploy_status: "Not deployed",
        url: null,
        header_image: "https://raw.githubusercontent.com/Gubchik123/ITish-gRPC/master/header.png",
        repo: {
            platform: "GitHub",
            url: "https://github.com/Gubchik123/ITish-gRPC"
        },
        description: "The gRPC services for the <a href='#ITish'>ITish</a> site.",
        skills: ["Python", "gRPC", "SQL", "SQLite", "SQLAlchemy", "Git", "GitHub", "VSCode"]
    },
    // Static sites
    {
        id: "CV-site",
        name: "CV site",
        category: "Static site",
        deploy_status: "Deployed",
        url: "https://hubariev.com/",
        header_image: "https://raw.githubusercontent.com/Gubchik123/CV-site/master/md_images/header.png",
        repo: {
            platform: "GitHub",
            url: "https://github.com/Gubchik123/CV-site"
        },
        description: "My CV site with the following sections: Contacts, About Me, Skills, Experience, Projects, Education.",
        skills: ["HTML", "CSS", "JavaScript", "Bootstrap5", "Git", "GitHub", "VSCode", "Netlify"]
    },
    {
        id: "Post-HTML-generator",
        name: "Post HTML generator",
        category: "Static site",
        deploy_status: "Deployed",
        url: "https://html.hubariev.com/",
        header_image: "https://raw.githubusercontent.com/Gubchik123/Post-HTML-generator/master/static/images/md_header.png",
        repo: {
            platform: "GitHub",
            url: "https://github.com/Gubchik123/Post-HTML-generator"
        },
        description: "The site for generating post HTML using easy interface and usable buttons (the 'New post' page from the <a href='#ITish'>ITish</a> site).",
        skills: ["HTML", "CSS", "JavaScript", "Bootstrap5", "Git", "GitHub", "VSCode", "Netlify"]
    },
    // Vue.js sites
    {
        id: "Portfolio",
        name: "Portfolio",
        category: "Vue.js site",
        deploy_status: "Deployed",
        url: "https://portfolio.hubariev.com/",
        header_image: "https://raw.githubusercontent.com/Gubchik123/Portfolio/master/md_images/header.png",
        repo: {
            platform: "GitHub",
            url: "https://github.com/Gubchik123/Portfolio"
        },
        description: "Current site: the portfolio site with my projects.",
        skills: ["Vue.js", "HTML", "CSS", "JavaScript", "Bootstrap5", "Git", "GitHub", "VSCode", "Netlify"]
    },
    {
        id: "LapZoneAPI-frontend",
        name: "LapZoneAPI frontend",
        category: "Vue.js site",
        deploy_status: "Not deployed",
        url: null,
        header_image: "https://raw.githubusercontent.com/Gubchik123/LapZoneAPI-frontend/master/header.png",
        repo: {
            platform: "GitHub",
            url: "https://github.com/Gubchik123/LapZoneAPI-frontend"
        },
        description: "The frontend for the <a href='#LapZoneAPI'>LapZoneAPI</a>.",
        skills: ["Vue.js", "HTML", "CSS", "JavaScript", "Bootstrap5", "Git", "GitHub", "VSCode"]
    },
    {
        id: "ITishAPI-frontend",
        name: "ITishAPI frontend",
        category: "Vue.js site",
        deploy_status: "Not deployed",
        url: null,
        header_image: "https://raw.githubusercontent.com/Gubchik123/ITishAPI-frontend/master/header.png",
        repo: {
            platform: "GitHub",
            url: "https://github.com/Gubchik123/ITishAPI-frontend"
        },
        description: "The frontend for the <a href='#ITishAPI'>ITishAPI</a>.",
        skills: ["Vue.js", "HTML", "CSS", "JavaScript", "Bootstrap5", "Git", "GitHub", "VSCode"]
    },
    {
        id: "Weather-app",
        name: "Weather app",
        category: "Vue.js site",
        deploy_status: "Deployed",
        url: "https://weather.hubariev.com/",
        header_image: "https://raw.githubusercontent.com/Gubchik123/Vue-weather-app/master/src/assets/header.png",
        repo: {
            platform: "GitHub",
            url: "https://github.com/Gubchik123/Vue-weather-app"
        },
        description: "The weather app for searching information about the weather in cities around the world (English and Ukrainian languages).",
        skills: ["Vue.js", "HTML", "CSS", "JavaScript", "Bootstrap5", "Git", "GitHub", "VSCode", "Netlify"]
    },
    {
        id: "Calculator",
        name: "Calculator",
        category: "Vue.js site",
        deploy_status: "Deployed",
        url: "https://calculator.hubariev.com/",
        header_image: "https://raw.githubusercontent.com/Gubchik123/Vue-calculator/master/src/assets/header.png",
        repo: {
            platform: "GitHub",
            url: "https://github.com/Gubchik123/Vue-calculator"
        },
        description: "The calculator app (dark and light themes; history of calculations).",
        skills: ["Vue.js", "HTML", "CSS", "JavaScript", "Bootstrap5", "Git", "GitHub", "VSCode", "Netlify"]
    },
    // Obsidian plugins
    {
        id: "obsidian-movie-search-plugin",
        name: "Obsidian Movie Search Plugin",
        category: "Obsidian plugin",
        deploy_status: "Deployed",
        url: "https://obsidian.md/plugins?id=movie-search",
        header_image: "https://raw.githubusercontent.com/Gubchik123/obsidian-movie-search-plugin/master/md_images/header.png",
        repo: {
            platform: "GitHub",
            url: "https://github.com/Gubchik123/obsidian-movie-search-plugin"
        },
        description: "The Obsidian plugin that helps you to find movies and create notes.",
        skills: ["TypeScript", "CSS", "Git", "GitHub", "VSCode"]
    }
]