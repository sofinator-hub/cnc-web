export async function POST(req) {
  try {
    const body = await req.json();
    const { type, pattern, density } = body;

    let images = [];

    if (type === "celosia") {
      if (pattern === "geométrico") {
        images = ["/celosia1.jpg", "/celosia4.jpg"];
      } else {
        images = ["/celosia2.jpg", "/celosia3.jpg"];
      }
    }

    if (type === "guarda") {
      if (density === "cerrado") {
        images = ["/guarda2.jpg", "/guarda4.jpg"];
      } else {
        images = ["/guarda1.jpg", "/guarda3.jpg"];
      }
    }

    const random = images[Math.floor(Math.random() * images.length)];

    return Response.json({
      image: random,
    });

  } catch (error) {
    return Response.json({ error: "Error" }, { status: 500 });
  }
}