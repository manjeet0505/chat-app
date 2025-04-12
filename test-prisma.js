// test-prisma.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function test() {
  try {
    await prisma.$connect();
    console.log('✅ Connected to DB');
  } catch (err) {
    console.error('❌ Connection failed', err);
  } finally {
    await prisma.$disconnect();
  }
}

test();
