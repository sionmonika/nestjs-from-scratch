// src/helpers/math-helper/math-helper.service.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class MathHelperService {
  square(num: number): number {
    return num * num;
  }
}
