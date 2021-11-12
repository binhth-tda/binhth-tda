import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUserInfo(): object {
    return {
      id: 1,
      name: 'Tạ Hoàng Bình',
      class: 'AT12E',
    };
  }

  getDetailUser(id): object {
    return {
      id: id,
      name: 'Bình ' + id,
      class: 'AT12E' + id,
    };
  }

  getRequest(request): object {
    return request;
  }
}
