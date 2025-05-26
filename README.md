# Image Gallery

## Introduction

In this assignment, you will be fixing the paths to service files, images, and pages of a Digital Art website. The website showcases modern frontend features, including mobile responsiveness using media queries, a Flexbox layout, mobile navigation, and CSS transparency.

To preview the app, simply click the "Go Live" button found in the VSCODE status bar. This will open your webpage in your browser.

After completing the assignment, feel free to explore the CSS and JS files to get a glimpse of the technologies you will learn in future modules of the Devslopes curriculum.

Make sure to watch the [INTRO VIDEO](https://www.loom.com/share/c0569858f7d5421fab6e9597302e7dc1?sid=38906dd1-7efd-4d97-b8c1-e5e9870f3e02) before you start.

**!!! NOTE**: You will find the "[TODO Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)" or the "[TODO Highlight](https://marketplace.visualstudio.com/items?itemName=jgclark.vscode-todo-highlight)" VSCode extension really useful for this assignment, as it will highlight every "TODO" keyword in the commented lines of the files you need to update.

## Learning Objectives

This assignment should prove that a student is able to:

- Use relative paths based on the current file location.
  - Half step.
  - Full step.
- Use absolute paths based on the project root.
- Link files to your static HTML document.
  - CSS files.
  - JS files.
  - Images.
- Construct paths to navigate through pages of a static website.
- Link external pages to your Website.

## Standard requirements

- [x] Fork the project to your github account
- [x] Clone the project to your computer
- [x] Open the project in VSCode with `code <cloned_repo_folder_name>`
- [x] Initialize playwright and install project packages
  - [x] Use `npm i` to install packages
  - [x] Use `npm run browser-install` to install the browser environment for testing 
- [ ] All the tasks of the "Specific requirements" section MUST be solved
- [ ] **The project's file/folder structure should NOT be edited!**
- [ ] All the tests MUST pass. Fix the errors in case they don't BEFORE you submit (acceptance criteria)
  - [x] Use `npm run test` to run all tests in the terminal
  - [x] Use `npm run test-main` to run index.html file tests
  - [x] Use `npm run test-modern-design` to run modern-design.html file tests
  - [x] Use `npm run test-nature` to run nature.html file tests
  - [x] Use `npm run test-plants` to run plants.html file tests
  - [x] Use `npm run test-space` to run space.html file tests
  - [x] (Optional) Use `npm run test-ui` to run all the tests with GUI
  - [x] (Optional) Use `npm run show-report` to see the latest report in the browser
- [x] VSCode IDE MUST have 0 code problems listed (spelling problems are fine)
- [x] The code MUST be formatted with Prettier
- [x] Push the changes to the Github repo, when finished.
- [x] Submit a txt file with the Github repo url.

## Specific requirements

**For the index.html file:**

- [x] Connect the scripts.js file
- [x] Connect the layout.css file
- [x] Connect the images-list.css file
- [x] Add the image file path for each gallery item's image
  - Plants: plant-image.jpg
  - Nature: nature-image.jpg
  - Modern Design: design-image.jpg
  - Space: space-image.jpg
- [x] Add the detail page path for each gallery item's "Details" link:
  - Plants: plants.html
  - Nature: nature.html
  - Modern Design: modern-design.html
  - Space: space.html
- [x] Add the detail page path for each top navigation item:
  - Plants: plants.html
  - Nature: nature.html
  - Modern Design: modern-design.html
  - Space: space.html

**For each page:**

- [x] Connect the scripts.js file
- [x] Connect the layout.css file
- [x] Connect the image-detail.css file
- [x] Add the path to the image to let it show up
  - Plants: plant-image.jpg
  - Nature: nature-image.jpg
  - Modern Design: design-image.jpg
  - Space: space-image.jpg
- [x] Add the detail page path for each top navigation item:
  - Plants: plants.html
  - Nature: nature.html
  - Modern Design: modern-design.html
  - Space: space.html
- [x] Add the path to the index.html file for the "Back to Home Page" link
- [x] Add the absolute unsplash.com path to the collection page for the "More \<collection-name\> Images" link.
  - [More Plants Images](https://unsplash.com/s/photos/plants)
  - [More Nature Images](https://unsplash.com/s/photos/nature)
  - [More Space Images](https://unsplash.com/s/photos/space)
  - [More ModernDesign Images](https://unsplash.com/s/photos/modern-design)
- [x] Add the detail page path for each bottom navigation item:
  - Plants: plants.html
  - Nature: nature.html
  - Modern Design: modern-design.html
  - Space: space.html
