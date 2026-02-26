# Vercel Deployment Instructions

Follow these exact terminal procedures to launch the Homestead Logistics Directory into a live production environment.

## Prerequisites

1. You must have a created account at [vercel.com](https://vercel.com).
2. You must have installed the Vercel CLI. If not installed, execute:
   ```bash
   npm i -g vercel
   ```

## Authorization

1. Open a new terminal process in the `track-weekend-guide` root directory.
2. Run the login command:
   ```bash
   vercel login
   ```
   *Follow the browser instructions to authenticate your machine.*

## Deployment Scaffolding

1. Initialize the project mapping by running the base Vercel command:
   ```bash
   vercel
   ```
2. The CLI will prompt you with the following setup vectors:
   - **Set up and deploy?** [Y/n] `y`
   - **Which scope do you want to deploy to?** *[Select your personal namespace]*
   - **Link to existing project?** [y/N] `N`
   - **What's your project's name?** `homestead-logistics` *(or press Enter for default)*
   - **In which directory is your code located?** `./` *(Press Enter)*
   - **Want to override the settings?** [y/N] `N`

Vercel will automatically detect the presence of the Next.js `package.json` and internal build configurations. It will execute the remote compilation node sequence.

## Production Initialization

Once the initial preview deploy terminates and provides you with the staging URL, map the repository to your primary production domain via:
```bash
vercel --prod
```

## Continuous Integration

For seamless updates, it is highly recommended to commit this repository to a GitHub host and import the GitHub repository directly into the Vercel dashboard. This bypasses local CLI limits and automatically triggers a new deployment cycle for every branch merge.
