# Yoyo Popup Plugin

## Introduction

This plugin provides a customizable alert popup without any dependencies.

## Installation

Include the following files in your project:

- `yoyo-popup.min.css`
- `yoyo-popup.min.js`

## Usage

1. Include `yoyo-popup.css` and `yoyo-popup.js` in your HTML file:

   ```html
   <link rel="stylesheet" href="path/to/yoyo-popup.min.css">
   <script src="path/to/yoyo-popup.min.js"></script>
   ```

2. Initialize the plugin in your JavaScript:
    
    ### Simple Alert
    ```
    showYoyoPopup({
        text: 'Done',
        type: 'success',
    });
    ```
    
    ### Advance Alert
    ```
    showYoyoPopup({
        id: 'default',
        title: '',
        text: 'Are you sure you want to proceed?',
        subtext: 'This action cannot be undone.',
        type: 'success',
        isStatic: true,
        hasConfirmation: true,
        yesLabel: 'Yes, proceed',
        noLabel: 'Close',
        submitType: 'call_function',
        formId = '',
        callFunctionName: 'exampleFunction',
        timeOut = 0,
    });
    ```

## Param

- id: Optional - ID of the alert popup container.
- title: Optional
- text: Main Text
- subtext: Sub Text
- type: Icon type {'info','question','success','warning','danger'}
- isStatic: Boolean indicating if the popup is static (click outside to close),
- hasConfirmation: Boolean indicating if the popup has yes button,
- yesLabel: Label of Yes button,
- noLabel: Label of No button,
- submitType: Nullable, type of submission {'form', 'call_function'}.
- formId: Form ID to submit (if submitType == 'form'),
- callFunctionName: Function Name to call (if submitType == 'call_function'),
- timeOut: auto close modal (1000 = 1 sec),

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.