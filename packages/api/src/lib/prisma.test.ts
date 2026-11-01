import { describe, it, expect } from 'vitest';
import { PrismaClient } from '@prisma/client';
import { prisma } from './prisma';

describe('prisma', () => {
  it('should be defined', () => {
    expect(prisma).toBeDefined();
  });

  it('should be an instance of PrismaClient', () => {
    expect(prisma).toBeInstanceOf(PrismaClient);
  });
});
