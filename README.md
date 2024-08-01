# Samantha Hall Campaign Website

This is a mock website for democratic campaigner Samantha Hall, developed as part of Blueprint Interactive's candidate coding assessment.

## Technologies Used

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white)
![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat&logo=html5&logoColor=white)
![Node.JS](https://img.shields.io/badge/Node.JS-339933?style=flat&logo=node.js&logoColor=white)
![Next.JS](https://img.shields.io/badge/Next.JS-000000?style=flat&logo=next.js&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-00BFFF?style=flat)
![Conform-to](https://img.shields.io/badge/Conform--to-FF7F50?style=flat)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=supabase&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=flat&logo=postgresql&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white)
![React Tweet](https://img.shields.io/badge/React_Tweet-61DAFB?style=flat&logo=react&logoColor=white)

## Features

- Responsive design
- Smooth animations
- Form validation with Zod and conform-to
- Real-time data handling with Supabase
- Interactive components with Framer Motion
- Integration of tweets using React Tweet

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/getting-started/install)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/samantha-hall-campaign.git
   cd samantha-hall-campaign
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Setting Up Environment Variables

Create a `.env.local` file in the root directory and add the following environment variables:

```plaintext
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
NEXT_PRIVATE_SUPABASE_SERVICE_KEY=your-supabase-service-key
```

### Running the Project

3. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

5. Build the project:
   ```sh
   npm run build
   # or
   yarn build
   ```

6. Start the production server:
   ```sh
   npm start
   # or
   yarn start
   ```

### Additional Scripts

- **Linting**: 
  ```sh
  npm run lint
  # or
  yarn lint
  ```

- **Type Checking**:
  ```sh
  npm run type-check
  # or
  yarn type-check
  ```

## Contributing

Contributions are welcome! Please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

Distributed under the MIT License. See `LICENSE` for more information.