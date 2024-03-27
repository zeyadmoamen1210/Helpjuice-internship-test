<!-- Project Title -->
<div align="center">
  <h1>Helpjuice Internship Task</h1>
  <h2>Transforming Landing Page to HTML/CSS</h2>
</div>

<!-- Introduction -->
## ℹ️ What's this project all about?
Convert Figma design into code using HTML and CSS and Tailwind CSS

<!-- Design Link -->
## 🎨 Where can I see the design?
You can check out the design [here](https://6604957705248464723b89c9--aquamarine-sherbet-a5ce4e.netlify.app/#).

<!-- Project Organization -->
## 📂 How should I organize the project?

### 📁 Project Structure

- **src**: Contains the source code of the project.
    - **assets**: Holds various assets such as CSS files and images.
        - **base**: Contains base CSS files used across the project.
            - 🖌️ `Button.css`: CSS styles for buttons.
            - 🖌️ `FreeForEver.css`: CSS styles for some global elements or layouts.
        - **components**: Holds CSS files specific to individual components.
            - 🛠️ `CommonQuestions.css`: CSS styles for the Common Questions component.
              **Note**: **I used the BEM CSS methodologies for class names and the following Tailwind CSS code for these classes**:
              ```css
              /* Example Tailwind CSS Code */
              .component-name {
                  @apply bg-blue-500 text-white;
              }
              ```
            - 🛠️ `CreateTutorial.css`: CSS styles for the Create Tutorial component.
            - 🛠️ `Features.css`: CSS styles for the Features component.
            - 🛠️ `Footer.css`: CSS styles for the Footer component.
            - 🛠️ `Header.css`: CSS styles for the Header component.
            - 🛠️ `Navbar.css`: CSS styles for the Navbar component.
            - 🛠️ `ToTop.css`: CSS styles for the ToTop component.
        - **imgs**: Stores image files used in the project.
    - **components**: Contains HTML components.
        - 📄 `CommonQuestions.html`: HTML for the Common Questions section.
        - 📄 `CreateTutorial.html`: HTML for the Create Tutorial section.
        - 📄 `Features.html`: HTML for the Features section.
        - 📄 `Footer.html`: HTML for the Footer section.
        - 📄 `Header.html`: HTML for the Header section.
        - 📄 `Navbar.html`: HTML for the Navbar section.
        - 📄 `ToTop.html`: HTML for the ToTop section.
    - **js**: Contains JavaScript files used for application logic.
        - 🧩 `accordion.js`: JavaScript for accordion functionality.
        - 🧩 `fetchAndInject.js`: JavaScript to fetch HTML components and inject them into `index.html`.
        - 🧩 `toggleSidebar.js`: JavaScript for toggling a sidebar, if applicable.
        - 🧩 `toggleTheme.js`: JavaScript for toggling themes dark / light mode.
        - 🧩 `toTopButton.js`: JavaScript for the "back to top" button functionality.
- **index.html**: The main HTML file of the project where HTML components are injected dynamically using JavaScript.

**Note:** As a bonus feature, dark mode has been implemented.