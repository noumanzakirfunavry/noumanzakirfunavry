import { GenericResponseDto, UpdateSiteConfiguration } from '@cnbc-monorepo/dtos';
import { SiteConfiguration } from '@cnbc-monorepo/entity';
import { CustomException, Exceptions, ExceptionType } from '@cnbc-monorepo/exception-handling';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';

@Injectable()
export class SystemConfigurationService {
    constructor(
        @Inject('SITE_CONFIGURATION_REPOSITORY')
        private siteConfigurationRepository: typeof SiteConfiguration,
    ) { }
    async updateSystemConfiguration(body: any): Promise<GenericResponseDto> {
        try {
            const response = this.siteConfigurationRepository.update(body, {
                where: {}
            })
            if (response) {
                return new GenericResponseDto(
                    HttpStatus.OK,
                    "Updated successfully"
                )
            }
            else {
                throw new CustomException(
                    Exceptions[ExceptionType.SOMETHING_WENT_WRONG].message,
                    Exceptions[ExceptionType.SOMETHING_WENT_WRONG].status
                )
            }
        }
        catch (err) {
            console.log("🚀 ~ file: system-configuration.service.ts ~ line 16 ~ SystemConfigurationService ~ updateSystemConfiguration ~ err", err)
            throw err
        }
    }
}
