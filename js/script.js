const users = [
  {id:1001,name:'Muxammed',surname:'Layicov',age:20,department:'IT(Web)',university:'BMU',email:'layicovmuxammed@gmail.com',gender:'Kişi',education:'Bakalavr'},
  {id:1002,name:'Əfsər',surname:'Mehdizadə',age:20,department:'Satınalma',university:'BDU',email:'mehdizadefser@gmail.com',gender:'Kişi',education:'Bakalavr'},
  {id:1003,name:'Nərmin',surname:'Ağamalıyeva',age:20,department:'Satınalma',university:'BDU',email:'agamaliyevanrmin@gmail.com',gender:'Qadın',education:'Bakalavr'},
  {id:1004,name:'Hüseyn',surname:'Nəsirov',age:20,department:'HR',university:'BDU',email:'huseynnesirov@gmail.com',gender:'Kişi',education:'Bakalavr'},
  {id:1005,name:'Elgiz',surname:'Quluzadə',age:21,department:'Satınalma',university:'UNEC',email:'elgizquluzad@gmail.com',gender:'Kişi',education:'Bakalavr'},
  {id:1006,name:'Anar',surname:'Əkbərli',age:23,department:'IT(Marketinq)',university:'AZMIU',email:'theakbarov001@gmail.com',gender:'Kişi',education:'Bakalavr'},
  {id:1007,name:'Aytən',surname:'Bayramova',age:23,department:'IT(Web)',university:'BDU',email:'aytanbayramova@gmail.com',gender:'Qadın',education:'Magistratura'},
  {id:1008,name:'Lalə',surname:'Haşimli',age:20,department:'IT(Web)',university:'BMU',email:'lalahashimli@gmail.com',gender:'Qadın',education:'Bakalavr'},
  {id:1009,name:'Zabilə',surname:'Quliyeva',age:23,department:'HR',university:'AZTU',email:'zabilaquliyevaa@gmail.com',gender:'Qadın',education:'Magistratura'},
  {id:1010,name:'Mirseyid',surname:'Seyidli',age:21,department:'Mühasibatlıq',university:'ATMU',email:'mirseyids.seyidli@gmail.com',gender:'Kişi',education:'Bakalavr'},
  {id:1011,name:'Ceyhun',surname:'Zaman',age:19,department:'IT(Marketinq)',university:'UNEC',email:'ceyhunzamano@gmail.com',gender:'Kişi',education:'Bakalavr'},
  {id:1012,name:'Aysel',surname:'Abdullayeva',age:20,department:'IT(Web)',university:'ADNSU',email:'ayselabdullayeva657@gmail.com',gender:'Qadın',education:'Bakalavr'},
  {id:1013,name:'Xəyalə',surname:'Əliyeva',age:20,department:'IT(Web)',university:'ADNSU',email:'xylaliyeva@gmail.com',gender:'Qadın',education:'Bakalavr'},
  {id:1014,name:'Lalə',surname:'Əliyeva',age:19,department:'HR',university:'ADU',email:'lale.aliyeva11111@gmail.com',gender:'Qadın',education:'Bakalavr'},
  {id:1015,name:'Maya',surname:'Quliyeva',age:19,department:'IT(Marketinq)',university:'UNEC',email:'mayaquliyeva034@gmail.com',gender:'Qadın',education:'Bakalavr'},
  {id:1016,name:'Lamiyə',surname:'Samandarzadə',age:21,department:'Mühasibatlıq',university:'UNEC',email:'lamiyasamandarzada@gmail.com',gender:'Qadın',education:'Bakalavr'},
  {id:1017,name:'Anar',surname:'Kərimli',age:21,department:'IT(Web)',university:'AZTU',email:'anarrkerimli@gmail.com',gender:'Kişi',education:'Magistratura'},
  {id:1018,name:'Tamara',surname:'Mammadova',age:22,department:'HR',university:' UNEC',email:'tamarammdva0504@gmail.com',gender:'Qadın',education:'Magistratura'},
  {id:1019,name:'Nərmin',surname:'Hüseynzadə',age:20,department:'IT(Web)',university:'ADNSU',email:'narminhv2@gmail.com',gender:'Qadın',education:'Bakalavr'},
  {id:1020,name:'Şəlalə',surname:'Sanılı',age:19,department:'IT(Marketinq)',university:'UNEC',email:'slalsanili@gmail.com',gender:'Qadın',education:'Bakalavr'},
  {id:1021,name:'Selcan',surname:'Adilova',age:19,department:'Mühasibatlıq',university:'UNEC',email:'selcanadilova@gmail.com',gender:'Qadın',education:'Bakalavr'},
  {id:1022,name:'Rahilə',surname:'Şəfiyeva',age:21,department:'IT(Web)',university:'ADNSU',email:'rehileshefiyeva95@gmail.com',gender:'Qadın',education:'Magistratura'},
  {id:1023,name:'Aysun',surname:'İsgəndərli',age:23,department:'IT(Web)',university:'DİA',email:'aysunnisgenderli@gmail.com',gender:'Qadın',education:'Bakalavr'},
  {id:1024,name:'Murad',surname:'Tağıyev',age:21,department:'IT(Web)',university:'BANM',email:'muradtaghiyev05@gmail.com',gender:'Kişi',education:'Bakalavr'},
  {id:1025,name:'Səbinə',surname:'Həşimova',age:20,department:'IT(Marketinq)',university:'BDU',email:'sabina032@gmail.com',gender:'Qadın',education:'Bakalavr'},
  {id:1026,name:'Asif',surname:'Hüseynzadə',age:22,department:'IT(Web)',university:'ADNSU',email:'asif.huseynzade2@gmail.com',gender:'Kişi',education:'Bakalavr'},
  {id:1027,name:'Camal',surname:'Zeynalli',age:21,department:'IT(Marketinq)',university:'UNEC',email:'zcamal0@gmail.com',gender:'Kişi',education:'Magistratura'},
  {id:1028,name:'Gülnaz',surname:'Teymurlu',age:23,department:'Mühasibatlıq',university:'BMU',email:'gulnazteymurlu@gmail.com',gender:'Qadın',education:'Bakalavr'},
  {id:1029,name:'Nərmin',surname:'Abbaszadə',age:20,department:'IT(Marketinq)',university:'ADNSU',email:'narminabbaszade@gmail.com',gender:'Qadın',education:'Bakalavr'},
  {id:1030,name:'Zərifə',surname:'Qarayeva',age:21,department:'IT(Marketinq)',university:'AZMİU',email:'zarifagarayeva@gmail.com',gender:'Qadın',education:'Mühasibatlıq'},
  {id:1031,name:'Namik',surname:'Zöhrabov',age:22,department:'Yol-İnşaat',university:'AZMİU',email:'nzohrabov38@gmail.com',gender:'Kişi',education:'Magistratura'},
  {id:1032,name:'Gülnar',surname:'Məmmədova',age:21,department:'Satınalma',university:'BANM',email:'gulnarmmmdova@gmail.com',gender:'Qadın',education:'Bakalavr'},
  {id:1033,name:'Aydan',surname:'Mehrabova',age:21,department:'Mühasibatlıq',university:'UNEC',email:'aydan.mehrabova@bk.ru',gender:'Qadın',education:'Bakalavr'},
  {id:1034,name:'Tellixanım',surname:'Guliyeva',age:21,department:'IT(Marketinq)',university:'ADNSU',email:'tellikhanim.guliyeva"gmail.com',gender:'Qadın',education:'Bakalavr'},
  {id:1035,name:'Zaminəli',surname:'Rüstəmov',age:20,department:'IT(Web)',university:'BDU',email:'zaminalirustemov@gmail.com',gender:'Kişi',education:'Bakalavr'},
  {id:1036,name:'Hacı',surname:'Mehdixanlı',age:20,department:'IT(Web)',university:'ANDSU',email:'haci.mehdixann@gmail.com',gender:'Kişi',education:'Bakalavr'},
  {id:1037,name:'Cahangir',surname:'Asgerov',age:20,department:'IT(Web)',university:'ADNSU',email:'esgerovcahangir.12@gmail.com',gender:'Kişi',education:'Bakalavr'},
  {id:1038,name:'Ilkin',surname:'Süleymanov',age:22,department:'IT(Web)',university:'UNEC',email:'ilkin.suleymanov@gmail.com',gender:'Kişi',education:'Magistratura'},
  {id:1039,name:'Şəbnəm',surname:'Məmmədova',age:19,department:'IT(Web)',university:'BDU',email:'shabnam.mmadova@gmail.com',gender:'Qadın',education:'Bakalavr'},
  {id:1040,name:'Zülfiyyə',surname:'Əliyeva',age:20,department:'Mühasibatlıq',university:'UNEC',email:'aliyevazulfiyya02@gmail.com',gender:'Qadın',education:'Bakalavr'},
  {id:1041,name:'Rəvan',surname:'Süleymanlı',age:20,department:'Mühasibatlıq',university:'ADNSU',email:'suleymanliravan@gmail.com',gender:'Kişi',education:'Bakalavr'},
  {id:1042,name:'Zeynəb',surname:'Fətəliyeva',age:25,department:'IT(Marketinq)',university:'ADPU',email:'zeynebfataliyeva4@gmail.com',gender:'Qadın',education:'Bakalavr'},
  {id:1043,name:'Nurlan',surname:'Heydərov',age:20,department:'Yol-İnşaat',university:'BMU',email:'nurlanheyderov07@gmail.com',gender:'Kişi',education:'Bakalavr'},
  {id:1044,name:'Vəsilə',surname:'Mahmudova',age:20,department:'HR',university:'BDU',email:'v.m.030729@gmail.com',gender:'Qadın',education:'Bakalavr'},
  {id:1045,name:'Nəzrin',surname:'İbrahimova',age:20,department:'Mühasibatlıq',university:'BAU',email:'nasrinibrahim2003@gmail.com',gender:'Qadın',education:'Bakalavr'},
  {id:1046,name:'Fidan',surname:'Qədirova',age:23,department:'HR',university:'BDU',email:'fidan.303.qedirova@gmail.com',gender:'Qadın',education:'Bakalavr'},
  {id:1047,name:'Sənan',surname:'Zahidov',age:20,department:'Satınalma',university:'UNEC',email:'senan.zahidov023@gmail.com',gender:'Kişi',education:'Bakalavr'},
  {id:1048,name:'Yasəmən',surname:'Sadıqova',age:23,department:'Mühasibatlıq',university:'BAU',email:'jasminşsadigova@gmail.com',gender:'Qadın',education:'Magistratura'},
  {id:1049,name:'Ağasət',surname:'Məhərrəmov',age:21,department:'IT(Web)',university:'BMU',email:'agasfm90@gmail.com',gender:'Kişi',education:'Bakalavr'},
  {id:1050,name:'Gülşən',surname:'Azimli',age:20,department:'IT(Web)',university:'DİA',email:'gulshnşazimli@gmail.com',gender:'Qadın',education:'Bakalavr'},
  {id:1051,name:'Ramin',surname:'Allahverdiyev',age:21,department:'IT(Web)',university:'BMU',email:'ra1000allahverdiyev@gmail.com',gender:'Kişi',education:'Bakalavr'},
  {id:1052,name:'Rza',surname:'Osmanov',age:18,department:'Satınalma',university:'AZTU',email:'rzaosmanov17@gmail.com',gender:'Kişi',education:'Bakalavr'},
  {id:1053,name:'Ülkər',surname:'Hacıyeva',age:19,department:'Mühasibatlıq',university:'UNEC',email:'ulkrhaciyeva9@gmail.com',gender:'Qadın',education:'Bakalavr'},
  {id:1054,name:'Fərid',surname:'Nağıyev',age:19,department:'IT(Marketinq)',university:'ADNSU',email:'feridf375@gmail.com',gender:'Kişi',education:'Bakalavr'},
  {id:1055,name:'Ayişə',surname:'Heydərli',age:19,department:'Mühasibatlıq',university:'DİA',email:'heydarliayisha@gmail.com',gender:'Qadın',education:'Bakalavr'},
  {id:1056,name:'Fatima',surname:'Mammadova',age:20,department:'IT(Web)',university:'GDU',email:'fatimemammedova9@gmail.com',gender:'Qadın',education:'Bakalavr'},
  {id:1057,name:'Nurtac',surname:'Süleymanlı',age:22,department:'HR',university:'UNEC',email:'suleymanlinurn@gmail.com',gender:'Qadın',education:'Magistratura'},
  {id:1058,name:'Ziyafət',surname:'Soltanzadə',age:19,department:'HR',university:'Xəzər',email:'ziyafat.soltan@gmail.com',gender:'Qadın',education:'Bakalavr'},
  {id:1059,name:'Gülnar',surname:'Qasımova',age:23,department:'HR',university:'UNEC',email:'gl.qasimova1999@gmail.com',gender:'Qadın',education:'Bakalavr'},
  {id:1060,name:'Turac',surname:'Tahirova',age:21,department:'Mühasibatlıq',university:'UNEC',email:'tahirovaturac7666@gmail.com',gender:'Qadın',education:'Bakalavr'}
]
let menHrCount=0,menItWebCount=0,menAccCount=0,menItMarketingCount=0,menSatinalmaCount=0,menYolInsaatCount=0,womenHrCount=0,womenItWebCount=0,womenAccCount=0,womenItMarketingCount=0,womenSatinalmaCount=0,womenYolInsaatCount=0,ages=[];
for(let user of users){
  ages.push(user.age)
  if(user.department=='HR'){
    if(user.gender=='Kişi'){
      menHrCount++;
    }else{
      womenHrCount++;
    }
  }else if(user.department == 'IT(Web)'){
    if(user.gender=='Kişi'){
      menItWebCount++;     
    }else{
      womenItWebCount++;
    }
  }else if(user.department == 'Mühasibatlıq'){
    if(user.gender=='Kişi'){
      menAccCount++
    }else{
      womenAccCount++
    }
  }else if(user.department == 'Satınalma'){
    if(user.gender=='Kişi'){
      menSatinalmaCount++
    }else{
      womenSatinalmaCount++
    }
  }else if(user.department == 'IT(Marketinq)'){
    if(user.gender=='Kişi'){
      menItMarketingCount++
    }else{
      womenItMarketingCount++
    }
  }else{
    if(user.gender=='Kişi'){
      menYolInsaatCount++
    }else{
      womenYolInsaatCount++
    }
  }
}

