import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager, EntityManager } from 'typeorm';

import { AccountRoleEntity } from '@src/entities/model/system/account_role.entity';
import { RoleEntity } from '@src/entities/model/system/role.entity';
import { AssiginRoleDto } from '@src/controllers/admin/system/account-role/dto/assign_role.dto';

@Injectable()
export class AccountRoleService {
  constructor (
    @InjectRepository(AccountRoleEntity)
    private readonly accountRoleRepository: Repository<AccountRoleEntity>,
    @InjectRepository(RoleEntity)
    private readonly roleRepository: Repository<RoleEntity>,
  ) { }

  /**
   * @Author: 水痕
   * @Date: 2020-05-18 17:04:04
   * @LastEditors: 水痕
   * @Description: 获取角色树
   * @param {type} 
   * @return: 
   */
  async accountRoleList(accountId: number): Promise<any> {
    return await this.accountRoleRepository.find({ where: { accountId }, select: ['id', 'roleId'] });
  }
}
