# CLI help and recipies

## How to install the FireBase CLI

```sh
> npm i -g firebase-tools
```

## How to login in FireBase using the CLI

First we need to execute the next command:

```sh
> firebase login
```

Then that will open a browser that will request the login information, after filling the spaces with the correct
information the CLI will react and tell you that you are loggin succesfully.

## How to deploy a project


```sh
> firebase deploy --project use-your-project-id
```

## How to interact with the functions

Depending of the function, we can send data to it doing a `post` request to the url that the deployment process gave us.