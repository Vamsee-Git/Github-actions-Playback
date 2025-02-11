const core = require('@actions/core');

try {
  // Get input values
  const exampleInput = core.getInput('example_input');
  
  // Process the action logic (for example, just log and set outputs)
  console.log(`Input received: ${exampleInput}`);
  
  // Set output
  core.setOutput('result', `Processed value: ${exampleInput}`);
} catch (error) {
  core.setFailed(error.message);
}
