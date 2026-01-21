// Internationalization data
const translations = {
    zh: {
        "header.subtitle": "DIY 硬件社区 - 在你的创作上标注 \"Chis\"",
        "intro.title": "关于 ChisFlash 社区",
        "intro.description": "ChisFlash 社区是一个开放的 DIY 硬件社区。任何人都可以在自己的 DIY 产品上标注 \"Chis\"，以表明他们是这个创意生态系统的一部分。",
        "opensource.title": "🔓 开源项目",
        "opensource.description": "这些项目完全开源，可供社区使用。",
        "partialopensource.title": "🔓 部分开源项目",
        "partialopensource.description": "这些项目已开源部分组件。",
        "closedsource.title": "🔒 暂无开源计划的项目",
        "closedsource.description": "这些项目暂无开源计划。",
        "stores.title": "🏪 商店参考列表",
        "stores.disclaimer": "⚠️ 这些商店与 ChisFlash 社区无关。此列表仅供参考。购买前请自行调查研究。",
        "stores.whitelist.title": "✅ 推荐商店",
        "stores.whitelist.description": "获得良好社区反馈的商店",
        "stores.blacklist.title": "⚠️ 需谨慎对待",
        "stores.blacklist.description": "收到负面社区报告的商店",
        "footer.contact.title": "联系我们",
        "footer.contact.description": "如需申请收录或有其他疑问，请联系我们："
    },
    en: {
        "header.subtitle": "A DIY Hardware Community - Mark Your Creation with \"Chis\"",
        "intro.title": "About ChisFlash Community",
        "intro.description": "ChisFlash Community is an open DIY hardware community. Anyone can mark their DIY products with \"Chis\" to show they are part of this creative ecosystem.",
        "opensource.title": "🔓 Open Source Projects",
        "opensource.description": "These projects are fully open source and available for the community.",
        "partialopensource.title": "🔓 Partially Open Source Projects",
        "partialopensource.description": "These projects have some components open sourced.",
        "closedsource.title": "🔒 Projects Without Open Source Plans",
        "closedsource.description": "These projects currently have no plans to be open sourced.",
        "stores.title": "🏪 Store References",
        "stores.disclaimer": "⚠️ These stores are NOT affiliated with ChisFlash Community. This list is for reference only. Please conduct your own research before purchasing.",
        "stores.whitelist.title": "✅ Recommended Stores",
        "stores.whitelist.description": "Stores with good community feedback",
        "stores.blacklist.title": "⚠️ Caution Advised",
        "stores.blacklist.description": "Stores with negative community reports",
        "footer.contact.title": "Contact Us",
        "footer.contact.description": "For listing requests or other inquiries, please contact us:"
    },
    ja: {
        "header.subtitle": "DIY ハードウェアコミュニティ - あなたの作品に \"Chis\" とマークしよう",
        "intro.title": "ChisFlash コミュニティについて",
        "intro.description": "ChisFlash コミュニティは、オープンな DIY ハードウェアコミュニティです。誰でも自分の DIY 製品に \"Chis\" とマークして、このクリエイティブなエコシステムの一部であることを示すことができます。",
        "opensource.title": "🔓 オープンソースプロジェクト",
        "opensource.description": "これらのプロジェクトは完全にオープンソースで、コミュニティで利用可能です。",
        "partialopensource.title": "🔓 部分的にオープンソースのプロジェクト",
        "partialopensource.description": "これらのプロジェクトは一部のコンポーネントがオープンソース化されています。",
        "closedsource.title": "🔒 オープンソース化予定なしのプロジェクト",
        "closedsource.description": "これらのプロジェクトは現在オープンソース化の予定がありません。",
        "stores.title": "🏪 ストア参考リスト",
        "stores.disclaimer": "⚠️ これらのストアは ChisFlash コミュニティとは関係ありません。このリストは参考のみです。購入前にご自身で調査してください。",
        "stores.whitelist.title": "✅ 推奨ストア",
        "stores.whitelist.description": "コミュニティから良いフィードバックを得ているストア",
        "stores.blacklist.title": "⚠️ 注意が必要",
        "stores.blacklist.description": "コミュニティから否定的な報告があるストア",
        "footer.contact.title": "お問い合わせ",
        "footer.contact.description": "掲載リクエストやその他のお問い合わせは、こちらまでご連絡ください："
    }
};

let currentLanguage = 'zh';

// Switch language
function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);

    // Update active button
    document.querySelectorAll('.language-switcher button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`btn-${lang}`).classList.add('active');

    // Update HTML lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : (lang === 'ja' ? 'ja' : 'en');

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Reload dynamic content
    if (typeof loadProjects === 'function') {
        loadProjects();
    }
    if (typeof loadStores === 'function') {
        loadStores();
    }
}

// Initialize language on page load
function initLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'zh';
    switchLanguage(savedLang);
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
} else {
    initLanguage();
}
