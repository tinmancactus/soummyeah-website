#!/bin/bash
set -e

# Save current branch name
CURRENT_BRANCH=$(git symbolic-ref --short HEAD)
echo "Current branch is: $CURRENT_BRANCH"

# Generate static site
echo "Generating static site..."
npm run generate

# Create a temporary directory for deployment
TEMP_DIR=$(mktemp -d)
echo "Created temp directory: $TEMP_DIR"

# Copy build output to temp directory
cp -r .output/public/* "$TEMP_DIR"/
cp -r .git "$TEMP_DIR"/

# Create a .nojekyll file to bypass Jekyll processing
touch "$TEMP_DIR"/.nojekyll

# Configure custom domain
echo "soummyeah.au" > "$TEMP_DIR"/CNAME

# Switch to gh-pages branch
echo "Setting up gh-pages branch..."
git checkout -B gh-pages

# Clear the branch content but keep .git
find . -maxdepth 1 ! -name '.git' -exec rm -rf {} \; 2>/dev/null || true

# Copy the build files from temp directory
echo "Copying built files to root..."
cp -r "$TEMP_DIR"/* .
rm -rf "$TEMP_DIR"

# Commit changes
echo "Committing changes..."
git add .
git commit -m "Deploy to GitHub Pages"

# Push to gh-pages branch
echo "Pushing to gh-pages branch..."
git push -f origin gh-pages

# Switch back to original branch
echo "Switching back to $CURRENT_BRANCH branch..."
git checkout "$CURRENT_BRANCH"

echo "Deployment complete! Your site will be available at: https://soummyeah.au"
echo "If this is your first deployment, make sure to configure GitHub Pages in repository settings."
