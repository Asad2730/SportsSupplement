export const colors = {
    primary_color:'#99999b',
    secondary_color:'#191919',
    secondary_light:'#000000',
    card_back_ground_1:'#ae8e65',
    card_back_ground_2:'#373737',
    price_txt:'#425b66'
}

export const getRandomColor = (index) => {
    return index % 2 === 0 ? colors.card_back_ground_1 :  colors.card_back_ground_2;
  };