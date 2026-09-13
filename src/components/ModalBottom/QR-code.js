import { ICON_ADDED } from "../../assets/icons.js";

// Путь к готовому .vcf файлу в папке public
const VCF_PATH = "/contacts/AlisaDizayn.vcf";

// Функция для скачивания готового VCF файла
function downloadVcf() {
    const a = document.createElement("a");
    a.href = VCF_PATH;
    a.download = "AlisaDizayn.vcf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Функция для изменения состояния кнопки
function setBtnAdded(btn) {
    if (!btn) return;
    btn.classList.add("save-contact-btn--added");
    btn.innerHTML = ICON_ADDED;
}

export function initContacts() {
    const saveContactBtn = document.getElementById("saveContactBtn");
    const qrModal = document.getElementById("qrModal");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const qrWrap = document.querySelector(".info-modal__qr-wrap"); // Обертка QR для клика

    if (!saveContactBtn) return;

    saveContactBtn.addEventListener("click", () => {
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

        if (isMobile) {
            // На мобилках: сразу качаем и меняем кнопку
            downloadVcf();
            setBtnAdded(saveContactBtn);
        } else {
            // На ПК: показываем модалку
            qrModal?.classList.add("info-modal--active");
        }
    });

    // Клик по самому QR-коду в модалке (для ПК)
    qrWrap?.addEventListener("click", () => {
        downloadVcf();
        setBtnAdded(saveContactBtn); // Кнопка под модалкой тоже станет серой
        qrModal?.classList.remove("info-modal--active"); // Закрываем после скачивания
    });

    closeModalBtn?.addEventListener("click", () =>
        qrModal.classList.remove("info-modal--active"),
    );

    window.addEventListener("click", (e) => {
        if (e.target === qrModal) qrModal.classList.remove("info-modal--active");
    });
}
