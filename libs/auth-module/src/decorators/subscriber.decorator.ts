import { SetMetadata } from '@nestjs/common';

export const IS_SUBSCRIBER_KEY = 'Subscriber';
export const SubscriberOnly = () => SetMetadata(IS_SUBSCRIBER_KEY, true);
