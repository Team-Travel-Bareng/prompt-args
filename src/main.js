import * as core from '@actions/core';
import readline from 'readline';
import { stdin as input, stdout as output } from 'process';

const main = () => {
  try {
    // const prompt = readline.createInterface({ input, output })

    // function ask(question) {
    //   return new Promise((resolve, reject) => {
    //     prompt.question(question, (input) => resolve(input) );
    //   });
    // }

    let command = core.getInput('string');
    let separator = ' ';
    let limit = parseInt(core.getInput('limit'), 10);

    console.log(`Input string : ${command}`);
    console.log(`Separator    : ${separator}`);
    console.log(`Limit        : ${limit}`);

    let parts = command.split(" ", limit);

    parts.forEach((part, index) => {
      core.setOutput(`_${index}`, part);
    });

    core.setOutput('length', parts.length);
    core.setOutput('separator', separator);
  } catch (error) {
    core.setFailed(error.message);
  }

  //   ask('Your command? ')
  //     .then(commandResult => {
  //       command = commandResult
  //       return ask('Your separator? ')
  //     })
  //     .then(separatorResult => {
  //       separator = separatorResult;
  //       return ask('Your limit? ')
  //     })
  //     .then(limitResult => {
  //       limit = limitResult;
  //     })
  //     .then(() => {
  //       const parts = command.split(separator, limit);

  //       parts.forEach((part, index) => {
  //         core.setOutput(`_${index}`, part);
  //       });
      
  //       core.setOutput('length', parts.length);

  //       console.log({ command, separator, limit });
  //     })
  //     .then(() => {
  //       prompt.close()
  //     });
  // } catch (error) {
  //   core.setFailed(error.message);
  // }
};

main();
