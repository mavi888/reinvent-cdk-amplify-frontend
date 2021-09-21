// For more information... 
// https://docs.amplify.aws/lib/client-configuration/configuring-amplify-categories/q/platform/js/
//
import { Amplify, Auth } from "aws-amplify";

console.log("IDENTITY_POOL_ID=" + process.env.REACT_APP_IDENTITY_POOL_ID + "\n");
console.log("USER_POOL_ID=" + process.env.REACT_APP_USER_POOL_ID + "\n");
console.log("USER_POOL_CLIENT_ID=" + process.env.REACT_APP_USER_POOL_CLIENT_ID + "\n" );
console.log("REGION=" + process.env.REACT_APP_REGION + "\n");
console.log("APPSYNC_API=" + process.env.REACT_APP_APPSYNC_API + "\n");

Amplify.configure({
    Auth: {
        region: process.env.REACT_APP_REGION,
        userPoolId: process.env.REACT_APP_USER_POOL_ID,
        userPoolWebClientId: process.env.REACT_APP_USER_POOL_CLIENT_ID,
        identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID
    },
    API: {
         graphql_headers: async () => ({
             Authorization: (await Auth.currentSession()).getIdToken().getJwtToken()
         }),
        graphql_endpoint: process.env.REACT_APP_APPSYNC_API
    },
    aws_appsync_region: process.env.REACT_APP_REGION,
    aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS",
    aws_appsync_graphqlEndpoint: process.env.REACT_APP_APPSYNC_API
});