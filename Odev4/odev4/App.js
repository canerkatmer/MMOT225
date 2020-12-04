
import React from 'react';
import {SafeAreaView,ScrollView,View,Text,FlatList,TouchableOpacity} from 'react-native';
let marmara = [
{sehir:"İstanbul Plaka:34 Nüfus: 15.519.267"},
{sehir:"Bursa Plaka:16 Nüfus: 3.056.120"},
{sehir:"Yalova  Plaka:77 Nüfus:270.976"},
{sehir:"Çanakkale  Plaka:17 Nüfus: 542.157"},
{sehir:"Kocaeli  Plaka:41 Nüfus: 1.953.035"},
{sehir:"Balıkesir Plaka:10 Nüfus: 1.228.620"},
{sehir:"Bilecik  Plaka:11 Nüfus: 219.427"},
{sehir:"Kırklareli  Plaka:39 Nüfus: 361.836"},
{sehir:"Tekirdağ Plaka:59 Nüfus: 1.055.412"},
{sehir:"Edirne  Plaka:22 Nüfus: 413.903"},
{sehir:"Sakarya  Plaka:54 Nüfus: 1.029.650"}];
let ege = [
{sehir:"Kütahya Plaka:43 Nüfus: 579.257"},
{sehir:"Aydın  Plaka:9 Nüfus: 1.110.972"},
{sehir:"Afyonkarahisar Plaka:3 Nüfus: 729.483"},
{sehir:"Denizli  Plaka:20 Nüfus: 1.037.208"},
{sehir:"Uşak Plaka:64 Nüfus: 370.509"},
{sehir:"Manisa  Plaka:45 Nüfus: 1.440.611"},
{sehir:"Muğla  Plaka:48 Nüfus: 983.142"},
{sehir:"İzmir  Plaka:52 Nüfus: 4.367.251"},];
let icanadolu = [
{sehir:"Ankara Plaka:6 Nüfus: 5.639.076"},
{sehir:"Niğde Plaka:51 Nüfus: 362.861"},
{sehir:"Aksaray Plaka:68 Nüfus: 416.367"},
{sehir:"Nevşehir Plaka:5 Nüfus: 303.010"},
{sehir:"Konya Plaka:43 Nüfus: 2.232.374"},
{sehir:"Kayseri Plaka:38 Nüfus: 1.407.409"},
{sehir:"Eskişehir Plaka:26 Nüfus: 887.475"},
{sehir:"Sivas Plaka:58 Nüfus: 638.956"},
{sehir:"Çankırı Plaka:18 Nüfus: 195.789"},
{sehir:"Yozgat Plaka:66 Nüfus: 421.200"},
{sehir:"Kırıkkale Plaka:71 Nüfus: 283.017"},
{sehir:"Karaman Plaka:70 Nüfus: 253.279"},
{sehir:"Kırşehir Plaka:40 Nüfus: 242.938"},];
let akdeniz = [
{sehir:"Kahramanmaraş Plaka: 46 Nüfus: 1.154.102"},
{sehir:"Osmaniye Plaka: 80 Nüfus: 538.759"},
{sehir:"Mersin Plaka: 33 Nüfus: 1.840.425"},
{sehir:"Hatay Plaka: 31 Nüfus: 1.628.894"},
{sehir:"Burdur Plaka: 15 Nüfus: 270.796"},
{sehir:"Antalya Plaka:7 Nüfus: 2.511.700"},
{sehir:"Adana Plaka:1 Nüfus: 2.237.940"},
{sehir:"Isparta Plaka: 32 Nüfus: 444.914"}];
let doguanadolu = [
{sehir:"Malatya Plaka: 44 Nüfus: 800.165"},
{sehir:"Van Plaka: 65 Nüfus: 1.136.757"},
{sehir:"Elazığ Plaka: 23 Nüfus: 591.098"},
{sehir:"Muş Plaka: 49 Nüfus: 408.809"},
{sehir:"Ağrı Plaka: 4 Nüfus: 536.199"},
{sehir:"Şırnak Plaka: 73 Nüfus: 529.615"},
{sehir:"Hakkari Plaka: 30 Nüfus: 280.991"},
{sehir:"Bitlis Plaka: 13 Nüfus: 348.115"},
{sehir:"Kars Plaka: 36 Nüfus: 285.410"},
{sehir:"Bingöl Plaka: 12 Nüfus: 279.812"},
{sehir:"Erzincan Plaka: 24 Nüfus: 234.747"},
{sehir:"Iğdır Plaka: 76 Nüfus: 199.442"},
{sehir:"Erzurum Plaka: 25 Nüfus: 762.062"},
{sehir:"Tunceli Plaka: 62 Nüfus: 84.660"}];
let guneydoguanadolu = [
{sehir:"Batman Plaka: 72 Nüfus: 608.659"},
{sehir:"Siirt Plaka: 56 Nüfus: 330.280"},
{sehir:"Gaziantep Plaka: 27 Nüfus: 2.069.364"},
{sehir:"Mardin Plaka: 47 Nüfus: 838.778"},
{sehir:"Şanlıurfa Plaka: 63 Nüfus: 2.073.614"},
{sehir:"Adıyaman Plaka: 2 Nüfus: 626.465"},
{sehir:"Diyarbakır Plaka: 21 Nüfus: 1.756.353"},
{sehir:"Kilis Plaka: 79 Nüfus: 142.490"}];
let karadeniz = [
  {sehir:"Rize Plaka: 53 Nüfus: 343.212"},
  {sehir:"Samsun Plaka:55 Nüfus: 1.348.542"},
  {sehir:"Ordu Plaka: 52 Nüfus: 754.198"},
  {sehir:"Çorum Plaka: 19 Nüfus: 530.864"},
  {sehir:"Giresun Plaka: 28 Nüfus: 448.400"},
  {sehir:"Düzce Plaka: 81 Nüfus: 392.166"},
  {sehir:"Kastamonu Plaka: 37 Nüfus: 379.405"},
  {sehir:"Zonguldak Plaka: 67 Nüfus: 596.053"},
  {sehir:"Tokat Plaka: 60 Nüfus: 612.747"},
  {sehir:"Trabzon Plaka:61 Nüfus: 808.974"},
  {sehir:"Bartın Plaka: 74 Nüfus: 198.249"},
  {sehir:"Amasya Plaka: 5 Nüfus: 337.800"},
  {sehir:"Karabük Plaka: 78 Nüfus: 248.458"},
  {sehir:"Bolu Plaka: 14 Nüfus: 316.126"},
  {sehir:"Sinop Plaka: 57 Nüfus: 218.243"},
  {sehir:"Gümüşhane Plaka: 29 Nüfus: 164.521"},
  {sehir:"Artvin Plaka: 8 Nüfus: 170.875"},
  {sehir:"Bayburt Plaka: 69 Nüfus: 84.843"}];
