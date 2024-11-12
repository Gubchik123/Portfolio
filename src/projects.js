export default [
    // TODO: Sub-stack for some stacks. Ex: Django - (allauth, ckeditor, etc.)
    // TODO: Add demo_images for some projects
    // Sites using templates
    {
        id: "LapZone",
        name: "LapZone",
        categories: ["Site", "Using templates"],
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
        categories: ["Site", "Using templates"],
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
        categories: ["Telegram bot"],
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
        categories: ["Telegram bot"],
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
        categories: ["Telegram bot"],
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
        categories: ["Telegram bot"],
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
        categories: ["Test task", "Site", "Landing", "Using templates"],
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
        categories: ["Test task", "REST API"],
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
    {
        id: "Starnavi-test-task",
        name: "Starnavi test task",
        categories: ["Test task", "REST API"],
        deploy_status: "Not deployed",
        url: null,
        header_image: "https://raw.githubusercontent.com/Gubchik123/Startnavi-test-task/master/header.png",
        repo: {
            platform: "GitHub",
            url: "https://github.com/Gubchik123/Startnavi-test-task",
        },
        description: "The test task for the Starnavi company. API for managing posts and comments with AI moderation and auto-reply.",
        skills: ["Python", "Django", "DRF", "Celery", "Redis", "Docker", "UnitTest", "SQL", "PostgreSQL", "Git", "GitHub", "VSCode"]
    },
    {
        id: "ApplicationsGubchikBot",
        name: "ApplicationsGubchikBot",
        categories: ["Test task", "Telegram bot"],
        deploy_status: "Not deployed",
        url: null,
        header_image: "https://raw.githubusercontent.com/Gubchik123/ApplicationsGubchikBot/master/header.png",
        repo: {
            platform: "GitHub",
            url: "https://github.com/Gubchik123/ApplicationsGubchikBot"
        },
        description: "The bot for sending applications to any sites with a form.",
        skills: ["Python", "asyncio", "aiogram", "Parsing", "Git", "GitHub", "VSCode"]
    },
    {
        id: "ResumesGubchikBot",
        name: "Robomate test task",
        categories: ["Test task", "Telegram bot"],
        deploy_status: "Deployed",
        url: "https://t.me/ResumesGubchikBot",
        header_image: "https://raw.githubusercontent.com/Gubchik123/ResumesGubchikBot/master/header.png",
        repo: {
            platform: "GitHub",
            url: "https://github.com/Gubchik123/ResumesGubchikBot"
        },
        description: "The test task for the Robomate company. The telegram bot for finding resumes from popular work sites.",
        skills: ["Python", "asyncio", "aiogram", "Parsing", "Git", "GitHub", "VSCode", "Railway"]
    },
    // REST APIs
    {
        id: "LapZoneAPI",
        name: "LapZoneAPI",
        categories: ["REST API"],
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
        categories: ["REST API"],
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
        categories: ["gRPC"],
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
    // Sites depends on APIs
    {
        id: "LapZoneAPI-frontend",
        name: "LapZoneAPI frontend",
        categories: ["Site", "Depends on API"],
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
        categories: ["Site", "Depends on API"],
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
    // Landings without backend
    {
        id: "CV-site",
        name: "CV site",
        categories: ["Landing", "Without backend"],
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
        categories: ["Landing", "Without backend"],
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
    {
        id: "Portfolio",
        name: "Portfolio",
        categories: ["Landing", "Without backend"],
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
        id: "Weather-app",
        name: "Weather app",
        categories: ["Landing", "Without backend"],
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
        categories: ["Landing", "Without backend"],
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
        name: "Movie Search",
        categories: ["Obsidian plugin"],
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