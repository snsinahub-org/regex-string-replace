const github = require('@actions/github')
const core = require('@actions/core')
const _ = require('lodash')
const fs = require('fs')
const replace = require('./utils/replace')

async function run() {
    try {
        // Get inputs
        const string = core.getInput('string');
        const regex = core.getInput('regex');
        const replacement = core.getInput('replacement');
        const flags = core.getInput('flags');
      
        let replacedString = replace(string, regex, replacement, flags);
      
        fs.appendFileSync(process.env.GITHUB_OUTPUT, "replaced_string=" + replacedString);
      } catch (error) {
        fs.appendFileSync(process.env.GITHUB_OUTPUT, "ERROR=" + error.message);
      } 

    
}

run();