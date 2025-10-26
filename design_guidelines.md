# Design Guidelines: Multi-Hotel Booking Platform

## Design Approach
**Reference-Based + System Hybrid**: Drawing inspiration from established booking platforms (Booking.com, Airbnb, MakeMyTrip) while maintaining a clean, modern design system for consistency across multiple hotel listings and pages.

**Key Design Principles:**
- Clarity and scannability for comparing multiple hotels
- Trust-building through visual hierarchy and professional polish
- Efficient information density without overwhelming users
- Consistent patterns across different hotel layouts while allowing unique touches

---

## Typography System

**Font Families** (via Google Fonts CDN):
- Primary: 'Inter' - clean, modern sans-serif for UI elements, body text, and data
- Accent: 'Playfair Display' - elegant serif for hotel names and section headings to add luxury feel

**Type Scale:**
- Hero Headlines: text-5xl md:text-6xl (48px/60px), font-bold, Playfair Display
- Section Titles: text-3xl md:text-4xl (30px/36px), font-bold, Playfair Display
- Hotel Names: text-2xl md:text-3xl (24px/30px), font-semibold, Playfair Display
- Subsection Headers: text-xl (20px), font-semibold, Inter
- Body Text: text-base (16px), font-normal, Inter
- Metadata (prices, ratings, details): text-sm (14px), font-medium, Inter
- Labels & Captions: text-xs (12px), font-medium, Inter

---

## Layout System

**Spacing Primitives** (Tailwind units):
- Primary spacing set: 2, 4, 6, 8, 12, 16
- Use consistently: p-4, m-6, gap-8, space-y-12, py-16
- Card padding: p-6 on desktop, p-4 on mobile
- Section spacing: py-16 md:py-24 for major sections
- Container: max-w-7xl mx-auto px-4 md:px-6

**Grid Patterns:**
- Hotel listings: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
- Room cards within hotel: grid-cols-1 md:grid-cols-2 gap-4
- Filters sidebar: Fixed left column (w-64) on desktop, collapsible drawer on mobile
- City selection: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4

---

## Component Library

### Navigation & Header
**Main Navigation:**
- Sticky header (sticky top-0 z-50) with subtle shadow
- Logo/brand on left, navigation links center, login/register buttons right
- Mobile: Hamburger menu (transform to X on open) with slide-in drawer from right
- Search bar integrated into header on desktop, expandable on mobile
- Breadcrumbs on listing/detail pages for navigation clarity

### Search & Filters
**Homepage Search Widget:**
- Prominent centered search card with shadow-lg
- Fields: Destination (autocomplete dropdown), Check-in/Check-out (date pickers), Guests (dropdown counter)
- Large primary CTA button "Search Hotels"
- Compact version in header on scroll

**Filters Panel:**
- Desktop: Fixed sidebar with sections (Price Range, Star Rating, Amenities, Distance)
- Mobile: Bottom sheet drawer triggered by "Filters" button
- Each filter section collapsible with chevron icons
- Price range: Dual-thumb slider
- Checkboxes for amenities with count badges

### Hotel Cards (Listing Page)
**Card Structure:**
- Horizontal layout on desktop, vertical on mobile
- Image on left (40% width desktop, full-width mobile, h-48 md:h-full)
- Content area: Hotel name, location, star rating (visual stars), quick amenities icons
- Price display: Prominent on right (desktop) or bottom (mobile) with "per night" label
- "View Details" button as secondary action
- Hover state: Subtle lift (transform -translate-y-1) and shadow enhancement

### Individual Hotel Pages
**Hero Section:**
- Large image gallery (main image + thumbnail strip below)
- Hotel name overlay on semi-transparent backdrop (bg-black/50)
- Quick info bar: Rating, Reviews count, Location with map icon
- Sticky CTA: "Check Availability" button that follows scroll

**Room Selection Cards:**
- Each room type gets unique visual treatment
- Image carousel (3-5 images per room)
- Grid layout: Image left, details middle, price/CTA right
- Amenities as icon grid below description
- Expandable "More Details" section

### Forms & Input Elements
**Form Components:**
- Labels above inputs (text-sm font-medium mb-1)
- Input fields: border rounded-lg px-4 py-3 with focus:ring-2 focus:ring-offset-2
- Date pickers: Custom calendar overlay with dual selection for check-in/out
- Dropdowns: Custom styled with chevron icons
- Guest counter: +/- buttons with centered number display
- Error states: border-red-500 with text-red-600 message below
- Success states: border-green-500 with checkmark icon