const ctx = document.getElementById('barchartdepartments');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['IT (Web)', 'IT (Marketinq)', 'HR', 'Satınalma','Yol-İnşaat','Mühasibatlıq'],
    datasets: [{
      label: 'Kişi',
      data: [`${menItWebCount}`,`${menItMarketingCount}`,`${menHrCount}`,`${menSatinalmaCount}`,`${menYolInsaatCount}`,`${menAccCount}`],
      stack: 'Stack 1',
      backgroundColor: '#13b496'

    },{
      label: 'Qadın',
      data: [`${womenItWebCount}`,`${womenItMarketingCount}`,`${womenHrCount}`,`${womenSatinalmaCount}`,`${womenYolInsaatCount}`,`${womenAccCount}`],
      stack:'Stack 2',
      backgroundColor: '#fff'

    }]
  },
  options: {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true
      }
    }
  }
});
function sortUniqueArray(arr) {
  const uniqueArray = [...new Set(arr)]; // Remove duplicates using Set
  const sortedArray = uniqueArray.sort((a, b) => a - b); // Sort the array
  return sortedArray;
}
const sortedUniqueArray = sortUniqueArray(ages);
console.log(sortedUniqueArray);

const agesBar = document.getElementById('barchartages');
let menage18=0,womenage18=0,menage19=0,womenage19=0,menage20=0,womenage20=0,menage21=0,womenage21=0,menage22=0,womenage22=0,menage23=0,womenage23=0,menage25=0,womenage25=0;
for(let user of users){
  if(user.age==18){
    if(user.gender=='Kişi'){
      menage18++;
    }else{
      womenage18++;
    }
  }else if(user.age==19){
    if(user.gender=='Kişi'){
      menage19++;     
    }else{
      womenage19++;
    }
  }else if(user.age==20){
    if(user.gender=='Kişi'){
      menage20++
    }else{
      womenage20++
    }
  }else if(user.age==21){
    if(user.gender=='Kişi'){
      menage21++
    }else{
      womenage21++
    }
  }else if(user.age==22){
    if(user.gender=='Kişi'){
      menage22++
    }else{
      womenage22++
    }
  }else if(user.age==23){
    if(user.gender=='Kişi'){
      menage23++
    }else{
      womenage23++
    }
  }
  else{
    if(user.gender=='Kişi'){
      menage25++
    }else{
      womenage25++
    }
  }
}


