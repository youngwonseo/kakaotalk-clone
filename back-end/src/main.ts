import { AppModule } from "./modules";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
// import helmet = require("helmet");

async function start() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix("/api/v1");
  // app.use(helmet());

  process.on("SIGTERM", function() {
    return app.close().then(() => process.exit(1));
  });

  process.on("SIGINT", function() {
    return app.close().then(() => process.exit(1));
  });
  
  const port = process.env.PORT || 5000;

  await app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

start();