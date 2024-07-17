# Yoyo Popup

## Author
- Yeo
- smallvi@gmail.com

## Introduction

This plugin provides a customizable alert popup without any dependencies.

## Screenshot

![Success Yoyo Popup ](images/success_yoyo_popup.png)
![Danger Yoyo Popup ](images/danger_yoyo_popup.png)
![Info Yoyo Popup ](images/info_yoyo_popup.png)
![Warning Yoyo Popup ](images/Warning_yoyo_popup.png)
![Question Yoyo Popup ](images/question_yoyo_popup.png)

## Installation

Include the following files in your project:

- `yoyo-popup.min.css`
- `yoyo-popup.min.js`

## Usage

1. Include `yoyo-popup.min.css` and `yoyo-popup.min.js` in your HTML file:

   ```html
   <link rel="stylesheet" href="path/to/yoyo-popup.min.css">
   <script src="path/to/yoyo-popup.min.js"></script>
   ```

2. Initialize the plugin in your JavaScript:
    
    ### Simple Yoyo Popup Alert

    ```javascript
    showYoyoPopup({
        text: 'Done',
        type: 'success',
    });
    ```

    ### Advance Yoyo Popup Alert

    ```javascript
    showYoyoPopup({
        id: 'default',
        title: '',
        text: 'Are you sure you want to proceed?',
        subtext: 'This action cannot be undone.',
        type: 'danger',
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

## Sample

Refer index.html

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.