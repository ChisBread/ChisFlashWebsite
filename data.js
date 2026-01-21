// Data for projects and stores
// Edit this file to add/remove/modify entries

const openSourceProjects = [
    {
        name: {
            zh: "ChisFlash 核心固件",
            en: "ChisFlash Core Firmware",
            ja: "ChisFlash コアファームウェア"
        },
        description: {
            zh: "ChisFlash 的核心固件系统，支持多种硬件平台。",
            en: "The core firmware system for ChisFlash, supporting multiple hardware platforms.",
            ja: "複数のハードウェアプラットフォームをサポートする ChisFlash のコアファームウェアシステム。"
        },
        links: [
            { label: "GitHub", url: "https://github.com/chisflash/core" }
        ]
    },
    {
        name: {
            zh: "ChisFlash 开发工具",
            en: "ChisFlash Dev Tools",
            ja: "ChisFlash 開発ツール"
        },
        description: {
            zh: "用于开发和调试 ChisFlash 项目的工具套件。",
            en: "A toolkit for developing and debugging ChisFlash projects.",
            ja: "ChisFlash プロジェクトを開発およびデバッグするためのツールキット。"
        },
        links: [
            { label: "GitHub", url: "https://github.com/chisflash/devtools" },
            { label: { zh: "文档", en: "Docs", ja: "ドキュメント" }, url: "https://docs.chisflash.com" }
        ]
    }
];

const closedSourceProjects = [
    {
        name: {
            zh: "ChisFlash Pro",
            en: "ChisFlash Pro",
            ja: "ChisFlash Pro"
        },
        description: {
            zh: "专业版固件，提供更多高级功能和性能优化。",
            en: "Professional firmware with advanced features and performance optimizations.",
            ja: "高度な機能とパフォーマンスの最適化を備えたプロフェッショナルファームウェア。"
        },
        status: {
            zh: "开发中",
            en: "In Development",
            ja: "開発中"
        }
    },
    {
        name: {
            zh: "ChisFlash 云服务",
            en: "ChisFlash Cloud Services",
            ja: "ChisFlash クラウドサービス"
        },
        description: {
            zh: "基于云的设备管理和固件更新服务。",
            en: "Cloud-based device management and firmware update services.",
            ja: "クラウドベースのデバイス管理とファームウェア更新サービス。"
        },
        status: {
            zh: "计划中",
            en: "Planned",
            ja: "計画中"
        }
    }
];

const whitelistStores = [
    {
        name: "示例商店 A",
        nameEn: "Example Store A",
        nameJa: "サンプルストア A",
        description: {
            zh: "提供优质的 ChisFlash 兼容产品，服务良好。",
            en: "Provides quality ChisFlash-compatible products with good service.",
            ja: "優れたサービスで高品質な ChisFlash 互換製品を提供。"
        },
        url: "https://example-store-a.com",
        region: {
            zh: "全球",
            en: "Global",
            ja: "グローバル"
        }
    },
    {
        name: "示例商店 B",
        nameEn: "Example Store B",
        nameJa: "サンプルストア B",
        description: {
            zh: "专注于定制 DIY 硬件，交付快速。",
            en: "Specializes in custom DIY hardware with fast delivery.",
            ja: "迅速な配送でカスタム DIY ハードウェアに特化。"
        },
        url: "https://example-store-b.com",
        region: {
            zh: "亚洲",
            en: "Asia",
            ja: "アジア"
        }
    }
];

const blacklistStores = [
    {
        name: "警示商店 X",
        nameEn: "Warning Store X",
        nameJa: "警告ストア X",
        reason: {
            zh: "多次报告产品质量问题和售后服务差。",
            en: "Multiple reports of quality issues and poor after-sales service.",
            ja: "品質問題とアフターサービスの悪さに関する複数の報告。"
        },
        url: "https://example-bad-store.com",
        region: {
            zh: "未知",
            en: "Unknown",
            ja: "不明"
        }
    }
];
