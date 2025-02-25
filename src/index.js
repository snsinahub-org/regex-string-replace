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
        console.log('string:', string);
        console.log('regex:', regex);
        console.log('replacement:', replacement);
        console.log('flags:', flags);
        console.log('GITHUB_EVENT_NAME:', process.env.GITHUB_EVENT_NAME);
        console.log('GITHUB_EVENT_PATH:', process.env.GITHUB_EVENT_PATH);
        console.log('GITHUB_WORKSPACE:', process.env.GITHUB_WORKSPACE);
        console.log('GITHUB_SHA:', process.env.GITHUB_SHA);
        console.log('GITHUB_REF:', process.env.GITHUB_REF);
        console.log('GITHUB_REPOSITORY:', process.env.GITHUB_REPOSITORY);
        console.log('GITHUB_HEAD_REF:', process.env.GITHUB_HEAD_REF);
        console.log('GITHUB_BASE_REF:', process.env.GITHUB_BASE_REF);
        console.log('GITHUB_ACTOR:', process.env.GITHUB_ACTOR);
        console.log('GITHUB_WORKFLOW:', process.env.GITHUB_WORKFLOW);
        console.log('GITHUB_ACTION:', process.env.GITHUB_ACTION);
        console.log('GITHUB_ACTIONS:', process.env.GITHUB_ACTIONS);
      
        let replacedString = replace(string, regex, replacement, flags);
      
        fs.appendFileSync(process.env.GITHUB_OUTPUT, "replaced_string=" + replacedString);
      } catch (error) {
        fs.appendFileSync(process.env.GITHUB_OUTPUT, "ERROR=" + error.message);
      } 

    
}

run();