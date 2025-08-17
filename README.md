# So Umm Yeah Website

A professional blog and portfolio for a Learning Experience Designer and Creative Technologist.

## Architecture

This project uses a simplified markdown-based approach with:

- **Nuxt.js**: Vue-based static site generator
- **Nuxt Content**: Markdown content management
- **Static Site Generation**: Pre-rendered HTML for fast loading

## Features

- Minimalist, clean black and white UI
- Fast and responsive design
- Blog with content management via markdown files
- Portfolio for projects and speaking engagements
- Fully static site with no backend dependencies

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

## Development Workflow

This project uses markdown files for content management and Nuxt.js for the frontend. The typical workflow is:

1. Edit markdown files in the `/content` directory
2. Run Nuxt.js in development mode to preview the site
3. Generate a static site for deployment

### Development Mode

```bash
npm run dev
```

This will start the Nuxt.js development server at http://localhost:3000

### Previewing the Static Site

To generate and preview the static site:

```bash
# Generate the static site
npm run generate

# Serve the static site
npm run serve
```

The static site will be available at http://localhost:3000

## Deployment

This project is designed to be deployed as a static site to Vercel or similar platforms.

### Generating Static Site

```bash
npm run generate
```

This will create a `.output/public` directory with the static site ready for deployment.

### Deploying to Vercel

The easiest way to deploy is directly from GitHub to Vercel:

1. Push your repository to GitHub
2. Connect the repository to Vercel
3. Use the following settings:
   - Build Command: `npm run generate`
   - Output Directory: `.output/public`

## Routes

- `/` - Home page with featured content
- `/about` - Professional bio and introduction
- `/blog` - Blog posts and articles
- `/speaking` - Speaking topics and contact information
- `/projects` - Open source projects, demos, and experiments

## Customization

### Styling

The site uses a minimalist black and white design. You can customize the styling by editing:

- `frontend/assets/css/main.css` - Main CSS variables and styles
- Individual component styles in Vue files

### Content Structure

Blog posts and other content are managed through Strapi and stored as markdown files in the `frontend/content` directory for local development and preview.

## License

MIT