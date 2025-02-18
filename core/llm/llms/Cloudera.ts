import { LLMOptions } from "../../index.js";
import { BaseLLM } from "../index.js";

import OpenAI from "./OpenAI.js";

class Cloudera extends BaseLLM {
  static providerName = "cloudera";

  
  

  constructor(options: LLMOptions) {
    super(options);
    console.log("nandi Constructor is called during initialization !");
    console.log(this.apiBase);
    console.log(this.apiKey);
    this.apiBase="nandi api base 1";
    this.apiKey="nandi api key 1";
    console.log(this.apiBase);
    console.log(this.apiKey);
    
  }

}



export default Cloudera;