# Manage-products

A simple product management service. Only logged in users can manage products.

## API

The definition of the API with which the application integrates can be found at: [products](https://api.escuelajs.co/docs/#/products) 

You can download login details at: [users](https://api.escuelajs.co/api/v1/users?limit=10) 

## Business requirements:

The website has at least two pages: login and product management page
- Only logged in users can manage products
- A token is to be sent in the header to each http request (except for login).
authorization (Authorization: Bearer {token}), which we will obtain after a correct login
- The product page should have pagination
- The user can add/edit/delete products
- Before sending a request to add/edit/delete a document, the user should stay
asked if he was sure of his actions
- The website should support http errors, eg when entering wrong data to
When logging in, the user should see a message such as "invalid login or password".
- Form fields should be validated. It is not possible to send an http request
if the following conditions are not met:
    - Login
      - Email – required field, validation of the correctness of the given email
      - Password – required field o Add/Edit
      - Title – required field, min 3 characters, max 64 characters

- Price – required field, min 0.01
- Description – required field, min 32 characters max 128 characters
- Category – required field, selected from the list
- Images – required field, list of http links
- The website should be intuitive for the future user
- The website should work well on both mobile devices and laptops.
- The website should be available in two language versions: pl and en

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
