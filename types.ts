
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}