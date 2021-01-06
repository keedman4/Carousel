import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'CarouselWebPartStrings';
import Carousel from './components/Carousel';
import { ICarouselProps } from './components/ICarouselProps';

export interface ICarouselWebPartProps {
  description: string;
  CarouselName:string;
  Name:string;
  CarouselDesc:string;
  
}

export default class CarouselWebPart extends BaseClientSideWebPart<ICarouselWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ICarouselProps> = React.createElement(
      Carousel,
      {
        description: this.properties.description,
        context: this.context,
        CarouselName: this.properties.CarouselName,
        CarouselDesc: this.properties.CarouselDesc,
        Name: this.properties.Name
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
