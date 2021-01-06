---
title: "How to build a remote control for Raspberry Pi with Python"
date: "2020-09-03"
template: "post"
draft: false
category: "python"
slug: "build-remote-control-raspberry-with-python"
tags: 
  - "control"
  - "control"
  - "flask"
  - "python"
  - "raspberry"
  - "remote"
  - "server"
  - "template"
description: "The basic idea is to use a server to display a frontend that can be viewed from the smartphone, and associate to the shutdown and reboot buttons the commands needed to turn off and restart the raspberry."
socialImage: "/media/fix_car_story-823x1024.png"
---

The Rapsberry Pi does not have a key to turn off the system.

In fact, for the multiple uses that can be made with the Raspberry, a shutdown button would be superfluous. But sometimes, for some projects, the ability to shut down or reboot the system might come in handy.

**I personally use the Raspberry Pi as a media center to watch TV**. I live abroad, and TV in my native language is only available online, but I didn't want to use the computer and connect it to the TV every time.

Kodi turned out to be a great solution, and for a while, everything went well. At a certain point, however, I realized that I was watching the news in the evening, at most for an hour, **while the Raspberry was on 24 hours a day**.

I thought, therefore, to use python to develop a remote control so I could turn off the Raspberry as soon as I finished using it. Which is very convenient, **since having Kodi set to start up**, I can simply turn off the Raspberry, turn off the power, and then turn on the power again the next time I use it. This will turn on the TV, turn on the RaspberryPi with Kodi, and the whole system is ready again.

Let's move on to the practical part.

## Install Flask and make a server

**The basic idea is to use a server to display a frontend** that can be viewed from the smartphone, and associate to the shutdown and reboot buttons the commands needed to turn off and restart the raspberry.

To do this, I used **Flask**, which really allows within 5 minutes to set up a virtual server with python.

I take it for granted that **python 3+** and **pip** are installed on the Raspberry.

First of all, let's connect to the Raspberry via ssh and give the command to install Flask.

```
pip install flask
```

After the installation is complete, create a new file and call it `server.py`. Here we will write the server configuration and define the commands to turn off and restart the raspberry.

So let's give:

```
touch server.py && nano server.py
```

(I use `nano`, but any editor is fine)

This will be the content of the file `server.py`

```
#!/usr/bin/python3
from flask import Flask, render_template
app = Flask(__name__)
import os

@app.route('/')
def index():
        templateData = {
                'title' : 'Remote Controller'
        }
        return render_template('index.html', **templateData)

@app.route('/shutdown')
def shutDown():
        message = ''
        templateData = {
                'result' : message
        }
        try:
                os.system('sudo shutdown -h now')
        except:
                return 'error'
        return render_template('index.html', **templateData)

@app.route('/reboot')
def reboot():
        message = ''
        templateData = {
                'result' : message
        }
        try:
                os.system('sudo reboot')
        except:
                return 'error'
        return render_template('index.html', **templateData)

if __name__=='__main__':
        app.run(debug=True, port=80, host='0.0.0.0')
```

The concept as you see is very simple. In the template, routes are defined. For each route, the corresponding command is defined.

The idea is to show in the frontend two buttons, which are two links, that lead to defined routes. As soon as the user clicks on a link and the browser loads the page with a route, then the corresponding command is launched.

Very simple.

## Create the template

We just need the `HTML` template to show in the frontend, which will be our real remote control is.

Let's create a template folder and inside the `HTML` file, let's call it `index.html`

```
mkdir template && cd template && touch index.html && nano index.html
```

The content of the template is as follows, but be creative:

```
<!DOCTYPE html>
   <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;600&display=swap" rel="stylesheet">
        <title>{{ title }}</title>
        <style>
        body {
                color: #f0f0f0;
                background-color: #333333;
                font-family: 'IBM Plex Sans', sans-serif;
        }

        .container {
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                flex-direction: column;
                height: 100vh;
        }
        .container__button {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                text-align: center;
        }
        .button {
                display: block;
                width: 7em;
                height: 7em;
                border-radius: 50%;
        }
        .button--red {
                background-color: red;
        }
        .button--yellow {
                background-color: yellow;
        }
        </style>
   </head>
   <body>
        <div class="container">
                {{success}}
                <div class="container__button">
                        <h2>Shut Down</h2>
                        <a href="/shutdown" class="button button--red"></a>
                </div>
                <div class="container__button">
                        <h2>Reboot</h2>
                        <a href="/reboot" class="button button--yellow"></a>
                </div>
        </div>
   </body>
</html>
```

## Let's use the remote control

Now we can start the server by giving the command

```
python server.py
```

If everything went smoothly, you will be able to see the template you created by navigating from your smartphone's browser to the raspberry's IP address.

(If you do not know the IP address of your Raspberry, simply use `ifconfig` to find out).

You should see something like this

![Screenshot of RaspberryPi remote control](/media/RaspberryPi_remote_screenshot-653x1024.png)

Clicking now on one of the two buttons, the browser should take you to one of the two routes defined in `server.py` and turn off or restart the Raspberry.

## This is just the basis

This is the basis to work, but I suggest you refine it a little bit, for example making a better design or defining redirections when you press a button (now, of course, you'll get an error message because the page doesn't exist, but the system will work anyway)

I hope it is a useful project to better understand python, flask, and to turn off or restart the Raspberry Pi comfortably sitting on the couch, without brutally interrupting the power supply.

[The complete code can be found in my GitHub Repo.](https://github.com/daaanny90/remote-raspberry)

* * *

Photo by [JESHOOTS.COM](https://unsplash.com/@jeshoots?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/remote?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
