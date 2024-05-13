const horsesNum = document.querySelector(".four-container").childElementCount;
if (horsesNum > 0) {
  for (let i = 0; i < horsesNum; i++) {
    const mother = document.querySelectorAll(".frame .mother")[i];
    const father = document.querySelectorAll(".frame .father")[i];
    const horseDeatails = document.querySelectorAll(".frame h2")[i];
    const motherImg = document.querySelectorAll(".momImg")[i];
    const fatherImg = document.querySelectorAll(".fathImg")[i];
    const h1 = document.querySelectorAll(".horse-details h1")[i];
    const both = mother.innerText + father.innerText;
    getScreenWidth(horseDeatails, motherImg, fatherImg, h1, both);
    window.addEventListener("resize", () => {
      getScreenWidth(horseDeatails, motherImg, fatherImg, h1, both);
    });
  }

  function getScreenWidth(hd, m, f, h, horseNum) {
    if (innerWidth >= 1440) {
      if (horseNum.length > 26) {
        changePos("3vw", "1vw");
      }
    } else if (innerWidth < 1440 && innerWidth >= 1024) {
      if (horseNum.length > 16) {
        changePos("3vw", "1vw");
      }
    } else if (innerWidth < 1024 && innerWidth >= 768) {
      if (horseNum.length > 22) {
        changePos("5vw", "2vw");
      }
    } else if (innerWidth < 768) {
      if (horseNum.length > 17) {
        changePos("10vw", "4vw");
        document.querySelector(".horse-details-column").style.rowGap = "1vw";
      }
    }
    function changePos(mt, mb) {
      hd.classList.add("horse-details-column");
      m.style.top = 0;
      f.style.top = 0;
      h.style.marginTop = mt;
      h.style.marginBottom = mb;
    }
  }
}
