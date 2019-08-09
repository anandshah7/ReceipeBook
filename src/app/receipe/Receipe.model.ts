export class Receipe {
    public Id: number;
    public Name: String;
    public Description: String;
    public Imagepath: String;

    constructor(id: number, name: String , desc: String, image: String) {
        this.Id = id;
        this.Name = name;
        this.Description = desc;
        this.Imagepath = image;

    }
}