export class Receipe{
    public Name: String;
    public Description: String;
    public Imagepath: String;

    constructor(name: String , desc: String, image: String){
        this.Name = name;
        this.Description = desc;
        this.Imagepath = image;

    }
}