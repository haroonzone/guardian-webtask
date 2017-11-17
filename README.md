# Guardian Webtask
An auth0 webtask to search for articles using Guardian API

In order to run this, you would need to register with the [Guardian API Platform](http://open-platform.theguardian.com/) as a developer.

You can create a webtask using the following command.

```
wt create guardian.js --secret API_KEY={api_key_value}
```

You should be given a URL in the following format. 

```
https://wt-<yours_uuid>.run.webtask.io/guardian
```

## Usage

Visit the generated URLs via your browser or use the curl command to do a GET request.

```
https://<yours_uuid>.run.webtask.io/guardian?q=auth0

https://<yours_uuid>.run.webtask.io/guardian?q=obama
```
