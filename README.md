# XOrithm's Dashboard
### Why is this web application implemented?
XOrithm's Dashboard is implemented in order to be able to allow authenticated users to view the entity's servers' health.

### Current Build Status of the project:
The project build status now is completed successfully with no current errors.

### Used Frameworks:
* This project was implemented using Nextjs, so for someone to use/edit this project they need a basic understanding of Nextjs, Reactjs, HTML & CSS.
* The styling libraries used in thisproject are Bootrstrap & MaterialUI.

* To achieve authentication in this application, 2 methods were used and integrated with NextAuth:
    * Firebase authentication for using email and passwords
    * OAuth authentication for third parties to achieve google sign-in authentication

### Step-by-step guide on how to use and run this project:
* Create your own .env file which includes: 
    * GOOGLE_ID = OAuth Client ID
    * GOOGLE_SECRET = OAuth Client SECRET
    * NEXTAUTH_URL = http://localhost:3000
    * NEXTAUTH_SECRET = Secure String for nextauth
* In your VS Code terminal in order to run the application you’ll run the following commands

First, install all dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```
Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### Disclaimer
In order to be able to test your gmail to sign in with google, you must add it in the Test Users in OAuth Consent Screen.

### Future Work
* Verification for Passwords while signing up and requiring stronger Passwords
* Adding more social media ways to sign in
* Adding Incidents' Descriptions inside the dashboard
* Search & Filter Servers inside the dashboard
* Implementing the Server side for the application for more robust server
* Implementing Dark Mode for the Application
* Add more styling for the dashboard to be more user friendly

