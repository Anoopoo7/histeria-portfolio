---
title: 🚀 Introducing Histeria Mailer: Transactional Email Infrastructure Without the Complexity
published: true
description: Trigger application emails with one simple REST API, build templates visually or with code, track email lifecycle events, and route via SMTP.
tags: webdev, javascript, python, api
canonical_url: https://histeriamails.vercel.app
cover_image: https://histeriamails.vercel.app/images/devto_cover.jpg
---

# 🚀 Introducing Histeria Mailer

> **Send transactional email without the complexity.**

If you've ever built a SaaS app, ecommerce store, or mobile backend, you know the frustration: traditional email marketing platforms (like Mailchimp or newsletter suites) are bloated with marketing campaign tools you don't need when all you want is a **fast, reliable API for application emails**.

Enter **Histeria Mailer (Histeria)** — clean transactional email infrastructure built specifically for developers and modern applications.

---

## 💡 What makes Histeria Mailer different?

Histeria Mailer focuses strictly on **transactional application email** — order confirmations, password resets, OTP verification codes, payment alerts, and account notifications.

### 1. One Simple REST API
Trigger application emails in milliseconds using standard HTTP requests:

```bash
curl -X POST https://api.histeria.dev/v1/emails/send \
  -H "x-api-key: ck_live_secret_key_123" \
  -H "Content-Type: application/json" \
  -d '{
    "templateId": "order-confirmation",
    "to": "customer@example.com",
    "data": {
      "customerName": "Alex",
      "orderNumber": "ORD-9812",
      "total": "₹1,249"
    }
  }'
```

### 2. Dual Template Builders (Visual + HTML Code)
Build once, send everywhere. Histeria Mailer gives you two template workflows:
- **Visual Drag & Drop Builder**: Position text blocks, buttons, images, and container layouts visually.
- **HTML Code Editor**: Full developer control over custom CSS, responsive tables, and dynamic variables `{{customerName}}`.

Both workflows compile into clean Histeria Templates ready to be triggered by `templateId` or slug.

---

## 🔄 Delivery Pipeline Flow

```text
Your Application
       │
       │  POST /v1/emails/send
       ▼
 ┌─────────────┐
 │ HISTERIA    │ ───► Template Rendering & Queue
 └─────────────┘
       │
       ▼
 ┌─────────────┐
 │ RECIPIENT   │ ───► Delivered • Opened • Clicked
 └─────────────┘
```

---

## 🛠️ Key Capabilities

- 🔐 **Organization API Keys**: Create, name, set optional expiration, and instantly revoke API keys (`x-api-key`).
- ⚡ **SMTP Protocol Support**: Keep your existing Nodemailer, PHPMailer, Rails, or Django setup. Route emails via Histeria SMTP relay without rewriting code.
- 📌 **Safe Template Versioning**: Maintain immutable version history (`v1`, `v2`, `v3 Current`). Test draft versions safely without breaking production.
- 📊 **Step-by-step Email Timeline**: Inspect every individual email record (`QUEUED` ➔ `PROCESSING` ➔ `SENT` ➔ `DELIVERED` ➔ `OPENED` ➔ `CLICKED`).

---

## 💻 Quick Code Example (Node.js / Fetch)

```javascript
const response = await fetch('https://api.histeria.dev/v1/emails/send', {
  method: 'POST',
  headers: {
    'x-api-key': process.env.HISTERIA_API_KEY,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    templateId: 'welcome-email',
    to: 'user@example.com',
    data: {
      customerName: 'Sarah',
      loginUrl: 'https://app.example.com/login'
    }
  })
});

const data = await response.json();
console.log(data.id, data.status); // e.g. "email_98ab71c2", "QUEUED"
```

---

## 🌐 Try Histeria Mailer Today!

Histeria Mailer is ready for developers, SaaS products, ecommerce platforms, fintech apps, and mobile backends.

- 🚀 **Live Dashboard**: [histeriamails.vercel.app](https://histeriamails.vercel.app/login)
- 📖 **Developer Docs**: [histeriamails.vercel.app/docs](https://histeriamails.vercel.app/docs)

Have feedback, questions, or ideas? Drop a comment below! 👇
