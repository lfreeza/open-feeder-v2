/* eslint-disable camelcase */
import request from '@/utils/request'

export function updateKelasKuliah (token, kelaskuliah) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'UpdateKelasKuliah',
      token,
      'key': {
        'id_kelas_kuliah': kelaskuliah.id_kelas_kuliah
      },
      'record': {
        'id_prodi': kelaskuliah.id_prodi,
        'id_semester': kelaskuliah.id_semester,
        'id_matkul': kelaskuliah.id_matkul,
        'nama_kelas_kuliah': kelaskuliah.nama_kelas_kuliah,
        'bahasan': kelaskuliah.bahasan,
        'tanggal_mulai_efektif': kelaskuliah.tanggal_mulai_efektif,
        'tanggal_akhir_efektif': kelaskuliah.tanggal_akhir_efektif
      }
    }
  })
}
