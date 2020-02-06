/* eslint-disable camelcase */
import request from '@/utils/request'

export function updateMataKuliah (token, matkul) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'UpdateMataKuliah',
      token,
      'key': {
        'id_matkul': matkul.id_matkul
      },
      'record': {
        'kode_mata_kuliah': matkul.kode_mata_kuliah,
        'nama_mata_kuliah': matkul.nama_mata_kuliah,
        'id_prodi': matkul.id_prodi,
        'id_jenis_mata_kuliah': matkul.id_jenis_mata_kuliah,
        'id_kelompok_mata_kuliah': matkul.id_kelompok_mata_kuliah,
        'sks_mata_kuliah': matkul.sks_mata_kuliah,
        'sks_tatap_muka': matkul.sks_tatap_muka,
        'sks_praktek': matkul.sks_praktek,
        'sks_praktek_lapangan': matkul.sks_praktek_lapangan,
        'sks_simulasi': matkul.sks_simulasi,
        'metode_kuliah': matkul.metode_kuliah,
        'ada_sap': matkul.ada_sap,
        'ada_silabus': matkul.ada_sap,
        'ada_bahan_ajar': matkul.ada_bahan_ajar,
        'ada_acara_praktek': matkul.ada_acara_praktek,
        'ada_diktat': matkul.ada_diktat,
        'tanggal_mulai_efektif': matkul.tanggal_mulai_efektif
      }
    }
  })
}
