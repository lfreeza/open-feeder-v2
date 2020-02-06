const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  token: state => state.user.token,
  username: state => state.user.username,
  password: state => state.user.password,
  frompath: state => state.user.frompath,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  // Support
  statusmahasiswa: state => state.getstatusmahasiswa.statusmahasiswa,
  tahunajaran: state => state.gettahunajaran.tahunajaran,
  semester: state => state.getsemester.semester,
  jenisaktivitasmahasiswa: state => state.getjenisaktivitasmahasiswa.jenisaktivitasmahasiswa,
  jeniskeluar: state => state.getjeniskeluar.jeniskeluar,
  jenispendaftaran: state => state.getjenispendaftaran.jenispendaftaran,
  jalurmasuk: state => state.getjalurmasuk.jalurmasuk,
  pembiayaan: state => state.getpembiayaan.pembiayaan,
  jenisprestasi: state => state.getjenisprestasi.jenisprestasi,
  tingkatprestasi: state => state.gettingkatprestasi.tingkatprestasi,

  // Profil Perguruan Tinggi
  profilPT: state => state.profil.profilPT,
  prodi: state => state.prodi.prodi,
  periode: state => state.periode.periode,
  // Mahasiswa
  listMahasiswa: state => state.list.listMahasiswa,
  listQueryMahasiswa: state => state.list.listQueryMahasiswa,
  totalMahasiswa: state => state.list.totalMahasiswa,
  contohbiodatamahasiswa: state => state.contoh.contohbiodatamahasiswa.contohbiodatamahasiswa,
  updatebiodatamahasiswa: state => state.getbiodatamahasiswa.updatebiodatamahasiswa,
  listriwayatpendidikanmahasiswa: state => state.getlistriwayatpendidikanmahasiswa.listriwayatpendidikanmahasiswa,
  contohriwayatpendidikanmahasiswa: state => state.contoh.contohriwayatpendidikanmahasiswa.contohriwayatpendidikanmahasiswa,
  // // Prestasi
  listprestasimahasiswa: state => state.getlistprestasimahasiswa.listprestasimahasiswa,
  totalPrestasiMahasiswa: state => state.getlistprestasimahasiswa.totalPrestasiMahasiswa,
  contohprestasimahasiswa: state => state.contoh.contohprestasimahasiswa.contohprestasimahasiswa,
  // Dosen
  listDosen: state => state.listdosen.listDosen,
  totalDosen: state => state.listdosen.totalDosen,
  listPenugasanSemuaDosen: state => state.listpenugasansemuadosen.listPenugasanSemuaDosen,
  totalPenugasanSemuaDosen: state => state.listpenugasansemuadosen.totalPenugasanSemuaDosen,
  contohdosenpengajarkelaskuliah: state => state.contoh.contohdosenpengajarkelaskuliah.contohdosenpengajarkelaskuliah,
  // Mata Kuliah
  listMataKuliah: state => state.listmatakuliah.listMataKuliah, // List MataKuliah
  listQueryMataKuliah: state => state.listmatakuliah.listQueryMataKuliah,
  totalMataKuliah: state => state.listmatakuliah.totalMataKuliah,
  contohmatakuliah: state => state.contoh.contohmatakuliah.contohmatakuliah,
  updatematakuliah: state => state.getdetailmatakuliah.updatematakuliah,
  // Substansi Kuliah
  listSubstansiKuliah: state => state.listsubstansikuliah.listSubstansiKuliah,
  totalSubstansiKuliah: state => state.listsubstansikuliah.totalSubstansiKuliah,
  // Kurikulum
  listKurikulum: state => state.listkurikulum.listKurikulum, // List Kurikulum
  listQueryKurikulum: state => state.listkurikulum.listQueryKurikulum,
  totalKurikulum: state => state.listkurikulum.totalKurikulum,
  contohkurikulum: state => state.contoh.contohkurikulum.contohkurikulum,
  updatekurikulum: state => state.getdetailkurikulum.updatekurikulum,
  // Matkul Kurikulum
  // matkulkurikulum: state => state.getmatkulkurikulum.matkulkurikulum,
  contohmatkulkurikulum: state => state.contoh.contohmatkulkurikulum.contohmatkulkurikulum,
  // Kelas Perkuliahan
  listKelasKuliah: state => state.listkelaskuliah.listKelasKuliah, // List Kelas Kuliah
  listQueryKelasKuliah: state => state.listkelaskuliah.listQueryKelasKuliah,
  totalKelasKuliah: state => state.listkelaskuliah.totalKelasKuliah,
  contohkelaskuliah: state => state.contoh.contohkelaskuliah.contohkelaskuliah,
  updatekelaskuliah: state => state.getdetailkelaskuliah.updatekelaskuliah,

  pesertaKelasKuliah: state => state.getpesertakelaskuliah.pesertakelaskuliah,
  totalPesertaKelasKuliah: state => state.getpesertakelaskuliah.totalPesertaKelasKuliah,
  contohpesertakelaskuliah: state => state.contoh.contohpesertakelaskuliah.contohpesertakelaskuliah,
  // Aktivitas Kuliah Mahasiswa
  aktivitasKuliahMahasiswa: state => state.aktivitaskuliahmahasiswa.aktivitasKuliahMahasiswa,
  totalAktivitasKuliahMahasiswa: state => state.aktivitaskuliahmahasiswa.totalAktivitasKuliahMahasiswa,
  contohperkuliahan: state => state.contoh.contohperkuliahan.contohperkuliahan,
  // Nilai Perkuliahan Kelas
  listNilaiPerkuliahanKelas: state => state.listnilaiperkuliahankelas.listNilaiPerkuliahanKelas,
  totalNilaiPerkuliahanKelas: state => state.listnilaiperkuliahankelas.totalNilaiPerkuliahanKelas,
  // Aktivitas Mahasiswa
  listAktivitasMahasiswa: state => state.listaktivitasmahasiswa.listAktivitasMahasiswa,
  listQueryAktivitasMahasiswa: state => state.listaktivitasmahasiswa.listQueryAktivitasMahasiswa,
  totalAktivitasMahasiswa: state => state.listaktivitasmahasiswa.totalAktivitasMahasiswa,
  contohaktivitasmahasiswa: state => state.contoh.contohaktivitasmahasiswa.contohaktivitasmahasiswa,
  updateaktivitas: state => state.getdetailaktivitasmahasiswa.updateaktivitas,

  listAnggotaAktivitasMahasiswa: state => state.getlistanggotaaktivitasmahasiswa.listAnggotaAktivitasMahasiswa,
  totalAnggotaAktivitasMahasiswa: state => state.getlistanggotaaktivitasmahasiswa.totalAnggotaAktivitasMahasiswa,
  contohanggotaaktivitasmahasiswa: state => state.contoh.contohanggotaaktivitasmahasiswa.contohanggotaaktivitasmahasiswa,
  contohbimbingmahasiswa: state => state.contoh.contohbimbingmahasiswa.contohbimbingmahasiswa,
  contohujimahasiswa: state => state.contoh.contohujimahasiswa.contohujimahasiswa,
  // Mahasiswa Lulus/Drop Out
  listMahasiswaLulusDO: state => state.listmahasiswalulusdo.listMahasiswaLulusDO,
  listQueryMahasiswaLulusDO: state => state.listmahasiswalulusdo.listQueryMahasiswaLulusDO,
  totalMahasiswaLulusDO: state => state.listmahasiswalulusdo.totalMahasiswaLulusDO,
  contohmahasiswalulusdo: state => state.contoh.contohmahasiswalulusdo.contohmahasiswalulusdo,
  updatelulusdo: state => state.getdetailmahasiswalulusdo.updatelulusdo,
  // Lainnya
  destination: state => state.destination.destination,
  loading: state => state.loading.loading,
  errorLogs: state => state.errorLog.logs
}
export default getters
