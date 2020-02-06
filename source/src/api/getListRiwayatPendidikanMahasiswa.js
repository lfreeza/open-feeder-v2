/* eslint-disable camelcase */
import request from '@/utils/request'

export function getListRiwayatPendidikanMahasiswa (token, id_mahasiswa) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'GetListRiwayatPendidikanMahasiswa',
      token,
      'filter': `id_mahasiswa = '${id_mahasiswa}'`,
      'limit': '',
      'offset': 0
    }
  })
}
