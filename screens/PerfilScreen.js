import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'
import FotoPerfil from '../components/FotoPerfil';
import Button from '../components/Button';
import * as Firebase from 'firebase'; 

 class PerfilScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  handleSair = () => {
    Firebase.auth().signOut();
    this.props.navigation.navigate('Login')
  }

  render() {
    const { displayName = '', email= '', photoURL = ''} = this.props.Usuario.Dados;
    const sections = [
      { data: [{ value: displayName }], title: 'Nome' },
      { data: [{ value: email }], title: 'E-mail' },
    ];

    return (
      <View style={{flex:1, marginBottom: 5}}>
      <SectionList
        style={styles.container}
        renderItem={this._renderItem}
        renderSectionHeader={this._renderSectionHeader}
        stickySectionHeadersEnabled={true}
        keyExtractor={(item, index) => index}
        ListHeaderComponent={()=>ListHeader(displayName,photoURL,this.handleSair)}
        sections={sections}
      />
      <View style={{alignItems:'center'}}>
      <Button width={0.8}>Estou de viagem!</Button>
      </View>
      </View>
    );
  }

  _renderSectionHeader = ({ section }) => {
    return <SectionHeader title={section.title} />;
  };

  _renderItem = ({ item }) => {
      return (
        <SectionContent>
          <Text style={styles.sectionContentText}>
            {item.value}
          </Text>
        </SectionContent>
      );
    
  };
}

const ListHeader = (nome,url_foto, handdleSair) => {

  return (
    <View style={styles.titleContainer}>
      <View style={styles.titleIconContainer}>
        <FotoPerfil url={url_foto} />
      </View>

      <View style={styles.titleTextContainer}>
        <Text style={styles.nameText} numberOfLines={1}>
          {nome}
        </Text>

        <Text style={styles.Sair} numberOfLines={1} onPress={()=>handdleSair()}>
          Sair
        </Text>
      </View>
    </View>
  );
};

const SectionHeader = ({ title }) => {
  return (
    <View style={styles.sectionHeaderContainer}>
      <Text style={styles.sectionHeaderText}>
        {title}
      </Text>
    </View>
  );
};

const SectionContent = props => {
  return (
    <View style={styles.sectionContentContainer}>
      {props.children}
    </View>
  );
};

const select = state => ({
  Usuario: state.Usuario
})
export default connect(select)(PerfilScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
  },
  titleIconContainer: {
    marginRight: 15,
    paddingTop: 2,
  },
  sectionHeaderContainer: {
    backgroundColor: '#fbfbfb',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ededed',
  },
  sectionHeaderText: {
    fontSize: 14,
  },
  sectionContentContainer: {
    paddingTop: 8,
    paddingBottom: 12,
    paddingHorizontal: 15,
  },
  sectionContentText: {
    color: '#808080',
    fontSize: 14,
  },
  nameText: {
    fontWeight: '600',
    fontSize: 18,
  },
  Sair: {
    color: 'lightblue',
    fontSize: 14,
    backgroundColor: 'transparent',
  },
  descriptionText: {
    fontSize: 14,
    marginTop: 6,
    color: '#4d4d4d',
  },
  colorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorPreview: {
    width: 17,
    height: 17,
    borderRadius: 2,
    marginRight: 6,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
  },
  colorTextContainer: {
    flex: 1,
  },
});
