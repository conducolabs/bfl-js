# bfl-js

This package helps you connecting your JavaScript application with the API of Black Forest Labs. This package exposes functions to generate images with `flux-dev`, `flux-pro` and `flux-pro 1.1`. It is also possible to use the refinement tools of Black Forest Labs and to generate own finetuning models that can be used through image generation.

## Getting started

Before installing this package, please register under https://api.us1.bfl.ai and create an account. You'll also need to add credits to your account before you can use this package. After creating an account, copy your api key.

Next, you have to install this package in your project.

```
npm install @conducolabs/bfl-js --save  // If you use NPM.

// or

yarn add @conducolabs/bfl-js // If you use Yarn.
```

## Initializing the connector

```
import Connector from "@conducolabs/bfl-js";

const bflApi = new Connector({ apiKey: "Paste your API key here"});
```

## Example implementation with flux-pro
```
import Connector, { FluxPro1 } from "@conducolabs/bfl-js";

const generateImage = async () => {
    try {
        const bflApi = new Connector({ apiKey: "Paste your API key here"});
        const fluxPro1 = new FluxPro1(bflApi);
        const image = await fluxPro1.generateImage("A happy rabbit sitting on a field of grass smiling.");
        console.log(image.id); // You'll need this ID to retrieve your image. This is a separate call in the API.
    } catch(error) {
        console.error(error);
    }
};

generateImage();
```

This call uses the default values for image generation. You can pass an object with additional values after your prompt. Please refer to the [API description](https://api.us1.bfl.ai/scalar#tag/tasks/POST/v1/flux-pro) to find all available values.

## Available classes and functions

### Connector

`import Connector from "@conducolabs/bfl-js";`

| Name                          | Values                                                                           | Returns                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                                            |
|-------------------------------|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| new Connector(configuration); | **configuration**<br>Type: Object<br>Example: {<br>  apiKey: "Your API key"<br>} | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | This class initializes the connector and is needed for all available models.                                                                                                                                                                           |
| .getStatus(imageId);          | **image**<br>Type: String<br>Example: "f1d1f83d-1cf5-48f3-9c33-ff7e55d503fa"     | {<br>    <br>   "id": "f1d1f83d-1cf5-48f3-9c33-ff7e55d503fa",<br>   "status": "Ready",<br>   "result": {<br>      "sample": "SIGNED URL TO DOWNLOAD IMAGE",<br>      "prompt": "Realistic picture of Commander Con flying in space waving with one hand."<br>   },<br>   "progress": null<br>} | This async function retrieves the details of an image generation. If the image has finished processing, it will provide all information to download the image. If the image hasn't finished processing, it will return the progress of the generation. |