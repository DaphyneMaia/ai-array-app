// src/players.js

const arrPlayers = [
  {
    id: 1,
    firstName: 'Lionel',
    lastName: 'Messi',
    age: 34,
    club: 'Paris Saint-Germain',
    trophies: 34, // This is just a placeholder, update with accurate data
    nationality: 'Argentinian',
    bio:
      'Lionel Messi, widely regarded as one of the greatest footballers of all time, was born on June 24, 1987, in Rosario, Argentina. Messi started his professional career with FC Barcelona, where he spent over 20 years, becoming the club\'s all-time leading scorer and winning numerous domestic and international titles. In 2021, he transferred to Paris Saint-Germain (PSG). Messi is known for his incredible dribbling skills, precise finishing, and vision on the field.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg', // Replace with actual image URL
  },
  {
    id: 2,
    firstName: 'Cristiano',
    lastName: 'Ronaldo',
    age: 36,
    club: 'Manchester United',
    trophies: 32, // This is just a placeholder, update with accurate data
    nationality: 'Portuguese',
    bio:
      'Cristiano Ronaldo, born on February 5, 1985, in Funchal, Madeira, Portugal, is a football icon known for his goal-scoring prowess and athleticism. Ronaldo has had a storied career, playing for top clubs like Manchester United, Real Madrid, and Juventus. In 2021, he made a highly anticipated return to Manchester United. Ronaldo has won numerous individual awards and team trophies throughout his career, solidifying his status as one of the greatest footballers in history.',
    img: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSO9Xd_NJYU1FU2u886CDMp-pX-nffkmg_h0yhAKgLWCltFmAbQnt_nGdpEPgQZMZzw1k_pGxWjlD3U_Yk', // Replace with actual image URL
  },

  {
    id: 3,
    firstName: 'Neymar',
    lastName: 'Jr',
    age: 29,
    club: 'Paris Saint-Germain',
    trophies: 22, // Placeholder, update with accurate data
    nationality: 'Brazilian',
    bio:
      'Neymar Jr, born on February 5, 1992, in Mogi das Cruzes, Brazil, is a dynamic forward known for his flair and skill on the ball. Neymar began his professional career with Santos FC before making a high-profile move to FC Barcelona. He currently plays for Paris Saint-Germain (PSG) and is a key figure for the Brazilian national team. Neymar is celebrated for his creativity, goal-scoring ability, and success in both domestic and international competitions.',
    img: 'https://www.aljazeera.com/wp-content/uploads/2023/09/2023-09-09T030927Z_162449516_UP1EJ9908RPW8_RTRMADP_3_SOCCER-WORLDCUP-BRA-BOL-REPORT-1694250362.jpg?resize=1800%2C1800', // Replace with actual image URL
  },

  {
    id: 4,
    firstName: 'Joshua',
    lastName: 'Kimmich',
    age: 27,
    club: 'Bayern Munich',
    trophies: 19, // Placeholder, update with accurate data
    nationality: 'German',
    bio:
      'Joshua Kimmich, born on February 8, 1995, in Rottweil, Germany, is a versatile footballer known for his intelligence, technical skills, and leadership on the field. Kimmich rose to prominence with RB Leipzig before joining Bayern Munich, where he has become a key player. He is known for his ability to play multiple positions, including midfield and right-back. Kimmich has won numerous domestic and international titles with Bayern Munich and the German national team.',
    img: 'https://img.fcbayern.com/image/upload/t_cms-1x1-seo/v1656614911/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/joshua_kimmich.png', // Replace with actual image URL
  },
  {
    id: 5,
    firstName: 'Ronaldinho',
    lastName: 'Gaucho',
    age: 42,
    club: 'Retired',
    trophies: 21, // Placeholder, update with accurate data
    nationality: 'Brazilian',
    bio:
      'Ronaldinho Gaucho, born on March 21, 1980, in Porto Alegre, Brazil, is a legendary footballer known for his incredible skill, creativity, and infectious smile. Ronaldinho had a stellar career playing for clubs like Barcelona and AC Milan. He won numerous individual awards, including the FIFA World Player of the Year twice. Ronaldinhos style of play left a lasting impact on the world of football, and he is remembered as one of the greatest players of his generation.',
    img: 'https://www.spectator.co.uk/wp-content/uploads/2023/09/GettyImages-56034481.jpg?w=3000', // Replace with actual image URL
  },

  {
    id: 6,
    firstName: 'Zlatan',
    lastName: 'Ibrahimovic',
    age: 40,
    club: 'AC Milan',
    trophies: 32, // Placeholder, update with accurate data
    nationality: 'Swedish',
    bio:
      'Zlatan Ibrahimovic, born on October 3, 1981, in Malmo, Sweden, is a charismatic and prolific striker known for his goal-scoring prowess and confident personality. Ibrahimovic has had an illustrious career playing for top clubs in Europe, including Barcelona, Paris Saint-Germain, and AC Milan. His acrobatic goals and leadership on the field have made him a fan favorite. Even in his 40s, Zlatan continues to be a dominant force in the world of football.',
    img: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltd045c305c46c3052/60db341b63584e0ecae2656b/c3b68f13efb364f65fe222d984a3ef5a74e1c719.jpg?auto=webp&format=pjpg&width=3840&quality=60', // Replace with actual image URL
  },

  {
    id: 7,
    firstName: 'Gerard',
    lastName: 'Piqué',
    age: 35,
    club: 'Barcelona',
    trophies: 29, // Placeholder, update with accurate data
    nationality: 'Spanish',
    bio:
      'Gerard Piqué, born on February 2, 1987, in Barcelona, Spain, is a commanding center-back known for his defensive skills and leadership qualities. Piqué came through the youth ranks at FC Barcelona before moving to Manchester United and later returning to Barcelona. He has been a key part of Barcelonas success, winning numerous domestic and international honors. Piqué is also known for his involvement off the field, including his business ventures and philanthropy.',
    img: 'https://e0.365dm.com/22/11/1600x900/skysports-gerard-pique-barcelona_5953435.jpg?20221103180416https://example.com/pique.jpg', // Replace with actual image URL
  },

  {
    id: 8,
    firstName: 'David',
    lastName: 'Beckham',
    age: 46,
    club: 'Retired',
    trophies: 20, // Placeholder, update with accurate data
    nationality: 'English',
    bio:
      'David Beckham, born on May 2, 1975, in London, England, is a football icon known for his exceptional skill on the field and global influence off it. Beckham played for top clubs like Manchester United, Real Madrid, and LA Galaxy. He was renowned for his precise free-kicks and crosses. Beyond football, Beckham is a fashion icon, businessman, and philanthropist. His impact on popularizing football in the United States and raising the sports profile globally is significant.',
    img: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt3a48501789cdf113/60db790b47339c0fc01c188c/3e947186d512164cf8dbe0987a865dd2b714eea6.png?auto=webp&format=pjpg&width=3840&quality=60', // Replace with actual image URL
  },

  {
    id: 9,
    firstName: 'Karim',
    lastName: 'Benzema',
    age: 34,
    club: 'Real Madrid',
    trophies: 24, // Placeholder, update with accurate data
    nationality: 'French',
    bio:
      'Karim Benzema, born on December 19, 1987, in Lyon, France, is a skillful striker known for his goal-scoring ability and link-up play. Benzema has spent the majority of his career at Real Madrid, where he has been a key figure in the teams success. He is celebrated for his technical skill, vision on the field, and consistent goal-scoring record. Benzema has played a crucial role in Real Madrids victories in domestic and international competitions.',
    img: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcT-2AahFIaLHd4jUzo1XL2HmZevyAzOZw1wj8JEiMaH5YNbx2N3KJWPZzWo9VGCXwD_PztATs6O9mPcpt8', // Replace with actual image URL
  },

  {
    id: 10,
    firstName: 'Sergio',
    lastName: 'Ramos',
    age: 36,
    club: 'Paris Saint-Germain',
    trophies: 26, // Placeholder, update with accurate data
    nationality: 'Spanish',
    bio:
      'Sergio Ramos, born on March 30, 1986, in Camas, Spain, is a legendary defender known for his leadership, toughness, and goal-scoring ability. Ramos spent the majority of his career at Real Madrid, where he became the club captain and won numerous domestic and international titles. In 2021, he joined Paris Saint-Germain (PSG). Ramos is renowned for his clutch performances in critical moments and is considered one of the greatest defenders in the history of football.',
    img: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTqRbw2Hkqr6DWEz3cHVD4IBn9awT_qpBUlIOEuhE0mi1uJymgKJidBq8sSLloGxjovy6k8mTh5-NNLseU', // Replace with actual image URL
  }

];

export default arrPlayers;
  