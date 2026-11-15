
class Vehicle {
    public make: string;
    public model: string;
    public year: number;

    readonly identification: number;

    constructor(
        make: string,
        model: string,
        year: number,
        identification: number
    ) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.identification = identification;
    }

    displayInfo(): void {
        console.log("Marque :", this.make);
        console.log("Modèle :", this.model);
        console.log("Année :", this.year);
        console.log("Identification :", this.identification);
    }
}

// Création d'une instance
const myCar = new Vehicle("Toyota", "Corolla", 2022, 12345);

// Affichage des informations
myCar.displayInfo();

// Modification d'une propriété normale
myCar.make = "Peugeot";

// Affichage après modification
console.log("Nouvelle marque :", myCar.make);

// Cette instruction provoquerait une erreur TypeScript :
// myCar.identification = 67890;
