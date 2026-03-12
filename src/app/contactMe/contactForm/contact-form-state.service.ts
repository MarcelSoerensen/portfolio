import { Injectable } from '@angular/core';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  privacyChecked: boolean;
  language?: string;
}

@Injectable({ providedIn: 'root' })
export class ContactFormStateService {
  private data: ContactFormData = {
    name: '',
    email: '',
    message: '',
    privacyChecked: false,
    language: undefined,
  };

  getFormData(): ContactFormData {
    return { ...this.data };
  }

  setFormData(data: Partial<ContactFormData>) {
    this.data = { ...this.data, ...data };
  }

  resetFormData() {
    this.data = {
      name: '',
      email: '',
      message: '',
      privacyChecked: false,
      language: undefined,
    };
  }
}
