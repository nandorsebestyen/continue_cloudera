import {
  LLMOptions,
  ModelProvider,
} from "../../index.js";
import OpenAI from "./OpenAI.js";
import * as childProcess from 'child_process';

class Cloudera extends OpenAI {
  static providerName: ModelProvider = "cloudera";
  }

export default Cloudera;