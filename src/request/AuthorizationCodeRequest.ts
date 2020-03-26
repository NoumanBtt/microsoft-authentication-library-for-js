/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

/**
 * @type AuthorizationCodeRequest: Request object passed by user to acquire a token from the server exchanging a valid authorization code
 *  (second leg of OAuth2.0 Authorization Code flow)
 *
 * scopes:                  A space-separated array of scopes for the same resource.
 *
 * authority:               URL of the authority, the security token service (STS) from which MSAL will acquire tokens.
 *
 * redirectUri:             The redirect URI of your app, where the authority will redirect to after the user inputs credentials
 *                          and consents. It must exactly match one of the redirect URIs you registered in the portal.
 *
 * code:                    The authorization_code that the user acquired in the first leg of the flow.
 *
 * codeVerifier:            The same code_verifier that was used to obtain the authorization_code.
 *                          Required if PKCE was used in the authorization code grant request.
 *                          For more information, see the PKCE RFC: https://tools.ietf.org/html/rfc7636
 *
 * correlationId:           Unique GUID set per request to trace a request end-to-end for telemetry purposes
 *
 */
export type AuthorizationCodeRequest = {
    scopes: Array<string>;
    redirectUri: string;
    code: string;
    authority?: string;
    codeVerifier?: string;
    correlationId?: string;
};
