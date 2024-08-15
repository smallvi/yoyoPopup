/*! Yoyo Popup v1.0.0 (https://github.com/smallvi/yoyoPopup) */

function addGlobalStyle(css) {
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
}

const cssStyles = `
:root {
    --yoyo-popup-bg-color: rgba(0, 0, 0, 0.4);
    --yoyo-popup-content-bg: #fff;
    --yoyo-popup-border-color: #888;
    --yoyo-popup-text-color: #423b33;
    --yoyo-popup-btn-grey: #6c757d;
    --yoyo-popup-btn-grey-hover: #252729;
    --yoyo-popup-btn-blue: #3498db;
    --yoyo-popup-btn-blue-hover: #004c9e;
    --yoyo-popup-btn-red: #e74c3c;
    --yoyo-popup-btn-red-hover: #9c0000;
}

.yoyo-popup-modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: var(--yoyo-popup-bg-color);
    opacity: 0;
    transition: opacity 0.25s ease-out;
    will-change: opacity;
    font-family: Arial, sans-serif;
}

.yoyo-popup-modal.show {
    opacity: 1;
}

.yoyo-popup-content {
    background-color: var(--yoyo-popup-content-bg);
    margin: 15% auto;
    padding: 20px;
    border: 1px solid var(--yoyo-popup-border-color);
    width: 80%;
    max-width: 600px;
    border-radius: 5px;
    transform: translateZ(0);
    will-change: transform;
}

.yoyo-popup-header, .yoyo-popup-footer {
    padding: 10px;
    text-align: center;
}

.yoyo-popup-footer {
    display: flex;
    justify-content: center;
}

.yoyo-popup-body {
    padding: 20px 10px;
    text-align: center;
    display: grid;
    place-items: center;
}

.yoyo-popup-text {
    font-size: 1.5em;
    margin-bottom: 10px;
    color: var(--yoyo-popup-text-color);
}

.yoyo-popup-subtext {
    font-size: 1.2em;
}

.yoyo-popup-icon {
    width: 7rem;
    height: 7rem;
    margin-bottom: 10px;
    will-change: transform;
}

.yoyo-popup-modal.show .yoyo-popup-icon {
    animation: yoyoIconBounce 1s ease;
}

.yoyo-popup-btn {
    padding: 10px 20px;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.yoyo-popup-btn-grey {
    background-color: var(--yoyo-popup-btn-grey);
}

.yoyo-popup-btn-grey:hover {
    background-color: var(--yoyo-popup-btn-grey-hover);
}

.yoyo-popup-btn-blue {
    background-color: var(--yoyo-popup-btn-blue);
    margin-left: 50px;
}

.yoyo-popup-btn-blue:hover {
    background-color: var(--yoyo-popup-btn-blue-hover);
}

.yoyo-popup-btn-red {
    background-color: var(--yoyo-popup-btn-red);
    margin-left: 50px;
}

.yoyo-popup-btn-red:hover {
    background-color: var(--yoyo-popup-btn-red-hover);
}

@keyframes yoyoFadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
}

@keyframes yoyoShake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
}

@keyframes yoyoIconBounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-20px); }
    60% { transform: translateY(-10px); }
}

.yoyoFadeOutAnimation {
    animation: yoyoFadeOut 0.25s forwards;
}

.yoyoShakeAnimation {
    animation: yoyoShake 0.5s cubic-bezier(.36,.07,.19,.97) both;
}

.yoyo-popup-progress-bar {
    width: 100%;
    height: 2px;
    overflow: hidden;
}

.yoyo-popup-progress {
    height: 100%;
    width: 0;
    background-color: var(--yoyo-popup-btn-blue);
    transition: width 0.1s linear;
}
`;

addGlobalStyle(cssStyles);

