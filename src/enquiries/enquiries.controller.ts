import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { EnquiriesService } from './enquiries.service';
import { CreateEnquiryDto } from './dto/create-enquiry.dto';
import { UpdateEnquiryDto } from './dto/update-enquiry.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Enquiry } from './entities/enquiry.entity';

@ApiTags("Enquiries")
@Controller('enquiries')
export class EnquiriesController {
    constructor(
        private readonly enquiriesService: EnquiriesService
    ) {}

    @ApiOkResponse()
    @Get()
    async getAllEnquiries() {
        return this.enquiriesService.getAllEnquiries();
    }

    @ApiOkResponse({
        type: Enquiry
    })
    @ApiBadRequestResponse({description: "Enquiry Not Found"})
    @Get(':id')
    async getAnEnquiry(@Param('id') id: number) {
        return this.enquiriesService.getAnEnquiry(id);
    }

    @ApiCreatedResponse({
        description: "Enquiry Created",
        type: Enquiry
    })
    @ApiBadRequestResponse({description: "Failed to create the enquiry"})
    @Post()
    async create(@Body() createEnquiryDto: CreateEnquiryDto) {
        return this.enquiriesService.create(createEnquiryDto);
    }

    @ApiOkResponse({
        description: "Enquiry Updated",
        type: Enquiry
    })
    @ApiBadRequestResponse({description: "Failed to update the enquiry"})
    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateEnquiryDto: UpdateEnquiryDto) {
        return this.enquiriesService.updateAnEnquiry(+id, updateEnquiryDto);
    }

    @ApiOkResponse({
        description: "Enquiry Deleted",
        type: Enquiry
    })
    @ApiBadRequestResponse({description: "Failed to delete the enquiry"})
    @Delete(':id')
    async deleteAnEnquiry(@Param('id') id: string) {
        return this.enquiriesService.deleteAnEnquiry(+id)
    }
}
