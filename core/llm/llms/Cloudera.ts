import { execSync } from "child_process";

import {
  LLMOptions
} from "../../index.js";
import OpenAI from "./OpenAI.js";

class Cloudera extends OpenAI {
  static providerName = "cloudera";

  constructor(options: LLMOptions) {
    super(options);
    console.log("nandi Constructor is called during initialization !");
    console.log(this.apiBase);
    console.log(this.apiKey);
    this.runTask()
    //setInterval(this.runTask, 10000);

  }

  runTask() {
    console.log("Running task at nandi", new Date().toLocaleTimeString());
    try {
      let response = execSync(`cdp iam generate-workload-auth-token --workload-name DE --profile prod`).toString();
      console.log("-------------response-----------------");
      console.log(response);
      console.log("--------------expireAT----------------");
      const jsonObject = JSON.parse(response);
      let expireAt = jsonObject.expireAt
      console.log(jsonObject.expireAt)
     
      console.log("------------token------------------");
      console.log(jsonObject.token)
      this.apiKey=jsonObject.token
      this.scheduleCommand(expireAt)

    } catch (err) {
      console.warn("Failed to run command");
    }
  }

  scheduleCommand(expireAt: Date) {
    const now = new Date();
    const timeDifference = expireAt.getTime() - now.getTime();

    if (timeDifference > 0) {
        // Schedule the command to run before expireAt
        setTimeout(this.runTask, timeDifference);
        console.log(`Command scheduled to run in ${timeDifference / 1000} seconds.`);
    } else {
        console.log("expireAt date has already passed. Command will not be scheduled.");
    }
}

}



export default Cloudera;