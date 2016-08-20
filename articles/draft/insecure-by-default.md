---
id: 4
title: Insecure By Default? Picking Packages Wisely
intro: We live in an age of modular frameworks and package managers, but how do we know the third party code we're using is stable, secure and will continue to be actively maintained? 
filename: insecure-by-default.md
date: 2015-08-01
---

# Insecure By Default? Picking Packages Wisely

Writing modular and reusable code is one of the paradigms of software engineering and something many of us aspire to. Therefore it is no surprise that we live in an age of modular frameworks and package managers, where we can take some third party code and integrate it seamlessly into our application.

This brings an unparalleled level of convenience and support when it comes to dealing with some of the trivial tasks that maybe we’d rather not code (and write tests for...) ourselves. Pagination, translation and authentication are just a few examples of where adding a line to a JSON file (for example) gives us everything we need, well tested, and with minimum fuss.

But how do we know the code we’re using is stable, secure and will continue to be actively maintained?

## True Story

I recently came across a very popular AngularJS module, generally regarded as one of the best for it's purpose, which is "insecure by default". The following extract, in relation to a known XSS vulnerability, is buried several layers deep in their documentation:

*"The result will not be escaped correctly. this means your app is vulnerable for serious attacks...We enforce being completely backwards compatible, which means the escaping is disabled by default."*

![Umm... Wat?](/assets/img/articles/insecure-by-default/umm-what-dog.jpg)

While it is possible in this case to "enable security" there are so many things wrong with this approach that I don’t really know where to start. But it made me realise just how important it is to not assume that, just because a package is popular, it is also secure.

Ultimately we are just as responsible for the code we *include* in an application as we are for the code we write. So how can we minimise the risks?

## Essential Package Selection Checklist

Realistically we can’t inspect every line of code of a third party dependency, but there are some common sense checks that we can make before including a package in our application. Here are some of the key things to look out for...

- Is the package actively maintained?
- Are any open issues being dealt with effectively?
- Is the documentation well written, easily accessible, and up to date?
- Are the key contributors reputable and experienced?
- Does it come complete with (well designed) tests?
- Is the source code well structured and built to relevant standards?

While meeting the above criteria is by no means a guarantee of security or stability, it should at least give an indication of the contributors awareness and experience.

If the code is well structured and tested then it’s certainly more likely that basic security and functional requirements have been met, and if it’s actively maintained then any newly discovered vulnerabilities can be patched quickly.

Investing just a few minutes of time to assess the suitability of third party packages will not only help safeguard against introducing vulnerabilities into an application, but will also improve overall stability and confidence levels. Result!