const iconMap = {
    'warning': '<svg class="yoyo-popup-icon" fill="#f5b041" viewBox="0 0 20 20"><path d="M10 0C4.485 0 0 4.485 0 10s4.485 10 10 10 10-4.485 10-10S15.515 0 10 0zM11 15H9v-2h2v2zM11 11H9V5h2v6z"/></svg>',
    'danger': '<svg class="yoyo-popup-icon" fill="#e74c3c" viewBox="0 0 20 20"><path d="M10 0C4.485 0 0 4.485 0 10s4.485 10 10 10 10-4.485 10-10S15.515 0 10 0zM11 15H9v-2h2v2zM11 11H9V5h2v6z"/></svg>',
    'success': '<svg class="yoyo-popup-icon" fill="#27ae60" viewBox="0 0 20 20"><path d="M10 0C4.485 0 0 4.485 0 10s4.485 10 10 10 10-4.485 10-10S15.515 0 10 0zM8 15l-5-5 1.5-1.5L8 12.5l7.5-7.5L17 6l-9 9z"/></svg>',
    'question': '<svg class="yoyo-popup-icon" fill="grey" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',
    'info': '<svg class="yoyo-popup-icon" fill="#3498db" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>',
};

function showYoyoPopup(config) {
    const {
        title = '',
        text = 'Are you sure?',
        subtext = null,
        type = 'warning',
        isStatic = false,
        hasConfirmation = false,
        hasCancellation = false,
        confirmLabel = 'Confirm',
        cancelLabel = 'Cancel',
        closeLabel = 'Close',
        formId = '',
        confirmFunction = () => { },
        cancelFunction = () => { },
        closeFunction = () => { },
        timeOut = 0,
    } = config;

    const icon = iconMap[type] || iconMap['info'];

    const existingModal = document.getElementById(`yoyoAlertPopupModal`);
    if (existingModal) {
        existingModal.remove();
    }

    const modal = document.createElement('div');
    modal.id = `yoyoAlertPopupModal`;
    modal.className = 'yoyo-popup-modal';
    modal.innerHTML = `
        <div class="yoyo-popup-content">
            ${timeOut != 0 ? `<div class="yoyo-popup-progress-bar"><div class="yoyo-popup-progress" id="yoyo_popup_progress"></div></div>` : ''}
            <div class="yoyo-popup-header">
                ${title ? `<h2>${title}</h2>` : ''}
            </div>
            <div class="yoyo-popup-body">
                ${icon}
                <div class="yoyo-popup-text">${text}</div>
                ${subtext ? `<p class="yoyo-popup-subtext">${subtext}</p>` : ''}
            </div>
            <div class="yoyo-popup-footer">
                <button class="yoyo-popup-btn yoyo-popup-btn-grey" data-action="close">${closeLabel}</button>
                ${hasCancellation ? `<button class="yoyo-popup-btn yoyo-popup-btn-red" data-action="cancel">${cancelLabel}</button>` : ''}
                ${hasConfirmation ? `<button class="yoyo-popup-btn yoyo-popup-btn-blue" data-action="confirm">${confirmLabel}</button>` : ''}
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    function yoyoFadeOut() {
        modal.classList.add("yoyoFadeOutAnimation");
        setTimeout(() => modal.remove(), 250);
    }

    modal.addEventListener('click', (event) => {
        const target = event.target;
        if (target === modal && !isStatic) {
            yoyoFadeOut();
        } else if (target === modal && isStatic) {
            const popupContent = modal.querySelector('.yoyo-popup-content');
            popupContent.classList.remove('yoyoShakeAnimation');
            void popupContent.offsetWidth;
            popupContent.classList.add('yoyoShakeAnimation');
        } else if (target.dataset.action === 'close') {
            closeFunction();
            yoyoFadeOut();
        }
        else if (target.dataset.action === 'cancel') {
            cancelFunction();
            yoyoFadeOut();
        }
        else if (target.dataset.action === 'confirm') {
            if (formId) {
                document.getElementById(formId)?.submit();
            } else {
                confirmFunction();
            }

            yoyoFadeOut();
        }
    });

    requestAnimationFrame(() => {
        modal.style.display = 'block';
        requestAnimationFrame(() => {
            modal.classList.add("show");
        });
    });

    if (timeOut !== 0) {
        const yoyoProgressBar = document.getElementById(`yoyo_popup_progress`);
        let width = 0;
        const interval = 16; // around 60fps
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