# Hooks Tutorial

This repo is a tutorial for refactoring class components to functional components using React Hooks.

The app itself is a simple github "bookmarking" app. Throughout the tutorial, we will introduce `useState`, `useEffect`, and `useContext` to replace our class components, as well as make the architecture simpler and more flexible.

The `master` branch is the starting point. The other branches are:

- `activity-one`: Introducing `useState`, where we will refactor the `<Search>` component.
- `activity-two`: Introducing `useEffect`, where we will refactor the `<SearchResult>` component.
- `activity-three`: Introducing `useContext`, where we will extract our bookmarking logic to a context provider.
- `activity-four`: Introducting `useReducer`. The example is a simple Tic Tac Toe game with undo/redo. In the main app, we will enhance the `<BookmarksProvider>` we made previously by replacing `useState` with `useReducer`.
- `activity-five`: Custom hooks! We will separate out the `fetch` logic we use in `<SearchResult>` to make a general-purpose hook, and use it to 'log in' and get your Github avatar.
- `activity-six`: TBD! Includes the solution to activity five.
- `activity-seven`: TBD

Each subsequent activity branch is the "solution" for the previous activity. (There are many differnet ways to do this, it's just one possible solution!)

Two recommended ways of working:

- Create your own working branch and work on it through all activities. This way, you can stash or commit your working changes to peek at the solutions in the next branch
- Checkout to each activity branch to get a fresh start. If you do this, you may want to branch off of these, so you can easily refer back to where you started. For instance: - `git checkout activity-one`, then `git checkout -b activity-one-working` to create your new branch.
