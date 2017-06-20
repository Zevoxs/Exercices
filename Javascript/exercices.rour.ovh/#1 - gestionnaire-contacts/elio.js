// Users stored in JSON objects
var userData = [{
        "firstName": "Rosalie",
        "lastName": "Hage",
        "phone": "0470326941"
    },
    {
        "firstName": "zoe",
        "lastName": "Hage",
        "phone": "0470326942"
    }

]

// Object with functions to administrate
var User = {

    "create": function () {
        fName = prompt('Entrez le prenom du contact : ', 'Sans Prenom');
        lName = prompt('Entrez le nom du contact : ', 'Sans Nom');
        phone = prompt('Entrez le numero de telephone du contact : ', 'Sans Numero');

        if (phone.length == 10) {
            var newUser = {
                "firstName": fName,
                "lastName": lName,
                "phone": phone
            }

            userData.push(newUser);
            console.log("Utilisateur bien enregistré")
        } else {
            console.log("numero de telephone incorrect")
        }
        home();

    },

    "list": function () {
        for (i = 0; i < userData.length; i++) {
            console.log(" /=== " + i + "   " + userData[i].firstName + " " + userData[i].lastName + "\n\t " + userData[i].phone)
        }
        home();
    }
}

function home() {
    console.log("Que voulez vous faire ? \n \t1.\tAjouter Un Utilisateur\n\t2.\tLister les utilisateurs\n\t0.\tQuitter")
    answ = prompt("Choisissez une option : ")

    switch (answ) {
        case "1":
            User.create();
            break;
        case "2":
            User.list();
            break;
        case "0":
            Console.log("Bonne journée l'ami :)")
            break;
        default:
            console.log("Rechargez la page...")
            break;

    }
}

home();