import React, {useEffect ,useState} from "react";
import { View , Text , FlatList , ActivityIndicator} from 'react-native';

// body ve userId ekle ödev

interface Item {
  id: number;
  title: string;
};

const ItemListApi = () => {
  //apiden gelen veriyi tutmak için state
  const [data ,setData] = useState<Item[]>([]);
  //yükleme durumunu izlemek için state
  const [loading ,setLoading] = useState(true);

  //bileşen yüklendiğinde veriyi çekmek için USEEFFECT kullanıyoruz
  useEffect(() => {
    //veri çekme işlemi
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();
        const formattedData =
          json.map((item: any) => ({
            id:item.id,
            title: item.title,
          }));
        setData(formattedData);
      } catch (error){
        console.error('Veri çekme hatası:' , error);
      } finally {
        //veri çekme işlemi tamamlandıktan sonrra yükleme durumunu kapatıyoruz
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const renderItem = ({item}: {item: Item}) =>
    (
      <View style={{padding: 10}}>
      <Text>{item.id} - {item.title}</Text>
      </View>
    );
  
    return (
      <View style={
        {
          flex:1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {loading ? (
          <ActivityIndicator
          size="large" color="#0000ff"/>
          //yükleme işlemi devam ediyorsa bir indikatör gösteriyoruz
        ) : (
          <FlatList
            data = {data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
        )}

      </View>
    );
};

export default ItemListApi;