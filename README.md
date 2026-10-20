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

## Adding your photo

1. Save your photo as `assets/img/zayna.jpg` (a portrait crop, around 800×1000px, works best).
2. In **index.html** and **about.html**, find the line `<div class="ph" ...>[ your photo ]</div>` and replace it with:
   `<img src="assets/img/zayna.jpg" alt="Zayna Kirlew smiling">`

## Adding more case-study images

Each case study has commented-out spots (`<!-- ... -->`) where process images fit: the MedPortal site map, the Kindle audit and final screens, the Coucou logo rounds and palette, the CyberDream trim sheet and Sumo Slammers GIF, and the Bee Well final screens. Put the image in the folder named in the comment (e.g. `assets/img/coucou/`), then delete the `<!--` and `-->` around that line.

## Editing text

All text lives in the HTML files and can be edited directly on GitHub. Colours and fonts live at the top of `assets/css/style.css`.
