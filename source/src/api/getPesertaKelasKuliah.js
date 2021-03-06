/* eslint-disable camelcase */
import request from '@/utils/request'

export function getPesertaKelasKuliah (token, limit, offset, filter) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'GetPesertaKelasKuliah',
      token,
      filter,
      limit,
      offset
    }
  })
}
