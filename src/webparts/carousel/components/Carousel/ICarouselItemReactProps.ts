import { WebPartContext } from "@microsoft/sp-webpart-base"; 
export interface ICarouselItemReactProps{
    CarouselName?:string;
    Name?:string;
    CarouselDesc?:string;
    context?:WebPartContext;
}