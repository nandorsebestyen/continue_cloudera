import { LLMOptions } from "../../index.js";

import OpenAI from "./OpenAI.js";

class Cloudera extends OpenAI {
  static providerName = "cloudera";
  static defaultOptions: Partial<LLMOptions> = {
    apiBase: "https://api.nandi.com/openai/v1/",
    apiKey: "nandikey_cdp_generated"
  };
}

export default Cloudera;
