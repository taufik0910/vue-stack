import Api from '@/services/Api'

export default{register (credentials) {
  return Api().post('register', credentials)
}

}

// AuthenticationService .register({ email: 'taufik@cradle.com', password: '123456'

// })
