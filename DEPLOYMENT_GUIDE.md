# 🚀 Free Deployment Guide for Creative Content Next.js Website

This guide walks you through deploying your **Creative Content** website 100% freely with high availability, free SSL, and free domains.

---

## 🌟 Option 1: Deploy on Vercel (100% Free - Recommended for Next.js)

Vercel is built by the makers of Next.js and provides the smoothest, zero-configuration deployment experience with free automatic SSL certificates and global CDN.

### Step 1: Push your project to GitHub
Open your terminal in `/home/gs/Desktop/React Codes/creative-content` and run:

```bash
git add .
git commit -m "Creative Content academic writing website complete"
# Create a new repository on github.com (e.g., creative-content)
git remote add origin https://github.com/YOUR_USERNAME/creative-content.git
git branch -M main
git push -u origin main
```

### Step 2: Import into Vercel
1. Go to [https://vercel.com](https://vercel.com) and sign in using your GitHub account.
2. Click **"Add New..."** -> **"Project"**.
3. Select your `creative-content` repository and click **"Import"**.
4. Keep the default settings (Next.js preset is auto-detected).
5. Click **"Deploy"**.

✅ **Your website will be live in ~45 seconds at `https://creative-content.vercel.app` (or any custom subdomain of your choice for free)!**

---

## 🌐 Option 2: Deploy on Netlify (100% Free)

1. Sign up at [https://www.netlify.com](https://www.netlify.com).
2. Click **"Add new site"** → **"Import an existing project"**.
3. Choose **GitHub** and authorize your account.
4. Select `creative-content`.
5. Netlify will detect Next.js automatically:
   - Build Command: `npm run build`
   - Publish directory: `.next`
6. Click **"Deploy site"**.

✅ Your website will be live at `https://creative-content.netlify.app`.

---

## ⚡ Option 3: Deploy on Cloudflare Pages (100% Free with Unlimited Bandwidth)

1. Sign up at [https://dash.cloudflare.com](https://dash.cloudflare.com).
2. Go to **Workers & Pages** → **Create application** → **Pages**.
3. Connect your GitHub repository.
4. Framework preset: Select **Next.js**.
5. Click **Save and Deploy**.

✅ Your website will be live on `https://creative-content.pages.dev`.

---

## 🏷️ How to Get Free or Ultra-Affordable Custom Domains

### 1. Free Developer Subdomains
- **Vercel Subdomain**: Free forever (e.g., `creativecontent.vercel.app` or `research-writing.vercel.app`).
- **Netlify Subdomain**: Free forever (e.g., `creativecontent.netlify.app`).

### 2. Free Custom Domains via GitHub Student Pack
If you are a student or educator with an academic email (`.edu`, `.ac.in`, etc.):
- Sign up at [https://education.github.com/pack](https://education.github.com/pack).
- You get a **FREE 1-year `.me` or `.tech` custom domain** from Namecheap with free SSL and WHOIS privacy!

### 3. Ultra-Affordable Indian Custom Domain (`.in` / `.co.in`)
You can buy an official `.in` or `.co.in` domain (e.g., `creativecontentresearch.in`) for just **₹99 – ₹299 per year** on platforms like **Hostinger**, **GoDaddy**, or **Namecheap**.

#### Connecting your custom domain to Vercel (0 extra cost):
1. In Vercel, open your project → **Settings** → **Domains**.
2. Type your domain (e.g., `creativecontent.in`) and click **Add**.
3. Add the two DNS records shown by Vercel in your domain registrar's DNS panel:
   - **Type A**: `@` pointing to `76.76.21.21`
   - **Type CNAME**: `www` pointing to `cname.vercel-dns.com`
4. Vercel automatically provisions a free Let's Encrypt SSL certificate within 2 minutes!

---

## 📱 How to Change the WhatsApp Number

Open `src/data/servicesData.ts` and modify the `CONTACT_INFO` object:

```typescript
export const CONTACT_INFO = {
  brandName: "Creative Content",
  tagline: "All-in-One Research Writing Services",
  motto: "Quality Research. Perfect Results.",
  whatsappNumber: "+919876543210", // <-- Put your WhatsApp Number here
  displayPhone: "+91 98765 43210", // <-- Display format here
  email: "support@creativecontentresearch.com",
  socialChannel: "Teaching Life By Satyam",
  workingHours: "24/7 Academic Support",
  location: "New Delhi / Pan India Research Support"
};
```

You can also click the ⚙️ icon inside the floating WhatsApp drawer directly on the live website to update and test your phone number interactively!

---

## 💻 Running Locally

```bash
# In /home/gs/Desktop/React Codes/creative-content:
npm run dev
# Or production build & start:
npm run build
npm run start
```
Visit: [http://localhost:3000](http://localhost:3000)
