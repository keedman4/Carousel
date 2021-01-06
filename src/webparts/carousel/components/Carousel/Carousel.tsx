import * as React from 'react';
import ImageGallery from 'react-image-gallery';
import pnp from 'sp-pnp-js';
import { ICarouselItemReactProps } from './ICarouselItemReactProps';
import { ClassCarousel } from './ClassCarousel';
import { ICarousel } from './ICarousel';
import "react-image-gallery/styles/css/image-gallery.css";

export default class DemoCarousel extends React.Component<ICarouselItemReactProps, any> {
    public constructor(props:ICarouselItemReactProps,any)
    {super(props);
    this.state={image_list:[]}
    }
  render() {
    return(
        <>
    
      <ImageGallery items={this.state.image_list} autoPlay="true"/>
    </>
    )
  }
public componentDidMount()
{this._CarouselList();}
private _CarouselList():void
{
    pnp.sp.web.lists.getByTitle(`Banners`).items.get().then
    ((response)=>{
        let CarouselCollection=response.map(item=> new ClassCarousel(item));
        let instant_array = [];

            for (let i = 0; i < CarouselCollection.length; i++) {​​​​​
                instant_array.push(
                    
                    {
                        original: CarouselCollection[i].CarouselDesc,
                      },
                )
            }​​​​​
        this.setState({​​​​​ image_list: instant_array }​​​​​)
    }

    )
}
};

