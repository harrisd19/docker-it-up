import core from "@actions/core";
import fs from "fs";

let run_demo_action = async function () {
  try {
    //const input = core.getInput("directory-input");

    const input = ["/usr/src/app/", "/github/workspace/", "/github/home/", "/github/workflow/", "/github/file_commands/"]
    input.forEach((path) => {

    var fileList = [];

    fs.readdir(path, (err, files) => {
        files.forEach((file) => {
            fileList.push(file.toString());
            core.info("we discovered these files " + path + file);
        });
    });
    })
  } catch (error) {
    core.setFailed(error.message);
  }
};

run_demo_action();
