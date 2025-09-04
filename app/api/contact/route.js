import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Validation basique
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { ok: false, message: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { ok: false, message: 'Email invalide' },
        { status: 400 }
      );
    }

    // Ici, normalement on enverrait l'email ou sauvegarderait en base de données
    // Pour la démo, on simule juste un succès
    console.log('Nouveau message de contact:', data);

    // Simuler un petit délai pour le réalisme
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json(
      { ok: true, message: 'Message envoyé avec succès' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur lors du traitement du formulaire de contact:', error);
    return NextResponse.json(
      { ok: false, message: 'Erreur serveur' },
      { status: 500 }
    );
  }
}