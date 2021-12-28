# danielfamiyeh.com

Software portfolio and photography blog SPA, built with Vue.js, Apollo GraphQL & MongoDB.

## Project setup

Clone the project repo and run:

```
npm install
```

### Environment Variables

The project uses environment variables for the Apollo server, S3 image bucket and contact info for the homepage.
<br/>
An example set of environment variables is given below.

```
VUE_APP_APOLLO_SERVER=http://localhost:4000/
VUE_APP_S3_BUCKET=https://{BUCKET_NAME}.s3.eu-west-1.amazonaws.com
VUE_APP_CONTACT_INFO={"github": "{GITHUB_URL}", "linkedin": "{LINKEDIN_URL}", "email": "{EMAIL_ADDRESS}"
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
