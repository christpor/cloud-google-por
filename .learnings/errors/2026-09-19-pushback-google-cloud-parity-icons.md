## Pattern: Placeholder and generic icons substituted for official brand assets
## Root Cause: Project scaffold defaulted to generic Lucide icons and Material Symbol strings instead of mapping to the authentic high-res SVG and PNG logos already extracted in public/assets/images/.
## Prevention: During website cloning, audit extracted assets first. For every product, service, or navigation item, map directly to authentic downloaded SVG/PNG logos. Check against screencast keyframes before marking complete.
## Score delta: 5/10 → 9/10
## Project: Google Cloud Sovereign Clone (cloud-google-por)
