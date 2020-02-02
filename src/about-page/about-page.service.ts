import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateAboutPageDto } from './dto/create-about-page.dto';
import { IAboutPage } from './interfaces/about-page.interface';

@Injectable()
export class AboutPageService {
  constructor(
    @Inject('ABOUT_PAGE_MODEL')
    private readonly AboutPageModel: Model<IAboutPage>,
  ) {}
  async createAboutPageData(aboutPage: CreateAboutPageDto) {
    //Ensure that there is only one instance of the document in the database.
    const numberOfDocuments = await this.AboutPageModel.estimatedDocumentCount();
    if (!numberOfDocuments ||
      numberOfDocuments === undefined ||
      numberOfDocuments < 1 ||
      numberOfDocuments <= 0) {
      const createdAboutPage = await new this.AboutPageModel(aboutPage);
    return createdAboutPage.save();
    } else {
      console.log("An instance of this document already exists. You cannot have more than one.")
    }
    
  }

  async getAboutPageData() {
    const result = await this.AboutPageModel.findOne().exec();
    return result[0]
  }

  async updateAboutPageData(data) {
    return await this.AboutPageModel.update({}, data).exec();
  }
}
