export class Consulta {
    constructor(){

    }

    personajes(){
        fetch(`https://rickandmortyapi.com/api/character`)//recibe un parametro una URL
        .then(respuesta => respuesta.json())//LOS DATOS RECIBIDOS SON CONVERTIDOS A FORMATO JSON
        .then(respuesta => {//SE RECIBEN LOS DATOS EN FORMATO JSON
            // console.log(respuesta);//SE MUESTRAN LOS DATOS OBTENIDOS
            let {results} = respuesta;//se obtinen los personajes
            let personajes = ``;
            let contador = 0;
            results.map(personaje => {//se recorre el arreglo de personajes
                let {created,gender,id,image,location,name,origin,species,status,url} = personaje;
                if(contador < 10)
                personajes += `
                <div class="card mt-2" style="background-color: black;" data-aos="zoom-in"
                data-aos-duration="4000">
                    <div class="card-title text-center" style="color:pink ;">
                        <h1 class="display-4">${name} | No. ${id}</h1>
                    </div>
                    <div class="card-body" style="color: white ;">
                        <div class="row">
                            <div class="col-md-8 align-self-center">
                                <p><b>Creacion: </b>${created}</p>
                                <p><b>Genero: </b>${gender}</p>
                                <p><b>Localizacion: </b>${location.name}</p>
                                <p><b>Origen: </b>${origin.name}</p>
                                <p><b>Especie: </b>${species}</p>
                                <p><b>Estado: </b>${status}</p>
                            </div>
                            <div class="col-md-4 align-self-center">
                                <img class="img-fluid mb-3 rounded" src="${image}" alt="" data-aos="zoom-in">
                            </div>
                        </div>
                    </div>
                </div>
                `;
                contador++; 
 
            });
            $(`#personajes`).html(personajes);
        })
        .catch(error => {//SE ATRAPA UN ERROR EN CASO DE EXISTIR
            console.log(error);//SE MUESTRA EL ERROR
        });
    }

    ubicaciones(){
        fetch(`https://rickandmortyapi.com/api/location`)//recibe un parametro una URL
        .then(respuesta1 => respuesta1.json())//LOS DATOS RECIBIDOS SON CONVERTIDOS A FORMATO JSON
        .then(respuesta1 => {//SE RECIBEN LOS DATOS EN FORMATO JSON
            console.log(respuesta1);
            let {results} = respuesta1;//se obtinen los personajes
            //console.log(results);//SE MUESTRAN LOS DATOS OBTENIDOS
            let ubicaciones = ``;
            let contador = 0;
            results.map(ubicacion => {//se recorre el3 arreglo de personajes
                let {id,name,type,dimension,residents,url,created} = ubicacion;
                let characters1 = ["Rick Sanchez","Morty Smith","Summer Smith","Beth Smith","Jerry Smith","Abadango Cluster Princess","Abradolf Lincler"];
                if(contador < 10)
                ubicaciones += `
                <div class="card mt-2" style="background-color: black;" data-aos="zoom-in"
                data-aos-duration="4000">
                    <div class="card-title text-center" style="color: rgb(139, 25, 139);">
                        <h1 class="display-4">${name} | No. ${id}</h1>
                    </div>
                    <div class="card-body" style="color: white ;">
                        <div class="row">
                            <div class="col-md-8 align-self-center">
                                <p><b>Tipo: </b>${type}</p>
                                <p><b>Dimension: </b>${dimension}</p>
                                <p><b>Residente: </b>${characters1}</p>
                                <p><b>Creado: </b>${created}</p>
                            </div>
                            <div class="col-md-4 align-self-center" alt="" data-aos="zoom-in">
                                
                            </div>
                        </div>
                    </div>
                </div>
                `;
                contador++;
                
            });
            $(`#hello`).html(ubicaciones);
        })
        .catch(error => {//SE ATRAPA UN ERROR EN CASO DE EXISTIR
            console.log(error);//SE MUESTRA EL ERROR
        });
    }
    episodios(){
        fetch(`https://rickandmortyapi.com/api/episode`)//recibe un parametro una URL
        .then(respuesta2 => respuesta2.json())//LOS DATOS RECIBIDOS SON CONVERTIDOS A FORMATO JSON
        .then(respuesta2 => {//SE RECIBEN LOS DATOS EN FORMATO JSON
            console.log(respuesta2);
            let {results} = respuesta2;//se obtinen los personajes
            //console.log(results);//SE MUESTRAN LOS DATOS OBTENIDOS
            let episodios = ``;
            let contador = 0;
            results.map(episodio => {//se recorre el3 arreglo de personajes
                let {id,name,air_date,episode,characters,url,created} = episodio;
                let characters2 = ["Rick Sanchez","Morty Smith","Summer Smith","Beth Smith","Jerry Smith","Abadango Cluster Princess","Abradolf Lincler"];
                if(contador < 10)
                episodios += `
                <div class="card mt-2" style="background-color: black;" data-aos="zoom-in"
                data-aos-duration="4000">
                    <div class="card-title text-center" style="color: greenyellow;">
                        <h1 class="display-4">${name} | No. ${id}</h1>
                    </div>
                    <div class="card-body" style="color: white ;">
                        <div class="row">
                            <div class="col-md-8 align-self-center">
                                <p><b>Fecha: </b>${air_date}</p>
                                <p><b>epsiodio: </b>${episode}</p>
                                <p><b>personajes: </b>${characters2}</p>
                                <p><b>Creado: </b>${created}</p>
                            </div>
                            <div class="col-md-4 align-self-center" alt="" data-aos="zoom-in">
                                
                            </div>
                        </div>
                    </div>
                </div>
                `;
                contador++;
                
            });
            $(`#episodios`).html(episodios);
        })
        .catch(error => {//SE ATRAPA UN ERROR EN CASO DE EXISTIR
            console.log(error);//SE MUESTRA EL ERROR
        });
    }

}
