###  [Go Back](/readme.md)

# Authentication

Following are some Authentication types in web.

1. Basic Authentication
2. WT (JSON Web Tokens)
3. OAuth 2.0
4. Multi-Factor Authentication (MFA)
5. Single sign-on (SSO)

What is Authentication?

    Authentication is the process of verifying the identity of an individual or system.

Why?
- **Protection Against Unauthorised Access:** Authentication ensures that only authorised individuals or systems can access sensitive information, preventing data breaches and cyber threats.
- **Compliance:** Many regulations and laws require organisations to implement authentication to protect sensitive data and avoid penalties and legal consequences.
- **Convenience:** Different authentication methods, such as single sign-on and biometric authentication, make it easier for users to access resources, improving the overall user experience.
- **Auditing and Accountability:** Authentication helps track and monitor access to sensitive information, enabling organisations to identify security breaches and meet data retention and reporting requirements.
- **Trust and Reputation:** Strong authentication builds trust with customers, partners, and stakeholders, demonstrating an organisation's commitment to security and protecting its reputation in the industry.
## Basic Authentication

#### How it works:
Users provide their username and password for authentication.


## JWT (JSON Web Tokens)

 #### Overview:

JSON Web Tokens are a compact, URL-safe way of transmitting information between parties. They're widely used in stateless authentication systems.

 #### How It Works:

A server generates a token after verifying user credentials.
The client stores the token (in localStorage, cookies, or memory).
The token is sent with every request for protected resources.

#### Best For:

- Single Page Applications (SPAs).
- Stateless APIs.

## OAuth 2.0

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

## Single sign-on (SSO)

Single sign-on (SSO) provides a more seamless experience by reducing the number of times a user is asked for credentials. Users enter their credentials once, and the established session can be reused by other applications on the same device without further prompting.

Additional Resources:

- [Stateful and stateless authentication](https://medium.com/@kennch/stateful-and-stateless-authentication-10aa3e3d4986)
- [5 Reasons Authentication is Important](https://www.robinwaite.com/blog/5-reasons-authentication-is-important#:~:text=Authentication%20is%20the%20process%20of,against%20unauthorised%20access%20to%20resources.)

###  [Go Back](/readme.md)