new Chart(barchartages, {
  type: 'bar',
  data: {
    labels: sortedUniqueArray,
    datasets: [{
      label: 'Kişi',
      data: [`${menage18}`,`${menage19}`,`${menage20}`,`${menage21}`,`${menage22}`,`${menage23}`,`${menage25}`],
      stack: 'Stack 1',
      backgroundColor: '#13b496'
    },{
      label: 'Qadın',
      data: [`${womenage18}`,`${womenage19}`,`${womenage20}`,`${womenage21}`,`${womenage22}`,`${womenage23}`,`${womenage25}`],
      stack:'Stack 2',
      backgroundColor: '#FFF'
    }]
  },
  options: {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true
      }
    }
  }
});



const piechart = document.getElementById('piechart');

new Chart(piechart, {
  type: 'pie',
  data: {
    labels: ["IT (Web)", "IT (Marketinq)", "HR", "Mühasibatlıq","Satınalma","Yol-İnşaat"],
    datasets: [{
      label: 'Şöbə işçilərinin sayı',
      data: [`${menItWebCount+womenItWebCount}`, `${menItMarketingCount+womenItMarketingCount}`, `${menHrCount+womenHrCount}`,`${menAccCount+womenAccCount}`,`${menSatinalmaCount+womenSatinalmaCount}`,`${menYolInsaatCount+womenYolInsaatCount}`],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        '#750787',
        '#004dff',
        ' #008026'
      ],
      hoverOffset: 4
    }]
  }
});

