import { paths } from "paths";

export const amplifyConfig = {
  aws_project_region: process.env.NEXT_PUBLIC_AWS_PROJECT_REGION,
  aws_cognito_identity_pool_id:
    process.env.NEXT_PUBLIC_AWS_COGNITO_IDENTITY_POOL_ID,
  aws_cognito_region: process.env.NEXT_PUBLIC_AWS_COGNITO_REGION,
  aws_user_pools_id: process.env.NEXT_PUBLIC_AWS_USER_POOLS_ID,
  aws_user_pools_web_client_id:
    process.env.NEXT_PUBLIC_AWS_USER_POOLS_WEB_CLIENT_ID,
};

export const auth0Config = {
  base_url: process.env.NEXT_PUBLIC_AUTH0_BASE_URL,
  client_id: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
  issuer_base_url: process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL,
};

export const firebaseConfig = {
  apiKey: "AIzaSyDAwdqU-4k5Azb1fNF9RFLAlT-RaMSDUPo",
  authDomain: "appelent-bc868.firebaseapp.com",
  projectId: "appelent-bc868",
  storageBucket: "appelent-bc868.appspot.com",
  messagingSenderId: "726562505952",
  appId: "1:726562505952:web:d05c0d37da55129551fc85",
  measurementId: "G-SCBJ5EM94B",
};

export const gtmConfig = {
  containerId: "G-SCBJ5EM94B",
};

export const mapboxConfig = {
  apiKey: process.env.NEXT_PUBLIC_MAPBOX_API_KEY,
};

export const siteSettings = {
  title: "Site title",
  subtitle: "Subtitle",
  //plan: "PRO",
  version: "v1.0.0",
  copyright: "AppElent",
  url: "https://url.appelent.com",
  loginRedirect: paths.app.index,
  backend: "http://localhost:8000",
};

export const oauthConfigurations = {
  enelogic: {
    name: "enelogic",
    redirectUrl: "/oauth/enelogic/authorize",
    // redirectQueryParams: {
    //   redirect_url: true,
    //   //redirect_after_token: "",
    // },
    options: {
      redirect_to: true,
      redirect_back: true,
      //redirect_after_token: "",
    },
    tokenUrl: "/oauth/enelogic/token",
    scope: "account",
    baseUrl: "http://localhost:8000",
  },
  enelogic2: {
    name: "enelogic2",
    redirectUrl: "/oauth/enelogic/authorize",
    // redirectQueryParams: {
    //   redirect_url: true,
    //   //redirect_after_token: "",
    // },
    options: {
      redirect_to: true,
      redirect_back: true,
      //redirect_after_token: "",
    },
    tokenUrl: "/oauth/enelogic/token",
    scope: "account",
    baseUrl: "http://localhost:8000",
  },
};
