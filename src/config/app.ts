import { Config } from 'fire-ng/lib/interfaces/config';

export const app = {
    title: "Tyler Ruff's Portfolio",
    email: "tyler.ruff@outlook.com",
    phone: "16092873897",
    theme: "#1427cc",
    company: "Blazed Labs LLC",
    icon: "https://blazed.sirv.com/logo/Beaker-Red.png",
    dns: {
        preconnect: [
            "https://blazed.sirv.com/",
            "https://res.cloudinary.com/"
        ],
        prefetch: [
            "//res.cloudinary.com/",
            "//blazed.sirv.com/"
        ]
    },
    license: "https://res.cloudinary.com/blazed-space/raw/upload/v1637201502/txt/license.txt",
    author: "https://res.cloudinary.com/blazed-space/raw/upload/v1637200777/txt/humans.txt",
    browserconfig: "https://res.cloudinary.com/blazed-space/raw/upload/v1652469389/xml/browserconfig.xml",
    social: {
        twitter: {
            handle: "TylerRuffDev",
            url: "https://twitter.com/TylerRuffDev"
        },
        facebook: {
            app: "503698127531557",
            url: "https://www.facebook.com/blazed.space/"
        },
        linkedin: {
            url: "https://www.linkedin.com/in/blz-one/"
        },
        instagram: {
            url: "https://www.instagram.com/blazed_labs/"
        }
    },
    image: "https://blazed.sirv.com/logo/Wallpaper-Beaker.png",
    description: "{ersonal website and portfolio for Tyler Ruff, founder of Blazed Labs LLC."
} as Config;