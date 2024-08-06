import { Module } from '@nestjs/common';
import { EnquiriesController } from './enquiries.controller';
import { EnquiriesService } from './enquiries.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enquiry } from './entities/enquiry.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Enquiry])],
  controllers: [EnquiriesController],
  providers: [EnquiriesService],
})
export class EnquiriesModule {}
