let start;
const styles = ["s1", "s2", "s3"];

const step = (timestamp, i = 1) => {
  if (start === undefined) {
    start = timestamp;
  }

  const elapsed = timestamp - start;

  // set the timer for 1000 ms (1.0s)
  if (elapsed > 1000) {
    // change font style
    const l4Obj = document.getElementById("l4");
    l4Obj.classList = `l4 ${styles[i - 1]}`;

    // restart the start time
    start = undefined;

    window.requestAnimationFrame((time) => {
      if (i % styles.length === 0) {
        step(time, 1);
      } else {
        step(time, i + 1);
      }
    });
  } else {
    // do not change font style. only increment time
    window.requestAnimationFrame((time) => {
      step(time, i);
    });
  }
};

const init = () => {
  const mainObj = document.getElementById("sample");

  const l1 = document.createElement("div");
  const l2 = document.createElement("div");
  const l3 = document.createElement("div");
  const l4 = document.createElement("div");

  l1.innerHTML = "H";
  l1.setAttribute("class", "l1");
  l2.innerHTML = "ello";
  l2.setAttribute("class", "l2");
  l3.innerHTML = "";
  l3.setAttribute("class", "l3");
  l4.innerHTML = "world";
  l4.setAttribute("class", "l4");
  l4.setAttribute("id", "l4");

  mainObj.appendChild(l1);
  mainObj.appendChild(l2);
  mainObj.appendChild(l3);
  mainObj.appendChild(l4);

  window.requestAnimationFrame(step);
};

window.addEventListener("load", init);
