const users = [
    {name:'Muxammed',surname:'Layicov',age:20,department:'IT(Web)',university:'BMU',email:'layicovmuxammed@gmail.com',gender:'Kişi',education:'Bakalavr'},
    {name:'Əfsər',surname:'Mehdizadə',age:20,department:'Satınalma',university:'BDU',email:'mehdizadefser@gmail.com',gender:'Kişi',education:'Bakalavr'},
    {name:'Nərmin',surname:'Ağamalıyeva',age:20,department:'Satınalma',university:'BDU',email:'agamaliyevanrmin@gmail.com',gender:'Qadın',education:'Bakalavr'},
    {name:'Hüseyn',surname:'Nəsirov',age:20,department:'HR',university:'BDU',email:'huseynnesirov@gmail.com',gender:'Kişi',education:'Bakalavr'},
    {name:'Elgiz',surname:'Quluzadə',age:21,department:'Satınalma',university:'UNEC',email:'elgizquluzad@gmail.com',gender:'Kişi',education:'Bakalavr'},
    {name:'Anar',surname:'Əkbərli',age:23,department:'IT(Marketinq)',university:'AZMIU',email:'theakbarov001@gmail.com',gender:'Kişi',education:'Bakalavr'},
    {name:'Aytən',surname:'Bayramova',age:23,department:'IT(Web)',university:'BDU',email:'aytanbayramova@gmail.com',gender:'Qadın',education:'Magistratura'},
    {name:'Lalə',surname:'Haşimli',age:20,department:'IT(Web)',university:'BMU',email:'lalahashimli@gmail.com',gender:'Qadın',education:'Bakalavr'},
    {name:'Zabilə',surname:'Quliyeva',age:23,department:'HR',university:'AZTU',email:'zabilaquliyevaa@gmail.com',gender:'Qadın',education:'Magistratura'},
    {name:'Mirseyid',surname:'Seyidli',age:21,department:'Mühasibatlıq',university:'ATMU',email:'mirseyids.seyidli@gmail.com',gender:'Kişi',education:'Bakalavr'},
    {name:'Ceyhun',surname:'Zaman',age:19,department:'IT(Marketinq)',university:'UNEC',email:'ceyhunzamano@gmail.com',gender:'Kişi',education:'Bakalavr'},
    {name:'Aysel',surname:'Abdullayeva',age:20,department:'IT(Web)',university:'ADNSU',email:'ayselabdullayeva657@gmail.com',gender:'Qadın',education:'Bakalavr'},
    {name:'Xəyalə',surname:'Əliyeva',age:20,department:'IT(Web)',university:'ADNSU',email:'xylaliyeva@gmail.com',gender:'Qadın',education:'Bakalavr'},
    {name:'Lalə',surname:'Əliyeva',age:19,department:'HR',university:'ADU',email:'lale.aliyeva11111@gmail.com',gender:'Qadın',education:'Bakalavr'},
    {name:'Maya',surname:'Quliyeva',age:19,department:'IT(Marketinq)',university:'UNEC',email:'mayaquliyeva034@gmail.com',gender:'Qadın',education:'Bakalavr'},
    {name:'Lamiyə',surname:'Samandarzadə',age:21,department:'Mühasibatlıq',university:'UNEC',email:'lamiyasamandarzada@gmail.com',gender:'Qadın',education:'Bakalavr'},
    {name:'Anar',surname:'Kərimli',age:21,department:'IT(Web)',university:'AZTU',email:'anarrkerimli@gmail.com',gender:'Kişi',education:'Magistratura'},
    {name:'Tamara',surname:'Mammadova',age:22,department:'HR',university:' UNEC',email:'tamarammdva0504@gmail.com',gender:'Qadın',education:'Magistratura'},
    {name:'Nərmin',surname:'Hüseynzadə',age:20,department:'IT(Web)',university:'ADNSU',email:'narminhv2@gmail.com',gender:'Qadın',education:'Bakalavr'},
    {name:'Şəlalə',surname:'Sanılı',age:19,department:'IT(Marketinq)',university:'UNEC',email:'slalsanili@gmail.com',gender:'Qadın',education:'Bakalavr'},
    {name:'Selcan',surname:'Adilova',age:19,department:'Mühasibatlıq',university:'UNEC',email:'selcanadilova@gmail.com',gender:'Qadın',education:'Bakalavr'},
    {name:'Rahilə',surname:'Şəfiyeva',age:21,department:'IT(Web)',university:'ADNSU',email:'rehileshefiyeva95@gmail.com',gender:'Qadın',education:'Magistratura'},
    {name:'Aysun',surname:'İsgəndərli',age:23,department:'IT(Web)',university:'DİA',email:'aysunnisgenderli@gmail.com',gender:'Qadın',education:'Bakalavr'},
    {name:'Murad',surname:'Tağıyev',age:21,department:'IT(Web)',university:'BANM',email:'muradtaghiyev05@gmail.com',gender:'Kişi',education:'Bakalavr'},
    {name:'Səbinə',surname:'Həşimova',age:20,department:'IT(Marketinq)',university:'BDU',email:'sabina032@gmail.com',gender:'Qadın',education:'Bakalavr'},
    {name:'Asif',surname:'Hüseynzadə',age:22,department:'IT(Web)',university:'ADNSU',email:'asif.huseynzade2@gmail.com',gender:'Kişi',education:'Bakalavr'},
    {name:'Camal',surname:'Zeynalli',age:21,department:'IT(Marketinq)',university:'UNEC',email:'zcamal0@gmail.com',gender:'Kişi',education:'Magistratura'},
    {name:'Gülnaz',surname:'Teymurlu',age:23,department:'Mühasibatlıq',university:'BMU',email:'gulnazteymurlu@gmail.com',gender:'Qadın',education:'Bakalavr'},
    {name:'Nərmin',surname:'Abbaszadə',age:20,department:'IT(Marketinq)',university:'ADNSU',email:'narminabbaszade@gmail.com',gender:'Qadın',education:'Bakalavr'},
    {name:'Zərifə',surname:'Qarayeva',age:21,department:'IT(Marketinq)',university:'AZMİU',email:'zarifagarayeva@gmail.com',gender:'Qadın',education:'Mühasibatlıq'},
    {name:'Namik',surname:'Zöhrabov',age:22,department:'Yol-İnşaat',university:'AZMİU',email:'nzohrabov38@gmail.com',gender:'Kişi',education:'Magistratura'},
    {name:'Gülnar',surname:'Məmmədova',age:21,department:'Satınalma',university:'BANM',email:'gulnarmmmdova@gmail.com',gender:'Qadın',education:'Bakalavr'},
    {name:'Aydan',surname:'Mehrabova',age:21,department:'Mühasibatlıq',university:'UNEC',email:'aydan.mehrabova@bk.ru',gender:'Qadın',education:'Bakalavr'},
    {name:'Tellixanım',surname:'Guliyeva',age:21,department:'IT(Marketinq)',university:'ADNSU',email:'tellikhanim.guliyeva"gmail.com',gender:'Qadın',education:'Bakalavr'},
    {name:'Zaminəli',surname:'Rüstəmov',age:20,department:'IT(Web)',university:'BDU',email:'zaminalirustemov@gmail.com',gender:'Kişi',education:'Bakalavr'},
    {name:'Hacı',surname:'Mehdixanlı',age:20,department:'IT(Web)',university:'ANDSU',email:'haci.mehdixann@gmail.com',gender:'Kişi',education:'Bakalavr'},
    {name:'Cahangir',surname:'Asgerov',age:20,department:'IT(Web)',university:'ADNSU',email:'esgerovcahangir.12@gmail.com',gender:'Kişi',education:'Bakalavr'},
    {name:'Ilkin',surname:'Süleymanov',age:22,department:'IT(Web)',university:'UNEC',email:'ilkin.suleymanov@gmail.com',gender:'Kişi',education:'Magistratura'},
    {name:'Şəbnəm',surname:'Məmmədova',age:19,department:'IT(Web)',university:'BDU',email:'shabnam.mmadova@gmail.com',gender:'Qadın',education:'Bakalavr'},
    {name:'Zülfiyyə',surname:'Əliyeva',age:20,department:'Mühasibatlıq',university:'UNEC',email:'aliyevazulfiyya02@gmail.com',gender:'Qadın',education:'Bakalavr'},
    {name:'Rəvan',surname:'Süleymanlı',age:20,department:'Mühasibatlıq',university:'ADNSU',email:'suleymanliravan@gmail.com',gender:'Kişi',education:'Bakalavr'},
    {name:'Zeynəb',surname:'Fətəliyeva',age:25,department:'IT(Marketinq)',university:'ADPU',email:'zeynebfataliyeva4@gmail.com',gender:'Qadın',education:'Bakalavr'},
    {name:'Nurlan',surname:'Heydərov',age:20,department:'Yol-İnşaat',university:'BMU',email:'nurlanheyderov07@gmail.com',gender:'Kişi',education:'Bakalavr'},
    {name:'Vəsilə',surname:'Mahmudova',age:20,department:'HR',university:'BDU',email:'v.m.030729@gmail.com',gender:'Qadın',education:'Bakalavr'},
    {name:'Nəzrin',surname:'İbrahimova',age:20,department:'Mühasibatlıq',university:'BAU',email:'nasrinibrahim2003@gmail.com',gender:'Qadın',education:'Bakalavr'},
    {name:'Fidan',surname:'Qədirova',age:23,department:'HR',university:'BDU',email:'fidan.303.qedirova@gmail.com',gender:'Qadın',education:'Bakalavr'},
    {name:'Sənan',surname:'Zahidov',age:20,department:'Satınalma',university:'UNEC',email:'senan.zahidov023@gmail.com',gender:'Kişi',education:'Bakalavr'},
    {name:'Yasəmən',surname:'Sadıqova',age:23,department:'Mühasibatlıq',university:'BAU',email:'jasminşsadigova@gmail.com',gender:'Qadın',education:'Magistratura'},
    {name:'Ağasət',surname:'Məhərrəmov',age:21,department:'IT(Web)',university:'BMU',email:'agasfm90@gmail.com',gender:'Kişi',education:'Bakalavr'},
    {name:'Gülşəm',surname:'Azimli',age:20,department:'IT(Web)',university:'DİA',email:'gulshnşazimli@gmail.com',gender:'Qadın',education:'Bakalavr'},
    {name:'Ramin',surname:'Allahverdiyev',age:21,department:'IT(Web)',university:'BMU',email:'ra1000allahverdiyev@gmail.com',gender:'Kişi',education:'Bakalavr'},
    {name:'Rza',surname:'Osmanov',age:18,department:'Satınalma',university:'AZTU',email:'rzaosmanov17@gmail.com',gender:'Kişi',education:'Bakalavr'},
    {name:'Ülkər',surname:'Hacıyeva',age:19,department:'Mühasibatlıq',university:'UNEC',email:'ulkrhaciyeva9@gmail.com',gender:'Qadın',education:'Bakalavr'},
    {name:'Fərid',surname:'Nağıyev',age:19,department:'IT(Marketinq)',university:'ADNSU',email:'feridf375@gmail.com',gender:'Kişi',education:'Bakalavr'},
    {name:'Ayişə',surname:'Heydərli',age:19,department:'Mühasibatlıq',university:'DİA',email:'heydarliayisha@gmail.com',gender:'Qadın',education:'Bakalavr'},
    {name:'Fatima',surname:'Mammadova',age:20,department:'IT(Web)',university:'GDU',email:'fatimemammedova9@gmail.com',gender:'Qadın',education:'Bakalavr'},
    {name:'Nurtac',surname:'Süleymanlı',age:22,department:'HR',university:'UNEC',email:'suleymanlinurn@gmail.com',gender:'Qadın',education:'Magistratura'},
    {name:'Ziyafət',surname:'Soltanzadə',age:19,department:'HR',university:'Xəzər',email:'ziyafat.soltan@gmail.com',gender:'Qadın',education:'Bakalavr'},
    {name:'Gülnar',surname:'Qasımova',age:23,department:'HR',university:'UNEC',email:'gl.qasimova1999@gmail.com',gender:'Qadın',education:'Bakalavr'},
    {name:'Turac',surname:'Tahirova',age:21,department:'Mühasibatlıq',university:'UNEC',email:'tahirovaturac7666@gmail.com',gender:'Qadın',education:'Bakalavr'}
]
const tbody = document.querySelector('#tablebody');
let id = 1000;
for(let user of users){
    let fullName = `${user.name} ${user.surname}`
    let tr = `
        <tr>
            <td>${id}</td>
            <td>${fullName}</td>
            <td>${user.department}</td>
            <td>${user.education}</td>
            <td>${user.email}</td>
            <td>${user.university}</td>
            <td>${user.gender}</td>
            <td>${user.age}</td>
        </tr>`
    id++;
    tbody.insertAdjacentHTML('beforeend',tr)
}
new DataTable('#example');
