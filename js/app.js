let bttn = document.querySelector("#encriptar")
let encriptador = document.querySelector('#encriptador')
let desencriptador = document.querySelector("#desencriptar")
let output = document.querySelector('#mensaje')
let copy = document.querySelector("#copiar")
let form = document.querySelector('form')

copy.style.display = 'none'

const VOCALES = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
}
encriptador.addEventListener('input', (e) => {
    inputTexto.style.width = inputTexto.value.length * 8 + 'px'
})

bttn.addEventListener('click', (e) => {
    e.preventDefault()
    const mensaje = encriptador.value

    if (!mensaje) {
        return (
            Swal.fire({
                title: 'El campo de texto está vacío',
                icon: 'error',
                confirmButtonText: 'Ok'
            }))
    }

    let salida = ""
    for (let i = 0; i < mensaje.length; i += 1) {
        const VOCALES_DEFAULT = mensaje[i]
        salida += (VOCALES[mensaje[i]] || VOCALES_DEFAULT)
    }
    output.textContent = salida
    copy.style.display = 'block'

    form.reset()
})

copy.addEventListener('click', (e) => {
    e.preventDefault()

    const msg = output.textContent
    navigator.clipboard.writeText(msg)
        .then(() => {
            return (Swal.fire({
                title: 'Texto copiado',
                text: `Texto: ${msg}`,
                icon: 'success',
                confirmButtonText: 'Ok'
            }))
        })
        .catch((err) => {
            return err
        })
})

desencriptador.addEventListener('click', (e) => {
    e.preventDefault()

    let mensaje = encriptador.value
    if (!mensaje) {
        return (
            Swal.fire({
                title: 'El campo de texto está vacío',
                icon: 'error',
                confirmButtonText: 'Ok'
            }))
    }


    for (let test in VOCALES) {
        mensaje = mensaje.replace(new RegExp(VOCALES[test], 'g'), test)
    }
    output.textContent = mensaje
    copy.style.display = 'block'
    form.reset()
})
