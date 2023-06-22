interface GetUsersRequest {
  'limit'?: number;
  'offset'?: number;
  'totalCount'?: boolean;
  'fields'?: Array<string>;
  'where.email.eq'?: string;
  'where.email.neq'?: string;
  'where.email.gt'?: string;
  'where.email.gte'?: string;
  'where.email.lt'?: string;
  'where.email.lte'?: string;
  'where.email.like'?: string;
  'where.email.in'?: string;
  'where.email.nin'?: string;
  'where.fullName.eq'?: string;
  'where.fullName.neq'?: string;
  'where.fullName.gt'?: string;
  'where.fullName.gte'?: string;
  'where.fullName.lt'?: string;
  'where.fullName.lte'?: string;
  'where.fullName.like'?: string;
  'where.fullName.in'?: string;
  'where.fullName.nin'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.provider.eq'?: string;
  'where.provider.neq'?: string;
  'where.provider.gt'?: string;
  'where.provider.gte'?: string;
  'where.provider.lt'?: string;
  'where.provider.lte'?: string;
  'where.provider.like'?: string;
  'where.provider.in'?: string;
  'where.provider.nin'?: string;
  'where.providerId.eq'?: string;
  'where.providerId.neq'?: string;
  'where.providerId.gt'?: string;
  'where.providerId.gte'?: string;
  'where.providerId.lt'?: string;
  'where.providerId.lte'?: string;
  'where.providerId.like'?: string;
  'where.providerId.in'?: string;
  'where.providerId.nin'?: string;
  'where.or'?: Array<string>;
  'orderby.email'?: string;
  'orderby.fullName'?: string;
  'orderby.id'?: string;
  'orderby.provider'?: string;
  'orderby.providerId'?: string;
}

interface GetUsersResponseOK {
  'id'?: number;
  'fullName': string;
  'email': string;
  'provider': string;
  'providerId': string;
}

interface CreateUserRequest {
  'id'?: number;
  'fullName': string;
  'email': string;
  'provider': string;
  'providerId': string;
}

interface CreateUserResponseOK {
  'id'?: number;
  'fullName': string;
  'email': string;
  'provider': string;
  'providerId': string;
}

interface UpdateUsersRequest {
  'fields'?: Array<string>;
  'where.email.eq'?: string;
  'where.email.neq'?: string;
  'where.email.gt'?: string;
  'where.email.gte'?: string;
  'where.email.lt'?: string;
  'where.email.lte'?: string;
  'where.email.like'?: string;
  'where.email.in'?: string;
  'where.email.nin'?: string;
  'where.fullName.eq'?: string;
  'where.fullName.neq'?: string;
  'where.fullName.gt'?: string;
  'where.fullName.gte'?: string;
  'where.fullName.lt'?: string;
  'where.fullName.lte'?: string;
  'where.fullName.like'?: string;
  'where.fullName.in'?: string;
  'where.fullName.nin'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.provider.eq'?: string;
  'where.provider.neq'?: string;
  'where.provider.gt'?: string;
  'where.provider.gte'?: string;
  'where.provider.lt'?: string;
  'where.provider.lte'?: string;
  'where.provider.like'?: string;
  'where.provider.in'?: string;
  'where.provider.nin'?: string;
  'where.providerId.eq'?: string;
  'where.providerId.neq'?: string;
  'where.providerId.gt'?: string;
  'where.providerId.gte'?: string;
  'where.providerId.lt'?: string;
  'where.providerId.lte'?: string;
  'where.providerId.like'?: string;
  'where.providerId.in'?: string;
  'where.providerId.nin'?: string;
  'where.or'?: Array<string>;
  'id'?: number;
  'fullName': string;
  'email': string;
  'provider': string;
  'providerId': string;
}

interface UpdateUsersResponseOK {
  'id'?: number;
  'fullName': string;
  'email': string;
  'provider': string;
  'providerId': string;
}

interface GetUserByIdRequest {
  'fields'?: Array<string>;
  'id': number;
}

interface GetUserByIdResponseOK {
  'id'?: number;
  'fullName': string;
  'email': string;
  'provider': string;
  'providerId': string;
}

interface UpdateUserRequest {
  'fields'?: Array<string>;
  'id': number;
  'fullName': string;
  'email': string;
  'provider': string;
  'providerId': string;
}

interface UpdateUserResponseOK {
  'id'?: number;
  'fullName': string;
  'email': string;
  'provider': string;
  'providerId': string;
}

interface DeleteUsersRequest {
  'fields'?: Array<string>;
  'id': number;
}

interface DeleteUsersResponseOK {
  'id'?: number;
  'fullName': string;
  'email': string;
  'provider': string;
  'providerId': string;
}

interface GetLoginGithubRequest {
}

interface GetLoginGithubResponseOK {
}

interface GetLoginGithubCallbackRequest {
}

interface GetLoginGithubCallbackResponseOK {
}

export interface Api {
  setBaseUrl(newUrl: string) : void;
  getUsers(req: GetUsersRequest): Promise<Array<GetUsersResponseOK>>;
  createUser(req: CreateUserRequest): Promise<CreateUserResponseOK>;
  updateUsers(req: UpdateUsersRequest): Promise<Array<UpdateUsersResponseOK>>;
  getUserById(req: GetUserByIdRequest): Promise<GetUserByIdResponseOK>;
  updateUser(req: UpdateUserRequest): Promise<UpdateUserResponseOK>;
  deleteUsers(req: DeleteUsersRequest): Promise<DeleteUsersResponseOK>;
  getLoginGithub(req: GetLoginGithubRequest): Promise<GetLoginGithubResponseOK>;
  getLoginGithubCallback(req: GetLoginGithubCallbackRequest): Promise<GetLoginGithubCallbackResponseOK>;
}

