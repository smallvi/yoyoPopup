document.getElementById('successBtn').onclick = function () {
    showYoyoPopup({
        text: 'Created Successfull',
        type: 'success',
        timeOut: 5000,
    });
};

document.getElementById('dangerBtn').onclick = function () {
    showYoyoPopup({
        text: 'Are you sure you want to proceed?',
        subtext: 'This action cannot be undone.',
        type: 'danger',
        isStatic: true,
        hasConfirmation: true,
        yesLabel: 'Yes, proceed',
        noLabel: 'Close',
        submitType: 'call_function',
        formId: '',
        callFunctionName: 'exampleFunction',
    });
};

document.getElementById('infoBtn').onclick = function () {
    showYoyoPopup({
        text: 'What is python',
        subtext: 'Python is snake',
        type: 'info',
    });
};

document.getElementById('warningBtn').onclick = function () {
    showYoyoPopup({
        title: '',
        text: 'Are you sure you want to proceed?',
        subtext: '',
        type: 'warning',
        isStatic: true,
        hasConfirmation: true,
        yesLabel: 'Yes, proceed',
        noLabel: 'Close',
        submitType: 'call_function',
        formId: '',
        callFunctionName: 'exampleFunction',
    });
};

document.getElementById('questionBtn').onclick = function () {
    showYoyoPopup({
        id: 'default',
        title: '',
        text: 'Are you sure you want to proceed?',
        subtext: 'This action cannot be undone.',
        type: 'question',
        isStatic: true,
        hasConfirmation: true,
        yesLabel: 'Comfirm',
        noLabel: 'Close',
        submitType: 'call_function',
        formId: '',
        callFunctionName: 'exampleFunction',
    });
};

function exampleFunction() {
    alert('Function Called!');
}