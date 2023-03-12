import { prisma } from "../index";
import { faker } from "@faker-js/faker";

async function main() {
  Array.from({ length: 10 }).forEach(async () => {
    await prisma.product.create({
      data: {
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        department: faker.commerce.department(),
        price: faker.commerce.price(50, 100),
        reviews: {
          create: [{ body: faker.lorem.paragraphs() }],
        },
      },
    });
  });
}

main()
  .then(() => console.log("db seeded successfully"))
  .catch((e) => `Error seeding db: ${e.message}`);
