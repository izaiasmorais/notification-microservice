import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./modules/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

	// This line will actvie nestjs validations before our app start
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
