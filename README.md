# birthday-card

This project is a simple React application built with Vite that displays static user information on a single page. Each user is represented by their name, photo, and birthdate. The age of each user is calculated based on their birthdate and displayed on the page.

## Project Structure

The project has the following structure:

- **src**: Contains the source code of the Vite React application.
  - **components**: Holds React components used in the application.
  - **data**: Includes static user data in array of objects.
  - **App.jsx**: The main React component that renders the user data.
  - **main.jsx**: Entry point for the Vite React application.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/osamalmezouari/birthday-card.git

   ```
2. Navigate to the project directory:

    ```
    cd vite-react-user-display
    ```
3. Install dependencies:   
    ```
    npm install
    ```
4. Run the application:
    ```
    npm run dev

5. Open your browser and visit 
    ```
    http://localhost:3000 to view the user display page. 
    ```
## User Data
The user data is stored in the src/data/users.json file. Each user has the following attributes:

- id : Unique identifier for the user.
- name: Name of the user.
- photo: URL or path to the user's photo.
- birthdate: Date of birth of the user.
- Age Calculation
The age of each user is dynamically calculated by subtracting their birthdate from the current date. This information is displayed next to each user on the user display page.

Technologies Used
Vite
React
JavaScript (ES6+)
HTML
CSS

## Contributors

- [osamalmezouari](https://github.com/osamalmezouari)

## License

This project is licensed under the [john smilga](https://github.com/john-smilga).