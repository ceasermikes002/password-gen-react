# Random Password Generator

## Project Overview

This project is a Random Password Generator script developed with TypeScript and Vite. It generates random passwords of a specified length and strength, containing a mix of uppercase letters, lowercase letters, numbers, and special characters. The project also includes tests to ensure the password generation logic works as expected.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Git Workflow](#git-workflow)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- Generates random passwords of a specified length.
- Allows inclusion of uppercase letters, lowercase letters, numbers, and special characters.
- Written in TypeScript for type safety and better development experience.
- Includes tests to ensure reliability.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/random-password-generator.git
   cd random-password-generator
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

## Usage

The password generator can be used by importing the `generatePassword` function and providing the desired options.

### Example

```typescript
import { generatePassword } from './src/generatePassword';

const options = {
  length: 12,
  includeUppercase: true,
  includeLowercase: true,
  includeNumbers: true,
  includeSymbols: true,
};

const password = generatePassword(options);
console.log(password);
```

### Options

- `length`: The length of the generated password.
- `includeUppercase`: Whether to include uppercase letters.
- `includeLowercase`: Whether to include lowercase letters.
- `includeNumbers`: Whether to include numbers.
- `includeSymbols`: Whether to include special characters.

## Testing

This project uses Jest for testing. Tests are located in the `tests` directory.

### Running Tests

To run the tests, use the following command:

```sh
npx jest
```

### Example Test

Here is an example of a test for the password generator:

```typescript
import { generatePassword } from '../src/generatePassword';

describe('generatePassword', () => {
  test('should generate a password of specified length', () => {
    const options = { length: 10, includeUppercase: true, includeLowercase: true, includeNumbers: true, includeSymbols: true };
    const password = generatePassword(options);
    expect(password).toHaveLength(10);
  });

  test('should include uppercase letters when includeUppercase is true', () => {
    const options = { length: 10, includeUppercase: true, includeLowercase: false, includeNumbers: false, includeSymbols: false };
    const password = generatePassword(options);
    expect(/[A-Z]/.test(password)).toBe(true);
  });

  // Add more tests as required...
});
```

## Git Workflow

This project follows a feature-branch workflow:

1. **Create a new branch for your feature**:
   ```sh
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes and commit them**:
   ```sh
   git add .
   git commit -m "Add your commit message"
   ```

3. **Push your branch to the remote repository**:
   ```sh
   git push -u origin feature/your-feature-name
   ```

4. **Create a pull request on GitHub**:
   - Go to your repository on GitHub.
   - Click on the "Pull requests" tab.
   - Click the "New pull request" button.
   - Select your feature branch and compare it to the `main` branch.
   - Submit the pull request for review.

## Deployment

This project can be deployed using GitHub Pages or Vercel.

### GitHub Pages

1. **Create a `gh-pages` branch**:
   ```sh
   git checkout -b gh-pages
   ```

2. **Build the project**:
   ```sh
   npm run build
   ```

3. **Push the `gh-pages` branch to GitHub**:
   ```sh
   git add dist -f
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

4. **Configure GitHub Pages**:
   - Go to your repository on GitHub.
   - Click on "Settings".
   - Scroll down to the "GitHub Pages" section.
   - Select the `gh-pages` branch as the source.

### Vercel

1. **Sign in to Vercel and create a new project**.
2. **Import your GitHub repository**.
3. **Configure the build and output settings** (Vercel automatically detects Vite projects).

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature:
   ```sh
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```sh
   git commit -m "Describe your feature"
   ```
4. Push your branch to your fork:
   ```sh
   git push origin feature/your-feature-name
   ```
5. Create a pull request from your fork to the main repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

By following this README, you should be able to understand the purpose of the project, how to set it up, how to use it, how to run tests, and how to contribute to it.
