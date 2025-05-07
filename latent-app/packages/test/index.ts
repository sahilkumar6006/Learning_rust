import { assert, describe, expect, it } from 'vitest'
import axios from 'axios'

const BACKEND_URL = 'http://localhost:3000/api/v1'

describe('signup', async() => {
    const USER_NAME  = 'sahil kuamr'
    const PASSWORD  = 'sahil123'

   it('Double signup work', async() => {
    const response1 = axios.post(`${BACKEND_URL}/signup`, {
        "username": USER_NAME,
        "password": PASSWORD
    })
   })
})
