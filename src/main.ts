import * as core from '@actions/core';

const main = () => {
  try {
    // const splitFlag = (flag) => {
    //   const result = flag.split('=');

    //   return {
    //     flag: result[0],
    //     value: result[1],
    //   };
    // };

    // const command = core.getInput('comment');
    // const limit = parseInt(core.getInput('limit'), 10);
    // build --env=prod --config=app
    // apply file --env --tags= --limit
    // const command1 = 'build --env=prod --config=app';
    // const command2 = 'build --env=prod build-dua --config=app';
    const command = 'apply file --env=prod --tags=a --address=10';
    const separator = ' ';

    const parts = command.split(separator);

    parts.map((part) => {
      const temp = {};
      const args = part.split('=');

      if (args.length > 1) {
        const flag = args[0].slice(2);
        const value = args[1];

        temp[flag] = value;
      } else temp[part] = part;

      return temp;
    });

    core.setOutput('result', parts);

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
