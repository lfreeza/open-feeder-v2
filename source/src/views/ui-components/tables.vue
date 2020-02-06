<template lang="html">
  <section class="tables">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Data Mahasiswa</h4>
            <p class="card-description">
              Informasi mengenai mahasiswa
            </p>

              <b-table striped hover :fields="fields" :items="items" responsive="sm">
              <!-- A virtual column -->
              <template v-slot:cell(index)="data">
                {{ data.index + 1 }}
              </template>

            </b-table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      fields: [
        // A virtual column that doesn't exist in items
        { key: 'index', label: 'No' },
        // A column that needs custom formatting
        { key: 'nama_mahasiswa', label: 'Nama', shortable: true },
        // A regular column
        { key: 'nim', label: 'NIM', shortable: true },
        { key: 'jenis_kelamin', label: 'L/P', shortable: true },
        { key: 'nama_agama', label: 'Agama', shortable: true },
        { key: 'tanggal_lahir', label: 'Tanggal Lahir', shortable: true },
        { key: 'nama_program_studi', label: 'Program Studi', shortable: true },
        { key: 'nama_status_mahasiswa', label: 'Status', shortable: true },
        { key: 'nama_periode_masuk', label: 'Periode Masuk', shortable: true }
      ],
      items: [
        { nama_mahasiswa: 'Akur Kurniawan', nim: '121212019', jenis_kelamin: 'L', nama_agama: 'Islam', tanggal_lahir: '1999-1-1', nama_program_studi: 'Farmasi', status: 'AKTIF', nama_periode_masuk: '2018/2019 Genap' },
        { nama_mahasiswa: 'Akur Kurniawan', nim: '121212019', jenis_kelamin: 'L', nama_agama: 'Islam', tanggal_lahir: '1999-1-1', nama_program_studi: 'Farmasi', status: 'AKTIF', nama_periode_masuk: '2018/2019 Genap' },
        { nama_mahasiswa: 'Akur Kurniawan', nim: '121212019', jenis_kelamin: 'L', nama_agama: 'Islam', tanggal_lahir: '1999-1-1', nama_program_studi: 'Farmasi', status: 'AKTIF', nama_periode_masuk: '2018/2019 Genap' },
        { nama_mahasiswa: 'Akur Kurniawan', nim: '121212019', jenis_kelamin: 'L', nama_agama: 'Islam', tanggal_lahir: '1999-1-1', nama_program_studi: 'Farmasi', status: 'AKTIF', nama_periode_masuk: '2018/2019 Genap' },
        { nama_mahasiswa: 'Akur Kurniawan', nim: '121212019', jenis_kelamin: 'L', nama_agama: 'Islam', tanggal_lahir: '1999-1-1', nama_program_studi: 'Farmasi', status: 'AKTIF', nama_periode_masuk: '2018/2019 Genap' },
        { nama_mahasiswa: 'Akur Kurniawan', nim: '121212019', jenis_kelamin: 'L', nama_agama: 'Islam', tanggal_lahir: '1999-1-1', nama_program_studi: 'Farmasi', status: 'AKTIF', nama_periode_masuk: '2018/2019 Genap' },
        { nama_mahasiswa: 'Akur Kurniawan', nim: '121212019', jenis_kelamin: 'L', nama_agama: 'Islam', tanggal_lahir: '1999-1-1', nama_program_studi: 'Farmasi', status: 'AKTIF', nama_periode_masuk: '2018/2019 Genap' },
        { nama_mahasiswa: 'Akur Kurniawan', nim: '121212019', jenis_kelamin: 'L', nama_agama: 'Islam', tanggal_lahir: '1999-1-1', nama_program_studi: 'Farmasi', status: 'AKTIF', nama_periode_masuk: '2018/2019 Genap' }

      ]
    }
  }
}
</script>

<style scoped lang="scss">
.tables {
}
</style>
