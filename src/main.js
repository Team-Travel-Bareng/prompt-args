import * as core from '@actions/core';
import readline from 'readline';
import { stdin as input, stdout as output } from 'process';

const main = () => {
  try {
    let command = core.getInput('string');
    let separator = 'hehehe';
    let limit = parseInt(core.getInput('limit'), 10);

    console.log(`Input string : ${command}`);
    console.log(`Separator    : ${separator}`);
    console.log(`Limit        : ${limit}`);

    let parts = command.split(separator, limit);

    parts.forEach((part, index) => {
      core.setOutput(`_${index}`, part);
    });

    core.setOutput('length', 'testing ' + parts.length);
    core.setOutput('separator', separator);
  } catch (error) {
    core.setFailed(error.message);
  }
};

main();
