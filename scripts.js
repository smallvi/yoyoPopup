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
        hasCancellation: true,
        confirmLabel: 'Yes, proceed',
        cancelLabel: 'Cancel',
        closeLabel: 'Close',
        formId: '',
        confirmFunction: ()=> functionConfirm(),
        cancelFunction: ()=> functionCancel(),
        closeFunction: () => alert('You click Close'),
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
        confirmLabel: 'Yes, proceed',
        closeLabel: 'Close',
        confirmFunction: ()=> alert('You click Confirm!'),
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
        confirmLabel: 'Comfirm',
        closeLabel: 'Close',
        confirmFunction: ()=> alert('You click Confirm!'),
    });
};

function functionConfirm(){
    alert('Function Confirm called');
}

function functionCancel(){
    alert('Function Cancel called');
}