import { ICON_ADDED } from "../../assets/icons.js";

/**
 * ВСТАВЬ СВОЙ BASE64 СЮДА
 * Пример: const VCARD_BASE64 = "UEsDBBQAAAAIA...";
 */
const VCARD_BASE64 = "QkVHSU46VkNBUkQKVkVSU0lPTjozLjAKRk46QWxpc2FEaXpheW4g0LAKVEVMOis5OTg5MTAwMTYyMTMKVVJMOmh0dHBzOi8vdC5tZS9BbGlzYURpemF5bgpOT1RFOtCQ0LvQuNGB0LDQlNC40LfQsNC50L0KUEhPVE87VFlQRT1KUEVHO0VOQ09ESU5HPWI6LzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3QkRBQ2djSGlNZUdTZ2pJU010S3lnd1BHUkJQRGMzUEh0WVhVbGtrWUNabG8rQWpJcWd0T2JEb0tyYXJZcU15UC9MMnU3MS8vLy9tOEgvLy8vNi8rYjkvL2ovMndCREFTc3RMVHcxUEhaQlFYYjRwWXlsK1BqNCtQajQrUGo0K1BqNCtQajQrUGo0K1BqNCtQajQrUGo0K1BqNCtQajQrUGo0K1BqNCtQajQrUGo0K1BqNCtQai93Z0FSQ0FESkFNa0RBUkVBQWhFQkF4RUIvOFFBR2dBQkFBSURBUUFBQUFBQUFBQUFBQUFBQUFRRkFRSUdBLy9FQUJnQkFRRUJBUUVBQUFBQUFBQUFBQUFBQUFBQkFnTUUvOW9BREFNQkFBSVFBeEFBQUFDNUFBQUFBQUFoUUFBd1pCVzZXTVpnQUFBRFVoNlJkdk0ySk9VM0QwQUJncWRwWk13d1pBQUFFWXFzNlNvMjh0R2pJYkNMUEM0NU4xR3BVYlNTd3dBQUFBMUtIc3Ira0c4UzhJZW1LdnVLazdQT3BHSFJjTDdBd1pOVFE5UUFBQ2g2eXQ2a2JSMG5HeXNQRFNoNm8rNXBRM2oxeTZiZzJVQUFBQUlnOUhPOTV0SHBFN0M4NDBEWFNpNlN1NnRzci9pcHVxZmhjODZBQUFBRWM1M3pDNldUaDdaWFhON3lnREJSOVdFdk9TRnBTOVhUY0x1QUFBQWVkY3AzemhXa3pEcE9Bb0FaWTBvTzB5UU5OZE9oNFdmZ0FBQUJFMDVyMFpTaTY1MjI1QUFBTks1cnVqMkM1NVczNUZBQUFDRnB6bm95bEhTK2V5NEFBQVJFMjVydkJjY3JjY2lnQUFCR3JtUFRsS090ODEzQUFBQU9hN1NmbDZTMlhJMEFBQUdweXZmUG5xK2tkWjU2QUFBQkQwNTN0Tm82TGpaVUFBQUFDaTZxenBObzYzejNJQUFJdWxWMGxmdGdrWmRSd29BQUFBSGhYTWQ1clYzeHRuaGs4aVBwRTJnYXpIMktFZEJ4V0dLQUFBQUFLN2NvZTdFQkNnRmJ4b0MwNTI4NUFBQUFBQUVsZDBVL1Y0VUFCYThrcUtQczBPcDg5OTRBQUFBQUFBOGFxZWl1M05ORUNSaExpczZCZWNiYVlBQUFBQUFBQVJyT2I3dEtDZ2owaTM1VzF3QUFBQUFBQUFSeS9vUjl6ZktWbE55a1plZWtuRms1S0FBQXdWdTFoaHVCbEcyOW8zQlg3Wmt4VVNvbW1LeEZsbTIzSW9BQUFWKzA3RFlFZXFEdFBXTHZrOTVSUmRaRjBSa3pXRDN6Yi9rQUFBQUFBd1VYWFB0TGI4MlZGWnFWblVyVTBOQ2ZpMy9JQUFBQUFBTkRjQUViVG11ejFaOE5DOUY1MDdOQUFBQUFBQUFBQ01VS1hxU1hQTnNvQUFBamtnQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQS8vOFFBTlJBQUFnSUJBZ1FEQmdVQ0J3QUFBQUFBQVFJREJBQUZFUkFUTURFU0lDRWlNMEJSWVhFeVFVSlNZaFFWSXpWRFVISnprZi9hQUFnQkFRQUJQd0Q0VWtBY1dzMmhxUVFRNXVmbDBtWlVVczdCUmt1cTFreHRiK1VPZjN1YjlpWU5iZjhBT0hFMWlCOGptU1pkNG5EK1VrQWJuTlV2ajNNR1VyeVdmby9EWWI3OUU1YjFkRTNTREpaNVp6dks1YnloR0tNd0hvdTIrSTdJd1pHS3RsWFYzN1Q1SElrcUIwWU1wNHVxdXV6QU1NMUxUUWc1MEdVdE5TRk4zQWQra3pLaWxtSUNnYms1ZjFFejdvbnBGeGlpZVp3a2E3bkcwcTJtTXJJeFZnUVIzQnhkdHg0dDl2ejJ5cUtSb1A4QXMvWGt3aURua2xpbkNyYmxxdnVtVnAwdFJCMDRrQWpZamc0WW9RamVGajJPVlVkSUZXVi9FL1ExVzd6bk1LY1ZVdXdWUnVTZGdNbzFCVmg0V2FrVnBkblhMbEdXcjlVd093UmsvSnR0eDl1S296STVIWkJ1Y3AybXF6QjhSMWtSWFE3cTNVMU96eUlQNXZ3Ukdkd2lBbGpsbUI2MHhSODBXRGR6TjVHVlhVcXdCQjdnNXFPbkdEZVdIMVRncXM3QlZCTEhzQmxHZ0lxcFIrOG1XNmoxWHpSclBlQitwcWsvT3VOOGs0VkxUMVhEakw5NDJuOENaVGhFRlpJL0tSdU0xS2h5ZDVvY28zb0lIMk1LcC9QRlpYVU1wQlUrb0l5L2VnZ0JRZ08rYy9hY1RJaXB0a2JpUkZkZXpBSHBUUHlvWGY4QWFDY0pKSko5U2VPbXc4MjhubklCQkJ6VXFKZ2Z4cDd2S041b0lKVStTN3BqTVdZc3hKSjlTVHcwaC9IUjZXcG5haE41TkRUWkhmb1NScktqSTQzVmhseXNhazVUam9YYVhwYXQvbDcrVFRVNVZHTG8zNnd0UWNkQi93QmZwWDA4ZEdieVJyNEVWZmtBT2xmUUpmbHlDaldOQnZiKzc1bzZCRW02VEFNcFU5aU5qa3FHR1o0ejNVa2NJUnZQSDlXSFN1MzBxL1Y4ZDJsZG5jN3N4d1N1c1RSQSt3eEJPYWJGeWFTZFBXb05weE53UnZBNnQ4aURnSUlCSG5udndRWlBxMDcraWV4aEpKM0ozSjRVb0Rac29uVXR3TFpnTVp4MGFKMlIvUmxQRFR0U1RraUtmRmRYRzZrTmhJQTNPTlpnVHZNbVBxdFZNZld2MlJaTmNubi9BQnllWFNxdkloL20vVjFPanovYlQzdUViSFk4U1NmTEpHMFRsSEd6RGpwbEF1UlBOMTcrbWlmZDR2UjhzdE43RWN5N0ZQTlEwd2tpV2JMK25jLzIwOUh5U014dVViaFRjUzFJbitBbnF4V1UybFRKOUhsVDNPU3d5UW5hUkdUeVU3YjFYelZMNWQrVEZ4MFI5NnJwOEZkaTUxU1ZNV0tSMFoxUWxWODBjRXMzdTBaczBxblBBNWQvZzdLdEJQTkN2QkkzYzdJak1jVFNyVDRtaUwrdVhPUlFxOXdtUHE5Wk1wV1JiaDhmUkpDZ2tuWURKdFZSTFNKM1RFa1NWZkVqQmw4bDZjVnFydmtVaXlvcm9kMVljYldtSlpuTXBmQlJwVnZWL3dEMThmVTZrUG9tUHJiL0FLRXg3bHlmOWIvWk0vcEpPOHBTTC9tMmVDc25lVjVmb2d6U0owTHZFa1hnNlV1bXhQYVI4VlFxaFZBQUhZRGpadVJWUnUrWGJqMjN5anFMMWY1cGtGbUt5dThYSFVham00NzV5b0UvSE9XLzYxd1R3TCtDQWZkenZnbnRUK3doZjdKbjlFL2VaMGl6d1ZFN3U4dVU3YUphUUpBaWRabERLVllBZzVxVkFRZjRzT2FicHdLQ2VmQU51T3Ixak40SHpsVlUvSE9YK2tXYytGUGRWays3NDl5ZC9ReTVOTzAzZzNBOWxkc1JHYzdJcFk1UzAyY3pJN29VUWRlYU1UUXZHM1poZ0FBMkhrdnc4K282WnMzaThPeDhYeXcxSndoY3hFSU9Pa2phZ253MnczM3hsREtWWWJnNVBvNzk0TWcwZCs4K0tvVlFxZ0FBYkFkRkp5YlR3bU1oVkFQai93QjAvOFFBSHhFQUF3QURBUUVCQVFFQkFBQUFBQUFBQUFFQ0VCRXdJQkloUUFOUS85b0FDQUVDQVFFL0FPMi9URXU2a1VId2ZBNDl5aHJsdkNnVW12VGdlVXhVT2pYRklVWmJQdk8zc1dIR2RkSVdkall4TVZHczdLUS96bXlGc1NHU1c4NndyRU1iSmV5NTZSaHJZcDBVL0tKb3BZVWlrYUZ4bnhiOTdKZXh6bXVVK0xmR0hteGNZOFZ4bDVzWEdlMHNiL1N1Y2RFaElwRDV3L0cvU2tVQ0VVK2llWEkxbFNLQlJqZWFmV0s2VlJ2dE4rNm9tczEvQW1LemZpcEpuTmZ4Smk5MCtlL2FaSnBINGZaOW0yeGY1N0doY2ZrYXloWjBLdEcyejVaOENnMmo5TFhMNkc4NklSYytKZmo2eFU4OVoyVFJWK0plTkdqNXhWL3lJVkgzalJYODJ4Q3NxLzhBdmYvRUFCUVJBUUFBQUFBQUFBQUFBQUFBQUFBQUFKRC8yZ0FJQVFNQkFUOEFLVC8vMlE9PQpFTkQ6VkNBUkQ="; 

