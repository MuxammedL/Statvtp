const users = [
    {name:'Muxammed',surname:'Layicov',age:20,department:'IT(Web)',university:'BMU',email:'layicovmuxammed@gmail.com',gender:'Kişi',education:'Bakalavr',bday:'13 May'},
    {name:'Əfsər',surname:'Mehdizadə',age:20,department:'Satınalma',university:'BDU',email:'mehdizadefser@gmail.com',gender:'Kişi',education:'Bakalavr',bday:'24 Aprel'},
    {name:'Nərmin',surname:'Ağamalıyeva',age:20,department:'Satınalma',university:'BDU',email:'agamaliyevanrmin@gmail.com',gender:'Qadın',education:'Bakalavr',bday:'1 May'},
    {name:'Hüseyn',surname:'Nəsirov',age:20,department:'HR',university:'BDU',email:'huseynnesirov@gmail.com',gender:'Kişi',education:'Bakalavr',bday:'4 Iyun'},
    {name:'Elgiz',surname:'Quluzadə',age:21,department:'Satınalma',university:'UNEC',email:'elgizquluzad@gmail.com',gender:'Kişi',education:'Bakalavr',bday:'19 Avqust'},
    {name:'Anar',surname:'Əkbərli',age:23,department:'IT(Marketinq)',university:'AZMIU',email:'theakbarov001@gmail.com',gender:'Kişi',education:'Bakalavr',bday:'5 Mart'},
    {name:'Aytən',surname:'Bayramova',age:23,department:'IT(Web)',university:'BDU',email:'aytanbayramova@gmail.com',gender:'Qadın',education:'Magistratura',bday:'1 Oktyabr'},
    {name:'Lalə',surname:'Haşimli',age:20,department:'IT(Web)',university:'BMU',email:'lalahashimli@gmail.com',gender:'Qadın',education:'Bakalavr',bday:'15 Noyabr'},
    {name:'Zabilə',surname:'Quliyeva',age:23,department:'HR',university:'AZTU',email:'zabilaquliyevaa@gmail.com',gender:'Qadın',education:'Magistratura',bday:'19 Avqust'},
    {name:'Mirseyid',surname:'Seyidli',age:21,department:'Mühasibatlıq',university:'ATMU',email:'mirseyids.seyidli@gmail.com',gender:'Kişi',education:'Bakalavr',bday:'20 Avqust'},
    {name:'Ceyhun',surname:'Zaman',age:19,department:'IT(Marketinq)',university:'UNEC',email:'ceyhunzamano@gmail.com',gender:'Kişi',education:'Bakalavr',bday:'28 May'},
    {name:'Aysel',surname:'Abdullayeva',age:20,department:'IT(Web)',university:'ADNSU',email:'ayselabdullayeva657@gmail.com',gender:'Qadın',education:'Bakalavr',bday:'11 Yanvar'},
    {name:'Xəyalə',surname:'Əliyeva',age:20,department:'IT(Web)',university:'ADNSU',email:'xylaliyeva@gmail.com',gender:'Qadın',education:'Bakalavr',bday:'22 Mart'},
    {name:'Lalə',surname:'Əliyeva',age:19,department:'HR',university:'ADU',email:'lale.aliyeva11111@gmail.com',gender:'Qadın',education:'Bakalavr',bday:'12 May'},
    {name:'Maya',surname:'Quliyeva',age:19,department:'IT(Marketinq)',university:'UNEC',email:'mayaquliyeva034@gmail.com',gender:'Qadın',education:'Bakalavr',bday:'4 Oktyabr'},
    {name:'Lamiyə',surname:'Samandarzadə',age:21,department:'Mühasibatlıq',university:'UNEC',email:'lamiyasamandarzada@gmail.com',gender:'Qadın',education:'Bakalavr',bday:'5 May'},
    {name:'Anar',surname:'Kərimli',age:21,department:'IT(Web)',university:'AZTU',email:'anarrkerimli@gmail.com',gender:'Kişi',education:'Magistratura',bday:'9 Noyabr'},
    {name:'Tamara',surname:'Mammadova',age:22,department:'HR',university:' UNEC',email:'tamarammdva0504@gmail.com',gender:'Qadın',education:'Magistratura',bday:'7 Aprel'},
    {name:'Nərmin',surname:'Hüseynzadə',age:20,department:'IT(Web)',university:'ADNSU',email:'narminhv2@gmail.com',gender:'Qadın',education:'Bakalavr',bday:'5 Fevral'},
    {name:'Şəlalə',surname:'Sanılı',age:19,department:'IT(Marketinq)',university:'UNEC',email:'slalsanili@gmail.com',gender:'Qadın',education:'Bakalavr',bday:'8 Iyul'},
    {name:'Selcan',surname:'Adilova',age:19,department:'Mühasibatlıq',university:'UNEC',email:'selcanadilova@gmail.com',gender:'Qadın',education:'Bakalavr',bday:'12 Noyabr'},
    {name:'Rahilə',surname:'Şəfiyeva',age:21,department:'IT(Web)',university:'ADNSU',email:'rehileshefiyeva95@gmail.com',gender:'Qadın',education:'Magistratura',bday:'19 Avqust'},
    {name:'Aysun',surname:'İsgəndərli',age:23,department:'IT(Web)',university:'DİA',email:'aysunnisgenderli@gmail.com',gender:'Qadın',education:'Bakalavr',bday:'13 Aprel'},
    {name:'Murad',surname:'Tağıyev',age:21,department:'IT(Web)',university:'BANM',email:'muradtaghiyev05@gmail.com',gender:'Kişi',education:'Bakalavr',bday:'18 Avqust'},
    {name:'Səbinə',surname:'Həşimova',age:20,department:'IT(Marketinq)',university:'BDU',email:'sabina032@gmail.com',gender:'Qadın',education:'Bakalavr',bday:'18 Avqust'},
    {name:'Asif',surname:'Hüseynzadə',age:22,department:'IT(Web)',university:'ADNSU',email:'asif.huseynzade2@gmail.com',gender:'Kişi',education:'Bakalavr',bday:'2 Aprel'},
    {name:'Camal',surname:'Zeynalli',age:21,department:'IT(Marketinq)',university:'UNEC',email:'zcamal0@gmail.com',gender:'Kişi',education:'Magistratura',bday:'25 Sentyabr'},
    {name:'Gülnaz',surname:'Teymurlu',age:23,department:'Mühasibatlıq',university:'BMU',email:'gulnazteymurlu@gmail.com',gender:'Qadın',education:'Bakalavr',bday:'7 Aprel'},
    {name:'Nərmin',surname:'Abbaszadə',age:20,department:'IT(Marketinq)',university:'ADNSU',email:'narminabbaszade@gmail.com',gender:'Qadın',education:'Bakalavr',bday:'17 Iyul'},
    {name:'Zərifə',surname:'Qarayeva',age:21,department:'IT(Marketinq)',university:'AZMİU',email:'zarifagarayeva@gmail.com',gender:'Qadın',education:'Mühasibatlıq',bday:'30 Sentyabr'},
    {name:'Namik',surname:'Zöhrabov',age:22,department:'Yol-İnşaat',university:'AZMİU',email:'nzohrabov38@gmail.com',gender:'Kişi',education:'Magistratura',bday:'18 Avqust'},
    {name:'Gülnar',surname:'Məmmədova',age:21,department:'Satınalma',university:'BANM',email:'gulnarmmmdova@gmail.com',gender:'Qadın',education:'Bakalavr',bday:'19 Avqust'},
    {name:'Aydan',surname:'Mehrabova',age:21,department:'Mühasibatlıq',university:'UNEC',email:'aydan.mehrabova@bk.ru',gender:'Qadın',education:'Bakalavr',bday:'19 Avqust'},
    {name:'Tellixanım',surname:'Guliyeva',age:21,department:'IT(Marketinq)',university:'ADNSU',email:'tellikhanim.guliyeva"gmail.com',gender:'Qadın',education:'Bakalavr',bday:'25 Aprel'},
    {name:'Zaminəli',surname:'Rüstəmov',age:20,department:'IT(Web)',university:'BDU',email:'zaminalirustemov@gmail.com',gender:'Kişi',education:'Bakalavr',bday:'25 Sentyabr'},
    {name:'Hacı',surname:'Mehdixanlı',age:20,department:'IT(Web)',university:'ANDSU',email:'haci.mehdixann@gmail.com',gender:'Kişi',education:'Bakalavr',bday:'1 Mart'},
    {name:'Cahangir',surname:'Asgerov',age:20,department:'IT(Web)',university:'ADNSU',email:'esgerovcahangir.12@gmail.com',gender:'Kişi',education:'Bakalavr',bday:'19 Avqust'},
    {name:'Ilkin',surname:'Süleymanov',age:22,department:'IT(Web)',university:'UNEC',email:'ilkin.suleymanov@gmail.com',gender:'Kişi',education:'Magistratura',bday:'18 Avqust'},
    {name:'Şəbnəm',surname:'Məmmədova',age:19,department:'IT(Web)',university:'BDU',email:'shabnam.mmadova@gmail.com',gender:'Qadın',education:'Bakalavr',bday:'20 Avqust'},
    {name:'Zülfiyyə',surname:'Əliyeva',age:20,department:'Mühasibatlıq',university:'UNEC',email:'aliyevazulfiyya02@gmail.com',gender:'Qadın',education:'Bakalavr',bday:'20 Avqust'},
    {name:'Rəvan',surname:'Süleymanlı',age:20,department:'Mühasibatlıq',university:'ADNSU',email:'suleymanliravan@gmail.com',gender:'Kişi',education:'Bakalavr',bday:'20 Avqust'},
    {name:'Zeynəb',surname:'Fətəliyeva',age:25,department:'IT(Marketinq)',university:'ADPU',email:'zeynebfataliyeva4@gmail.com',gender:'Qadın',education:'Bakalavr',bday:'20 Avqust'},
    {name:'Nurlan',surname:'Heydərov',age:20,department:'Yol-İnşaat',university:'BMU',email:'nurlanheyderov07@gmail.com',gender:'Kişi',education:'Bakalavr',bday:'18 Avqust'},
    {name:'Vəsilə',surname:'Mahmudova',age:20,department:'HR',university:'BDU',email:'v.m.030729@gmail.com',gender:'Qadın',education:'Bakalavr',bday:'29 Iyul'},
    {name:'Nəzrin',surname:'İbrahimova',age:20,department:'Mühasibatlıq',university:'BAU',email:'nasrinibrahim2003@gmail.com',gender:'Qadın',education:'Bakalavr',bday:'16 Mart'},
    {name:'Fidan',surname:'Qədirova',age:23,department:'HR',university:'BDU',email:'fidan.303.qedirova@gmail.com',gender:'Qadın',education:'Bakalavr',bday:'19 Avqust'},
    {name:'Sənan',surname:'Zahidov',age:20,department:'Satınalma',university:'UNEC',email:'senan.zahidov023@gmail.com',gender:'Kişi',education:'Bakalavr',bday:'29 Iyul'},
    {name:'Yasəmən',surname:'Sadıqova',age:23,department:'Mühasibatlıq',university:'BAU',email:'jasminşsadigova@gmail.com',gender:'Qadın',education:'Magistratura',bday:'22 Dekabr'},
    {name:'Ağasət',surname:'Məhərrəmov',age:21,department:'IT(Web)',university:'BMU',email:'agasfm90@gmail.com',gender:'Kişi',education:'Bakalavr',bday:'6 Oktyabr'},
    {name:'Gülşən',surname:'Azimli',age:20,department:'IT(Web)',university:'DİA',email:'gulshnşazimli@gmail.com',gender:'Qadın',education:'Bakalavr',bday:'1 Sentyabr'},
    {name:'Ramin',surname:'Allahverdiyev',age:21,department:'IT(Web)',university:'BMU',email:'ra1000allahverdiyev@gmail.com',gender:'Kişi',education:'Bakalavr',bday:'21 Iyun'},
    {name:'Rza',surname:'Osmanov',age:18,department:'Satınalma',university:'AZTU',email:'rzaosmanov17@gmail.com',gender:'Kişi',education:'Bakalavr',bday:'20 Avqust'},
    {name:'Ülkər',surname:'Hacıyeva',age:19,department:'Mühasibatlıq',university:'UNEC',email:'ulkrhaciyeva9@gmail.com',gender:'Qadın',education:'Bakalavr',bday:'21 Avqust'},
    {name:'Fərid',surname:'Nağıyev',age:19,department:'IT(Marketinq)',university:'ADNSU',email:'feridf375@gmail.com',gender:'Kişi',education:'Bakalavr',bday:'21 Avqust'},
    {name:'Ayişə',surname:'Heydərli',age:19,department:'Mühasibatlıq',university:'DİA',email:'heydarliayisha@gmail.com',gender:'Qadın',education:'Bakalavr',bday:'21 Avqust'},
    {name:'Fatima',surname:'Mammadova',age:20,department:'IT(Web)',university:'GDU',email:'fatimemammedova9@gmail.com',gender:'Qadın',education:'Bakalavr',bday:'9 Iyul'},
    {name:'Nurtac',surname:'Süleymanlı',age:22,department:'HR',university:'UNEC',email:'suleymanlinurn@gmail.com',gender:'Qadın',education:'Magistratura',bday:'17 Fevral'},
    {name:'Ziyafət',surname:'Soltanzadə',age:19,department:'HR',university:'Xəzər',email:'ziyafat.soltan@gmail.com',gender:'Qadın',education:'Bakalavr',bday:'21 Avqust'},
    {name:'Gülnar',surname:'Qasımova',age:23,department:'HR',university:'UNEC',email:'gl.qasimova1999@gmail.com',gender:'Qadın',education:'Bakalavr',bday:'21 Avqust'},
    {name:'Turac',surname:'Tahirova',age:21,department:'Mühasibatlıq',university:'UNEC',email:'tahirovaturac7666@gmail.com',gender:'Qadın',education:'Bakalavr',bday:'20 Avqust'}
]
const nowdate = document.querySelector('.date-today')
let now = new Date();
let gun = now.getDate(),
    ay = now.getMonth(),
    il = now.getFullYear(),
    gunler = now.getDay();

