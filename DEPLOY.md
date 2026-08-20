# Deploying CrackerBill to GitHub Pages

The site is plain HTML/CSS/JS, so GitHub Pages can serve it directly with
no build step.

## 1. Push the code to GitHub

The repo is already initialised locally with the remote set to:

```
https://github.com/ramsivaji1986/firecrackers-billing-website.git
```

From inside the project folder, push it:

```bash
git push -u origin main
```

If GitHub asks for a password, it wants a **Personal Access Token**, not
your account password:

1. GitHub → Settings → Developer settings → Personal access tokens →
   Tokens (classic) → Generate new token → tick the `repo` scope.
2. Use your GitHub username as the username, and the token as the password
   when git prompts you.

(If you'd rather use SSH: `git remote set-url origin
git@github.com:ramsivaji1986/firecrackers-billing-website.git` and push
with an SSH key added to your GitHub account instead.)

## 2. Turn on GitHub Pages

1. On GitHub, open the repo → **Settings** → **Pages** (left sidebar).
2. Under **Build and deployment**, set **Source** to **Deploy from a
   branch**.
3. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
4. Wait a minute, then refresh the page — GitHub shows the live URL at
   the top, typically:

   ```
   https://ramsivaji1986.github.io/firecrackers-billing-website/
   ```

## 3. Updating the site later

Any push to `main` redeploys automatically:

```bash
git add -A
git commit -m "Update site"
git push
```

## Optional: custom domain

If you'd rather use your own domain (e.g. `crackerbill.in`):

1. In the same **Pages** settings screen, enter the domain under
   **Custom domain** and save — GitHub creates a `CNAME` file in the repo
   for you.
2. At your domain registrar, add a `CNAME` DNS record pointing the
   subdomain (e.g. `www`) to `ramsivaji1986.github.io`, or `A` records
   pointing the apex domain to GitHub's Pages IPs (185.199.108.153,
   185.199.109.153, 185.199.110.153, 185.199.111.153).
3. Back in Pages settings, tick **Enforce HTTPS** once the domain check
   passes.

## Alternative hosts

The `index.html` / `css` / `js` / `assets` folder also deploys as-is to
Netlify or Vercel (drag-and-drop the folder, or point either at the same
GitHub repo) if you'd prefer those over GitHub Pages.
