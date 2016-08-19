---
id: 3
title: Client Side Storage
intro: With the wider adoption of HTML5 there are more options available when storing data in the browser. This article explores the key differences between the most common methods.
filename: client-side-storage.md
date: 2015-05-13
---

# Client Side Storage

It’s safe to say that Cookies are a cornerstone of web infrastructure, without them we’d lose much of what we now take for granted like shopping carts, personalised experiences and handy ‘remember me’ features.

And even though the mighty Cookie isn’t going anywhere, with the wide adoption of HTML5 and Web Storage there are now some truly fantastic alternatives available.

Virtually all modern browsers (including IE8+) support Web Storage, which can be broken down into two slightly different variations, Session Storage and Local Storage. This article will explore some of the key differences and use cases for each.

## The TL;DR Comparison

This table provides a quick comparison between Cookies, Local Storage and Session Storage.

<table class="table table-striped">
<tr>
<th width="25%">
</th>

<th width="25%">
Cookies
</th>

<th width="25%">
Local Storage
</th>

<th width="25%">
Session Storage
</th>
</tr>

<tr>
<th>
Browser Support
</th>

<td>
All major browsers
</td>

<td>
Modern browsers & IE8+
</td>

<td>
Modern browsers & IE8+
</td>
</tr>

<tr>
<th>
Sent Over HTTP
</th>

<td>
Yes
</td>

<td>
No
</td>

<td>
No
</td>
</tr>

<tr>
<th>
Sub Domain Access
</th>

<td>
Configurable
</td>

<td>
No
</td>

<td>
No
</td>
</tr>

<tr>
<th>
Browser Tabs
</th>

<td>
All Tabs
</td>

<td>
All Tabs
</td>

<td>
Single Tab
</td>
</tr>

<tr>
<th>
Storage
</th>

<td>
Limited
</td>

<td>
Around 5MB
</td>

<td>
Around 5MB
</td>
</tr>

<tr>
<th>
Expiry
</th>

<td>
Expiry date or on tab close (configurable)
</td>

<td>
No expiry date
</td>

<td>
On tab close
</td>
</tr>
</table>


## Cookies

**Advantages**

- Flexible and configurable
- Supported by virtually every conceivable browser
- Easily accessible server side

**Disadvantages**

- Sent along with every HTTP request which increases bandwidth
- Limited storage space
- Susceptible to man in the middle and XSS attacks unless configured properly

### How It Works

Most server side frameworks and languages will provide the ability to create cookies, while the implementation will differ, the following options should be available:

**Expiry** - Cookies can be set to expire either at the end of the session (i.e. when the user closes the relevant tab or browser) or on a specific date at a specific time. This is particularly useful when it comes to using cookies for varying purposes. A shopping cart may only need to remain populated during a single session, while an authentication ‘remember me’ cookie might be handy for a few days.

**HTTP Only** - Setting this flag when creating a cookie will mean that the cookie can only be accessed by HTTP headers and not programmatically via Javascript. This helps secure the data held in the cookie against XSS attacks.

**Domain** - A cookie can be set to be accessible across sub-domains of the same domain. This can help persist user data throughout various parts of the same website (e.g. support.domain.com and shop.domain.com)

**Secure** - A secure cookie will instruct the browser to only transmit the cookie over a secure connection (https:// instead of http://) thus making the data within it much harder to intercept as part of a man-in-the-middle attack.

### Use Cases

- When client side storage is mission critical and there’s even a remote chance of the application being accessed in browsers older than IE8
- When dealing with authentication over HTTPS
- When server side script needs easy access to client side storage (e.g. managing shopping basket contents)

## Local Storage

**Advantages**

- Ample storage (typically up to 5MB per domain)
- Beautifully easy to work with
- More secure by default, storage only accessible and writable by client side code on the same domain

**Disadvantages**

- Javascript checks and fallbacks needed to ensure widest browser support
- Data not available server side
- Data cannot be shared with other sub-domains

### How It Works

Local Storage is a key-value type storage and is accessible purely by client side code, the only way in which a server can access the data held in Local Storage is if it’s sent via an AJAX request from the client to the server.

Using Javascript to manage local storage is nothing but delightful thanks to a really simple API.

    // Check for storage capability
    if (typeof Storage !== undefined) {
        // Set a value
        localStorage.setItem("key", "value");
        // Get a value
        localStorage.getItem("key");
    } else {
        // Cookies it is!
    }

In many cases it can be handy to store JSON objects in storage, and this can be done simply by stringifying:

    // Set
    var storedObject = {
        "name": "Matt",
        "favouriteFruit": "Apple",
        "hadForBreakfast": "Weetabix"
    };
    localStorage.setItem("storedObject", JSON.stringify(storedObject));

    // Get
    var retrievedObject = localStorage.getItem(storedObject)
    JSON.parse(retrievedObject);

Data held in local storage will persist across browser tabs and sessions, and will typically not expire until the user decides to clear it.

### Use Cases

- When client side storage is a bonus and/or fallbacks are in place to support older browsers
- When there’s a requirement to store larger amounts of serialised data client side
- When the server does not need to directly access data held client side

## Session Storage

**Advantages**

- Persists across page reloads but not new tabs (allowing for unique data on a per-tab basis)
- Most browsers restore session data when recovering from a crash
- As easy to work with as Local Storage

**Disadvantages**

- Javascript checks and fallbacks needed to ensure widest browser support
- Data not available server side

### How It Works
Session Storage can be used in exactly the same way as Local Storage - simply by replacing
```localStorage``` with ```sessionStorage```.

Again, the server cannot access this data, so any usage of it either needs to be kept client side or sent to the server via AJAX requests.

Session Storage will not persist across tabs and will be removed when the tab or browser is cloesd. The general exception to this rule is
that most browsers will restore session data when recovering from a crash.


### Use Cases

- When client side storage is a bonus and/or fallbacks are in place to support older browsers
- When there is a benefit to having separate data for each tab of the website / application (e.g. for analytics tracking or unique user identification)
- When the server does not need to directly access the data held client side


## The Bottom Line

If supporting older browsers is still a must then there
is no escaping the fact that Cookies are still essential.
But in many cases, especially when creating web
*applications*, utilising Web Storage can often be a more effective approach considering the simplicity of the implementation, improved security and smaller HTTP headers.
