/* eslint-disable camelcase */
import request from '@/utils/request'

export function updateMahasiswaLulusDO (token, lulusdo) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'UpdateMahasiswaLulusDO',
      token,
      'key': {
        'id_registrasi_mahasiswa': lulusdo.id_registrasi_mahasiswa
      },
      'record': {
        'nim': lulusdo.nim,
        'id_jenis_keluar': lulusdo.id_jenis_keluar,
        'tanggal_keluar': lulusdo.tanggal_keluar,
        'keterangan': lulusdo.keterangan,
        'nomor_sk_yudisium': lulusdo.nomor_sk_yudisium,
        'ipk': lulusdo.ipk,
        'nomor_ijazah': lulusdo.nomor_ijazah,
        'jalur_skripsi': lulusdo.jalur_skripsi,
        'judul_skripsi': lulusdo.judul_skripsi,
        'bulan_awal_bimbingan': lulusdo.bulan_awal_bimbingan,
        'bulan_akhir_bimbingan': lulusdo.bulan_akhir_bimbingan
      }
    }
  })
}
