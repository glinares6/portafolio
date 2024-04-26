import { Injectable } from '@nestjs/common';
import { CreateCheckoutDto } from './dto/create-checkout.dto';
import { UpdateCheckoutDto } from './dto/update-checkout.dto';
import MercadoPagoConfig, { Preference } from 'mercadopago';

@Injectable()
export class CheckoutService {
 async create(createCheckoutDto: CreateCheckoutDto) {

    console.log('AIUDA_PE',process.env.CHECKOUT_ACCESS_TOKEN);
    
    const client = new MercadoPagoConfig({
      accessToken:
        process.env.CHECKOUT_ACCESS_TOKEN,
    });

    const preference = new Preference(client);

   

  const dataRedy = await   preference
      .create({
        body: {
          items: [
            {
              id: '0001',
              title: 'test-pruducto-nest-1',
              quantity: 1,
              unit_price: 22,
            },
          ],
        },
      })
      

      return {
        id:`${dataRedy.id}`
      }
  }

  findAll() {
    return `This action returns all checkout de mercado pago no se habla de bruno`;
  }

  findOne(id: number) {
    return `This action returns a #${id} checkout`;
  }

  update(id: number, updateCheckoutDto: UpdateCheckoutDto) {
    return `This action updates a #${id} checkout`;
  }

  remove(id: number) {
    return `This action removes a #${id} checkout`;
  }
}
