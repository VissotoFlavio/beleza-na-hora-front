import { ProfessionalStatus } from '../models/Professional/status.professiona.model';

export const ProfessionalsDetailsMock = {
  data: [
    {
      id: 'b2afb1f8-0d7b-4bd1-9d9d-06e3868b03b3',
      firstName: 'Wanda',
      lastName: 'Maximoff',
      rating: 4.9,
      specialty: 'Maquiagem',
      status: 'online' as ProfessionalStatus,
      imageUrl: 'https://i.pinimg.com/564x/f9/ee/d2/f9eed22f4a59d9ecbcaa4c019846a290.jpg',
      description:
        'Wanda Maximoff é uma personagem fictícia interpretada por Elizabeth Olsen na franquia de mídia Universo Cinematográfico Marvel (UCM) baseada no personagem da Marvel Comics de mesmo nome. Wanda é retratada como uma refugiada sokoviana que, junto com seu irmão gêmeo Pietro, se voluntaria para ser experimentada pela Hidra. A Joia da Mente amplifica suas habilidades naturais de telecinética e manipulação de energia conhecidas como Magia do Caos.',
      numberOfServices: 1125,
      workingSince: 202201,
      categories: [
        {
          id: '24c82e3f-2591-4f63-b8ee-8ba73d083585',
          name: 'Maquiagem',
          subCategories: [
            {
              id: '01ee4ca6-28a5-4e48-8894-666113333cba',
              name: 'Básica',
              numberOfServices: 635,
              rating: 5.0,
              price: 95,
              imageUrl:
                'https://4.bp.blogspot.com/-CglRGhNa4aM/V8IAJ2LJMvI/AAAAAAAALrI/xR2dKOBidFYH0xGeSKQCGS2_wvALPGOwACLcB/s1600/a7155.jpg',
            },
            {
              id: '4d1bb24f-474d-44c8-b494-6dd697d1e5cf',
              name: 'Glam',
              numberOfServices: 385,
              rating: 4.7,
              price: 145.5,
              imageUrl: 'https://i.pinimg.com/736x/15/ba/73/15ba7350d675e85e43851cb138285b64.jpg',
            },
          ],
        },
        {
          id: '5690c51a-105c-4f0d-867d-96b0f524a5d4',
          name: 'Unhas',
          subCategories: [
            {
              id: '33ecda52-d9e8-4102-a546-5c27884417e9',
              name: 'Mãos',
              numberOfServices: 95,
              rating: 4.2,
              price: 55,
              imageUrl:
                'https://escolamanicure.com/wp-content/uploads/2019/07/como-preparar-unhas-maos.jpg',
            },
          ],
        },
        {
          id: 'cab15ddb-3511-42bc-afe0-f142a1e51b96',
          name: 'Cabelo',
          subCategories: [
            {
              id: '7a470b2b-f435-4f6f-814a-52481ed91be1',
              name: 'Escova Cabelos Curtos',
              numberOfServices: 145,
              rating: 4.9,
              price: 75,
              imageUrl:
                'https://fashionbubbles.com/wp-content/uploads/2023/08/corte-repicado-cabelo-medio-3.jpg',
            },
            {
              id: '555e4dc2-a2eb-48da-9308-c88ae36fa2bd',
              name: 'Escova Cabelos Médios e Longos',
              numberOfServices: 103,
              rating: 4.9,
              price: 115,
              imageUrl:
                'https://i.pinimg.com/originals/54/2e/11/542e11df6fa84dd28a77908a42b05f58.jpg',
            },
            {
              id: 'b780a11e-62f6-4996-97a8-c2c0644777d2',
              name: 'Escova Modelada Cabelos Curtos',
              numberOfServices: 24,
              rating: 4.7,
              price: 172,
              imageUrl:
                'https://fashionbubbles.com/wp-content/uploads/2023/08/corte-repicado-cabelo-medio-3.jpg',
            },
            {
              id: 'e429360d-b185-4706-afc5-a6050df6142e',
              name: 'Escova Modelada Cabelos Médios e Longos',
              numberOfServices: 65,
              rating: 4.9,
              price: 120,
              imageUrl:
                'https://portalzoe.com.br/wp-content/uploads/2022/11/fbf467951784cde941c0b986974deb70.jpg',
            },
          ],
        },
        {
          id: 'f97df176-87df-497e-9c22-aa570d2c6ec7',
          name: 'Depilação Feminina',
          subCategories: [
            {
              id: '6a7e9e78-7829-48a2-adf5-c70205719a26',
              name: 'Virilha',
              numberOfServices: 175,
              rating: 4.8,
              price: 35.55,
              imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG62qiXdaK-KcsskKNSQ7P4m2-LyuLHIKGGg&usqp=CAU',
            },
          ],
        },
        {
          id: '97d7a91b-abc2-4cec-be02-669ae16febe0',
          name: 'Massagem',
          subCategories: [
            {
              id: '831d7dfc-0eaa-4769-bdca-067d20a82181',
              name: 'Massagem Relaxante',
              numberOfServices: 175,
              rating: 4.8,
              price: 35.55,
              imageUrl:
                'https://cdn-bjajj.nitrocdn.com/tvSKaRnCwSUVJysJvptIAqbXFEIdRVbO/assets/images/optimized/rev-dd8e34a/wp-content/uploads/2020/09/massagem-relaxante-1.jpg',
            },
          ],
        },
      ],
    },
  ],
};
