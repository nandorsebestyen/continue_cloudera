# Cloudera
Cloudera offers centralized control over your organization's AI operations, ensuring data protection and compliance with internal policies while supporting various commercial and open-source models. To get started, sign up [here](https://app.cloudera.ai/), create your API key on the [API keys page](https://app.kindo.ai/settings/api), and choose a model from the list of supported models in the [plugins tab](https://app.kindo.ai/plugins).

## Config Example

```json title="~/.continue/config.json"
{
  "models": [
    {
      "title": "Claude 3.5 Sonnet",
      "provider": "cloudera",
      "model": "b5fh-bnap-ymm6-3vy7",
      "apiKey": "<CLOUDERA_API_KEY>"
    }
  ]
}
```

## Tab Autocomplete Config Example

```json title="~/.continue/config.json"
{
  "tabAutocompleteModel": [
    {
      "title": "WhiteRabbitNeo",
      "provider": "cloudera",
      "model": "/models/WhiteRabbitNeo-33B-DeepSeekCoder",
      "apiKey": "<CLOUDERA_API_KEY>"
    },
    {
      "title": "DeepSeek",
      "provider": "cloudera",
      "model": "deepseek-ai/deepseek-coder-33b-instruct",
      "apiKey": "<CLOUDERA_API_KEY>"
    }
  ]
}
```

## Security

To update your organization's model access, adjust the controls in ...