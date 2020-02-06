/* eslint-disable camelcase */
import request from '@/utils/request'

export function updateRiwayatPendidikanMahasiswa (token, riwayatpendidikan) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'UpdateRiwayatPendidikanMahasiswa',
      token,
      'key': {
        'id_registrasi_mahasiswa': riwayatpendidikan.id_registrasi_mahasiswa
      },
      'record': {
        'id_mahasiswa': riwayatpendidikan.id_mahasiswa,
        'nim': riwayatpendidikan.nim,
        'id_jenis_daftar': riwayatpendidikan.id_jenis_daftar,
        'id_jalur_daftar': riwayatpendidikan.id_jalur_daftar,
        'id_periode_masuk': riwayatpendidikan.id_periode_masuk,
        'tanggal_daftar': riwayatpendidikan.tanggal_daftar,
        'id_perguruan_tinggi': riwayatpendidikan.id_perguruan_tinggi,
        'id_prodi': riwayatpendidikan.id_prodi,
        'sks_diakui': riwayatpendidikan.sks_diakui,
        'id_perguruan_tinggi_asal': riwayatpendidikan.id_perguruan_tinggi_asal,
        'id_prodi_asal': riwayatpendidikan.id_prodi_asal,
        'id_pembiayaan': riwayatpendidikan.id_pembiayaan
      }
    }
  })
}
