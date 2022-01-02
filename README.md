# danielfamiyeh.com

Software portfolio and photography blog SPA.<br/>
Built with Vue 3, Apollo GraphQL & MongoDB.<br/>Deployed to an AWS EC2 instance.<br/>
### [Live Website](https://danielfamiyeh.com/)<br/>
![Screenshot](https://danielfamiyehcom.s3.eu-west-2.amazonaws.com/github-readme/home.jpg)

## Project setup

First clone the project repo.

### Backend

From the `/backend` directory run:

```
npm install
```

to install dependencies, then run:

```
node index.js
```

to start the GraphQL server.

#### Environment Variables

The backend uses an environment variable for the MongoDB URI and an auth token for mutations.
<br/>An example set-up is given below.

```
MONGO_URI=mmongodb+srv://{USERNAME}:{PASSWORD}@{CLUSTER_URI}
AUTH_TOKEN={TOKEN}
```

### Frontend

From the `/frontend` directory run:

```
npm install
```

to install dependencies, then:

```
npm run serve
```

to start the Vue application.

#### Environment Variables

The frontend uses environment variables for the Apollo server, S3 image bucket and contact info for the homepage.
<br/>
An example set of set-up is given below.

```
VUE_APP_APOLLO_SERVER=http://localhost:4000/
VUE_APP_S3_BUCKET=https://{BUCKET_NAME}.s3.eu-west-1.amazonaws.com
VUE_APP_CONTACT_INFO={"github": "{GITHUB_URL}", "linkedin": "{LINKEDIN_URL}", "email": "{EMAIL_ADDRESS}"
```
