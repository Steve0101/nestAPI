    let BASE_URL = 'http://localhost:3000/';
    
    window.onload = function(){
        this.showClients(BASE_URL);

        getAnimals((status, animals) => {
            showAnimals(animals);
        })
        getValues((status, values) => {
            showValues(values);
        }) 
    }

/*     class Client{
        constructor(id,name,phone,cpf){
            this.id = id;
            this.name = name;
            this.phone = phone;
            this.cpf = cpf;
        }
    } */

    function showClients(BASE_URL){

        getClients(BASE_URL, function(status,data){

            var html = "<section>"

            for(var i=0;i<data.length;i++){
                var id = data[i].id;
                var name = data[i].name;
                var age = data[i].age;
                var phone = data[i].phone;
                var cpf = data[i].cpf;

                html += "<article>" + 
                "<h2>Cliente #" + id + ":</h2>" +
                "<p>Nome: "+ name +"</p>" +
                "<p>ID: " + id + "</p>" +
                "<p>Idade: " + age + "</p>" +
                "<p>CPF: " + cpf + "</p>" +
                "<p>Número: " + phone + "</p>" +
                "</article>";

            }
        html += "</section>"
        document.getElementById("clients").innerHTML += html;

        });
    }


    var img1 = 'img/Apollo.jpg';
    var img2 = 'img/Frank.jpg';
    var img3 = 'img/Snowball.jpg';
    var images = [img1, img2, img3];

    function showAnimals(animals){
        var html = "<section>"
        for(var i=1;i<(animals.length)+1;i++){
            html += "<article>" + 
            "<h2>Animal #" + i + ":</h1>" +
            "<p>Nome: " + animals[i-1].name + "</p>" +
            "<p>raça: " + animals[i-1].breed + "</p>" +
            "<img src=" + images[i-1] + ">" + 
            "</article>";
        }
        html += "</section>"

        document.getElementById("animals").innerHTML += html;
    }

    function showValues(values){
        var html = "<section>"
        for(var i=1;i<(values.length)+1;i++){
            html += "<article>" + 
            "<h2>Medida #" + i + ":</h2>" +
            "<p>Altura: " + values[i-1].heigth + "cm</p>" +
            "<p>Peso: " + values[i-1].weigth + "kg</p>" +
            "<p>Idade: " + values[i-1].age + "</p>" +
            "</article>";    
        }
        html += "</section>"

        document.getElementById("values").innerHTML += html;
    }

    function client(){
        alert("Cadastrar cliente");
    }

    function animal(){
        alert("Registrar nome e raça do animal");
    }

    function values(){
        alert("Resgistra medidas do animal");
    }

function getClients(BASE_URL, callback) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', BASE_URL + "client", true);
    xhr.responseType = 'json';
    
    xhr.onload = function() {
    
        var status = xhr.status;
        
        if (status == 200) {
            //callback(null, xhr.response);
            callback(status, xhr.response);
        } else {
            //callback(status);
            onsole.log('DEU RUIM!' + status);
        }
    };
    
    xhr.send();
};

function getAnimals(callback) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', BASE_URL + "animal", true);
    xhr.responseType = 'json';
    
    xhr.onload = function() {
    
        var status = xhr.status;
        
        if (status == 200) {
            //callback(null, xhr.response);
            callback(status, xhr.response)
        } else {
            //callback(status);
            onsole.log('DEU RUIM!' + status);
        }
    };
    
    xhr.send();
};

 function getValues(callback) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', BASE_URL + "animal-values", true);
    xhr.responseType = 'json';
    
    xhr.onload = function() {
    
        var status = xhr.status;
        
        if (status == 200) {
            //callback(null, xhr.response);
            callback(status, xhr.response);
        } else {
            //callback(status);
            onsole.log('DEU RUIM!' + status);
        }
    };
    
    xhr.send();
};

