import { HttpStatus } from '@nestjs/common';

export enum ExceptionType {
  ROLE_NOT_FOUND = 'ROLE_NOT_FOUND',
  DUPLICATE_EMAIL = 'DUPLICATE_EMAIL',
  NO_ACTIVE_BREAK_FOUND = 'NO_ACTIVE_BREAK_FOUND',
  INCORRECT_EMAIL_PASSWORD = 'INCORRECT_EMAIL_PASSWORD',
  PASSWORD_NOT_MATCHED = 'PASSWORD_NOT_MATCHED',
  USER_ALREADY_LOGGED_IN = 'USER_ALREADY_LOGGED_IN',
  EMAIL_NOT_VERIFIED = 'EMAIL_NOT_VERIFIED',
  EMAIL_NOT_FOUND = 'EMAIL_NOT_FOUND',
  EMPLOYEE_ALREADY_CHECKED_OUT = 'EMPLOYEE_ALREADY_CHECKED_OUT',
  USER_NOT_FOUND = 'USER_NOT_FOUND',
  TIME_EXPIRED = 'TIME_EXPIRED',
  UNABLE_TO_UPDATE = 'UNABLE_TO_UPDATE',
  INCORRECT_PASSWORD = 'INCORRECT_PASSWORD',
  DELETION_UNSUCCESSFUL = 'DELETION_UNSUCCESSFUL',
  RECORD_NOT_FOUND = 'RECORD_NOT_FOUND',
  UNABLE_TO_CREATE_RECORD = 'UNABLE_TO_CREATE_RECORD',
  USER_BLOCKED = 'USER_BLOCKED',
  UNABLE_TO_DELETE = 'UNABLE_TO_DELETE',
  LOGOUT_UNSUCCESFULL = 'LOGOUT_UNSUCCESSFULL',
  USER_CANT_DELETE_THEMSELF = 'USER_CANT_DELETE_THEMSELF',
  USER_IS_NOT_VERIFIED = 'USER_IS_NOT_VERIFIED',
  USER_IS_INACTIVE = 'USER_IS_INACTIVE',
  EMPLOYEE_NOT_FOUND = 'EMPLOYEE_NOT_FOUND',
  MANAGER_AND_EMPLOYEE_IS_SAME = 'MANAGER_AND_EMPLOYEE_IS_SAME',
  APPRAISAL_NOT_FOUND = 'APPRAISAL_NOT_FOUND',
  CONFIGURATION_NOT_FOUND = 'CONFIGURATION_NOT_FOUND',
  DOCUMENT_NOT_FOUND = 'DOCUMENT_NOT_FOUND',
  CONFIGURATION_ALREADY_EXISTS = 'CONFIGURATION_ALREADY_EXISTS',
  STATUS_ALREADY_ASSIGNED = 'STATUS_ALREADY_ASSIGNED',
  MANAGER_IS_NOT_AN_EMPLOYEE = 'MANAGER_IS_NOT_AN_EMPLOYEE',
  NO_FILE_FOUND = 'NO_FILE_FOUND',
  SOMETHING_WENT_WRONG = 'SOMETHING_WENT_WRONG',
  SOCIAL_MEDIA_LINK_NOT_FOUND = 'SOCIAL_MEDIA_LINK_NOT_FOUND',
  ADMIN_CANNOT_ADD_SUPER_ADMIN = 'ADMIN_CANNOT_ADD_SUPER_ADMIN',
  UNABLE_TO_ADD_LOG = 'UNABLE_TO_ADD_LOG',
  LOGIN_ATTEMPT_LIMIT_REACHED='LOGIN_ATTEMPT_LIMIT_REACHED',
  ORDER_NUMBER_NOT_AVAILABLE = 'ORDER_NUMBER_NOT_AVAILABLE',
  ORDER_NUMBER_IS_SAME_AS_BEFORE = 'ORDER_NUMBER_IS_SAME_AS_BEFORE',
  ORDER_NUMBER_OR_PARENT_ID_SAME_AS_ORIGINAL = 'ORDER_NUMBER_OR_PARENT_ID_SAME_AS_ORIGINAL',
}

interface ExceptionOptions {
  status: HttpStatus;
  message: string;
}

