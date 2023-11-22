const exitPopup = document.querySelector('[exit-popup="exit-intent"]');
const seconds = parseInt(exitPopup.getAttribute('seconds')) * 1000;
const idleTimeOut = parseInt(exitPopup.getAttribute('idle-time')) * 2;

const CookieService = {
    setCookie(name, value, seconds) {
        const date = new Date();
        date.setTime(date.getTime() + (seconds));
        const expires = seconds ? '; expires=' + date.toUTCString() : '';
        document.cookie = name + '=' + (value || '')  + expires + '; path=/';
    },

    getCookie(name) {
        const cookieValue = document.cookie
            .split('; ')
            .find(row => row.startsWith(name))
            ?.split('=')[1];
        return cookieValue || null;
    }
}; 
  const mouseEvent = (e) => {
    const shouldShowExitIntent =
      !e.toElement && !e.relatedTarget && e.clientY < 10;
  
    if (shouldShowExitIntent && !CookieService.getCookie("exitIntentShown")) {
      //document.removeEventListener("mouseout", mouseEvent);
      exitPopup.style.display = "flex";
      CookieService.setCookie("exitIntentShown", true, seconds);
    }
  }; 
  
 document.addEventListener("mouseout", mouseEvent);
 
  let idleTime = 0;
  const resetIdleTime = function () {
    idleTime = 0;
  };
  
  const incrementIdleTime = function () {
    idleTime += 1000; // assuming 1 second increment
    if (idleTime >= idleTimeOut && !CookieService.getCookie("exitIntentShown")) {
      // Perform some action when idle time exceeds the threshold
      document.removeEventListener("touchend", incrementIdleTime);
      exitPopup.style.display = "flex";
      CookieService.setCookie("exitIntentShown", true, seconds);
    }
    setTimeout(incrementIdleTime, 1000);
  };
  
  // Reset idle time on touch start
  document.addEventListener("touchstart", resetIdleTime);
  
  // Increment idle time on touch end
  document.addEventListener("touchend", incrementIdleTime);
