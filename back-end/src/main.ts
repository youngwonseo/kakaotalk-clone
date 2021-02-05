import { AppModule } from "./modules";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { WsAdapter } from "@nestjs/platform-ws";
import { SocketIoAdapter } from "./lib/socket.io-adapter";
// import cookieParser from 'cookie-parser';

// import helmet = require("helmet");

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix("/api");
  // const app = await NestFactory.create(ApplicationModule);
  // app.useWebSocketAdapter(new WsAdapter(app));
  
  app.useWebSocketAdapter(new SocketIoAdapter(app));
  // app.use(cookieParser());
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

bootstrap();