export const Exceptions: Record<ExceptionType, ExceptionOptions> = {
  [ExceptionType.UNABLE_TO_ADD_LOG]: {
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    message: 'Unable to add log of the update',
  },
  [ExceptionType.ADMIN_CANNOT_ADD_SUPER_ADMIN]: {
    status: HttpStatus.FORBIDDEN,
    message: 'Admin cannot add super admin',
  },
  [ExceptionType.SOCIAL_MEDIA_LINK_NOT_FOUND]: {
    status: HttpStatus.NOT_FOUND,
    message: 'No such social media link found.',
  },
  [ExceptionType.LOGIN_ATTEMPT_LIMIT_REACHED]: {
    status: HttpStatus.FORBIDDEN,
    message: 'login attempts limit reached',
  },
  [ExceptionType.SOMETHING_WENT_WRONG]: {
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    message: 'Something went wrong.',
  },
  [ExceptionType.USER_BLOCKED]: {
    status: HttpStatus.FORBIDDEN,
    message: 'User account blocked.',
  },
  [ExceptionType.MANAGER_IS_NOT_AN_EMPLOYEE]: {
    status: HttpStatus.NOT_FOUND,
    message: 'Manager is not and employee.',
  },
  [ExceptionType.APPRAISAL_NOT_FOUND]: {
    status: HttpStatus.NOT_FOUND,
    message: 'No Appraisal of this employee found',
  },
  [ExceptionType.MANAGER_AND_EMPLOYEE_IS_SAME]: {
    status: HttpStatus.BAD_REQUEST,
    message: 'Manager and employee cant be same.',
  },
  [ExceptionType.UNABLE_TO_CREATE_RECORD]: {
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    message: 'Unable to add record.',
  },
  [ExceptionType.RECORD_NOT_FOUND]: {
    status: HttpStatus.NOT_FOUND,
    message: 'Record not found.',
  },
  [ExceptionType.NO_FILE_FOUND]: {
    status: HttpStatus.NOT_FOUND,
    message: 'No file found.',
  },
  [ExceptionType.EMPLOYEE_NOT_FOUND]: {
    status: HttpStatus.NOT_FOUND,
    message: 'Employee not found.',
  },
  [ExceptionType.NO_ACTIVE_BREAK_FOUND]: {
    status: HttpStatus.NOT_FOUND,
    message: 'No active break found.',
  },
  [ExceptionType.DOCUMENT_NOT_FOUND]: {
    status: HttpStatus.NOT_FOUND,
    message: 'Document not found.',
  },
  [ExceptionType.DELETION_UNSUCCESSFUL]: {
    status: HttpStatus.BAD_REQUEST,
    message: 'Deletion unsuccessful',
  },
  [ExceptionType.LOGOUT_UNSUCCESFULL]: {
    status: HttpStatus.BAD_REQUEST,
    message: 'Logout is unsuccessful',
  },
  [ExceptionType.ROLE_NOT_FOUND]: {
    status: HttpStatus.NOT_FOUND,
    message: 'Kindly specify role from system defined roles.',
  },
  [ExceptionType.DUPLICATE_EMAIL]: {
    status: HttpStatus.CONFLICT,
    message: 'Account already exists for this email address',
  },
  [ExceptionType.EMPLOYEE_ALREADY_CHECKED_OUT]: {
    status: HttpStatus.CONFLICT,
    message: 'Employee already checked out for break!',
  },
  [ExceptionType.STATUS_ALREADY_ASSIGNED]: {
    status: HttpStatus.CONFLICT,
    message: 'Leave status already Assigned',
  },
  [ExceptionType.PASSWORD_NOT_MATCHED]: {
    status: HttpStatus.BAD_REQUEST,
    message: 'Password is incorrect.',
  },
  [ExceptionType.EMAIL_NOT_VERIFIED]: {
    status: HttpStatus.BAD_REQUEST,
    message: 'Email is not verified.',
  },
  [ExceptionType.USER_ALREADY_LOGGED_IN]: {
    status: HttpStatus.BAD_REQUEST,
    message: 'User is already logged in',
  },
  [ExceptionType.USER_IS_NOT_VERIFIED]: {
    status: HttpStatus.UNAUTHORIZED,
    message: 'User is not verified',
  },
	[ExceptionType.USER_IS_INACTIVE]: {
    status: HttpStatus.UNAUTHORIZED,
    message: 'User is inactive',
  },
  [ExceptionType.EMAIL_NOT_FOUND]: {
    status: HttpStatus.BAD_REQUEST,
    message: 'Email not found.',
  },
  [ExceptionType.CONFIGURATION_NOT_FOUND]: {
    status: HttpStatus.NOT_FOUND,
    message: 'System Configuration not found.',
  },
  [ExceptionType.CONFIGURATION_ALREADY_EXISTS]: {
    status: HttpStatus.CONFLICT,
    message: 'System Configuration already Exists.',
  },
  [ExceptionType.USER_NOT_FOUND]: {
    status: HttpStatus.NOT_FOUND,
    message: 'User not found.',
  },
	[ExceptionType.USER_CANT_DELETE_THEMSELF]: {
    status: HttpStatus.BAD_REQUEST,
    message: 'User cannot delete themself.',
  },
  [ExceptionType.UNABLE_TO_UPDATE]: {
    status: HttpStatus.BAD_REQUEST,
    message: 'Unable to update record.',
  },
  [ExceptionType.INCORRECT_PASSWORD]: {
    status: HttpStatus.BAD_REQUEST,
    message: 'Old password is incorrect.',
  },
  [ExceptionType.UNABLE_TO_DELETE]: {
    status: HttpStatus.BAD_REQUEST,
    message: 'Unable to delete, kindly try again!',
  },
  [ExceptionType.INCORRECT_EMAIL_PASSWORD]: {
    status: HttpStatus.BAD_REQUEST,
    message: 'Email or password is incorrect.',
  },
  [ExceptionType.TIME_EXPIRED]: {
    status: HttpStatus.BAD_REQUEST,
    message: 'Time expired',
  },
  [ExceptionType.ORDER_NUMBER_NOT_AVAILABLE]: {
    status: HttpStatus.BAD_REQUEST,
    message: `Order number is not available.
			 Please choose another or don't send in the request for auto-assignment.`,
  },
  [ExceptionType.ORDER_NUMBER_IS_SAME_AS_BEFORE]: {
    status: HttpStatus.BAD_REQUEST,
    message: `The provided order number is same as original.
			 Please choose another for update or don't send in request if you dont want to update.`,
  },
  [ExceptionType.ORDER_NUMBER_OR_PARENT_ID_SAME_AS_ORIGINAL]: {
    status: HttpStatus.BAD_REQUEST,
    message: `Provided orderNumber and/or parentMenuId is same as original. 
		Kindly provide other values or leave empty if dont want to update`,
  },
};
