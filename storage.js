class Storage{

    static getSearchedUsersFromStorage(){
        // tüm kullanıcıları al.

        let users;

        if(localStorage.getItem("searched")===null){
            users = [];
        }
        else{
            users = JSON.parse(localStorage.getItem("searched"));
        }
        return users;
    }

    static addSearchedUserToStorage(username){
        // kullanıcı ekle. 
        let users = this.getSearchedUsersFromStorage();

        // index of ile sorgulama sonuç -1 ise  username "users"ta yok
        if (users.indexOf(username)===-1){
            users.push(username);
        }
        else{
            ui.showError("**** Bu kullanıcı zaten kayıtlı...****");
        }
        localStorage.setItem("searched",JSON.stringify(users));




    }

    static clearAllSearchedUsersFromStorage(){
        // tüm kullanıcıları silmek.

        localStorage.removeItem("searched");
    }

}