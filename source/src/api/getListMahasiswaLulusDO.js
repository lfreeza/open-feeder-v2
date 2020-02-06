/* eslint-disable camelcase */
import request from '@/utils/request'

export function getListMahasiswaLulusDO (token, limit, offset, filter) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      // Harusnya List, tapi diganti jadi Detail biar dapat data Prodi lengkap
      'act': 'GetDetailMahasiswaLulusDO',
      token,
      filter,
      limit,
      offset
    }
  })
}
