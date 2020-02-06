/* eslint-disable camelcase */
import request from '@/utils/request'

export function deleteAnggotaAktivitasMahasiswa (token, id_anggota) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'DeleteAnggotaAktivitasMahasiswa',
      token,
      'key': {
        id_anggota
      }
    }
  })
}