const now = new Date();
let hour = String(now.getHours()).padStart(2,'0'),
    minute = String(now.getMinutes()).padStart(2,'0'),
    seconds = String(now.getSeconds()).padStart(2,'0');
let carivaxt = ` ${hour}:${minute}:${seconds}`;
const updates = document.querySelectorAll('.now')
for(let update of updates ){
    update.innerText = `yenilenme vaxtı: ${carivaxt}`;
}


// function displayUser() {
// //   let ul = document.getElementById("user-list");
// //   ul.innerHTML = "";

// //   for(let gorev of gorevListesi) {

// //       let li = `
// //           <li class="task list-group-item">
// //               <div class="form-check">
// //                   <input type="checkbox" id="${gorev.id}" class="form-check-input">
// //                   <label for="${gorev.id}" class="form-check-label">${gorev.gorevAdi}</label>
// //               </div>
// //               <div class="dropdown">
// //                   <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
// //                       <i class="fa-solid fa-ellipsis"></i>
// //                   </button>
// //                   <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
// //                       <li><a onclick="deleteTask(${gorev.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash-can"></i> Sil</a></li>
// //                       <li><a onclick='editTask(${gorev.id}, "${gorev.gorevAdi}")' class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> Düzenle</a></li>
// //                   </ul>
// //               </div>
// //           </li>
// //       `;
      
// //       ul.insertAdjacentHTML("beforeend", li);           

// //   }
// }
