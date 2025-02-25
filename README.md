# Replace String

This action allows you to replace a string using a regular expression or a simple string replacement. It can handle various regex patterns and perform replacements accordingly.

## Action Parameters
```YAML
- name: 'Replace string with regex'
  id: replace
  uses: "snsinahub-org/regex-string-replace@v1.0.0"
  with:
  
    # The string to replace
    string: ${{ github.event.inputs.string }}
    
    # The regex to use for replacement
    regex: ${{ github.event.inputs.regex }}
    
    # The replacement string
    replacement: ${{ github.event.inputs.replacement }}
    
    # The flags to use for regex
    flags: ${{ github.event.inputs.flags }}
```

## Output

```replaced_string``` - The string after replacement

## Examples

### How to replace a string

Let's say you want to replace all occurrences of "th" with "HELLO" in the string "Test this that and path".

```YAML
    - name: checkout
      uses: actions/checkout@v4
    - name: 'Replace string with regex'
      id: replace
      uses: "snsinahub-org/regex-string-replace@v1.0.0"
      with:
        string: 'Test this that and path'
        regex: 'th'
        replacement: 'HELLO'
        flags: 'g'
    - name: 'Print replaced string'        
      run: |
        echo ${{ steps.replace.outputs.replaced_string }}
```

### Example 2 - a full actions workflow

```YAML
name: replace string

on:
  workflow_dispatch:
    inputs:
      string:
        description: 'String to replace'
        required: true
        default: 'Hello, World!'
      replacement:
        description: 'Replacement string'
        required: true
        default: 'Goodbye, World!'
      regex:
        description: 'Use regular expression'
        required: false
        default: false
      flags:
        description: 'Regular expression flags'
        required: false
        default: 'g'


jobs:
  replaced_string:  
    runs-on: ubuntu-latest

    steps:
      - name: Replace string
        id: replace
        uses: snsinahub-org/regex-string-replace@feature/init
        with:
          string: ${{ github.event.inputs.string }}
          replacement: ${{ github.event.inputs.replacement }}
          regex: ${{ github.event.inputs.regex }}
          flags: ${{ github.event.inputs.flags }}
      - name: Get the replaced string
        run: echo "The replaced string is ${{ steps.replace.outputs.replaced_string }}"
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
