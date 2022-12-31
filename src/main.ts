import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function start () {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('nest js to swagger')
    .setDescription('nest js document all swagger res api ')
    .setVersion('1.0.0')
    // .addTag('Eljahon')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/docs', app, document)
  app.listen(PORT, () => {
    console.log('Server in running to port = ', PORT);
  })
}
start()