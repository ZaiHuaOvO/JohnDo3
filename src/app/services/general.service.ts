import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  constructor() {}

  isNotEmpty(value: any): boolean {
    if (value === null || value === undefined) {
      return false; // null 或 undefined
    }

    if (Array.isArray(value) && value.length === 0) {
      return false; // 空数组
    }

    if (typeof value === 'string' && value.trim() === '') {
      return false; // 空字符串或全是空格
    }

    return true; // 其他情况下，返回 true
  }
}
