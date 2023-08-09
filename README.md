# DisplayTemparature

This pro

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## DisplayTemparatureComponent

This is a re-usable component with a child component and a models file that allows us to plug this setup anywhere needed.

This component contains: - An input form to capture the minimum and maximum temparature values. - A child component - DisplayGuageComponent to display the temparature given by the user in the guage.

## DisplayTemparatureComponentErrors

- The parent component - DisplayTemparatureComponent contains form errors that are ejected when the user enters invalid inputs.
- These errors are written in the template itself for ease of understanding.
- As the componenet size and complexity grows, these errors can be moved to a separate directive or component dedicated for computing mat-error-messages on the reactive form.

## DisplayGuageComponent

- The child component - DisplayGuageComponent receives the formInputs on submission and uses them to calculate the angle needed to rotate based on the inputs provided.
- The child component can also receive the data using subjects in Service file from the parent component. Keeping the re-usability of the component in mind, I avoided using too many couplings considering the size and scope of the application.

## Technologies

Angular 14, Node 14.17.0, Angular Material 13, CSS Flexbox
