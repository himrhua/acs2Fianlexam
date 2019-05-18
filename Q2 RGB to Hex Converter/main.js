(function () {
  // new variable

  const r_value = document.getElementById('r_value')
  const g_value = document.getElementById('g_value')
  const b_value = document.getElementById('b_value')
  const background = document.getElementById('background')
  const hex_value = document.getElementById('hex_value')
  change(r_value.defaultValue, g_value.defaultValue, b_value.defaultValue)

  btn.addEventListener('click', event => {
    console.log(isNaN(r_value.value))
    if (r_value.value > 255 || r_value.value < 0 || isNaN(r_value.value)) {
      alert("輸入錯誤r值！！")
    } else if (g_value.value > 255 || g_value.value < 0 || isNaN(g_value.value)) {
      alert("輸入錯誤g值！！")
    }
    else if (b_value.value > 255 || b_value.value < 0 || isNaN(b_value.value)) {
      alert("輸入錯誤b值！！")
    }
    else {
      change(r_value.value, g_value.value, b_value.value)
    }
  })

  function change(r, g, b) {
    console.log(r, g, b)
    background.setAttribute('style', `background-color: rgb(${r}, ${g}, ${b})`)
    document.getElementById('r').setAttribute('style', `background-color: rgb(${r}, 0, 0)`)
    document.getElementById('g').setAttribute('style', `background-color: rgb(0, ${g}, 0)`)
    document.getElementById('b').setAttribute('style', `background-color: rgb(0,0, ${b})`)
    var HEX = rgbToHex(r, g, b)
    console.log(HEX)
    hex_value.setAttribute("value", HEX)
  }
  function componentToHex(c) {//參考自https://stackoverflow.com/questions/15689845/rgb-to-hex-conversion
    var hex = Number(c).toString(16);
    return hex.length == 1 ? "0" + hex : hex
  }
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b)
  }
})()