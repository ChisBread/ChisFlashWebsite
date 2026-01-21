# ChisFlash Community Website

这是 ChisFlash Community 的官方网站，托管在 Cloudflare Pages 上。

## 功能特性

- 🌐 **多语言支持**: 中文、英文、日语
- 🔓 **开源项目展示**: 展示 ChisFlash 的开源项目
- 🔒 **未开源项目预告**: 展示即将推出的项目
- 🏪 **商店参考列表**: 白名单和黑名单商店推荐
- 📱 **响应式设计**: 支持各种设备尺寸

## 文件结构

```
ChisFlashWebsite/
├── index.html      # 主页面
├── styles.css      # 样式文件
├── i18n.js         # 多语言支持
├── data.js         # 项目和商店数据（便于编辑）
├── main.js         # 主要逻辑
└── README.md       # 说明文档
```

## 如何编辑内容

### 编辑项目列表

在 `data.js` 文件中编辑以下数组：

- `openSourceProjects`: 开源项目列表
- `closedSourceProjects`: 未开源项目列表

每个项目包含多语言的名称、描述和链接。

### 编辑商店列表

在 `data.js` 文件中编辑：

- `whitelistStores`: 推荐商店列表
- `blacklistStores`: 需谨慎对待的商店列表

每个商店包含名称、描述、地区和链接信息。

### 添加新语言

1. 在 `i18n.js` 的 `translations` 对象中添加新语言
2. 在 `index.html` 中添加语言切换按钮
3. 在 `data.js` 中为项目和商店添加对应语言的翻译

## 部署到 Cloudflare Pages

### 方法 1: 通过 Git 仓库（推荐）

1. 将代码推送到 GitHub/GitLab 仓库
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. 进入 "Workers & Pages" → "Create application" → "Pages"
4. 连接你的 Git 仓库
5. 配置构建设置：
   - **Framework preset**: None
   - **Build command**: 留空
   - **Build output directory**: `/`
6. 点击 "Save and Deploy"

### 方法 2: 直接上传

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 "Workers & Pages" → "Create application" → "Pages"
3. 选择 "Direct Upload"
4. 上传整个项目文件夹（所有 .html, .css, .js 文件）
5. 点击 "Deploy"

### 方法 3: 使用 Wrangler CLI

```bash
# 安装 Wrangler
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 发布项目
wrangler pages publish . --project-name=chisflash-community
```

## 本地预览

可以使用任何静态文件服务器预览：

```bash
# 使用 Python
python -m http.server 8000

# 使用 Node.js (http-server)
npx http-server

# 使用 PHP
php -S localhost:8000
```

然后在浏览器中访问 `http://localhost:8000`

## 自定义域名

在 Cloudflare Pages 设置中可以添加自定义域名：

1. 进入项目设置 → "Custom domains"
2. 添加你的域名
3. 按照提示配置 DNS 记录

## 联系方式

- 📧 Email: chisbread@gmail.com
- 💬 Discord: https://discord.gg/Hq8PSSpnEM

---

© 2026 ChisFlash Community
