interface data {
    id:number,
    name:string,
    address:string,
    city:string
}




export let clinicData = [
    {id:1,
    name:"Clinic Sukajadi Bandung",
    address:"Cibiru",
    city:"Bandung"},
    {id:2,
    name:"Clinic Mangga Dua Jakarta",
    address:"Pinang2",
    city:"Jakarta"},
    {id:3,
    name:"Clinic Bintaro Tanggerang",
    address:"panas",
    city:"Tanggerang"},
    {id:4,
    name:"Clinic Surabaya",
    address:"Moe Moe",
    city:"Surabaya"},
]

// export let covid19Data:Array<string> = [
//     "Rapid Test",
//     "SWAB Antigen",
//     "SWAB PCR"
// ]

export let covid19Data = [
    {id:1,covidTestName:"Rapid Test",avgPrice:300000},
    {id:2,covidTestName:"SWAB Antigen",avgPrice:300000},
    {id:3,covidTestName:"SWAB PCR",avgPrice:300000},
]

export let mcuData = [
    {id:1,packageName:"Paket Gold"},
    {id:2,packageName:"Paket Standar"},
    {id:3,packageName:"Paket kehamilan"},
    {id:4,packageName:"Paket osteoporosis"},
    {id:5,packageName:"Paket Profil Lemak"},
    {id:6,packageName:"Paket Hipertensi"},
    {id:7,packageName:"Paket Resiko penyakit jantung coroner"}
]

export let testLabData = [
    {id:1,testLabName:"Hematologi"},
    {id:2,testLabName:"Koagulasi"},
    {id:3,testLabName:"Urin"},
    {id:4,testLabName:"Serologi"},
    {id:5,testLabName:"Imunologi"},
    {id:6,testLabName:"Petanda Tumor"},
    {id:7,testLabName: "Tiroid"}   
]