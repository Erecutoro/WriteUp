# Broken login

Talk about a garbage website... I don't think anybody's been able to [log in](https://brokenlogin.web.actf.co/) yet! If you find something, make sure to let the [admin](https://admin-bot.actf.co/brokenlogin) know.

[Source code](https://files.actf.co/ce4cbaf2a4122a671028b0d3e1c407bbea8d64a3ffb123d63b4d6b6659305042/app.py)  [Admin bot code](https://files.actf.co/c9bd78edc3de06985326cc9bda63e719a0c7092c8d8812f71ab6a9e52744db1a/brokenlogin.js)

Author: JoshDaBosh

## Solution (unfinished)

if you checkout the source file we can see that the code escape the "message" argument meaning that by adding "/?message=" to the end or the page's URL you can input a "message".

```python
from flask import Flask, make_response, request, escape, render_template_string
~~~
    if "message" in request.args:
        print(len(request.args["message"]))
        if len(request.args["message"]) >= 25:
            return render_template_string(indexPage, fails=fails)

        custom_message = escape(request.args["message"])

~~~
```

If you go and checkout the Flask escape() function
```
This function replaces certain characters with their HTML entity equivalents
```

Meaning that by adding "{{ }}" you can use the Flask environment to input python code. This is a SSTI (Server-side Template Injection).

There is however a 25 character length restriction.

```python
~~~
        if len(request.args["message"]) >= 25:
            return render_template_string(indexPage, fails=fails)
~~~
```

To bypass the message caracter length we can use the request.args.s to use another argument without the message length restriction.

.../?message={{request.args.s}}&s=ls

This however pass the s argument as a string and is thus not executed.

## Flag
\-------

# What was missing to get the flag (from other people writeup)

Adding ```|safe``` to the SSTI and a XSS to redirect the admin bot's response and get the flag.
Dont know where/what the ```|safe``` come from and where it was found.