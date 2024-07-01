import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { EnquiriesService } from './enquiries.service';
import { CreateEnquiryDto } from './dto/create-enquiry.dto';
import { UpdateEnquiryDto } from './dto/update-enquiry.dto';

@Controller('enquiries')
export class EnquiriesController {
    constructor(
        private readonly enquiriesService: EnquiriesService
    ) {}

    @Get()
    async getAllEnquiries() {
        return this.enquiriesService.getAllEnquiries();
    }

    @Get(':id')
    async getAnEnquiry(@Param('id') id: number) {
        return this.enquiriesService.getAnEnquiry(id);
    }

    @Post()
    async create(@Body() createEnquiryDto: CreateEnquiryDto) {
        return this.enquiriesService.create(createEnquiryDto);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateEnquiryDto: UpdateEnquiryDto) {
        return this.enquiriesService.updateAnEnquiry(+id, updateEnquiryDto);
    }

    @Delete(':id')
    async deleteAnEnquiry(@Param('id') id: string) {
        return this.enquiriesService.deleteAnEnquiry(+id)
    }
}
