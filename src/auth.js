import { PublicClientApplication } from '@azure/msal-browser'

const msalConfig = {
  auth: {
    clientId: 'ced02df0-edfc-46f3-95c5-57caa15af22e',
    tenantId: 'f42acaec-b2b8-4cf1-aa36-d6ffdd442618',
    authority: 'https://login.microsoftonline.com/f42acaec-b2b8-4cf1-aa36-d6ffdd442618',
    redirectUri: 'http://localhost:9000/home', // Replace with your redirect URI
    postLogoutRedirectUri: 'https://contoso.com/homepage'
  }
}

const msalInstance = new PublicClientApplication(msalConfig)

export default msalInstance