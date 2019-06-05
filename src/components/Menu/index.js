import React from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';

import { Animated, TouchableOpacity, Dimensions, Image } from 'react-native'
import { Icon } from 'expo';
import ItemMenu from './Item';


const { height: ScreenHeight } = Dimensions.get('window');

class Menu extends React.Component {
    state = {
        top: new Animated.Value(ScreenHeight  + 100 )
    }

    componentDidMount(){
        this.toggleMenu();
    }
    componentDidUpdate(prv){
        this.toggleMenu();
    }


    toggleMenu = () => {
        const { MenuOpen } = this.props;
        Animated.spring(this.state.top, {
            toValue: !MenuOpen ? ScreenHeight + 100 : 0
        }).start();
    }
    render() {
        const { top } = this.state;
        const { Avatar, nome,fecharMenu } = this.props;
        return (
            <ContainerAnimated style={{ top }}>
                <Cover>
                    <Imagem source={require('../../../assets/sunrise-traveling.jpg')}/>
                    <Titulo>Wanderson</Titulo>
                    <Email>anderson_alar@outlook.com</Email>
                </Cover>
                <TouchableOpacity onPress={fecharMenu} style={{ position: 'absolute', top: 120, left: '50%', marginLeft: -  22, zIndex:1 }}>
                    <Fechar>
                        <Icon.Ionicons
                            name='ios-close'
                            size={40}
                            color='#546bfb'
                        />
                    </Fechar>
                </TouchableOpacity>
                <Conteudo>
                    <ItemMenu icone='ios-settings' titulo='Conta' texto='Configuração'/>
                    <ItemMenu icone='ios-card' titulo='Pagamento' texto='Metodo de pagamento'/>
                    <ItemMenu icone='ios-exit' titulo='Log out' texto='Até mais!'/>
                </Conteudo>
            </ContainerAnimated>
        )
    }
}

const Select = state => ({
MenuOpen: state.MenuOpen
});

const mapDispacthToProps = dispatch => ({
    fecharMenu:()=> dispatch({type:'FECHAR_MENU'})
})

export default connect(Select,mapDispacthToProps)(Menu);

const Container = styled.View`
position:absolute;
background:white;
width:100%;
height:100%;
z-index:100;
box-shadow: 0 5px 10px rgba(0,0,0,0.15);
`
const ContainerAnimated = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
height:142px;
background:black;
justify-content:center;
align-items:center;
`
const Conteudo = styled.View`
height:${ScreenHeight + 100};
background:#f0f3f5;
padding:15px;
`
const Fechar = styled.View`
width:44px;
height:44px;
border-radius: 22px;
background:white;
justify-content:center;
align-items:center;
`
const Imagem = styled.Image`
position:absolute;
width:100%;
height:100%;
`
const Titulo = styled.Text`
color:white;
font-size:24px;
font-weight:600;
`
const Email = styled.Text`
font-size:13px;
color: rgba(255,255,255,0.5);
margin-top:8px;
`