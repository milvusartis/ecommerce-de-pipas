const credenciais = 'credenciais'

const isLogged = () => !!sessionStorage.getItem(credenciais)


export { credenciais, isLogged}