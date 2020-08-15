// implement method untuk memudahkan insert nilai array
// caranya : namaArray.insert(urutanData,'data');
// contoh : var arr = [ 'A', 'B', 'D', 'E' ];
//          arr.insert(2, 'C');
Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
};

//function untuk urut array dari kecil ke besar
function urutAscending(array) {
    array.sort((a, b) => {
        return a - b
    })
return array;
}
//function untuk urut array dari besar ke kecil
function urutDescending(array) {
    array.sort((a, b) => {
        return b - a
    })
return array;
}

//Function untuk deklarasi chart baru untuk algo FIFO
function fifoChart(data, labels) {
    var ctx = document.getElementById("fifoChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'FIFO',
                data: data,
            }]
        },
    });
}

//Function untuk deklarasi chart baru untuk algo SCAN
function scanChart(data, labels) {
    var ctx = document.getElementById("scanChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'SCAN',
                data: data,
            }]
        },
    });
}

//Function untuk deklarasi chart baru untuk algo C-SCAN
function cscanChart(data, labels,  ) {
    var ctx = document.getElementById("cscanChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'CSCAN',
                data: data,
            }]
        },
    });
}

//Function untuk deklarasi chart baru untuk algo SSTF
function sstfChart(data, labels,  ) {
    var ctx = document.getElementById("sstfChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'sstf',
                data: data,
            }]
        },
    });
}

//fungsi algoritma fifo
function algoFifo(nilaimasukan,nilaikepala){
    //menghitung jumlah data 
    var panjangdata = [];
    var j = nilaimasukan.length;
    for (i=0; i<=j;){
        panjangdata.insert(i,i)
        i++;
    }

    //memasukan nilai head
    var sirah = nilaikepala;
    nilaimasukan.insert(0,sirah);
    nilaimasukan = nilaimasukan;

    //memasukan data ke dalam chart
    data = nilaimasukan;
    labels = panjangdata;
    fifoChart(data, labels);       
}

//fungsi algoritma scan
function algoScan(nilaimasukan,nilaikepala){
    // array yang dibutuhkan 
    var dataLuhurSirah = [];
    var dataDihandapSirah = [];
    var sirah = nilaikepala;
    // perulangan for untuk misahkan nilaidata > head ,dan < head
    for (i=0; i < nilaimasukan.length; i++){
        if( parseInt(nilaimasukan[i])  > sirah){
            var ls=0;
            dataLuhurSirah.insert(ls,nilaimasukan[i]);
            ls++;
        }else{
            var hs=0;
            dataDihandapSirah.insert(hs,nilaimasukan[i]);
            hs++;
        }
    }
    // test doang ada nilai atau tidak 
    console.log(dataLuhurSirah);
    console.log(dataDihandapSirah);

    urutAscending(dataLuhurSirah);
    urutDescending(dataDihandapSirah);

    //menggabungkan kembali data array yg tlah dipisah % urut 
    var nilaiakhirdata = [];
    nilaiakhirdata = dataLuhurSirah.concat(dataDihandapSirah);
    console.log(nilaiakhirdata);

    //menghitung jumlah data 
    var panjangdata = [];
    var j = nilaimasukan.length;
    for (i=0; i<=j;){
        panjangdata.insert(i,i)
        i++;
    }

    //memasukan nilai head
    nilaiakhirdata.insert(0 , sirah);
    var temp = nilaiakhirdata.length+1;
    nilaiakhirdata.insert(temp,0);
    console.log(nilaiakhirdata);


    // memasukan data kedalam chart 
    data = nilaiakhirdata;
    labels =panjangdata;
    scanChart(data,labels);
}

function algoCScan(nilaimasukan,nilaikepala){
    // array yang dibutuhkan 
    var dataLuhurSirah = [];
    var dataDihandapSirah = [];
    var sirah = nilaikepala;
    // perulangan for untuk misahkan nilaidata > head ,dan < head
    for (i=0; i < nilaimasukan.length; i++){
        if( parseInt(nilaimasukan[i])  > sirah){
            var ls=0;
            dataLuhurSirah.insert(ls,nilaimasukan[i]);
            ls++;
        }else{
            var hs=0;
            dataDihandapSirah.insert(hs,nilaimasukan[i]);
            hs++;
        }
    }
    // test doang ada nilai atau tidak 
    console.log(dataLuhurSirah);
    console.log(dataDihandapSirah);

    urutAscending(dataLuhurSirah);
    urutAscending(dataDihandapSirah);

    //menggabungkan kembali data array yg tlah dipisah % urut 
    var nilaiakhirdata = [];
    nilaiakhirdata = dataLuhurSirah.concat(dataDihandapSirah);
    console.log(nilaiakhirdata);

    //menghitung jumlah data 
    var panjangdata = [];
    var j = nilaimasukan.length;
    for (i=0; i<=j;){
        panjangdata.insert(i,i)
        i++;
    }

    //memasukan nilai head
    nilaiakhirdata.insert(0 , sirah);
    console.log(nilaiakhirdata);


    // memasukan data kedalam chart 
    data = nilaiakhirdata;
    labels =panjangdata;
    cscanChart(data,labels);
}

function algoSstf(nilaimasukan,nilaikepala){
    console.log("algo sstf : "+nilaimasukan);
    console.log(nilaikepala);
    seek=0;
    bedaAntrian=[];

    // mencari beda jarak dari nilai array 
    for (i=0; i < nilaimasukan.length; i++){
        bedaAntrian[i] = Math.abs(nilaikepala-nilaimasukan[i]);
    }
    console.log(bedaAntrian);

    // memindahkan element berdasrkan beda terlebih dahulu
    for(i=0; i< nilaimasukan.length; i++){
        for(j = i+1; j < nilaimasukan.length; j++){

            if(bedaAntrian[i] > bedaAntrian[j]){
                temp = bedaAntrian[i];
                bedaAntrian[i] = nilaimasukan[j];
                bedaAntrian[j] = temp;

                temp = nilaimasukan[i];
                nilaimasukan[i] = nilaimasukan[j];
                nilaimasukan[j]=temp;
            }
        }
    }

    for(i=1; i < nilaimasukan.length; i++){
        seek = seek+Math.abs(nilaikepala-nilaimasukan[i]);
        nilaikepala = nilaimasukan[i];
    }

     //Mencari pnajang data
    var panjangdata = [];
    for (i=0; i<=nilaimasukan.length;){
        panjangdata.insert(i,i)
        i++;
    }
    
    console.log(seek);
    console.log(nilaimasukan);
    nilaiakhirdata = nilaimasukan;



    data = nilaiakhirdata;
    labels = panjangdata;
    sstfChart(data,labels);
}


function fungsiUtama () {
    var nilaimasukan = []; 
    nilaimasukan =  document.getElementById("nilaiInput").value.split(" ");
    nilaikepala = document.getElementById("nilaiHead").value;

    // console.log(nilaimasukan);
    console.log(nilaimasukan);

    //memanggil method algritma fifo
    algoFifo(nilaimasukan,nilaikepala);
    algoScan(nilaimasukan,nilaikepala);
    algoCScan(nilaimasukan,nilaikepala);
    algoSstf(nilaimasukan,nilaikepala);
}



