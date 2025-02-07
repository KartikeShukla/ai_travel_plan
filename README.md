# AI Travel Planner

A modern web application that helps users plan their perfect trip using AI. Built with Next.js, TypeScript, and Google's Gemini AI.

## Features

- 🎯 Personalized travel itineraries based on your preferences
- 🌍 Detailed recommendations for destinations and activities
- 🎨 Beautiful, responsive UI with dark mode support
- ⚡ Fast and efficient AI-powered planning
- 🔒 Secure environment variable handling

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Google Gemini](https://ai.google.dev/) - AI model
- [Shadcn UI](https://ui.shadcn.com/) - UI components
- [Next Themes](https://github.com/pacocoursey/next-themes) - Dark mode

## Getting Started

### Prerequisites

- Node.js 18.18.0 or later
- A Google Gemini API key

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/ai-travel-plan.git
cd ai-travel-plan
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory:

```
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
```

4. Start the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/         # React components
│   ├── ui/            # Shadcn UI components
│   └── providers/     # Context providers
└── lib/               # Utility functions
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
