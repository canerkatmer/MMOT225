/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import NewsItem from './haberler.js';

const App: () => React$Node = () => {
  return (
    <SafeAreaView>
      <View>
          <Text style={styles.anabaslik}>
              Günün Haberleri...
          </Text>
      </View>
    <ScrollView>
      <NewsItem type='Siyaset' title="Türkiye'nin Tahran Büyükelçisi İran Dışişleri Bakanlığına çağrılmıştı" description="İran Dışişleri Bakanlığı, Cumhurbaşkanı Recep Tayyip Erdoğan'ın dün Azerbaycan'ın başkenti Bakü'de okuduğu şiir nedeniyle Türkiye'nin Tahran Büyükelçisi Örs'ü çağırmış ve kendisine sert kınama iletmişti."/>
      <NewsItem type='Siyaset' title="Son Dakika Haberi" description="ABD 'den TÜRKİYE'ye yaptırım kararı.ürkiye’nin S-400’leri teslim almasının ABD Hasımlarına Yaptırım Yoluyla Mücadele Yasası (CAATSA) kapsamında Rusya ile önemli bir işlem olarak kabul edildi." />
      <NewsItem type='Siyaset' title="Karşımızda Susuyorlar Ama..." description="Cumhurbaşkanı Erdoğan, PYD'yi terör örgütü olarak görmediğini açıklayan ABD'lilere tepkisini sürdürdü." />
      <NewsItem type='Spor' title="Fenerbahçe puan kaybetti." description="Fenerbahçe ve Beşiktaş maçında sevinen taraf beşiktaş oldu." />
      <NewsItem type='Spor' title="Rıza Kayaalp Övünç Gecesinde Yerini Aldı" description= "Volkswagen Arena’da düzenlenen gecede dünya şampiyonu güreşçimiz Rıza Kayaalp, ‘Yılın Sporcusu’ kategorisinde birincilik kürsüsüne oturdu." />
      <NewsItem type='Spor' title="Maradona Hayatını Kaybetti" description="Arjantinli futbol efsanesi Diego Armando Maradona Buenos Aires eyaletine bağlı Tigre kentinde, kalp ve akciğer problemi nedeniyle hayatını kaybetti." />
      <NewsItem type='Ekonomi' title="Ticaret Bakanı Pekcan: Esnafa destekler etkinlikle sürecek" description="Ticaret Bakanı Ruhsar Pekcan, Türkiye, geçmişte olduğu gibi, önümüzdeki süreçte de katma değerli ihracat artışı ve yüksek büyüme ile yoluna etkin şekilde devam edecek, küresel ekonominin en dinamik aktörlerinden biri olma özelliğini sürdürecektir" />
      <NewsItem type='Ekonomi' title="Bakan Varank : Fabrikalarımız üretime başladı" description="Sanayi ve Teknoloji Bakanı Mustafa Varank, Sadece ocak-kasım döneminde organize sanayi bölgelerinde 851 yeni fabrika üretime başladı dedi."/>
      <NewsItem type='Ekonomi' title="İthal altın ile sanal büyüme" description="Merkez Bankası eski Başkanı Durmuş Yılmaz, Türkiye İstatistik Kurumu'nun (TÜİK) yurt dışından ithal edilen 22 milyar dolarlık altını ülkeye fabrika yatırımı yapılmış gibi ekonomik büyüme hesabına dahil ettiğini söyledi." />
      <NewsItem type='Sağlık' title="Metabolizmayı bozan bu faktörlere dikkat" description="Metabolizma hızının yaşla birlikte bozulduğuna dikkat çeken Doç. Dr. Mahmut Muzaffer İlhan, Boy, cinsiyet ve kilo da metabolizma hızını belirler. Sağlıklı kilo kaybı için işin matematiği şöyledir; aldığınız kalorinin, bazal metabolizma ve egzersiz ile harcadığınız kaloriden düşük olması gerekiyor. " />
      <NewsItem type='Sağlık' title="Nobel ödüllü Türk bilim insanı Prof. Dr. Aziz Sancar : " description="Prof. Dr. Aziz Sancar, Şimdi Türkiye'de olsaydım kuyruğa girer, Sağlık Bakanlığımızın temin ettiği aşıyı yaptırırdım dedi." />
      <NewsItem type='Sağlık' title="Sosyal Güvenlik Kurumu'ndan SMA açıklaması" description=" Tüm dünyada SMA hastalığının tedavisinde yaygın olarak kullanılan ilaç, Sağlık Bakanlığı'nın yurt dışından getirilebilecek ilaçlar listesinde yer almakta olup; Sosyal Güvenlik Kurumunca yurt dışından özel izinle getirilerek, aracısız ve ücretsiz olarak hastalarımıza ulaştırılmaktadır ifadelerine yer verdi" />
      <NewsItem type='Bilim' title="Bilim insanlarının yeni teorileri şaşırttı!" description="Ayrıca bu yapılar dünyanın en eski şekilli taşlardan inşa edilmiş yapıları. Bazı kaynaklarda yapımda çalışan işçilerin piramitlerin sırrını bildikleri için yapım bittikten sonra öldürülmüşler iddiası da yer alıyor." />
      <NewsItem type='Bilim' title='SpaceX roketi test sırasında patladı' description="Amerikalı girişimci Elon Musk'ın sahip olduğu özel uzay taşımacılık firması 'SpaceX'in, Starship SN8' adlı roket prototipi Teksas'ta yapılan test sırasında infilak etti." />
      <NewsItem type='Bilim' title="İsviçreli Bilim İnsanları: " description="İsviçre'de bilim insanlarının yaptığı bir araştırmada, yeni tip koronavirüsün (Kovid-19) bazı 'sorunlu semptomlarının' risk faktörleri altında olmayan hastalarda bile 6 haftadan fazla sürebileceği belirtildi." />
    </ScrollView>
  
</SafeAreaView>
);
};


const styles = StyleSheet.create({
  anabaslik:{
    fontSize: 40,
    fontWeight: "bold"
  }
});
export default App;