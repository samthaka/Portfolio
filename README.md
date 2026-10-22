# Samuel Kirangi Thaka — Portfolio

A React portfolio built with Vite, featuring software projects, IT support experience, education, and technical skills.

## Update portfolio details

Edit the `projects` array and portfolio sections in `src/App.jsx`. Update the page title and description in `index.html` if the public profile details change. Only add social or repository links when their destination URLs are available.

## Run locally

```sh
npm install
npm run dev
```

## Build and deploy to Cloudflare Pages

Create a Cloudflare Pages project connected to this repository and set:

- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Build output directory:** `dist`

To check the production build locally, run `npm run build` and then `npm run preview`.
