(() => {
  window.addEventListener("load", function () {
    const $btn = document.getElementById("form-button");
    const $email = document.getElementById("email");
    const $password = document.getElementById("password");

    if (!$btn || !$email || !$password) return;

    if ("localStorage" in window && window.localStorage !== null) {
      const savedEmail = localStorage.getItem("savedEmail");
      const savedPass = localStorage.getItem("savedPass");

      if (savedEmail && savedPass) {
        $email.value = savedEmail;
        $password.value = savedPass;
      }

      $btn.addEventListener("click", function () {
        localStorage.setItem("savedEmail", $email.value);
        localStorage.setItem("savedPass", $password.value);
      });
    } else {
      console.log("ローカルストレージは使用できませんでした");
    }
  });
})();
