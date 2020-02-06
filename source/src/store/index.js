import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
// Support
import getstatusmahasiswa from './modules/getstatusmahasiswa'
import getjenispendaftaran from './modules/getjenispendaftaran'
import getjalurmasuk from './modules/getjalurmasuk'
import getpembiayaan from './modules/getpembiayaan'
import getjenisprestasi from './modules/getjenisprestasi'
import gettingkatprestasi from './modules/gettingkatprestasi'

import gettahunajaran from './modules/gettahunajaran'
import getsemester from './modules/getsemester'
import getjenisaktivitasmahasiswa from './modules/getjenisaktivitasmahasiswa'
import getjeniskeluar from './modules/getjeniskeluar'
// Profil Perguruan Tinggi
import profil from './modules/profil'
import prodi from './modules/prodi'
import periode from './modules/periode'
import contoh from './modules/contoh'
import destination from './modules/destination'
// Mahasiswa
import list from './modules/list'
import getbiodatamahasiswa from './modules/getbiodatamahasiswa'
import getlistriwayatpendidikanmahasiswa from './modules/getlistriwayatpendidikanmahasiswa'
import getlistprestasimahasiswa from './modules/getlistprestasimahasiswa'
// Dosen
import listdosen from './modules/listdosen'
import listpenugasandosen from './modules/listpenugasandosen'
import listpenugasansemuadosen from './modules/listpenugasansemuadosen'
// Mata Kuliah
import listmatakuliah from './modules/listmatakuliah'
import getdetailmatakuliah from './modules/getdetailmatakuliah'
// Substansi Kuliah
import listsubstansikuliah from './modules/listsubstansikuliah'
// Kurikulum
import listkurikulum from './modules/listkurikulum'
import getdetailkurikulum from './modules/getdetailkurikulum'
// Kelas Perkuliahan
import listkelaskuliah from './modules/listkelaskuliah'
import getdetailkelaskuliah from './modules/getdetailkelaskuliah'
import listnilaiperkuliahankelas from './modules/listnilaiperkuliahankelas'

import getpesertakelaskuliah from './modules/getpesertakelaskuliah'
// Aktivitas Kuliah Mahasiswa
import aktivitaskuliahmahasiswa from './modules/aktivitaskuliahmahasiswa'
// Aktivitas Mahasiswa
import listaktivitasmahasiswa from './modules/listaktivitasmahasiswa'
import getlistanggotaaktivitasmahasiswa from './modules/getlistanggotaaktivitasmahasiswa'
import getdetailaktivitasmahasiswa from './modules/getdetailaktivitasmahasiswa'
// Mahasiswa Lulus/Drop Out
import listmahasiswalulusdo from './modules/listmahasiswalulusdo'
import getdetailmahasiswalulusdo from './modules/getdetailmahasiswalulusdo'

import insert from './modules/insert'
import getters from './getters'
import loading from './modules/loading'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    // Support
    getstatusmahasiswa,
    getjenispendaftaran,
    getjalurmasuk,
    getpembiayaan,
    getjenisprestasi,
    gettingkatprestasi,
    gettahunajaran,
    getsemester,
    getjenisaktivitasmahasiswa,
    getjeniskeluar,
    // Profil PT
    profil,
    prodi,
    periode,
    // Mahasiswa
    list,
    getbiodatamahasiswa,
    getlistriwayatpendidikanmahasiswa,
    getlistprestasimahasiswa,
    // Dosen
    listdosen,
    listpenugasandosen,
    listpenugasansemuadosen,
    // Mata Kuliah
    listmatakuliah,
    getdetailmatakuliah,
    listsubstansikuliah,
    // Kurikulum
    listkurikulum,
    getdetailkurikulum,
    // Kelas Kuliah
    listkelaskuliah,
    getdetailkelaskuliah,

    getpesertakelaskuliah,
    // Perkuliahan
    listnilaiperkuliahankelas,
    aktivitaskuliahmahasiswa,
    // Aktivitas Mahasiswa
    listaktivitasmahasiswa,
    getdetailaktivitasmahasiswa,

    getlistanggotaaktivitasmahasiswa,
    // Mahasiswa Lulus DO
    listmahasiswalulusdo,
    getdetailmahasiswalulusdo,
    // Lainnya
    insert,
    contoh,
    destination,
    loading
  },
  getters
})

export default store
