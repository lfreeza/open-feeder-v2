/* eslint-disable camelcase */
import request from '@/utils/request'

export function getDetailMataKuliah (token, id_matkul) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'GetDetailMataKuliah',
      token,
      'filter': `id_matkul = '${id_matkul}'`,
      'limit': 1,
      'offset': 0
    }
  })
}
