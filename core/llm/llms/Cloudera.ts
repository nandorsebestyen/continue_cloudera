import { LLMOptions, ModelProvider } from "../..";
import OpenAI from "./OpenAI";

class Cloudera extends OpenAI {
    static providerName: ModelProvider = "cloudera";
    static defaultOptions: Partial<LLMOptions> = {
        model: "llama-31-8b-instruct-a10gx2/v1/b5fh-bnap-ymm6-3vy7",
        contextLength: 200_000,
        completionOptions: {
            model: "llama-31-8b-instruct-a10gx2/v1/b5fh-bnap-ymm6-3vy7",
            maxTokens: 4096,
          },
        apiBase: "https://ml-97b60e19-d90.eng-ml-i.svbr-nqvp.int.cldr.work/namespaces/serving-default/endpoints/",
    };
}

export default Cloudera;