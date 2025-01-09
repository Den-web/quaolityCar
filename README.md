# [Quolity Car Company]

Introducing Quolity Car Company, captivating compaign landing page.

**Documentation built by Developers**

Each element is well presented in very complex documentation.

You can read more about the [documentation here](https://www.material-tailwind.com/docs/react/installation).

**HELPFUL LINKS**

- View [Github Repository](https://github.com/creativetimofficial/nextjs-tailwind-campaign-page)
- Check [FAQ Page](https://www.creative-tim.com/faq)

## [Demo](https://creative-tim.com/product/nextjs-tailwind-campaign-page)

## Quick start

Quick start options:

- Download from [Creative Tim](https://www.creative-tim.com/product/nextjs-tailwind-campaign-page?ref=readme-ntpp).

## Terminal Commands

1. Download and Install NodeJs LTS version from [NodeJs Official Page](https://nodejs.org/en/download/).
2. Navigate to the root ./ directory of the product and run `npm install` to install our local dependencies.

## Documentation

The documentation for the Material Dashboard is hosted at our [website](https://www.material-tailwind.com/docs/react/installation?ref=readme-ntpp).

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">

## Resources

- [Live Preview](https://demos.creative-tim.com/nextjs-tailwind-campaign-page?ref=readme-ntpp)
- [Download Page](https://www.creative-tim.com/product/nextjs-tailwind-campaign-page?ref=readme-ntpp)
- Documentation is [here](https://www.material-tailwind.com/docs/react/installation?ref=readme-ntpp)
- [License Agreement](https://www.creative-tim.com/license?ref=readme-ntpp)
- [Support](https://www.creative-tim.com/contact-us?ref=readme-ntpp)
- Issues: [Github Issues Page](https://github.com/creativetimofficial/nextjs-tailwind-campaign-page/issues)
- [Nepcha Analytics](https://nepcha.com?ref=readme) - Analytics tool for your website

## Reporting Issues

We use GitHub Issues as the official bug tracker for the Nextjs Tailwind Campaign Page. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Nextjs Tailwind Campaign Page. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/product/nextjs-tailwind-campaign-page?ref=readme-ntpp).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Technical Support or Questions

If you have questions or need help integrating the product please [contact us](https://www.creative-tim.com/contact-us?ref=readme-ntpp) instead of opening an issue.

## Licensing

- Copyright 2023 [Creative Tim](https://www.creative-tim.com?ref=readme-ntpp)
- Creative Tim [license](https://www.creative-tim.com/license?ref=readme-ntpp)

## Useful Links

- [More products](https://www.creative-tim.com/templates?ref=readme-ntpp) from Creative Tim

- [Tutorials](https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w)

- [Freebies](https://www.creative-tim.com/bootstrap-themes/free?ref=readme-ntpp) from Creative Tim

- [Affiliate Program](https://www.creative-tim.com/affiliates/new?ref=readme-ntpp) (earn money)



# Atomic Design Folder Structure for React

This document outlines the folder structure for a React project using Atomic Design principles.

## Folder Structure

```plaintext
src/
├── assets/                     # Static assets like images, fonts, and icons
│   ├── images/
│   ├── fonts/
│   ├── icons/
├── components/                 # Atomic Design Layers
│   ├── atoms/                  # Small, reusable components (e.g., buttons, inputs)
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   ├── Button.css
│   │   │   └── Button.test.jsx
│   │   └── Input/
│   ├── molecules/              # Combinations of atoms (e.g., forms, cards)
│   │   ├── Form/
│   │   │   ├── Form.jsx
│   │   │   ├── Form.css
│   │   │   └── Form.test.jsx
│   │   └── Card/
│   ├── organisms/              # Groups of molecules forming sections (e.g., navbar)
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   ├── Header.css
│   │   │   └── Header.test.jsx
│   │   └── Footer/
│   ├── templates/              # Page templates defining structure
│   │   ├── HomeTemplate.jsx
│   │   ├── AboutTemplate.jsx
│   │   └── index.js
├── pages/                      # Pages combining templates and data
│   ├── Home/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   └── Home.test.jsx
│   └── About/
├── contexts/                   # Contexts for managing global state
│   ├── ThemeContext.jsx
│   └── AuthContext.jsx
├── hooks/                      # Custom React hooks
│   ├── useAuth.jsx
│   └── useFetch.jsx
├── services/                   # API services and logic (Axios, etc.)
│   ├── api.js
│   └── authService.js
├── styles/                     # Shared styles
│   ├── variables.css
│   ├── mixins.css
│   └── global.css
├── utils/                      # Utility functions/helpers
│   ├── formatDate.js
│   └── validateForm.js
├── App.jsx                     # Main App component
├── index.js                    # App entry point
└── routes/                     # Route definitions and configurations
    ├── AppRoutes.jsx
    └── PrivateRoute.jsx
```

## Explanation of Folders

1. **assets/**:
   - Static files such as images, fonts, and icons.

2. **components/**:
   - **atoms/**: Smallest building blocks like buttons or text inputs.
   - **molecules/**: Combinations of atoms with logic.
   - **organisms/**: Larger UI structures combining molecules.
   - **templates/**: Define page layout and structure, combining organisms.

3. **pages/**:
   - Final pages tied to specific routes.

4. **contexts/**:
   - Global React Contexts for shared state (e.g., authentication).

5. **hooks/**:
   - Custom hooks for reusable logic.

6. **services/**:
   - API and business logic layers.

7. **styles/**:
   - Centralized styling files.

8. **utils/**:
   - Generic helper functions or utilities.

---

This structure adheres to Atomic Design principles, ensuring scalability, maintainability, and reusability across the project.


