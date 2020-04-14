const token = 'token'

const isLogged = () => !!sessionStorage.getItem(token)


export { token, isLogged}