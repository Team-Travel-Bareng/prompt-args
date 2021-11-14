import * as core from '@actions/core';

const main = () => {
  try {
    const splitFlag = (flag) => {
      const result = flag.split('=');
      
      return {
        flag: result[0],
        value: result[1]
      }
    }

    // const command = core.getInput('comment');
    // const limit = parseInt(core.getInput('limit'), 10);
    const command = 'build --env=prod --config=app';
    const separator = ' ';
    const limit = -1;

    const parts = command.split(separator, limit);
    
    const result = {
      job: parts[0] || 'build',
      environment: splitFlag(parts[1]),
      config: splitFlag(parts[2]),
    };

    console.log(result)

    core.setOutput('result', result);

    // core.setOutput('', parts[0])
    // core.setOutput('job', parts[1] || 'build');
    // core.setOutput('environment', parts[2] || 'staging');
    // core.setOutput('config', parts[3] || 'app');
    // core.setOutput('length', parts.length);
    // core.setOutput('separator', separator);
  } catch (error) {
    core.setFailed(error.message);
  }

};

main();

