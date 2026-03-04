# BITCODE V6.0 – Inter University Coding Competition

## Overview

A professional hackathon-style landing page for BITCODE V6.0, organized by the Business Information Technology Students' Association (BITSA) at Rajarata University of Sri Lanka. Inspired by the design quality and animation style of modern tech event websites.

**Theme:** Magical Tech Universe – where coders become wizards and code becomes magic.

## Tech Stack

- **Frontend:** React + TypeScript + Vite
- **Styling:** Tailwind CSS with custom magic theme
- **Animations:** Framer Motion (scroll reveals, hover effects, staggered cards)
- **Routing:** Wouter
- **Backend:** Express.js (minimal, static serving only)

## Design System

- **Background:** `#0B0F19` (deep dark blue-black)
- **Magic Purple:** `#6A00FF`
- **Neon Cyan:** `#00E5FF`
- **Electric Violet:** `#9333EA`
- **Heading Font:** Orbitron (futuristic)
- **Body Font:** Inter
- **Accent Font:** Space Grotesk

## Page Structure

All content is on a single page (`/`) with smooth scroll navigation:

1. **Navbar** – Sticky with glow logo, smooth scroll links, mobile menu
2. **Hero** – Full-screen with animated particle canvas, glowing title, CTA buttons, floating orbs
3. **About** – Split layout with glassmorphism card, organizer info, 3 pillar cards
4. **Objectives** – 5 animated objective cards + magic tagline panel
5. **Competition Format** – Pre-Selection Round vs Final Hackathon cards, supported languages
6. **Prize Pool** – Podium-style prize display (1st/2nd/3rd), 4th-10th consolation prizes
7. **Timeline** – Vertical alternating timeline with neon connectors (March 10 – April 02)
8. **Judging Criteria** – 4 criteria cards with animated progress bars (Innovation 30%, Impact 30%, Technical 20%, Presentation 20%)
9. **Register CTA** – Full-width call-to-action with floating particles and 3-step process
10. **Footer** – Links, contact, BITSA info

## Components

- `client/src/components/ParticleBackground.tsx` – Canvas-based animated particles with connecting lines
- `client/src/components/Navbar.tsx` – Sticky nav with mobile menu
- `client/src/components/Hero.tsx` – Full-screen hero with orbs and CTAs
- `client/src/components/About.tsx` – About section with glassmorphism
- `client/src/components/Objectives.tsx` – Animated objective cards
- `client/src/components/CompetitionFormat.tsx` – Round format cards + language tags
- `client/src/components/PrizePools.tsx` – Prize podium display
- `client/src/components/Timeline.tsx` – Vertical alternating timeline
- `client/src/components/JudgingCriteria.tsx` – Criteria cards with progress bars
- `client/src/components/Register.tsx` – CTA section with steps
- `client/src/components/Footer.tsx` – Site footer

## Key Features

- **Animated particle background** with inter-particle connection lines
- **Framer Motion** scroll reveal animations on all sections
- **Glassmorphism cards** with gradient borders and glow effects
- **Neon glow effects** on text, buttons, and icons
- **Fully responsive** across all breakpoints
- **Smooth scrolling** navigation
- **Hover interactions** with scale and glow transitions
- **Custom scrollbar** styled to match the magic theme

## Running

```bash
npm run dev
```

Serves on port 5000 (Express + Vite).

## Contact

BITSA: bitsa@mgt.rjt.ac.lk
