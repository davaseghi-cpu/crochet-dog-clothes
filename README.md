# Vantutti
A responsive, pastel storefront for handmade crochet dog clothes. Built with HTML, CSS and JavaScript; no dependencies or build step required.

## Preview
Use Node.js 20 or newer:

```sh
cd /workspace/crochet-dog-clothes
npm run dev
```
The server listens on port 3000 on all interfaces. Use your hosting platform's port preview if available. Run `npm test` for catalog and cart calculation checks. The store can also be deployed to any static host (GitHub Pages, Netlify, or Cloudflare Pages); publish the repository root. Navigation uses hashes so product links work on static hosts.

## Publish online without installing anything
1. Open https://github.com/davaseghi-cpu/crochet-dog-clothes and sign in.
2. Select **Settings** in the repository, then **Pages** in the left sidebar.
3. Under **Build and deployment**, choose **Deploy from a branch** as the source.
4. Choose branch **main** and folder **/ (root)**, then click **Save**.
5. Wait a few minutes. Refresh the Pages settings screen and use **Visit site** when available.
6. Your expected address is https://davaseghi-cpu.github.io/crochet-dog-clothes/ . It becomes available after a successful Pages deployment. Check the repository's **Actions** tab if deployment fails.

No server, Node.js, or installation on your computer is needed for GitHub Pages. Later changes pushed to main are published automatically. If Pages asks for a plan upgrade because the repository is private, do not change visibility unless you intend to make all repository contents public; choose an eligible plan or another static host instead.

## Add your products
Edit `products.js`. Each product has a unique `id`, name, category, EUR price, colour, image URL, description, and optional badge. Put your own photos in an `images/` directory and set `image` to `images/your-photo.jpg`. The current local dog portraits are illustrative placeholders, not photos of the garments. Replace them and the homepage hero image in `app.js` before launch. Adjust image alternative text in `app.js` when real product photos are available.

Edit `sizes` in `products.js` to match your measured garments. The current chart is an example. Change the currency in the `money` formatter if needed. Update the About text in `app.js` with your real story, materials, care instructions and production times. Optional Google Fonts require internet; system fonts are provided as fallbacks. Product photos are served locally.

Placeholder photo sources: `jigsawpieces/dog-api-images` on GitHub, files `maltese/n02085936_10073.jpg` (Stanford Dogs Dataset), `pug/Alf.jpg`, and `poodle-toy/Cookie.jpg`. These are demonstration images; replace with your own licensed garment photography before commercial launch.

## Cart and contact
The shopping bag supports sizes, quantities, removal, and persistence in the customer's browser. It is a demo cart; availability is not tracked, and checkout is intentionally disabled. The contact form validates input but does not send or store messages. Connect a form backend such as Netlify Forms, Formspree, or your own server before launch, then update its confirmation message. Never place secret API keys in this public website.

## Accept payments later
A practical next step is Stripe Checkout with a small server-side endpoint, or Shopify's hosted checkout. For Stripe, create products and prices in your Stripe dashboard, then implement an endpoint that takes product IDs, sizes and quantities, validates stock and prices server-side, and creates a Checkout Session. Redirect the customer to the returned hosted checkout URL. Keep secret keys on the server, verify webhook signatures, and fulfil orders only after verified payment events. Do not trust browser-submitted totals or a success page as proof of payment. Start in test mode, configure shipping, taxes, returns, privacy and business contact details, and test the complete order process before enabling live payments.

No payment details or customer messages are collected by this demo.
