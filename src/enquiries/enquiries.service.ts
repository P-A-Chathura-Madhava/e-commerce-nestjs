import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Enquiry } from './entities/enquiry.entity';
import { Repository } from 'typeorm';
import { CreateEnquiryDto } from './dto/create-enquiry.dto';
import { UpdateEnquiryDto } from './dto/update-enquiry.dto';

@Injectable()
export class EnquiriesService {
    constructor(
        @InjectRepository(Enquiry)
        private readonly enquiryRepository: Repository<Enquiry>
    ) {}

    async create(createEnquiryDto: CreateEnquiryDto) {
        const enquiry = this.enquiryRepository.create(createEnquiryDto);
        return await this.enquiryRepository.save(enquiry);      
    }

    async updateAnEnquiry(id: number, updateEnquiryDto: UpdateEnquiryDto) {
        const enquiry = await this.getAnEnquiry(id);
        if (!enquiry) {
          throw new NotFoundException();
        }      
        return await this.enquiryRepository.update(enquiry, updateEnquiryDto);
    }

    async getAllEnquiries() {
        return await this.enquiryRepository.find()
    }

    async getAnEnquiry(id: number) {
        return await this.enquiryRepository.findOne({where: {id}})
    }

    async deleteAnEnquiry(id: number) {
        const enquiry = await this.getAnEnquiry(id);
        if (!enquiry) {
          throw new NotFoundException();
        }    
        return await this.enquiryRepository.remove(enquiry);
    }
}
