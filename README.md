# Front-End Developer Challenge

In this repository, you will find the source code and assets for a mock-up of a tool designed for a fictitious game called “TitanStar Legends.” This project is a coding challenge and will not be repurposed or otherwise utilized by D&D Beyond.

## Assessment Expectations

Code reviewers will pay special attention to the following aspects:

- Styles of submission match the provided mock-up.
- All functionality defined below is present in the submission.
- Code organization and maintainability.
- Best practices are followed if a JS framework is used.
- Any novel or additional features beyond the given scope.

We expect your assessment to be completed and returned within 7 days of receiving it. Good luck!

If you have a personal project that closely resembles this project, feel free to send us the repo. We’ll evaluate that project instead, focusing only on your contributions. The project must demonstrate the following competencies:

- Making an app mobile-friendly/responsive.
- Creating and utilizing modern styling.
- Creating a stateful JavaScript application.

## Rune Mastery Loadout Talent Calculator 9000

Players of TitanStar Legends can spend talent points collected on runes within a tree. We need a JavaScript application that simulates the rune tree within the game, allowing players to replicate their in-game loadouts to share with the TitanStar Legends community.

### Key Features:

- **Left-click** to add points.
- **Right-click** to remove points.
- Users can use up to 6 points.
- Each item accounts for one point.
- Display the current point total.
- Points must be allocated in order, meaning users cannot skip items in the sequence.

### Example:

![Example](assets/example.png)

## Code Standards and Practices

The project adheres to the following code standards and practices:

### Styling:

- **BEM Methodology**: For CSS class naming to ensure a clear and structured approach.
- **SCSS**: Utilized for styling to take advantage of nesting, variables, and other features for maintainable and scalable CSS.
- **Mobile-First Design**: Ensuring the application is responsive and works seamlessly on various screen sizes.

### JavaScript:

- **React**: The application is built using React to create a stateful and dynamic user interface.
- **Hooks**: Utilizing React hooks such as `useState`, `useEffect`, `useCallback`, and `useMemo` for state management and performance optimization.
- **Prop-Types**: For type-checking React props to ensure the components receive the correct data types.
- **ESLint**: For maintaining code quality and consistency.

### Code Organization:

- **Modular Structure**: Components are organized in a modular fashion, each having a dedicated folder.
- **Reusable Components**: Commonly used UI elements are encapsulated into reusable components.
- **Separation of Concerns**: Ensuring logic, styling, and UI are appropriately separated.

### Best Practices:

- **Immutability**: State updates are performed immutably to avoid side effects.
- **Descriptive Naming**: Variables and functions are named descriptively for better readability.
- **Error Handling**: Basic error handling to prevent the application from crashing due to unexpected inputs.

## Instructions

To run the project locally:

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `yarn`.
4. Start the development server using `yarn dev`.

After completing the challenge, submit a link to your test's GitHub repository.

Good luck with your assessment, and we look forward to reviewing your submission!
