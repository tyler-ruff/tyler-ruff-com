import { Layout } from 'fire-ng/lib/interfaces/layout';

export const site = {
    logo: "https://blazed.sirv.com/logo/BLZ-blue.png",
    nav: [
        {
            text: "Home",
            link: "/home"
        },
        {
            text: "About",
            link: "/about"
        },
        {
            text: "Projects",
            link: "/projects"
        },
        {
            text: "Blog",
            link: "/blog"
        }
    ],
    burgerVisible: false,
    footerLinks: [
        {
            header: "Site",
            body: [
                {
                    text: "Home",
                    link: "/home"
                },
                {
                    text: "About",
                    link: "/about"
                },
                {
                    text: "Projects",
                    link: "/projects"
                },
                {
                    text: "Blog",
                    link: "/blog"
                }
            ]
        },
        {
            header: "Companies",
            body: [
                {
                    text: "Blazed Labs",
                    link: "https://blazed.company/"
                },
                {
                    text: "RTM Transit",
                    link: "https://rtmtransit.com/"
                },
                {
                    text: "Ocean Car Service",
                    link: "https://oceancarservice.com/"
                },
                {
                    text: "Concrete Games",
                    link: "https://blazed.games/"
                }
            ]
        },
        {
            header: "Publications",
            body: [
                {
                    text: "C-Suite",
                    link: "https://vexio.quest/"
                },
                {
                    text: "Finance",
                    link: "https://munch-mag.com/"
                },
                {
                    text: "Development",
                    link: "https://blazed.dev/"
                },
                {
                    text: "Esoteric",
                    link: "https://ixis.space/"
                }
            ]
        }
    ]
} as Layout;