# Login and Registration System

This project implements a simple login and registration system with a modern, responsive user interface.

## Features

- User registration with email and password
- User login
- Password visibility toggle
- Social login options (Google and Facebook)
- Responsive design using Tailwind CSS

## Project Structure

- `frontend/dist/index.html`: Registration page
- `frontend/dist/login.html`: Login page
- `frontend/dist/style.css`: Compiled Tailwind CSS styles
- `frontend/dist/signInScript.js`: JavaScript for registration page functionality
- `frontend/dist/logInScript.js`: JavaScript for login page functionality
- `frontend/tailwind.config.js`: Tailwind CSS configuration

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Compile Tailwind CSS:
   ```
   npx tailwindcss -i ./src/input.css -o ./dist/style.css --watch
   ```
4. Open `index.html` or `login.html` in a web browser to view the pages

## Technologies Used

- HTML5
- Tailwind CSS
- JavaScript
- Remix Icon (for icons)

## Contributing

Contributions are welcome. Please open an issue or submit a pull request for any improvements.

## License

This project is open source and available under the [MIT License](LICENSE).
