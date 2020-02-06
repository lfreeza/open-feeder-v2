/* eslint-disable camelcase */
import request from '@/utils/request'

export function insertAktivitasMahasiswa (token, record) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'InsertAktivitasMahasiswa',
      token,
      record
    }
  })
}
