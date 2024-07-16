/*! 
* Yoyo Popup v1.0.0 (https://github.com/smallvi/yoyo_popup) 
* Copyright 2024 The Yoyo Popup Author
* Licensed under MIT (https://github.com/smallvi/yoyo_popup/blob/main/LICENSE.md)
*/
function showYoyoPopup(config) {
    console.log('showYoyoPopup called'); // 调试用

    const {
        id = 'default',
        title = '',
        text = 'Are you sure?',
        subtext = null,
        type = 'warning',
        isStatic = false,
        hasConfirmation = false,
        yesLabel = 'Yes',
        noLabel = 'Close',
        submitType = 'form',
        formId = '',
        callFunctionName = 'empty_function',
        timeOut = 0,
    } = config;

    const iconMap = {
        'warning': '<svg class="yoyo-popup-icon" fill="orange" viewBox="0 0 20 20"><path d="M10 0C4.485 0 0 4.485 0 10s4.485 10 10 10 10-4.485 10-10S15.515 0 10 0zM11 15H9v-2h2v2zM11 11H9V5h2v6z"/></svg>',
        'danger': '<svg class="yoyo-popup-icon" fill="red" viewBox="0 0 20 20"><path d="M10 0C4.485 0 0 4.485 0 10s4.485 10 10 10 10-4.485 10-10S15.515 0 10 0zM11 15H9v-2h2v2zM11 11H9V5h2v6z"/></svg>',
        'success': '<svg class="yoyo-popup-icon" fill="green" viewBox="0 0 20 20"><path d="M10 0C4.485 0 0 4.485 0 10s4.485 10 10 10 10-4.485 10-10S15.515 0 10 0zM8 15l-5-5 1.5-1.5L8 12.5l7.5-7.5L17 6l-9 9z"/></svg>',
        'question': '<svg class="yoyo-popup-icon" fill="grey" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',
        'info': '<svg class="yoyo-popup-icon" fill="blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>',
    };
    const icon = iconMap[type] || iconMap['info'];

    // 移除可能存在的旧模态框
    const existingModal = document.getElementById(`yoyoAlertPopupModal_${id}`);
    if (existingModal) {
        existingModal.remove();
    }

    const modalHTML = `
        <div id="yoyoAlertPopupModal_${id}" class="yoyo-popup-modal">
            <div class="yoyo-popup-content">
                ${timeOut != 0 ? `<div class="yoyo-popup-progress-bar"><div class="yoyo-popup-progress" id="yoyo_popup_progress_${id}"></div></div>` : ''}
                <div class="yoyo-popup-header">
                    ${title ? `<h2>${title}</h2>` : ''}
                </div>
                <div class="yoyo-popup-body">
                    ${icon}
                    <div class="yoyo-popup-text">${text}</div>
                    ${subtext ? `<p class="yoyo-popup-subtext">${subtext}</p>` : ''}
                </div>
                <div class="yoyo-popup-footer">
                    <button id="yoyoCloseAlertPopupBtn_${id}" class="yoyo-popup-btn yoyo-popup-btn-grey">${noLabel}</button>
                    ${hasConfirmation ? `<button id="yoyoYesBtn_${id}" class="yoyo-popup-btn yoyo-popup-btn-blue">${yesLabel}</button>` : ''}
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const yoyoAlertPopupModal = document.getElementById(`yoyoAlertPopupModal_${id}`);
    const yoyoCloseAlertPopupBtn = document.getElementById(`yoyoCloseAlertPopupBtn_${id}`);
    const yoyoYesBtn = document.getElementById(`yoyoYesBtn_${id}`);

    function yoyoFadeOut() {
        yoyoAlertPopupModal.classList.add("yoyoFadeOutAnimation");
        setTimeout(() => {
            yoyoAlertPopupModal.remove();
        }, 250);
    }

    yoyoCloseAlertPopupBtn.onclick = yoyoFadeOut;

    if (submitType === 'form' && hasConfirmation) {
        const form = document.getElementById(formId);
        yoyoYesBtn.onclick = () => form.submit();
    } else if (submitType === 'call_function' && hasConfirmation) {
        yoyoYesBtn.onclick = () => {
            window[callFunctionName]();
            yoyoFadeOut();
        };
    }

    if (isStatic) {
        yoyoAlertPopupModal.onclick = (event) => {
            if (event.target === yoyoAlertPopupModal) {
                const popupContent = yoyoAlertPopupModal.querySelector('.yoyo-popup-content');
                popupContent.classList.remove('yoyoShakeAnimation');
                void popupContent.offsetWidth; // 触发重绘
                popupContent.classList.add('yoyoShakeAnimation');
            }
        };
    } else {
        yoyoAlertPopupModal.onclick = (event) => {
            if (event.target === yoyoAlertPopupModal) {
                yoyoFadeOut();
            }
        };
    }

    // 立即显示模态框
    requestAnimationFrame(() => {
        yoyoAlertPopupModal.style.display = 'block';
        requestAnimationFrame(() => {
            yoyoAlertPopupModal.classList.add("show");
        });
    });

    if (timeOut !== 0) {
        const yoyoProgressBar = document.getElementById(`yoyo_popup_progress_${id}`);
        let width = 0;
        const interval = 16; // 约60fps
        const increment = 100 / (timeOut / interval);

        const updateProgress = () => {
            if (width >= 100) {
                yoyoFadeOut();
            } else {
                width += increment;
                yoyoProgressBar.style.width = `${width}%`;
                requestAnimationFrame(updateProgress);
            }
        };

        requestAnimationFrame(updateProgress);
    }
}