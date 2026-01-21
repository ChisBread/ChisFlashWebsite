// Data for projects and stores
// Edit this file to add/remove/modify entries

const openSourceProjects = [
    {
        name: {
            zh: "ChisFlash 1M SRAM",
            en: "ChisFlash 1M SRAM",
            ja: "ChisFlash 1M SRAM"
        },
        description: {
            zh: "GBA烧录卡 - 支持大部分游戏，需要电池，但是最便宜的选择。",
            en: "GBA Flashcart - Supports most games, requires battery, but the most affordable option.",
            ja: "GBAフラッシュカート - ほとんどのゲームに対応、バッテリーが必要ですが、最も手頃な価格です。"
        },
        links: [
            { label: "GitHub", url: "https://github.com/ChisBread/ChisFlash" }
        ]
    },
    {
        name: {
            zh: "ChisFlash 1M FRAM",
            en: "ChisFlash 1M FRAM",
            ja: "ChisFlash 1M FRAM"
        },
        description: {
            zh: "GBA烧录卡 - 支持大部分游戏，不需要电池。",
            en: "GBA Flashcart - Supports most games, no battery required.",
            ja: "GBAフラッシュカート - ほとんどのゲームに対応、バッテリー不要。"
        },
        links: [
            { label: "GitHub", url: "https://github.com/ChisBread/ChisFlash" }
        ]
    },
    {
        name: {
            zh: "ChisFlash 1M Flash",
            en: "ChisFlash 1M Flash",
            ja: "ChisFlash 1M Flash"
        },
        description: {
            zh: "GBA烧录卡 - 支持宝可梦等游戏。",
            en: "GBA Flashcart - Supports Pokémon and similar games.",
            ja: "GBAフラッシュカート - ポケモンなどのゲームに対応。"
        },
        links: [
            { label: "GitHub", url: "https://github.com/ChisBread/ChisFlash" }
        ]
    },
    {
        name: {
            zh: "ChisFlash 虚拟铁电卡",
            en: "ChisFlash Virtual FRAM Cart",
            ja: "ChisFlash 仮想FRAMカート"
        },
        description: {
            zh: "GBA烧录卡 - 低成本的1M FRAM替代方案。",
            en: "GBA Flashcart - Low-cost 1M FRAM alternative.",
            ja: "GBAフラッシュカート - 低コストの1M FRAM代替品。"
        },
        links: [
            { label: "OSHWHub", url: "https://oshwhub.com/morinaka/gba-xu-ni-tie-dian-ka-chisflash-kai-yuan-zuo-pin" }
        ]
    },
    {
        name: {
            zh: "ChisFlash MBC5 烧录卡",
            en: "ChisFlash MBC5 Flashcart",
            ja: "ChisFlash MBC5 フラッシュカート"
        },
        description: {
            zh: "GBC烧录卡 - MBC5芯片支持。",
            en: "GBC Flashcart - MBC5 chip support.",
            ja: "GBCフラッシュカート - MBC5チップ対応。"
        },
        links: [
            { label: "GitHub", url: "https://github.com/moribaka/ChisFlash-MBC5" }
        ]
    },
    {
        name: {
            zh: "ChisFlash MBCX 烧录卡",
            en: "ChisFlash MBCX Flashcart",
            ja: "ChisFlash MBCX フラッシュカート"
        },
        description: {
            zh: "GBC烧录卡 - 支持RTC，并且通过全面的RTC测试。",
            en: "GBC Flashcart - RTC support, passed comprehensive RTC testing.",
            ja: "GBCフラッシュカート - RTC対応、包括的なRTCテストに合格。"
        },
        links: [
            { label: "GitHub", url: "https://github.com/moribaka/ChisFlash-MBCX" }
        ]
    },
    {
        name: {
            zh: "beggar_socket",
            en: "beggar_socket",
            ja: "beggar_socket"
        },
        description: {
            zh: "轻量级低成本GBA卡带读取器。",
            en: "Lightweight low-cost GBA cart reader.",
            ja: "軽量で低コストのGBAカートリーダー。"
        },
        links: [
            { label: "GitHub", url: "https://github.com/julpage/beggar_socket" }
        ]
    },
    {
        name: {
            zh: "MoriPower GBA锂电充放模块",
            en: "MoriPower GBA Li-ion Module",
            ja: "MoriPower GBAリチウムイオンモジュール"
        },
        description: {
            zh: "GBA用锂电充放模块，基于IP5306芯片。",
            en: "Li-ion battery charging module for GBA, based on IP5306.",
            ja: "IP5306ベースのGBA用リチウムイオン充電モジュール。"
        },
        links: [
            { label: "OSHWHub", url: "https://oshwhub.com/morinaka/moripower-gba-yong-li-dian-chong-fang-mo-kuai-ip5306-ban-ben" }
        ]
    }
];

