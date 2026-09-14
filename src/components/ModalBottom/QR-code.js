import { ICON_ADDED } from "../../assets/icons.js";

// Полный URL к файлу контакта (Telegram WebApp требует абсолютный URI для openLink)
        const VCF_URL = new URL("https://AlisaDizayn.github.io/AlisaDizayn/public/AlisaDizayn.vcf", window.location.origin).href;

// Функция скачивания с поддержкой Telegram SDK
function downloadVcf() {
    const tg = window.Telegram?.WebApp;

    // 1. Если запуск идет внутри Telegram Mini App
    if (tg && typeof tg.openLink === "function") {
        tg.openLink(VCF_URL);
        return;
    }

    // 2. Фолбэк для обычных мобильных/ПК браузеров
    const a = document.createElement("a");
    a.href = VCF_URL;
    a.download = "AlisaDizayn.vcf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Изменение стиля и иконки кнопки
function setBtnAdded(btn) {
    if (!btn) return;
    btn.classList.add("save-contact-btn--added");
    btn.innerHTML = ICON_ADDED;
}

export function initContacts() {
    const saveContactBtn = document.getElementById("saveContactBtn");
    const qrModal = document.getElementById("qrModal");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const qrWrap = document.querySelector(".info-modal__qr-wrap");

    if (!saveContactBtn) return;

    saveContactBtn.addEventListener("click", () => {
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

        if (isMobile) {
            // На смартфонах: запуск скачивания/открытия файла через Telegram SDK и сброс кнопки
            downloadVcf();
            setBtnAdded(saveContactBtn);
        } else {
            // На ПК: открытие модального окна с QR-кодом
            qrModal?.classList.add("info-modal--active");
        }
    });

    // Клик по самому QR-коду внутри модалки (для ПК)
    qrWrap?.addEventListener("click", () => {
        downloadVcf();
        setBtnAdded(saveContactBtn);
        qrModal?.classList.remove("info-modal--active");
    });

    closeModalBtn?.addEventListener("click", () =>
        qrModal?.classList.remove("info-modal--active")
    );

    window.addEventListener("click", (e) => {
        if (e.target === qrModal) {
            qrModal.classList.remove("info-modal--active");
        }
    });
}