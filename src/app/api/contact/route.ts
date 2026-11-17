export async function POST(request: Request) {
  const body = await request.json();

  if (!body.name || !body.email || !body.subject || !body.message) {
    return Response.json({ error: "Tous les champs sont requis." }, { status: 400 });
  }

  return Response.json({
    success: true,
    message: "Votre message a bien été reçu. Nous reviendrons vers vous rapidement.",
  });
}
