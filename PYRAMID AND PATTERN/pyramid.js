var mypyramid=(n)=> {
        const midpoint = Math.floor((2 * n - 1) / 2)
        for (let row = 0; row < n; row++) {
          let level = "";
          for (let column = 0; column < 2 * n - 1; column++) {
            if (midpoint - row <= column && midpoint + row >= column) {
              level += "*";
            } else {
              level += " ";
            }
          }
         document.write(level);
         document.write("<br>")
         document.body.style.textAlign="center";
        }
    }
        mypyramid(30)