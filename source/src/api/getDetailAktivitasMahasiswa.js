/* eslint-disable camelcase */
import request from '@/utils/request'

export function getDetailAktivitasMahasiswa (token, id_aktivitas) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'GetListAktivitasMahasiswa',
      token,
      'filter': `id_aktivitas = '${id_aktivitas}'`,
      'limit': 1,
      'offset': 0
    }
  })
}
