let frm = document.getElementById('input')
let jabatanpegawai = ["Manager", "Asisten Manager", "Staff"];
let pilihJabatan = `<option value=""> Pilihan Jabatan ----</option>`;
for (let p in jabatanpegawai) {
    pilihJabatan += `<option value="${jabatanpegawai[p]}">${jabatanpegawai[p]}</option>`;
}

let statuspegawai = ["Menikah", "Belum Menikah"];
let pilihstatus = `<option value=""> Pilihan Status ----</option>`;
for (let p in statuspegawai) {
    pilihstatus += `<option value="${statuspegawai[p]}">${statuspegawai[p]}</option>`;
}

frm.jabatanpegawai.innerHTML = pilihJabatan
frm.statuspegawai.innerHTML = pilihstatus

function data() {
    let namapegawai = frm.namapegawai.value;
    let jabatanpegawai = frm.jabatanpegawai.value;
    let statuspegawai = frm.statuspegawai.value;
    let gaji_pokok;
    switch (jabatanpegawai) {
        case 'Manager':
            gaji_pokok = 15000000;
            break;
        case 'Asisten Manager':
            gaji_pokok = 10000000;
            break;
        case 'Staff':
            gaji_pokok = 5000000;
            break;
        default:
            gaji_pokok = 0;
            break;
    }

    let tunjangan_jabatan = 0.15 * gaji_pokok;
    let BPJS = 0.1 *  gaji_pokok;
    let tunjangan_keluarga = (statuspegawai == "Menikah") ? gaji_pokok * 0.2 : 0
    total_gaji = gaji_pokok + tunjangan_jabatan - BPJS + tunjangan_keluarga

let output = `
<div class="data_a">
<table border="1" cellpadding="10" cellspacing="0">
        <thead>
            <tr style="background-color: lightpink;">
                <th>Nama Pegawai</th>
                <th>Jabatan Pegawai</th>
                <th>Status Pegawai</th>
                <th>Gaji Pegawai</th>
                <th>Tunjangan Jabatan (15%)</th>
                <th>Tunjangan Keluarga (20%)</th>
                <th>BPJS (10%)</th>
                <th>Total Gaji</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${namapegawai}</td>
                <td>${jabatanpegawai}</td>
                <td>${statuspegawai}</td>
                <td>${gaji_pokok}</td>
                <td>${tunjangan_jabatan}</td>
                <td>${tunjangan_keluarga}</td>
                <td>${BPJS}</td>
                <td>${total_gaji}</td>
            </tr>
        </tbody>
        <tfoot>
            <tr style="font-weight: bold;   background-color: gainsboro;" >
                <td colspan="7">Total Gaji</td>
                <td>${total_gaji}</td>
            </tr>
        </tfoot>
    </table>
    </div>
`;
    document.getElementById('hasil').innerHTML = output;
}