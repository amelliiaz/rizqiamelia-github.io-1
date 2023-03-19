// phone
const phoneRegex = document.getElementById('phone-regex')
  const myPhone = document.getElementById('my-phone')
  const checkPhoneNumber = (value) => {
    const regex = /^0[0-9]{9,11}$/
    const isPhoneNumber = regex.test(value)
    if (isPhoneNumber){
      return true
    }else{
      return false
    }
  }
  phoneRegex.addEventListener('keyup', (e)=> {
    const value = e.target.value
    const isPhoneNumber = checkPhoneNumber(value)
    if (value.length <= 12) {
      if (isPhoneNumber){
        myPhone.innerHTML = 'berhasil'
      }else{
        myPhone.innerHTML = 'gagal'
      }
    }else{
      myPhone.innerHTML = 'melebihi'
    }
  })

  //nim
  const nimRegex = document.getElementById('nim-regex')
  const myNim = document.getElementById('my-nim')
  const checkNim = (value) => {
    const regex = /[0-9]{9,9}$/
    const isNim = regex.test(value)
    if (isNim){
      return true
    }else{
      return false
    }
  }
  nimRegex.addEventListener('keyup', (r)=> {
    const value = r.target.value
    const isNim = checkNim(value)
    if (value.length <= 9) {
      if (isNim){
        myNim.innerHTML = 'berhasil'
      }else{
        myNim.innerHTML = 'menggunakan angka, terdiri dari 9 angka'
      }
    }else{
      myNim.innerHTML = 'melebihi'
    }
  })
  
  //usename
  const usernameRegex = document.getElementById('username-regex')
  const myUsername = document.getElementById('my-username')
  const checkUsername = (value) => {
    const regex = /[a-z]{6,20}$/
    const isUsername = regex.test(value)
    if (isUsername){
      return true
    }else{
      return false
    }
  }
  usernameRegex.addEventListener('keyup', (r)=> {
    const value = r.target.value
    const isUsername = checkUsername(value)
    if (value.length <= 20) {
      if (isUsername){
        myUsername.innerHTML = 'berhasil'
      }else{
        myUsername.innerHTML = 'menggunakan huruf, terdiri dari 6-20 huruf'
      }
    }else{
      myUsername.innerHTML = 'melebihi'
    }
  })

  //password
const passwordField = document.querySelector("[name=password]");

passwordField.addEventListener("keyup", (event) => {
    if(!passwordField.validity.valid){
        console.error("passowrd invalid");
        document.getElementById("invalid-passowrd").style.display = "block";
    } else {
         console.info("passowrd valid");
        document.getElementById("invalid-passowrd").style.display = "none";
    }
});

//nik
const nikRegex = document.getElementById('nik-regex')
  const myNik = document.getElementById('my-nik')
  const checkNik = (value) => {
    const regex = /[0-9]{16,16}$/
    const isNik = regex.test(value)
    if (isNik){
      return true
    }else{
      return false
    }
  }
  nikRegex.addEventListener('keyup', (r)=> {
    const value = r.target.value
    const isNik = checkNik(value)
    if (value.length <= 16) {
      if (isNik){
        myNik.innerHTML = 'berhasil'
      }else{
        myNik.innerHTML = 'gagal, terdiri dari 16 angka tanpa huruf'
      }
    }else{
      myNik.innerHTML = 'melebihi'
    }
  })




