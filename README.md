# Carbonova Sports B2B Website Package

Static HTML/CSS/JavaScript website for GitHub Pages.

## Included
- Multi-page B2B manufacturer website
- Product, OEM, technology, factory, quality and contact pages
- Three starter SEO articles
- Responsive navigation
- Basic Organization schema markup
- Sitemap, robots.txt, manifest and 404 page
- SVG placeholder product/factory visuals

## Important before launch
1. Replace `sales@carbonovasports.com` only after confirming the mailbox works.
2. Replace `+86 XXX XXXX XXXX` in `contact.html` and the shared footer text in all HTML files.
3. Replace the factory illustration with verified factory photos/video stills.
4. Do not publish customer logos without written permission.
5. Verify every certification claim for the exact model.
6. Have the Privacy Policy and Terms reviewed for your actual markets and tools.
7. Connect the RFQ form to Formspree, HubSpot, Zoho Forms or a backend. The current version opens the visitor's email application.

## Local preview
Run:
```bash
python -m http.server 8000
```
Then open `http://localhost:8000`.

## GitHub Pages deployment
1. Create a new GitHub repository.
2. Upload all files and folders from this package to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. GitHub will provide a Pages URL.

## Custom domain
After DNS is configured, rename `CNAME.example` to `CNAME` and put the final domain on one line. Update the canonical domain in all HTML files, `robots.txt`, and `sitemap.xml` if it differs from `https://www.carbonovasports.com`.

## Brand ownership
Website brand: **Carbonova Sports**  
Legal manufacturer shown on the site: **Xiamen Carbon Rock Material Technology Co., Ltd.**
