// Main JavaScript file

// Load and display open source projects
function loadProjects() {
    const lang = currentLanguage;

    // Open Source Projects
    const openSourceContainer = document.getElementById('opensource-projects');
    openSourceContainer.innerHTML = '';

    openSourceProjects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';

        const name = project.name[lang] || project.name.en;
        const description = project.description[lang] || project.description.en;

        let linksHTML = '';
        if (project.links) {
            linksHTML = '<div class="project-links">';
            project.links.forEach(link => {
                const label = typeof link.label === 'object' ? (link.label[lang] || link.label.en) : link.label;
                linksHTML += `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${label}</a>`;
            });
            linksHTML += '</div>';
        }

        card.innerHTML = `
            <h3>${name}</h3>
            <p>${description}</p>
            ${linksHTML}
        `;

        openSourceContainer.appendChild(card);
    });

    // Closed Source Projects
    const closedSourceContainer = document.getElementById('closedsource-projects');
    closedSourceContainer.innerHTML = '';

    closedSourceProjects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';

        const name = project.name[lang] || project.name.en;
        const description = project.description[lang] || project.description.en;
        const status = project.status[lang] || project.status.en;

        card.innerHTML = `
            <h3>${name}</h3>
            <p>${description}</p>
            <p><strong>${lang === 'zh' ? '状态' : (lang === 'ja' ? 'ステータス' : 'Status')}: </strong>${status}</p>
        `;

        closedSourceContainer.appendChild(card);
    });
}

// Load and display stores
function loadStores() {
    const lang = currentLanguage;

    const emptyMessage = {
        zh: '目前暂无商店信息',
        en: 'No stores listed yet',
        ja: '現在ストア情報はありません'
    };

    // Whitelist
    const whitelistContainer = document.getElementById('whitelist-stores');
    whitelistContainer.innerHTML = '';

    if (whitelistStores.length === 0) {
        whitelistContainer.innerHTML = `<p style="text-align: center; color: var(--text-secondary); padding: 20px;">${emptyMessage[lang]}</p>`;
    } else {
        whitelistStores.forEach(store => {
            const card = document.createElement('div');
            card.className = 'store-card';

            const name = lang === 'en' ? (store.nameEn || store.name) :
                lang === 'ja' ? (store.nameJa || store.name) :
                    store.name;
            const description = store.description[lang] || store.description.en;
            const region = store.region[lang] || store.region.en;

            card.innerHTML = `
            <h4>${name}</h4>
            <p>${description}</p>
            <p><strong>${lang === 'zh' ? '地区' : (lang === 'ja' ? '地域' : 'Region')}: </strong>${region}</p>
            <a href="${store.url}" target="_blank" rel="noopener noreferrer">${lang === 'zh' ? '访问商店' : (lang === 'ja' ? 'ストアを訪問' : 'Visit Store')} →</a>
        `;

            whitelistContainer.appendChild(card);
        });
    }

    // Blacklist
    const blacklistContainer = document.getElementById('blacklist-stores');
    blacklistContainer.innerHTML = '';

    if (blacklistStores.length === 0) {
        blacklistContainer.innerHTML = `<p style="text-align: center; color: var(--text-secondary); padding: 20px;">${emptyMessage[lang]}</p>`;
    } else {
        blacklistStores.forEach(store => {
            const card = document.createElement('div');
            card.className = 'store-card';

            const name = lang === 'en' ? (store.nameEn || store.name) :
                lang === 'ja' ? (store.nameJa || store.name) :
                    store.name;
            const reason = store.reason[lang] || store.reason.en;
            const region = store.region[lang] || store.region.en;

            card.innerHTML = `
            <h4>${name}</h4>
            <p><strong>${lang === 'zh' ? '原因' : (lang === 'ja' ? '理由' : 'Reason')}: </strong>${reason}</p>
            <p><strong>${lang === 'zh' ? '地区' : (lang === 'ja' ? '地域' : 'Region')}: </strong>${region}</p>
            <a href="${store.url}" target="_blank" rel="noopener noreferrer">${lang === 'zh' ? '查看链接' : (lang === 'ja' ? 'リンクを表示' : 'View Link')} →</a>
        `;

            blacklistContainer.appendChild(card);
        });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    loadStores();
});
