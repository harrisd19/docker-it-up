import core from "@actions/core";
import fs from "fs";

let run_demo_action = async function () {
  try {
    const readinput = core.getInput("directory-input");

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

    var filepath = ["/github/workspace/", readinput, "/", "mytext.txt"]

    fs.readFile(filepath.join(''),'utf8', function(err, data) {
        core.info('OK: ' + filepath.join(''));
        core.info(data)
    });

  } catch (error) {
    core.setFailed(error.message);
  }

  core.info(process.env.INPUT_CONFIG)
};

run_demo_action();
