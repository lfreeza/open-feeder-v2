
import contohbiodatamahasiswa from './contohfile/contohbiodatamahasiswa'
import contohriwayatpendidikanmahasiswa from './contohfile/contohriwayatpendidikanmahasiswa'
import contohprestasimahasiswa from './contohfile/contohprestasimahasiswa'
import contohdosenpengajarkelaskuliah from './contohfile/contohdosenpengajarkelaskuliah'
import contohmatakuliah from './contohfile/contohmatakuliah'
import contohkurikulum from './contohfile/contohkurikulum'
import contohmatkulkurikulum from './contohfile/contohmatkulkurikulum'
import contohkelaskuliah from './contohfile/contohkelaskuliah'
import contohpesertakelaskuliah from './contohfile/contohpesertakelaskuliah'
import contohperkuliahan from './contohfile/contohperkuliahan'
import contohaktivitasmahasiswa from './contohfile/contohaktivitasmahasiswa'
import contohanggotaaktivitasmahasiswa from './contohfile/contohanggotaaktivitasmahasiswa'
import contohbimbingmahasiswa from './contohfile/contohbimbingmahasiswa'
import contohujimahasiswa from './contohfile/contohujimahasiswa'
import contohmahasiswalulusdo from './contohfile/contohmahasiswalulusdo'
import store from '@/store'
// import { Message } from 'element-ui'

const contoh = {
  modules: {
    contohbiodatamahasiswa,
    contohriwayatpendidikanmahasiswa,
    contohprestasimahasiswa,
    contohdosenpengajarkelaskuliah,
    contohmatakuliah,
    contohkurikulum,
    contohmatkulkurikulum,
    contohkelaskuliah,
    contohpesertakelaskuliah,
    contohperkuliahan,
    contohaktivitasmahasiswa,
    contohanggotaaktivitasmahasiswa,
    contohbimbingmahasiswa,
    contohujimahasiswa,
    contohmahasiswalulusdo
  },
  actions: {
    GetContoh () {
      let table = null
      const destination = store.getters.destination
      const dispatchdest = {
        'biodatamahasiswa': 'contohbiodatamahasiswa',
        'riwayatpendidikan': 'contohriwayatpendidikanmahasiswa',
        'prestasimahasiswa': 'contohprestasimahasiswa',
        'dosenpengajarkelaskuliah': 'contohdosenpengajarkelaskuliah',
        'matakuliah': 'contohmatakuliah',
        'kurikulum': 'contohkurikulum',
        'matkulkurikulum': 'contohmatkulkurikulum',
        'kelaskuliah': 'contohkelaskuliah',
        'pesertakelaskuliah': 'contohpesertakelaskuliah',
        'perkuliahanmahasiswa': 'contohperkuliahan',
        'aktivitas': 'contohaktivitasmahasiswa',
        'anggotaaktivitas': 'contohanggotaaktivitasmahasiswa',
        'bimbing': 'contohbimbingmahasiswa',
        'uji': 'contohujimahasiswa',
        'lulusdo': 'contohmahasiswalulusdo'
      }
      if (destination !== null) {
        console.log(destination)
        table = store.getters[dispatchdest[destination]]
        console.log(table)
      }
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = table.header
        const data = table.data
        console.log(tHeader)
        console.log(data)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: 'contoh-' + destination
        })
        /* Message({
        //   message: 'Download contoh file excel berhasil, cek folder penyimpananan Anda',
        //   type: 'success',
        //   duration: 5 * 1000
        // }) */
      })
    }
  }
}
export default contoh
