type ServiceResponseStatus =
'SUCCESSFUL' | 'BAD_REQUEST' | 'UNAUTHORIZED' | 'NOT_FOUND' | 'CREATED';

export type ServiceMessage = { message: string };

export type ServiceResponse<T> = {
  status: ServiceResponseStatus,
  data: T | ServiceMessage,
};
