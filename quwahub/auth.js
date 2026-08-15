/* ============================================================
   قوة · نظام الدخول
   ------------------------------------------------------------
   كلمة السر الحالية: quwa2026

   لتغيير كلمة السر:
   1) افتح هذا الموقع: https://emn178.github.io/online-tools/sha256.html
   2) اكتب كلمة السر الجديدة في الخانة
   3) انسخ النتيجة والصقها مكان القيمة في PASS_HASH تحت
   ============================================================ */
const PASS_HASH = "0cddea939ef2cc37f7c865e1a3dca22ec15bcac22fb1b5fe7ef5214697bd5fab";

(function () {
  // إخفاء الصفحة لين ما نتحقق
  document.documentElement.style.visibility = "hidden";

  async function sha256(text) {
    const data = new TextEncoder().encode(text);
    const buf = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
  }

  function unlock() {
    const ov = document.getElementById("quwa-lock");
    if (ov) ov.remove();
    document.documentElement.style.visibility = "visible";
    document.body.style.overflow = "";
  }

  function showLock() {
    document.documentElement.style.visibility = "visible";
    document.body.style.overflow = "hidden";

    const ov = document.createElement("div");
    ov.id = "quwa-lock";
    ov.innerHTML = `
      <style>
        #quwa-lock {
          position: fixed; inset: 0; z-index: 99999;
          background: #F7F4EE;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Cairo', sans-serif; direction: rtl;
        }
        #quwa-lock .box {
          background: #FFFFFF; border: 1px solid #DDD6C8;
          border-top: 5px solid #991B1B;
          padding: 44px 40px; width: 92%; max-width: 400px;
          text-align: center;
        }
        #quwa-lock .logo {
          font-family: 'Cairo', sans-serif; font-size: 44px; font-weight: 900;
          color: #1A1A1A; line-height: 1;
        }
        #quwa-lock .logo span { color: #991B1B; }
        #quwa-lock .sub {
          font-family: 'JetBrains Mono', monospace; font-size: 9px;
          letter-spacing: 3px; color: #8a8378; margin-top: 8px; direction: ltr;
        }
        #quwa-lock .msg { font-size: 14px; color: #554D44; margin-top: 22px; }
        #quwa-lock input {
          width: 100%; margin-top: 16px; padding: 13px 16px;
          border: 1px solid #DDD6C8; background: #F7F4EE;
          font-family: 'Cairo', sans-serif; font-size: 15px; text-align: center;
          outline: none; direction: ltr;
        }
        #quwa-lock input:focus { border-color: #991B1B; }
        #quwa-lock button {
          width: 100%; margin-top: 12px; padding: 13px;
          background: #991B1B; color: #FFFFFF; border: none;
          font-family: 'Cairo', sans-serif; font-size: 15px; font-weight: 700;
          cursor: pointer; transition: background .15s;
        }
        #quwa-lock button:hover { background: #C02A2A; }
        #quwa-lock .err {
          font-size: 12px; color: #991B1B; margin-top: 10px;
          min-height: 18px; font-weight: 700;
        }
      </style>
      <div class="box">
        <div class="logo">قــوة<span>.</span></div>
        <div class="sub">PRODUCTION HUB · PRIVATE</div>
        <div class="msg">هذي منطقة خاصة بفريق العمل — أدخل كلمة السر:</div>
        <input type="password" id="quwa-pass" placeholder="••••••••" autocomplete="off">
        <button id="quwa-enter">دخول</button>
        <div class="err" id="quwa-err"></div>
      </div>`;
    document.body.appendChild(ov);

    const input = document.getElementById("quwa-pass");
    const btn = document.getElementById("quwa-enter");
    const err = document.getElementById("quwa-err");

    async function attempt() {
      const h = await sha256(input.value.trim());
      if (h === PASS_HASH) {
        localStorage.setItem("quwa_auth", PASS_HASH);
        unlock();
      } else {
        err.textContent = "كلمة السر غير صحيحة، جرّب مرة ثانية";
        input.value = "";
        input.focus();
      }
    }
    btn.addEventListener("click", attempt);
    input.addEventListener("keydown", e => { if (e.key === "Enter") attempt(); });
    setTimeout(() => input.focus(), 100);
  }

  function init() {
    if (localStorage.getItem("quwa_auth") === PASS_HASH) {
      document.documentElement.style.visibility = "visible";
    } else {
      showLock();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