// Формируем Data URI напрямую
const VCF_DATA_URI = `data:text/vcard;charset=utf-8;base64,${VCARD_BASE64}`;

/**
 * Функция скачивания через Data URI
 */
function downloadVcf() {
    const tg = window.Telegram?.WebApp;

    // 1. Попытка через Telegram SDK (если поддерживается открытие Data URI)
    if (tg && typeof tg.openLink === "function") {
        tg.openLink(VCF_DATA_URI);
        return;
    }

    // 2. Фолбэк для браузеров и если tg.openLink не справился
    const a = document.createElement("a");
    a.href = VCF_DATA_URI;
    a.download = "AlisaDizayn.vcf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

/**
 * Визуальное изменение кнопки в состояние "Добавлено"
 */
function setBtnAdded(btn) {
    if (!btn) return;
    btn.classList.add("save-contact-btn--added");
    btn.innerHTML = ICON_ADDED;
    // Отключаем клики, чтобы не спамить скачиванием
    btn.style.pointerEvents = "none"; 
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
            // Смартфон: сразу качаем и меняем кнопку
            downloadVcf();
            setBtnAdded(saveContactBtn);
        } else {
            // ПК: открываем модалку
            qrModal?.classList.add("info-modal--active");
        }
    });

    // Клик по QR-коду (для ПК)
    qrWrap?.addEventListener("click", () => {
        downloadVcf();
        setBtnAdded(saveContactBtn); // Кнопка становится серой
        qrModal?.classList.remove("info-modal--active");
    });

    // Закрытие модалки
    closeModalBtn?.addEventListener("click", () =>
        qrModal?.classList.remove("info-modal--active")
    );

    window.addEventListener("click", (e) => {
        if (e.target === qrModal) {
            qrModal.classList.remove("info-modal--active");
        }
    });
}