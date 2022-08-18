
import core from '@actions/core'

let run_demo_action = async function() {
    try {
      const argument = process.argv[2];

      core.debug("argument reads as: ", argument)

      core.notice('Notice: Something happened that you might want to know about.')

      core.warning('Warning: Something went wrong, but it\'s not bad enough to fail the build.')
      
    } catch (error) {
      core.setFailed(error.message);
    }
  }

  run_demo_action();