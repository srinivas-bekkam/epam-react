## Authentication

Following are some Authentication types in web.

1. Basic Authentication
2. WT (JSON Web Tokens)
3. OAuth 2.0
4. Multi-Factor Authentication (MFA)
5. Single sign-on (SSO)


### Basic Authentication

#### How it works:
Users provide their username and password for authentication.


### JWT (JSON Web Tokens)

 #### Overview:

JSON Web Tokens are a compact, URL-safe way of transmitting information between parties. They're widely used in stateless authentication systems.

 #### How It Works:

A server generates a token after verifying user credentials.
The client stores the token (in localStorage, cookies, or memory).
The token is sent with every request for protected resources.

#### Best For:

- Single Page Applications (SPAs).
- Stateless APIs.

### OAuth 2.0

#### Overview:

OAuth 2.0 is the go-to protocol for third-party integrations, allowing users to log in using external services like Google, Facebook, or GitHub.

#### How It Works:

The client requests an access token from an authorization server.
The token is used to access the resource server.


#### Example Libraries:

- passport-oauth2
- next-auth

#### Best For:

Apps requiring third-party authentication.
User convenience with social logins.


###  Multi-Factor Authentication (MFA)

#### Overview:
Multi-factor authentication (MFA) is a multi-step account login process that requires users to enter more information than just a password. For example, along with the password, users might be asked to enter a code sent to their email, answer a secret question, or scan a fingerprint.

#### Examples:
MFA by Microsoft login with Authenticator app which provides security code that needs to be entered after password authentication is successful.

### Single sign-on (SSO)

Single sign-on (SSO) provides a more seamless experience by reducing the number of times a user is asked for credentials. Users enter their credentials once, and the established session can be reused by other applications on the same device without further prompting.

