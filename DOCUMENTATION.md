# Lilly Technical Challenge Documentation Template

*This documentation template serves as a place for you to discuss how you approached this challenge, any issues you faced & how you overcame them, or any other points that you feel would be relevant for the interviewers to know. The text in italics is here to guide you - feel free to remove it once you fill out each section!*

***Not every section in this document is required. This is just a template to help get you started. Feel free to add or remove sections as you feel necessary.***

## Approach
*How did you approach this challenge? Did you work through the objectives in any particular order? If so, why? Did you utilize any external resources, such as tutorials, guides, or other materials?*


I approached this challenge with slight prior knowledge of backend through practice in a Django python web app and also some front end development knowledge with react. However, I knew I was not very confident with backend so I utilised learning resources like https://www.w3schools.com/python/ and https://www.w3schools.com/js/.

My order was to just go through the objectives one by one and solve them systematically. I started with the backend to ensure the API endpoints were working properly, then moved to the frontend to display the data in a user-friendly way. I tested each feature as I built it to make sure everything was functioning correctly before moving on to the next objective.

## Objectives - Innovative Solutions
*For the challenge objectives, did you do anything in a particular way that you want to discuss? Is there anything you're particularly proud of that you want to highlight? Did you attempt some objectives multiple times, or go back and re-write particular sections of code? If so, why? Use this space to document any key points you'd like to tell us about.*

### User-Friendly Form
Im proud of the simple form that allows users to add new medicines directly from the webpage. After validating the input, it gets sent to the backend using `FormData`, then displays success/error messages, and automatically refreshes the medicine list after adding a new item.

Im also proud of the clean modern design with the purple tone. This had to be re-visited a few times to make sure there was a balance to the design.

## Problems Faced
*Use this space to document and discuss any issues you faced while undertaking this challenge and how you solved them. We recommend doing this proactively as you experience and resolve the issues - make sure you don't forget! (Screenshots are helpful, though not required)*.

### Problem 1: Average Price Showing "N/A"
**Issue:** The average price endpoint was returning a 500 error and crashing.

**Cause:** The code was trying to add `None` values to the total price, which caused a `TypeError`.

**Solution:** Added a check `if price is not None:` before adding prices to the total and only increment the count for valid prices. Also added a division-by-zero check if no valid prices exist.

### Problem 2: Understanding CSS Selectors
**Issue:** I was confused about when to use `.className`, `#idName`, or just `tagName` in CSS.

**Cause:** Beginner-level understanding of CSS selector types.

**Solution:** Got clarification that:
- Tag selectors (like `body`, `header`) style all elements of that type
- Class selectors (`.className`) require `class=""` in HTML and can be reused
- ID selectors (`#idName`) require `id=""` in HTML and should be unique
- Nested selectors (like `header h1`) style elements inside other elements


## Evaluation
*How did you feel about the challenge overall? Did some parts go better than others? Did you run out of time? If you were to do this again, and were given more time, what would you do differently?*

## Evaluation

## Evaluation

Overall, the challenge went well and provided good learning opportunities. The backend implementation became more straightforward once I understood FastAPI's structure and workflow.

**What went well:**
- Successfully implemented all required API endpoints
- Created a functional and clean frontend interface
- Handled missing/invalid data appropriately
- Form submission works smoothly and updates the list in real-time

**What was challenging:**
- CSS selectors were initially confusing - it took some time to understand when to use classes versus IDs
- Debugging display issues required careful attention to ID naming consistency
- The average price calculation needed proper null value handling to prevent errors

**If I had more time:**
- Add edit/delete functionality for medicines on the frontend
- Implement more detailed error messages with specific feedback
- Add loading indicators while fetching data from the API
- Improve responsive design for mobile devices
- Add backend input validation to prevent invalid data entry
- Write unit tests for the backend functions
- Add smooth animations when adding new medicines

The main thing I learned was to check the console and network tab systematically when debugging, rather than just reviewing the code. Maintaining consistent naming conventions across files also proved essential for avoiding connection issues between the frontend and backend.