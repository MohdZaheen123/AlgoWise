export default function handler(req, res) {
    if (req.method === 'GET') {
      // Handle GET request
      res.status(200).json({ message: 'Hello from Next.js!' });
    } else if (req.method === 'POST') {
      // Handle POST request
      // You can access the request body as req.body
      res.status(201).json({ message: 'Data received!' });
    } else {
      // Handle other methods
      res.status(405).json({ message: 'Method not allowed' });
    }
  }