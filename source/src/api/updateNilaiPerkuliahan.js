/* eslint-disable camelcase */
import request from '@/utils/request'
// API ini gagal
export function updateNilaiPerkuliahan (token, key, record) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'UpdateNilaiPerkuliahanKelas',
      token,
      key,
      record
    }
  })
}