const partialOpenSourceProjects = [
    {
        name: {
            zh: "SuperChis Prime 平价TF烧录卡",
            en: "SuperChis Prime Affordable TF Flashcart",
            ja: "SuperChis Prime 手頃なTFフラッシュカート"
        },
        description: {
            zh: "GBA烧录卡 - 平价TF卡烧录卡解决方案。",
            en: "GBA Flashcart - Affordable TF card flashcart solution.",
            ja: "GBAフラッシュカート - 手頃な価格のTFカードソリューション。"
        },
        links: [
            { label: { zh: "SuperCard-Like HDL", en: "SuperCard-Like HDL", ja: "SuperCard-Like HDL" }, url: "https://github.com/ChisBread/SuperChis" },
            { label: { zh: "固件", en: "Firmware", ja: "ファームウェア" }, url: "https://github.com/davidgfnet/superfw" }
        ]
    }
];

const closedSourceProjects = [
    {
        name: {
            zh: "ChisFlash RTC (v1.1)",
            en: "ChisFlash RTC (v1.1)",
            ja: "ChisFlash RTC (v1.1)"
        },
        description: {
            zh: "GBA烧录卡 - 实时时钟功能支持。",
            en: "GBA Flashcart - Real-time clock support.",
            ja: "GBAフラッシュカート - リアルタイムクロック機能対応。"
        },
        status: {
            zh: "暂无开源计划",
            en: "No open source plan",
            ja: "オープンソース化の予定なし"
        }
    },
    {
        name: {
            zh: "ChisFlash Rumble (v1.2)",
            en: "ChisFlash Rumble (v1.2)",
            ja: "ChisFlash Rumble (v1.2)"
        },
        description: {
            zh: "GBA烧录卡 - 震动功能支持。",
            en: "GBA Flashcart - Rumble feature support.",
            ja: "GBAフラッシュカート - 振動機能対応。"
        },
        status: {
            zh: "暂无开源计划",
            en: "No open source plan",
            ja: "オープンソース化の予定なし"
        }
    },
    {
        name: {
            zh: "ChisFlash Solar+RTC",
            en: "ChisFlash Solar+RTC",
            ja: "ChisFlash Solar+RTC"
        },
        description: {
            zh: "GBA烧录卡 - 阳光传感器+实时时钟功能支持。",
            en: "GBA Flashcart - Solar sensor and real-time clock support.",
            ja: "GBAフラッシュカート - 太陽センサーとリアルタイムクロック対応。"
        },
        status: {
            zh: "暂无开源计划",
            en: "No open source plan",
            ja: "オープンソース化の予定なし"
        }
    },
    {
        name: {
            zh: "ChisFlash Gravity+Gyro+Rumble",
            en: "ChisFlash Gravity+Gyro+Rumble",
            ja: "ChisFlash Gravity+Gyro+Rumble"
        },
        description: {
            zh: "GBA烧录卡 - 重力+陀螺仪+震动功能支持。",
            en: "GBA Flashcart - Gravity, gyroscope, and rumble support.",
            ja: "GBAフラッシュカート - 重力・ジャイロ・振動機能対応。"
        },
        status: {
            zh: "暂无开源计划",
            en: "No open source plan",
            ja: "オープンソース化の予定なし"
        }
    }
];

const whitelistStores = [];

const blacklistStores = [];
