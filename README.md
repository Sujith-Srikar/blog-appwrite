
# Blog APP

## Overview

This project is a modern blog application built using industry-level practices. It utilizes Appwrite as the backend service to manage authentication, database, and storage functionalities. It is a vite+react project

## Features

- Rich text content editor using TinyMCE
- Routing with React Router DOM
- State management with Redux Toolkit
- Form handling with React Hook Form
- HTML content parsing with html-react-parser
- Backend services powered by Appwrite

## Dependencies

The following dependencies are used in this project:

- `create-react-app`
- `react-router-dom`
- `tinymce-react` for content editor
- `redux-toolkit`
- `appwrite`
- `html-react-parser`
- `react-hook-form`

## Project Setup

### Prerequisites

- Node.js and npm installed on your machine

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/artcileproject.git
    cd artcileproject
    ```

2. Install the dependencies:

    `npm install`

### Environment Variables

Copy all the required API keys from Appwrite and paste them in the `.env` file:

    VITE_APPWRITE_URL=""
    VITE_APPWRITE_PROJECT_ID=""
    VITE_APPWRITE_DATABASE_ID=""
    VITE_APPWRITE_COLLECTION_ID=""
    VITE_APPWRITE_BUCKET_ID=""

### Available Scripts

In the project directory, you can run:

- `npm run dev` - Starts the development server.
- `npm run build` - Builds the app for production.
- `npm run lint` - Lints the codebase.
- `npm run preview` - Previews the production build.



## Usage

Once the environment variables are set up and the dependencies are installed, you can start the development server:

    npm run dev

This will start the application, and you can view it in your browser at `http://localhost:5173`.

## Learn More

To learn more about the tools and frameworks used in this project, check out the following resources:

- [React Documentation](https://reactjs.org/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [TinyMCE React Documentation](https://www.tiny.cloud/docs/integrations/react/)
- [Appwrite Documentation](https://appwrite.io/docs)
- [React Router DOM Documentation](https://reactrouter.com/)
- [React Hook Form Documentation](https://react-hook-form.com/)

## Contributing

If you have suggestions or improvements, feel free to create a pull request or open an issue.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.