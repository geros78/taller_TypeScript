//Actividad Evaluativa



class personas{
    id: number = 0;
    name: string = '';
    lastName: string = '';
    age: number = 0;
    direction: string = '';
    arrayPersonas: Array<any> = []; 
}

interface Iname extends personas{
    getAll():void;
    getById(id:number):void;
    getByName(name:string):void;
    create(id:number, name:string, lastName:string, age:number, direction: string):void;
    update(id:number, name:string, lastName:string, age:number, direction: string):void;
    delate(id:number):void;
}

class Repository implements Iname {

id: number = 0;
name: string = '';
lastName: string = '';
age: number = 0;
direction: string = '';

    arrayPersonas =[
    {
        id: 1,
        name: 'Alejandro',
        lastName: 'Otaiza',
        age: 23,
        direction: 'cra 28' 
    },
    {
        id: 2,
        name: 'Miguel',
        lastName: 'Vidal',
        age: 25,
        direction: 'cra 40' 
    },
    {
        id: 3,
        name: 'Sara',
        lastName: 'Arteaga',
        age: 20,
        direction: 'cra 55' 
    },
    {
        id: 4,
        name: 'Andres',
        lastName: 'Felipe',
        age: 13,
        direction: 'cra 90' 
    }

    ]

    getAll(): void{

        const copyArray = this.arrayPersonas.map((i) => {return i});
    console.log(copyArray)

    }
    getById(id:number):void{

        const copyArray = this.arrayPersonas.find((i) => i.id == id);
        console.log(copyArray)

    }
    getByName(name:string):void{

        const copyArray = this.arrayPersonas.find((i) => i.name == name);
        console.log(copyArray)

    }
    create(id:number, name:string, lastName:string, age:number, direction: string):void{

        this.arrayPersonas.push({id:id, name:name, lastName:lastName, age:age, direction: direction})

        const copymyObject = this.arrayPersonas.map((item) => {return item});
        console.log(copymyObject)
        
    }
    update(id:number, name:string, lastName:string, age:number, direction: string):void{

        this.arrayPersonas.splice((id-1), 1, {id:id, name:name, lastName:lastName, age:age, direction: direction})

        const copymyObject = this.arrayPersonas.map((item) => {return item});
        console.log(copymyObject)

    }
    delate(id:number):void{
        
        const copyArray = this.arrayPersonas.filter((i) => i.id != id);
        console.log(copyArray)
    }
}

let grupo = new Repository;


let op:number = 0;


do{
    
    op = Number(window.prompt('Digita una opcion \n'
            + '1. Mostrar Todos \n'
            + '2. Mostrar por Id \n'
            + '3. Mostrar por nombre \n'
            + '4. Crear o Insertar Persona \n'
            + '5. Actualizar  Persona\n'
            + '6. Eliminar Persona \n'
            + '7. Salir'));

switch(op){

    case 1:
        grupo.getAll();
        break;

    case 2:
        let buscarid = Number(window.prompt("Ingrese Id"));  
        grupo.getById(buscarid);
        break;

    case 3:
        let buscarNombre = prompt("Ingrese Nombre");  
        grupo.getByName(buscarNombre);
        break;

    case 4:
        let id = Number(window.prompt("Ingrese Id"));
        let nombre = prompt("Ingrese nombre");
        let apellido = prompt("Ingrese apellido");
        let edad = Number(window.prompt("Ingrese edad"));
        let direccion = prompt("Ingrese direccion");


        grupo.create(id, nombre, apellido, edad, direccion);
        break;

    case 5:
        let id2 = Number(window.prompt("Ingrese Id a editar"));
        let nombre2 = prompt("Ingrese nombre a editar");
        let apellido2 = prompt("Ingrese apellido a editar");
        let edad2 = Number(window.prompt("Ingrese edad a editar"));
        let direccion2 = prompt("Ingrese direccion a editar");

        grupo.update(id2, nombre2, apellido2, edad2, direccion2);
        break;

    case 6:
        let id3 = Number(window.prompt("Ingrese Id a eliminar"));
        grupo.delate(id3);
        break;

    case 7:

        break;

    default:
        console.log('Opcion invalida');
        break;

}

}while(op != 8);