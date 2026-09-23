import { ICON_ADDED } from "../../assets/icons.js";

/**
 * Прямой путь к файлу в папке public. 
 * При сборке Vite положит его в корень, поэтому './' — самый надежный вариант.
 */
const VCF_PATH = "./AlisaDizayn.vcf";

/**
 * Функция принудительного скачивания файла через создание временной ссылки.
 * Это самый надежный способ для iOS (WKWebView) и Android.
 */
function triggerDownload() {
    const link = document.createElement("a");
    link.href = VCF_PATH;
    link.download = "AlisaDizayn.vcf"; // Принудительно задаем имя файла
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

/**
 * Визуальное подтверждение: меняем цвет кнопки и иконку
 */
function setBtnAdded(btn) {
    if (!btn) return;
    btn.classList.add("save-contact-btn--added");
    btn.innerHTML = ICON_ADDED;
}

/**
 * Инициализация логики
 */
// ... (весь верх кода оставляем без изменений)

export function initContacts() {
    const saveContactBtn = document.getElementById("saveContactBtn");
    const qrModal = document.getElementById("qrModal");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const qrWrap = document.querySelector(".info-modal__qr-wrap");

    if (!saveContactBtn) return;

    // 1. Обработка клика по главной кнопке
    // Добавляем параметр (e), чтобы получить доступ к событию
    saveContactBtn.addEventListener("click", (e) => {
        
        // ВАЖНО: Останавливаем стандартное поведение ссылки (авто-скачивание),
        // чтобы JavaScript сам решил, скачивать файл сразу или открыть модалку.
        e.preventDefault(); 

        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

        if (isMobile) {
            // На мобильных: JS запускает скачивание и красит кнопку
            triggerDownload();
            setBtnAdded(saveContactBtn);
        } else {
            // На ПК: JS только открывает модалку
            qrModal?.classList.add("info-modal--active");
        }
    });

    // 2. Обработка клика по QR-коду (внутри модалки для ПК)
    qrWrap?.addEventListener("click", () => {
        triggerDownload();      
        setBtnAdded(saveContactBtn); 
        qrModal?.classList.remove("info-modal--active"); 
    });

    // ... (остальной код без изменений)
}


    // 3. Закрытие модалки по кнопке "крестик"
    closeModalBtn?.addEventListener("click", () => {
        qrModal?.classList.remove("info-modal--active");
    });

    // 4. Закрытие модалки при клике на серый фон (вне контента)
    window.addEventListener("click", (e) => {
        if (e.target === qrModal) {
            qrModal.classList.remove("info-modal--active");
        }
    });
}

