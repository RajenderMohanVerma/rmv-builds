# 💕 RMV Romantic Proposal Application

A beautiful, interactive web-based romantic proposal application with stunning animations, photo gallery, and multiple rejection stages.

---

## 🎯 Project Overview

This is a fun and romantic proposal website designed to ask someone special "Do you love me?" in the most entertaining way possible! The app features:

- **Interactive Yes/No buttons** with progressive emotional responses
- **5 rejection stages** with emotionally pleasing GIFs
- **Success celebration page** with confetti animation
- **Photo gallery** to display memories
- **Background music** control with toggle button
- **Particle effects** (hearts, sparkles, bubbles)
- **Responsive design** for all devices
- **Smooth animations** and transitions

---

## 📁 Project Structure

```
rmv-builds/
├── index.html              # Main proposal page
├── no1.html               # Rejection response stage 1
├── no2.html               # Rejection response stage 2
├── no3.html               # Rejection response stage 3
├── yes.html               # Success celebration page
├── script.js              # All JavaScript logic & interactivity
├── style.css              # Complete styling & animations
├── README.md              # Project documentation
└── Static/
    └── images/            # All GIF image files
        ├── mochi.gif
        ├── manja.gif
        ├── couple-forgive-me.gif
        ├── peach-goma-phone.gif
        ├── maaan jao.gif
        ├── 6.gif
        └── 7.gif
```

---

## ✨ Key Features

### 1. **Interactive Rejection System**

- **Stage 1**: "Please think again! 🙄" - First gentle rejection response
- **Stage 2**: "Ek aur baar Soch lo! 😣" - More emotional pleading
- **Stage 3**: "Beautiful pls Man jao na! 😭" - Increasingly desperate
- **Stage 4**: "Meri bestie... please? 🥺" - Deep emotional appeal
- **Stage 5**: "I'll code forever for you! 💻" - Ultimate surrender
- **After Stage 5**: "Catch Me!" - No button starts running away on hover

### 2. **Beautiful Animations**

- **Floating Particles**: Hearts ❤️, Sparkles ✨, and Bubbles float across the screen
- **Particle Burst**: On "Yes" click, 100+ particles burst out
- **Smooth Transitions**: All page changes are animated
- **Button Hover Effects**: Gold glow and scale animations
- **Success Pulse**: Container pulses when proposal is accepted

### 3. **Photo Gallery**

- **Modal Gallery**: Beautiful carousel display for memories
- **Navigation**: Previous/Next buttons to browse photos
- **Captions**: Each photo has a romantic caption
- **Click to Close**: Modal closes on background click
- **Responsive Images**: Works perfectly on all screen sizes

### 4. **Audio Features**

- **Background Music**: Romantic music plays on user interaction
- **Music Toggle**: 🔊/🔇 button in top-right corner
- **Sound Effects**: Click sounds on button interactions
- **Volume Control**: Music volume set to 30% to not be too loud

### 5. **Design Features**

