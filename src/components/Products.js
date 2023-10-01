import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useCart } from '../providers/CartContext';

export default function Products({ product }) {
  const { addItemToCart } = useCart();

  const produtos = [ 
    {
      id: 1,
      nome: 'PlayStation 5',
      preco: 4999.99,
      descricao: 'Console de última geração da Sony.',
      imagem: 'https://images.immediate.co.uk/production/volatile/sites/3/2020/08/playstation-5-77d37a0.jpg'
    },
    {
      id: 2,
      nome: 'Xbox Series X',
      preco: 3499.99,
      descricao: 'Console de última geração da Microsoft.',
      imagem: 'https://d1sfzvg6s5tf2e.cloudfront.net/Custom/Content/Products/60/88/6088_video-game-xbox-series-x-1tb-ssd-imp_z1_638213015243956001.jpg',
    },
    {
      id: 3,
      nome: 'The Legend of Zelda: Breath of the Wild',
      preco: 199.99,
      descricao: 'Jogo para Nintendo Switch.',
      imagem: 'https://s2-techtudo.glbimg.com/CL-H-SO2dRxEPkIsR4_7oSNeemY=/0x0:695x390/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/h/M/sa7VT0SkAOwneY4xvVxQ/2016-06-14-the-legend-of-zelda-breath-of-the-wild-e3-2016-titulo.jpg',
    },
    {
      id: 4,
      nome: 'Nintendo Switch',
      preco: 2999.99,
      descricao: 'Console híbrido da Nintendo.',
      imagem: 'https://images.kabum.com.br/produtos/fotos/458721/console-nintendo-switch-modelo-oled-edicao-especial-the-legend-of-zelda-tears-of-the-kingdom-hbgskdaa2_1683315478_gg.jpg',
    },
    {
      id: 5,
      nome: 'FIFA 23',
      preco: 149.99,
      descricao: 'Jogo de futebol para diversas plataformas.',
      imagem: 'https://s2-ge.glbimg.com/6jNp2uDIEzaLGj4VSmlAaW7EHuk=/0x0:1920x1080/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/B/W/xwzOyWTrKOZw7X9l1LPA/kylian-mbappe-gen5-km-crop-social-1920x1080.jpg',
    },
    {
      id: 6,
      nome: 'Cyberpunk 2077',
      preco: 249.99,
      descricao: 'RPG de ação futurista.',
      imagem: 'https://pop.proddigital.com.br/wp-content/uploads/sites/8/2021/09/cyberpunk-2077-1-e1631316363662-696x370.jpg',
    },
    {
      id: 7,
      nome: 'The Last of Us Part II',
      preco: 199.99,
      descricao: 'Jogo de ação e aventura para PS4.',
      imagem: 'https://f.i.uol.com.br/fotografia/2019/11/21/15743725465dd704c22ad3f_1574372546_3x2_lg.jpg',
    },
    {
      id: 8,
      nome: 'Xbox Game Pass Ultimate',
      preco: 39.99,
      descricao: 'Assinatura de jogos para Xbox e PC.',
      imagem: 'https://s2-techtudo.glbimg.com/1I4OAJZAKLUeXh0tQjcx_4NOGzg=/0x0:1275x675/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/B/R/1eP98FSByf1cm9Bm4LFw/xbox-game-pass-ultimate-techtudo.png',
    },
    {
      id: 9,
      nome: 'Nintendo 3DS XL',
      preco: 1499.99,
      descricao: 'Console portátil da Nintendo.',
      imagem: 'https://down-br.img.susercontent.com/file/fc26fcb3bf8b33e679f4502e37d1eaf4',
    },
    {
      id: 10,
      nome: 'Minecraft',
      preco: 29.99,
      descricao: 'Jogo de construção e aventura.',
      imagem: 'https://cienciahoje.org.br/wp-content/uploads/2020/11/C_C-POP_0fe20042_0bb8_4781_82f4_7130f928b021.jpg',
    },
    {
      id: 11,
      nome: 'Assassin\'s Creed Valhalla',
      preco: 199.99,
      descricao: 'Jogo de ação e aventura histórica.',
      imagem: 'https://media.s-bol.com/JKgoQZMV5ZPy/oJ3RQN/1200x675.jpg',
    },
    {
      id: 12,
      nome: 'Nintendo Wii U',
      preco: 999.99,
      descricao: 'Console da Nintendo com tela sensível ao toque.',
      imagem: 'https://i.ebayimg.com/images/g/shEAAOSwOFdjwRTq/s-l1600.jpg',
    },
    {
      id: 13,
      nome: 'Super Mario Odyssey',
      preco: 179.99,
      descricao: 'Jogo de aventura do Mario para Nintendo Switch.',
      imagem: 'https://img.elo7.com.br/product/main/40FD7ED/painel-2x1m-super-mario-odyssey-decoracoes.jpg',
    },
    {
      id: 14,
      nome: 'PlayStation VR2',
      preco: 1499.99,
      descricao: 'Óculos de realidade virtual para PlayStation.',
      imagem: 'https://images.kabum.com.br/produtos/fotos/403846/playstation-vr2-horizon-call-of-the-mountain-1000035017_1670506891_gg.jpg',
    },
    {
      id: 15,
      nome: 'The Witcher 3: Wild Hunt',
      preco: 99.99,
      descricao: 'RPG de mundo aberto com Geralt de Rívia.',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnCvplVgyRkD8AmdStKMi6iVnrMpwuIzqyq623rnfYyR6RTmSnhYwjiqEDxcavnzAIV0c&usqp=CAU',
    },
    {
      id: 16,
      nome: 'Xbox Wireless Controller',
      preco: 199.99,
      descricao: 'Controle sem fio para Xbox.',
      imagem: 'https://m.media-amazon.com/images/I/61beNMz9m2L.__AC_SX300_SY300_QL70_ML2_.jpg',
    },
    {
      id: 17,
      nome: 'Call of Duty: Warzone',
      preco: 0.00,
      descricao: 'Jogo gratuito de battle royale.',
      imagem: 'https://i.ytimg.com/vi/LgW-CzTgE70/maxresdefault.jpg',
    },
    {
      id: 18,
      nome: 'Nintendo Switch Lite',
      preco: 1999.99,
      descricao: 'Versão mais compacta do Nintendo Switch.',
      imagem: 'https://m.media-amazon.com/images/I/61X2tTrtDSL.__AC_SY300_SX300_QL70_ML2_.jpg',
    },
    {
      id: 19,
      nome: 'Minecraft Dungeons',
      preco: 49.99,
      descricao: 'Jogo de ação e aventura baseado em Minecraft.',
      imagem: 'https://www.showmetech.com.br/wp-content/uploads//2020/11/H2x1_NSwitchDS_MinecraftDungeons.jpg',
    },
    {
      id: 20,
      nome: 'PlayStation Now',
      preco: 39.99,
      descricao: 'Assinatura de streaming de jogos para PlayStation.',
      imagem: 'https://s2-techtudo.glbimg.com/clXkOf5O8HLUdQ-NiIvzIA6I_MQ=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2018/S/u/ic8qBIS86rwup071Rhew/playstation-now-techtudo.jpeg',
    },
  ];

  const handleAddToCart = (product) => {
    if (product) {
      addItemToCart(product);
    } else {
      console.error('Erro: produto não definido ao adicionar ao carrinho.');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {<><Image source={{ uri: item.imagem }} style={styles.cardImage} /><Text style={styles.cardTitle}>{item.nome}</Text><Text style={styles.cardPrice}>Preço: R${item.preco.toFixed(2)}</Text><Text style={styles.cardDescription}>{item.descricao}</Text></>}
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={() => handleAddToCart(item)}
      >
        <Text style={styles.addToCartButtonText}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
  

  return (
    <View>
      <FlatList
        data={produtos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
      marginTop: 10,
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 16,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 2,
  },
  cardImage: {
      width: '100%',
      height: 220,
      resizeMode: 'cover',
      borderRadius: 10,
      marginBottom: 10,
  },
  cardTitle: {
      fontSize: 20,
      fontWeight: 'bold',
  },
  cardPrice: {
      fontSize: 16,
      color: '#333',
  },
  cardDescription: {
      fontSize: 14,
      color: '#666',
  },
  addToCartButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  addToCartButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
