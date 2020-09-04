import axios from '../util/axios-init'

interface User {
  name: string;
  id: number;
}

class UserService {
  async getInfo () {
    const res = await axios.get('v2/goods-bag/room3931599212458689', {
      headers: {
        // eslint-disable-next-line quote-props
        'live_appid': 1078978582,
        // eslint-disable-next-line quote-props
        'session_id': 'RG8efHvYm7soVOeZhQB+jYroC+wnDtPkTBS6VHmwM/CJ1+wc6EG7n/bqYvmPbOoZOkJjtcQTd7XhYoYSbkBoLrdmwXiOIvgl3J8e6ue9W+pJJwxLKHrwyHY86ywiIKkk2ZyTCQ=='
      }
    })
    return res
  }
}

export default new UserService()