- **Luxury Pink Color Scheme**: Beautiful pink (#ff4d6d) throughout
- **Glassmorphism Effect**: Semi-transparent frosted glass containers
- **Gradient Backgrounds**: Smooth pink gradient backgrounds
- **Cross-browser Compatible**: Works on Chrome, Firefox, Safari, Edge

---

## 🚀 How to Use

### 1. **Open the Application**

- Open `index.html` in your web browser
- You'll see the main proposal question: "Do you love me? 🤗"

### 2. **Click "Yes"**

- Confetti animation plays
- Celebration message displays
- Success GIF appears
- Photo gallery button becomes available
- View memories by clicking "View Our Memories 💕"

### 3. **Click "No"**

- Navigate through 5 emotional rejection stages
- Each stage has different message and GIF
- After stage 5, "No" button starts running away
- Can try to click or hover over it

### 4. **Toggle Music**

- Click 🔊 button in top-right corner
- Music will play/pause
- Volume is optimized for best experience

### 5. **View Gallery**

- After saying "Yes", click "View Our Memories 💕"
- Browse through photos with Previous/Next buttons
- Click outside modal to close gallery

---

## 🎨 Customization Guide

### Change Messages

Edit `script.js`, in the `rejectionStages` array:

```javascript
const rejectionStages = [
  {
    question: "Your custom question here",
    message: "Your custom message here",
    gifPath: "filename.gif",
  },
  // ... more stages
];
```

### Add/Change Photos in Gallery

Edit `photoGallery` array in `script.js`:

```javascript
const photoGallery = [
  { src: "image-url-here", caption: "Your caption 💕" },
  // ... more photos
];
```

### Change Colors

Edit `:root` variables in `style.css`:

```css
:root {
  --primary: #ff4d6d; /* Primary pink color */
  --primary-hover: #ff758f; /* Hover color */
  --bg-gradient: linear-gradient(...); /* Background */
  /* ... more variables */
}
```

### Change Background Music

Edit `audioConfig` in `script.js`:

```javascript
const audioConfig = {
  backgroundMusic: "your-music-url-here",
  clickSound: "your-sound-url-here",
  successSound: "your-sound-url-here",
};
```

---

## 💡 Technology Stack

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern animations, flexbox, glassmorphism effects
- **JavaScript (Vanilla)**: No frameworks, pure JS for interactivity
- **Canvas Confetti**: Library for celebratory confetti animation
- **Tenor API** (removed, replaced with local images): For GIF support

---

## 📱 Browser Support

- ✅ Google Chrome (Latest)
- ✅ Mozilla Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Microsoft Edge (Latest)
- ✅ Mobile Browsers (iOS Safari, Chrome Mobile)

---

## 🎵 Audio & Assets

**Audio Sources**:

- Background Music: Romantic instrumental track
- Click Sound: Soft button click effect
- Success Sound: Celebratory chime

**Image Assets**:

- All GIFs stored in `Static/images/` folder
- Uses local images (no external Tenor API dependency)
- Optimized for web display

---

## 🌟 Features Breakdown

| Feature            | Location                                 | Status    |
| ------------------ | ---------------------------------------- | --------- |
| Main Proposal Page | index.html                               | ✅ Active |
| 5 Rejection Stages | no1.html, no2.html, no3.html + script.js | ✅ Active |
| Success Page       | yes.html                                 | ✅ Active |
| Photo Gallery      | yes.html + script.js                     | ✅ Active |
| Background Music   | script.js                                | ✅ Active |
| Particle Effects   | script.js + style.css                    | ✅ Active |
| Confetti Animation | yes.html + canvas-confetti lib           | ✅ Active |
| Responsive Design  | style.css                                | ✅ Active |
| Button Animations  | style.css                                | ✅ Active |

---

## 🔧 Troubleshooting

**Music not playing?**

- Check browser autoplay policy (may need user interaction first)
- Verify audio file URL is correct in `audioConfig`

**Images not showing?**

- Ensure `Static/images/` folder path is correct
- Check file extensions match exactly (case-sensitive on Linux)

**Confetti not appearing?**

- Verify canvas-confetti library is loaded (check browser console)
- Ensure confetti CDN link is valid in yes.html

**Gallery not opening?**

- Check if localStorage has space available
- Verify gallery modal HTML is present in yes.html

---

## 📝 File Descriptions

### `index.html`

Main proposal page with:

- Welcome message
- Manja GIF animation
- Yes/No buttons
- Music toggle
- Gallery modal structure

### `no1.html` - `no3.html`

Rejection response pages with:

- Emotional messages
- GIF displays
- Navigation links to next stages
- Music toggle on each page

### `yes.html`

Success celebration page with:

- Success message
- Celebratory Mochi GIF
- Photo gallery modal
- Gallery button
- Confetti & particle effects

### `script.js`

Contains all interactivity:

- Rejection stages configuration
- Photo gallery management
- Audio control functions
- Particle effect system
- Button event listeners
- Modal management

### `style.css`

Complete styling including:

- Color scheme variables
- Container & button styles
- Animations (floats, pulses, glows)
- Particle effect styles
- Gallery modal styles
- Responsive breakpoints

---

## 🎁 Special Features

### Particle System

Three types of particles fall continuously:

- **Hearts** ❤️ - Love symbols
- **Sparkles** ✨ - Magical effects
- **Bubbles** - Soft, romantic feel

### Success Burst

When user clicks "Yes":

- 50+ particles burst out
- Confetti cannons fire from sides
- Success message displays
- Gallery button appears
- 15-second celebration animation

### Responsive Design

- Desktop: Full width, optimized layout
- Tablet: Adjusted spacing and font sizes
- Mobile: Touch-friendly buttons, optimized modal

---

## 📞 Notes

- This project is fully functional and ready to use
- All features have been tested and verified
- No external API dependencies (Tenor GIFs replaced with local images)
- Completely customizable for your needs
- Perfect for a special proposal! 💕

---

## 🎉 Created with ❤️

A romantic and interactive proposal application designed to make someone's special day even more memorable!

**Happy Proposing!** 💕✨
