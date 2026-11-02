ARUN VIJAYA HOSPITAL - WEBSITE (v10)
Open index.html in Chrome/Edge. Upload index.html, style.css, app.js and the images/ folder to your host (Netlify, GitHub Pages, etc).

Contact details come from the hospital COVID Care card: 9677103566, 044-23710250/53/58. Confirm they are current.
Update the phone in app.js (HOSPITAL_PHONE) and in index.html if it changes.
Appointment form opens WhatsApp with the details pre-filled.
Doctor photos in images/ are low-resolution; replace with originals using the same filenames.
Replace images/logo.png with a high-resolution/vector logo when available.

Logo: images/logo.png is the static logo (header/footer). images/logo-1..4.webp are the colour layers animated in the About section (plays once per visit, skipped for reduced-motion users).

v8: header logo now animates on load (once per visit); hero slider arrows moved under the hero buttons.

v9: About logo card fixed (was blank); logo animation slowed to ~4.5s and plays on every page load; click a logo to replay.

v10: logo animations loop continuously (play, hold, fade, repeat). Edit PLAY/HOLD/FADE at the end of app.js to change timing. Reduced-motion users see a static logo.
