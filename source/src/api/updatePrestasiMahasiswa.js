/* eslint-disable camelcase */
import request from '@/utils/request'

export function updatePrestasiMahasiswa (token, prestasi) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'UpdatePrestasiMahasiswa',
      token,
      'key': {
        'id_prestasi': prestasi.id_prestasi
      },
      'record': {
        'id_mahasiswa': prestasi.id_mahasiswa,
        'id_jenis_prestasi': prestasi.id_jenis_prestasi,
        'id_tingkat_prestasi': prestasi.id_tingkat_prestasi,
        'nama_prestasi': prestasi.nama_prestasi,
        'tahun_prestasi': prestasi.tahun_prestasi,
        'penyelenggara': prestasi.penyelenggara,
        'peringkat': prestasi.peringkat
      }
    }
  })
}
