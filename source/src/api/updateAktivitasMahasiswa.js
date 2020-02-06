/* eslint-disable camelcase */
import request from '@/utils/request'

export function updateAktivitasMahasiswa (token, aktivitas) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'UpdateAktivitasMahasiswa',
      token,
      'key': {
        'id_aktivitas': aktivitas.id_aktivitas
      },
      'record': {
        'jenis_anggota': aktivitas.jenis_anggota,
        'id_jenis_aktivitas': aktivitas.id_jenis_aktivitas,
        'id_prodi': aktivitas.id_prodi,
        'id_semester': aktivitas.id_semester,
        'judul': aktivitas.judul,
        'keterangan': aktivitas.keterangan,
        'lokasi': aktivitas.lokasi,
        'sk_tugas': aktivitas.sk_tugas,
        'tanggal_sk_tugas': aktivitas.tanggal_sk_tugas
      }
    }
  })
}
