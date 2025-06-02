# Piyush Mandal - Portfolio Website

A modern, visually stunning personal portfolio website for Piyush Mandal, an AIML engineering student based in Bangalore. Built with Next.js, React, and Framer Motion, featuring a sleek black, grey, and white color palette with glassmorphism effects and smooth animations.

## ✨ Features

- **Modern Design**: Clean, minimal, and futuristic aesthetic with glassmorphism effects
- **Smooth Animations**: Advanced animations powered by Framer Motion
- **Responsive**: Fully responsive design optimized for all devices
- **Interactive Sections**:
  - Dynamic hero with typewriter effect
  - Animated about section with tabbed content
  - Interactive skills display with progress indicators
  - Project showcase with filtering capabilities
  - Contact form with real-time validation
- **Performance Optimized**: Built with Next.js for optimal performance
- **SEO Ready**: Proper meta tags and structured content

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/piyush/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Technology Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Scroll Animations**: React Intersection Observer

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── AnimatedBackground.tsx
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Design Features

### Glassmorphism Effects
- Transparent backgrounds with backdrop blur
- Subtle borders and gradients
- Layered visual hierarchy

### Animations
- Page entrance animations
- Scroll-triggered reveals
- Hover interactions
- Loading states
- Smooth transitions

### Color Palette
- Primary: Various shades of grey and black
- Accent: Blue and purple gradients
- Text: White and grey variations

## 📱 Sections

### 🏠 Home
- Bold name introduction with gradient text
- Dynamic typewriter effect for titles
- Animated call-to-action buttons
- Floating background elements

### 👨‍💻 About Me
- Tabbed content (Bio, Education, Interests)
- Interactive fun facts cards
- Smooth content transitions
- Personal story and background

### 🔧 Skills
- Category-based skill display (AI/ML, Tools, Web Dev)
- Circular progress indicators for technical skills
- Animated progress bars for tools and web technologies
- Skill level percentages with smooth animations

### 🚀 Projects
- Filterable project grid
- Expandable project cards
- Technology tags
- GitHub and demo links
- Featured project highlighting

### 📬 Contact
- Interactive contact form
- Social media links
- Contact information cards
- Resume download button
- Form validation and submission states

## 🎯 Performance Features

- **Optimized Images**: Next.js image optimization
- **Code Splitting**: Automatic code splitting with Next.js
- **Lazy Loading**: Components load as needed
- **SEO Optimized**: Meta tags and structured data
- **Mobile First**: Responsive design approach

## 🔧 Customization

### Colors
Modify the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Custom color palette
  }
}
```

### Animations
Customize animations in the component files using Framer Motion:

```javascript
const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}
```

### Content
Update personal information in the respective component files:
- `Hero.tsx` - Name and titles
- `About.tsx` - Personal story and background
- `Skills.tsx` - Technical skills and levels
- `Projects.tsx` - Project portfolio
- `Contact.tsx` - Contact information

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed on any platform that supports Next.js:
- Netlify
- AWS Amplify
- GitHub Pages (with static export)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About Piyush Mandal

AIML Engineering student based in Bangalore, India. Passionate about artificial intelligence, machine learning, and creating innovative solutions that bridge technology and real-world applications.

- **GitHub**: [github.com/piyush-mandal](https://github.com/piyush-mandal)
- **LinkedIn**: [linkedin.com/in/piyush-mandal](https://linkedin.com/in/piyush-mandal)
- **Email**: piyush.mandal@email.com

---

⭐ Star this repository if you find it helpful! 