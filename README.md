# MerzkiSelf - Personal Portfolio Website

A modern, responsive personal portfolio website built with Angular 19 and Angular Material.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
  - [Build](#build)
  - [Production Deployment](#production-deployment)
- [Project Structure](#project-structure)
- [Components](#components)
- [Services](#services)
- [Styling](#styling)
- [Attributions and Licenses](#attributions-and-licenses)
- [License](#license)

## Features
- Responsive design that works on all devices
- Modern UI with Angular Material components
- Interactive music player
- Smooth animations and transitions
- Dark/Light theme support
- Optimized performance
- SEO friendly

## Technologies Used
- Angular 19
- Angular Material
- TypeScript
- SCSS
- RxJS
- Express.js (for production deployment)

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v19 or higher)

### Installation
1. Clone the repository:
```bash
git clone https://github.com/yourusername/merzkiself.git
cd merzkiself
```

2. Install dependencies:
```bash
npm install
```

### Development Server
Run the development server:
```bash
npm start
```
Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build
Build the project:
```bash
npm run build
```
The build artifacts will be stored in the `dist/` directory.

### Production Deployment
For production deployment:
```bash
npm run start:prod
```

## Project Structure
```
src/
├── app/
│   ├── components/     # Reusable UI components
│   ├── services/       # Angular services
│   ├── layout/         # Layout components
│   ├── common-ui/      # Common UI elements
│   ├── pages/          # Page components
│   ├── app.component.ts
│   ├── app.routes.ts
│   └── app.config.ts
├── assets/            # Static assets
└── styles/           # Global styles
```

## Components
The application is built with a component-based architecture:

- **Footer Component**: Contains the music player and navigation controls
- **Layout Components**: Handle the overall page structure
- **Common UI Components**: Reusable UI elements
- **Page Components**: Individual page implementations

## Services
- **Music Service**: Handles music player functionality
- **Theme Service**: Manages application theming
- **Navigation Service**: Handles routing and navigation

## Styling
The project uses SCSS for styling with:
- Responsive design using rem units
- CSS variables for theming
- BEM methodology for CSS class naming
- Mobile-first approach

## Attributions and Licenses
### Music
The music player features tracks from the VA-11 HALL-A soundtrack by Garoad:
- "Welcome to VA-11 HALL-A"
- "Every Day is Night"
- "Good for Health, Bad for Education"
- "Who Was I"

All music is used with permission and proper attribution to Garoad.

### Fonts
- VT323 font from Google Fonts (https://fonts.google.com/specimen/VT323)

### UI Components
- Angular Material components and icons
- Material Design icons

## License
This project is licensed under the [MIT License](LICENSE.md)
