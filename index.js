import core from "@actions/core";
import fs from "fs";

let run_demo_action = async function () {
  try {
    const input = core.getInput("directory-input");

    var fileList = [];
    fs.readdir(input, (err, files) => {
      console.log(files);
      files.forEach((file) => {
        if (file.includes(lookup)) {
          fileList.push(file.toString());
        }
      });
    });

    core.info("From the directory mounted location " + input+" we discovered these files " + fileList);

  } catch (error) {
    core.setFailed(error.message);
  }
};

run_demo_action();
