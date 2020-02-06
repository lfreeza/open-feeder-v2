/* eslint-disable camelcase */
import request from '@/utils/request'

export function updateBiodataMahasiswa (token, biodata) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'UpdateBiodataMahasiswa',
      token,
      'key': {
        'id_mahasiswa': biodata.id_mahasiswa
      },
      'record': {
        'nama_mahasiswa': biodata.nama_mahasiswa,
        'jenis_kelamin': biodata.jenis_kelamin,
        'tempat_lahir': biodata.tempat_lahir,
        'tanggal_lahir': biodata.tanggal_lahir,
        'id_agama': biodata.id_agama,
        'nik': biodata.nik,
        'nisn': biodata.nisn,
        'npwp': biodata.npwp,
        'kewarganegaraan': biodata.id_negara,
        'jalan': biodata.jalan,
        'dusun': biodata.dusun,
        'rt': biodata.rt,
        'rw': biodata.rw,
        'kelurahan': biodata.kelurahan,
        'kode_pos': biodata.kode_pos,
        'id_wilayah': biodata.id_wilayah,
        'id_jenis_tinggal': biodata.id_jenis_tinggal,
        'id_alat_transportasi': biodata.id_alat_transportasi,
        'telepon': biodata.telepon,
        'handphone': biodata.handphone,
        'email': biodata.email,
        'penerima_kps': biodata.penerima_kps,
        'nomor_kps': biodata.nomor_kps,
        'nik_ayah': biodata.nik_ayah,
        'nama_ayah': biodata.nama_ayah,
        'tanggal_lahir_ayah': biodata.tanggal_lahir_ayah,
        'id_pendidikan_ayah': biodata.id_pendidikan_ayah,
        'id_pekerjaan_ayah': biodata.id_pekerjaan_ayah,
        'id_penghasilan_ayah': biodata.id_penghasilan_ayah,
        'nik_ibu': biodata.nik_ibu,
        'nama_ibu_kandung': biodata.nama_ibu,
        'tanggal_lahir_ibu': biodata.tanggal_lahir_ibu,
        'id_pendidikan_ibu': biodata.id_pendidikan_ibu,
        'id_pekerjaan_ibu': biodata.id_pekerjaan_ibu,
        'id_penghasilan_ibu': biodata.id_penghasilan_ibu,
        'nama_wali': biodata.nama_wali,
        'tanggal_lahir_wali': biodata.tanggal_lahir_wali,
        'id_pendidikan_wali': biodata.id_pendidikan_wali,
        'id_pekerjaan_wali': biodata.id_pekerjaan_wali,
        'id_penghasilan_wali': biodata.id_penghasilan_wali,
        'id_kebutuhan_khusus_mahasiswa': biodata.id_kebutuhan_khusus_mahasiswa,
        'id_kebutuhan_khusus_ayah': biodata.id_kebutuhan_khusus_ayah,
        'id_kebutuhan_khusus_ibu': biodata.id_kebutuhan_khusus_ibu
      }
    }
  })
}
