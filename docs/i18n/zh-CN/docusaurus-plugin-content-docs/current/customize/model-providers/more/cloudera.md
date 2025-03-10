p# Cloudera AI Inference - CAII

Cloudera CAII - TODO: adding more infos how to have CAII serving app


More info about Cloudera Inference [CAII blog](https://docs.cloudera.com/cdp-public-cloud-preview-features/cloud/ml-ai-inference-service/ml-ai-inference-service.pdf).
Visit the [CAII blog for actual news](https://dashboard.cohere.com/api-keys) to create an API key.
Create API key [CDEP_TOKEN](https://docs.cloudera.com/cdp-public-cloud/cloud/cli/topics/mc-cdp-cli.html).


After it's up and running, change `~/.continue/config.json` to look like this:

```json title="~/.continue/config.json"
    {
      "model": "AUTODETECT",
      "title": "Cloudera CAII",
      "apiBase": "https://ml-97b60e19-d90.eng-ml-i.svbr-nqvp.int.cldr.work/namespaces/serving-default/endpoints/llama-31-8b-instruct-a10gx2/v1/",
      "apiKey": "<api key = CDP_TOKEN>",
      "provider": "cloudera"
    },
```

[View the source](https://github.com/continuedev/continue/blob/main/core/llm/llms/Cloudera.ts)