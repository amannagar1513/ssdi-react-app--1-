# SSDI Benefits Portal - React Application

A modern, animated React application for Social Security Disability Insurance (SSDI) benefits information and client intake.

## Features

✨ **Modern Design**
- Beautiful gradient animations
- Smooth transitions and hover effects
- Responsive design for all devices
- Professional UI/UX

🎭 **Framer Motion Animations**
- Fade-in animations on scroll
- Hover effects on cards and buttons
- Staggered content reveals
- Floating elements

📋 **Contact Form**
- Collects client information (Name, Email, Phone, Age)
- Auto-formats phone numbers
- Sends data to support@nexuscoresync.com
- Success/error messaging

## Installation

1. Extract the zip file
2. Navigate to the project directory:
   ```bash
   cd ssdi-react-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `build` folder, ready to deploy.

## Technologies Used

- React 18
- Framer Motion (animations)
- CSS3 (custom styling)
- React Hooks (state management)

## Contact Form

The contact form sends client inquiries to: **support@nexuscoresync.com**

Form fields:
- Full Name (required)
- Email Address (required)
- Phone Number (required, auto-formatted)
- Age (required)
- Additional Information (optional)

## Project Structure

```
ssdi-react-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── Eligibility.js
│   │   ├── Benefits.js
│   │   ├── InfoCards.js
│   │   ├── ContactForm.js
│   │   └── Footer.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Customization

- Edit component files in `src/components/` to modify content
- Update styles in corresponding `.css` files
- Change email recipient in `ContactForm.js`
- Modify animations in component files using Framer Motion props

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary and confidential.

---

For support, contact: support@nexuscoresync.com
