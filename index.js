
import core from '@actions/core'

let run_demo_action = async function() {
    try {


      const argument = process.argv[2];

      core.info(argument)

      core.debug("When in debug mode, argument reads as: ", argument)

      core.notice('Notice: Something happened that you might want to know about.')

      core.warning('Warning: Something went wrong, but it\'s not bad enough to fail the build.')

      const input = core.getInput('who-to-greet')

      core.info(input)

      core.debug("this is an input: ", input)
      
    } catch (error) {
      core.setFailed(error.message);
    }
  }

  run_demo_action();