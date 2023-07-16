## Welcome to the Gallery site!

# To run the backend, follow these steps:
Navigate to the 'back' directory by running: cd back.
Install the required dependencies by running: npm install.
Start the back-end server by running: npm run start.

# To run the frontend, follow these steps:
Navigate to the 'vite-project' directory by running: cd vite-project.
Install the required dependencies by running: npm install.
Start the front-end development server by running: npm run dev.


# Back-end architecture:
The back-end is designed with a precise Route-Controller-Service architecture to handle the creation of users and the getPhotos service. To ensure scalability, the service returns a small amount of objects with each request. This approach is especially useful when implementing compatible user front-end functionality.

# Front-end architecture:
The front-end is built with a concise React app architecture initialized with Vite. Special attention has been given to accessibility, and React hooks have been used to keep the codebase simple and maintainable.