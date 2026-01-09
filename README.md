# Random Password Generator

A sleek, modern web application for generating secure random passwords. Create strong passwords instantly with customizable length and character options.

## Features

- **Dual Password Generation**: Generate two random passwords simultaneously for comparison
- **Customizable Length**: Choose from 8, 12, 16, or 20 character passwords
- **Symbol & Number Toggle**: Include or exclude symbols and numbers with a simple toggle switch
- **One-Click Copy**: Easily copy generated passwords to your clipboard with dedicated copy buttons
- **Modern Dark UI**: Beautiful dark-themed interface with smooth animations
- **Secure Random Generation**: Uses JavaScript's Math.random() for password generation

## How to Use

1. Select your desired password length from the dropdown menu (8, 12, 16, or 20 characters)
2. Toggle "Symbols and numbers" on or off depending on your password requirements
3. Click the "Generate passwords" button to create two random passwords
4. Click the copy icon button next to any password to copy it to your clipboard
5. A confirmation alert will display the copied password

## Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Modern styling with CSS variables and animations
- **Vanilla JavaScript**: Password generation and clipboard functionality
- **Vite**: Fast build tool and development server
- **Google Fonts (Arimo)**: Typography

## Setup & Installation

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd pwd-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local development URL (typically `http://localhost:5173`)

## Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
pwd-generator/
├── index.html          # Main HTML structure
├── index.css           # Styles and theme
├── index.js            # Password generation logic and clipboard functions
├── package.json        # Project dependencies and scripts
├── vite.config.js      # Vite configuration
└── README.md           # This file
```

## Character Set

The generator uses a comprehensive character set including:
- Uppercase letters (A-Z)
- Lowercase letters (a-z)
- Numbers (0-9)
- Special symbols (~`!@#$%^&*()_-+={[}]|:;"'<,>.?/)

When the "Symbols and numbers" toggle is off, passwords are generated using only letters (uppercase and lowercase).

## License

This project is open source and available for educational purposes.