let tut = [];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { a: tut };
  }
  dogubolgesi() { this.setState({a:doguanadolu});}
  egebolgesi() { this.setState({a:ege}); }
  akdenizbolgesi() { this.setState({a:akdeniz});}
  karadenizbolgesi() { this.setState({a:karadeniz});}
  icanadolubolgesi() {this.setState({a:icanadolu});}
  guneydoguanadolubolgesi() { this.setState({a:guneydoguanadolu});}
  marmarabolgesi() { this.setState({a:marmara});}
  render(){
  return (
    <>
      <SafeAreaView>
        <View style={{backgroundColor:'#E7917F'}}>
          <TouchableOpacity onPress={() => this.marmarabolgesi()}>
            <Text style={{backgroundColor:'gray', marginBottom:5, fontSize: 16}}>Marmara Bölgesi</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.dogubolgesi()}>
            <Text style={{backgroundColor:'gray', marginBottom:5, fontSize: 16}}>Doğu Anadolu Bölgesi</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.akdenizbolgesi()}>
            <Text style={{backgroundColor:'gray', marginBottom:5, fontSize: 16}}>Akdeniz Bölgesi</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.icanadolubolgesi()}>
            <Text style={{backgroundColor:'gray', marginBottom:5, fontSize: 16}}>İç Anadolu Bölgesi</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.egebolgesi()}>
            <Text style={{backgroundColor:'gray', marginBottom:5, fontSize: 16}}>Ege Bölgesi</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.karadenizbolgesi()}>
            <Text style={{backgroundColor:'gray', marginBottom:5, fontSize: 16}}>Karadeniz Bölgesi</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.guneydoguanadolubolgesi()}>
            <Text style={{backgroundColor:'gray', marginBottom:5, fontSize: 16}}>Güney Doğu Anadolu Bölgesi</Text>
          </TouchableOpacity>
         
        </View>
        <View style={{backgroundColor:'#E7917F', borderTopWidth:2}}>
          <FlatList
            data={this.state.a}
            renderItem={({item}) => (
              <ScrollView>
              <SafeAreaView>
              <Text style={{ marginBottom:3, fontSize:17}}>{item.sehir}</Text>
              </SafeAreaView>
                
             
              </ScrollView>
              )}
          />
        </View>
      </SafeAreaView>
    </>
    );
  }
}
export default App;