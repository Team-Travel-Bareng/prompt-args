const core = require("@actions/core")

const main = () => {
  try {
    // const splitFlag = (flag) => {
    //   const result = flag.split('=');

    //   return {
    //     flag: result[0],
    //     value: result[1],
    //   };
    // };

    let command = core.getInput('comment');
    // let command = 'build --env=prod --config=app'
    // let command = 'apply file --env --tags= --limit'
    // let command = 'build --env=prod --config=app';
    // let command = 'build --env=prod build-dua --config=app';
    // let command = 'apply file --env=prod --tags=a --address=10';
    // let command = 'ghtoped apply --env=prod file';
    // let limit = parseInt(core.getInput('limit'), 10);
    // let command = 'ghtoped apply --address=20 redisapp.yaml';

    const ENV_DEFAULT = 'prod';
    const TAGS_DEFAULT = 'test';
    const ADDRESS_DEFAULT = 10;

    if (!command.includes('--env')) command = `${command} --env=${ENV_DEFAULT}`;
    if (!command.includes('--tags')) command = `${command} --tags=${TAGS_DEFAULT}`;
    if (!command.includes('--address')) command = `${command} --address=${ADDRESS_DEFAULT}`;

    const separator = ' ';

    const parts = command.split(separator);
    const result = {};

    parts.forEach((part) => {
      const args = part.split('=');

      if (args.length > 1) {
        const flag = args[0].slice(2);
        const value = args[1];

        result[flag] = value;
      } else if (part.includes('.yaml') || part.includes('.yml')) {
        result['playbook'] = part;
      }
      else result[part] = part;
    });
    // console.log(result)
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
