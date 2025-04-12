import { PrismaClient } from '@prisma/client';


import { NextResponse } from 'next/server';

const prisma = new PrismaClient();
export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return new NextResponse(
        JSON.stringify({ message: 'Please fill in all fields.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    });

    return new NextResponse(
      JSON.stringify({ message: 'Message sent successfully!', contact }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error saving contact message:', error);
    return new NextResponse(
      JSON.stringify({ message: 'Failed to send message. Please try again later.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  } finally {
    await prisma.$disconnect();
  }
}