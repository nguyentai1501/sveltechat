function newGuid(){  
    function S4() {  
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);  
    }  
    return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();  
 }  

async function getHistoryChats(){

    return [
        {
            id : newGuid(),
            fullname : 'Angelina Jolie',
            avatar : 'https://randomuser.me/api/portraits/women/61.jpg',
            message: 'Ok, see you at the subway in a bit',
            lastTime: '12/12'
        },
        {
            id : newGuid(),
            avatar : 'https://randomuser.me/api/portraits/men/55.jpg',
            fullname : 'Joinny Henry',
            message: 'Hello, How are you today?',
            lastTime: '10/12'
        },
        {
            id : newGuid(),
            fullname : 'Marry',
            avatar : 'https://randomuser.me/api/portraits/women/63.jpg',
            message: 'Ok, see you at the subway in a bit',
            lastTime: '12/12'
        },
        {
            id : newGuid(),
            avatar : 'https://randomuser.me/api/portraits/women/75.jpg',
            fullname : 'Nguyen Hoa Ly',
            message: 'Hello, How are you today?',
            lastTime: '10/12'
        },
        {
            id : newGuid(),
            fullname : 'Jolie Nguyen',
            avatar : 'https://randomuser.me/api/portraits/women/61.jpg',
            message: 'What your name?',
            lastTime: '12/12'
        },
        {
            id : newGuid(),
            avatar : 'https://randomuser.me/api/portraits/men/55.jpg',
            fullname : 'Joinny Tri Dung',
            message: 'Hey, Did you know me?',
            lastTime: '10/12'
        },
        {
            id : newGuid(),
            fullname : 'Angelina Ho',
            avatar : 'https://randomuser.me/api/portraits/women/31.jpg',
            message: 'Ok, I will be come now',
            lastTime: '12/12'
        },
        {
            id : newGuid(),
            avatar : 'https://randomuser.me/api/portraits/men/55.jpg',
            fullname : 'Bao Bolero',
            message: 'Hello, How are you today?',
            lastTime: '10/12'
        }
    ]
}

/*Receive new msg from Socket  */
async function randomRecentChats(){
    let gender = ''
    const random = Math.floor(Math.random() * 100)
    if(random %2 === 0){
        gender = 'men'
    }
    else{
        gender = 'women'
    }
    return {
        id : newGuid(),
        avatar : `https://randomuser.me/api/portraits/${gender}/${random}.jpg`,
        fullname : 'Bao Bolero',
        message: 'Hello, How are you today?',
        lastTime: '10/12',
        isNew : true
    }
}

export {getHistoryChats, randomRecentChats}