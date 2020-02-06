/* eslint-disable camelcase */
import request from '@/utils/request'

export function updateKurikulum (token, kurikulum) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'UpdateKurikulum',
      token,
      'key': {
        'id_kurikulum': kurikulum.id_kurikulum
      },
      'record': {
        'nama_kurikulum': kurikulum.nama_kurikulum,
        'id_prodi': kurikulum.id_prodi,
        'id_semester': kurikulum.id_semester,
        'jumlah_sks_lulus': kurikulum.jumlah_sks_lulus,
        'jumlah_sks_wajib': kurikulum.jumlah_sks_wajib,
        'jumlah_sks_pilihan': kurikulum.jumlah_sks_pilihan
      }
    }
  })
}
