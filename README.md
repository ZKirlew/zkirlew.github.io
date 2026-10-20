# Zayna Kirlew · Portfolio

A plain HTML/CSS site, with no build step, ready for GitHub Pages.

## What's in here

```
index.html              Home: hero, selected work, 3D band, contact
about.html              About page
projects/project-1..5   One case-study page per project
assets/css/style.css    All styling (colours live at the top as variables)
assets/js/main.js       Keeps the footer year current
assets/img/             Put your images here
assets/Zayna-Kirlew-Resume.pdf   ← add your resume with this exact name
```

## Putting it live on GitHub Pages (free)

1. **Create a GitHub account** at github.com if you don't have one.
2. **Create a repository** (green "New" button).
   - Name it **`YOUR-USERNAME.github.io`** (e.g. `zkirlew.github.io`). This gives you the address `https://zkirlew.github.io`.
   - Set it to **Public** and click **Create repository**.
3. **Upload the files.** On the new repo's page, click **"uploading an existing file"**. Unzip the site, then drag in **everything inside** the `zayna-portfolio` folder (not the folder itself), so `index.html` sits at the top level. Click **Commit changes**.
   - If the hidden `.nojekyll` file doesn't upload, that's fine. The site works without it.
4. **Turn on Pages.** Go to **Settings → Pages**. Under "Build and deployment", set Source to **Deploy from a branch**, Branch to **main** and folder to **/ (root)**, then click **Save**.
5. Wait a minute or two, then visit `https://YOUR-USERNAME.github.io`. 🎉

### Updating later
Open the file on GitHub, click the pencil icon, edit and commit. Or drag in a replacement file with the same name. The site refreshes within a minute or two.

### Custom domain (optional)
Buy a domain (e.g. zaynakirlew.com) from any registrar, then add it under **Settings → Pages → Custom domain** and follow GitHub's DNS instructions.

## Swapping in images

Every placeholder has a `<!-- REPLACE: ... -->` comment just above it showing the `<img>` line to use. Replace the placeholder `<div class="ph">` with that line, point it at your file, and write a short `alt` description.
