# Welcome to Helpjuice Internship Task: Transforming Landing Page to HTML/CSS!

## What's this project all about?

Convert Figma design into code using HTML and CSS and Tailwind CSS

## Where can I see the design?

You can check out the design [here](https://6604957705248464723b89c9--aquamarine-sherbet-a5ce4e.netlify.app/#).

## How should I organize the project?

Here's how we should set things up:

## Project Structure

- **src**: Contains the source code of the project.
    - **assets**: Holds various assets such as CSS files and images.
        - **base**: Contains base CSS files used across the project.
            - **Button.css**: CSS styles for buttons.
            - **FreeForEver.css**: CSS styles for some global elements or layouts.
        - **components**: Holds CSS files specific to individual components.
            - **CommonQuestions.css**: CSS styles for the Common Questions component.
            - **CreateTutorial.css**: CSS styles for the Create Tutorial component.
            - **Features.css**: CSS styles for the Features component.
            - **Footer.css**: CSS styles for the Footer component.
            - **Header.css**: CSS styles for the Header component.
            - **Navbar.css**: CSS styles for the Navbar component.
            - **ToTop.css**: CSS styles for the ToTop component.
        - **imgs**: Stores image files used in the project.
    - **components**: Houses reusable HTML components used throughout the application.
        - **CommonQuestions.html**: Contains frequently asked questions and their answers.
        - **CreateTutorial.html**: Related to creating a tutorial or instructional content.
        - **Features.html**: Showcases the features or functionalities of the project.
        - **Footer.html**: Contains the footer section of the project, including links, copyright information, etc.
        - **Header.html**: Houses the header section of the project, typically containing the logo, navigation, etc.
        - **Navbar.html**: Responsible for the navigation bar/menu of the project.
        - **ToTop.html**: Provides functionality to scroll the page to the top when clicked.
    - **js**: Contains JavaScript files used for application logic.
        - **accordion.js**: JavaScript for accordion functionality, if applicable.
        - **fetchAndInject.js**: JavaScript to fetch HTML components and inject them into `index.html`.
        - **toggleSidebar.js**: JavaScript for toggling a sidebar, if applicable.
        - **toggleTheme.js**: JavaScript for toggling themes, if applicable.
        - **toTopButton.js**: JavaScript for the "back to top" button functionality.
    - **App.js**: Main JavaScript file for application logic.
- **.gitignore**: Specifies intentionally untracked files to ignore if using version control.
- **index.html**: The main HTML file of the project where HTML components are injected dynamically using JavaScript.
- **README.md**: This file, containing information about the project.