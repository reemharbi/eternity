const materials = [
    {
        title: "HTML",
        img_url: "https://icon-library.net/images/html5-icon/html5-icon-13.jpg",
        content: "HTML Stands for (Hypertext Markup Language.) HTML is the language used to create webpages. (Hypertext) refers to the hyperlinks that an HTML page may contain. (Markup language) refers to the way tags are used to define the page layout and elements within the page.",
        pdf_url: "https://websitesetup.org/wp-content/uploads/2015/11/Infopgraphic-CanvasCheatSheet-Final2.pdf"
    },
    {
        title: "CSS",
        img_url: "data:image/png;base64,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",
        content: "Cascading Style Sheets, fondly referred to as CSS, is a simply designed language intended to simplify the process of making web pages presentable. CSS allows you to apply styles to web pages. More importantly, CSS enables you to do this independent of the HTML that makes up each web page.",
        pdf_url: "https://websitesetup.org/wp-content/uploads/2016/10/wsu-css-cheat-sheet.pdf"
    },
    {
        title: "JavaScript",
        img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png",
        content: "JavaScript is a client scripting language which is used for creating web pages. It is a standalone language developed in Netscape. It is used when a webpage is to be made dynamic and add special effects on pages like rollover, roll out and many types of graphics.",
        pdf_url: "https://websitesetup.org/wp-content/uploads/2018/04/wsu-js-cheat-sheet.pdf"
    },
    {
        title: "Ruby on Rails",
        img_url: "https://pbs.twimg.com/media/CZGHPChUAAA3jqE.png",
        content: "The Rails framework helps developers to build websites and applications, because it abstracts and simplifies common repetitive tasks. Rails is written in Ruby, the programming language which is also used alongside Rails. Ruby is to Rails as PHP is to Symfony and Zend, or as Python is to Django.",
        pdf_url: "https://slashrocket.io/cheatsheet/RailsBeginnerCheatSheet.pdf"
    },
    {
        title: "React JS",
        img_url: "https://cdn.auth0.com/blog/react-js/react.png",
        content: "React is a front-end library developed by Facebook. It is used for handling the view layer for web and mobile apps. ReactJS allows us to create reusable UI components. It is currently one of the most popular JavaScript libraries and has a strong foundation and large community behind it.",
        pdf_url: "https://www.salesforce.com/content/dam/web/en_us/www/assets/pdf/datasheets/ms-react-js-cheatsheet-salesforce-argentina.pdf"
    },
    {
        title: "Git",
        img_url: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
        content: "Git is the free and open source distributed version control system that's responsible for everything GitHub related that happens locally on your computer.",
        pdf_url: "https://education.github.com/git-cheat-sheet-education.pdf"
    }
];

export default materials;