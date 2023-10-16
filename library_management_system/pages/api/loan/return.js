import { getSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      // Authenticate the user using NextAuth.js
      const session = await getSession({ req });

      // If the user is not authenticated, return an unauthorized response
      if (!session) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      // Extract the scanned barcode from the request body
      const { scannedBarcode } = req.body;

      // Find the loan record in the database associated with the scanned barcode
      const loan = await prisma.loan.findFirst({
        where: {
          book: {
            barcode: scannedBarcode,
          },
          userId: session.user.id,
          returned: false,
        },
      });

      // If the loan doesn't exist or is already returned, return an error
      if (!loan) {
        return res.status(400).json({ error: 'Loan does not exist or is already returned' });
      }

      // Update the loan record to mark it as returned
      await prisma.loan.update({
        where: { id: loan.id },
        data: { returned: true },
      });

      // Update the book's availability status to true (available)
      await prisma.book.update({
        where: { id: loan.bookId },
        data: { isAvailable: true },
      });

      // Emit a real-time update to notify the kiosk and the user's phone

      res.status(200).json({ message: 'Book returned successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error returning book', message: error.message });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
