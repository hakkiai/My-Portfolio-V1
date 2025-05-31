# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases my projects, skills, and professional information.

## 🚀 Features

- 🌓 Dark/Light mode toggle
- 🌐 Multi-language support (English, Hindi, Telugu)
- 📱 Fully responsive design
- 🎨 Modern UI with smooth animations
- 📬 Contact form with email integration
- 🔗 Social media links
- 🖼️ Project showcase
- 🛠️ Technology stack display

## 🛠️ Tech Stack

- React
- TypeScript
- Tailwind CSS
- i18next for translations
- React Icons
- EmailJS for contact form
- AOS for animations

## 🏗️ Project Structure

```
src/
├── assets/         # Images and static files
├── components/     # React components
├── i18n/          # Translation files
├── utils/         # Utility functions and data
└── pages/         # Page components
```

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/hakkiai/Portfolio-v1-master.git
```

2. Install dependencies:
```bash
cd Portfolio-v1-master
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 📝 Environment Variables

Create a `.env` file in the root directory and add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🔧 Customization

- Update project information in `src/utils/projects.ts`
- Modify technology stack in `src/utils/techs.tsx`
- Add/remove languages in `src/i18n/translations/`
- Customize styles in `tailwind.config.js`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Abhishek Tripathi Kuberji**
- GitHub: [@hakkiai](https://github.com/hakkiai)
- LinkedIn: [Abhishek Tripathi Kuberji](https://www.linkedin.com/in/abhishek-tripathi-kuberji-a33502224/)
- LeetCode: [kuber_001](https://leetcode.com/u/kuber_001/)

## 🙏 Acknowledgments

- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations from [AOS](https://michalsnik.github.io/aos/)
- Email service from [EmailJS](https://www.emailjs.com/)