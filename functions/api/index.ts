import { handleRequest } from './handler';

export async function onRequest(context) {
  return handleRequest(context);
}

// Additional API routes can be added here
export async function handleRequest({ request }) {
  const url = new URL(request.url);
  switch (url.pathname) {
    // Add more routes as needed
    default:
      return new Response('Not found', { status: 404 });
  }
}
