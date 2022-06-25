# Sveltekit with Typescript, TailwindCSS, Jest and Storybook

> :zap: Community template with Sveltekit + Typescript + TailwindCSS + Jest + Storybook

You can use to setup in an easy way for init your svelte project. 



# :paperclip: Menu

- :hammer: [Setup](#hammer-setup)
- :magnet: [Scripts](#magnet-basic-available-scripts)
- :dizzy: [Versions](#dizzy-version-of-main-packages)
- :roll_of_paper: [Boilerplate](#roll_of_paper-boilerplate-that-you-can-delete)


# :hammer: Setup

>In 3 easy steps



Clone the repository

```
npx degit alcibiadesc/template-sveltekit YOUR-FOLDER-NAME
```


Enter in the folder

```
cd YOUR-FOLDER-NAME
```


Install
```
npm install
```



# :magnet: Basic Available Scripts
> Inside your folder

```
npm run dev
```
Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000/) to view it in the browser.

The page will reload if you make edits. 

---
```
npm run build
```

Builds a static copy of your site to the `build/` folder. Your app is ready to be deployed!

---

```
npm run test
```
Launch jest battery of tests

---

```
npm run test:watch
```

Launch jest battery of tests in every change of document.

---
```
npm run storybook
```

Launch storybook. You can enter openning [http://localhost:6006](http://localhost:6006) to view it in the browser.

---
```
others scripts
```

more info inside [package.json](https://github.com/alcibiadesc/template-sveltekit/blob/17dcf55a71aa7226c1afbafe3977bac10fcf71bf/package.json)


# :dizzy: Version of main packages

* Svelte: 3.46.0
* TailwindCSS: 3.0.18
* Jest: 27.5.0
* Testing-Library: 3.0.3
* Storybook: 6.5.0-alpha.38
* Eslint: 7.32.0
* Prettier: 2.4.1

[package.json](https://github.com/alcibiadesc/template-sveltekit/blob/17dcf55a71aa7226c1afbafe3977bac10fcf71bf/package.json)

# :roll_of_paper: Boilerplate that you can delete
This components are here to validate the correct work of the template. 

When I install all and check that works I follow this steps: 

Delete /lib | I use a custom version of [Atomic Design](https://atomicdesign.bradfrost.com/) template folder instead: 
```
* Components/
  * atoms/
  * molecules/
  * organisms/
  * pages/
```

Delete Button.svelte & Button.stories.js & Button.css inside "./src/components/atoms/" | I added this Button from Storybook to test that works with alias (dynamic path) and tailwind (you can delete it if you want :smile_cat:) 
