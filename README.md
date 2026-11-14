# PoojaConnect — Pooja & Priest Booking Platform

A responsive, multi-page HTML/CSS/JavaScript front-end web application with authentic, realistic photography for sacred rituals, temples, and Vedic priests.

## Run
Open `index.html` or `home2.html` in any modern web browser. No build tools or server setup required.

## Navigation Order
- `index.html` — **Home1**: Main landing page
- `home2.html` — **Home2**: Alternate search & festival-driven landing page
- `about.html` — **About**: Mission, Vedic heritage preservation, spiritual advisory council
- `priests.html` — **Priests**: Certified Vedic Priest Directory with uncropped authentic portraits
- `poojas.html` — **Poojas**: 9 traditional ceremonies with customized package comparison tiers
- `contact.html` — **Contact**: Enquiry form, ceremony helpline, SVG location pin icon, and OpenStreetMap
- `dashboard.html` — **Dashboard**: Devotee Dashboard with interactive tabs for Bookings, Assigned Pandits, Samagri Checklists, and Muhurtham Charts

## Key Fixes & Enhancements
1. **Dedicated Sacred Diya Favicon**: Vector SVG favicon (`assets/favicon.svg`) rendering crisply on all displays.
2. **Universal Devanagari Brand Logo**: `ॐ PoojaConnect` avoiding Tamil script.
3. **Fixed Navigation Order**: `Home1 -> Home2 -> About -> Priests -> Poojas -> Contact -> Dashboard`.
4. **Enhanced Footer**:
   - Larger, prominent Brand Logo (`1.55rem`).
   - Clean Back to Top circular icon button `↑` (removed bulky text).
   - Smooth hover animations on social media icons.
5. **1024px iPad Pro Navbar Fix**:
   - Responsive breakpoint adjusted to `1024px` so tablets display the clean mobile drawer menu without breaking or overflowing.
6. **Last Card Centered at 768px**:
   - CSS `:last-child:nth-child(odd)` ensures 3rd cards (priests, festivals, features) center cleanly on tablet viewports.
7. **100% Authentic Vedic Priest Photography**:
   - Generated and replaced all placeholder/irrelevant portraits with realistic photographs of Indian Hindu pandits wearing traditional tilak, dhoti, sacred thread, scriptures, and conducting havan.
8. **Interactive Devotee Dashboard**:
   - Fully functioning tabbed panels for Bookings, Assigned Pandits, Samagri Checklists with checkboxes, Muhurtham Charts, and Family Preferences.
9. **Authentication Layout Fixes**:
   - Dedicated non-overlapping header container for RTL and Theme buttons.
   - Social media buttons moved below the form/submit button.
   - SVG eye icon toggle for password show/hide.
10. **Mobile CTA & Card Button Fixes**:
    - Full width, centered text, and balanced button padding avoiding borders on mobile screens.
