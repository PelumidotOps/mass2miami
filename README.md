# MASS2MIAMI LLC - Official Website

A website implementation for **MASS2MIAMI LLC**, directly brought to life from the Figma design system (`Section 1`, node `5974:2726`).

---

## 🚀 Live Pages Included

1. **Home (`/` or `index.html`)**
   - Hero banner with *"Together, We Build Stronger Communities Through Leadership"*
   - Partner & accreditation logos bar (Dexign Studio, Iconic, Optimal, Signum., Vectra)
   - *"What We Offer"* training tracks: Professional Development, Entrepreneurship & Economic Education, Youth Development, Small Business Coaching
   - 3-step onboarding grid: Register, Learn, Grow
   - Founder feature spotlight with Gilberto Amador quote and credentials
   - Collaborators & learning laboratories callout banner
   - Interactive FAQ accordion

2. **About Us (`/about` or `about.html`)**
   - Immersive hero section: *"Building community learning labs for today's leaders"*
   - Deep dive into *"Our Story"* and *"Our Approach"*
   - Founder & Principal Consultant profile (Gilberto Amador, M.Ed., Ed.S.)
   - Core guiding principles: Community First, Sustainable Impact, Collaborative Excellence

3. **Services (`/service` or `service.html`)**
   - Comprehensive training and development hero with 4-image showcase grid
   - Youth & Education Programs (Teacher for a Day, Nurse for a Day, Academic Tutoring, FAFSA Workshops)
   - **Interactive Academy Schedule & Calendar Widget**:
     - Month, Week, and Day views
     - Weekly range navigation (Today, Back, Next)
     - Time slot agenda from 6:00 AM to 12:00 PM+
     - Clickable workshop slots that open the session registration modal

4. **Accomplishments (`/accomplishment` or `accomplishment.html`)**
   - Proof of Impact header with multi-photo collage
   - 4-column key metrics bar: 35+ Years of Leadership Experience, 35+ Monthly Workshops, 35+ Organizations Served, 35+ Students & Professionals Trained
   - 6 Key Achievement Milestones:
     - Massachusetts Rehabilitation Commission Partnership ($900,000 initiative)
     - Better Business Bureau (BBB) Accreditation
     - The Amador Foundation
     - School District Partnerships across MA and FL
     - 20+ Community Learning Laboratories
     - Specialized Workforce Training with 70%+ placement
   - Client & Partner Testimonials with 5-star ratings and verified avatars

5. **Contact (`/contact` or `contact.html`)**
   - Full dark theme contact page with background visual
   - Direct contact details (`mass2miamicg@gmail.com`, MA & FL locations)
   - Clean, underlined interactive contact form with instant validation and submission toast feedback

---

## 🎨 Design System & Visual Fidelity

- **Typography**: 
  - Primary Headlines: `Playfair Display` (Serif)
  - Interface & Body Text: `Onest` (Sans-serif)
  - Accents & Numerals: `Inter`, `Manrope`, `Poppins`
- **Color Palette**:
  - Light Background: `#F6F7F1`
  - Dark Contrast / Cards: `#0C0C0C`
  - Accent / Primary CTA: `#1A3234` (Spruce Green)
  - Surface Cards: `#EFEDE7`
  - Star Ratings & Accents: `#E8563F`
- **Assets**: All high-resolution images, collages, avatars, and vector SVGs extracted directly from Figma CDN.

---

## 💻 How to Run Locally

### Prerequisites
- Node.js (v18+)

### Development Server
```bash
# Start local server at http://localhost:3000
npm run dev
# or
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Clean URLs are supported (`/about`, `/service`, `/accomplishment`, `/contact`).

### Production Build
```bash
npm run build
```
Creates a standalone, deploy-ready production bundle in the `dist/` directory.

---

## 🌐 Deployment

The project contains `vercel.json` and is ready for static deployment on Vercel, Netlify, Cloudflare Pages, or GitHub Pages.
