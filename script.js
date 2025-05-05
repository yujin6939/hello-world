const greetings = [
    "안녕하세요",     // Korean
    "Hello",          // English
    "こんにちは",     // Japanese
    "你好",           // Chinese
    "Hola",           // Spanish
    "Bonjour",        // French
    "Hallo",          // German
    "Ciao",           // Italian
    "Olá",            // Portuguese
    "Привет",         // Russian
    "مرحبا",          // Arabic
    "नमस्ते",          // Hindi
  ];
  
  const greetingEl = document.getElementById("greeting");
  let index = 0;
  
  function showNextGreeting() {
    greetingEl.style.opacity = 0;
  
    setTimeout(() => {
      greetingEl.textContent = greetings[index];
      greetingEl.style.opacity = 1;
      index = (index + 1) % greetings.length;
    }, 1000); // 페이드 아웃 시간과 일치
  
    setTimeout(showNextGreeting, 4000); // 한 인사당 4초 간격
  }
  
  showNextGreeting();
  