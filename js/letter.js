const modalBackdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("closeModalBtn");
const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const letterText = document.getElementById("letterText");

// ✅ ข้อความจดหมาย
const MESSAGE = `
ขอบคุณที่เกิดมาเป็นแฟนพี่นะ หมูอ้วน💖
สุขสันต์วันครบรอบ ขอให้เราจับมือผ่านทุกๆเรื่องราวไปด้วยกันมีความสุขไปด้วยกันอยู่ข้างๆกันจนมีเบบี๋ที่น่ารักแบบเค้าให้หมูอ้วนเลี้ยงนะ เค้ารักกายมากๆนะ
`;

// 🔓 เปิด modal
function openModal(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}

// ❌ ปิด modal
function closeModal(){
  modalBackdrop.style.display = "none";
}

// ===== EVENTS =====
if(openLetter){
  openLetter.addEventListener("click", openModal);
}

if(readBtn){
  readBtn.addEventListener("click", openModal);
}

if(closeBtn){
  closeBtn.addEventListener("click", closeModal);
}

// กดพื้นหลังเพื่อปิด
modalBackdrop.addEventListener("click", (e)=>{
  if(e.target === modalBackdrop){
    closeModal();
  }
});
