import core from "@actions/core";
import fs from "fs";

let run_demo_action = async function () {
  try {
    //const input = core.getInput("directory-input");

    const input = "/usr/src/app/"
    var fileList = [];
    fs.readdir(input, (err, files) => {
      console.log(files);
      files.forEach((file) => {
          fileList.push(file.toString());
      });
    });

    core.info("we discovered these files " + fileList);

  } catch (error) {
    core.setFailed(error.message);
  }
};

run_demo_action();
