
// Students Data

const s_info = [
    {
        roll    :  01,
        name    : 'Rasel',
        fName   : 'Ataur',
        mName   : 'Rubi',
        bn      : 55,
        en      : 45,
        mth     : 45,
        rel     : 45,
        sc      : 45,
        ict     : 45,
    }, 
    {
        roll    :  02,
        name    : 'Munna',
        fName   : 'Liyakot',
        mName   : 'amena',
        bn      : 75,
        en      : 85,
        mth     : 74,
        rel     : 98,
        sc      : 68,
        ict     : 75,
    },  
    {
        roll    :  03,
        name    : 'Rion',
        fName   : 'Rofiq',
        mName   : 'Rohima',
        bn      : 57,
        en      : 58,
        mth     : 47,
        rel     : 89,
        sc      : 75,
        ict     : 58,
    },
    {
        roll    :  04,
        name    : 'Rion',
        fName   : 'Rofiq',
        mName   : 'Rohima',
        bn      : 59,
        en      : 54,
        mth     : 42,
        rel     : 88,
        sc      : 77,
        ict     : 85,
    },
    {
        roll    :  05,
        name    : 'Kamal',
        fName   : 'Milon',
        mName   : 'Rokeya',
        bn      : 85,
        en      : 48,
        mth     : 95,
        rel     : 25,
        sc      : 77,
        ict     : 85,
    },
    {
        roll    :  06,
        name    : 'Shamim',
        fName   : 'Lichu',
        mName   : 'Kohinur',
        bn      : 85,
        en      : 98,
        mth     : 95,
        rel     : 98,
        sc      : 77,
        ict     : 85,
    },
    {
        roll    :  07,
        name    : 'Kuddus',
        fName   : 'Korim',
        mName   : 'Kohinur',
        bn      : 95,
        en      : 98,
        mth     : 95,
        rel     : 98,
        sc      : 97,
        ict     : 95,
    }, 
    {
        roll    :  08,
        name    : 'Rohima',
        fName   : 'Korim',
        mName   : 'Kohinur',
        bn      : 75,
        en      : 98,
        mth     : 85,
        rel     : 98,
        sc      : 97,
        ict     : 95,
    },
    {
        roll    :  09,
        name    : 'Jarin',
        fName   : 'Rohim',
        mName   : 'Rohima',
        bn      : 75,
        en      : 58,
        mth     : 85,
        rel     : 78,
        sc      : 97,
        ict     : 55,
    },
    {
        roll    :  10,
        name    : 'Tasnim',
        fName   : 'Rohim',
        mName   : 'Rohima',
        bn      : 75,
        en      : 68,
        mth     : 85,
        rel     : 78,
        sc      : 97,
        ict     : 55,
    },
];


// Phone Book 

const phone_book = [
    {
        id        : 01,
        name      : 'Rasel',
        phone     : '01745858595',
        gender    : 'Male',
        location  : 'Rangpur'
        
    },
    {
        id        : 02,
        name      : 'Jarin',
        phone     : '01896541021',
        gender    : 'Female',
        location  : 'Dhaka'
        
    },
    {
        id        : 03,
        name      : 'Rokeya',
        phone     : '01965854785',
        gender    : 'Female',
        location  : 'Dhaka'
        
    },
    {
        id        : 04,
        name      : 'Robiul',
        phone     : '01785985854',
        gender    : 'Male',
        location  : 'Dinajpur'
        
    },
    {
        id        : 05,
        name      : 'Badhon',
        phone     : '01785985854',
        gender    : 'Male',
        location  : 'Rangpur'
        
    },
    {
        id        : 06,
        name      : 'Biplob',
        phone     : '01785985858',
        gender    : 'Male',
        location  : 'lalbag'
        
    },
    {
        id        : 07,
        name      : 'Momin',
        phone     : '01785985365',
        gender    : 'Male',
        location  : 'Mirpur'
        
    },
    {
        id        : 08,
        name      : 'Habib',
        phone     : '01785989587',
        gender    : 'Male',
        location  : 'Parkmor'
        
    },
    {
        id        : 09,
        name      : 'Pollob',
        phone     : '01598585968',
        gender    : 'Male',
        location  : 'Payra'
        
    },
    {
        id        : 10,
        name      : 'Pollobi',
        phone     : '01896547896',
        gender    : 'Female',
        location  : 'Chakbazar'
        
    },
]
 


// Dev Students Data 

const dev_students = [
    {
        id          :  01,
        name        : 'Rasel',
        address     : 'Rangpur',
        skill       : 'MERN Stack',
        salary      :  100,
    },  
    {
        id          :  02,
        name        : 'Mamun',
        address     : 'Dhaka',
        skill       : 'Laravel',
        salary      :  200,
    },   
    {
        id          :  03,
        name        : 'Kamal',
        address     : 'Dhaka',
        skill       : 'Golan',
        salary      : 300,
    },  
    {
        id          :  04,
        name        : 'Rofiq',
        address     : 'Rajshahi',
        skill       : 'Django',
        salary      :  100,
    },    
    {
        id          :  05,
        name        : 'Ridoy',
        address     : 'Rangpur',
        skill       : 'WordPress',
        salary      :  200,
    },    
    {
        id          :  06,
        name        : 'Badhon',
        address     : 'Rangpur',
        skill       : 'Java',
        salary      :  200,
    },   
    {
        id          :  07,
        name        : 'Ripon',
        address     : 'Dinajpur',
        skill       : 'MERN Stack',
        salary      :  200,
    },
];


//  object to json stringify

let s_info_String = JSON.stringify(s_info);
let phone_book_String = JSON.stringify(phone_book);
let dev_students_String = JSON.stringify(dev_students);

const allData = [s_info_String, phone_book_String, dev_students_String]

console.log(allData);