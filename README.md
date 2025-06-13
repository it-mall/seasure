# SeaSure

The repo contains code for SeaSure MVP. SeaSure is an advanced multi-agent AI assistant
for mariners. The Repo is private and contains confidential information.

## Tech Stack

### Core Technologies

- **React** (v19.1.0) - Modern UI library for building user interfaces
- **TypeScript** (v5.8.3) - For type-safe JavaScript development
- **Vite** (v6.3.5) - Next-generation frontend tooling for fast development and optimized builds

### UI & Styling

- **Tailwind CSS** (v3.4.17) - Utility-first CSS framework
- **Headless UI** (v2.2.4) - Unstyled, accessible UI components
- **Heroicons** (v2.2.0) - Beautiful hand-crafted SVG icons
- **Lucide React** (v0.514.0) - Additional icon set
- **Class Variance Authority** (v0.7.1) - For managing component variants
- **Tailwind Merge** (v3.3.1) - For merging Tailwind classes efficiently
- **CLSX** (v2.1.1) - For constructing className strings conditionally

### State Management & Data Fetching

- **TanStack Query** (v5.80.6) - Powerful data synchronization and server state management
- **Axios** (v1.9.0) - Promise-based HTTP client

### Routing

- **React Router DOM** (v7.6.2) - Declarative routing for React applications

### Development Tools

- **ESLint** (v9.25.0) - For code linting and style enforcement
- **TypeScript ESLint** (v8.30.1) - TypeScript-specific linting rules
- **Prettier** - For code formatting
- **Vite Plugin SVGR** (v4.3.0) - For importing SVGs as React components
- **Vite TSConfig Paths** (v5.1.4) - For TypeScript path aliases in Vite

## Project Structure

```
seasure/
├── src/
│   ├── components/     # Reusable UI components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions and configurations
│   ├── pages/         # Page components
│   ├── types/         # TypeScript type definitions
│   ├── App.tsx        # Root component
│   └── main.tsx       # Application entry point
├── public/            # Static assets
├── index.html         # HTML template
└── package.json       # Project dependencies and scripts
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
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

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
- `npm run prettier` - Format code with Prettier

## Features

- 🎨 Modern UI with Tailwind CSS
- 🔒 Type-safe development with TypeScript
- ⚡ Fast development with Vite
- 📱 Responsive design
- 🌙 Dark mode support
- 🔄 Efficient data fetching with TanStack Query
- 🛣️ Client-side routing with React Router
- 🎯 Component-based architecture
- 🧪 Built-in testing setup
- 📦 Optimized production builds

## Browser Support

The application supports modern browsers that implement the latest web standards, including:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Docker Deployment

### Building the Docker Image

```bash
# Build the image
docker build -t seasure:latest .

# Run the container
docker run -d -p 80:80 --name seasure-app seasure:latest
```

### Docker Compose (Optional)

Create a `docker-compose.yml` file for easier deployment:

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - '80:80'
    restart: unless-stopped
    environment:
      - NODE_ENV=production
```

Then run:

```bash
docker-compose up -d
```

### Environment Variables

For production deployment, you can pass environment variables to the container:

```bash
docker run -d -p 80:80 \
  -e VITE_API_URL=https://api.example.com \
  --name seasure-app \
  seasure:latest
```

### Production Considerations

1. Always use specific version tags in production
2. Set up proper logging and monitoring
3. Configure SSL/TLS using a reverse proxy
4. Use Docker secrets for sensitive data
5. Implement health checks
6. Set up proper backup strategies
