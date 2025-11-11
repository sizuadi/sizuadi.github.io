# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Docker Deployment

This image now serves the built app with a lightweight Node static server (no nginx).

### Build locally
```
docker build -t sizuadi-portfolio:latest --build-arg PUBLIC_URL=/ .
```

### Run locally
```
docker run --rm -p 8080:80 sizuadi-portfolio:latest
```
Site available at http://localhost:8080

### Using docker-compose
```
docker compose up --build -d
```

Healthcheck hits http://127.0.0.1:80/.

To customize PUBLIC_URL in compose:
```
services:
  web:
    build:
      context: .
      args:
        PUBLIC_URL: /
```

### Suggested production workflow (VPS)
1. Install Docker & Compose Plugin (or docker-compose) on VPS.
2. Clone repository to VPS.
3. Option A: Build on VPS
   ```
   docker compose up --build -d
   ```
   Option B: Build locally and push image to registry then pull on VPS.
4. Ensure firewall / security group allows HTTP (port 80 or mapped port).
5. For automatic restarts on reboot:
   ```
   docker update --restart unless-stopped <container_name_or_id>
   ```

### Tag & push to a registry (example Docker Hub)
```
docker tag sizuadi-portfolio:latest your_dockerhub_username/sizuadi-portfolio:latest
docker push your_dockerhub_username/sizuadi-portfolio:latest
```
On VPS:
```
docker pull your_dockerhub_username/sizuadi-portfolio:latest
docker run -d --name portfolio -p 80:80 --restart unless-stopped your_dockerhub_username/sizuadi-portfolio:latest
```

### Healthcheck
Container includes a HEALTHCHECK using curl on /. Add a dedicated /healthz endpoint logic if needed.

## Environment Variables (Docker)
Create React App only injects variables prefixed with `REACT_APP_` at build time. Non-prefixed variables like `FAST_REFRESH` affect build tools, not application code.

### Defining values
1. Edit `docker-compose.yml` build args.
2. Or pass `--build-arg` flags:
```
docker build -t sizuadi-portfolio:latest \
  --build-arg PUBLIC_URL=/ \
  --build-arg REACT_APP_API_BASE=https://api.example.com \
  --build-arg REACT_APP_ENV=production \
  --build-arg REACT_APP_ANALYTICS_ID=UA-XXXXX-Y \
  --build-arg REACT_APP_FEATURE_FLAG=enabled \
  --build-arg FAST_REFRESH=false \
  --build-arg SKIP_PREFLIGHT_CHECK=true \
  --build-arg WATCHPACK_POLLING=true \
  --build-arg REACT_APP_BLOG_URL=https://blog.sizu.dev \
  .
```

### .env file
You can store defaults in `.env` locally (not loaded automatically by Docker). Use it to copy/paste values when adding build args or rely on Compose variable substitution in `docker-compose.yml`.
See `.env.example` and optionally create `.env` with matching keys to override defaults when using `docker compose`.

### Changing values
Any change requires rebuilding:
```
docker compose build --no-cache web
```

### Access in code
Use `process.env.REACT_APP_API_BASE`, `process.env.REACT_APP_BLOG_URL`, etc. Non-REACT_APP vars (e.g. FAST_REFRESH) won't appear in code.

### Runtime configuration (optional)
For truly runtime-editable settings without rebuild, you need a separate config JSON served by nginx or a tiny backend. Example pattern:
1. Add `config.json` file copied into image.
2. Fetch it in app `fetch('/config.json')` before rendering.
This is beyond current scope but can be added later.

### Cleanup
```
docker image prune -f
```

## Makefile shortcuts
```
make build                     # Build local image sizuadi-portfolio:latest
make build TAG=1.0.0           # Build with version tag
make tag TAG=1.0.0 USER=youruser REGISTRY=docker.io
make push TAG=1.0.0 USER=youruser REGISTRY=docker.io
make run                       # Run on http://localhost:8080
make compose                   # docker compose up -d --build
make compose-down              # Stop stack
make login USER=youruser REGISTRY=docker.io
make ghcr-login USER=githubuser TOKEN=gh_pat_token
```
Override env build args inline:
```
make build REACT_APP_API_BASE=https://api.prod.example.com PUBLIC_URL=/ REACT_APP_ENV=production
```

## Nginx + HTTPS (sizu.dev)

1) Point DNS A records to your VPS IP:
   - sizu.dev -> YOUR_VPS_IP
   - www.sizu.dev -> YOUR_VPS_IP

2) Start stack (HTTP only initially):
```
docker compose up -d --build
```

3) Obtain certificates (run once):
```
# Replace with your email
EMAIL=you@example.com
# Issue for both domains using webroot
docker run --rm \
  -v sizuadi.github.io_certbot-www:/var/www/certbot \
  -v sizuadi.github.io_letsencrypt:/etc/letsencrypt \
  certbot/certbot certonly --webroot -w /var/www/certbot \
  -d sizu.dev -d www.sizu.dev --agree-tos -m $EMAIL --non-interactive
```

4) Reload nginx to use certs:
```
docker compose restart web
```

5) Auto-renewal is handled by the certbot service (runs every ~12h).

Visit https://sizu.dev

Note: Ensure ports 80 and 443 are open in your firewall/security group.
