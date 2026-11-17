export async function POST(request: Request) {
  const body = await request.json();

  if (!body.name || !body.phone || !body.email || !body.engagement || !body.message) {
    return Response.json({ error: "Les informations obligatoires sont manquantes." }, { status: 400 });
  }

  return Response.json({
    success: true,
    message: "Votre candidature a bien été enregistrée. Merci pour votre engagement.",
  });
}
