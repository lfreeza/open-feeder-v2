/* eslint-disable camelcase */
import request from '@/utils/request'

export function deleteAktivitasMahasiswa (token, id_aktivitas) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'DeleteAktivitasMahasiswa',
      token,
      'key': {
        id_aktivitas
      }
    }
  })
}