let aylar = [
    'Yanvar',
    'Fevral',
    'Mart',
    'Aprel',
    'May',
    'Iyun',
    'Iyul',
    'Avqust',
    'Sentyabr',
    'Oktyabr',
    'Noyabr',
    'Dekabr'
];

let gunAdlari = [
    'Bazar Ertəsi',
    'Çərşəmbə axşamı',
    'Çərşəmbə',
    'Cümə axşamı',
    'Cümə',
    'Şəmbə',
    'Bazar'
];
let cariGun = `${gun} ${aylar[ay]} ${il} ${gunAdlari[gunler-1]}`;
let newUsers = []
const cardbody = document.querySelector('.card-body');

for(let user of users){
    let month = user.bday.split(' ')
    if(month[1] == aylar[ay]){
        newUsers.push(user)
    }
}


const sortedUsers = newUsers.sort((a, b) => {
  const [dayA, monthA] = a.bday.split(' ');
  const [dayB, monthB] = b.bday.split(' ');

  // Compare months first
  if (monthA !== monthB) {
    const months = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avqust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'];
    return months.indexOf(monthA) - months.indexOf(monthB);
  }
  
  // If months are equal, compare days
  return parseInt(dayA) - parseInt(dayB);
});
let count = 0;
for(let user of sortedUsers){
    let fullName = `${user.name} ${user.surname}`
    count++;
    let tr = `
                <ul>
                    <li>
                        <h6>
                            ${fullName}
                        </h6>
                        <p>
                            ${user.bday}
                        </p>
                    </li>
                </ul>
            `
            if(count ==12){
                break;
            }
    cardbody.insertAdjacentHTML('beforeend',tr)
}

