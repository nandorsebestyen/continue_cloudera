import { ModelProvider } from "../../index.js";
import OpenAI from "./OpenAI.js";

class Cloudera extends OpenAI {
  static providerName: ModelProvider = "cloudera";
}

export default Cloudera;