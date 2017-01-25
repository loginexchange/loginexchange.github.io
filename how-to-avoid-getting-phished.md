# What is phishing?

_Phishing_ is when someone attempts to trick you into revealing your password, bank details, or other sensitive information for malicious reasons (e.g. to steal your identity, perform bank transactions using your account). A phishing attack could be as simple as an email, SMS or phone call from someone pretending to be someone they're not.


# How to avoid getting phished

One trick that many people fall for is a fake website that looks just like the real thing, but is actually controlled by the attacker(s). The below information has been put together to help you identify fake websites and keep your details safe online.


## Why might I end up on a fake website?

There are many ways an attacker can get you to visit a fake website:

- You may have clicked a link in an email, a messaging app, or an SMS.

- If you've been browsing a not-entirely-reputable site, it may contain links to a phishing site, or could even open a phishing site in another tab without you realising.

- Even reputable sites can be compromised:

  - if you are browsing a website over an insecure connection (i.e. not https -- [see below](#https-s-is-for-secure)) while connected to a wi-fi network you don't trust, an attacker on the same network could tamper with the information sent to and from your browser;

  - if you have a malicious browser plugin or extension installed, it could modify or insert code into the page;

  - if the website's own security is poor, they may be vulnerable to a technique called "cross-site scripting" (XSS), where they could be serving malicious content without realising it.


## How do I know if I can trust a link?

Here are a few things to know about hyperlinks online:

### Check the website that the link will send you to

A link could appear to be identical to the real website's address but when clicked on, directs you to a fake website.  This is because the text displayed in the link can be anything, but an attacker could use that fact to create a false sense of security. Here is an example of this: <center><a href="https://www.google.com" target="_blank">www.facebook.com</a></center>

This link may look like the Facebook website address, but that is only the _text_ of the link. The website it actually takes you to could be completely different. If you're on a desktop or laptop and you hover your mouse cursor over the link, you can usually see the real address in the footer of your browser.


### URL shorteners

A shortened URL looks something like this: <center><a href="https://goo.gl/m5wW85" target="_blank">https://goo.gl/m5wW85</a></center>

URL shorteners are usually used for analytical purposes, or to save space, but they aren't easy to trust. Popular services include bit.ly or tinyurl.com, and some companies have one of their own, like the Google link above. Just because a link looks like it's come from Google doesn't mean you should trust where it takes you.


### So what can I do if I'm not sure?

If you have any suspicions at all, consider typing the website's address yourself or using an existing bookmark, so that you don't have to trust the link in the first place.

If that's not practical, or if you've clicked on the link already, be sure to check the address bar at the top of the new browser tab.


## HTTPS: "S" is for "Secure"

A legitimate website will not ask for passwords or other sensitive information without using HTTPS.

[TODO]: screenshot of https in address bar

[TODO]: screenshot of viewing certificate information in a browser

However, just because a site is using https, this still doesn't guarantee that it's the site it claims to be -- SSL Certificates are becoming free and easy for everybody to use, but that includes fake sites too!


[TODO]: mention Extended validation certificates?


## How do I know if an email is fake?

It can be hard to know for sure, but here are few things to bear in mind:

- A phishing email might look just like an email from the real website - always check the _from_ address. If you don't recognise what appears after the @ sign, don't trust it.

[TODO]: screenshot

- If your email provider has flagged a message as spam or as a suspected phishing attack, of course take their suggestion very seriously!

- Even with SMS, the attacker can make it appear to be from anybody, so never assume it's legitimate just because you recognise the name (e.g. from "Apple"). Also be very suspicious of SMS messages that contain a link (see above section).

[TODO]: screenshot

- If the message comes from someone you know and trust, it is always possible that your friend has fallen for the same trick first! If an attacker has access to your friend's account, they could be using it to send the message onto you too.


As for the content of the message itself:

- It might say "Dear Customer", when your bank would usually address you by name. However, it is also possible that an attacker does know personal information about you (perhaps bought from another service or found in a leaked database), and can use this information to gain your trust.

- A phishing email could be designed to induce panic, trying to make you act carelessly. Examples of this could include "have you seen this video of you?!" or "your account has been suspended!".

- Try to be vigilant of spelling mistakes or punctuation errors - hopefully an official communication from your bank would not contain any!


## What other precautions can I take?

### Never re-use important passwords

If you're using the same password for all our accounts, then you are at risk of all your online accounts being accessible to an attacker the moment they get the details of just one of them. 

The password to your email address in particular should not be the same as any other password you have. The reason for this is that all it takes is for an attacker to know the password to your email account, and then they can use the access to your email account to reset the passwords for any other website tied to that email address - giving them access to almost everything.


### Password managers

If you use a different password for every website you ever use, you'll have a lot to remember. This is where password managers such as 1Password or LastPass may come in handy - they remember your passwords for you and can work across all your devices.


### Enable two-factor authentication

Most websites that give you access to sensitive information, like your bank for example, should be using more than just a single password to authenticate you. For example, every time you login you may need to provide a few characters from a second password, or a thumbprint, or a confirmation by SMS. It is worth enabling this option if it is available to you as this makes it more difficult for an attacker to gain access.


## I think I've been phished, what should I do?

It is important that you take action immediately:

- Change all of your passwords so the attacker no longer has access.

- Report the email/SMS/site to the organisation it is pretending to be as they can then provide further advice and investigate. Most organisations have dedicated email addresses and contact numbers you can use if you suspect you have been a victim to phishing.

- If the attack came in an email, report it to your email provider for further investigation.

