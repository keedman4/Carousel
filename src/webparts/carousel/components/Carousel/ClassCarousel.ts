import { ICarousel } from "./ICarousel";
export class ClassCarousel{
    public CarouselName:string;
    public Name:string;
    public CarouselDesc:string;
  
    
    constructor(item: ICarousel){
        this.CarouselName = item.CarouselName;
        this.Name = item.Name;
        this.CarouselDesc = item.CarouselDesc;
       
    }
}