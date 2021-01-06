import * as React from 'react';
import { ICarouselProps } from './ICarouselProps';
import { escape } from '@microsoft/sp-lodash-subset';
import DemoCarousel from './Carousel/Carousel';
import * as jQuery from "jquery";
import * as $ from 'jquery';

export default class Carousel extends React.Component<ICarouselProps, any> {
  public render(): React.ReactElement<ICarouselProps> {
    jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); jQuery(".CanvasZone").prop("style", "max-width: none");

    return (

      <>
      <DemoCarousel />
      </>
    );
  }
}
