import React,{useState} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import ContatoItem from '../components/ContatoItem';
import ContatoInput from '../components/ContatoInput';
import Medidas from '../Medidas/Medidas'

const TelaComeco =(props)=>{
  const[id, setId]= useState(10);
  const [contatos, setContatos] = useState ([]);
  const[contadorContatos, setContadorContatos] = useState(0);

 
  //para add oque foi digitado
  const adicionarContato=(nome, numero)=>{
    contato=(id, nome, numero);

    setContatos((contatos)=>{
      console.log(contatos);
      setId(id+2);
      setContadorContatos(contadorContatos+1);
      return[...contatos,{key:contadorContatos.toString(),value:contato=(id),value2:
      contato=(nome),value3:contato=(numero)}];
    });
  };
  const removerContato = (keyASerRemovida)=>{
    setContatos(contatos=>{
        return contatos.filter((contato)=>{
        contato.key !== keyASerRemovida
      })
    });
  };
  return (
    <View style={estilos.tela}>
      <Text style={estilos.titulo}>Contatos</Text>
      <ContatoInput onAdicionarContato={adicionarContato}/>
      <FlatList
        data={contatos}/*colecao de contatos*/
        renderItem={/*mapeamento*/
        contato => (/*dado um contato gera uma view*/
        <ContatoItem id={contato.item.value} nome={contato.item.value2} numero={contato.item.value3} 
        onDelete={removerContato}/>
      )}/>
    </View>
  );
}
const estilos = StyleSheet.create({
    tela:{
        flex:Medidas.flexGeral,
        padding:Medidas.telaPadding,
        alignItems:Medidas.alignGeral
    },
    titulo:{
        fontSize:Medidas.tituloFont,
        marginVertical:Medidas.tituloMargin
    }
});

export default TelaComeco;