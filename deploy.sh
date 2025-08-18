#!/bin/bash
set -e

# Generate static site
echo "Generating static site..."
npm run generate

# Create or switch to gh-pages branch
echo "Setting up gh-pages branch..."
git checkout -B gh-pages

# Remove everything except .output/public and .git
find . -maxdepth 1 ! -name '.git' ! -name '.output' -exec rm -rf {} \; 2>/dev/null || true

# Copy contents from .output/public to root
echo "Copying built files to root..."
cp -r .output/public/* .
rm -rf .output

# Create a .nojekyll file to bypass Jekyll processing
touch .nojekyll

# Configure custom domain if needed (uncomment and modify if you have one)
# echo "yourdomain.com" > CNAME

# Commit changes
echo "Committing changes..."
git add .
git commit -m "Deploy to GitHub Pages"

# Push to gh-pages branch
echo "Pushing to gh-pages branch..."
git push -f origin gh-pages

# Switch back to previous branch
echo "Switching back to previous branch..."
git checkout -

echo "Deployment complete! Your site will be available at: https://YOURUSERNAME.github.io/soummyeah-website/"
echo "If this is your first deployment, make sure to configure GitHub Pages in repository settings."