**Multi-Step Booking Flow:**
- Progress indicator at top (steps: Select Room → Guest Details → Payment → Confirmation)
- Each step in separate container with clear headings
- "Back" and "Continue" buttons at bottom, right-aligned
- Data persistence using localStorage between steps

### Authentication Pages
**Login/Register Layout:**
- Split-screen on desktop: Image/branding left (40%), form right (60%)
- Mobile: Full-width form with small header image
- Tab switcher: Email / Phone Number authentication
- Social login buttons below form separator
- "Remember me" checkbox and "Forgot password" link
- Clear "Create Account" / "Already have account" toggle

### Dashboard/Profile
**User Dashboard:**
- Sidebar navigation (desktop) / bottom tabs (mobile)
- Sections: Upcoming Bookings, Past Bookings, Saved Hotels, Profile Settings
- Booking cards: Thumbnail, hotel name, dates, booking reference, status badge
- Empty states with illustrations and CTAs

---

## Images

**Hero Images:**
- Homepage: Large destination montage or cityscape (1920x800px)
- City landing pages: Iconic landmark or scenic view of that city (1920x600px)
- Hotel detail pages: Gallery of hotel exterior, lobby, premium rooms (various sizes)

**Descriptive Image Names:**
- City images: `delhi-skyline.jpg`, `dharamshala-mountains.jpg`, `chandigarh-architecture.jpg`
- Hotel images: `taj-dharamshala-exterior.jpg`, `hyatt-ludhiana-lobby.jpg`, `radisson-delhi-pool.jpg`
- Room images: `taj-deluxe-room.jpg`, `hyatt-executive-suite.jpg`, `keys-family-room.jpg`
- Facility images: `swimming-pool-evening.jpg`, `fitness-center-equipment.jpg`, `spa-treatment-room.jpg`

**Image Placement:**
- Homepage: Large hero with search overlay
- City pages: Medium hero (h-64 md:h-96) with city name overlay
- Hotel listings: Thumbnail images (aspect-ratio-4/3) in cards
- Hotel detail: Full-width gallery with lightbox functionality
- Room cards: Image carousels (aspect-ratio-16/9)

**Buttons on Images:**
- Use backdrop-blur-md bg-white/20 for transparent buttons on hero images
- Text should be white with font-semibold for readability
- No additional hover states needed beyond standard button behavior

---

## Interactions & Functionality

**Micro-interactions:**
- Smooth page transitions using CSS transitions (duration-300)
- Filter applications show loading skeleton briefly
- Star ratings fill on hover for reviews
- Image galleries with smooth fade transitions
- Price updates animate when filters change

**Mobile Optimizations:**
- Touch-friendly tap targets (min-height: 44px)
- Swipeable image galleries
- Bottom sheet modals for filters and selection
- Collapsible sections with smooth accordion animations
- Floating "Search" button on scroll (mobile only)

**JavaScript Features:**
- Date picker validation (check-out after check-in)
- Real-time price calculation based on dates and guests
- Hotel comparison (max 3): Sticky comparison bar at bottom
- Autocomplete for city/destination search
- Form validation with inline error messages
- localStorage for: search preferences, saved hotels, booking drafts, user session

---

## Visual Hierarchy & Data Display

**Hotel Listings Priority:**
1. Hotel name and star rating (largest, most prominent)
2. Location and distance (secondary, with icon)
3. Price per night (bold, contrasting color treatment)
4. Thumbnail image (draws attention first)
5. Quick amenities and rating score
6. CTA button (clear affordance)

**Comparison Visual Treatment:**
- Side-by-side cards with aligned attributes
- Highlight differences with subtle backgrounds
- "Best Value" or "Most Popular" badges where appropriate

**Trust Indicators:**
- Verified badges for authentic hotels
- Review count and average rating prominently displayed
- Secure payment icons in footer and checkout
- Cancellation policy clearly visible

---

This design creates a professional, trustworthy multi-hotel booking platform with consistent patterns that allow for unique hotel personalities while maintaining platform coherence. The system scales elegantly from single-city browsing to multi-hotel comparison and booking completion.