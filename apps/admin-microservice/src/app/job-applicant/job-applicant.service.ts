import {
  CreateJobApplicantRequestDto,
  CreateJobApplicantResponseDto,
  DeleteJobApplicantResponseDto,
  GenericResponseDto,
  GetAllJobApplicantsRequestDto,
} from '@cnbc-monorepo/dtos';
import { JobApplicants } from '@cnbc-monorepo/entity';
import {
  CustomException,
  Exceptions,
  ExceptionType,
} from '@cnbc-monorepo/exception-handling';
import { Helper } from '@cnbc-monorepo/utility';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';

@Injectable()
export class JobApplicantService {
  constructor(
    @Inject('JOB_APPLICANTS_REPOSITORY')
    private jobApplicantsRepository: typeof JobApplicants,
    private helperService: Helper
  ) {}

  async getAllJobApplicants(
    query: GetAllJobApplicantsRequestDto
  ): Promise<GenericResponseDto> {
    try {
      const response = await this.getAllJobApplicantsQuery(query);
      return new GenericResponseDto(
        HttpStatus.OK,
        'Job applicants fetched successfully',
        {
          jobApplicants: response.rows,
          totalCount: response.count,
        }
      );
    } catch (err) {
      console.log(
        '🚀 ~ file: job-applicant.service.ts ~ line 28 ~ JobApplicantService ~ getAllJobApplicants ~ err',
        err
      );
      throw err;
    }
  }
  async getJobApplicantById(id: number): Promise<GenericResponseDto> {
    try {
      const applicant_exists = await this.applicantExistsQuery(id);
      if (applicant_exists) {
        return new GenericResponseDto(
          HttpStatus.OK,
          'Job applicant fetched successfully',
          {
            jobApplicant: applicant_exists,
          }
        );
      } else {
        throw new CustomException(
          Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
          Exceptions[ExceptionType.RECORD_NOT_FOUND].status
        );
      }
    } catch (err) {
      console.log(
        '🚀 ~ file: job-applicant.service.ts ~ line 42 ~ JobApplicantService ~ getJobApplicantById ~ err',
        err
      );
      throw err;
    }
  }

  private async applicantExistsQuery(id: number) {
    return await this.jobApplicantsRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  private async getAllJobApplicantsQuery(query: GetAllJobApplicantsRequestDto) {
    return await this.jobApplicantsRepository.findAndCountAll({
      where: {
        ...(query.search && {
          applicantName: {
            [Op.like]: `%${this.helperService.stringTrimmerAndCaseLower(
              query.search
            )}%`,
          },
        }),
        ...(query.jobsId && {
          jobsId: query.jobsId,
        }),
        ...(query.date && {
          createdAt: query.date,
        }),
      },
      limit: parseInt(query.limit.toString()),
      offset: this.helperService.offsetCalculator(query.pageNo, query.limit),
    });
  }

  // todo: send email to applicant upon creation
  async createJobApplicant(
    createJobApplicantRequestDto: CreateJobApplicantRequestDto
  ): Promise<CreateJobApplicantResponseDto> {
    const jobApplicant =
      await this.jobApplicantsRepository.create<JobApplicants>({
        ...createJobApplicantRequestDto,
      });

    return new CreateJobApplicantResponseDto(
      HttpStatus.CREATED,
      'Created Successfully',
      jobApplicant
    );
  }

  async deleteJobApplicant(
    jobApplicantId: number
  ): Promise<DeleteJobApplicantResponseDto> {
    const deleteResponse = await this.jobApplicantsRepository.destroy({
      where: { id: jobApplicantId },
    });

    if (!deleteResponse) {
      throw new CustomException(
        Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
        Exceptions[ExceptionType.RECORD_NOT_FOUND].status
      );
    }

    return new DeleteJobApplicantResponseDto(
      HttpStatus.OK,
      'Job applicant deleted successfully'
    );
  }
}