if(count==0){
    let tr = 
    `<ul>
        <li>
            <p>
                Bu gün heç bir istifadəçinin ad günü deyil.
            </p>
        </li>
     </ul>`
    cardbody.insertAdjacentHTML('beforeend',tr)
}

let events = [
    {date:'2023-08-15',eventName:'Danau Tobanın Hekayəsi (Musiqili Dram)',location:'Bakı'},
    {date:'2023-08-18',eventName:'Bakı Beynəlxalq Caz Festivalı',location:'Bakı'},
    {date:'2023-08-25',eventName:'Qəbələ Musiqi Festivalı',location:'Qəbələ'},
    {date:'2023-09-06',eventName:'Nar bayramı',location:'Göyçay'},
    {date:'2023-09-07',eventName:'Qız Qalası Beynəlxalq İncəsənət Festivalı)',location:'Bakı'},
    {date:'2023-09-21',eventName:'Alma festivalı',location:'Quba'},
    {date:'2023-09-29',eventName:'Qarabağı bərpa et 2023',location:'Qarabağ'},
    {date:'2023-10-04',eventName:'Kitab Sərgisi 2023',location:'Bakı'},
    {date:'2023-10-23',eventName:'Danau Tobanın Hekayəsi (Musiqili Dram)',location:'Bakı'},
    {date:'2023-11-03',eventName:'Bakı Beynəlxalq Caz Festivalı',location:'Bakı'},
    {date:'2023-11-13',eventName:'Qəbələ Musiqi Festivalı',location:'Qəbələ'},
    {date:'2023-11-15',eventName:'Nar bayramı',location:'Göyçay'},
    {date:'2023-11-30',eventName:'Qız Qalası Beynəlxalq İncəsənət Festivalı)',location:'Bakı'},
    {date:'2023-12-04',eventName:'Alma festivalı',location:'Quba'},
    {date:'2023-12-08',eventName:'Qarabağı bərpa et 2023',location:'Qarabağ'},
    {date:'2023-12-29',eventName:'Kitab Sərgisi 2023',location:'Bakı'},
]
const tbody = document.querySelector('#tablebody');
let say = 1;
for(let event of events){
    let tr = `
        <tr>
            <td>${say}</td>
            <td>${event.date}</td>
            <td>${event.eventName}</td>
            <td>${event.location}</td>
        </tr>`
    say++;
    tbody.insertAdjacentHTML('beforeend',tr)
}
new DataTable('#example');
